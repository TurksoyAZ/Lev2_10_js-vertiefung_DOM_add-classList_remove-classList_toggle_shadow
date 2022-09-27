



let outputElement=document.getElementById("element");

function getSmall(){
    outputElement.classList.add("smoll");
    outputElement.classList.remove("forMittle");
    outputElement.classList.remove("forBig");
}

function getMiddle(){
    outputElement.classList.add("forMittle");
    outputElement.classList.remove("smoll");
    outputElement.classList.remove("forBig");
}

function getBig(){
    outputElement.classList.add("forBig");
    outputElement.classList.remove("smoll");
    outputElement.classList.remove("forMittle");
}