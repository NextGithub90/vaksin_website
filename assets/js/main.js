document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener("click", function (e) {
    var id = a.getAttribute("href");
    if (id.length > 1) {
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal-on-scroll").forEach(function (el) {
  observer.observe(el);
});
var header = document.querySelector("header");
var last = 0;
window.addEventListener("scroll", function () {
  var y = window.scrollY;
  if (y > last && y > 120) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  last = y;
});
function formatIdr(n){return "Rp "+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
function adjustVaccinePrices(){document.querySelectorAll(".vax-price").forEach(function(el){var p=parseInt(el.getAttribute("data-price")||"0",10);if(p<50000){p=p+50000}el.textContent=formatIdr(p)})}
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",adjustVaccinePrices)}else{adjustVaccinePrices()}
