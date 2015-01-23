/*
[1] http://en.wikipedia.org/wiki/Flag_of_Greece
[2] http://en.wikipedia.org/wiki/List_of_countries_by_proportions_of_national_flags
background-color: rgb(0, 97, 242);
*/

// render a rectangle at x, y with w width and h height in color C
function r(c, x, y, w, h, C) {
  c.fillStyle = C || "white";
  c.beginPath();
  c.rect(x, y, w, h);
  c.closePath();
  c.fill();
  return c;
}

function renderGreekFlag() {
	var W = 300,
	    H = (W * 2.0) / 3.0, // Greece's flag has a 2:3 aspect ratio. [2]
	    T = H / 9.0, // height of stripe
	    white = "white",
	    blue = "#0061F2", // CMYK: 100% - 60% - 0% - 5%;, RGB: 0,97,242, RGB hex: #0061F2 [1]
	    canvas = "canvas",
	    d = document, cv, ctx, i;
	d.write("<br/>");
	cv = d.createElement(canvas);
	cv.id = canvas;
	cv.height = H;
	cv.width = W;
	d.body.appendChild(cv);
	ctx = cv.getContext("2d");
	r(ctx, 0, 0, W, H, blue);
	for (i = 0; i < 4; i += 1) {	
		r(ctx, 0, T * (1 + (i * 2)), W, T);
	}
	// arms of the cross being "one fifth of the flag's width". [1]
	r(ctx, 0, 0, T * 5, T * 5, blue);
	r(ctx, 0, T * 2, T * 5, T, white);
	r(ctx, T * 2, 0, T, T * 5, white);
}

renderGreekFlag();
