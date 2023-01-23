const h = document.head;
const b = document.body;

if(document.body.nodeType=== document.ELEMENT_NODE) {
    console.log("Body is an element node")
} else{
    console.log("body is a textual node")
}
