(function($)
    {
        $(document).ready(function(){
        var navlogo = document.getElementById("main-icon");
        var about = document.getElementById("about");
        var projects = document.getElementById("projects");
        var media = document.getElementById("media");
        var workshops = document.getElementById("workshops");
        var openMenu = false;

        // Social Media
        var discord = document.getElementById('discord');
        discord.addEventListener('click', function() {
             window.location.href = 'https://www.tinyurl.com/3D4EDiscord';
        })

        var facebook = document.getElementById('facebook');
        facebook.addEventListener('click', function() {
             window.location.href = 'https://www.facebook.com/3D4EatUCLA';
        })

        var email = document.getElementById('email');
        email.addEventListener('click', function () {
            var link = "mailto:3d4e.ucla@gmail.com";
            window.location.href = link;
        })

        var github = document.getElementById('github');
        github.addEventListener('click', function () {
            window.location.href = 'https://github.com/3D4EatUCLA';
        })

        navlogo.style.cursor = 'pointer';

        navlogo.onmouseover = function(){
            //console.log("Over");
            TweenMax.to(navlogo, 0.5, {transformOrigin:"50% 50%", scale: 1.1});   
        };

        navlogo.onmouseout = function() {
            TweenMax.to(navlogo, 0.5, {transformOrigin:"50% 50%", scale: 1});
        };

        // Hamburger Menu Dev
        $("#hamMenu").click(function() {
            if ($(this).hasClass("is-active")) {
                $(this).removeClass("is-active");
                TweenMax.to("#MobileMenuUI", 0.5, {css:{visibility: "hidden"}});
            } else {
                $(this).addClass("is-active");
                TweenMax.to("#MobileMenuUI", 0.5, {css:{visibility: "visible"}});

            }
        })

        // TODO: Media and Printer Animation on press for first time
        // TODO: Underline instead of color change
        // TODO: Investigate reason for blue borders?
        /*

        var ChangeColorAbout = new TimelineMax({paused: true});
        ChangeColorAbout.to(about, 0.5, {css:{color:"#FFF"}});

        var ChangeColorProjects = new TimelineMax({paused: true});
        ChangeColorProjects.to(projects, 0.5, {css:{color:"#FFF"}});

        var ChangeColorMedia = new TimelineMax({paused: true});
        ChangeColorMedia.to(media, 0.5, {css:{color:"#FFF"}});

        var ChangeColorWorkshops = new TimelineMax({paused: true});
        ChangeColorWorkshops.to(workshops, 0.5, {css:{color:"#FFF"}});

        about.onmouseover = function() {
            ChangeColorAbout.play();
        }

        about.onmouseout = function() {
            ChangeColorAbout.reverse();
        }

        projects.onmouseover = function() {
            ChangeColorProjects.play();
        }

        projects.onmouseout = function() {
            ChangeColorProjects.reverse();
        }

        media.onmouseover = function() {
            ChangeColorMedia.play();
        }

        media.onmouseout = function() {
            ChangeColorMedia.reverse();
        }

        workshops.onmouseover = function() {
            ChangeColorWorkshops.play();
        }

        workshops.onmouseout = function() {
            ChangeColorWorkshops.reverse();
        }
         */

        /* Use scroll location to change the color scheme */
        var projectsTop = document.getElementById("tab-projects").offsetTop;
        var mediaTop = document.getElementById("tab-media").offsetTop;
        var workshopsTop = document.getElementById("tab-workshops").offsetTop;
        var aboutTop = document.getElementById("tab-about").offsetTop;

        window.addEventListener('scroll', function(e) {
            var scrollTop = $(window).scrollTop();
            var threshold = 15;
            if (scrollTop >= aboutTop - threshold) {
                TweenMax.to(".ucla3d4e-navtitle", 0.25, {css:{color: "#62d2a2"}});
                TweenMax.to(".logostyle", 0.25, {stroke: "#1fab89"});
                TweenMax.to(".socialmedia", 0.25, {stroke: "#62d2a2"});
                TweenMax.to(".socialmedia", 0.25, {fill: "#62d2a2"});
            } else if (scrollTop >= mediaTop - threshold) {
                TweenMax.to(".ucla3d4e-navtitle", 0.25, {css:{color: "#e23e57"}});
                TweenMax.to(".logostyle", 0.25, {stroke: "#e84545"});
                TweenMax.to(".socialmedia", 0.25, {stroke: "#e23e57"});
                TweenMax.to(".socialmedia", 0.25, {fill: "#e23e57"});
            } else if (scrollTop >= workshopsTop - threshold) {
                TweenMax.to(".ucla3d4e-navtitle", 0.25, {css:{color: "#b8b0b0"}});
                TweenMax.to(".logostyle", 0.25, {stroke: "#f5f5f5"});
                TweenMax.to(".socialmedia", 0.25, {stroke: "#b8b0b0"});
                TweenMax.to(".socialmedia", 0.25, {fill: "#b8b0b0"});
            } else if (scrollTop >= projectsTop - threshold) {
                TweenMax.to(".ucla3d4e-navtitle", 0.25, {css:{color: "#ff9a3c"}});
                TweenMax.to(".logostyle", 0.25, {stroke: "#ffc93c"});
                TweenMax.to(".socialmedia", 0.25, {stroke: "#ff9a3c"});
                TweenMax.to(".socialmedia", 0.25, {fill: "#ff9a3c"});
            } else {
                TweenMax.to(".ucla3d4e-navtitle", 0.25, {css:{color: "#84dafa"}});
                TweenMax.to(".logostyle", 0.25, {stroke: "#65a9c2"});
                TweenMax.to(".socialmedia", 0.25, {stroke: "#84dafa"});
                TweenMax.to(".socialmedia", 0.25, {fill: "#84dafa"});
            }
        });

        /* Printer animation */
        var extruder = document.getElementById('Extruder');
        var pipe = document.getElementById('Pipe');
        var bg = document.getElementById('PrinterBG');
        var ukulele = document.getElementById('Ukulele');
        var hand = document.getElementById('Arm');
        var drone = document.getElementById('Drone');

        var t1 = new TimelineMax({paused: true}); // Position the pipe and the extruder
        t1
        .to(extruder, 0.5, {
            x: 88,
            transformOrigin: "50% 50%",
            ease: Linear.ease
        })
        .to(pipe, 0.5, {
            y: 166,
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .set(ukulele, {opacity: 0})
        .set(hand, {opacity: 0})
        .set(drone, {opacity: 0});

        var t2 = new TimelineMax({repeat: 5, paused: true});
        t2
        .to(extruder, 0.25, {
            x: '+=24',
            transformOrigin:"50% 50%",
            ease: Linear.easeOut,
        })
        .to(extruder, 0.5, {
            x: '-=48',
            transformOrigin:"50% 50%",
            ease: Linear.ease,
        })
        .to(extruder, 0.25, {
            x: '+=24',
            transformOrigin:"50% 50%",
            ease: Linear.easeIn,
        });

        var t3 = new TimelineMax({paused: true});
        t3
        .to(pipe, 5, {
            y: '-=165',
            transformOrigin: "50% 50%",
            ease: Linear.ease,
        })
        .to(bg, 5, {
            y: '-=165',
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .fromTo(ukulele, 0.01, {opacity: 0}, {opacity: 1}, 0);

        var t4 = new TimelineMax({paused: true});
        t4
        .to(extruder, 0.5, {
            x: 88,
            transformOrigin: "50% 50%",
            ease: Linear.ease
        })
        .to(pipe, 0.5, {
            y: 166,
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .to(bg, 0.5, {
            y: '+=165',
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .to(ukulele, 0.5, {
            opacity: 0
        }, 0)
        .to(".printerst18", 0.5, {fill: "#6639a6"}, 0);

        var t5 = new TimelineMax({paused: true});
        t5
        .to(pipe, 5, {
            y: '-=165',
            transformOrigin: "50% 50%",
            ease: Linear.ease,
        })
        .to(bg, 5, {
            y: '-=165',
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .fromTo(hand, 0.01, {opacity: 0}, {opacity: 1}, 0);

        var t6 = new TimelineMax({paused: true});
        t6
        .to(extruder, 0.5, {
            x: 88,
            transformOrigin: "50% 50%",
            ease: Linear.ease
        })
        .to(pipe, 0.5, {
            y: 166,
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .to(bg, 0.5, {
            y: '+=165',
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .to(hand, 0.5, {
            opacity: 0
        }, 0)
        .to(".printerst18", 0.5, {fill: "#b83b5e"}, 0);

        var t7 = new TimelineMax({paused: true});
        t7
        .to(pipe, 5, {
            y: '-=80',
            transformOrigin: "50% 50%",
            ease: Linear.ease,
        })
        .to(bg, 5, {
            y: '-=80',
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .fromTo(drone, 0.01, {opacity: 0}, {opacity: 1}, 0);

        var t8 = new TimelineMax({paused: true});
        t8
        .to(extruder, 0.5, {
            x: 88,
            transformOrigin: "50% 50%",
            ease: Linear.ease
        })
        .to(pipe, 0.5, {
            y: 166,
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .to(bg, 0.5, {
            y: '+=80',
            transformOrigin: "50% 50%",
            ease: Linear.ease
        }, 0)
        .to(drone, 0.5, {
            opacity: 0
        }, 0)
        .to(".printerst18", 0.5, {fill: "#3490de"}, 0);

        var t9 = new TimelineMax({repeat: 5, paused: true});
        t9
        .to(extruder, 0.25, {
            x: '+=36',
            transformOrigin:"50% 50%",
            ease: Linear.easeOut,
        })
        .to(extruder, 0.5, {
            x: '-=72',
            transformOrigin:"50% 50%",
            ease: Linear.ease,
        })
        .to(extruder, 0.25, {
            x: '+=36',
            transformOrigin:"50% 50%",
            ease: Linear.easeIn,
        });

        var t10 = new TimelineMax({repeat: 5, paused: true});
        t10
        .to(extruder, 0.25, {
            x: '+=88',
            transformOrigin:"50% 50%",
            ease: Linear.easeOut,
        })
        .to(extruder, 0.5, {
            x: '-=172',
            transformOrigin:"50% 50%",
            ease: Linear.ease,
        })
        .to(extruder, 0.25, {
            x: '+=88',
            transformOrigin:"50% 50%",
            ease: Linear.easeIn,
        });

        var UkuleleTL = new TimelineMax({paused: true});
        UkuleleTL
        .add(t2.play())
        .add(t3.play(), 0)
        .add(t4.play());

        var HandTL = new TimelineMax({paused: true});
        HandTL
        .add(t9.play())
        .add(t5.play(), 0)
        .add(t6.play());

        var DroneTL = new TimelineMax({paused: true});
        DroneTL
        .add(t10.play())
        .add(t7.play(), 0)
        .add(t8.play());

        var LoopTimeline = new TimelineMax({repeat: -1, paused: true});
        LoopTimeline
        .add(UkuleleTL.play())
        .add(HandTL.play())
        .add(DroneTL.play());

        var MasterTL = new TimelineMax();
        MasterTL
        .add(t1.play())
        .add(LoopTimeline.play());

        /* For the Social Media Icons */
        /*
        var youtube = document.getElementById("youtube");
        var facebook = document.getElementById("facebook");
        var github = document.getElementById("github");
        var ig = document.getElementById("instagram");
        var email = document.getElementById("email");

        youtube.onmouseover = function() {
            TweenMax.to(youtube, 0.5, {css:{fill:'#d1f4fa'}});
        }

        youtube.onmouseout = function() {
            TweenMax.to(youtube, 0.5, {css:{fill:'#11999e'}});
        }

        youtube.onclick = function() {
            window.href = url("");
        }

        facebook.onmouseover = function() {
            TweenMax.to(facebook, 0.5, {css:{fill:'#d1f4fa'}});
        }

        facebook.onmouseout = function() {
            TweenMax.to(facebook, 0.5, {css:{fill:'#11999e'}});
        }

        facebook.onclick = function() {
            window.href = url("");
        }

        github.onmouseover = function() {
            TweenMax.to(github, 0.5, {css:{fill:'#d1f4fa'}});
        }

        github.onmouseout = function() {
            TweenMax.to(github, 0.5, {css:{fill:'#11999e'}});
        }

        github.onclick = function() {
            window.href = url("");
        }

        ig.onmouseover = function() {
            TweenMax.to(ig, 0.5, {css:{fill:'#d1f4fa'}});
        }

        ig.onmouseout = function() {
            TweenMax.to(ig, 0.5, {css:{fill:'#11999e'}});
        }

        ig.onclick = function() {
            window.href = url("");
        }

        email.onmouseover = function() {
            TweenMax.to(email, 0.5, {css:{fill:'#d1f4fa'}});
        }

        email.onmouseout = function() {
            TweenMax.to(email, 0.5, {css:{fill:'#11999e'}});
        }

        email.onclick = function() {
            window.href = url("");
        }
        */
    })
}) (jQuery);