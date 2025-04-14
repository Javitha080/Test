function start(event) {
    if (event.key === "Enter") {
        walk(); 
    }
    if (event.key === " ") {
        alert("Attack"); 
    }
}
function walk(){
    alert("Zombie walk ok");
}
