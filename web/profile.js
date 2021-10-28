const favColor = document.getElementById('color')
const favPlace = document.getElementById('place')
const favRitual = document.getElementById('ritual')


function faveCBttn(evt) {
    
evt.preventDefault();

    alert("Red");
}

favColor.addEventListener("click", faveCBttn)



function favePlace(evt) {
    evt.preventDefault();

    alert("Italy");
}

favPlace.addEventListener("click", favePlace)




function faveRitual(evt) {
    evt.preventDefault();

    alert("Sleeping");
}

favRitual.addEventListener("click", faveRitual)