/**********************************
VARIABLES
**********************************/

const openSideMenu = (event) => {
  document.getElementById('side-menu').style.width = '250px'
  event.preventDefault()
};
const closeSideMenu = (event) => {
  document.getElementById('side-menu').style.width = '0'
  event.preventDefault()
};

const superman = () => {
  document.getElementById('steve-heading').innerHTML = "Super Hero";
  document.getElementById('profile-pic-lg-2').setAttribute("src", "img/superman.jpg");
};
const steve = () => {
  document.getElementById('steve-heading').innerHTML = "Web Developer";
  document.getElementById('profile-pic-lg-2').setAttribute("src", "img/profile-picture-square.jpg")
};

const progressbar = document.getElementsByClassName('progress-bar');

const skillsbar = document.getElementById('skillsBars');


/**********************************
SIDE MENU
**********************************/

document.getElementById('mobile-menu-button-link').addEventListener('click', openSideMenu);
document.getElementById('btn-close').addEventListener('click', closeSideMenu);



/**********************************
SECTON - ABOUT
**********************************/

document.getElementById('profile-pic-lg-2').addEventListener('mouseover', superman);
document.getElementById('profile-pic-lg-2').addEventListener('mouseout', steve);



/**********************************
PROGESS BARS
**********************************/

showSkills = function(index, percentage) {
  skillsbar.addEventListener('mouseover', () => {
    progressbar[index].style.width = percentage + "%";
    progressbar[index].innerHTML = percentage + "%";
  });
}

hideSkills = function(index, percentage) {
  skillsbar.addEventListener('mouseout', () => {
    progressbar[index].style.width = percentage + "%";
    progressbar[index].innerHTML = "";
  });
}

showSkills(0,80);
showSkills(1,75);
showSkills(2,60);
showSkills(3,90);
showSkills(4,90);
showSkills(5,90);

hideSkills(0, 0);
hideSkills(1, 0);
hideSkills(2, 0);
hideSkills(3, 0);
hideSkills(4, 0);
hideSkills(5, 0);
