let LOCATIONX;  // This moves the toy left or right
let LOCATIONY;  // This moves the toy up or down
let ORIENTATION; // This indicates the direction the toy is facing

function PLACE(X, Y, O) {
  LOCATIONX = X;
  LOCATIONY = Y;
  ORIENTATION = 0;
}

//This function will move the the robot forward in whatever the direction (ORIENTAION) it is faceing.
function MOVE() {
  if (ORIENTATION === "NORTH") {
    LOCATIONY++;
  }

  else if (ORIENTAION === "EAST") {
    LOCATIONX++;
  }

  else if (ORIENTAION === "SOUTH") {
    LOCATIONY--;
  }

  else if (ORIENTAION === "WEST") {
    LOCATIONX--;
  }
}

//This function will rotate the robot 90 degrees to the left of what ever directino is it facing
function LEFT() {
  if (ORIENTATION === "NORTH") {
    ORIENTATION = "WEST";
  }

  else if (ORIENTAION === "WEST") {
    ORIENTATION === "SOUTH";
  }

  else if (ORIENTAION === "SOUTH") {
    ORIENTAION === "EAST";
  }

  else if (ORIENTAION === "EAST") [
    ORIENTAION === "NORTH";
  ]
}
