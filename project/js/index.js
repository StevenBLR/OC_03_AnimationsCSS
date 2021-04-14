const loadingElt = document.querySelector(".loading");

function HideElt(elt, delay){
    setTimeout(function(){
        elt.style.display = "none";
    }, delay);
}

HideElt(loadingElt,7000); // Hide loading UI after 7 seconds