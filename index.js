
document.getElementById("hello").addEventListener("mouseover", mouseOver1);
document.getElementById("hello").addEventListener("mouseout", mouseOut1);

document.getElementById("iam").addEventListener("mouseover", mouseOver2);
document.getElementById("iam").addEventListener("mouseout", mouseOut2);

document.getElementById("hello").addEventListener("mouseover", mouseOver);
document.getElementById("hello").addEventListener("mouseout", mouseOut);

function mouseOver1() {
    document.getElementById("hello").innerHTML = "About"
  }

  function mouseOut1() {
    document.getElementById("hello").innerHTML = "Hello"
  }

  function mouseOver2() {
    document.getElementById("iam").innerHTML = "About"
  }

  function mouseOut2() {
    document.getElementById("iam").innerHTML = "Hello"
  }





