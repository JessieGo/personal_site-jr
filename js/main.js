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

// Show skill list
showSkill = () => {
  let skillList = document.querySelector(".about__skill-list");

  if (skillList.style.display === "none") {
    skillList.style.display = "flex";
  } else skillList.style.display = "none";
};

{
  let showSkillBtn = document.querySelector("#showSkillBtn");

  showSkillBtn.addEventListener("click", () => {
    showSkill();
  });
}

//Parallax Scrolling Effect
window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".home__side-image");
  let scrollPosition = window.scrollY;

  parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});
