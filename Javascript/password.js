// Title: password.js
// Author: Mahesha Uthayakumar
// Display generated password

function generator() {
    var password = "";
    var characters = "0123456789@#$%!-&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // all possible chars in english alph

    // define length of password character
    var long = "30";
    for (var i = 0; i < long; i++) {
        // generate password
        gen = characters.charAt(Math.floor(Math.random() * characters.length));
        password += gen;
    }
    // send the output to the input
    document.getElementById('pass').value = password;
}
// Copy password button
function copy() {
    var copyText = document.getElementById("pass");
    // Set selection range to copy longer text on mobile devices
    copyText.setSelectionRange(0, 9999);
    //Copy the text from the text field 
    navigator.clipboard.writeText(copyText.value);
}