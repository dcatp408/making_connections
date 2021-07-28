console.log("page loaded...");

var name1 = document.querySelector(".card-body h1")
function changeName() {
    var newName = prompt("please input another name");
    name1.innerText = newName
}

var clickIcon = document.querySelector("#num")
var person = document.querySelector(".person")
function removeUser() {
    person.remove();
    clickIcon.innerText--;
}
var clickIcon = document.querySelector("#num")
var person2 = document.querySelector(".person2")
function removeUser2() {
    person2.remove();
    clickIcon.innerText--;
}