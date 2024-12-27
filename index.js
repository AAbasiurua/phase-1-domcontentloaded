document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded"); 
});

    "This console.log() fires when index.js loads - before DOMContentLoaded has triggered"
;// Your code goes here


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('text').innerHTML = `This is really cool!`;
})