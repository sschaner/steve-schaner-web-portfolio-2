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

/**********************************
SIDE MENU
**********************************/

document.getElementById('three-bars').addEventListener('click', openSideMenu);
document.getElementById('btn-close').addEventListener('click', closeSideMenu);



/**********************************
PROGESS BARS
**********************************/
/*
const progressbar = document.getElementsByClassName('progress-bar');

for (i = 0; i < progressbar.length; i += 1) {
  skills.addEventListener('mouseover', () => {
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
*/
