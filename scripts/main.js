const myImage = document.querySelector("img");
myImage.setAttribute("src", "https://mdn.github.io/beginner-html-site-styled/images/firefox-icon.png");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://mdn.github.io/beginner-html-site-styled/images/firefox-icon.png") {
    myImage.setAttribute("src", "https://avatars.dzeninfra.ru/get-zen_doc/40274/pub_5d3ca3941e8e3f00b21ea245_5d3caede97b5d400af6850a1/scale_1200");
  } else {
    myImage.setAttribute("src", "https://mdn.github.io/beginner-html-site-styled/images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};