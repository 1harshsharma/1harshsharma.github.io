


/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */




// Get the project-one element
var projectOne = document.querySelector(".project-one");

// Function to open the modal
function openModal1() {
  var modal = document.getElementById("myModal1");
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close the modal
function closeModal1() {
  var modal = document.getElementById("myModal1");
  if (modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the project-one grid, open the modal
projectOne.onclick = function() {
  openModal1();
};

// Get the <span> element that closes the modal
var span1 = document.querySelector("#myModal1 .close");

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  closeModal1();
};



/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */



// Get the project-two element
var projectTwo = document.querySelector(".project-two");

// Function to open the modal
function openModal2() {
  var modal = document.getElementById("myModal2");
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close the modal
function closeModal2() {
  var modal = document.getElementById("myModal2");
  if (modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the project-two grid, open the modal
projectTwo.onclick = function() {
  openModal2();
};

// Get the <span> element that closes the modal
var span2 = document.querySelector("#myModal2 .close");

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  closeModal2();
};



/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */



// Get the project-two element
var projectThree = document.querySelector(".project-three");

// Function to open the modal
function openModal3() {
  var modal = document.getElementById("myModal3");
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close the modal
function closeModal3() {
  var modal = document.getElementById("myModal3");
  if (modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the project-two grid, open the modal
projectThree.onclick = function() {
  openModal3();
};

// Get the <span> element that closes the modal
var span3 = document.querySelector("#myModal3 .close");

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  closeModal3();
};



/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */



// Get the project-two element
var projectFour = document.querySelector(".project-four");

// Function to open the modal
function openModal4() {
  var modal = document.getElementById("myModal4");
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close the modal
function closeModal4() {
  var modal = document.getElementById("myModal4");
  if (modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on the project-two grid, open the modal
projectFour.onclick = function() {
  openModal4();
};

// Get the <span> element that closes the modal
var span4 = document.querySelector("#myModal4 .close");

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  closeModal4();
};



/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */



// When the user clicks anywhere outside of the modal, close the active modal
window.onclick = function(event) {
  var modal1 = document.getElementById("myModal1");
  var modal2 = document.getElementById("myModal2");
  var modal3 = document.getElementById("myModal3");
  var modal4 = document.getElementById("myModal4");

  if (event.target == modal1) {
    closeModal1();
  }

  if (event.target == modal2) {
    closeModal2();
  }

  if (event.target == modal3) {
    closeModal3();
  }

  if (event.target == modal4) {
    closeModal4();
  }
};
