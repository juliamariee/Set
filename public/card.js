function Card(color, number, type, shade) {
  this.type = type;
  this.color = color;
  this.number = number;
  this.shade = shade;

  if (this.number == 0) {
    this.spacing = 2.5;
  } else if (this.number == 1) {
    this.spacing = 5;
  } else if (this.number == 2) {
    this.spacing = 10;
  }

  if (this.shade == 0) {
    this.alpha = 60;
  } else if (this.shade == 1) {
    this.alpha = 140;
  } else if (this.shade == 2) {
    this.alpha = 255;
  }

  this.draw = function(x, y) {
    this.x = x;
    this.y = y;
    fill(255);
    rect(this.x, this.y, cardwidth, cardlength, 15)
    drawshape(this.x, this.y, this.type, this.number, this.spacing, this.color, this.alpha);
  }
  noFill();
}

function drawshape(x, y, type, num, spacing, color, shade) {
  let number = num + 1;
  let col_ = col(color);
  fill(col_[0], col_[1], col_[2], shade);

  if (type == 0) { //ellipse
    for (i = 1; i < number + 1; i++) {
      rect(((cardwidth / spacing) * i) + (14 * i) + x - 13, (cardlength / 3) + y, 15, 30, 50);
    }

  } else if (type == 1) { // diamond
    //let coord = (cardwidth / spacing) * i ;
    for (i = 1; i < number + 1; i++) {
      let coordx = (cardwidth / spacing) * i;
      let coordy = cardlength / 10;

      quad(coordx + x + 5 + (12 * i) - 8, coordy + 36 + y - 10,
        coordx - 8 + x + 5 + (12 * i) - 8, coordy + 52 + y - 10,
        coordx + x + 5 + (12 * i) - 8, coordy + 68 + y - 10,
        coordx + 8 + x + 5 + (12 * i) - 8, coordy + 52 + y - 10);
    }


  } else if (type == 2) { //sqiggle?
    for (i = 1; i < number + 1; i++) {
      ellipse(((cardwidth / spacing) * i) + (14 * i) + x - 7, (cardlength / 2.15) + y, 15);
    }
  }
}

function col(num) {
  let col;
  if (num == 0) { // red
    col = [255, 0, 0];
  } else if (num == 1) { //green
    col = [0, 168, 11];
  } else if (num == 2) { //purple
    col = [87, 0, 158];
  }
  return col;
}
