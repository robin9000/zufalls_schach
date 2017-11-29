$(document).ready(function(e) {
  var feldname = [
    ["a1","a2","a3","a4","a5","a6","a7","a8"],
  ["b1","b2","b3","b4","b5","b6","b7","b8"],
  ["c1","c2","c3","c4","c5","c6","c7","c8"],
  ["d1","d2","d3","d4","d5","d6","d7","d8"],
  ["e1","e2","e3","e4","e5","e6","e7","e8"],
  ["f1","f2","f3","f4","f5","f6","f7","f8"],
  ["g1","g2","g3","g4","g5","g6","g7","g8"],
  ["h1","h2","h3","h4","h5","h6","h7","h8"]
];

var startaufstellung = [
  ["t","p","l","d","k","l","p","t"],
  ["b","b","b","b","b","b","b","b"],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  ["B","B","B","B","B","B","B","B"],
  ["T","P","L","D","K","L","P","T"]
];

var figurenSchwarz = 16;
var figurenWeiss = 16;

function anzeigen(aufstellung) {
  $("body").html(function(e) {
    var ergebnis = "";
    for(var i = 0; i<8;i++){
      for(var j = 0; j<8;j++){
        ergebnis += aufstellung[i][j] +" ";
      }
      ergebnis+="<br>";
    }
    return ergebnis;
  })
}

function uebrigeFiguren(farbe) {
  
  if(farbe == "weiss") {

  }else {

  }
}
anzeigen(startaufstellung);

function zugWeiss() {
  var figuren =
  Math.round(Math.random()*figurenWeiss)
}


});
