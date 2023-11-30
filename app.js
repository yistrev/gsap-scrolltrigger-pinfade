const texts = document.querySelector(".texts");
gsap.to(".images", {
  scrollTrigger: {
    trigger: ".scroller",
    pin: ".images",
    scrub: 0.5,
    start: "top top",
    end: () => "+=" + (texts.scrollHeight - window.innerHeight),
    markers: true,
    id: "scroller",
  }
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroller",
    start: "top top",
    end: "bottom",
    pin: false,
    scrub: true,
    markers: false,
    id: "img",
  }
});
const images_blk = gsap.utils.toArray(".image-block");
images_blk.forEach((img, i) => {
  if (images_blk[i + 1]) {
    tl.to(img, { opacity: 0 }, "+=0.2")
      .to(images_blk[i + 1], { opacity: 1 }, "<")
  }
});
tl.to({}, {}, "+=0.2");
