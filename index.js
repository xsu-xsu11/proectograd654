'use strict';

var slideInterval=setInterval(slider, 20000);

function slider() {
    const cards=document.querySelectorAll('.card');
    console.log(cards);
    for (let i=0; i< cards.length; i++) {
        if (cards[i].classList.contains("show")) {
            if (i===cards.length-1) {
                cards[0].classList.add("show");
            }
            else {
                cards[i+1].classList.add("show");
            }
            cards[i].classList.remove("show");
            break;
        }
    }
}