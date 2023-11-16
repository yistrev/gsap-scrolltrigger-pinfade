
let innerTL = gsap.timeline();


gsap.to(".second-image", {
  scrollTrigger:{
    trigger: ".second-text",
    // toggleActions: "play reverse play reverse",
    start: "top top", //top（triggerの始まり） top（スクロールの始まり）
    end: "top+=100 top", //top（triggerの終わり） top（スクロールの終わり）
    scrub: 1,
    markers: false
  },
  opacity: 1,
})


gsap.timeline({
  defaults: {
    duration: 1,
    ease: "elastic"
  },
  // repeat: -1,
  // repeatDelay: 1,
  scrollTrigger: {
    trigger: ".third-text",
    start: "top top",
    end: "center+=100 center+=100",
    // toggleActions: "play none none reset",
    markers: true,
    id: "third",
    scrub: 1,
  }
})
  .to(".third-image", { opacity: 1 })
  .to("fourth-image", { opacity: 1 })

