// Getting Header height and set to CSS root
// ------------------------------------------

let siteHeader = document.querySelector(".site-header");

function setHeaderHeight() {
  let headerHeight = siteHeader.offsetHeight;
  document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
}

if (siteHeader) {
  // Set the Hero height as a CSS variable
  window.addEventListener("resize", setHeaderHeight);
  window.addEventListener("load", setHeaderHeight);
}

// Getting Hero height and set to CSS root
// ------------------------------------------

let heroHeight = document.querySelector(".hero");

console.log(heroHeight);

function setHeroHeight() {
  let heroHeightPX = heroHeight.offsetHeight;
  document.documentElement.style.setProperty("--hero-height", `${heroHeightPX}px`);
}

if (heroHeight) {
  // Set the Hero height as a CSS variable
  window.addEventListener("resize", setHeroHeight);
  window.addEventListener("load", setHeroHeight);
}

// Smooth Scrolling using Lenis & GSAP
// ------------------------------------------

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

const growTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    scrub: 0.75,
    start: "top center",
    end: "100% center",
  },
});

// From
growTl.from(".hero__bg--img", {
  duration: 2,
  scale: 1,
  transformOrigin: "50% 50%",
});

// TO
growTl.to(".hero__bg--img", {
  duration: 2,
  scale: 1.2,
  transformOrigin: "50% 50%",
});
