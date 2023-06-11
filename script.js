let key = document.getElementById("input1");
let value = document.getElementById("input2");
let submit = document.getElementById("subbtn");
let dlete = document.getElementById("delbtn");
let output = document.getElementById("output");

submit.addEventListener("click" , storeValue);
function storeValue() {
    localStorage.setItem(key.value , value.value);
    let emptyNote = ""
    emptyNote += `
    ${localStorage.getItem(key.value)}
    `
    output.innerHTML += key.value + " : " + emptyNote + "<b>";
    key.value = "";
    value.value = "";
}

dlete.addEventListener("click" , deleteValue);
function deleteValue() {
    localStorage.removeItem(key.value);
    key.value = ""
    output.innerHTML = ""
}