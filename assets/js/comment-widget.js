const WORKER_URL = "https://pearlite-guestbook.pearlitegates.workers.dev";
const TURNSTILE_SITEKEY = "0x4AAAAAAEC5JJtgoJhiZb3f";

const s_stylePath = "assets/css/comment-widget.css";
const s_nameId = "541729663";
const s_websiteId = "1878035449";
const s_textId = "1018826319";
const s_backgroundId = "460564639";
const s_pageId = "104993434";
const s_replyId = "1596073692";
const s_sheetId = "1Xk4U47CSy4VVDDWt3EdByKFe4yTnYe4eZP4OFs2syPU";

const s_timezone = -7;
const s_daylightSavings = true;
const s_dstStart = ["March", "Sunday", 2, 2];
const s_dstEnd = ["November", "Sunday", 1, 2];

const s_commentsPerPage = 24;
const s_maxLength = 500;
const s_maxLengthName = 16;
const s_commentsOpen = true;
const s_longTimestamp = false;
let s_includeUrlParameters = false;
const s_fixRarebitIndexPage = false;

const s_wordFilterOn = false;
const s_filterReplacement = "****";
const s_filteredWords = ["heck", "dang"];

const s_widgetTitle = "";
const s_submitButtonLabel = "File drawing";
const s_loadingText = "Pulling sheets from the flat file...";
const s_noCommentsText = "The register is empty. File the first drawing.";
const s_closedCommentsText = "The register is closed temporarily.";
const s_replyButtonText = "+ redline";
const s_replyingText = "Redlining";
const s_dwgPrefix = "PG-GB";
const s_redlinePrefix = "RL";
const s_leftButtonText = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="20" aria-hidden="true">
  <path d="M7.8284 13.0001L13.1924 18.3641L11.7782 19.7783L4 12.0001L11.7782 4.22192L13.1924 5.63614L7.8284 11.0001H20V13.0001H7.8284Z"/>
</svg>`;
const s_rightButtonText = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="20" aria-hidden="true">
  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"/>
</svg>`;

const PAPERS = [
  { id: "blueprint", label: "Blueprint", inkIndex: 0 },
  { id: "diazo", label: "Diazo print", inkIndex: 1 },
  { id: "sepia", label: "Copper print", inkIndex: 1 },
  { id: "vellum", label: "Gridded vellum", inkIndex: 1 },
];

const INKS = [
  { color: "#e9eef3", label: "Pale steel" },
  { color: "#3e474f", label: "Graphite" },
  { color: "#a3574d", label: "Redline" },
  { color: "#526675", label: "Steel blue" },
  { color: "#b77d6d", label: "Copper" },
];

function padDwg(n) {
  return String(n).padStart(4, "0");
}

function paperFromBackground(bg) {
  let found = PAPERS[0];
  (bg || "").split(";").forEach((part) => {
    const [k, v] = part.split(":");
    if (k === "paper") {
      const match = PAPERS.find((p) => p.id === v);
      if (match) found = match;
    } else if (k === "img") {
      const n = parseInt((v || "").replace("bc_", ""), 10);
      if (!isNaN(n)) found = PAPERS[(n - 1) % PAPERS.length];
    }
  });
  return found;
}

function safeHttpUrl(raw) {
  try {
    const url = new URL(raw);
    if (url.protocol === "http:" || url.protocol === "https:") return url;
  } catch (e) {}
  return null;
}

function buildSheetHtml(opts) {
  return `
        <div class="sheet-zones sheet-zones--top" aria-hidden="true"><span>4</span><span>3</span><span>2</span><span>1</span></div>
        <div class="sheet-zones sheet-zones--left" aria-hidden="true"><span>C</span><span>B</span><span>A</span></div>
        <div class="sheet-zones sheet-zones--right" aria-hidden="true"><span>C</span><span>B</span><span>A</span></div>
        <div class="sheet-inner">
            ${opts.redlineBar || ""}
            <div class="sheet-field card-body">${opts.fieldHtml || ""}</div>
            <div class="sheet-titleblock">
                <div class="tb-cell tb-cell--name">
                    <span class="tb-label">Drawn by</span>
                    ${opts.nameHtml || ""}
                    ${opts.websiteHtml || ""}
                </div>
                <div class="tb-cell">
                    <span class="tb-label">Date</span>
                    <span class="tb-value c-timestamp">${opts.timestamp || ""}</span>
                </div>
                <div class="tb-cell">
                    <span class="tb-label">Dwg no.</span>
                    <span class="tb-value tb-mono">${opts.dwgNo || ""}</span>
                </div>
                <div class="tb-cell tb-cell--rev">
                    <span class="tb-label">Rev</span>
                    <span class="tb-value">${opts.rev || "A"}</span>
                </div>
            </div>
        </div>
        ${opts.replyBtnHtml || ""}
    `;
}

if (s_fixRarebitIndexPage) {
  s_includeUrlParameters = true;
}

const c_cssLink = document.createElement("link");
c_cssLink.type = "text/css";
c_cssLink.rel = "stylesheet";
c_cssLink.href = s_stylePath;
document.getElementsByTagName("head")[0].appendChild(c_cssLink);

const v_mainHtml = `
    <div id="c_inputDiv">
        <form id="c_form"></form>
    </div>
    <div id="c_container">${s_loadingText}</div>
`;

const v_formHtml = `
    <h2 id="c_widgetTitle">${s_widgetTitle}</h2>

    <textarea style="display:none" name="entry.${s_textId}" id="entry.${s_textId}" maxlength="${s_maxLength}"></textarea>

    <div class="c-inputWrapper">
        <label class="c-label" for="entry.${s_nameId}">Drawn by</label>
        <input class="c-input c-nameInput" name="entry.${s_nameId}" id="entry.${s_nameId}" type="text" maxlength="${s_maxLengthName}" required placeholder="Your name" autocomplete="name">
    </div>

    <div class="c-inputWrapper">
        <label class="c-label" for="entry.${s_websiteId}">Ref. link</label>
        <input class="c-input c-websiteInput" name="entry.${s_websiteId}" id="entry.${s_websiteId}" type="url" pattern="https://.*" placeholder="Your site (optional)">
    </div>

    <div class="cf-turnstile" data-sitekey="${TURNSTILE_SITEKEY}" data-callback="onTurnstileSuccess" data-expired-callback="onTurnstileExpired" data-error-callback="onTurnstileError"></div>

    <div id="c_submitError" style="display:none"></div>

    <div class="controls">
        <input id="c_submitButton" name="c_submitButton" type="submit" value="${s_submitButtonLabel}" disabled>
    </div>
`;

document.getElementById("c_widget").innerHTML = v_mainHtml;
const c_form = document.getElementById("c_form");
if (s_commentsOpen) {
  c_form.innerHTML = v_formHtml;
} else {
  c_form.innerHTML = `<p>${s_closedCommentsText}</p>`;
}

const c_container = document.getElementById("c_container");
let v_pageNum = 1;
let v_amountOfPages = 1;
let v_commentMax = 1;
let v_commentMin = 1;

let v_filteredWords;
if (s_wordFilterOn) {
  v_filteredWords = s_filteredWords.join("|");
  v_filteredWords = new RegExp(String.raw`\b(${v_filteredWords})\b`, "ig");
}

let c_submitButton;
if (s_commentsOpen) {
  c_submitButton = document.getElementById("c_submitButton");
} else {
  c_submitButton = document.createElement("button");
}

let g_turnstileToken = "";

function clearTurnstileStatusMessage() {
  const errEl = document.getElementById("c_submitError");
  if (errEl) {
    errEl.style.display = "none";
    errEl.textContent = "";
  }
}
function showTurnstileStatusMessage(msg) {
  const errEl = document.getElementById("c_submitError");
  if (!errEl) return;
  errEl.textContent = msg;
  errEl.style.display = "block";
  errEl.style.cssText += [
    "font-family:var(--ff-sans)",
    "font-size: var(--fs-sm)",
    "color:var(--redline)",
    "margin:.4rem 0 0",
  ].join(";");
}

window.onTurnstileSuccess = function (token) {
  g_turnstileToken = token;
  clearTurnstileStatusMessage();
  if (typeof checkSubmit === "function") checkSubmit();
};
window.onTurnstileExpired = function () {
  g_turnstileToken = "";
  if (typeof checkSubmit === "function") checkSubmit();
};
window.onTurnstileError = function () {
  g_turnstileToken = "";
  showTurnstileStatusMessage(
    "Verification failed to load. Try reloading, or disable an ad/content blocker for this site.",
  );
  if (typeof checkSubmit === "function") checkSubmit();
};
function resetTurnstile() {
  g_turnstileToken = "";
  if (window.turnstile && typeof window.turnstile.reset === "function") {
    window.turnstile.reset();
  }
}

setTimeout(() => {
  if (!g_turnstileToken) {
    showTurnstileStatusMessage(
      "Verification didn't load. Try reloading the page, opening this link in your phone's regular browser instead of an app's built-in browser, or disabling an ad/content blocker for this site.",
    );
  }
}, 20000);

let v_pagePath = window.location.pathname;
if (s_includeUrlParameters) {
  v_pagePath += window.location.search;
}
if (s_fixRarebitIndexPage && v_pagePath == "/") {
  v_pagePath = "/?pg=1";
}
const c_pageInput = document.createElement("input");
c_pageInput.value = v_pagePath;
c_pageInput.type = "text";
c_pageInput.style.display = "none";
c_pageInput.id = "entry." + s_pageId;
c_pageInput.name = c_pageInput.id;
c_form.appendChild(c_pageInput);

let c_replyingText = document.createElement("span");
c_replyingText.style.display = "none";
c_replyingText.id = "c_replyingText";
const c_textWrapper =
  document.getElementById("c_textWrapper") ||
  c_form.querySelector(".c-inputWrapper");
if (c_textWrapper)
  c_textWrapper.insertBefore(c_replyingText, c_textWrapper.firstChild);

let c_replyInput = document.createElement("input");
c_replyInput.type = "text";
c_replyInput.style.display = "none";
c_replyInput.id = "entry." + s_replyId;
c_replyInput.name = c_replyInput.id;
c_form.appendChild(c_replyInput);
c_replyInput = document.getElementById("entry." + s_replyId);

const c_backgroundInput = document.createElement("input");
c_backgroundInput.type = "text";
c_backgroundInput.style.display = "none";
c_backgroundInput.id = "entry." + s_backgroundId;
c_backgroundInput.name = c_backgroundInput.id;
c_backgroundInput.value = "paper:" + PAPERS[0].id;
c_form.appendChild(c_backgroundInput);

const waitForCardForm = setInterval(() => {
  const bgInput = document.getElementById("entry." + s_backgroundId);
  const formReady = document.getElementById("entry." + s_nameId);
  if (!bgInput || !formReady) return;
  clearInterval(waitForCardForm);

  let activePaper = PAPERS[0];
  let drawMode = false;
  let hasContent = false;
  let drawColor = INKS[PAPERS[0].inkIndex].color;
  let drawSize = 4;
  let isDrawing = false;
  let lastX = 0,
    lastY = 0;
  let drawCanvas, drawCtx;

  const textEl = document.getElementById("entry." + s_textId);
  const nameEl = document.getElementById("entry." + s_nameId);
  const websiteEl = document.getElementById("entry." + s_websiteId);
  const inputDiv = document.getElementById("c_inputDiv");

  const toolbar = document.createElement("div");
  toolbar.id = "card-toolbar";

  const modeTabs = document.createElement("div");
  modeTabs.className = "card-mode-tabs";
  const tabWrite = document.createElement("button");
  tabWrite.type = "button";
  tabWrite.className = "card-mode-tab active";
  tabWrite.textContent = "Annotate";
  const tabDraw = document.createElement("button");
  tabDraw.type = "button";
  tabDraw.className = "card-mode-tab";
  tabDraw.textContent = "Draft";
  modeTabs.appendChild(tabWrite);
  modeTabs.appendChild(tabDraw);
  toolbar.appendChild(modeTabs);

  const paperGroup = document.createElement("div");
  paperGroup.className = "paper-group";
  paperGroup.setAttribute("role", "group");
  paperGroup.setAttribute("aria-label", "Paper stock");
  const paperLabel = document.createElement("span");
  paperLabel.className = "c-label";
  paperLabel.textContent = "Paper";
  paperGroup.appendChild(paperLabel);

  const paperSwatches = [];

  toolbar.appendChild(paperGroup);
  inputDiv.appendChild(toolbar);

  const drawToolsEl = document.createElement("div");
  drawToolsEl.className = "card-draw-tools";

  const swatches = [];
  function selectInk(i) {
    swatches.forEach((s, j) => s.classList.toggle("active", j === i));
    drawColor = INKS[i].color;
    if (drawCtx) drawCtx.globalCompositeOperation = "source-over";
  }
  INKS.forEach((c, i) => {
    const sw = document.createElement("button");
    sw.type = "button";
    sw.className =
      "draw-color-swatch" + (i === activePaper.inkIndex ? " active" : "");
    sw.style.background = c.color;
    sw.title = c.label;
    sw.setAttribute("aria-label", c.label + " ink");
    sw.addEventListener("click", () => selectInk(i));
    swatches.push(sw);
    drawToolsEl.appendChild(sw);
  });

  const div1 = document.createElement("span");
  div1.className = "draw-divider";
  drawToolsEl.appendChild(div1);

  const sizes = [
    { px: 2, d: 4 },
    { px: 4, d: 7 },
    { px: 8, d: 11 },
  ];
  const sizeBtns = [];
  sizes.forEach((s, i) => {
    const sb = document.createElement("button");
    sb.type = "button";
    sb.className = "draw-size-btn" + (i === 1 ? " active" : "");
    sb.title = "Line weight";
    const dot = document.createElement("span");
    dot.className = "draw-size-dot";
    dot.style.width = s.d + "px";
    dot.style.height = s.d + "px";
    sb.appendChild(dot);
    sb.addEventListener("click", () => {
      sizeBtns.forEach((b) => b.classList.remove("active"));
      sb.classList.add("active");
      drawSize = s.px;
      if (drawCtx) drawCtx.globalCompositeOperation = "source-over";
    });
    sizeBtns.push(sb);
    drawToolsEl.appendChild(sb);
  });

  const div2 = document.createElement("span");
  div2.className = "draw-divider";
  drawToolsEl.appendChild(div2);

  const eraserBtn = document.createElement("button");
  eraserBtn.type = "button";
  eraserBtn.className = "draw-clear-btn";
  eraserBtn.textContent = "Eraser";
  eraserBtn.addEventListener("click", () => {
    if (drawCtx) drawCtx.globalCompositeOperation = "destination-out";
    swatches.forEach((s) => s.classList.remove("active"));
  });
  drawToolsEl.appendChild(eraserBtn);

  const clearBtn = document.createElement("button");
  clearBtn.type = "button";
  clearBtn.className = "draw-clear-btn";
  clearBtn.textContent = "Start over";
  clearBtn.addEventListener("click", () => {
    if (drawCtx) {
      drawCtx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
      drawCtx.globalCompositeOperation = "source-over";
    }
    hasContent = false;
    selectInk(activePaper.inkIndex);
    checkSubmit();
  });
  drawToolsEl.appendChild(clearBtn);
  inputDiv.appendChild(drawToolsEl);

  const previewCard = document.createElement("div");
  previewCard.className = "c-comment";
  previewCard.id = "_preview-card";
  previewCard.dataset.paper = PAPERS[0].id;

  const todayStr = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  previewCard.innerHTML = buildSheetHtml({
    fieldHtml: "",
    nameHtml: `<p class="card-name ph" id="_pv-name">your name</p>`,
    websiteHtml: `<span class="tb-sub" id="_pv-website" style="display:none"></span>`,
    timestamp: todayStr,
    dwgNo: s_dwgPrefix + "-····",
    rev: "A",
  });

  const cardBody = previewCard.querySelector(".sheet-field");

  const writeOverlay = document.createElement("div");
  writeOverlay.id = "card-write-overlay";
  writeOverlay.className = "card-write-overlay";
  writeOverlay.contentEditable = "true";
  writeOverlay.setAttribute(
    "data-placeholder",
    "Add your annotations to the sheet...",
  );
  writeOverlay.setAttribute("aria-label", "Message");
  cardBody.appendChild(writeOverlay);

  drawCanvas = document.createElement("canvas");
  drawCanvas.className = "card-draw-canvas";
  cardBody.appendChild(drawCanvas);

  const previewCol = document.createElement("div");
  previewCol.id = "badge-preview-col";
  previewCol.appendChild(previewCard);

  const caption = document.createElement("div");
  caption.className = "sheet-caption";
  caption.id = "sheet-caption";
  previewCol.appendChild(caption);

  inputDiv.appendChild(previewCol);

  function selectPaper(p) {
    activePaper = p;
    bgInput.value = "paper:" + p.id;
    previewCard.dataset.paper = p.id;
    paperSwatches.forEach((sw) =>
      sw.classList.toggle("active", sw.dataset.paper === p.id),
    );
    caption.textContent = "sheet 1 of 1";
    selectInk(p.inkIndex);
  }

  PAPERS.forEach((p) => {
    const sw = document.createElement("button");
    sw.type = "button";
    sw.className = "paper-swatch";
    sw.dataset.paper = p.id;
    sw.title = p.label;
    sw.setAttribute("aria-label", p.label);
    sw.addEventListener("click", () => selectPaper(p));
    paperSwatches.push(sw);
    paperGroup.appendChild(sw);
  });
  selectPaper(PAPERS[0]);

  const controlsEl = c_form.querySelector(".controls");
  if (controlsEl) {
    const submitEl = controlsEl.querySelector('[type="submit"]');
    if (submitEl) submitEl.setAttribute("form", "c_form");
    inputDiv.appendChild(controlsEl);
  }

  function initCanvas() {
    const rect = cardBody.getBoundingClientRect();
    drawCanvas.width = rect.width || 600;
    drawCanvas.height = rect.height || 240;
    drawCtx = drawCanvas.getContext("2d");
    drawCtx.lineCap = "round";
    drawCtx.lineJoin = "round";
  }
  function getPos(e) {
    const rect = drawCanvas.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - rect.left) * (drawCanvas.width / rect.width),
      y: (src.clientY - rect.top) * (drawCanvas.height / rect.height),
    };
  }
  function startDraw(e) {
    e.preventDefault();
    isDrawing = true;
    const p = getPos(e);
    lastX = p.x;
    lastY = p.y;
  }
  function doDraw(e) {
    e.preventDefault();
    if (!isDrawing || !drawCtx) return;
    const p = getPos(e);
    drawCtx.beginPath();
    drawCtx.moveTo(lastX, lastY);
    drawCtx.lineTo(p.x, p.y);
    drawCtx.strokeStyle =
      drawCtx.globalCompositeOperation === "destination-out"
        ? "rgba(0,0,0,1)"
        : drawColor;
    drawCtx.lineWidth = drawSize;
    drawCtx.stroke();
    lastX = p.x;
    lastY = p.y;
    hasContent = true;
    checkSubmit();
  }
  function endDraw() {
    isDrawing = false;
  }
  drawCanvas.addEventListener("mousedown", startDraw);
  drawCanvas.addEventListener("mousemove", doDraw);
  drawCanvas.addEventListener("mouseup", endDraw);
  drawCanvas.addEventListener("mouseleave", endDraw);
  drawCanvas.addEventListener("touchstart", startDraw, { passive: false });
  drawCanvas.addEventListener("touchmove", doDraw, { passive: false });
  drawCanvas.addEventListener("touchend", endDraw);

  writeOverlay.addEventListener("input", () => {
    hasContent = writeOverlay.innerText.trim().length > 0;
    checkSubmit();
  });

  function setWriteMode() {
    drawMode = false;
    tabWrite.classList.add("active");
    tabDraw.classList.remove("active");
    writeOverlay.style.display = "";
    drawCanvas.classList.remove("visible");
    drawToolsEl.classList.remove("visible");
    hasContent = writeOverlay.innerText.trim().length > 0;
    checkSubmit();
  }
  function setDrawMode() {
    drawMode = true;
    tabDraw.classList.add("active");
    tabWrite.classList.remove("active");
    writeOverlay.style.display = "none";
    drawCanvas.classList.add("visible");
    drawToolsEl.classList.add("visible");
    if (!drawCtx) initCanvas();
    hasContent = false;
    checkSubmit();
  }
  tabWrite.addEventListener("click", setWriteMode);
  tabDraw.addEventListener("click", setDrawMode);

  c_form.addEventListener(
    "submit",
    () => {
      if (textEl) {
        if (drawMode) {
          if (drawCtx) drawCtx.globalCompositeOperation = "source-over";
          textEl.value = drawCanvas.toDataURL("image/png");
        } else {
          textEl.value = writeOverlay.innerText.trim();
        }
      }
    },
    true,
  );

  c_form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleFormSubmit();
  });

  function showSubmitError(message) {
    const errEl = document.getElementById("c_submitError");
    if (!errEl) return;
    errEl.textContent = message;
    errEl.style.display = "block";
    errEl.style.cssText += [
      "font-family:var(--ff-sans)",
      "font-size: var(--fs-sm)",
      "color:var(--redline)",
      "margin:.4rem 0 0",
    ].join(";");
  }
  function clearSubmitError() {
    const errEl = document.getElementById("c_submitError");
    if (errEl) {
      errEl.style.display = "none";
      errEl.textContent = "";
    }
  }

  async function handleFormSubmit() {
    clearSubmitError();
    c_submitButton.disabled = true;

    const payload = {
      name: (nameEl.value || "").trim(),
      website: (websiteEl.value || "").trim(),
      text: textEl.value || "",
      page: c_pageInput.value || "",
      reply: c_replyInput.value || "",
      background: bgInput.value || "paper:" + PAPERS[0].id,
      turnstileToken: g_turnstileToken,
    };

    if (!payload.name || !payload.text) {
      showSubmitError("Fill in your name and a message first.");
      c_submitButton.disabled = false;
      return;
    }
    if (!payload.turnstileToken) {
      showSubmitError("Verification didn't complete. Try again.");
      c_submitButton.disabled = false;
      return;
    }

    try {
      const resp = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await resp.json().catch(() => ({}));

      if (!resp.ok || !result.ok) {
        showSubmitError(
          result.error === "too many submissions, slow down"
            ? "Slow down a little. Try again shortly."
            : result.error === "captcha failed"
              ? "Verification failed. Try again."
              : "Couldn't file the drawing. Try again.",
        );
        resetTurnstile();
        c_submitButton.disabled = false;
        return;
      }

      resetTurnstile();
      onSubmitSuccess();
    } catch (e) {
      showSubmitError("Couldn't reach the front office. Try again.");
      resetTurnstile();
      c_submitButton.disabled = false;
    }
  }

  function updateIdentity() {
    const pName = document.getElementById("_pv-name");
    const pWebsite = document.getElementById("_pv-website");
    const nameVal = (nameEl || {}).value || "";
    const websiteVal = (websiteEl || {}).value || "";
    if (pName) {
      if (nameVal.trim()) {
        pName.textContent = nameVal.trim();
        pName.classList.remove("ph");
      } else {
        pName.textContent = "your name";
        pName.classList.add("ph");
      }
    }
    if (pWebsite) {
      if (websiteVal.trim()) {
        try {
          pWebsite.textContent = new URL(websiteVal.trim()).hostname;
        } catch (e) {
          pWebsite.textContent = websiteVal.trim();
        }
        pWebsite.style.display = "block";
      } else {
        pWebsite.style.display = "none";
      }
    }
  }

  if (nameEl)
    nameEl.addEventListener("input", () => {
      updateIdentity();
      checkSubmit();
    });
  if (websiteEl) websiteEl.addEventListener("input", updateIdentity);

  function checkSubmit() {
    const n = (nameEl || {}).value || "";
    if (c_submitButton)
      c_submitButton.disabled = !(n.trim() && hasContent && g_turnstileToken);
  }
}, 100);

const CACHE_KEY = "pg_register_" + s_sheetId + "_" + v_pagePath;

const cache = {
  read() {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },
  write(comments) {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(comments));
    } catch (e) {}
  },
};

let g_hasPainted = false;

function onSubmitSuccess() {
  const successMsg = document.createElement("p");
  successMsg.id = "c_successMsg";
  successMsg.textContent =
    "✓ Drawing filed. It will appear in the register once reviewed.";
  successMsg.style.cssText = [
    "font-family:var(--ff-sans)",
    "font-size: var(--fs-sm)",
    "color:var(--verdigris)",
    "border:1px solid var(--verdigris)",
    "padding:8px 20px 7px",
    "text-align:center",
    "margin:.9rem auto 0",
    "width:fit-content",
    "box-sizing:border-box",
  ].join(";");
  const form = document.getElementById("c_form");
  if (form && !document.getElementById("c_successMsg")) {
    form.appendChild(successMsg);
    setTimeout(() => successMsg.remove(), 6000);
  }

  getComments();
}

function getComments() {
  c_submitButton.disabled = true;
  c_replyingText.style.display = "none";
  c_replyInput.value = "";

  if (s_commentsOpen) {
    const nameEl = document.getElementById("entry." + s_nameId);
    const webEl = document.getElementById("entry." + s_websiteId);
    const textEl = document.getElementById("entry." + s_textId);
    if (nameEl) nameEl.value = "";
    if (webEl) webEl.value = "";
    if (textEl) textEl.value = "";

    const writeOverlayEl = document.getElementById("card-write-overlay");
    if (writeOverlayEl) writeOverlayEl.innerText = "";
    const canvasEl = document.querySelector(".card-draw-canvas");
    if (canvasEl) {
      const ctx = canvasEl.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    }

    const pvName = document.getElementById("_pv-name");
    if (pvName) {
      pvName.textContent = "your name";
      pvName.classList.add("ph");
    }
    const pvWeb = document.getElementById("_pv-website");
    if (pvWeb) {
      pvWeb.textContent = "";
      pvWeb.style.display = "none";
    }
  }

  const cached = cache.read();
  if (cached && cached.length) {
    displayComments(cached.map((o) => Object.assign({}, o)));
  }

  const url = `https://docs.google.com/spreadsheets/d/${s_sheetId}/gviz/tq?`;
  getSheet(url)
    .then((result) => {
      const json = JSON.parse(
        result
          .split("\n")[1]
          .replace(/google.visualization.Query.setResponse\(|\);/g, ""),
      );
      const isPage = (col) => col.label == "Page";
      let pageIdx = json.table.cols.findIndex(isPage);

      let comments = [];
      if (json.table.parsedNumHeaders > 0) {
        for (let r = 0; r < json.table.rows.length; r++) {
          let val1 = json.table.rows[r].c[pageIdx]
            ? json.table.rows[r].c[pageIdx].v
            : "";
          if (val1 == v_pagePath) {
            let comment = {};
            for (let c = 0; c < json.table.cols.length; c++) {
              comment[json.table.cols[c].label] = json.table.rows[r].c[c]
                ? json.table.rows[r].c[c].v
                : "";
            }
            comment.Timestamp2 = json.table.rows[r].c[0].f;
            comments.push(comment);
          }
        }
      }

      if (comments.length == 0 || Object.keys(comments[0]).length < 2) {
        if (!cached || !cached.length) c_container.innerHTML = s_noCommentsText;
      } else {
        cache.write(comments);
        displayComments(comments);
      }
      c_submitButton.disabled = false;
    })
    .catch(() => {
      if (!cached || !cached.length) {
        c_container.textContent = "Couldn't reach the flat file. ";
        const retry = document.createElement("button");
        retry.type = "button";
        retry.className = "c-paginationButton";
        retry.style.textDecoration = "underline";
        retry.textContent = "Try again";
        retry.addEventListener("click", getComments);
        c_container.appendChild(retry);
      }
      c_submitButton.disabled = false;
    });
}

function getSheet(url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject("Could not find Google Sheet");
        } else {
          response.text().then((data) => {
            if (!data) reject("Invalid data");
            resolve(data);
          });
        }
      })
      .catch(reject);
  });
}

let a_commentDivs = [];
function displayComments(comments) {
  a_commentDivs = [];
  c_container.innerHTML = "";

  const seqById = {};
  for (let i = 0; i < comments.length; i++) {
    comments[i]._seq = i + 1;
    seqById[comments[i].Name + "|--|" + comments[i].Timestamp2] = i + 1;
  }

  let replies = [];
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].Reply) {
      replies.push(comments[i]);
      comments.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < replies.length; i++) {
    replies[i]._refSeq = seqById[replies[i].Reply];
  }

  v_amountOfPages = Math.ceil(comments.length / s_commentsPerPage);
  v_commentMax = s_commentsPerPage * v_pageNum;
  v_commentMin = v_commentMax - s_commentsPerPage;

  comments.reverse();
  const frag = document.createDocumentFragment();
  const animate = !g_hasPainted;
  for (let i = 0; i < comments.length; i++) {
    let comment = createComment(comments[i]);
    comment.style.display =
      i >= v_commentMin && i < v_commentMax ? "block" : "none";
    comment.className = "c-comment" + (animate ? " card-entering" : "");
    frag.appendChild(comment);
    a_commentDivs.push(comment);
    if (animate) {
      setTimeout(
        (
          (el) => () =>
            el.classList.remove("card-entering")
        )(comment),
        380,
      );
    }
  }
  c_container.appendChild(frag);
  g_hasPainted = true;

  for (let i = 0; i < replies.length; i++) {
    let reply = createComment(replies[i]);
    const parentId = replies[i].Reply;
    const parentDiv = document.getElementById(parentId);
    if (!parentDiv) continue;
    reply.style.display = parentDiv.style.display;
    reply.className = "c-reply floating-reply";
    parentDiv.classList.add("has-floating-reply");
    let current = parentDiv;
    while (
      current.nextSibling &&
      current.nextSibling.classList &&
      current.nextSibling.classList.contains("floating-reply")
    ) {
      current = current.nextSibling;
    }
    current.after(reply);
  }

  if (v_amountOfPages > 1) {
    const old = document.getElementById("c_pagination");
    if (old) old.remove();
    let pagination = document.createElement("div");
    leftButton = document.createElement("button");
    leftButton.innerHTML = s_leftButtonText;
    leftButton.id = "c_leftButton";
    leftButton.name = "left";
    leftButton.setAttribute("onclick", `changePage(this.name)`);
    if (v_pageNum == 1) {
      leftButton.disabled = true;
    }
    leftButton.className = "c-paginationButton";
    pagination.appendChild(leftButton);
    rightButton = document.createElement("button");
    rightButton.innerHTML = s_rightButtonText;
    rightButton.id = "c_rightButton";
    rightButton.name = "right";
    rightButton.setAttribute("onclick", `changePage(this.name)`);
    if (v_pageNum == v_amountOfPages) {
      rightButton.disabled = true;
    }
    rightButton.className = "c-paginationButton";
    pagination.appendChild(rightButton);
    pagination.id = "c_pagination";
    c_container.parentElement.appendChild(pagination);
  }
}

function createComment(data) {
  const card = document.createElement("div");
  card.className = "c-comment";

  const paper = paperFromBackground(data["Background"]);
  card.dataset.paper = paper.id;

  const id = data.Name + "|--|" + data.Timestamp2;
  card.id = id;

  const isRedline = !!data.Reply;
  const pending = data.Moderated == false;

  let filteredText = data.Text || "";
  if (s_wordFilterOn)
    filteredText = filteredText.replace(v_filteredWords, s_filterReplacement);
  const isDrawing = filteredText.startsWith("data:image/");

  let filteredName = data.Name || "";
  if (s_wordFilterOn)
    filteredName = filteredName.replace(v_filteredWords, s_filterReplacement);

  const timestamps = convertTimestamp(data.Timestamp);
  const timestamp = s_longTimestamp ? timestamps[0] : timestamps[1];

  const dwgNo =
    (isRedline ? s_redlinePrefix : s_dwgPrefix) +
    "-" +
    (data._seq ? padDwg(data._seq) : "····");

  let fieldHtml;
  if (pending) {
    fieldHtml = `<div class="sheet-stamp">Under review</div>`;
  } else if (isDrawing) {
    fieldHtml = `<img src="${escAttr(filteredText)}" class="card-drawing" alt="drawn entry by ${escAttr(filteredName)}">`;
  } else {
    fieldHtml = `<p class="card-message c-text">${escHtml(filteredText)}</p>`;
  }

  let nameHtml,
    websiteHtml = "";
  if (pending) {
    nameHtml = `<p class="card-name c-name">—</p>`;
  } else if (data.Website) {
    const safeUrl = safeHttpUrl(data.Website);
    if (safeUrl) {
      nameHtml = `<a href="${escAttr(safeUrl.href)}" target="_blank" rel="noopener noreferrer" class="card-name c-name">${escHtml(filteredName)}</a>`;
      websiteHtml = `<a href="${escAttr(safeUrl.href)}" target="_blank" rel="noopener noreferrer" class="tb-sub">${escHtml(safeUrl.hostname)}</a>`;
    } else {
      nameHtml = `<p class="card-name c-name">${escHtml(filteredName)}</p>`;
      websiteHtml = `<span class="tb-sub">${escHtml(data.Website)}</span>`;
    }
  } else {
    nameHtml = `<p class="card-name c-name">${escHtml(filteredName)}</p>`;
  }

  let redlineBar = "";
  if (isRedline) {
    const ref = data._refSeq
      ? `Ref ${s_dwgPrefix}-${padDwg(data._refSeq)}`
      : `Ref ${escHtml(data.Reply.split("|--|")[0])}`;
    redlineBar = `<div class="sheet-redline-bar"><span>Redline</span><span class="sheet-redline-ref">${ref}</span></div>`;
  }

  const replyBtnHtml = pending
    ? ""
    : `<button class="c-replyButton" aria-label="Redline this sheet">${s_replyButtonText}</button>`;

  card.innerHTML = buildSheetHtml({
    fieldHtml,
    redlineBar,
    nameHtml,
    websiteHtml,
    timestamp: escHtml(timestamp),
    dwgNo,
    rev: isRedline ? "R1" : "A",
    replyBtnHtml,
  });

  if (!pending) {
    const replyBtn = card.querySelector(".c-replyButton");
    if (replyBtn) replyBtn.addEventListener("click", () => openReply(id));
  }

  return card;
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function escAttr(s) {
  return String(s).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function convertTimestamp(timestamp) {
  const vals = timestamp.split("(")[1].split(")")[0].split(",");
  const date = new Date(vals[0], vals[1], vals[2], vals[3], vals[4], vals[5]);
  const timezoneDiff = (s_timezone * 60 + date.getTimezoneOffset()) * -1;
  let offsetDate = new Date(date.getTime() + timezoneDiff * 60 * 1000);
  if (s_daylightSavings) offsetDate = isDST(offsetDate);
  const formatted = offsetDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return [formatted, formatted];
}

function isDST(date) {
  const dstStart = [
    getMonthNum(s_dstStart[0]),
    getDayNum(s_dstStart[1]),
    s_dstStart[2],
    s_dstStart[3],
  ];
  const dstEnd = [
    getMonthNum(s_dstEnd[0]),
    getDayNum(s_dstEnd[1]),
    s_dstEnd[2],
    s_dstEnd[3],
  ];
  const year = date.getFullYear();
  let startDate = nthDayOfMonth(
    dstStart[1],
    dstStart[2],
    new Date(year, dstStart[0], 1),
    dstStart[3],
  ).getTime();
  let endDate = nthDayOfMonth(
    dstEnd[1],
    dstEnd[2],
    new Date(year, dstEnd[0], 1),
    dstEnd[3],
  ).getTime();
  if (date.getTime() >= startDate && date.getTime() < endDate) {
    date.setHours(date.getHours() - 1);
  }
  return date;
}

function nthDayOfMonth(day, n, date, hour) {
  let count = 0;
  const idate = new Date(date);
  idate.setDate(1);
  while (count < n) {
    idate.setDate(idate.getDate() + 1);
    if (idate.getDay() == day) count++;
  }
  idate.setHours(hour);
  return idate;
}

function getDayNum(day) {
  return (
    {
      sunday: 0,
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6,
    }[day.toLowerCase()] ?? 0
  );
}
function getMonthNum(month) {
  return (
    {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    }[month.toLowerCase()] ?? 0
  );
}

const c_inputDivEl = document.getElementById("c_inputDiv");
function openReply(id) {
  if (c_replyingText.style.display == "none") {
    c_replyingText.innerHTML =
      s_replyingText + ` ${escHtml(id.split("|--|")[0])}'s sheet...`;
    c_replyInput.value = id;
    c_replyingText.style.display = "block";
  } else {
    c_replyingText.innerHTML = "";
    c_replyInput.value = "";
    c_replyingText.style.display = "none";
  }
  c_inputDivEl.scrollIntoView({ behavior: "smooth" });
}

function changePage(dir) {
  const leftButton = document.getElementById("c_leftButton");
  const rightButton = document.getElementById("c_rightButton");
  const targetPage = v_pageNum + (dir === "left" ? -1 : 1);
  if (targetPage > v_amountOfPages || targetPage < 1) return;
  leftButton.disabled = targetPage == 1;
  rightButton.disabled = targetPage == v_amountOfPages;
  v_pageNum = targetPage;
  v_commentMax = s_commentsPerPage * v_pageNum;
  v_commentMin = v_commentMax - s_commentsPerPage;
  for (let i = 0; i < a_commentDivs.length; i++) {
    a_commentDivs[i].style.display =
      i >= v_commentMin && i < v_commentMax ? "block" : "none";
  }
  for (let j = 0; j < a_commentDivs.length; j++) {
    const show = a_commentDivs[j].style.display !== "none";
    let sib = a_commentDivs[j].nextSibling;
    while (sib && sib.classList && sib.classList.contains("floating-reply")) {
      sib.style.display = show ? "block" : "none";
      sib = sib.nextSibling;
    }
  }
}

getComments();
