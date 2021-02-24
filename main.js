//these are the variables we are going to use in the javascript coding
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_x,last_y;
var color ="black";
var width=1;
var radius=40;
var mouse_event="mouseup"
//this is the event listner for mousedown
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color_input").value;
    width = document.getElementById("width_input").value;
    radius = document.getElementById("radius_input").value;
    mouse_event = "mousedown";
}

//this is the event listner for mousemove
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        console.log("last position of x and y are");
        console.log("x = "+last_x+" y = "+last_y);
        ctx.moveTo(last_x,last_y);
        console.log("current position of x and y are");
        console.log("x = "+current_position_x+" y = "+current_position_y);
        ctx.arc(current_position_x, current_position_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_x = current_position_x;
    last_y = current_position_y;
}

//this is the event listner for mouseup
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}

//this is the event listner for mouseleave
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}

//this is the function for clear area
function cleararea(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}