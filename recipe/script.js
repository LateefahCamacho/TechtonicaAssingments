const button = document.getElementsByClassName("noteButton")
  

function notes(){

const textArea = document.createElement("text")
const myTextArea = document.createTextNode("enter notes here")
    textArea.appendChild(myTextArea) 
    document.body.appendChild(textArea)
    console.log(textArea)
}