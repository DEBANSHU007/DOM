var body=document.getElementsByTagName('body')[0];
var outerdiv=document.getElementById('Outerdiv');
var innerdiv=document.getElementById('innerdiv');
var button=document.getElementById('btn');

function clickHandler(){
    console.log(event.currentTarget);
    event.stopPropagation();
}

button.addEventListener('click',clickHandler)
outerdiv.addEventListener('click',clickHandler)
innerdiv.addEventListener('click',clickHandler)
body.addEventListener('click',clickHandler)