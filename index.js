const hello= document.getElementById("hello")
const iam= document.getElementById("iam")
const luka= document.getElementById("luka")
const aboutMe = document.getElementById("aboutMe")
const skills = document.getElementById("skills")
const contacts = document.getElementById("contacts")
const textEffect1 = document.getElementById("textEffect1")
const textEffect2 = document.getElementById("textEffect2")
const textEffect3 = document.getElementById("textEffect3")


hello.addEventListener("mouseover", mouseOver1);
hello.addEventListener("mouseout", mouseOut1);

iam.addEventListener("mouseover", mouseOver2);
iam.addEventListener("mouseout", mouseOut2);

luka.addEventListener("mouseover", mouseOver3);
luka.addEventListener("mouseout", mouseOut3);

function mouseOver1() {
    hello.innerHTML = "About"
  }
  function mouseOut1() {
    hello.innerHTML = "Hello."
  }
  function mouseOver2() {
    iam.innerHTML = "Skills"
  }
  function mouseOut2() {
    iam.innerHTML = "I am"
  }
  function mouseOver3() {
    luka.innerHTML = "Contact"
  }
  function mouseOut3() {
    luka.innerHTML = "Luka"
  }
  
  hello.addEventListener("click", ()=> {
    aboutMe.style.zIndex = "1";
    textEffect1.classList.toggle("textPopUp");
    aboutMe.style.overflow = "scroll";
  })
  
  iam.addEventListener("click", ()=> {
    skills.style.zIndex = "1";
    textEffect2.classList.toggle("textPopUp");
    skills.style.overflow = "scroll";
  })
  
  luka.addEventListener("click", ()=> {
    contacts.style.zIndex = "1";
    textEffect3.classList.toggle("textPopUp");
    contacts.style.overflow = "scroll";
  })



 



  
  

  








  







