var dvd = new Image();
dvd.src = "dvd.png";

var rid = 0;

var addCircle = function(e) {
    
    window.cancelAnimationFrame(rid);
    
    var rad = 0;
    var x = 250; // 500/2
    var y = 250; // 500/2

    var growing = true;
    var speed = 5;

    var draw = function() {
    
	c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", rad);
	c.setAttribute("fill", "blue");
	c.setAttribute("id", "cir");
	s.appendChild(c);

	rad += speed;

	if( rad == y || rad == 0 )
	    speed = -speed;

	rid = window.requestAnimationFrame(draw);

    };

    draw();
    
};

var addDVD = funtion(e) {
    
};

var stop = function(e) {
    
};

circleButton.addEventListener("click", addCircle);
dvdButton.addEventListener("click", addDVD);
stopButton.addEventListener("click", stop);
