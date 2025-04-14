function start(event) {
    if (event.key == "Enter") {
        walk(); 
    }
    if (event.key == " ") {
        alert("Attack"); 
    }
}

var walkImage = 1;

function walk(){
    setInterval(()=>{

        walkImage++
document.setElementById("zombie").src = "Walk"+walkImage".png";
        
    },150);
}
