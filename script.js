function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");
  page1Content.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Content.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorEffect();

function page2animation() {
  gsap.from(".page-header span, .elem h1", {
    y: 120,
    stagger: 0.2,
    duration: 1,
    scrollTriger: {
      trigger: "#page2",
      scroller: "body",
      start: " top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });
}
page2animation();
