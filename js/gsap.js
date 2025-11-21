document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const isiPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
  const isMobile = window.innerWidth < 600 || isiPhone;


 
  gsap.registerPlugin(ScrollTrigger);

  // Horizontal scroll animation for card row
  gsap.to(".trade-cards", {
    xPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: ".trade-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

  // Card fade-up + blur reveal
  gsap.to('.trade-card', {
  opacity: 1,
  filter: "blur(0)",
  y: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".trade-section",
    start: "top 80%", // adjust as desired
    end: "bottom top",
    toggleActions: "play none none reverse"
  }
});






});


