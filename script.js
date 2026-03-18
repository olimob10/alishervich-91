
function runApp(){
    let text = prompt("Enter text:");
    document.getElementById("output").innerText = text.split("").reverse().join("");
}
