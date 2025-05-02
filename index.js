let pointsEl = document.getElementById("points-el");
let points = 0;

function displayPoints() {
  pointsEl.textContent = points;
}

function plusOnePoint() {
  points += 1;
  displayPoints();
}

function plusTwoPoints() {
  points += 2;
  displayPoints();
}

function plusThreePoints() {
  points += 3;
  displayPoints();
}
