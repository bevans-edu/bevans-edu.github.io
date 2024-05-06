let main = document.getElementsByClassName("game-window");
let buttons = document.getElementsByClassName("button-container");
document.getElementById("j").addEventListener("click",helloWorld());
function buildOptions(quantity) {
    // for (let index = 0; index < quantity; index++) {
        
    // }
    var b = document.createElement("p");
    b.innerHTML = quantity;
    buttons.appendChild(b);
}
function print(text) {
    var p = document.createElement("p");
    p.innerHTML = text;
    main.appendChild(p);
}
function helloWorld() {
    alert("hello");
}
