//get the upload content modal
let contentFrame = document.getElementById("upload-content-frame");

//get the button that opens the content modal
let btn = document.getElementById("upload-btn");

//get the element that closes the modal/ content frame
let close = document.getElementById("close");

//open the content frame when the user clicks on the button
btn.onclick = function() {
    contentFrame.style.display = "block";
}

//close the content frame or modal when the user clicks on X
close.onclick = function(event) {
    contentFrame.style.display = "none";
}

//close the content frame or modal when the user clicks anywhere outside
/*window.onclick = function(event) {
    if (event.target === contentFrame) {
        contentFrame.styl.display = "none";
    }
}*/