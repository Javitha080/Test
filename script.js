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
        if(walkImage == 11) {
            walkImage = 1;
        }
document.setElementById("zombie").src = "Walk"+walkImage".png";
        
    },150);
}
