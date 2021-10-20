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

//call the carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
