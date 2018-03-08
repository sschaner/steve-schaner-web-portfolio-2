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

const progressbar = document.getElementsByClassName('progress-bar');
const skillsbar = document.getElementById('skillsBars');


/**********************************
SIDE MENU
**********************************/

document.getElementById('mobile-menu-button-link').addEventListener('click', openSideMenu);
document.getElementById('btn-close').addEventListener('click', closeSideMenu);



/**********************************
PROGESS BARS
**********************************/

scroll = function() {
  var skillsPos = $('#skills').offset().top;
  var scrollPos = $(document).scrollTop();

  if(scrollPos + 300 > skillsPos) {
    showSkills = function(index, percentage) {
        progressbar[index].style.width = percentage + "%";
        progressbar[index].innerHTML = percentage + "%";
    }
    showSkills(0,90);
    showSkills(1,90);
    showSkills(2,80);
    showSkills(3,70);
    showSkills(4,90);
    showSkills(5,90);
    showSkills(6,90);
  }
  else {
    hideSkills = function(index, percentage) {
        progressbar[index].style.width = percentage + "%";
        progressbar[index].innerHTML = "";
    }
    hideSkills(0,0);
    hideSkills(1,0);
    hideSkills(2,0);
    hideSkills(3,0);
    hideSkills(4,0);
    hideSkills(5,0);
    hideSkills(6,0)
  }
}

window.addEventListener("scroll", scroll)
