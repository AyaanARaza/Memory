var cards = document.querySelectorAll('.memory-card');
var cards_up = 0;
var card1;
var card2;
start();
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();
cards.forEach(card => {
    card.addEventListener("click", flipcard)
}
)
function flipcard() {
    console.log(this);
    if (this.classList[1] != "flip" && cards_up < 2 && this.classList.length == 1) {
        this.classList.add("flip");
        cards_up += 1;
        if (cards_up == 1) {
            card1 = this;
        } else {
            card2 = this;
            check();
        }

    }
}
function check() {
    if (card1.dataset.framework == card2.dataset.framework) {
        cards_up = 0;
        card1.classList.add("found");
        card2.classList.add("found");
    } else {
        setTimeout(() => {
            card1.classList.remove("flip");
            card2.classList.remove("flip");
            cards_up = 0;
        }, 1500);
        
    }
    var count = 0;
    cards.forEach(card => {
        if (card.classList.length == 3){
            count +=1;
        }
    })
    if (count == 12){
        stop();
    }
}


var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var Interval ;


function start(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10); 
}
function stop(){
    clearInterval(Interval);
}   

function startTimer() {
  tens++; 
  
  if(tens <= 9){
    appendTens.innerHTML = "0" + tens;
  }
  
  if (tens > 9){
    appendTens.innerHTML = tens;
    
  } 
  
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }

}