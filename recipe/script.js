const button = document.getElementsByClassName("noteButton").addEventlistener("click", notes)
  

function notes(){

const textArea = document.createElement("text")
const myTextArea = document.createTextNode("enter notes here")
    textArea.appendChild(myTextArea) 
    document.body.appendChild(textArea)
    console.log(textArea)
}