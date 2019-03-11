//declaring variable for each field
let writeEl = document.getElementById("msg")
//declaring article right 
let rightEl = document.getElementById("right")
//declaring article left 
let leftEl = document.getElementById("left")

// adding eventListener for  input text

writeEl.addEventListener("keyup", function (event) {
    //terget each article by using innerHTML
    rightEl.innerHTML = event.target.value;
    leftEl.innerHTML = event.target.value;
    //invoke the DON event
    console.log("event", event)
})