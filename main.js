function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    rect(30, 20, 580, 430);
    circle(30, 30, 50);
    circle(610, 30, 50);
    circle(610, 440, 50);
    circle(30, 440, 50);


    image(video, 0, 0, 640, 480);
}

function take_snapshot()
{
    save('student_name.png');
}