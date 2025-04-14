function start(event) {
    if (event.key === "Enter") {
        walk(); 
    }
    if (event.key === " ") {
        alert("Attack"); 
    }
}
function walk(){
    setInterval(()=>{
document.setElementById("zombie").src = "Walk2.png";
        
    },150);
}
