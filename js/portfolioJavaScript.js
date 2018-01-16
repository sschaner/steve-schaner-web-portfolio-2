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



/**********************************
SIDE MENU
**********************************/

document.getElementById('three-bars').addEventListener('click', openSideMenu);
document.getElementById('btn-close').addEventListener('click', closeSideMenu);



/**********************************
SECTON - ABOUT
**********************************/

document.getElementById('profile-pic-lg-2').addEventListener('mouseover', superman);
document.getElementById('profile-pic-lg-2').addEventListener('mouseout', steve);




/**********************************
PROGESS BARS
**********************************/

for (i = 0; i < progressbar.length; i += 1) {
  skillsBars.addEventListener('mouseover', () => {
    progressbar[0].style.width = "80%";
    progressbar[0].innerHTML = "80%";
    progressbar[1].style.width = "75%";
    progressbar[1].innerHTML = "75%";
    progressbar[2].style.width = "60%";
    progressbar[2].innerHTML = "60%";
    progressbar[3].style.width = "90%";
    progressbar[3].innerHTML = "90%";
    progressbar[4].style.width = "90%";
    progressbar[4].innerHTML = "90%";
    progressbar[5].style.width = "90%";
    progressbar[5].innerHTML = "90%";
  })
}

for (i = 0; i < progressbar.length; i += 1) {
  skillsBars.addEventListener('mouseout', () => {
    progressbar[0].style.width = "0%";
    progressbar[0].innerHTML = "";
    progressbar[1].style.width = "0%";
    progressbar[1].innerHTML = "";
    progressbar[2].style.width = "0%";
    progressbar[2].innerHTML = "";
    progressbar[3].style.width = "0%";
    progressbar[3].innerHTML = "";
    progressbar[4].style.width = "0%";
    progressbar[4].innerHTML = "";
    progressbar[5].style.width = "0%";
    progressbar[5].innerHTML = "";
  })
}
