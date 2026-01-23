console.log("animations.js loaded");

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal-section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 90%",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});
