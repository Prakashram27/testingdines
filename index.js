$(document).ready(function(){
    $(".on").click(function() {
        $('.alert').css({
            'transform': 'translateX(0)',
        });
    });
    
    $(".close").click(function() {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    });

    $(".out").click(function(){
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    })
})
ScrollReveal({ reset: true });
ScrollReveal().reveal('.banner', { easing:"ease-in", delay: 100});
ScrollReveal().reveal('.shop', { easing: "ease-in", delay: 100});
ScrollReveal().reveal('.about', { easing: "ease-in", delay: 100 });
ScrollReveal().reveal('.review', { easing: "ease-in", delay: 100 });
ScrollReveal().reveal('.contact', { easing: "ease-in", delay: 100 });
ScrollReveal().reveal('.form', { easing: "ease-in", delay: 100 });
ScrollReveal().reveal('.strip', { easing: "ease-in", delay: 100 });

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}
      (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: 'bdMynCYb7nybApUkKBaSaepS',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
