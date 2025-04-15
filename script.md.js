function start(event) {
    if (event.key == "Enter" && walkWorker == 0) {
        walk();
        timeRemian();
        runImage();

    }
    if (event.key == " ") {
        alert("Attack");
    }
}

var walkImage = 1;

var walkWorker = 0;

function walk() {

    walkWorker = setInterval(() => {

        walkImage++

        if (walkImage == 11) {
            walkImage = 1;
        } var
            document.getElementById("zombie").src = "Walk" + walkImage + ".png";

    }, 150);
}
var time = 50;
var timeWorker = 0

function timeRemian() {
    timeWorker = setInterval(() => {

        time--

        if (time == 0) {
            alert("You Lost!! try again");
            window.location.reaload();
        }
        document.getElementById("time").innerHTML = "your remaining time:" + time;
    }, 500);

}
var runImage = 1;
var runWorker = 0
function run() {
    runWorker = setInterval(() => {
        runImage++
        if (runImage == 11) {
            runImage = 1;
        }
        document.getElementById("knight").src = "Run" + runImage + ".png";
    }, 150);
}

var attackImage = 1;

function attack() {
    attackWorker = setInterval(() => {

        attackImage++
        if (attackImage == 11) {
            attackImage = 1;
        }

        document.getElementById("knight").src = "Attack" + attackImage + ".png";
    }, 100);
}

