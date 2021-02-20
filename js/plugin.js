var s = document.getElementById("load");
window.onload = setInterval(function fadeOutEffect() {
   
    var fadeEffect = setInterval(function () {
        if (!s.style.opacity) {
            s.style.opacity = 1;
        }
        if (s.style.opacity < 0.1) {
            clearInterval(fadeEffect);
            s.style.display = "none";
        } else {
            s.style.opacity -= 0.1;
        }
    }, 200);
    
},2000);

