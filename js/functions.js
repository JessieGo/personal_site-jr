// toggle menu function
function toggleShow() {
  let navPageArray = document.getElementsByClassName("navBar__pages");

  if (navPageArray[0].style.display === "block") {
    for (i = 0; i < navPageArray.length; i++) {
      navPageArray[i].style.display = "none";
    }
  } else {
    for (i = 0; i < navPageArray.length; i++) {
      navPageArray[i].style.display = "block";
    }
  }
}
