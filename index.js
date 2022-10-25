const hello= document.getElementById("hello")
const iam= document.getElementById("iam")
const luka= document.getElementById("luka")




hello.addEventListener("mouseover", mouseOver1);
hello.addEventListener("mouseout", mouseOut1);

iam.addEventListener("mouseover", mouseOver2);
iam.addEventListener("mouseout", mouseOut2);

luka.addEventListener("mouseover", mouseOver3);
luka.addEventListener("mouseout", mouseOut3);

function mouseOver1() {
    hello.innerHTML = "Skills"
  }
  function mouseOut1() {
    hello.innerHTML = "Hello."
  }
  function mouseOver2() {
    iam.innerHTML = "About"
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
  

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const effect1 = entry.target.querySelector(".skills");
  
      if (entry.isIntersecting) {
        effect1.classList.add("animation");
      return;
      } 
  
     
      effect1.classList.remove("animation");
    });
  });
  
  observer1.observe(document.querySelector('.skills-div'));


  
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const effect2 = entry.target.querySelector(".aboutMe-h1");
  
      if (entry.isIntersecting) {
        effect2.classList.add("animation");
      return; 
      } 
  
     
      effect2.classList.remove("animation");
    });
  });
  
  observer2.observe(document.querySelector('.container-aboutMe'));

 



  
  

  








  







