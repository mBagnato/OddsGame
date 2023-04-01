const play = document.querySelector("#start-but");
const time = document.querySelector("#countDown");
let count = 3;

const playAudio = function () {
    let audio = new Audio('audio/countdown.mp3')
    audio.play();

        function countdown() {
            time.textContent = count;
            count--;

            if(count === -1) {
                time.textContent = "GO"
                clearInterval(interval);
                document.querySelector("#start-but").disabled = true;
            } 
        }
        const interval = setInterval(countdown, 1500);
};
play.addEventListener("click", playAudio);

const reset = document.querySelector("#restart");

reset.addEventListener("click", function() {
    document.querySelector("#start-but").disabled = false;
    count = 3;
    play.addEventListener("click", playAudio);
});

