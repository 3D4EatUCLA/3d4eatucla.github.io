(function($){
    $(document).ready(function() {
        /* Components for Media Gallery */
        const buttons = document.querySelectorAll('.project');
        const overlay = document.querySelector('.overlay');
        const overlayImage = document.querySelector('.overlay__inner img');

        function open(e) {
        overlay.classList.add('open');
        const src= e.currentTarget.querySelector('img').src;
        overlayImage.src = src;
        }

        function close() {
        overlay.classList.remove('open');
        }

        buttons.forEach(button => button.addEventListener('click', open));
        overlay.addEventListener('click', close);

        /* Adding Display for Content */
        var overlaypg = document.getElementById('overlaypage');
        var exitbutton = document.getElementById('exit-button');
        var addpage = new TimelineMax({paused: true});
        addpage
        .to(overlaypg, 
                0.5, 
                {opacity: 1, display: 'block'})
        .to(document.body,
                0.5,
                {overflow: 'hidden', height: '100%', margin: 0}, 0);

        /* Exit Button */
        exitbutton.addEventListener('click', function() {
            addpage.reverse();
            $('#overlay-content').empty();
        });


        var sponsorbtn = document.getElementById('sponsorbutton');
        var biobtn = document.getElementById('biobutton');
        var sponsordiv = document.getElementById('sponsordisplay');
        var biodiv = document.getElementById('biodisplay');

        var swapabout = new TimelineMax({paused: true});
        swapabout
        .to(sponsorbtn, 0.5, {opacity: 0})
        .to(biodiv, 0.5, {opacity: 0}, 0)
        .to(sponsorbtn, 0.01, {display: 'none'})
        .to(biodiv, 0.01, {display: 'none'}, 0.5)
        .to(biobtn, 0.01, {display: 'block'})
        .to(sponsordiv, 0.01, {display: 'grid'}, 0.5)
        .to(biobtn, 0.5, {opacity: 1})
        .to(sponsordiv, 0.5, {opacity: 1}, 0.5);

        /* Show Sponsors */
        sponsorbtn.addEventListener('click', function() {
            swapabout.play();
        })

        /* Show Board */
        biobtn.addEventListener('click', function() {
            swapabout.reverse();
        })

        /* Workshop Popup */

        /* Projects Popup */

        /* Gallery Showup */
        // We Make 2019
        var pg1 = document.getElementById('wemake2019');
        pg1.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/p6cm9zSgKfYePmyCA"
              data-title="UCLA We Make Fair 2019"
              data-description="54 new photos added to shared album">
              <img data-src="https://lh3.googleusercontent.com/mDJPhTw7daxLrTJoA7cT_k4PTHnvHwDWtnq4JFUhnzwgI0ikIHaRewRZagqv7LXCGi30IqgM9ZR2o7Df-DfcFcTqY05cK_gRog2ItUx90VFCH1es02JnO5dDBYsMdXSaI2ymMGU9kw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/anTAK7Qkvyzb4gnE4Exf8P6AhZ4B-UwzBte-cI8DM7bQoj18tTBWhL19NVCyEuz6iKMrTI0SwcB9X5_qLvxPqUWXsSbm0225OvZXM_3-MfjI8uar6y9-rdNQpttR7PH7lAyNGyEfbA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/i5fFMrx3wZ7kC_dW2NXPHZsa04YZBTQEOq6dJWGWIiUSUNeOm5MUzrTW9-hFQhvg27bcoV9T0mGKa2Sr-b9gk2NS8TZuG04Ko_xiyYmSqkb89P3vo24iyKn2NaVwjOe7eFn0dIWXWQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/e9uQlG0p_ECiUWoP8VZqjfsxDfFBh5EUhvCOFqmzxLw9kjKxLhuJM223jWXufJgRFN7T7bYFFI9cQ-1Q9sLB0VXK4U---ADG6kxcof2lD8Ts6nZ10p6nzKQcs-cEqU0-a8Jw5OQh1w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/GBeYdhzRe--U_ZENIEjetNjnOqUZ3vYmi2X9XGnJps1Ngl8EiiiwFBl56W2f9ftF88q29HB1-Q7mHseVSIuNCpBK3mEDHkXn4nnwe9FroBbTtwNrrNriuEbOHryNAvSBU3lnRf0b6A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/qcS-N-948iRKlbKFaMcEwnRn6rmCtUCWxO-7CsxDa-OF6uvMz0UJtZ_250QlycK_RWknABZPhFLUKixWOdujt7I1hBZa2xEUO35Kq4u2ZB3ml9yAIoOxfg_qlexu5Bzefx0oFQpvDQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/N0df9i6TnArttMY_EHYim5JyTu8ogSrMHqQYa2GIDP9nplRtOERZpHHoM7KQf_mA8RJ8xmLkDEOHhYGJUtbJ7mIwzxl6YiR18axohzmgO_3F1p9aBYVO9I93wbyRzYFOBtB173RxGg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/OcGR-9JuanDwpudb0IaY7pL8RMhWF87yB8Fs8RKcc6JHf_h6-l3Zc-dXkgjuIlGIn3Bb_5AdqolSsTFH_T87-qoCy24wgw_c6dVp0mYU5U7OfB2vZO13eckwPXueG5krr5w_zDbA4w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/CKUuKjBTgllcFY5-i3kVn3KypLipO5mYJ0V2li-1BNlGmoHC1uCRwkYcBd62r4K26pEiDxJ0p61-oODC8f37Yv-7L0gT0IaMx2B_SPuCK3kAOyIgLy4eq2D4XCSDshJwtr3MXvmNjw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/4FERHI5gapcmHmdXQsOlgj-QZ9MVVTaycRX64Rg1z1yhuMIjz0lLgnPbZ27vk7v9M8MQ_UgDZM8NcuDYXVNuvQnoGePSLFlIxAsr3t5g2_B7ca8LkWCGZcFKEPATh0xW-JhdS6Cy1Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/mzKHCrU0ZjDybBHqLEN37CzjZz45M-o1_g6fwKNSFUFCDzzUmCpyqQvpVHQ1c-tOKUc3BpWldghYH9fmdlQKu2T87s8eM5dsIFzY_iimZCMWk8mfHVN5urlUy__3ZQuTZSI6iRbpXA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/oplS8MeEJiFAZGlK52hbqOzW8Cj8mbnK-_K0jv7NIauJq2esanGWMS0bE8kt0x3QzkWKfg_4vI6qpAUWpzahgr7ImQyQwzQ4QDpoKBrydugoJ0nt8ckRRpQ6jbuI9UcvYdWc2TItaA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/82P4cZ7KjB6s-eDiVxo_TS7uleKiuWpcy7dwTp0AvqDYIX7FKEjuAc89AfHgWHZyv1y2lquqEwyuUcyK_qTP4h20xaFmaMsUBvZ0-zu7eGbXUE7iME88WbDn70GaYG-BNxZqeUMxrg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/T_kHn4WXDnsvAWLDvdzvzLSfDuVuA0QhChhIMXHEcN_6D4SJ1Juq6lvp8kH2pdoPrRKpecuDAtjcVs59ilE3179O-x1ixgY-tBfxUN0_xzAOMJgfQftoFKExGlXcJn26Fo29TbRz8A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/FhRo92BAq3noI7hTpv5DeXCVh_d41zDBNEUa9gnAfO8LfUcY_4P9qBW5zzdlgs_DaKvctB3EMAS9sfxdK0IiJQBy4LcDiZD3sGVnrBbEQ27xTA-nOvMhHXYBeuS4lKeNX8loM7Q6kw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ngE64mQjyzZyT73gnYd1uqEFUpeiYucUE_SrYrhEwM9lrEMPF6Ymig0hKsLc9e1xvQFmh0aDbwtS6mreEAcoSWTMarjes-uIW9dPVvcydcPGaTN3xA0jMiP_6zWD-zf-lYWkbq71uA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/KAbodOmUxFxZqDg4LXGbstnfElFNTFr-ZVGNGpm8Fmgeitctg5t3J9NgxCG3gIpBLAxuMOpMLDm9oYq2nBes6r9usgyjWl04-YoL6iNYdcdcqnhp71GcOeYDJ_LjnrlzqsEDhhTiZw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/pI6dpUHRbvrexmTNkO1-6m5qes7u07-BUZWwDGc8pzRRdHjoIrL7ETFYsEdRYM70tlck4zRWCCBIcELTF8ogAqb1RxSY6hLkJIpePChLBBVC2DAKjAJRNfDjdEosTks682Udu9vw-Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ug_ObNobgvu_UJ5-1dUfN2B91Uzs-kQ0uCahDEolvBCHyM2NMtrn5PatlWSnoJkXNz9UJfTzcYhyDasY_a9nRM-JtfHl39zP-wt7K3T3LunqIaDcrmJwxGdXiO2eNdv3gMoHob7W0Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/TARsPSEsHVGDex7fui8NgOzECE2RZi5b0p0SP-Tx7_5RvnJXDDxkmXM3txsnjV9DWOWWG8BIxHUaCoBhOSWrSJN3F0cIZz_PJT5M6byPNsnqLOVm0mHilXEurVwNkMpwA3mlJwS71A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/sCrhwnqN4iEWkRZfB_OGVYzEaU4LgL5fHXdTxUzGQWIcO0mzrp5yrJlQQN9A7YNRNuN5dnYGT7YkMMsqrc1oHgydcEIeyPNxoMthvnz8cYw76WbhCpvKx9L5o-nHFvAzXq9reE_RgQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/W2Oyi55acqrSZZ20YMW1ILB49TJ5TF-5v1KICh2WV_NM6JbyNRAvtCjMqWk-kjrbCbk6IHIhd8Gj351SvYfDvoeWcHx1t4HtdmWCFoxlTmikeSJ5kkr0x7LC0HnRllZsaHz9LNzBFg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Io0UGYf5VHlpSEiJyA6w5oUZ-yo1-72rldMufD4rUTgs4vDRKmeArA7UmL3AbSAGEXf6m2noDJSds3E1i3ONb6AsQ51dm6DiAslkBS4OuRHmfPzFB6unP77RuHxYuXhedkx78YUfPQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/uxBlX5wZ4ZyUeoMZfm1ePs0ZIzadVRlU84e24vWBMMqlg1QpXpvNJBSMcK0nfdbgsqwXnvqziEOQqjmV9n1i-HDzR0GmAYHN8lqqLB306diwY5J6EZ6k91VgpJN6LeheWU81eQHAOw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/NpfMlJoDLAJQxMlcx56ykTgNuvpxptP2PWkspM1lvLfExPpHECRSm3rnATn7-WoBddIRO77sH-8qeOrf2YN-2LhyYy4lTN4Ypva1owhfgSbpA3TartcEIXm61HV22jdty76bsJ1QqA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/rzHE9DcSNVtB8VFCEXOe-NVg5OCMlKEhazS5n5AO-VK3hfUuCS5hk-xENGakIyCoipJDKQsbSXKX_wPu0dlCcnrQNE3Unrq0DqAaY09gBUTZFCMYYP0QM3K0gcVw2TLBTl8Pn9XTrA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/GiKuViUpluPq9WrGq01_GFpfOxneHPg4nA-BoAhiiBA3M_VrkgH45ASw-7Kqzh1juUMQJQoYWtZOJfFSXacyWyslqe0I-0SjMvSHlzKkNks9FNQ-ZtURZmLKdUzIq433U_gmErHp2w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/sMBpYch2hSEicVZ-k92Jk8aQE-2hywZOjDorMlewoHkDGXbVqj9v00-SqvtRx6g5D2Y8keXUOg_8Z86UGhEZlbZA6B-v_udTUChfFiEKvDVOI9gk6fmrWwP9go52l8r_B3UY8asi8Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/cXgUDPRnWqbArfpqJGM-G4QISp-6RYtJa7hc5fp6K8wpPmQ80g6nQEvlF7NNr0u6SgAGj-gTWkwSwNKUHsmniK-weuy36xSxGqlPThnWe6BJkvqERK2dpJKT3fLfyOnqhEJoF-WmuQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/UQ-Kt187guI9o9YYdKB3gZWVDP9i9ajKO2ARhSDfueL2jOh2MVTmkpgee9OLpuUQysR3u2h87TLhTL7-DrGu6cgsGSAMGigkeqeG01Yxa-Xtk5Ckhi_KRHFic0pNI0Lb_V70oOYS0w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/pxX2aH3AuGZT12CYoz1rMfoujYXMhpVwn9OxNpY0YX8AOWeY-hojBFBoxPON6nh71qvuoj3CPXqgInJBMlk9t7oDKxcT9YoTduc5CkLyrGbt9tFcu9R_K96XOpOFG6px2HDTDrm4Jw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/IPDG2znNer6jERjOyXV5fYWs8vfhfu7DsVW6XBwPPXRaLz2cIpcibGpgsLZ4ZICmdl6cs9xhffp8qZ1wdKlgawCfCExjwZIkCe8NmlFu3r6kUZUzO20LjdEBT0CbEe-L3Cr7SHo0VA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/xyzbHK80Q6jRGuYjnIU5K-Nyr91LUbM1hALqGYLBo4DQxgNvdUnzVsET0YMV7fLglXj4YXlPL7rXkLP9mO9icfnIDl8FZqaxgt-WwG0k-FBMg8K6aP-r2CAvFS9EfVECwRzydJdc8A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/-7GbvU04qXGmrzxcHgYWc1Ot9U38WZgjLlpaC_AHszz_J-fbP0O10itWJOe29J9KXw0Cg4AnlQDtg2EA4YGBNImctTJyedZ0QevywSuxYQhtkMx-_5mO-2ugvlgu1lK4son08N4dVw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_OtswW7I8y81VepcNkSEzMk0SOc6GkEorZtyAqxBjiTw97Q9b80eCCWwCawfysnePqSHOreEA8NgVkAN5Xwv-6PmLpOFPb4u-UMg8WSNB_ynOYKHT_m7C10SNy5jviRrrmgr3AlL8A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/cl-8mAxjwnB7ovTGu20yhTxWaxy99AI79NFiXp9TVvzYtatbLG2X-XtY8dvycoltifiE1yAYOSYcAQn832jFYPI_3aWvJSsBk-QOyp7u-u5-lKvi7xKWCb0j6OHri6IJlo3CqlOU2w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Ftn70IXraWFFLUlH-Q8_HmH63utM-v17LtkP3YxhpfYi5Vym6kyquWF21hrHYEgzWd_r_yAE3eoxbWFg-veF_b95p88fMW438ZlOnDsj7dE0Cr1lQz9-VgBdLCliKSbx5aI4BsfPfA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/VO72U9dbFIqb3-_gVGyUL2L_XAQ0mjNRMe-gE2sGGjDPFhG2mJQ3od9DLHI1oNt7KBEmj7YuVCkFp_dHtMN-qbtvOMkxcZJDcvBr2tFq__ERNuq4KAVwov7rtAyUJLTAS_hnZnEMEw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/NWh4SgWZgP9Oe0a4VUF_zjnIYIIVzjgNzyTZ9v87tyRD0MAZuHe_SOvqzKn73X3KmKpAy8OogxMO2AZqxFiFkdFCGA59O2wyK37Ut4BrFBR_vZDzxDFnOY-cWWj0tkzbtpvpNSPhHQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/APRZ2MRryqqpuzoxg0A-Iik0Me0P_-r9PeZKYz_2YgZgkphWlRgVSJbnUGV_FTVlEyJxeASVTPxX8QEEUl0dKH9f6wiAhfYC_b_IVa8S8xdLMWk5VHnPpP1Lhz1ofROn6HupT6DeZg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/CrVrUU2VoXtPv5p1gAlohxnr5JljOPEj8BtKryQljShfjDg3UjGTMSjXzZuhiYqP1tMZd39830RKlc6lflh5oeES01Z6UrY5AtjJsRDEOnPMTiRqeQYHJr-nZ2N0Oaj9sAq0nmZ5ag=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/jn7SvSSCr4u_vWKX6de1229ofPoyLHX4U3nPD4GmAoPyKiYoULKw5FgGAb7x2qXBmpcMn4Vwggwh7LjEUjQtlIqH5tlMm4p0JcP9IfTrlK2vf5lqlUsobGUZRGIJUM8-6jVLLb7mfA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/zJUidLnXrG0ND1viy-W5Xyiuyo3v43UTJvDR61wR_S4aa5IBNEB_hg-YwqUe2Vfn4PA_9rSTl77IYkl1JCEqKMq2SMXxk33-aJaLUf3GIqk3ctv20IoAgqV7YyfPa-mNhiNe6Pz1qw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/qMczkvU3JvP3VwEi4Cxp2aivC8GTsdqvRBiG7adLyQadFlo2FxVWoZlVmxGbR4GzDNVH279khrvyNKMypHEQuN0RJcNwU8trYqCFchVNNK-Q5gZ5oW2ocP2r5fLHAICn_oxbH1QiwA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/sc8Tsz8SERl7Ca45sUomdpNrvHg951ezyo435eRErgUIGXPltVSOyECYTtYROQFcWwZD4k8EiaXnTTWD2Ij4Zg7Gz_Ybkw7kaH7QcvvY3IN3JDpsZOA6ptgtXsVEHV9p0QWKkKSEEA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/GVSorI8-GAlMbWHFibYXW8ToFo9GLZOXETu0nUdZP7A3oRMnP8fJbuSezIyjju2c-cyMlg7RhOdG0oL_0AhfEqxIkCrsNrsINHMN9Rvf1G84ibArir2WmlUKMz35SMfLcjZAxEjIFQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/mB8vgzxjwvPjNGoIkTiJjPtEWuGMO4W6KJCti_pRcWAXRISgpwl4DGFi4ue4cJUFT2fV_gs52ukPjPxShL18erlYDgi_lOqPRcWN__NHfZ8o0wnwah1uHctVCbCA6nZrOrWjWD0I2g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/K41ZKdKD7rw-cJovb-fSzW0P6N7R8itrT7C6gKa4WH8Npe-2Dk6SQrlvIsi9N8e2eZMjcu8UzmsexMCroEiDhcQoVQYcAgaxDSL31RJyp2o5zdPYKVI0PrreSBC5IEIeUDbqNHrMmQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/fMl7lvpv9J3HGHftwMloo2PoOwzI65rjLPLUrx0iP6FM-cVcJdbB4oidwzW6EVjARIug9JdaFaNSLZ407qR2EdX3YwQIJmyOgWNscfEfkqm1cXpPVDknZGew4-C-1N5Ste3Cq6-yVw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/xf-TSnGSrSemrCHgol6zc38PqWYQRavgS5N_-oUAG3VTGXhmIkmgOejPPSs_u1DUX_1CQaQuR2t1-JB2zZfxHfVtD6CtJ27JgivViHNKxf65FCmWSt2vQvIkswJrgxy2yJg-3ssZnw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/dNWhZCbERSvTJ5I9z7lE4cp67Zp4FKCrCs2WY6-0h0rcWGKz8654Vfy_APWxNX2rXQZn3BuakGgbotqFPabMOU-w9qnpNNY3oKi9eExk1a_Kv9aSb8wqPD91gAwhbXtOjisdKmbNwA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/DUDdP3ym5O7xBSNqBIR_4R_a5QwiKDHA33n57weqq_uNH5QOygxMr_E3vlK0p9CQKosz8p5LntLX4VcZxfyoPg-FO8vKTHaUdULDw1H9tMXr2kO1d9ykiQ9yB0bQUizZy4xaB3Vhow=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Rxbm17BEt459FnnVH5CxmFH8Y4ItvPNZBurbf0NI7J5WYyOk4XEmp4qDBQxv7GXrp3Zcct3ciHErrKDz_wBy1dgptmpPx06K95oZo7RBOxEgez04IxtkCoxtNwG31Vh_R25N2_PGDw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/2VEx70bjEIJ1dekhEmSbjvT1Zs-1NJYUydW1tIsWhSa3EhSCSRz4j3u26dzfAVSBP5R0w0Q2Caryrzme3YSpv0sNXVEkcINu19cOeuc2BPCKcaE2nqTa-YjyndxiSW_Q7y5HJHXjxA=w1920-h1080" src="" alt="" />
            </div>
            `;
            addpage.play();
            $('#overlay-content').append(str);
        });
        
        // Retreat 2019
        var pg2 = document.getElementById('retreat2019');
        pg2.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/8WYxPVYGUJS2pSAr6"
              data-title="3D4E Spring Retreat 2019"
              data-description="86 new photos added to shared album">
              <img data-src="https://lh3.googleusercontent.com/CMczUzDPjyjOAkPzAPoWB8GL-n7fnErE2w_mV-eadfvoe2be1g7QxLZovgFORpYJJD3c0z_kaqUNphUVZdVCMgPrB-P_ssWMdrmqTgDjt4p4FhfaxEkAMBIYiqWzT24qkgM8hzZwSg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/v_8f6qPptdOmbpFM9nd6iCG2T_OLkRHoMJsu4AGrRmoHfvxgWZ5HwGkBe2JjjKDaRs6UOTHHtG0pfrZEq3dOThs8PBFEGjGwbxWJzHaHEikwzzno_fzosVtnUi-Tv12YqmEl4PnOLA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/dekHVkjOH15urr70b4GOmJB91Cs6psDU2oopj2px1NsF4awyR9L0JqLtrOPDavjBob3QgGsBCclAYkVIFEvJ7fLMwepm1cNQ1JfF3-Ak_qTdLhEtArQP7dm-Nk0626YEooRk8nKwjA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ZA-ilXh_mQktVaDQuQKnKKOIgCvmFwwcqniR9hLM9dv4ccqw-1FApz0Um6WuWrzpwnszW49EMgKw2cZTISwHOmRFcbWJh9c0U2dDQphYLOdQRe_VqRFHnPfKomTafmBlJkkD7PKzMQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/EJSPiTKICP54a0Ojy8a_WmJ2J0w_C2Kx_sJH31J8Uc_-jAiAl8fKwX5xpBSkMUlueuSJvTo2dRHRqFkm7ZhpqQKT8Pv5bAeOiwi__TcLNVRMXJqDHTmoRFD-Zj6s5wH2i-HAPq2e7g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/pTcn9TpMuv2nhMqbY9nel6Kc9L04WxMF42DSrGQgdEIP1KPiQCJxT5gPVVGuHuvzZ5T_gPoQNAw9PkV6fdJWLovNZeF81gdbVSg7h2rx25JWfvcDnMasS7gjQdWB1MKYMH4MPxud1w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/p85hTF-vOW0E-fSn4wrJ7g9Z4MseM1pnDd9XtzM-i8BkKK96tWMPdJaVP762VAll0eKtx1H7B3BC-kc23g8geNwVTQvn9dsRxy82k9yRx5ukwR1gjGQHviAdfHbgllTvOBXurgMJOw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/jUpWBZBrFJjibCFmKsleXPCYT4JGzZjMjp9lK1boeUzSCSs3E-X2TGYiYcyL4flU4ugMbzGTUvzOJ-qXb7byJkQVQ5sRf0jb3IdUYkESJpj3phxGvNnw6dP6bWLt4mnpYnSIzIit2Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/-IPm-ijz9i3tn5B1qutbQBjn3wub-oyWud4f0wpYieJM5e7NaJPgZW81mVrjnRUZk1jJq86jVFBuIdab7ssY9bzVZivUi-CgnXefZ_A7oB0NinDKikUSUdSsy-1VkZSgdngyf2XDkw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/9mfkQZLmYNuSUGr2vvO-g6YKHEkYyl2mxwt-RPjWYP7aOsr_6bA8LogKyre6zHpidyZLsuybETnHvDIPcyru8P19e5dEYnXegSQOezbiYAFZzrAR0RF67bBsSWznriavO5VMbf3yfQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/S1hgm1F-V1RN5Pz2QoWRdZnnCAakd4hnnLp2l541bHb577U9a2-GjJ4nT71zyfh5FWxCDz6XFfJhfzccFojg8gyc3RCVVYG-Yu0n3upk_5spWGi4JUE0kBMIjnBuzETdVI42enn7rQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/f_iXHHwH5L4jmZ7FZKGph4ggwgZgHqcTyVltX2YD1iIWGaIXqxcqqP936LrmEQmb1FF8MZa2A9N6zHI-KkvLPxIrHSTYmam00tkzB21aDSBzloZncSVjPXX6QJCIeW5fCxOWfgq8zg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/QCcpb-BEnS8ziXtDk-q8Sz4bk36P6uKzBTsGUxzniOzgyRa_qratQ5C-Dw4qc754lIl7jV2Joc67saOOmAJgo4pTfXjr5nDtTYmynW9zqRvS73LXCYLrnI4JmSoQKJTMaTjm4uaMLg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/E_7tsZvCqO4wrxOs-fX6-hQXO7VkPozIOU1tOHKYX2a9wnk3r_qL2xTbIBYL_CmsNqU9qzwztKjrV-ENZ93p9gpRgHmrVm2o96QPM0vP8FYWzqH7jwAmzZgR14Ww3qxy-ozc9PiZ1w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/1M0vLSsY9vYx7UO3-LiLRajw56NYR3pCFzIMaNBpZyyohqikJQUVbxQBjOghAX8zwXlWt0FrAHo5BwZn-jzzQ2zQwd50ppyALecwQlL-kKMKm9KIGaWoQSUWQgFKrd170Yx9voJYOQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/oVYCbvhSVP4RfnTrQt7moI9vFDcjbQj59dl81eciovDhcZd84gLa8eEsEa4SeppPweh6Ij8c33Jhl6hiljxScOzPyljn_1uRzIXykE63MQ6LIfDmfXhpSpYkdDmsXQDgR34ioUVCsg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/cRcsV7EXdVOtmfq82CxFRbJ3-Xb5LW4LxjfE2lCH9M96jUCwZj2dVD29xLgKgKcQzKSKtoj9nJjLav1SL05k26aKUMZVilQcYK0xL3PE98CUdwe8UtyDO9DzDTNY9FgxTKvlvSJQGg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/cyQIjfICX8peyl0SVS7dVYI-4RQD8lJ-TGRvVpkGihop2lNQe0eFawPMKztXQmgotZRWlHRSLPdBlcI6C4oRLC2el-R5jBhZIj_lHPUHhX6F2V_hBg46HlMGv9P9IEFzbSuMnPlzdA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/A-aV1Vd9vA8TljBy4MPeEKYP8yiWwrcV4AzNc2u4gXoOsHISPpAV_kj7csNOWz-VoVgxAW61loBxpAdzINQslRhZCQwwkVoEWjrq_EW2jbua1dsECwIjd6BkVtrWJ1VX2zr-eUTMMQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/s5Yj1eQTE1GGDPlM88VZTDNFLDkPN_1e1q9gJphvIWYjLtKy2VSLyytawrmVMlvcbkUGrcgG2z4Qjht6H3e3YY5yfXm9VPP5LX-GE0pFUkorXmLTnrHFK_xF-AMVRZmsXjCqAGWIyA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/7GdqMM_E209cP0OBtr3fvpmsI50CgG9biSftBQgjcwZSFLAsQ0gnv0QEL7-rXENEyGCSE0TCYGZaJBiHJznTKy8dEODKbn1LpVeI4tvmuF0zJzfqUmD__XYEaoxUCbscfvLxZ80X3w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/OlUuhLn1WI6ERhU4-gHuTZJkPRgLgTF8-B9EkItE2NCWbeLi4DFrSEUt8UosuOY2S6-je1akROva7KsT5UAkhe74qFTYpi-bN7NzgnOy4j9J5IctcFPUFMyZe-SVUK91bu6eNqZ51g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/yGO7kJMeEAl3Fjt_7UdWoVy0DX6PvXMyHsK9KXpnxwwU7JvbFhMGLo5ubEREEQ1KTTmEpeKOLPMweC6wJYLsbxldekp9jiSTgUFgE5ZyUDNiRYLAQGXOzx_cw3NyB_lWhJWhxDV3Vw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/n4iU_CCLLKC6f0kczECoJlbepAjSeay1DH4se-JFhMG9QBKWRE7iauFOvFFV1vZGqTkXCH2DjjJn1jJrTePsrDGyAkvCHm9v-xn5_tpTrHC4-7d9n-rOScZ2fVPcd2Q38HRGqy1W2w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/3JSGxEDWgV-HtWt8IIWUPB0k5GFc1gXX5e_unviA3Sn86XZo5wehsXJky8PCg8MJkFdfL-ebjnNXbJvBMV_sTxMYT0LsXWoGuyPleLbZ5hKYQZ7aTJVX8m1l2yYb1FjkIigabmUXvw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/1l_kscNfjndvMZdTJJQ3WZgG1nS-BW3aOWSdgEzuG5IgPauenhuphd4Wrb3IVNkvjhjq9oWgVJ_mUdtNt91d91aeRFMnKvgL46kMIRq0g82iTaR7JJ9LD7G1yi6p0h58qLGKma20Zw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/q7n4mBz9cBqgrVvKYNTpTpaklNLPyWMu-Pz2poJq6T99IO-Uavr5mjxipzXlzCUT4Fn0gNnX8Fa0PkHm8RVQalpF4eN7yEOr0dLq4aZ5YpEokKcDyEMVOfalVsp6-L0oR6Ll1a-19g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/HSOmeBXs9ZS0x6yAA5iK0cOGrESx1C92Ikf7AG2ydwKXL_hppnCIBmCSwQ6GqE7JgztvTP3GVR3-b5j9dmfdM3BBiBiwYhOgXFyDM9ySGLxDbrBdMXzxXiZ-WPaCt40BY5hlxgu6Jw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/JnOho782kBBTCDUMQ7y0AkzV8w3AqqBqEutMDDJHXWm1Diwkfn0qPoLpeLKKBxiW4Ts4J2c462amGRBxHNNg9aEVjvRWIBnlC3AmdbFxF8ITFxNAZDPob3EavMRU2UVMK6oIdMg7BA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/z3EH4LwduioQYcaZ0qTyak7_wRzlRQsuOq5Y3L39zBDfobsKRZ9aesU5_2WDDofSTEF1oP7d63R3O63g9YEyns_8hMU8egaZjcb40KM-eq7A-dQkYsc2vXi0FyChIW8FekhteKMdNw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/U4jd65TiV86YewqC1Huk81x5_MHSpplCnRPyq57uPtqB1iEOYm_i1LlERn5fwuwZSCH4Xh9en81mXvqjSGYBOncqzrfi3MMtgeyTaB6QCSH6lBaJf64TU_bskQJZskMdbY_5TRxMPQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/MiWX7E_bAtiauUuZTQ6wwbNeQ7GjbxUuex4IX23rl2UPwktWGMV51B311K0vrSzS7eiQPiAIWp5nL2WL83-rhp2zfTvsa3Fa9u4aAQUY8ej2ft7ENPZS48oCT2nDBM2fdMPCPfC3RA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ukM3SV5Kz_v-vl-PwLHptVuHMzxlUFOW-ThOZ7eJxhYCIB70x5Fym5C-6B2gCMcs8sHMYGnQ9JmkiHk3koJo8uhjXNEwB0WHfnhmsKa94TvktixaHLVzZG02LE8t3drdgXtRzbtwYg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/I9s4qlDYRRDZ3DHXn4cLDTbr6ADqA73C7e5OvpV6EBJYRVIN5GVNh4Hm5F6qMcEAB6FYdmrgqALdKVRmu1hulgZ5b0-SOUk9DLCYO2zcCOceI5TY-3EJyjHP9Y6iLqWznmJjkP99Zw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Hqfjwah6o4pxt82_HT3E2ygkEOANCBjGII7YIVdiQB9AdnnioJ2kw8JYFAizu0LI1yJ2oytYVNOFRmppO3w5QmGAi27rzzldUXwFIUilBqHCxzPD7Y-_-xoBnZc-hppXODSQodPe_w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/o6JObT3FESTShdVO8Uh_LzjQCfFwMvYknWuhiyO-tI2lIBpfjtn8zHTphGWLiU5V16qjfZ9TqC6BDaxJk6PTUubOnHw21mShHSZmUKtWh938WEqFYGSoQuIKDSMUg1UxBuFJwQ2OmQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/FqVJyH9vF8F2Vvb-GI45Xsdi1HplUetASVrAqzjM_qccB0VXpoVTr1TJZ23aiGzW5Z1UIzzT2kgPGbCOm9X4pA-LgVtOUSZ-Y9qeSGIgmM0SdTTtpxd3iqGE9BMiKOktLOYD9Z88ug=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/S_wQxj30XjB42PRY6GSZTh6zQE2w7pPVXblCGJBqIeClnyzsYNKHfiWzQsly551o_Fm9pQ226fX7BRIMzRkZlTVKZ0L2a0sv1W-okaOr9sadbMFZtXSbsKCPNNPOnUe_DtsPQpM_MA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/kigbdCyPhbEwwtnSCdJ7bYZA27cuV0pZd0CqevXAipsQKDj8QgIZhymO6JDNG6vJ79jA9aRQOWhCQo7wFA8eIt74_TlHRbp-hPB3_3oS-Vw3oIcp_VxJ2y0yv_k8T03k45EatcIDEg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/IGd0AU4V58QTJdbHGVHnXuVilElOwVD2tft6hIznS3LVI5jUfmF8BfIyBAoF1bAzQWGHBPr4Gqx_6cOvVMM04WYoBkiM3AggymHIJyVq1k7pPidqHAnabkml9rwDCvRJajRi-TEekQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/2hkFXO1lEPYsn73qcTCcZH6-Xlr5hvP9vWwSxkvTK-6eVseh_HurIIwZtPIYlrMYWHRjWdd93bIdcHeHL9PMaVZ2Z8Sz6ucIAM5EpCDZSWVFASjNYR_8rVqj8KIdMO1q6WgOl7-W6Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/LSE3BX_iyjnXDiBGf0z1vHXgVaVG8GuaBGqiZWlxI2DJlCH1UEHJOaprI6Ey3AA-LCBWZI_3mf5C68d3JHqGA46G0Ywo_ZckRDdEi2EOJaxXdE888fk8LbkelluQmv5tAaQtU9aBPw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/K6Xz8BGRbcBq-xLT6L5b_252rccnbJjtmM354h8eFeVCPpznc3DDklbYKvJs3DISKrmri7XCPczh6Fu-P1MkUYuJESYsrDLeapy_ol2DS2W167AR_VRXDdSOKIUxi99QdgT7I8aVXg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/mOdG2frk-aG1umaXQgXsdIsIYjxTijHLAoY6G8Ar4Mu2bQCHzka7gbyBu0UYCyWvOsmCAcYBQbcEQoZ7Yp5Ow6FtWq4L2PYrd88jylQEZrrWQs-ROPToRmNJqpFQF0YqrgdSLnfxzw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/FqpdkH3xrMS2UefhxAa5rqIpfx8wrFZrB0iwIEZlrRAOZiMB1ZxCMggkbN1qKS8o9fp09vaB9DrJtm2jHEstINofr6q_w_yCdaRyrXOUJmx_m2yxospkEEnB1lV-HfkmchnbZRkyiw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bI5NcOwZo-CA2J80tOWvaYMNNZ1EcTF1BZnxOFy08D4--Vc-UoSH34JGKzLsNMWh7W1PzwSr9bk2EgcyRa_MW521pNeYXIiXMDxQ5QqVvAiD2VgxxEZQO17LNOwbLPMFAqZFuK6V6w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/CeEfdUw2o0rUSFCK-Q7ERNnKHwAMy7tWmlzD1uDXwiNlsP0yhQ7yOZz16gk2xDfRhFX6g_hQ8BjloRbCeDDflg9QjHiGHfhnZhHjonHJpt3SGZkjTyHFFBvEFpA97RDlNJonx3RBhw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/qVC5bCCSOe_3LhVnasI7wa0Wtk8TajhEle9vWX-qg9lVdwESyuST2FRzvIWgl4IgaWK-6KgPz09-w6UO7bWBbrTskg6808g1qT49btiL_zqkHGXXgsdB3Ul_9uhwh7VWZR_0JwKF4Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/x73LPebsjaLcL__qiXEPpSbCsOAhSky-p8ox5Yecnp20kxnOjSw-PCxDE4-ySYQbmzvhK94AJ-9se3KSM9A3r78JlvhRPl6XmAAOt5FUX38OVGZeRotFvjo0oeo4a100mDJ2Y55j3Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/vZJTrYvM658-Iwrm0059rHwoPhDwcx_NTeuky_ZcIovtEZpDzJw4FTXomIhtGptDXoLV7wXCmyFdTqkVkZ54SvhUxoufeKj-6Ff20gw8XN2DrKwxvp-8XI7U2k-lLhbSBw-RNYPsqQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/sYM0BXXthjhcteOOrPIuxtyvKMMor9FWc21Q3iWT6buQabg-oQIofRbXsXXyiMrEXLmjgC_7MIt12dgnIF95l2GQhdpxirPv0dzozluisgd-EEkUr_cts18BfWN7j59iZVlyPNBY1g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/WdoM5TzFgzlXJfpc3-ccHGoe7VViJ1Cz-AbW3LRO5ycxrGcaN41cC3uef50aoqG4yQaGGb7bQtkJ3ywE88k-7XJ85hkhxoXxQivU16aI0bOrT3VKu-JQYJuQ8v3ywp_nGTFZnYlACw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/WhkVjXvMfPteSCOZANyKcKgI7fsV_vk3cC44LHteX3PxCWuzx-wMjumDA5df3Q9g3_Jl7cAix-m2TM0TiVVEIre3CB-GJJ3zzo5npEjZNpSqiE3WsJFVj1ydmPltHCz--z1fG3O05w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/c9cyaBTqGOgfmd7n_iapcV2over0tzR4PeYITGgpfI3XtbsHGv7H45Btc2foYxufXnDUn26UgTZueO6rJfpK-llhTiXIQdEL1tA6V2AivD3sctdPZULa-8b-K3QctmT30XKklwob0A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ioaAs6ss1wr4OQwCNNVVig3Y8vi_8LzDByWDjqgFEAygv24MxZrJKkd_N-af7mdZn8MnQXSCfmq42mwaKBRmAP5IpTVb0mMowl5zlqF3vjldA7qZijlNvjVchMHoUqSHwjgxSYiY3A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/z3Ah9nm89WxHzwVOIRUF-bzFCWLFmlpsoE15tuYEwYIH6wAwQVFg1x83oaCzYgEHNtQEk6KiP2uABb8CZ8_YZqPrzvEBH8BORjYgqn2bNthwoVr4uJG1OKAV8YVNfxDQ5GXwTY8B0A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/DAuDq-EnHTbf-AOcA9oet0pSgyhEdFK9LPOcc8vhezVM1q-wiDZlD6s5DM-N4CCqJC94sLYYwLMhs2x57CKddTM7MBO4R8Ch1xD1bHgsLIDlGghGCA5T9lSw_cAtnmo3VZRGOFYPKg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/jhIDTrG9RUMm8kPIdXx7FkQ1fCnjcnD5_oVrNPKvl54MhBSUnF963S14YLEZ9IzJJMrruvkeUNlap1sCgE99B5I3Bk-7wpdRBqd0S578BGdS3oNvurSWGXjOFxafAdRcy3DGc7Ts2g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/pZepZvoNSncoB1QJIwMdyb4phZ1maslIsoHKA5SJ-Gzj6_P9cXZ_QsCPdqIS-g0-Pry4k5NWnTOLarzqwYhoLWrcrG51fcoULvFWcgpFDLSCvtqJUJ5bvprWmwJ6D22zuATK2tErKw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/XswEGLAVd3pUFudhOTDOebyxVNc9ngoTGQQMuOb-tLv5opI0cRh9OIeX5FdZdW-WKctjXNz3GLqOV3-E3Fp_TX-JbgqrJxLe6QBISBBfO3ZToJST4Gh_kZdpJxj7ubrUkc6WhZ797Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ZPYFLcKo0juLdzZzdBSpXVMbDWYXzyUTyeQ6CR8l_5GgZsjs9ylwLExclm6WT7l8saEEqmt_ncXBO-j9s26ra-aY4sHa2Iz3D5R-i7J-3rH22ADA9-grtg7jnWI9LYWD8DMiPTBRZA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/wBFq21Jf4CL9vwIB6WxIxhS682T2HjyJ6cbz5DxKJssmUli5MLlHRGAxR_ajNN8u3PEFH-oIFi5_PoOQkVL8gx7nD-47gDJIoCqNiikWYi_IJigkkhXD_pcG7ohsHYdeF5VbhU5tGQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/tvwrDjIG98A0fwJmql8Xc7vppfkXLgbtYjkHyEBHB-zE7LHd_O9v5XHiLFjXdmo29zIsE8X9FREplb63WALq3rfNK1qT2VPXMpADbRLzEehiP4ZZbUWJNVnAewsuvCuMXwK4dGjCMg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/-nhbU6swiIQUiyEnyrRKpLsFK8tAspl5VEeUOJ7nD8NJNoNiDW5ID53ZWwKtlRvaIbizlXIquLYnlIO9G4GIe4x-hHMjw11CZ7bQ6Rie-qAkZ9oYm166pYxnx4M9GVsMvAPpinQcHQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/HcGbfiwFi3xhiqnV1FRTm4vFASHcts3GIyfS42sk6bKBgjEnO2zX2scRSArMlQ5G1Ax_JvXVrhLn8NHQOTN7Vx73ZlKRCP85l5oBeDSSMo5X1e_z_kvW-ZFFmUUGS5auArkKlfOBeA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/3aBhkAJmuoLm5SbGnzpfWIpjKVFfdSDeapq2m5V6DOiEtgQ49XRCTif0m8a2HFxrMSF4Ytn-q6YSmaZXbpa2VFTiX5J9KtYyBCIP0gKvbsFgvXJPir-7Q4lWtrDjto5UNN6MScTJkA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/joXX87RbQJ2sC4ZRQ07LRTMm5OrdetIS6SNAI_VqRxZ4lxlCr_ma3AIXWxyNJq1AvcQS0_5r4XWqT2U6jEEEXHyEumTC5tGJ2zUG_rYISZYQFk50SAB4zNVY1imfHWWaS-KBVk6kXQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/S7EylyQ5JSbMTwG8NXqtbx9JH7YZ4WsFjrFj86qNN6SOTqymMY32aMQ65u0t2nDAnM_qakNfflJbCVrHROeO14N3q_NTGIPjC80PjucA7zEQY-t1oAci8WpVP5YA9BD8V-ivu5Vszw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ak0ELDxGwvYTFMKyrbVbvJSRYdPrGwCCbIc3x4x9xdBfbfDUuPhb_WaCDTgr-WXc9uPo0Zs7lPXXTFeUclEG5moAhSmqZFtvAu6_ODdy0d03illNBN8aKZLClhbrHrLevaJijekEqQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/HfK9-5bZA6T0_Ymc5SIkU4ePxgsjfVVyhPvJVvCMixo_xkErDWhLGsnyzUMrpXJoLcUwxLPHsuMcn9aV_nFJRcbaa-E0NoUc0U-vY1LjJ1NtYNHrSNR4rEhjGp16m9luR2h0-ZpWQg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ZYfyIX9cWBovRAJUFEkEIjE2nU-GYY-bGKqmM3SC9o2sQ31VqDADN-E0Jd_68DSLTR6673Da92Zh5xxuvaw-l1bR7UDCHWdJP0tSfP_apLEJTBEzRt4m0kMflA-ItfkMTGD1xQj3TA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/wmCq4oLGdZqY0D_7aBgznOjmgS-RjH-hMDyI6o8ApFbBEEunbSkq14oLh9WNmumG2YsA0nxb0OvyH48B6cXI-9aNSsZ9CWgl07JK54a5Y-Q8U1FIldsRu1_j8SJl0y_Jw-N_nebBeQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/JCMK8mtUAh9Xtm57T33BjNhdChxzid8wyhTblPHjAAvL46DOoGgdE5l-AFN0ahgYQ9UMQLK0qLF-Aa3p6B3DVHprdD7MD3kuZs8C9c_ROciVP4-O4zL4p3cgh62-tiF4z8kgcQp1ww=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/SW67KhwXrNYjY_yVE2_qOTIjxysDdsi9s4Jkf1Bh2J8VEigK-bSFDuL-EBFedQbRWKbbBUaRdzqNiX5NYGDgYcVTj6hWt8td0I_Sx0S6nhcRN1Hf7R7W9JCMpiZmEUjoBkPSFjKBVQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bcxpn8ZTPFzHwfTrovLHFswF34B8yCv-Bj5MCadr-SD3uXFa2o3NaG7UqfFm-ZTCdW_mJo7T3XOzidWOSa-xmCzklQBBZOsoIcm1GMjAB7L4gS8BGi8BQUdWkp4BsnuJL1YVC6eCGw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/oYQ8e93PD_BIrPXfnE8S2bMgzDSMowAgQXuUw34pQKEBtTMyOVA_od6ou4z167U5ujmSCVFzZTmvvaD_ppORgicCpFf6nMSjfWYW_7TzEdPN-L_oGyj-VQx_8tDtd0RWYFuiECL_eA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/RrYnLy-l8fKb-QRdDtr1668w9mRGiZlIlz6R3TY9ALP7F6V3pkwaLDuCN6md-Cwj2oAwTErRt-QJShwIgQd0T3t5hROqNs9cHF5c4tJUyOD3nyJ_7UjYVisCTE53fi8DgjYCpifsuQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/s4g1aQtP-Tqi0W9MLMVwjIw8iPeWJY9043j0L6S1NtTX1dv7UBHaEeR3FLKr5O9RKtDqlqQX-CqzR__ShjlKMb0zqHbCLONN6WmWYALRlUWGz4wq9n21Fp9EHiuzhpnxnfdBPTUPVg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/XEgAcf6ojEV-6U9QipuMux6qwCz6HUt24XUEQ7bMNQ-2OTTu-HaeSJKVqCf3n10jivLRmaM9YJ7k3u-zHEuZZttrjKiDXySzW4RSMYzMjk9v0OZ9STLDaGcKbXVH32Y6dQ0QL0Tn6Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/juNkkOZndI5F3VAr1cHDtJS9WcTQnmZv9yGxFf1rwPPnJSGCRTKtGaNusswglVS3RHpgYHmIOjKBWGOu_GkeZzyyKkTjSeKlpSPA94Ca1rrWuTy-sYl6Jmqu-3WWSeeOZMGu_Ch6Eg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/qWfgKEcFa29DPy8jzVpAERwEi5_bUaki9caOEmjLf6uqlXxyHTECDaytKQ2mQ29E_s-v8LMVBIoLrFuOAoZ1NjHEWsEC5Y92fL586VKAoT33PNybJeIdA6Y7KHmnzcpRUwyNfm_e-g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/m7nXgaDM884IROEUGRViDdLTT7FKShvjBff2hHOpBj1PS1nHCQmjTOIUF3tEAHUUXbxZfB371livl_4fVgrGCU2eHFFAmAiTo5Zx8quMpJs4rYi_kLfys-NyN18r6F5tLCwEVUTatQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/SoD1ASBX8Sp86KTAtxQ2RrG0leYmbGGs0L6-ujTW3BPHbuJjUJnsjfTvKwts_tvOV4cwF6QF8xZ4NwUksogSQndI0g0c4Bo5cb5SwkBnHqLvvQWDeP1RoD1WFv1TWbXhc64W2eMpeA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/dAo0Bm71VkNCxMrUomKFE_cfmB8wK5tz620oW6uDwT4_8H1nW-wWmgirDJOt44eqvxQOntvvpX7Lrbv2-NtoSNo5nUbNTAb2CtGVKGp-wM_omUkZMljO_GibsNIWzUjfxH1VjCVC6g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/3Nakl1Xx9hprNekYymtcC0mku_-pPFE-lbgX4lBVyNk9_AuzNCbnX9syYgG36uXo2--lRRt4Qdne7_WNgN3CZxgiubUVHXtDFGzCMVBEZrMnWbshqBRifNFPzUxUJA3yxRJdkWlk9g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/62RL0zm0LEWxZy1eTsXzJcYHvaAm2BGzYL2MN1Lx6XNDgu_arAmFSkFznbK1c5KLodEt2XDw9bgWQSAdUaZSwxSvh1ivIeErek2JKbwBxenaTT1r3ML3hBVvcPGn73XHJ-H75Q0IiA=w1920-h1080" src="" alt="" />
            </div>
            `;
            addpage.play();
            $('#overlay-content').append(str);
        });

        // USC Spring Showcase 2019
        var pg3 = document.getElementById('showcase2019');
        pg3.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/u3DByjK2fKH7NyxD6"
              data-title="3D4E Spring Showcase 2019"
              data-description="16 new photos added to shared album">
              <img data-src="https://lh3.googleusercontent.com/LVHtlaWVstdt-A-SOUGt9KVew06n8cTQxkoucdfDeuDG73I7CPXSlTIE-e59i8bq9ZnIoAgkBS9zsWgSZ3NE351z7A1Q1xpQkHLSLqptrqk6Cr742JtZlMtO6GTramz6epr2Je-7oA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/q4JH1fqg-kRhA-Joh525cWMt5vejT5UC74d4ho7n7ShSUEjs9CWYiKlE7bUohIk9-PPXYF89cBkc_5Q0lStiC01DIZsJV7sCNQyEG8SnhVRyyOLwbTVT58WLuDwV215N11X9ZMU3jQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bXD419jTU-0UtzmroOO81-X0HExQjGg4dDZshyZRRnfQ_5EUOdvmZT06hfR01dxs0N3fUUhuj_EkZIw07KP4OWWwG1qS_e1aMqK-Tzn6qwY_OaT5AC7qUh3ZUuwlM6kBDPJ_BlPlUQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/h_8m9lmpivD8qNWtBmw5K_hANpW4nCMwsFbB7oZYzXaplrIMuDEm0m1KqFvTITym7uUfXjrce_EzpJpl4UBBw2Sy_sGlaXa_wVlH5kRVr6zwH2lNmLlWHxioeo0fuIvIGwLUuzMHpA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/b5Ed68UGOhGJOpiAgUTa6_SFSb4Ax9cB_ElaRXpqNTssGFhVXYgwKU5HEiqLAneTdJUFJMJQiU953NthaQvJWBg97PtAZvIeygOFTRcQeUO5BetSvZbtgFWW1dAi-l9M7BNQfwNIdg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/hIyzTMko1z5q-xicOj9OsQo_WSmVeOrfEHc6Ca7_ViuVcBYkeJe9ajNnX3G9IBVoAvCJWujESMdHuI9qB-aU2ti_G3sgDLqhIPE04IE5XF8vUIm78ZmVt_IOWrrTckKOU_shHGbX_w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/0yXFK7zMwUh8X2ZePBdX1bHmnmuYQFNkEoLwVenC378pua-RUKqrdu4710ZtY020fKd8NHQNxdFrolRByfnxjeD8PndlmloDKiK1pgPtrT78-CC3b8UpnIAD9O5-cbQenk8f4ywLXQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/H2cRd5AYKZDB3wzytHc39_179Tsy9_QgW67eppWVU5b8zja_W9D0X1gM7biyxDfwDu9ZcPrdv-32HFPqpUdlD1YjClVyPYrYMnjPTCce1grZCFSihKGGNipq7q2OxuxJKqFeyIP_8g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_a8McCREUNfuPokE0KgHBlg8EWA-lmeNtKxlWkTu-7vRKLXRrMIiV41BtvxVewyjgoCnKkmKURCQycmWQDx952NWiQav8JEBpDwkJaYfscL2yR9f5cSe6WP4t1a64rHeoZJpSzaHOQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/QvV8wV-t_y6uH72u0cl1oYQaueo9fM_ltQnTfeeXiKggAgGCZTmP05FqwYyL-c4pDA25TAsBWdxrLfIM7P9nFP70cjdJ40-08svycCcLTXIbjO2q2ZFrWJ7DO70lEcXXV_J6o9vvxw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/cFbjwjYB7dwPDAfrk16qe5EU_04AAkVjZ4oDv8M5If116yUJUx1i1muTGTp-2E6b2l6_bEQlWKtS89xzrYtX2x_Pr_0UspxXSInta7Vh8V23xbhE0f5FdNUf51MBP96ewVxtG-b97g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/HjsfVAuV6zxJu8W5LODv-Io95XHKRpxnOgQEe4dCZCZV2pDTW8MZKPZ6JI1JCjbufKi4765tlyYfqxsy26H3iyYXvqzLvrOCoYp0WEjlmwW07OH23fe72ykzmhOhpCJ2Y8kNC5T26A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/AsSrf5dhug3vFmT8rRIJzbW1apag8rrRdn7B5cNzt_CM15gbGl-UCkDnY1gYCr5RfwTMyPcAQ5qbpfXwU1dGRCbs8pEETGu2Kk3zC9_Me0JPnnvJojCKOWInbI0dpcL1553qN1aqmg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/u_AKGiJhx4pz-qjgYegLy_pKdjCiNR26-udar5JK5yhsXwrbtGTG687s6yqVYClzTwxIQo6gLH5-M0iUt2mD6AknAzwdMgyMMQ1FOOBcdQ4pw1fLVHlPLT6vBcC62tT3lUBsTa17Ig=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/rrJC4hShvJaFF05RuWn7DdpICf39yrTVH0HpmsgVJ_e_uJLZsDaXrYJ7ZmezFXeVgKuadFIV34VNYZtlWlGRegrF1UNYMV2_a4-pnP64i6lKUjxl8YMyOhyp-PVro8lnIjjkqNGRIg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/lweKHazCjS-Q-lBN80g5M2ZWHsx1giNLAA4Q1nSsw1gUJXgxPxGQH4gqtTSJ2t6bPc8X-2Yuk7qa6ncHilpQigwLsEblkpdXhHVeDF20sNyAXhf_MfAl-1heltQ4WylB--Z30op3UA=w1920-h1080" src="" alt="" />
            </div>
            `;
            addpage.play();
            $('#overlay-content').append(str);
        });

        // USC Spring Showcase 2018
        var pg4 = document.getElementById('showcase2018');
        pg4.addEventListener('click', function() {
            var str = "";
            addpage.play();
            $('#overlay-content').append(str);
        });

        // Angel City Games 2017
        var pg5 = document.getElementById('angelcity2017');
        pg5.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/uK6BY4pPRVq13Ubb7"
              data-title="Angel City Games"
              data-description="7 new photos added to shared album">
              <img data-src="https://lh3.googleusercontent.com/VOW7ijNb6lBISA5XaHYyyCk0pDx6X4QNWt4fWReEscuMgw8zB-ouiy64gnJPUIzZgvoDn6g__VL3aL5e94YtQDcxBdG4V3RoY6wJuEY-vYtvmJATu80meYeuRSX9WOXb48t3Gmhi8g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Tjn883qmSQC8zWV1beesHpESS3adXhjwPMEIfVaed1AZvudTZYq1ErUSSGfg1lgnRVkMO9rZWsSfLqhUAUCCrG26Ki81UN8rJtutidqYFco7JXm18Kh7SxzVktI1iyqoxmZ1MlSNEg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/KvFv4FzW2397eavUJ-8iQ5aNGw4GxP8_y0iF5N2vbiLFzbV_gaKU0kk2ThlXDNTIYqRT5athRz7iOQoutD9VKlFMuYGNB29PrVa9occboHQry-TtLQLypVBUmIEKPCeQ4WGivu_j2g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/75OrVf_6JyoGv4fgSsTe158ejfZKzenifwo2QwmZrhr3N0WmJVPmFUlhf3ENXEht7xRhG-xxoXR8lJF3qMQEVIh3xZ57u04gdFp29YxSSvX8f78kBS-nAULH78q2gBZ7jPEjkBL_PA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bQtfgFkmNWb3KL0aPtbzGx9aJVTrd_C9atmrqTj7rN2T7sG8FB5ncmLD0k6TMtmkCcbfyrljQX8EiC794oawXKJvOtLI8ynPDytIUs2rnSDo2AXofTlg2p4a2o9owNScMhUcqdsViA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/RZqSEQT5unqfDk3AMCFiACRA_ErqE54v4C3W88NWuVo-KINYUzsl0OIoYO2txyh9a-P8sKfZT1YNd4JtMtqbrQWFXlc82QT_dnt9Aa0BXxWRH8uLwIfgbTe8WULKAFIPsW2BnKuZ3g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/yYN7QxB8F2MriQ8qMVYhlHYPV7rRG23uags9UFTx6W5YBgMFGsdWfyAxVqUdePMPnMpZPKAqAzCPHqfnjIWEI_Zr4kMXkkyLPQPuSJvzzJesRSxqAGTZbmENsWA6bDEpJp1sOP2eWA=w1920-h1080" src="" alt="" />
            </div>`;
            addpage.play();
            $('#overlay-content').append(str);
        });

        // Logan's Hand 2016
        var pg6 = document.getElementById('loganhand2016');
        pg6.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/rfTU1a4iXtBfLpjL8"
              data-title="Logan&#39;s Prosthetic Hand"
              data-description="33 new photos added to shared album">
              <img data-src="https://lh3.googleusercontent.com/kyPohP-1CydWVm2ZCUEOBhFtrO8pGlBo8uw5Hc0_k_LOF5oHZyFp4wbTszZguWb1cLFOE7X7n9yjGg5X-4B7duzNtJUHCojirwc50Jt-CT2DZlCbq0n8oaqjWVBv_ZIW8YK8nWziAw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/lMW7ZIL5aLdM596j6_v8pUoAENIgc_CqlHQijBkZWdm6j4jkt-8VXd0_r6JaYXGzpkJ_NWWCS-1jdOtXstRb79LYvSCUn2z5fXdGS_DOQ5dCpJ0ZlJcIBSJ1uzjfH-zw3LFMQCkZyw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/VpyuefYblzFPHeXOxY6RFJ0ajULBUlAYW_CDEVD_z8oDkaF8lvIx_4Z8yP-8mRsyYoOtQ6KgiCHS9AG6zJGw30IC41aiGkuQVGseNjQRElu1sk0G6gmhoEN2uSTEZKz8RUU055NhSg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/HdVoShH7uzTel7DG0rTAuKxi6KEnxCIDoMSEA4f-_OOKiiHNSjCfulQESfDCUCVBjvdF8yH9BBjjACNIntdlhGtuLyKbWkjTA5vz3qneky2O1w5hWBt9GKNtPgKL1lUP31cIDEAxWw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/XSzPjI5vjXi47pewBqss2-LCpSWRIqhNdQAbdQ8tcVgbfb5W--M65iFvwn_4p6hJ7ywuWjyPyu0ztoquzV-WuK6fWZJcxn6JbRxiV7BRqXRdIIpiJAUwKlrT4SBhlezS0hmONWKH_Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/kWqCzCio9bWNfxNcQdFLbtop71dnCb2Q8BMQiPQ_2nsek0aUKolpAjXA-Jtd26meyIjm65jyuTS9JE5VyJUUFakO-j2d_V_qTnEqZAbRTKxtJMFPsaY71QfzyiWnKej-h0txOAfUFA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bNTikPVPDjVdUbK4SvXW59H0H6ey5XduRKhweG9AvcYVefQbwC2zJPvsal9ZlnK0YuXjzpWGxPmeh1pIvoDY9oFay6xmLva67VD1wOI0nCK3AaEdisAEsjYOl9uz9s618CfLoOl-0g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/r5BmQhbxVMvq7ZSUjlWJojvXGa7CIi7AsbTBSo8kJy77FxMa-wU7gZ11aY_j8XMmoBAqdaYymz0zpgJa4iQjktG-fduwtLaKMXj_Teg8oDs4_pYKG5Gjefy5MEtjfLbZf1bl7QIMFA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/iEdTg9mldLMMhg-jqHeLmsd_V_ssidzpUY6upusm08mDioKY3sDOgJM-zFHjveKS5obMLdwSBXVrdbPfrNpnI7JJ_11CUy_vAFfGBz4T0WatptXzryP3X42w8uulxA_Hs8kiSr-9ow=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/7HrPYjbgR0qnv0Z0kJGhKDJS6oAnmNAFedTdsA5qHW97USJ9Cho5ScyccfeclYsv2pnrndY594Q4gaveJVAvo3RsIzTnp2rFfLorPAiETWjtBLMALTcbQlBh0TZaAP7kI1S5gLShwg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bjTynPBdEAqCJwR6me74s33wTFfflGLDM1I2s4tsJyGpIne9jyrik0Z-KwbjgRRewwkUpK63TmAX-gkbAGLl0F6qV0UU1Pqdqfn45R5SklBnRQF3zGsoXQqxmwn1vknyly8ZOA8IAQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/vtMK0pvdT4JY4OKqMOTxQ9qBptqiDUiU9uDhig4WwNzgIBOU-l7PRJ-F1yRuAmYwD6OuRwKM3em_ov7T9Q1Y_Pre1PpuZ4VHnIWfTK8rI0g4_Ba7_7imi6OEa8NUuQRNICmTHas9gQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/mRCLl-lIzXuMRdOTpAeqQAUzHuQnPeLLyd4wZM8xZB1dcc1xXkhfSqRwqwbQLgGfs1Hbr203mwZOD37bAfZPBBOPZKn3C-w0qcQKVsbmD2DkmZaht1TmralqRbmgCPzrteF4gARL_Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Ut0IgL0xlZsbevAt1Xt8E7jAHBDxK0lOVlAt3dwkfgF1QsWk3HqwCIYyYEHNwKyarNVu_g9V8yG-gWvtBatk7anwMsBz9vjBplJi1YhN5P9PfPOaPhAnHMVW9WntcL9ASbDKIDK-3Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Ua7U0xmBLm9aHTYXABMp2kD3U12Ey1SmWN3Gb_0uOPQ1mDHqkmKPlTkS_c8FYeuk89SRpWIdcofVNAKp2RfMFlFyEjP_hhfsZ2xq12ZHOkyOdx32H6seCrdnPhSrYRI5Y0MSU1zuQQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/CVFjwXkRznKri8wfyaKTr5CQgJ121hVI4wthbygOhtXleQlzxhYn29HyUe3M5MQ4AjMuXenBp6k0yvW9Y1Xxy5JJtrGkmUkc2P7UvW1u4qJFjsAoYRboaYOPQlWiKhsc4_DSO16VKA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/dp8JfGqnSyueyy0PK6bgkABAnemu62EYLrj8BN4T9YGh-j550tvXErerdqOzlOmAAWR3W-dsTLdkSpvn-eFcDbIfiokIUtS8J4vwlckEZzcW0rcbrmCZqKbfQ32SGdyEOAN9LDPmOw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/4Q-5FbiKYplNsOxgZp8a4Q_bHhMNUU5A49K0ZMTaQXFhL7TUUAOz9r6oqNgy0I_SoysVArdrm2V73cUIzhf5cqfJ2nQ058R6f3elNltJIY8SMnuaO2m0XymwoSlArwELyzjOIt_Umw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/JdMv2JzM3dnvhDouDxs287adnciRpVaa5Rm52h_IFEQKeV6nTd1z1joQEWEG7OSF6dB8GKySlMOkgihyAgY7rAJiebYD55Qe1SvciYmKMs_Fei0s8t-pHrFMTOMentesldcjzrqQiw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/3K-v8Y1lqMCjCrWM7AhFjctW2dgKuCxGbahII8Vs3T9elYoxjWPrA7k3aao7fvSnoyPaGQXKAIi8JcjeRPd9wHuMEhD9he9foJcTT7oFFsicyKl37XRcMtEDZYXRv09ZTEFcxg1TFA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Ldli_20V3PtjjCel52S0Xrz4mudRZOdm2-3ykz_Z7cCa1wZC9TMFilqfAwSQ_PAQEDc--AvKwzDWNdEQQu7KtMYqKA6FcaAdy6asjxDgexnhaAyDVVRA1SVqv4N9emlZnuM3GjoI1A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/53zUrT34df1X1CbOmdNZJItgcLldJSNoQWFApD6iS5AJucgGtt3eX-WzNqXupCCaUi1KENynLD-2xkfi5d3LLD9RNEjT9j9Z1_lRoWmyxJEmscm81Um7vGMrcaPEgbB1wJKDD4FL0w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/lUH_S05HNWlXnMeLk_LGBd_GOHoCj_hs1TyPv38jHn5UthZKqMQP9eXQO3q9YHNIB70Aa3DA0Mkuw3MR82UlAJjGhZXqcY_unwgHV_crNYtN4OhGD222aYBszYK7seBS4_owojRpEw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/dXHig-HHOy41mqztKvLolqSjVclX3eeo_iGrZwc1NIC8dTmvnwWK6-lF0lZmniJsX4MefbM1Jo_wMgzuD4IFnBDxk_B4yFROi7JjX7fHPbYHKfmvhQxYp6XPULDKaIlif9uhObU-DQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/kcWh3kV_0jlRrXyfaX6Ykou-QJAztZTem-IYJbMOuENxW0YQ4lCn-Oraic2GJd0BbnPM-gD9LKCDUuhhi_kwAuuPWww6735XD_KTA1G0Ur0soFyJlsQ0d6xCtNtEtPlZElLeI2C5jQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/kiFf60ony6H67FnXUGPl8hW-NBR-hDqkk7z9QnINPTyhHfeaf38s7gglav6qWr_VZL5TBSCYFoKno-3pH2d14y_52xSf3R6hHyqQvr0JsVS3ziCAGJJUtzWgC5Ha6E3CPcaYa2nCcQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_sYa4o1Ba0Mw8mC-Ew33Rhd6QyddTDw09ctUaqwgbzytiIAU2wxWCVNulm87MhshgfzGBIpIkiX1YLHYqfrMZVI2FR66SgTWUaIPgB01Ldd-SZgzCeoQZy0_TVcso_mLJ6pCKpQwXQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/r8r848vKSxhuuop0JnWx-onSjf44Z56rvI8dxuvg7sPbqKGjxLuP_Dt0uT9Wp6TbA2HDSJg9Oaoxy95Wvi-4CNdb_R7YDlO4uoMWxR-im0SV90oy9XQLv3Fq7uHhQ8O2wUWjK-raZg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/RXdwIqfNirSxUoPozBSWoDDZVUWm9W9Lce9pQVPUUNG1oc1MXEEixJfZ350lWYylVr_yLLwAX_oMhaoGwvmxfwr7QswOWlxovzjjiN56tGw9bMlZHumhdrpQjxWk1m93thriC9u-dA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/XXszihMVoUkN0cSXEzHyXnlXrCch7CyCJ2szWNU9KUBI_AMdgPHgx2lR55FDrvcVQRk4I_fSh5cJw6v8PcDyTYAYHQZe7tj-yN1G5l5B9PR2jMfehZqZ-hlIAcKrqiZ5KHp8ibd2yw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/HLj3fjByGPUZFurC3Ey_Wl7fTev-kZCmfVcAas-4bZAhWuiCDdMm9aNez350p6q6WOJ0QIiUy3sI0MMA5ELBTiyVy_7L4VsLkRoSZUg25bESFoo6oVZZx2vYyt6aBhD6W12-4uMJVg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_Fz9X4b4h0_HAIwRqYZlCH_dm7S3xej3-q7CB1IZJU-L8jfU7N5G1dPfil_1OTZYDMIZhOeyt6ai3yxiXvroTGKq2YBU7mW7AGIWK1KL_OQ9XFeiXB0wiIgmoLjSOSIvQnQHeGUmRQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/CL0RCnhvJNe5jUOPKLKk7zL5eLmMmXGYL2SBbVRNBVWZYvI5LgPWgZC7xKtEUhAiOiGWE1gpTspTGDoYGLRVHvA9QX8qFMNQZc_bBEI3slU21BGitZ9IzywdY0Y0iFnC7pLw11aTcQ=w1920-h1080" src="" alt="" />
            </div>
            `;
            addpage.play();
            $('#overlay-content').append(str);
        });

        // UCSD Showcase 2016
        var pg7 = document.getElementById('ucsd2016');
        pg7.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/Fpf4UqhVZw1af5tT9"
              data-title="UC San Diego Showcase"
              data-description="28 new photos added to shared album">
              <img data-src="https://lh3.googleusercontent.com/L2gwWXi8QExReF-jRlFC6u2GGw7B3mPdeRt-KxYJUuw92GcK-G9vJ8pAoay3VR7q-8dSIaJyGPBTvhnDdTnxLFoTb0hDaoYukp8-qkO7njHqBpJCRKZ8Ye4XPxCJshMoKX8EtFz8Eg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/mzo-ztqHasgdh4Hsi6vb9QKA0zI0IclAef-Jw-Zh0naBiA-VvAnfDC99R-rZZWDSZpytZS0DOp4T6A153LfLTmpuWngutFTQpNg3T8NyLNn8t4fKoK5RQKPpicwnwM08vS3BO-ZcVg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/V9ZtowImHNoRCW2CiQSRwimHnn-vpMa9QMSgMjd3Szuf_trnjrNuDerdhdswcmoc0NL3_BhlLSD3ou-hoJATocaVodQAnkkf1wSalf6FveHAxNBJly7yPrHn3RaaS2BCFuQfQT0FTw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/EXbSuCtS2EwgHPb5AtdbyBbZz_3sfn31_OWui14doaY00ESb7NxzoYVdyvCIa9ut1Die7cpjIg2spARjg7XCPyzRsyQ1oKF2e383dyAEkM2ADcIHmC8xtObkOJx7qizIcI5HeEl3kQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/olDKPmSSo0Q4LIn58Tg37gSeIEoO0075kEs_jUNfdVbulK_vYRdU6O1p3vkAVQ8oxVNlal-gDRfsBDhJmV7Bh52WcttB38inpFJYYKVPULf4YcOnO7kmFTHHPAMs54BqDRaZYLhwlA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Huh_8VVgMT_NaGTh36WdsEJnCDgsJuVgtpqW4bRH4HqLJaB9an5VhLtUk0mDt2qjIkRdcwk1DPRMAPcN5GOtLyhy72v0-NhGLUl5lcckPxo9WzUAQrAKUY9E84RtDvhp_XmXPlhZXg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/FLLx1uH3grLozbxFO5jCmqW8vHwjAGMH-HU_G1q8ZLt_KZOAgbkbbU2fovSExTLts0UoNfFGe0g1TjDQO2BxnodFMiiP_qNLhY8ipyS1PX3OsBfoGuaUVZmme0dEMM-lCLOT0VEmPw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Td20ohPSiRFnNq54kii2lZ5qwXJ7rNJqvMNyoiioPqqjhD6xrWELqyW1EpYtvxkcvKtDM84zYuq4paRj0l2EOaQj0clac33lnsGYLCpvOKfhl2Y1Uoc3SFQcfyX8YhH98SuECk_OBw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/NQs7_gX2nPV8FtZVeeO7E1S6F2RsUTN8-3Q98nrYwziIAoI-IE2igr9ogE04glSG_JQuFHIWb5StoyA1cjkAxc_iLs3fbax-Wnln3o9idBlQ89qXHXUjkSrT82gzX3fH3-AvpLBdiQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/NWCTupHDyBfctpkTkUAIJxzWJBmwAHSYw--wBfhSzheKBpLpGyJdmb7uWAQuApj9Exx3OPZThq06Knh5KKkS_g6e62qPbR0SSpp1y0wX3QU8-IxFY5RhEkk9bdxMNQ9vmxUaRnqxxQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bSSKDX_M45bxh1D08AEkihfVUDLLw5Z9eZBm0FE8P7hxJhLz8ssk_PUwByNIuKRt54-Ru0dKRsLMmXc1TEAgUJxUNrWcp94fp5zHg7gtSYQgyjMkW7jev2UiDIuBJgkMBryQvVCm4Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/AVpCZ5Jvnrl-c2EyqOAk4tVxAGlwLHWsSmsF4HAwNpZBwUzvbCHhQKY1tNmM-fq0SZoRKbvKtU8M2zG1szKA3Jw57MOkrgRCQoTnWJbHyjK0_5tAtnCDWmPf1_8mN588yLtQa0wxwg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/jhqYHO6QSmECGvB4chV-WVykFjaXugtFuw1gQD1XPlGURW9ZpYul0xGihZE3QpHvOunwDKFuoWZF96GO7OC6WmzVweM__Qy4opAEkF064TpJmIy4C4Mh1PiZomVkS14DnBLKz2xThA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/HdQ-LhTV2LFMeck_6ysJcMB93OKH11gRSRTQIFHgx0Wgggk-4JPVQXyBU3I8wKzJJCepoI1dfbS0TQJYDSS6DKnDkp36b0svBNEE8cI5W5A9ieEw63hbzvH0q4Ef7U5ZefCna-CgMg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/qxg9PpIy3htenY1yDFuMReaYeQgDcqNCo-BkPbODAyS2i3MrzzXcUbOtazVmNxKM9TvSAXcL0vNdeJ8WeLepinSQjZegX2RE5fT_sX2g-GZjnmYgp2zDzx3kMwNbc34szRgRoeRNoA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/lDyo8BwmyMf3GCHa86IH57O8WUA35L0iL2VGs08_khooRV54vzrXOO61pc7XPx6icGZwxu7t_91tU96WXkILgstPK06rk2eVQASFQc1_q-G39E4eOkTgvoeNImb4cX8wha9dGFo_uw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/3A2rKhtPYKaQ7jX7vLPB3Q4qd2xMjWr-FwuFvrjfMe68tjD4m0hTK895zTwDJWN22dC8CKOKP45t-ZPHQ_rLmYqLLw9at62CINQAootMDJroPwaUXD2QuXGolF7Mls2SsatVeMN57A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/CfYXtktsV1u51tpte-hcGyYXNzYgZoYkMUXnKcLtyA7ADzgfNucF6ucpTNZxjlE6d1OSjpQ1lcdqqy_H_FE8yBUYIZWaEMKluZQaANbIWEjEWb8YpqYqUIkP0OTn1QBYiIulMRO8yQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ziAFGLMytgpIE-jT7EJw-Vklrn8Z1h6DP57hjelTVOHL2cLzSoA03VxcWbP5CanFE3onh3FcVMpzWLvV3FMgInLapOnwP5Z6a9Nio23COufwhkTi4laB_HtVn9rUZWbVK9wjAHwvQw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/0ctqgnGVE48OISAqWfENc__hlybDD46kSelPfkJ39R6avkNJZ4QCi0XBpB-Z5yKIk_xE5I76V9OFAp7UBP_SY01SAU7QRlZhHADrISc59NARaAv-SFMaYHthlvxkrKaWUO71ORhYPg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/VSy7mYuVSADdLE_qyqrRMBdWyjbCQA4yY5JDI68M32d1QrO7r5Qa8WRUTbhwxMB2LfCkOy0URoKDCYwcCezvxqi1UKF7QHiyS3AEkkLcTRcEC2YlZbEy3IrfcKRP0oYUpxPeHIG2lA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/QgQS0BX9P5tDpBohm0dMnr51iyyhwCwB9d9NJhdprVf7KBnlJ8i7fnJGklrT_IH3NdjNs5scFjGY9p6ObQYK_TG1eZrdXhAMO8nVxsf5OC4iIEYsTpk371fY9y1pKKMlQirHP5t6uw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/UNFOERfYDDIvIc4mnnT9rUHXUIpCVPB-lEf5HV2VfUUvOJk6CR2ajcXzxR87etBT10E9hlhAgWhx1Bcozaoz20aA4RfGtbSJesPU3Lq-cnoiARebOy6YK9kuMzeXlFbFAVB83emWmA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/xQBDQT0wQkrBvzCnWWvxOCWR6U0-x9CQQBoNBoIJ27J5s7Ck3_g4gQgAZHyL1wnh6FmXTd2jrVN_nBcL7ijYS2LoJIU0mc8Gg1v9YLezSM5LOv487PBCYMAR8DY8hZQ6tLda9Kudzg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/baTMnOFc1dxK3qPkzUgOgBMsBPMEF1_Mpm6ncdcPcCXHzInKn0lwsvYQq0ryFBD0XcNcPtdMBkvx_kHOx8eMwNAXDONUlcwbtUGOqlirt0JF7SS1YelzWWO32MOzr-2uOGOSNKH0kw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/vVpN7LpMa6Io825itEcXCpDs0eRPbjAGgF-hWYspXkMwfAEuKbtsz05GbPE_lSIBL3QigUy3Dso5mz-9QXDnxWjAoN-TTtV9LraBp17POuEdYkW5sEMQyDdp9zniNRj_C1BmbO3oXw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/41siK3Lb7E1BR5mvSzVQOJQTCNOHwgrLl9KfMv40qzaP0ZtwawL389yD6rYSh7b4KMRiKy2yacRT0YfHhu6l0ShUtNEe4aQ2p0EgmY5MRODa-uQvsmgxKpfzdaYU7Z1Q5z_TOc0yeQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Uvh_xv6YHxR2QadIMf72BuiejRL9HwXZDSW4RVg1844UuiXW72FftDp8NMNxCMFTqqMKlggv6-LISBrKb6kPf4aymuxj9GieJYSc0IoS22oJAGmgbwhaIuEUKTSnAshjKhA8MaOvCQ=w1920-h1080" src="" alt="" />
            </div>
            `;
            addpage.play();
            $('#overlay-content').append(str);
        });

        // UCLA Tech Fair 2016
        var pg8 = document.getElementById('uclafair2016');
        pg8.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/iZkACVYcnvR2ubU2A"
              data-title="UCLA Tech Fair"
              data-description="10 new photos added to shared album">
              <img data-src="https://lh3.googleusercontent.com/e_mjTd9Gc0gxu-D4g6uZ90ZxOreu30iDu89V30l7kpQsUf4pwR9R5DbjhYGMQq6IG40sro9ECP6ztZ_6oWJQe1u3keor7lJJhhoSWqvpbvRuFQ0BVMRHqWMdd9rQ09WXsWqN_Z-hBw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ua8Id0liT7PmybyM2_l-Lwk_QN52qyzlXjxqwNR9uVBccZf4d0Zi0mfEWodWCDw1GN_ne2hcAsZKxcQ_LWpdfcoCQVmylxRfwegKuKlJ1e2RbnaK1PqbCUu5y7TugSgQc40SHAyfog=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/zgNLVG0pkrjaCejTU6ROVN-v5nTPJTwXp_MAbuokbhuWLtn7SEWP4iC3CFjDpdD80JlM41Eczcki8ilO9Ojm-oV2SRd9k1DNlcCWUAJDmmi6rJqtXq27UqDPVdJXtIADH9_vtEqaNg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/I0H1WuCxFGvGdcmRCC18ROWGa3-HzAE2gDw25XU0T32dp2WNAKK0jpw6agHug43QeWCKs_zXSGtuVc7gcl-O9eI1HUj2BKzge_FfC5MdANgT-Uttg7NfoJf5a3OIELSI_J69_7j7sw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Vnd9sb4pIReBe8SBTatMoj56WGfo-n0WsQ8CJddDplE50mORqMtLqNgwJCyOfi2fK5nTPxXOZQT1n0JAmyCWbrAWDcVz0Iw8g-gGoD9O3dNTPQ5EprB59g8QakqbnbPWgPRgimqLFg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/l_y-ooAGHMBpZz396FTWbS0q5nyCnsOJJKLP8c9mumTbZAftxsEBLVneq_24Ny5hn8MwNaeDog5MxVBXHdka2A1aX1hlJDgCraE5r6LPT1KtzEUuJ8iKss1PMWIJYwQLyWIEIFppjg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Ox8U4fRVaYgNdaEIcN0ukRGnGhJz_oTklO4rl_yBz9RD1NF3No8TSWmd_L5meiKq2R1T1k35Ig1ZN7jQve7OJ8_sweu_oJwAZHaar3c0HXITWkEr6xs8Zw95LnWQEL7yQUy4pd8q-A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ggzROnWO6KDuiU19R8AJoahChsAz2IsA9B8zfDHSZoxlrLm_S8QEmBH6grXLZdye4sTmX5HnAadtBJxkEFCZ7m7qxZa028EXNDgUZ8x4ayH4T3f_-OLK_d6oNSdIbplJi1cZeGnEjQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/godRM1GiQY-_No0nl9ISG_OsyhNDaUZuD7mVn6TSHCvaE5WBAJNRVEv1F3TsQrpBbq8q1lX4xg7YBB2qVQNwQSWqEKFFUSQF-ufUjAsTndSa85snz2gUvlVZGj1tzJphONDU77Meow=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/s-u7xKunKAlxfm3VD9PQLYBxm8mNdctEZgUgRHxQr3sZ5QiFhkd-L6SHEzfgVLfgp0EG11MDoDiqdFDNoMc9f2IyEurwmMpJUuLgi8PD-ge3Sy4_9-9NC5CPll_W9iXxYR_hBgJg9A=w1920-h1080" src="" alt="" />
            </div>
            `;
            addpage.play();
            $('#overlay-content').append(str);
        });

        // UCLA Art Showcase 2016
        var pg9 = document.getElementById('uclaart2016');
        pg9.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/4RTR351FzKJekiDf6"
              data-title="UCLA 3D4E Showcase"
              data-description="141 new photos · Album by CHEUK YIN LEE">
              <img data-src="https://lh3.googleusercontent.com/eLz1SOY4L-X_hg6Tu45oS2PjVxAA8DAsSAR8qGyiiH3__cHQmREyWDGU5jTyq5TVEnLb82cBvhTe2thO1IL-Pxim3uVn9NrWb_IguDEbRwXqB_7WN0oaTZqc8LUp0QYtZm9_Ue8TlA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Qn0KEthpe3yzXbDLsAeBBBid9Oj-wwowRquGGIl6rZX3E7B-_jzoU6giuOZeHLsuliAvmXYQYFJdF2QoZURE1ts2viNA4ydlyzGNPsPyKt0D4YgnctoGMimsTS_4mVpKGzhY_qjuuA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/0iw4OuEKbE8ho-aQjECJLWLqjptSKeZ03YCdalkKKlV7BNLD72xvMKvU_VNsuN6wxDy36p6ttb6Qg6sceIMg56IpHs3UsEXNab-zJx4Dss6Lz9yV031nizYJPCaoA3xrMY3qUI4nJQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Tg18tP2J9lxeYKCNoZd_xk1BwRGYKNIdSDqaFCoey7RK1aWKZYLerJYghN_KG8iunqs-4bKwy22N55ijsD8PMHqyUj1Zfi67GfLnAT6we7oKv-ENCXeWqLVDp5uEM_Hu_fQzY7EI0Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/r5eBkYMU1qRVWTSxtifUoAroGx7DK2mY663uw_TwbjCC0n-QUhz4b2XFAOTYKH5t04KPhuk7cLoWzuGgOut1D34HrZUFBUK9Ab0Zf1cz6KKx2saFKbkyE1Cqy_8b8M5T4wtjDHptxA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/p2dfKTuNYzlvOMNy1SuHaQRLCQC94OQaT1HVnJSQdEiQBENXIRHVStfsm8qO40M714ssmH0L4hi5Et3AKWjjLl8vbdEMCBKesX6z0bIq6BmBhlxsEe24MUjs7Sy999s_AWUGNqpj5Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/D9zXQX1uH-fQ8lWtVcfcXYJRrUNQ_AcDPk1kXrrYPc4qFjcgNKj2NGPRL_gmX15cdvg_sV58eWXCpySseoNEb34wzuusHiL5Yoyh8SxyQm6948dIDsuCzIvTLNzZAxy_3_cJQmWeXA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/IFlPoYeoO-UELWBVW9bdfugSzZLcwJfpMwl6k7txNbDVxwPLMiz7u3NhpUuIbHTzVj830zK8tYN1xDMJ90pV4TsFsuuUSum28o_LQC0kCkOuxjL3bH7G2TP2SkzIGU0v_Wt72kqUsg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/30CTGRR1vPJb-W05u84B6zeCIQl4cDuBgZbpb2B_Ud7L3905V2K547XESFiyfefQGmgX-VSgqb-49kyjMGehrjhO_joko7OcMeVI2WxjXSk75kIFfN1ngEkxsJyZTjrNI2fyVG9fNA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/5c262J2sp5ytkhZf5Ucyj-SE9o-O0NS-kLXw03c2BfuvWbYEhyvhm4sqfE90-PbGVNpIax9d28WG26zkUyJuAuVmNtp44I9LGT2V4ASEHXtvz0mQ7KWdLShCdO3KeNcmD6Vjnl-PiQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bObNCKojyu7LUM89jhTVHhU3yR9e75m-IoC3ZmhKCfhtijx9ZgjDsXD8eckHDyJhw8EJo7HsHQnVdBkbGq_DqR85NB7eDNgCaT5bF54MUIb3rshpm_s2QN8qf68SSsfgKsAEiXqszw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/p0gnOpiJlehjZuWKfipMwqo9CMtN5eJAS190rXNWiWfnInMA1jY5iqmZd3JMhQkHWkEdDeGnFbdau9DjqNun5jrrDA4ffQwiTQnaoYiNm3mwapYgaJftZJ3kUofpRV4iENgHD1w9jw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/IXpb0WW3MhojRsB9hGEVvvTQxWvDChEUPTs9mWyZSDXI2t8CCwPPlGunyZvA2-WP3tvPA0FJ3unF8OHK5hs7UJuIHFbEj8TEVOI3eTMLhSZMxRjIewf5uKoyim02bU-VasbyvverIg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_5ZJ_fwsjDAOJbphdsYhzJSvna82zLq9wcEL2lO_vH2TlnSUkQB6i5sMUGtUAMKO1hK_n139Qvq8l0oerZba18e95w6paSxQqLi0unlqB7zm-Y0i0QMPtHn_W7cM9sdonEfletW-OA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/jeegNdPdDdQXQIMOcv5Hwoi1oJim3LJYLn13JREaLQw6ncpcrzj30ic-sj1Go_1ivdi10JjfrQFpWhky_99lvB_GA--LTx1aJaUqllrPrbDEVBOg74H64CjK3fkrg4eNybNQbEjcHA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/BsPevm4eXUaLjQt7qJFJI-d3n5rg_A8cj8As3F-myZ0dW3DjAb81L7R72cBvNcY3y9VQzVTvDrhgjfkVF9V9LEUcchsE8g7DmIKtSni4HlwLUlUDL9qnRFxKEdFrN0GfqoXnTKBYRA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/h8y4rXMCOI6Strs_i7WbTB5OnRjxQqmiBCHx-pLNf0BplNHHEDUouZL2r_OtOWeM6048hX7aCckPuiB6SVGt6ohR6BHpG4vYJQX4JPxsWePbmfahlOhXToMx3QlektHvU2w7qxfRLw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/8GNXxuxa_sdQfmPPZ8Sezcdvzy461BHdLlYab805suiPq2Vta9yUFhS_zw8RmOLKJUHoELKsT-epiBBOg3t8Er-0IEQ8MmuUht_O3q047tIP0fsa_FmzUB2reQE1rXpRlDNczXX1Ng=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/57eYE9lox68nAzknGpZJBbCPbNwYGsBlUAwULYTdMC5oHJn4T5DbEunOXhclw9-LOCeRY0XO11FVpXh3MNuLwf5MyTr3rcUZgoZGbE4wD8mdz3egE20FkJdeK1wF53Esfmz6H6UrTA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/TL6rHZC84sriS7pG9Gqtz_eJf6ie4VJ7hJ3vvRnePPhI5K-m9ifn4wszfbr70CmfRnHvyNmhRfPOWBydQsxSuvATGhu6N26wP4Tio7olSAXy9y1ogHDHgj2bQzWUP6z473ceDH61tQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/gm2XUP0GaxhYyS1vrV0eKY6WMPmqkt6ZNOgKf_jSEd-EOpdczeLBs_WZOyfsrtqUPgi0ZULl6Se7eLylVikgcb-O0Wt92tfQCpsdbp-uJHPTPOPKzkPFt-3PaBtAD7Ss1SibJe_FMg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/A_EIMTcv2wUU1b1M2GsLei6WsPkSNfs3YZX94eEHIh9zMpyi8Muo8nSncSOTte7adlh48fgR8uBu6fxQrysoNPt3kvcEZy5wzlSxLLTsneahqJ56hQUSNpg5itJyZrpssKttqdJeMg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/hmku4bMnDiJC6Ne5zZPBFpoy8DrCvjC_oFjotXGL0Je5MP6wtKKwl7oaIuU2UjIGbzXDeawo85ICpQaV9lRvYQV58Lb-rsjNoUf2EMs-wRpAc0REZ-UL8ocnKm40XTIn60xQ4WZWUA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/asJAeLPerqQ6vzaj6k2IaXdpwC8OVSQUuBDqloXWxpT5soI4zrrz4y7s4ut1hlaZ4sa0W2X2H9kq3y6VjWGdQLPt8A2WUvDCTGJPoblQq6485DmXhWdd29-7PsNbWHj1Yy9oeGY3oQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Q4IED6HC2sbw7MPqkekvGrqPVir0N3fMq50Sgj5TOaQ6ykzPWP2qqRHzIT3JnITIfyyGG7xUXP6w0udtpOSPqcVtM9Actt7VSQIKrYRqJmo_BbBcRAAxy9SxTMD0ntAM8gsp2X9eDw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/R9rCfHZO-NFVQQ9r4k5BSgbV3MAfMb1SKqym6sexkL6jv9kUVJ2Isbx89giapzslcjJnf5d-OB72XcCoxz6csq-En6R7uOJwMyQW2oaUd6nmV20135P3Eny7Mie5dic-4vf_W8mZIQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/oTBO6HAobw3h4R5XplmC4rlZ8vqBHNVqq3bP3r1krz-9MiXto_h4VkbKtKUaL9HCX_ePMBnNo_2aRCjuovJ_D0akd3KD3dl_5YIob6yKSp7j2cThlSpEldNrFBbu9Jr4vPyZQK0tEg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/bCMzzU6NzSz-tTY_UI12gtIG30dvrNRc1gPl_VOG4nXnknywlM0Q_TI4nOeZ-PSKFTlcRlgKovNP4Si8AmdaDDNNkzoxnVdubWVT7C8r025lhx5wP9MQJdQAQucuXNWUQ8uh7QL-GA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/WamNr5ayqe5cwLejB9GNJw5EP00L8WqLNjAWulyTjHScvnwjwfvxD4LKfdHhYltJ0dWTQzLLPmGbuoZW60mHlI9CK6lkBf1jsZcf4OZD9iNjVTAO9bQ2QzNmnvqiDUGO1aDTZWUS5A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/pgb-K7ko4COM98omwta3bDkxez2-8zDh9aJp_w2Q-GDuMhCdkrZYRKJtdXNw124LPPCZAaJEWSxNDGkXuzt3HiA6JLkDF7628l82sjNcGzxIYroiK2WfXGnZCuUBCptOzVHm7fyfKg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/6yYPlsSieAwNLX47y5Dypzab3U1tcB26oqdRL22nQfZvOE5rMMvAPsiWTZ6m7P1APsn5i7yfley3gLUOrPvmTjIRMThAqBjYOnKkDlK5y0oKa0Mz5eiOK48FxzVQfSCEvWONYXMH0Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/2jNy__Lb2LpYrChswMYj7pDKr7nVhRdjj8khPOMZFTgbMOOK0N9sf2qb40QZXb02NoiqqmAo51yn7maA4D2Djg3OdXRvBErd_ieQa9tk69E025t5F3AhQKER0X6aYTU7KcqgusHuWQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/2Notg0c28AqiO_gTsV8PABAdGjOWWqhH-_dHkxtJGUWIMoIbW6SI0R3wHNZD6DJ9FnN70cedAeNQtP5NCBsnfS1VuS9eoqK6vBWezQQrv1UJKRNUtSwvOf1N_QzVtHPgf8yEeopuSQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ndCC5dFN95-WYHm3pEas7NizGZmgGf-77UhYaNuyUxOkeSBlwEqIPXsxb8_OWrRJU0ppCVxLGgWkalJlk58i1wX9EiZ4vj9j_KDlm2vFzjAUaTkY69i8UwQaooi5PNL6HkRVV9Yndw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/4DM395n0HaNzJEIe5WUe0jPlg1A40I2PmgKSEsvCw-5e_6pTjW2s5SKjL9yZ1m2hUa279llioLYvyhChtOxZk-z-Fe504HGWHwBqBzfzTaPaKlTN5PbA1oZj_uvO0Kd6RAZSifdIBg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Nh2jbB1I8Tvf91C5syup8SjBK5ZlaDBH96ZdHZDQWEGsrM9_sEj9WSe43JbC2l9W7bg795PdMfyl8swlXiqnoC_JXrrCxNTOluIo3OpQXHdf_0DULOF5Z8s3lPotUV72EWzKFLo3Hg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/abzHZFTI3pjfO1tIlhE49xzgUDcSSpoBCbEKQnHFpRQkK-liHFwllRswyjncc0yrgRNRakJz9Of1LdgZoExPZSOgoGD6xCVbr91Rv5coVgqudS8EPvv5IjnqjWotHj6EtKkdx9uG8g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/rniEkSKHZkgKHi9e9ttkMjZMMccoT1FXn029U-GcbiHDL-wVrL5TzMWWcydF2EgCOYRbeWU9LoUuJiaa-M1uU_8zIkXcmMWdPx6S_cfXtjzb9divXal-hFzXwyoR5KRE-4qv6gJ3mg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/a3T-JT2lnjRGybslgtJLLw78BAPqh0LYA495-jKnm-dlKeknRVn8KSwizh6FP5fFBj-QL2JgYcq_gRpeEdG7S26-b7JlkS6z_8ckCV4WBsoYUHZw-scNdpq3Z9Ne7eONgsIB_oC6Og=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_fUT2Z0mvyIGHTXu_2j6aAQylDqroeNRVVhpjBaC4ITyt3mAV74J5wcJ5UYodJrmgjYRJ_AJkGe16XndCAAWT8tDKDSxk72asiOsSko9DCF31iQqkEdAPgfrQrAP9x_th-AC5C7k5A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/B4xbmOxKeRE_Ljz3r0CGhX7CfrOHbxshRFxN63mHndqTi9TjWNb__KiXGgHe7norpywpHtKHcoUt1nkHB6Ty-9azeijKx7KvJriCqIuS1-WY_A8n5q-hppPjcid3MaBexTvM4_k1RA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/RfTjCZcfaxP8dhrOPcFv4FvaV6TRtyvBXTFbWUYQ7_ymDx-QZGk6IL0dwhw6E4A5Y0gkJWuzZgXDy_kiqzU4ioXJvZxKRhae_EkB1bkFO5Es0NFWo5s-1l22A3-HRJG2kGg3Xgy8dQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/aKQENh7lbI1VUAxRCee_AQTM0qex2ItHeOmb4IUFIyy9W7XPORzlTQ6ItHxvXh4b2woyc9XwfSXFWWoSy2iiyPqbAHwULlf5Dbse4UY5XG79CliQme7s5tErWhniBa6HVGchM0FceQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/vYoTD0njNAz4umMf1nVwDon4UsI86w6SynKXLjmyECzNqr7hM7l7OfTBoy5EPH361Ytkw20tI732fQkPSItakjEHrQstl04XkVIl4vWQgDWZzzMMom7FVhhrWJ5Sc1PVrLv4extKFg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/gtOLiaeR9P6UHry1T5ft2KOoC7M_TuGvdGZCKJ3ojRu2Jydb4pdg4uLknq8DtFt9MitvsZjQzernVyi5JA7M7-Tcz_lslVPwXfvW85iPHmZDk4PkCvzttqt0IfASbwFcFHF4EodOSw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/-_6Fm5g5wvdlsQpz_I1bNUWogLZmS8X3L4ZjkwyH0K4rQqSqmZakqgBqCWtkYwE8FMpJ2NgtaLsx7Hm08-kW8JF9h05qh4gUHA83-nksejAyrCx2pNXgUJbUMgzBX9vT6yECVKqI6w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/pFU1sIdzwdExJ1v5MCKNAL-uiYUgiKTiiz2rYsu7vOo1O1LdZR1NBqN3ViqIlyYthVxp671EWBsKAK93JmFo8cSjkP8DxuuPdLbuOztAtUcsGwpHtW47FmnYe_xtP3kr53AFxEwUTw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/7-6i6OGn6AR2DALlHzmBTswTIe3274g-_fPIwrawEtrSmFANvsZe3iFTu4g6oQarS90vZWrwEmNGfECauxUW6OlELLWfqeSMpimi2lmLTyr2GkFhuFAxGbMMbZtQDV0gADoXKu2Ygw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/miWK2bNFsjcEckG-aOpvcozLWb8XKL8CHrPtFY1dEIg5uVK43BNJajER4TYM6T_fYuEIc2UVotTSnPT2aeIuKA60Fb8qJcZFFhIN2-g4Ii7FNTQ-OPaVATPiyqbgv4IGfnDP8gYocg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/QctynLvf7hPYWwGKNXthR9cJ9xLSoZ_U3CVYwKxkbX-0kvHgJ_VCaqmaC7oqWNzodZ2uNeOCw7IGiwmNsd4ZT964Ow2rAA4xdrmel7AI6h19tgLure9TVfIJHMw6VFuWdhrYqj_R5w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/b3TmTcZT-tmRYsK499N86c26zkjm3ZEpVUcFRkIIEGjCKQJokU2nomQ2lQG1vrLVTp0mP2besj45wgzDi7gh9PM5VsBbjpkXnaU3SBxZ2VDhr2YDqfvO-G7Itd6Y00qcdlEsE5JkZw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/5kmSbQx8VaRYr6GZx_pcuMUAR_J-P7B4teI9oP5Uv7D17A3Va9rw-CzknKZeLRAyzimCKepNb3n-LyuzQvM37KTRZksPJf_Jp1FmTa79zhtkuBX8ZDNN6xHUsXwnbXgJmm42p_0Sug=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/PGCRCWg6CtPA2qKk_UbAsG9oQu4OTR0mcjUTy3CsKvvanRfGNJkbs3mt451ubET6ySlUxFxkZAWvafJSjJY0fs-bRWxyVIPXjCGIij3HHCGWlqnaRc4oIC1WKxfWvrN7POtlu8fPSA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/KER1WIYe_-ZQkElSxxAI7o85c5JBsivVJMntS4IXQt_wm85VrHF4qQ-kMVU1QGPrIXtefyGBNC3MR2-UIA7CC0hi6T51vzxDfrbFhLMwaJ-wv1OIYPxjjM1H7SB1GWBQDnQxOvRLtQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/g7lhdTXFiD94RMk8wHLwYJzZ-4QtIQL2jDj5PBP6T7KjGItWdrImBALTm1ZEDXOZJxjchbVcPuyM6t_gmavBkCHFfuVx9zmxVcy3fQZIEY8Y5jniH6ImxxJQagHKFYs7orgCT7-RUw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/rzi4aaSFA0kopEmhMYuMKHLKNCanQ8BrwejBqOOyxYYnjXOx86lan0VtilGHpIAXBweSErtd52J2fasXEIgHiWTPndk-U2A6eWfTnt0XWvugENCPzsvAxOO-uUTnn5uS5NUOBWCewg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/lfFRt8SH9Sap4kIIg3LJ2qHUJhWRlaT1PAEPxGff24awb_-NBIihjn4Au93UXqdzzq_HVOiq924saOZelIJYWfDfxhTD_GFe7nbZ-pSbLKu8NbyotxPy9hNVJujY7RK82hdlHV3orQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/I1voGGgoh46YLMCVL_uRycX3QFPegai9hQApiobvjEi7lXOUwIj0K2YqSkbxn8S-EMOgb1YROosVk3uymKDnBuSknJObHrowJdDjUurrNbLnNoAwNCvC_WCltVpzCxAs_eHmDcF2Xg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ErTRA64a_vrKv22YkUKZJEC7sPyBH5vnthE8TzJjANL--J0gh93KB7fT7NmsDyuM3-Gh3tJ0xelxbJUdBC2gsI7-RocCzVfZN82ZNuo3dNbNlFT90tFltEFnedV3w6McgEQyj82hSQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Z8z6fzeDwXuZO5a2nh5V7cVVzvSuaCFP8tiTNlCWCpBkROkuPGw9v7sLTlb5lLyQOpGzy9TJromqq3Y67jRySfhjxF9crA6ip7_KKDOVcPR3E3XaXpl22YLBCGCCsdcS5Knec59HMg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/duBwTXr7NIqrAXc6ORFjCtl-vT96tBEYJH0Av-8_yir6MgX2FomNzka2MIIgpTw5sgaUoiBkm2Z6Wgu8-Cc7F4hcXcr6ouVf4gxLCILsaq4cbF7Y2mUEHpEoyMqNZGSemRgz68aFHA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/a8SMg3hMI9wnELxIFslWo-Y9goCxjVyaiz7HgzjsPB_RM3FHsxTsU7NY3KinfH8y-IwRVXbbGgy0DLB66N4xlvZK9kNsjJNyM6S4eBltqUtPvUV45lH6XLeJRi761-yDmmoDXu9Hxw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/U7S_drOEocghsns1ymHeCRGaQRZzJJlIaqqVdtDH8FvVa0ZGt_groMPNoNhFiOZ5fDcsWO4iJw_V5ZTAXx3kRHQ37OgrQ2ZFg3l7l89UWjoCJ9wJ3h54TTiqN-aDlWBjjuEs84Je6A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/rEyDCXQImP6JarOOnMMjmKevRtdtRoyKT0o2kfgcmo6Gn9EBVA5l-C2ddwNIJkyFdtC81nDhTwnEwEJh-MXTbm-fOz7vp7NaaJpDKPLvz8IvK4vjhOGkNV3V3qQbKE9EzkoRWHZjvQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/2axKwmqhfw5wDK9tN-2ioWPmwQAavcX46t398qpEIzOoLk69QcWDAH8kYI3OYGVzBFr20cNikLn75Yi8_4wKpjwvYSgJu2SJH5oKEgvlz9WAZkdMKICszW5K5bHaKVppTiBE6Ws8zg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_h-WOOWx54NSQhcZcg9SbK9njUQwTwYJSAA_BxF2V8xz9Yih6a-rdwRumCJxSLbF1ifPpPKoSMMRgcnmSgBUGt4OxebXjUrLQNdSXzc7yhDWjx1XsMsBKWTHfhEe5JmBNAmY6qTcnA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/oHVIgfpD2pWo7KdnlGDOZ7i0JljRjCOBVQGyM9mkHwgL3hFgX61DnRkvd3QqeNsNJkhUMGsctbks7GQuSAmeymerFO7U1G_FLkq6KmVh94_S0L65X9-h_D1rS0eAnom_Z01dnaMWSg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/xgEOJps1eAdTRsd9QWfOpdKNcLoaYr9pzWJL4PNWCh2555Tf9FyVG95tC7MFk8BQF7ewi8TNX482gw_DXXU2RVslWsXOqGmlDOarQgNo7zXApUxrQ7JPfwsGaG1uty79NpwoLiMW4Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/lr67_TjTQVDqpY0_8yEnzsWbrih-msSrFRx_Yo_SHujqI0WSPREYRn5IgnGuXMEaMduvMCwumSlBHL-Ldue6yS3aNYGCUNHKP3FpLBKqQcSfPCzIV1hMQzISufGMjITNgY-MMM1jJg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/xBRSPZ5Go76KdmNQEqPWtYtv5CEWj1jet915KdrUY5ekb0v7Dq9RfL7MhaaF4aXZPE-YhMEsZ1SKPJsJt-NYfZBVpEfUuwwSZXtApGYTAe3kIEcZvPX66rOJ-Cq6sJg9VrVmds-WZg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/DHb1wuGhtFPJ8RuFNiwaLJbXHsQQtEfadK3JJH6dAj5J0-nULlAOIG3BcgQ85MCnxZ1SflbS_dH9qp6B14vrAbF0Y5yq4dGDdvICU3gfLgrkFZMKSZYfmpPooiRb6tNWaaGNNYjdpg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/KSRJ8k6X_sRKeZeU_Ytftd8S3Ro2boYQ3BcvqtgIGiwuoNHN78hwi0xASVtsoAphx8BOP-Kjkyz1b-x2AAi4dGY8LticZ-dJ25z5GHBm_PHsgKqkkXfShYmhL3c6hCmHsrSpuHrfTg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/4EtEGC8GmU5IBk8w_mx-kMUEcHj301tcOC_biAgHXucmB-6WrN3HW2YzJUGpuP7Xb5T3VmFSXWquj-1AHTvZqFK4V6DZ9aghQCnzQNABvol1T1je-rM37tn4q0HIPbQKh6xrXwKZVQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Jae41jLtnV14d2R5FBeYXpJ7yMxcs7xGfvJkiWVZEWhj4RaErc6A6PVX3cQP4Q9c09gdBd6l3l2yQHQXesABY4L3BcJmKUkxUwLhqPhc7aOufT0BG6lwAStAM4Bq9mMtyKfdD3zSLQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/uKUiU0_vmgbgJ7xYEKJ4HN4j2FCHgiBuVRxkw2xeXQvV5WbInjxBMb1ds9jBeJEVLHXEqYkYN2ai5mcw7716dvs7Diokojf3NpUrD9QUfis0pWUqmfk5GNYFHIKYWJXwAYcGkvw92A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/da_55ke6cbZlYTkqS4cbJfaFoxU3SzdEOOvwB-I2rXR8_Jf9daqFrkCWHRZ1BkNhupRXuib9_I-rQCjdcr8L-LdOAcZVX22zopbaxxmIqHSdMcqur5PEMK0kbcbGvrwUt-WBpvpOsw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/J5PHJYLa-PsS3Y20HpqkLCZskwvwR4zBogc5p_ncvqEpFfYIY3JEGxZlhWz3Sz0omFHxndeBd7TC9UPTnLukXF0MgHPvmU2MvNZZRKhvS_q0Mr3GFgAV2OQV--aSgqKaSojR5qSnPw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/JQacBZ0FS_39zoxAXS9soJIyh6We2LtG05y98VLX36yipW7PkGvIDRIn7c6lB0cN-4pxOrfYGy-2o396LX76aWLI6GykMqaxiY7zXAIGau2AE5KjQ9AzqqDt3KNjhqZsR1bDf9OJQA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/GWKOr4B2RQca4LhiPNFMTzMN7AbUqO8_Z4TTKDdcP_o2xI-TuddlAf0YG0vjr1pcvEn2jYRq2Kb8jocnOeWSPAGmX9rDAYNUGOGTgRO6ZEUqTdJXPtARpgwFGeYKXslR3X6G7idLmA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/2PGrkB6w-qv5nUgYlx5JXd5nTIlJm9pvFINrMWeEQsDqh9CnuBa9vzUZ_6QEWKm_G7If5D88fD0Id9f-DkMg7AQqX8BngBLE1Zh1nTzxpfXxlupIda78dc4-2TJnSKRpSK5OAldGyA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/knJ98LyCq8BFJLLWVF0Zhur_Ltul6qfOdeO6jnTOiNY_cQ-QsHYPVAO5dzbWU-V6LZHBFlGjhiVrchgaILSvEAENfomkW0zFGFJsQw4vhT9xPvpVBSzxagyMQaD-It8uXh3YiDG8Vw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/JRinsnuWsnpXTpZPVjF2Cd0PPS2DPUk9ad7RTPNY4lhs6qlj9zrkpfdnhOjdQ8KRY-dcI16mV3qz-Oumn9vC6z5H3JkJJBqkAMr9xiZ7mTZnqOSPHMOYSU6hoDkmchd4kaUNq2C0AQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/H2nVOPhkjQU8t0Q2E9auuX5dEuW1uAgB_gb21EK9OljYofjRBwNmNbLUPB8ixlm6DJ5VCXz3--6oA9JmtT4hPWWiFQv8g3jSaQz8SorsQxrULSDCNC_Z142Tt5OqZV_aIPelAZDKew=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ANWBv283Hf12pnCyhlMpzn64rqD9sxIYGoGTKiAhu6LjazI-Gk1_PjJC6FPE_mzu5vIGk97-LxJAi1eCym90uNfCDEBqawXXc3UnUxUgjuO7t2kYLXfSB5_sAj17yQ9scEVZ0BIGaQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/suzK6onbx7g73hH3grFeoX0DhecgkjMNKIbcJrQqER9alGz09djH-IHEjorvZay6XL0L_j6MVyAuPvLeE7orklVvqQ4YPcIkgMV8nj_CrE65FdsPGWeRRDr4vIVrc7bZfR_6xcq7ig=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/e1hEsi7Tp6gpAsOEDsSxNRKleyMNL8h4VXfsCkJpQoQR2icj9yHBhqfPvmTD60-o54EX8WcUvqoFcY4SYOYrvEHytDolO_zHnUp1HQZADMLv-_dmLM3ZiarUtznUv_81obF-bA_h2w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/zOxkIXkqnfkzAhkwnodtnkH-coTCXCB3gfYyi61Rjt0b89ACUWoDNHblYUGWkittyoDr_gQmAllylMA94szy5UvDr6Q8jNST5FwLKoeAAfRj30RocPpLcZ_qWFhgOpXFE_sKHIdzxw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/VPTPgFa0E-uaOPB9Dsc2pH1hBNLvseV6In4vLx0r-aH7NMXARnazNf4dDVMT1aX2GWmz34ocVWprzCjYZ8oinSiKb8-8Md11nu1u7cTnSHkF22lHjAti2I2egLY1dpAvgh6MlB1pNQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/XARB2gTVK2347SMyQoBMB4SV8TiVZG9O9zDYl_N-qTwN3yrJ-bcd-s0CA0Mvu0aEq7XJEttGb4269E-QVAyZ3-ZGSX3n2DwfB2X4k3rSffvgdwYAkKF8Oem7Mv6k2WLcU2NKpkOgtQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/fQ89r324Zb3rZ-tXunSj8CtXeEZlHbFUdjGWvMLDy2Svu15mMWWS1D9Y8urQsY9NNPpz37LMSKxGzn3AOePfvIUnLGCwtZk8I8AYuSlIQeNLfXKZ3mi8UcSz4gkIODO-76RDgBSt4A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/xuRZKXiAi7zt51ZyXrEBeb5y-hfGtIsf25dIyD-Rm2jaBahohgA6VY1QgOzvIt5LeGroEvuuCjhBrJ8GCdstiLr2JCfWMVRrV7L7iMkb2CHLwkKuBFZLEoLJY1JRqptZelpptziBLA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/gFrkjcsIwpUS0-12qOofJbgxe6OSrX4HndMHJiNTtNoBHg50KOOETdhiQ5CxOU7AWb_RETUeClVinZRsLSWjQIQYg-VTG5cpJ5ooYYERDiOSZ5ANpyYcBGWjUnE0L8w0n_M7ZYHyRQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/yqcr0G-p7Tyz8vhgrqBv1uJLjDe0Ctad2lv3LaoYJXhOgVmBYYEzbB3XVz-H7rY4DjfoB6bLCsMV6VLx0rjTPRDWqiz4LMPmqlVs8zLtmYMaHu2iNSXNqb1jS74oXOWwH1ilA0A-GQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/oja9PciWvdHd3ED3Qb_ud1w0TwrfiH-VW36ZQjRetY61gXj2lbF5mwX3Oe5Fuyf0b1hImUOzFbxjq9OdhnZeyPfcjkd2WDC9jxTHqrJgSrR2JY4fr917N2V9ryLahJecvUa3WNmydA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/8sRUNNdL3s1kWsQCYgBfnG0WVHFmpCxK7mq4hbLbYa3N2mo8vBSPD98MDF72UlO53BoC4tNZ8_MRP2qtWXFe9xKykvIxcUNJFkUPuJzcEVci3MnYMcEATjfThr8tpsOFDwHxR3zdTA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/EEOKHQ7HPzQDKR4cuZEC_34HQvHIwkFBNP5njkVgKXAFguX1mFS9FhVWDeN_vezHqTc9bAvNdnWBqpD3ctoDfazD-7S-jC3S4pvMXSC3AezTRMQr5LwgVVsI_K_OMUqd9w3JXgOF9A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/min5LWPFjw-dx20D2bmXv17OMw7HQgVOX221V_t4kDwxKeXV5BOmQdVr-Rxj3o5y4O_ohnpr3N40cEAtK6yDEyo0Ny3GCBIj2vUK4PgAd7jmxJLoVUvMuvbTm3kbzbDfrLDroFzt5A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/wX-fb94rMIXr3ItZWipwVslapqv-EwvTARLGEBpmJrazQE7BPtp-uOnqG8SG198e7-BmcL0mdJPcZ8ILDQeBJFyQatNbkaXxqecW0j5q9ukLOOCkjVr92pY17fynOPntQje23fCbQw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/vbNmjtwCskJQDKdDtKTv7CmFdgV7c8BvvtdoRl9cU3-326qsxThCbwtU3haek6tGLtr_3hQJSmq6S_P2Z5aoqUvxhSk7FlxKafg1r4aEBuBXtDOlRxvo-9NBgbLjrZjm2xnEjFyJtA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/eam1Y5nXbiuXJ5ySBpg0B0hZVMfRpwXQYOjkGSQX6QReeTqMjxDjPOzrsSntmuLeq6kvHB3SeZGsTkFEruBproNvLP6dIiTWV7FZ6PVgSufwbSNZ3t6ET_mqvQHttqORXaEnrBPLVA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_G8hoLDgOYtDrvyLW6w6vxM04JC0fs1aDs2lnIACPgcpN36fA05JDSTd8IivJXxZaFJblavQFnymVoG1sALe5Jv4XbuEDMDQonVvWi7PZ0Ob26CYcsGrZjez1ucEcrCvq7G_vP6u8w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/2fmlqhO4Yf98dpFJR6ify7j_dlo7ps34OhLvoPDIkzMzLhRJkF9rnVPBVANibWmHLl6gPPy90C157G-9jVyGy-zdQmo4FO5lxg9QdxfXLcq0jfbwAdtQBiDfgH2EPWq1jkoimlzVaQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/qJdIcaHWaywsqe62MnPMesaE8S9RO6RbKmSH7HzXD7hnC2j76sT0LP6haDcxk1VkhFzOS6PABzWscxKH8eUJEGYB9sa5QeLfTTWYNBKjgIa50Lq-KfHrtXrJE4xRGO31c9Bc4a8xjQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/n_vg1JsaiCRf2c8OZNjxt-1NhiB2dcCHdaGlEuiCsxr27FO3zRB-eFheAC84-soUbbiOyKE6_V4WTReYsBJ61nnf42WSEyvy8b8BmVdsICQ8BPGhAZwbyAzlIuEXMyy0QTNKOxFvLQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/fSyG2omFpTDPVyR_8uQ1rbXUccC8bT6mVx8mGrCHiZzJomFHcQzOee3QLMQ5plqNFZJ2sVwSuWT3E97vSm47s-FfptPOBuw0wKM1ND92nSoRJJ-v-PuTKPXR-VeJCV_coqbQ3ujLwA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/0umbd55kimR2iBgvJS-xmoRei0u9gpmQQ_Yby-kddZO7q2LDYn0B1EcP8ur6ihCvvL0pr6FNkRwDQ4DZdAs-95CvhQeeFRjTz7d0clLEvA7qUTFmZpi2roA7WeDDNtDC571qfd8Ncg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/t27-MpjeqrMYMpORAh2D1zKPfhCCkcqnQzdfwkFH6htUhoSP_SoB8_QxfPMCrV8WqejhBIgD92SS6FSfFViT4gLbkr0tMYmXAZP9A0DKndd_LU5bl-za2UJfasT5aTN--kDKKMsT1w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/yWYHO1BXPthn0D3yVtwbubEVZsUTDLRPm_CBHnGoai22TwRHn3dJipqFEjgFAd5dsBioUV5EwLY1gYJMQ-4LbUzvz2dOQqWjE4t4qYSMGJaA4Ydr-vBuv2mAl4VW3gxcMaJBGlLRxQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/tg7JevOpWf8VkoZXTh1e8Uw2YOdzaeAcVD7h2OjU_cfwBjpPB2Cq2HVh1xM2d1RSd4qIhDu-ULGVpRgH4nB5pygl0Rtx_3TXWIajhwPWP2B_6iT52YE5GNKH7mS1x38oM843I3e0Ew=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/xxDDBzcpEcasT4RB6c95y3luCI20fWlaVpsRDmHP9hXRZQlrrVstyzRcEyI8_eXK7fOnRllTC9Gu7U-Ok3FqwboyRiIB-nj0vPOgD6_UWzBY7Q8kLLcU6lxRlREtdOjfABUU0eCX9A=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/ZuKsMOfAQAedw_kb69Qd1dvHwQORruBDtFNxA-v-60iNM3XIhnOIGzSZ4vXvxSIgjEXeqvSd1M-zmYPDk4nMLUq_jSOHGfm7cOYN9ObS3-drM2JFxKU_lbqQAJ5g75hmD2wiU5FPLQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/6jckIR8hz66Ja4LWgiKRBOS3C3keFZ_3LynUbGG8qmiiAYm-ftj6awpBkloyTvOrgA5iPhm51Yg7ZYUlfUd35q4XJG7ULhOy9XOQNUrmYaOISa_mZY8f74NWSMsAtqumpGFIYqy4-Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/KHX701fjYCRfH_qvnFadAHr6qHwlYDU8Z3ZVoq-9y-lePOumueAEMjzsJDpTAsPxc4gT9Y38bDq5X7M_DPZihVXYPgLj-4cfmyKMhkMs_Wy6DJzG2lUX5WcrdJKagqFX3Dg5sx3-ag=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/o3Pt_NIsqVbbq5AdEy7uwgfCB-mEolX4i0rGNy0XrnGLIMOSEbzHM1VE9340wkSmPjBsaML0YxW_peBk8q5xw_UzujLpY7JoEzYetLnn9rmCYE7Bh4obycs-3p_xdsBBO6kon3zLBw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/zYV-IJT9XPFpzGq0qL8WdNLr8Rqy4RU8-EGghj5TOfh2m92tCDEEIuXy3-Ju2H_LcFHJsjRlZWDez9tEBiWdS72LrYV3WhayFQUrGmCkFsHnCsH6xeL7v-5RefREEN_FRm-XPgEtzQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/0167uGgroqPsQIdejQkDZKqIkcXOnA4-Ia7jKrqheetkEe_Mh7_VSpelK3SYLcn_hwxXbM85ismX6xXKZWj4M6yXfFjum3oTaHKa8vIAubocVLanw-0vXAfonJvrECJp2--obKFZ6Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/DSL2J4ksoiMFxPDnQ_X43jBn8NOFW49xTF9pNSbOtHbnWa6w_47ixAUu-aE-hEcRSvmKCZUFL2jXRMzIQBqhgCI6Mnv5Nj67F6I00nOXCs-nWaaSE7zptZdm6H0qARYmsXQIzxkkMQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/35EZnsRdHB79AknYdNw5OfXLZYc3BbH990qsCrQ2sYR7uE81PAgBtUCumWkFFdVwHsb8-2S2CRN6zhNkVGxGiyDReuEJkEySoOr_RpW3_lEB1AMog0BBaDMZ2zR4tVZQ7LL3PTcj4g=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/CAJt1m-BLbHs2WctvZAXVFcMIUvJza0vA9OroeNgs-D_eXGmgx8Q6wKHeVRmRe7PDM_OZY0IrVO_7XG01ZDALNlpTWxgyc_JN4ESygPM-eKbMDZhexxy4fe-ZSxzD1L6rrziHEdq9Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/I7VyPpLkpLWMyETGeP-3wCqeIhdDRh46nCkSmeuGmS7Ba8E4p6tUotBvZvaSPf2vYLWVOBXZ-lTairFN4rd8daYuLeISohLazLAHkP8u4h2xMbM11ZqsAwC5Xg2hP5CQs5V1J_tVlg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/hWslLFVIhDnqxlQWO6GwdlyxHRv2B6brzJeSGCBJA4h7HoDb-t-sXeLCFc5gKawmhDb5UPF4SFL24t0DUGmEZcQjhTpYKyjobjrW5nea2rcPb0pmStB550G8wz7aVLATAME9g-9syQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/F8dl2P9099EV9RxV8JoFC7E7vIjomxzlFFh_znitKFElQ5CLP7gaB02NXY-seR_lW1angbOdaRo1E-dD-nNDHZ7Yg8QpgkDfnylqLaH8zKDyEvOGrqwwC1on7ZKwiZ8ThyOXElsyIQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/EUac32MTXJHmYuKovDVZhCp2dDN9XNv_6G6IWI6lJFY0rbrRkNukXj9J2mfQh3oVYnt5Bjlij2HQRUhMhTq9L22XvJTnefLkmrbhK4WiCtaWGcldE4gNZaa8eFUd0Jd2e07OtZe4FQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/qCIhFGQFVYKJPsbrvEePABD4DGOfZpgNPuPkoaQK042RKHVM-3A1Wkf8_1b8pMTdSZwiA7Cefn9rFgKmoPObNKMAxL3p3qt2fkXYLih98PuW4-rCe3h_-6IjlrFfnT5tmaRs6i4KEw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/gjEPlxjmff1hwu409qY_1t4AKe5s9qbf0jyh7RSX9qY0BA7V4QJzzRAEuaT--hnv8HqmpCsTsxK2r9Neqg6XqD1vsvNBKWby2R7k3GS8-6SpPAb3dv0V58HVe-dLm02jVUUeLrSlLA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/xkCUpsa7pcOiF8V4xnKOwcozjSiRBZQAom1GS8-VjA9owfV15CpUhsTlQ4tibLi2z5YB7PcVbAJbd41_JY7_D4GJt3JqJU9YnYhyRf_DrMj2KRwx_GdQEWUnKmrmdBqcr7EUoeu7tg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/geXu1boK0GumD3aYVmiWVEjk2ysXeZJe6gRIZ6zmqLvnPDviyse5p0VYEsAdjIezVJqBajUaFVCQfxVgjdlroJ-kPueZcPI9ddrpce9lMoGQSbJThgL7tQkEa6GQeRvTwtOvn1ASig=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/chivcqEgAGW-RdIJKG79Lcx_-tNF6wooc88NKr9poGxDxVwBjj9b_EPsS0rrYB5bjycVIG4s0AWJ7bwDSsbx3Hw5X03Yq2asZW-PG7ya0zIuB4BkZ5TxS_ODZGDopJD7B7Ab7ISaDg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/O2UhU6DRY50vdnCENVYC4b-3yHWIpKqIlR4jQe6Ys6P_MKbcoliit8OwwWkEOMdAzHRbA5eBCQ_-WXilfv9F9bR0KdBe5bQ_VQCddJG6hrD04Kg6Mv_PyfuVC7HBd7PncI2qahdGfA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/oz196eIph_EjcvfPgbdUTO45if9_w4WVPjpYPFjsrlAyOeLxybW_do61MMd3PBWKV0OHdWPM4saoSLTdIYKf67WqYHgbOnopUUfytU_Qs8tPTetRLQQuKN-LfZSiCt1YrJVjGvFFaw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/iraVZ5PvhPvSusiw7yTHOB45Jdc7xgUQ6ibpaQaNmWjcCtCEQIjvLeTUM6Y4dnXvn-PUtUzBLJn0TVz6EhJ0QUEJQ2ycO0b6Cn9Irzo86qG2Z_OPfsGoLMNvHeaMXxu0lfIYEp_Kxw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/DMMFfTAQySpihD5IByEO1aO82ogRWfpTUeEZtiO1VvjeE5XiSxUeGHwNCgB2-va_sqC9DBBoa_lgjuJTXCXk6qJB_ChtOa2nsqiDtPDaiZXLKzU0Lka8Gg1CVs1BSQcB5Qv7T1thMQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Vgja6rQBrAXc1Lozon8zbvmNhpw_ypVCUV9vzFuwGKoPLczNLR9OPZngjcb-kEWQiesrB92QfUHSPJcuNGDB4fDx2c5P_rDZvePbVlej93TAaCWF62FX03dKs7waXdTIUBE9cvG6MQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/DoZB0zIRqvHJDibtB0N4aJsMGxjtzB_mcwhEz0pl1IOnwVXW7fXVMeGRqlEyU7Qy3as4JUHihMBYP7JhmxUTcVO3twbkWhkVhvoTwXf1RM_aUrK9OUIIbcNAYNbPSEOFaaNFKYJ9ww=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/2xcvJMWtTVRMjXLuLXI4pQjoyYS1OnJli7ZvRWn_taJ1s0apQbM5JscJ1Yg0Eq7gZpmEH7m07EwLZy5J-3nYvFTWWMl9Yt155zR2-SUAQ0e46T_Ytu3bMBPY-G9qMnOn7mWSuwULmg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/BYwKYN-xKVHw64DphUGEXDxu_CnvDrORqd5TfRIEMGhy6cFyvDn4a_C4yzFslzedl_mvo8vbw562hDnUh3N3dCke3-qzVKf_3HMzmBx_i6w6UxboFnuW7H62alLazVsCNizqNJO3Fw=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/kWbF6OHdu2uljOog9fTx13fl_W3yH_7kuZNfirhxJyQ_22zRJUG0fjKkNH6G1F31RYZep3k4PJmXXRKTkQdwtUTWd1GVDxpU78_mIUtHRaLZg1M_p4nit5od1gg6up4zHihur3Jp5Q=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/syLc_uqakL3gJTE-_xuJ-bWLQrfIwjQbgw5G8pGyEFAqMmNrsnjXcqpWEsX44auZex4jQ3_nOZkRB14Ykp_XOLbKszE5sq2V54OENLsznvJYzsR-t5N3rwVgzaaTM_lQj3UY5qqIrA=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/svC3Wtwxd9TICsWn5hwFk9BJedmzIxHpcOYLZHlStkfjlP9RM5FsY7srapZtYhQhNZiItvJA03vEMhesA-sVPHpXdEKgOO3pSr69eSCzXBGVvEr7OKWikZjFuQcaS6dvs5QLQ6cJoQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/MG1p50x_peqtxaIL0aMQHiPmR1iU_eI2V0OBL1XCZzHVPVxm_OVr2Y0a91FroMfuc-VtmNOVWW674tpk05Io9frGay1HjQE_W92-YfreUV_FHlNw3pEFXyu_ffR-ab2lsB6R4VVcSg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/_X0Vw-7oR8Ud6ObwvNCi8NWBPRKY6mxo7Dyx5SLMuiR3lQpbp9zlEqkwVF0AIWnv1W3g5KOfLDMoLnV2A2fIxjANfI33PYCVi7mp512X2IkFCvMjn4EOF93l6hG9Kr-G9lD83j69Ew=w1920-h1080" src="" alt="" />
            </div>
            `;
            addpage.play();
            $('#overlay-content').append(str);
        });

        // UCLA Exploratory 2015
        var pg10 = document.getElementById('exploratory2015');
        pg10.addEventListener('click', function() {
            var str = `<script src="https://cdn.jsdelivr.net/npm/publicalbum@latest/dist/pa-embed-player.min.js" async></script>
            <div class="pa-embed-player" style="width:100%; height:480px; display:none;"
              data-link="https://photos.app.goo.gl/2NVfgp4u4SpHH97F9"
              data-title="UCLA 3D4E Exploratory"
              data-description="8 new photos added to shared album">
              <img data-src="https://lh3.googleusercontent.com/oYM94epIXfoqultCcAGrpT1z8AD-BDyjTo5J-qDQTq8QJlifFOa635XSqXLvqPO-cfirpD4PHQoiToqDLUnyjBcgFC1U2XFrWTjoI5e4Iz_8V2gXWiRJWjLnnC0rK1yC0NvGzRDSCQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/QMXODYRyZLisDaEjH2j1_UmT9mF_x4KCtv2-pSh_KTKHNSi-EDEIf2F_snECRmxwBEqpzD9Lon5Hr0JrlJutkd9fbMFCI-dlq_Hq_Y98qK6-MeVW2LYB5LJF9GOL5QoodjZ_XrD46w=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/Bnjm_h_jBUdi_rE6eUanFEJ7ynN5PXj6S7HjyZqia7r4gOHEZhGyUgR6q6zv1xR1QGMaJlmq6QMr6dGRwdtC2eT-OhEmzwTb8zk2a-0TrV08uTrNnimLiRQ09ue3QaGxGsFxOi3gIg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/QCCz3zkAC8RLyyP9C5vzQIqR9-bf2DJW8T0sfaBiXzyZO9zq443p10X8gS6-YEp0fbK-fgTjc4xHDsH8jWUsRkAL3BLwan9t_UhYB2BAWMabUn-o81WnBM_E0DDiEqPrwOMps2vVgg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/J7GumDdw1djr-pGev_RMPVtEHG874AhTsToM-DPGFhuIRuDKZBuzFzlIzggG-yUu8G6-Dzp4WirdPx-ENIFI4QopCU5yXB_xj1F61GmqJvYqdkz7-z_2xfSZg1HFer7mfPilxlVHyg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/OtSqlP9J1be9F4RJEifASTXhWGXEsNKgY_59aFL7Yh_G3w-uyIhcwR5o8vCzs_SQ2hVFyd9oW1nFpzu5fNvXyBN-cwR5glutyIbKu8hVnjjbnHKJG9BXokVlIDXWMlDFxzO9kAqZbg=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/QQbzuLUyt4P-zS4uybQ1xbdCCi786oQN6EGES7rYsLSxXzA5uI3QNmFA150FqMQ6UFaLw9cgZfkQ9fKHw5Pz64S1PNl4y5lttg0tHQdQN8jnPfA71ZQC7J286BM7Qpk6jN-oW0FFLQ=w1920-h1080" src="" alt="" />
              <img data-src="https://lh3.googleusercontent.com/vbIVSUS1m9HwqdEB3GMO6eCBGM7t0gTOGDXy1n18OcOfLYHBln6XfC5y0EHFA3Pn_VwwD4Gms7AjPH5FuMAAqmnalaiCJnR93BQ6YnjGoY2_QUNtZB_BrJ8ap-Fg2nLJl_Ru4Jm5Iw=w1920-h1080" src="" alt="" />
            </div>
            `;
            addpage.play();
            $('#overlay-content').append(str);
        });

        //PDF Viewers
        var ViewPDF = document.getElementById('workshopbutton');
        ViewPDF.addEventListener('click', function() {
          var str = ` <div id="workshop-viewer" class="ucla3d4e-workshop">
          <div id="pdf-1" class="ucla3d4e-pdfsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373 500"><defs><style>.pdf-1{fill:#415245}</style></defs><path d="M439 98c0 144.77-1 245.23-1 390a12 12 0 0 1-12 12H78a12 12 0 0 1-12-12V12A12 12 0 0 1 78 0h262l99 98z" transform="translate(-66)" fill="#ddd" id="Layer_1" data-name="Layer 1"/><path fill="#bfbfbf" d="M298.59 98l73.99 65.02L373 98h-74.41z" id="Layer_3" data-name="Layer 3"/><g id="Workshop1"><path d="M115.26 168h30.44V87.41h-26.08v-20c14.94-2.83 24.79-6.63 34.54-12.66h23.77V168H204v26h-88.74z" transform="translate(-66)" fill="#9aa79d"/><path d="M102.27 179.09h16.87v-44.67h-14.46v-11.08c8.28-1.58 13.75-3.68 19.15-7H137v62.78h14.45v14.42h-49.18z" transform="translate(-66)" fill="#576d5c"/><path class="pdf-1" d="M108.58 287.57c1.13 5 4.71 7.17 10.45 7.17s8.19-2.26 8.19-5.9c0-4-2.4-5.79-10.89-7.77-13.51-3.17-16.85-8.08-16.85-14.78 0-8.66 6.47-14.53 18.23-14.53 13.18 0 18.43 7.08 19.14 14.34H126c-.51-3.05-2.2-6.37-8.6-6.37-4.36 0-7 1.8-7 5.33s2.11 4.85 10.13 6.71c14.44 3.4 17.6 8.77 17.6 15.77 0 9.07-6.85 15.28-20 15.28-12.6 0-19.23-6.2-20.42-15.25zM154.22 285.69c0 4.66 2.34 9.22 7.48 9.22 4.29 0 5.52-1.72 6.5-4h10.33c-1.32 4.56-5.4 12.06-17.1 12.06-12.28 0-17.61-9.18-17.61-19 0-11.69 6-20 18-20 12.8 0 17.16 9.26 17.16 18.56a22.12 22.12 0 0 1-.14 3.14zm14.39-6.34c-.07-4.33-1.8-8-6.83-8s-6.94 3.41-7.35 8zM182.4 264.85h5.74v-10.09h10.32v10.09h7.3v7.76h-7.3V291c0 2.83.87 3.93 3.94 3.93a20.21 20.21 0 0 0 2.35-.11v7.09a23.23 23.23 0 0 1-6.93.72c-7.27 0-9.68-3.89-9.68-10.42v-19.6h-5.74zM244.19 291.29c0 3.59 0 7.5.07 10.83h-10.11c-.14-1-.22-3-.28-4.3-2.21 3.74-5.5 5.17-10.26 5.17-7.59 0-12.44-4.62-12.44-13.86v-24.28h10.31v22.21c0 4.11 1.27 7.52 5.74 7.52 4.7 0 6.65-2.51 6.65-9.89v-19.84h10.32zM263.72 298.82v17.58h-10.26v-42.57c0-3 0-6-.07-9h10a40.74 40.74 0 0 1 .34 4.64c1.6-2.73 4.92-5.5 10.83-5.5 8.37 0 14.85 7 14.85 18.56 0 13.15-7.23 20.44-16.26 20.44-5.27.03-8.01-1.97-9.43-4.15zm15.2-15.82c0-6.83-2.76-10.69-7.67-10.69-5.86 0-7.94 3.76-7.94 11.27 0 7.12 1.92 11.25 7.5 11.25s8.11-4.29 8.11-11.83zM130.94 378.89a82.6 82.6 0 0 0 .51 9.63h-9.86a14.8 14.8 0 0 1-.52-3.64c-1.35 2.09-3.89 4.51-10.48 4.51-9 0-12.78-5.91-12.78-11.69 0-8.49 6.82-12.41 17.75-12.41h5.32V363c0-2.65-1-5.25-5.74-5.25-4.36 0-5.31 1.85-5.79 4.55h-9.81c.56-6.63 4.66-12 16-11.92 10 .06 15.41 4 15.41 12.83zm-10.06-7.34h-4.2c-6.22 0-8.52 1.9-8.52 5.5 0 2.69 1.65 5 5.36 5 6.56 0 7.36-4.56 7.36-9.49zM140.35 360.64c0-3.17 0-6.64-.07-9.39h10a44.63 44.63 0 0 1 .4 4.75c1.26-2.34 4.28-5.61 10.81-5.61 7.48 0 12.35 5.05 12.35 14.42v23.71h-10.33V366c0-4.19-1.4-7.23-5.95-7.23-4.38 0-6.89 2.44-6.89 9v20.77h-10.32zM217.17 336v42.32c0 3.39 0 6.83.07 10.24h-9.92c-.21-1.12-.41-3-.47-3.89-1.8 2.93-5 4.76-10.58 4.76-9.42 0-15.42-7.57-15.42-19.2 0-11.47 6.38-19.8 16.93-19.8 5.36 0 8.24 1.89 9.07 3.56V336zm-25.72 34c0 7.27 2.83 11.2 7.88 11.2 7.1 0 7.92-5.92 7.92-11.27 0-6.38-.9-11.2-7.65-11.2-5.42-.08-8.15 4.15-8.15 11.19zM255.13 338.88v29.58c0 9.52 4.89 12.35 10.25 12.35 6.14 0 10-3.34 10-12.35v-29.58h10.74v29c0 17-9.94 21.3-20.89 21.3-11.2 0-20.86-4.51-20.86-21.09v-29.21zM308.23 338.88v49.64h-10.74v-49.64z" transform="translate(-66)"/></g><path d="M438.58 98h-76.74A21.91 21.91 0 0 1 340 76.16V.32z" transform="translate(-66)" fill="#939393" id="Layer_2" data-name="Layer 2"/></svg>
          </div>
          <div id="pdf-2" class="ucla3d4e-pdfsvg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373 500"><defs><style>.pdf-2{fill:#454556}</style></defs><path d="M439 98c0 144.77-1 245.23-1 390a12 12 0 0 1-12 12H78a12 12 0 0 1-12-12V12A12 12 0 0 1 78 0h262l99 98z" transform="translate(-66)" fill="#ddd" id="Layer_1" data-name="Layer 1"/><path fill="#bfbfbf" d="M298.59 98l73.99 65.02L373 98h-74.41z" id="Layer_3" data-name="Layer 3"/><g id="Workshop2"><path d="M114.55 176c34.75-32.85 59.24-56.17 59.24-75.72 0-13.2-7.34-20.48-19.35-20.48-9.71 0-17.42 6.67-24.25 13.88l-17.13-17C126.49 62.27 139.24 55 158.77 55c26.91 0 45.28 17.17 45.28 43.51 0 23-21.47 47.49-43.82 70.61 7-.78 16.54-1.57 22.86-1.57h27.49v26.57h-96z" transform="translate(-66)" fill="#8b8aad"/><path d="M95.76 183.89c19.64-18.57 33.49-31.76 33.49-42.81 0-7.46-4.15-11.58-10.94-11.58-5.49 0-9.85 3.78-13.71 7.85l-9.69-9.64c7.6-8.13 14.8-12.23 25.85-12.23 15.21 0 25.6 9.71 25.6 24.6 0 13-12.14 26.85-24.78 39.92 4-.45 9.35-.89 12.93-.89H150v15H95.76z" transform="translate(-66)" fill="#686881"/><path class="pdf-2" d="M108.36 288c1.13 5 4.71 7.17 10.45 7.17s8.19-2.26 8.19-5.9c0-4-2.4-5.79-10.89-7.77-13.51-3.17-16.85-8.08-16.85-14.79 0-8.65 6.47-14.52 18.23-14.52 13.18 0 18.43 7.08 19.14 14.34h-10.82c-.51-3-2.2-6.37-8.6-6.37-4.36 0-7 1.8-7 5.32s2.11 4.86 10.13 6.72C134.79 275.6 138 281 138 288c0 9.06-6.86 15.28-20 15.28-12.6 0-19.23-6.2-20.42-15.25zM155.53 281c2.74-3.71 7.69-9.5 12.83-15.72h11.83l-13 14.07 14.21 23.2h-11.67L160.3 286l-4.77 4.62v12h-10.32V250h10.32zM192.59 286.12c0 4.66 2.34 9.22 7.48 9.22 4.3 0 5.52-1.73 6.5-4h10.33c-1.32 4.56-5.39 12.05-17.1 12.05-12.28 0-17.6-9.18-17.6-19 0-11.7 6-20 18-20 12.8 0 17.15 9.25 17.15 18.56a23.8 23.8 0 0 1-.13 3.14zm14.4-6.34c-.08-4.34-1.81-8-6.84-8s-6.93 3.41-7.34 8zM220.77 265.28h5.75v-10.09h10.32v10.09h7.3V273h-7.3v18.39c0 2.83.86 3.93 3.94 3.93a18.46 18.46 0 0 0 2.35-.12v7.1a23.29 23.29 0 0 1-6.94.71c-7.27 0-9.67-3.88-9.67-10.41V273h-5.75zM282.08 290.51c-1.29 6.21-5.65 12.9-16.76 12.9-11.6 0-17.56-8-17.56-19.22 0-11 6.71-19.77 18.06-19.77 12.56 0 16.06 9 16.26 13.23H272c-.63-3-2.35-5.16-6.38-5.16-4.72 0-7.39 4.14-7.39 11.36 0 7.94 2.83 11.55 7.34 11.55 3.55 0 5.45-2.09 6.37-4.89zM298.69 250v19.69c1.64-2.41 4.66-5.26 10.68-5.26 6.95 0 12.49 4.11 12.49 14.22v23.91H311.6v-22.38c0-4.85-1.72-7.42-6.05-7.42-5.73 0-6.86 4.27-6.86 10v19.77h-10.32V250zM339.33 286.12c0 4.66 2.35 9.22 7.48 9.22 4.3 0 5.53-1.73 6.51-4h10.33c-1.33 4.56-5.4 12.05-17.11 12.05-12.27 0-17.6-9.18-17.6-19 0-11.7 6-20 18-20 12.8 0 17.16 9.25 17.16 18.56a22.12 22.12 0 0 1-.14 3.14zm14.4-6.34c-.07-4.34-1.81-8-6.83-8s-6.94 3.41-7.35 8zM378.75 291.35c.78 3 3.2 4.63 7.05 4.63s5.2-1.37 5.2-3.62c0-2.4-1.6-3.33-6.94-4.65-12.14-3-14.13-6.75-14.13-12 0-5.47 3.87-11.28 15.12-11.28s15.13 6.17 15.45 11.22h-9.81c-.33-1.38-1.25-4-6.1-4-3.42 0-4.52 1.51-4.52 3.18 0 1.86 1.16 2.75 7.21 4.17 12.43 2.89 14.19 7.15 14.19 12.62 0 6.17-4.69 11.78-16.05 11.78s-16-5.46-16.81-12.06z" transform="translate(-66)"/></g><path d="M438.58 98h-76.74A21.91 21.91 0 0 1 340 76.16V.32z" transform="translate(-66)" fill="#939393" id="Layer_2" data-name="Layer 2"/></svg>
          </div>
          <div id="pdf-3" class="ucla3d4e-pdfsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373 500"><defs><style>.pdf-3{fill:#9a2051}</style></defs><path d="M439 98c0 144.77-1 245.23-1 390a12 12 0 0 1-12 12H78a12 12 0 0 1-12-12V12A12 12 0 0 1 78 0h262l99 98z" transform="translate(-66)" fill="#ddd" id="Layer_1" data-name="Layer 1"/><path fill="#bfbfbf" d="M298.59 98l73.99 65.02L373 98h-74.41z" id="Layer_3" data-name="Layer 3"/><g id="Workshop3"><path d="M112.9 176.21l15-20.52c8.58 8.19 19 14.19 30.75 14.19 13.7 0 22.83-6 22.83-16.76 0-12.32-7.2-19.91-37.72-19.91v-23c25.21 0 33.14-7.67 33.14-18.79 0-9.88-6.29-15.47-17.31-15.47-10 0-17.55 4.52-26.23 12.27l-16.45-19.81c12.92-11.11 27-18 44.13-18 29.15 0 48.42 13.83 48.42 38.51 0 14.45-8.29 24.82-23.4 31.18v.9c16.23 4.63 28 16.07 28 34.22 0 26.13-23.95 40.87-52.2 40.87-22.74.01-38.66-8.09-48.96-19.88z" transform="translate(-66)" fill="#e17fa7"/><path class="pdf-3" d="M92.74 184.22l8.31-11.39c4.76 4.55 10.53 7.88 17.07 7.88 7.6 0 12.66-3.32 12.66-9.3 0-6.84-4-11-20.93-11v-12.82c14 0 18.39-4.26 18.39-10.43 0-5.48-3.49-8.58-9.6-8.58-5.54 0-9.74 2.51-14.56 6.81l-9.12-11c7.17-6.16 15-10 24.49-10 16.17 0 26.86 7.67 26.86 21.37 0 8-4.6 13.76-13 17.29v.49c9 2.57 15.52 8.92 15.52 19 0 14.5-13.29 22.68-29 22.68-12.55.04-21.38-4.43-27.09-11zM95.61 268.07h11.58l7.61 20.85c.94 2.77 1.76 5.78 2.7 8.67h.29c.94-2.89 1.74-5.9 2.68-8.67l7.37-20.85h11.58V315h-9.66v-17.22c0-4.58.85-11.41 1.35-15.95h-.28L127 292.94l-6.64 18h-5.89l-6.65-18-3.74-11.11h-.29c.5 4.54 1.36 11.37 1.36 15.95V315h-9.54zM147.54 297.15c0-11.88 8.36-18.74 17.4-18.74s17.4 6.86 17.4 18.74-8.36 18.71-17.4 18.71-17.4-6.86-17.4-18.71zm24 0c0-6.18-2.18-10.2-6.55-10.2s-6.56 4-6.56 10.2 2.18 10.17 6.56 10.17 6.5-3.99 6.5-10.17zM187.74 297.15c0-11.68 7.29-18.74 14.81-18.74 3.94 0 6.35 1.47 8.76 3.73l-.38-5.41v-12.18h10.59V315h-8.64l-.76-3.54h-.27c-2.52 2.52-6 4.4-9.5 4.4-8.88 0-14.61-7.04-14.61-18.71zm23.19 6.85v-14.67a8.69 8.69 0 0 0-5.91-2.26c-3.43 0-6.43 3.17-6.43 10 0 7 2.42 10.17 6.52 10.17 2.25-.04 4.07-.89 5.82-3.24zM228.75 297.15c0-11.59 8.27-18.74 16.85-18.74 10.18 0 15.22 7.4 15.22 17.15a24.34 24.34 0 0 1-.44 4.68H239c1 5.18 4.49 7.56 9.26 7.56a15 15 0 0 0 7.73-2.34l3.5 6.38a23.28 23.28 0 0 1-12.68 4c-10.17.02-18.06-6.84-18.06-18.69zm23-3.91c0-3.93-1.71-6.76-5.94-6.76-3.34 0-6.23 2.24-7 6.76zM268.09 303.9v-39.35h10.59v39.78c0 2.27 1.05 3 1.91 3a4.75 4.75 0 0 0 1.3-.14l1.26 7.8a13.7 13.7 0 0 1-5.31.88c-7.27-.01-9.75-4.74-9.75-11.97zM287.86 268.52c0-3.25 2.58-5.54 6.13-5.54s6.13 2.29 6.13 5.54-2.58 5.53-6.13 5.53-6.13-2.31-6.13-5.53zm.83 10.76h10.58V315h-10.58zM308.58 279.28h8.64l.76 4.52h.27c3-2.89 6.6-5.39 11.47-5.39 7.77 0 11.08 5.48 11.08 14.41V315h-10.58v-20.82c0-5.14-1.38-6.75-4.44-6.75-2.66 0-4.28 1.24-6.61 3.47V315h-10.59zM347.58 321.13c0-3 1.78-5.36 5.07-7.19v-.29a6.9 6.9 0 0 1-3.26-6.06c0-2.58 1.71-5.09 4-6.7v-.28a11.42 11.42 0 0 1-4.8-9.27c0-8.57 7.09-12.93 14.78-12.93a17.11 17.11 0 0 1 5.53.87H382V287h-5.8a9.32 9.32 0 0 1 1.21 4.71c0 8.21-6.25 12-14.06 12A15.16 15.16 0 0 1 359 303a3.08 3.08 0 0 0-1.25 2.66c0 1.76 1.44 2.62 5.35 2.62h5.79c8.76 0 13.64 2.69 13.64 9.08 0 7.42-7.73 12.83-20 12.83-8.31 0-14.95-2.7-14.95-9.06zm24.81-2c0-2.25-1.93-2.77-5.45-2.77h-3.71a19.08 19.08 0 0 1-5-.46 4.53 4.53 0 0 0-1.94 3.51c0 2.71 3.14 4.09 7.92 4.09s8.18-1.86 8.18-4.33zm-4.16-27.83c0-3.81-2.07-5.81-4.88-5.81s-4.88 2-4.88 5.81 2.09 6 4.88 6 4.88-2.05 4.88-5.96z" transform="translate(-66)"/></g><path d="M438.58 98h-76.74A21.91 21.91 0 0 1 340 76.16V.32z" transform="translate(-66)" fill="#939393" id="Layer_2" data-name="Layer 2"/></svg>
          </div>
          <div id="pdf-4" class="ucla3d4e-pdfsvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 373 500"><defs><style>.pdf-4{fill:#4a340c}</style></defs><path d="M439 98c0 144.77-1 245.23-1 390a12 12 0 01-12 12H78a12 12 0 01-12-12V12A12 12 0 0178 0h262l99 98z" transform="translate(-66)" fill="#ddd" id="Layer_1" data-name="Layer 1"/><path fill="#bfbfbf" d="M298.59 98l73.99 65.02L373 98h-74.41z" id="Layer_3" data-name="Layer 3"/><g id="Workshop4"><path d="M162 111.32c0-9.14.82-23.07 1.27-32.21h-.9c-3.62 8.13-7.7 16.09-11.77 24.3l-18.87 31.38h77.9v25.36H99.84v-23l52.48-86.44H193v143.74h-31z" transform="translate(-66)" fill="#aa8647"/><path class="pdf-4" d="M127 147.86c0-5.13.47-13 .72-18.09h-.51c-2 4.56-4.32 9-6.61 13.65L110 161.05h43.8v14.25H92.11v-12.93l29.49-48.57h22.87v80.77H127zM99.87 255.27a75.46 75.46 0 0112.34-.85c5.61 0 9.67 1.09 12.37 3.27a11.69 11.69 0 014.29 9.35c0 4-1.28 7.34-3.69 9.57-3.12 2.94-7.78 4.29-13.13 4.29a22.25 22.25 0 01-3.12-.2v14.47h-9.06zm9.06 18.34a13.41 13.41 0 003 .25c4.86 0 7.86-2.46 7.86-6.56 0-3.72-2.55-5.94-7.16-5.94a17.44 17.44 0 00-3.73.31zM133.84 275.49c0-4.31-.07-7.15-.24-9.68h7.85l.33 5.43h.22a8.59 8.59 0 017.92-6.09 7.83 7.83 0 011.95.17v8.58a11.19 11.19 0 00-2.47-.25c-3.35 0-5.64 1.78-6.25 4.63a10.51 10.51 0 00-.17 2v14.85h-9.15zM165.91 257.66c0 2.54-1.87 4.56-4.91 4.56a4.58 4.58 0 114.91-4.56zm-9.4 37.51v-29.36h9.14v29.36zM173 275.19c0-3.66-.11-6.75-.24-9.38h7.92l.43 4.07h.19a10.62 10.62 0 019.07-4.73c6 0 10.51 4 10.51 12.64v17.38h-9.14V278.9c0-3.78-1.35-6.37-4.65-6.37a4.92 4.92 0 00-4.62 3.44 6.39 6.39 0 00-.32 2.26v16.94H173zM217.91 257.43v8.38h6.57v6.73h-6.57v10.64c0 3.54.88 5.18 3.6 5.18a11.74 11.74 0 002.71-.28l.08 6.94a19.18 19.18 0 01-5.92.78 9.55 9.55 0 01-6.88-2.54c-1.69-1.74-2.52-4.54-2.52-8.71v-12h-3.91v-6.73H209v-6.32zM239.15 257.66c0 2.54-1.87 4.56-4.91 4.56a4.58 4.58 0 114.91-4.56zm-9.4 37.51v-29.36h9.14v29.36zM246.19 275.19c0-3.66-.12-6.75-.24-9.38h7.92l.42 4.07h.19a10.64 10.64 0 019.08-4.73c6 0 10.51 4 10.51 12.64v17.38h-9.15V278.9c0-3.78-1.35-6.37-4.64-6.37a4.94 4.94 0 00-4.63 3.44 6.63 6.63 0 00-.32 2.26v16.94h-9.14zM309.36 265.81c-.14 1.9-.25 4.38-.25 8.75v16.34c0 5.64-1.14 10.26-4.47 13.21-3.21 2.79-7.58 3.6-11.9 3.6a23.24 23.24 0 01-10.56-2.25l1.81-6.92a18.14 18.14 0 008.51 2.2c4.32 0 7.62-2.3 7.62-7.73v-1.89H300a9.46 9.46 0 01-7.93 3.8c-7.24 0-12.41-5.89-12.41-14.3 0-9.47 6.1-15.47 13.3-15.47 4 0 6.56 1.75 8 4.17h.13l.3-3.51zm-9.38 12a6.94 6.94 0 00-.19-1.69 4.94 4.94 0 00-4.91-4c-3.32 0-6 3-6 8.36 0 4.37 2.17 7.79 6 7.79a5 5 0 004.84-3.68 9.66 9.66 0 00.27-2.42zM99.87 327.29a74.12 74.12 0 0111.8-.87c5.57 0 9 .55 12 2.27a8.77 8.77 0 014.82 8c0 3.56-2.09 6.91-6.64 8.6v.16c4.61 1.21 8.05 4.73 8.05 9.91a10.74 10.74 0 01-4.21 8.59c-3 2.38-7.85 3.68-15.9 3.68a70.41 70.41 0 01-9.88-.6zm9.06 15.49h3c4.85 0 7.37-2 7.37-5s-2.33-4.69-6.46-4.69a19.78 19.78 0 00-3.87.28zm0 17.89a22.33 22.33 0 003.5.16c4.16 0 7.81-1.6 7.81-5.86 0-4.05-3.63-5.67-8.19-5.67h-3.12zM152.66 367.17l-.54-2.91h-.19a10.57 10.57 0 01-8.39 3.57c-6 0-9.49-4.29-9.49-9 0-7.65 6.84-11.28 17.23-11.26v-.38c0-1.56-.84-3.79-5.38-3.78a16.94 16.94 0 00-8.09 2.19l-1.68-5.84a23.77 23.77 0 0111.41-2.63c9.78 0 12.87 5.78 12.87 12.67v10.24a42.22 42.22 0 00.47 7.11zm-1.11-13.88c-4.8 0-8.51 1.13-8.51 4.63a3.29 3.29 0 003.62 3.51 5 5 0 004.72-3.37 5.75 5.75 0 00.17-1.56zM167.61 359.22a17.77 17.77 0 007.83 2.18c2.75 0 3.93-.93 3.93-2.42s-.93-2.26-4.31-3.4c-6.1-2-8.4-5.33-8.37-8.78 0-5.51 4.66-9.65 11.94-9.65a19.48 19.48 0 018.27 1.71l-1.58 6.29a14.91 14.91 0 00-6.37-1.66c-2.22 0-3.5.89-3.5 2.37s1.16 2.14 4.76 3.39c5.57 1.89 7.91 4.75 7.94 9 0 5.48-4.27 9.51-12.68 9.51a21 21 0 01-9.51-2.06zM203.11 329.66c0 2.54-1.87 4.56-4.91 4.56a4.58 4.58 0 114.91-4.56zm-9.4 37.51v-29.36h9.14v29.36zM232.19 366.44a21.57 21.57 0 01-8.19 1.36c-9.49 0-15.54-5.8-15.54-15 0-8.58 5.88-15.6 16.79-15.6a21 21 0 017 1.16l-1.42 6.78a12.31 12.31 0 00-5.11-.93c-4.83 0-7.92 3.42-7.89 8.23 0 5.39 3.62 8.25 8 8.25a13.63 13.63 0 005.26-1zM237.15 359.22a17.77 17.77 0 007.85 2.18c2.76 0 3.93-.93 3.93-2.42s-.93-2.26-4.31-3.4c-6.1-2-8.4-5.33-8.36-8.78 0-5.51 4.65-9.65 11.94-9.65a19.55 19.55 0 018.27 1.71l-1.59 6.29a14.86 14.86 0 00-6.37-1.66c-2.22 0-3.5.89-3.5 2.37s1.16 2.14 4.76 3.39c5.58 1.89 7.91 4.75 7.95 9 0 5.48-4.28 9.51-12.69 9.51a21 21 0 01-9.51-2.06z" transform="translate(-66)"/></g><path d="M438.58 98h-76.74A21.91 21.91 0 01340 76.16V.32z" transform="translate(-66)" fill="#939393" id="Layer_2" data-name="Layer 2"/></svg>
        </div>
        </div>`;
          addpage.play();
          $('#overlay-content').append(str);

          // Workshop 1
        var pdf1 = document.getElementById('pdf-1');
        var tlpdf1 = new TimelineMax({paused: true}).to(pdf1, 0.5, {scale: 1.2, transformOrigin: "50% 50%"}, 0);
        pdf1.onmouseenter = function() {
          tlpdf1.play();
        }

        pdf1.onmouseleave = function() {
          tlpdf1.reverse();
        }

        pdf1.addEventListener('click', function() {
          window.location.href = "https://docs.google.com/presentation/d/16gKkG9ZPz7cI1yretzZ8DKTLchW2Jie_GbaOCly3944/edit?usp=sharing";
        });

        // Workshop 2
        var pdf2 = document.getElementById('pdf-2');
        var tlpdf2 = new TimelineMax({paused: true}).to(pdf2, 0.5, {scale: 1.2, transformOrigin: "50% 50%"}, 0);
        pdf2.onmouseenter = function() {
          tlpdf2.play();
        }

        pdf2.onmouseleave = function() {
          tlpdf2.reverse();
        }

        pdf2.addEventListener('click', function() {
          window.location.href = "https://docs.google.com/presentation/d/1GpGNhRRKfQNpk_XOAbwSFFno1hDF6uTxbT5DPUp_t1c/edit?usp=sharing";
        });

        // Workshop 3
        var pdf3 = document.getElementById('pdf-3');
        var tlpdf3 = new TimelineMax({paused: true}).to(pdf3, 0.5, {scale: 1.2, transformOrigin: "50% 50%"}, 0);
        pdf3.onmouseenter = function() {
          tlpdf3.play();
        }

        pdf3.onmouseleave = function() {
          tlpdf3.reverse();
        }

        pdf3.addEventListener('click', function() {
          window.location.href = "https://docs.google.com/presentation/d/1NNawmoKkAyQkMOlCKVwL0EU1ZxqgdHoM0sVCqkPh9Xo/edit?usp=sharing";
        });

        // Workshop 4
        var pdf4 = document.getElementById('pdf-4');
        var tlpdf4 = new TimelineMax({paused: true}).to(pdf4, 0.5, {scale: 1.2, transformOrigin: "50% 50%"}, 0);
        pdf4.onmouseenter = function() {
          tlpdf4.play();
        }

        pdf4.onmouseleave = function() {
          tlpdf4.reverse();
        }

        pdf4.addEventListener('click', function() {
          window.location.href = "https://docs.google.com/presentation/d/1A3Hbvjlsb4zubOJVVoGk9PNEXOIINzQdnbWGA-2vsds/edit?usp=sharing";
        });
        });

        // Project Preview
        var ShowProject = document.getElementById('projectbutton');
        ShowProject.addEventListener('click', function() {
          var str = `<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
          <div id="projectdisplay" class="ucla3d4e-projects">
          <div class="carousel js-flickity">
              <div id="cell1" class="carousel-cell">
                <div class="ucla3d4e-bioelement">
                  <div class="biowrapper">
                    <img style="max-width: 100%; max-height: 100%; object-fit: cover; margin: auto;" id="img2" src="img/media/airplane_cover.JPG"/>
                  </div>
                  <div class="ucla3d4e-biodesc">
                    <h4 class="biotext">Flight</h4>
                    <p class="biotext">The flight team has constructed a lightweight plane with a 6 foot wing span.
                      It has a 3D printed chasis supported by carbon fiber rods, and its wings use a balsa wood ribcage wrapped around Monokote.
                      In the future, we're looking into creating a drop-off payload system to distribute seeds while in the air.
                    </p>
                  </div>
                </div>
              </div>
              <div id="cell2" class="carousel-cell">
                <div class="ucla3d4e-bioelement">
                  <div class="biowrapper">
                    <img style="max-width: 100%; max-height: 100%; object-fit: cover; margin: auto" id="img2" src="./img/media/point_of_care.jpg"/>
                  </div>
                  <div class="ucla3d4e-biodesc">
                    <h4 class="biotext">Healthcare and Prosthetics</h4>
                    <p class="biotext">The 3D4E healthcare group is working on a point of care system, 
                      where a small module measures your vital signs. It measures blood oxygen, body temperature,
                      and heart rate with a Raspberry Pi as the foundation, and streams to an IoT service.
                    </p>
                  </div>
                </div>
              </div>
              <div id="cell9" class="carousel-cell">
                <div class="ucla3d4e-bioelement">
                  <div class="biowrapper">
                    <img style="max-width: 100%; max-height: 100%; object-fit: cover; margin: auto" id="img2" src="./img/media/post_processing_cover.jpg"/>
                  </div>
                  <div class="ucla3d4e-biodesc">
                    <h4 class="biotext">Post Processing</h4>
                    <p class="biotext">When 3D prints first come out of the printer, they are a bit unrefined and look like, well, plastic.
                      However, this team works to upgrade the final production of the print. They first sand the print to remove the layer lines, 
                      then apply primer and paint to create a translucent surface.
                    </p>
                  </div>  
                </div>
              </div>
              <div id="cell8" class="carousel-cell">
                <div class="ucla3d4e-bioelement">
                  <div class="biowrapper">
                    <img style="max-width: 100%; max-height: 100%; object-fit: cover; margin: auto" id="img2" src="./img/media/hydroponics_cover.png"/>
                  </div>
                  <div class="ucla3d4e-biodesc">
                    <h4 class="biotext">Hydroponics</h4>
                    <p class="biotext">What better way to take care of your succulents than to create a desk-sized hydroponics garden!
                    </p>
                  </div>  
                </div>
              </div>
              <div id="cell11" class="carousel-cell">
                <div class="ucla3d4e-bioelement">
                  <div class="biowrapper">
                    <img style="max-width: 100%; max-height: 100%; object-fit: cover; margin: auto;" id="img3" src="./img/media/rc_cars.jpg"/>
                  </div>
                  <div class="ucla3d4e-biodesc">
                    <h4 class="biotext">RC Cars</h4>
                      <p class="biotext">The RC Car team has built a compact electric vehicle, reaching a top speed of 15 ft/s in under 2 seconds. 
                        The vehicle utilized PLA and SLA printers to create the main gearbox, rear differential, steering mechanism, and more! 
                        Future goals include upgrading the aerodynamics as well as increasing the strength and durability of drive system parts.
                      </p>
                    </div>
                  </div>
              </div>
              <div id="cell3" class="carousel-cell">
                <div class="ucla3d4e-bioelement">
                  <div class="biowrapper">
                    <img style="max-width: 100%; max-height: 100%; object-fit: cover; margin: auto;" id="img3" src="./img/media/music.jpg"/>
                  </div>
                  <div class="ucla3d4e-biodesc">
                    <h4 class="biotext">Musical Instruments</h4>
                      <p class="biotext">If you combine 3D printing, a love for music, a desire to help people, and a little bit of creativity, 
                        this is the project that results. We are designing and printing multiple different instruments with the intention of 
                        donating these to causes in which they can make the largest positive impact, like homeless shelters and orphanages. 
                        The instruments will include various ukuleles, drums, recorders, and whatever else our imagination leads to.
                      </p>
                    </div>
                  </div>
              </div>
              <div id="cell5" class="carousel-cell">
                <div class="ucla3d4e-bioelement">
                  <div class="biowrapper">
                    <img style="max-width: 100%; max-height: 100%; object-fit: cover; margin: auto;" id="img5" src="./img/media/city.JPG">
                  </div>
                  <div class="ucla3d4e-biodesc">
                    <h4 class="biotext">Architecture</h4>
                    <p class="biotext">Calling for all architects! This project is fun for beginners and pros alike. 
                      We model architectural designs within a wide range, from castles to animated characters’ homes. 
                      Keen attention to detail reveals intricate windows, tiled roofing, and perhaps even doors that open. 
                      We may work our way up to a campus map of UCLA—stay tuned!
                    </p>
                  </div>
                </div>
              </div>
        </div>
        </div>`;
        addpage.play();
        $('#overlay-content').append(str);
        });

    })
})(jQuery);

/*
              <div id="cell11" class="carousel-cell">
                <div class="ucla3d4e-bioelement">
                  <div class="biowrapper">
                    <img style="max-width: 100%; max-height: 100%; object-fit: cover; margin: auto;" id="img3" src="./img/media/rc_cars.jpg"/>
                  </div>
                  <div class="ucla3d4e-biodesc">
                    <h4 class="biotext">RC Cars</h4>
                      <p class="biotext">The RC Car team has built a compact electric vehicle, reaching a top speed of 15 ft/s in under 2 seconds. 
                        The vehicle utilized PLA and SLA printers to create the main gearbox, rear differential, steering mechanism, and more! 
                        Future goals include upgrading the aerodynamics as well as increasing the strength and durability of drive system parts.
                      </p>
                    </div>
                  </div>
              </div>
*/