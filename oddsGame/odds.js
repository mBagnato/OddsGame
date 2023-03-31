const play = document.querySelector("#start-but");
const time = document.querySelector("#countDown");

const playAudio = function () {
    let audio = new Audio('audio/countdown.mp3')
    audio.play();

        let timer = setInterval(function(){
            if(time.innerHTML === "3") {
                time.innerHTML = "2"
            }
        },2000)

        let timerTwo = setInterval(function(){
            if(time.innerHTML === "2") {
                time.innerHTML = "1"
            }
        },4000)

        let timerThree = setInterval(function(){
            if(time.innerHTML === "1") {
                time.innerHTML = "GO"
            }
        },7000)
};

play.addEventListener("click", playAudio);
