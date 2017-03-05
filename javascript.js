var dvd = new Image();
dvd.src = "dvd.png";

var rid = 0;


var addCircle = function(e) {

    stop();
    
    var rad = 0;
    var speed = 1;
    var x = s.clientWidth / 2;
    var y = s.clientHeight / 2;

    var draw = function() {

	clear();
    
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx", x);
	c.setAttribute("cy", y);
	c.setAttribute("r", rad);
	c.setAttribute("fill", "blue");
	s.appendChild(c);

	rad += speed;

	if ( rad == y || rad == 0 ) {
	    speed *= -1;
	}

	rid = window.requestAnimationFrame(draw);

    }

    draw();
    
};

var addDVD = function(e) {

    stop();

    var x = Math.random() * (s.clientWidth - 50);
    var y = Math.random() * (s.clientWidth - 50);
    var x1 = 1;
    var y1 = 1;
    
    if( Math.round( Math.random() ) == 0 ) {
	x1 *= -1;
    }
    
    if( Math.round( Math.random() ) == 0 ) {
	y1 *= -1;
    }

    var move = function() {

	clear();

	var d = document.createElementNS("http://www.w3.org/2000/svg", "image");
	d.setAttribute("href", "dvd.jpeg");
	d.setAttribute("x", x);
	d.setAttribute("y", y);
	s.appendChild(d);

	x += x1;
	y += y1;

	if ( x + 50 > s.clientWidth || x < 0 ) {
	    x1 *= -1;
	}
	
	if ( y + 50 > s.clientHeight || y < 0 ) {
	    y1 *= -1;
	}

	rid = window.requestAnimationFrame(move);
	
    }

    move();
    
};

var stop = function(e) {
    window.cancelAnimationFrame(rid);
};

var clear = function(e) {
    s.innerHTML = '';
};


circleButton.addEventListener("click", addCircle);
dvdButton.addEventListener("click", addDVD);
stopButton.addEventListener("click", stop);
