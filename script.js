// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing

$(window).scroll(function() {
    $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
});
console.log("this is a js comment");

function setup() {
    var canvas = createCanvas(800, 250);
    background(255);
    // Move the canvas so it's inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    background(255, 0, 200);
}