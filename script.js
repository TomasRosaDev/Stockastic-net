window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add("sticky");
    navbar.classList.add("nav-bg");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("nav-bg");
  }
}

var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      //window.open('page2.html', '_blank');
      window.alert(
        "Thanks for reaching out to us. We wil ge to you as soon as possible!"
      );
    });
});
function RotateClass() {
  var element = document.getElementById("menu-icon-id");
  element.classList.toggle("rotate");
  if (document.body.scrollTop == 0) {
    navbar.classList.toggle("nav-bg");
  }
}

const targetDivs = document.querySelectorAll(
  ".feature-item",
  ".price-card-container"
);

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("animate__fadeInUp", "opa");
    }
  });
});

targetDivs.forEach((target) => {
  observer.observe(target);
});
