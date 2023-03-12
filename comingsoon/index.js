const pupil = document.getElementById("pupil");
const eye = document.querySelector(".wrapall");

eye.addEventListener("mousemove", function (event) {
  const eyeRect = eye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const deltaX = mouseX - eyeCenterX;
  const deltaY = mouseY - eyeCenterY;

  const angle = Math.atan2(deltaY, deltaX);
  const radius = Math.min(eyeRect.width, eyeRect.height) / 8;

  const pupilX = radius * Math.cos(angle);
  const pupilY = radius * Math.sin(angle);

  pupil.setAttribute("transform", `translate(${pupilX}, ${pupilY})`);
});




const cover = document.getElementById('cover');
const myElement = document.getElementById("overlay");


function blink(){
  console.log("im working" + myElement)
  
  myElement.classList.add('overlay')
  function removeClass(){
    myElement.classList.remove('overlay')
  }
  setTimeout(removeClass, 200)
  

}

function removeCover(){
  cover.style.transform = "translate(0,0)"
}



document.addEventListener('click', blink)
document.addEventListener('click', removeCover)

