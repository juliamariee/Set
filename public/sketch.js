//Lets you play SET
let deck = [];
let cardwidth = 75;
let cardlength = 100;
let cardspacex = 20;
let cardspacey = 12;
let a, b, c, d, e, f, g, h, m, Q, W, E, A, S, D, Z, X, C;
let cardsout;
let cardsselected = [];
let ind = [];
let sets = [];

function setup() {
  frameRate(5);

  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          deck.push(new Card(i, j, k, l));
        }
      }
    }
  }

  a = floor(random(80));
  b = floor(random(80));
  c = floor(random(80));
  d = floor(random(80));
  e = floor(random(80));
  f = floor(random(80));
  g = floor(random(80));
  h = floor(random(80));
  m = floor(random(80));
  u = floor(random(80));
  o = floor(random(80));
  p = floor(random(80));
  ind = [a, b, c, d, e, f, g, h, m, u, o, p];
  cardsplayed();
}

function draw() {
  textAlign(CENTER, CENTER);
  background(50);
  noStroke();

  deck[a].draw(width / cardspacex, height / cardspacey);
  deck[b].draw((width / cardspacex) * 3.5, height / cardspacey);
  deck[c].draw((width / cardspacex) * 6, height / cardspacey);
  deck[d].draw(width / cardspacex * 8.5, (height / cardspacey));

  deck[e].draw(width / cardspacex, height / cardspacey * 5);
  deck[f].draw((width / cardspacex) * 3.5, height / cardspacey * 5);
  deck[g].draw((width / cardspacex) * 6, height / cardspacey * 5);
  deck[h].draw(width / cardspacex * 8.5, (height / cardspacey) * 5);

  deck[m].draw(width / cardspacex, height / cardspacey * 9);
  deck[u].draw((width / cardspacex) * 3.5, height / cardspacey * 9);
  deck[o].draw((width / cardspacex) * 6, height / cardspacey * 9);
  deck[p].draw(width / cardspacex * 8.5, (height / cardspacey) * 9);


  fill(100);
  rect((width / cardspacex) * 11.5, 0, width, height);
  cardsout = [Q, W, E, R, A, S, D, F, Z, X, C, V];

  if (cardsout[0].state == true) {
    deck[cardsout[0].index].draw((width / cardspacex) * 12.25, height / cardspacey);
  }

  if (cardsout[1].state == true) {
    deck[cardsout[1].index].draw((width / cardspacex) * 14.25, height / cardspacey);
  }

  if (cardsout[2].state == true) {
    deck[cardsout[2].index].draw((width / cardspacex) * 16.25, height / cardspacey);
  }

  if (cardsout[3].state == true) {
    deck[cardsout[3].index].draw((width / cardspacex) * 18.25, (height / cardspacey));
  }

  if (cardsout[4].state == true) {
    deck[cardsout[4].index].draw((width / cardspacex) * 12.25, (height / cardspacey) * 5);
  }

  if (cardsout[5].state == true) {
    deck[cardsout[5].index].draw((width / cardspacex) * 14.25, (height / cardspacey) * 5);
  }

  if (cardsout[6].state == true) {
    deck[cardsout[6].index].draw((width / cardspacex) * 16.25, (height / cardspacey) * 5);
  }

  if (cardsout[7].state == true) {
    deck[cardsout[7].index].draw((width / cardspacex) * 18.25, (height / cardspacey) * 5);
  }

  if (cardsout[8].state == true) {
    deck[cardsout[8].index].draw((width / cardspacex) * 12.25, (height / cardspacey) * 9);
  }

  if (cardsout[9].state == true) {
    deck[cardsout[9].index].draw((width / cardspacex) * 14.25, (height / cardspacey) * 9);
  }

  if (cardsout[10].state == true) {
    deck[cardsout[10].index].draw((width / cardspacex) * 16.25, (height / cardspacey) * 9);
  }

  if (cardsout[11].state == true) {
    deck[cardsout[11].index].draw((width / cardspacex) * 18.25, (height / cardspacey) * 9);
  }




  if (cardsselected.length >= 3) {
    // let newset = true;
    if (isSet(cardsselected[0].index, cardsselected[1].index, cardsselected[2].index)) {
      console.log("SET!");
      //console.log(cardsselected[0].index, cardsselected[1].index, cardsselected[2].index);
      let one = ind.indexOf(cardsselected[0].index);
      let two = ind.indexOf(cardsselected[1].index);
      let three = ind.indexOf(cardsselected[2].index);
      console.log(one, two, three);
      cardsselected = [];
      for (let i = 0; i < cardsout.length; i++) {
        cardsout[i].state = false;
      }
      // for (let j = 0; j < sets.length; j++) {
      //   if (sets[j] == one, two, three || sets[j] == one, three, two ||
      //     sets[j] == two, three, one || sets[j] == two, one, three ||
      //     sets[j] == three, two, one || sets[j] == three, one, two) {
      //     newset = false;
      //     console.log("already found");
      //   }
      // }
      // if (newset) {
      sets.push([one, two, three]);
      // }
    } else {
      console.log("Not A Set!");
      for (i = 0; i < cardsout.length; i++) {
        cardsout[i].state = false;
      }
      cardsselected = [];
    }
  }

  textSize(20);
  fill(250);
  rect((width / cardspacex) * 11.5, 0, windowWidth, 40);
  fill(0);
  text(`Sets : ${sets.length}`, (width / cardspacex) * 15.5, 20)
}

function isSet(a, b, c) {
  let shades = deck[a].shade + deck[b].shade + deck[c].shade;
  let colors = deck[a].color + deck[b].color + deck[c].color;
  let numbers = deck[a].number + deck[b].number + deck[c].number;
  let types = deck[a].type + deck[b].type + deck[c].type;

  if (a != b && b != c && a != c) {
    if (shades == 1) {
      return false;
    } else if (shades == 2) {
      return false;
    } else if (shades == 4) {
      return false;
    } else if (shades == 5) {
      return false;
    } else if (colors == 1) {
      return false;
    } else if (colors == 2) {
      return false;
    } else if (colors == 4) {
      return false;
    } else if (colors == 5) {
      return false;
    } else if (numbers == 1) {
      return false;
    } else if (numbers == 2) {
      return false;
    } else if (numbers == 4) {
      return false;
    } else if (numbers == 5) {
      return false;
    } else if (types == 1) {
      return false;
    } else if (types == 2) {
      return false;
    } else if (types == 4) {
      return false;
    } else if (types == 5) {
      return false;
    } else {
      return true;
    }
  }
}

function cardsplayed() {
  Q = {
    state: false,
    index: a
  };
  W = {
    state: false,
    index: b
  };
  E = {
    state: false,
    index: c
  };
  R = {
    state: false,
    index: d
  };
  A = {
    state: false,
    index: e
  };
  S = {
    state: false,
    index: f
  };
  D = {
    state: false,
    index: g
  };
  F = {
    state: false,
    index: h
  };
  Z = {
    state: false,
    index: m
  };
  X = {
    state: false,
    index: u
  };
  C = {
    state: false,
    index: o
  };
  V = {
    state: false,
    index: p
  };
}

function keyPressed() {
  if (keyCode == 81) {
    Q.state = true;
    cardsselected.push(Q);
  }
  if (keyCode == 87) {
    W.state = true;
    cardsselected.push(W);
  }
  if (keyCode == 69) {
    E.state = true;
    cardsselected.push(E);
  }
  if (keyCode == 65) {
    A.state = true;
    cardsselected.push(A);
  }
  if (keyCode == 83) {
    S.state = true;
    cardsselected.push(S);
  }
  if (keyCode == 68) {
    D.state = true;
    cardsselected.push(D);
  }
  if (keyCode == 90) {
    Z.state = true;
    cardsselected.push(Z);
  }
  if (keyCode == 88) {
    X.state = true;
    cardsselected.push(X);
  }
  if (keyCode == 67) {
    C.state = true;
    cardsselected.push(C);
  }
  if (keyCode == 82) {
    R.state = true;
    cardsselected.push(R);
  }
  if (keyCode == 70) {
    F.state = true;
    cardsselected.push(F);
  }
  if (keyCode == 86) {
    V.state = true;
    cardsselected.push(V);
  }
}