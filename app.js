
Shery.imageEffect("#back", {
  style: 5, //Select Style
  debug: false, // Debug Panel
  config: {
    a: { value: 3.22, range: [0, 30] },
    b: { value: -0.97, range: [-1, 1] },
    aspect: { value: 2.0802260576668434 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
  // preset: "./presets/wigglewobble.json",
});



let elems = document.querySelectorAll(".main_element");
elems.forEach(ele => {

  let h1 = ele.querySelectorAll('h1');
  let idx = 0;
  let animated=false;

   if (!animated) {
    animated=true;
    document.querySelector("#main").addEventListener("click", function (e) {
      gsap.to(h1[idx], {
        top: "-=100%",
        duration: 1,
        ease: Expo.easeInOut,
        onComplete: function () {
          
          gsap.set(this._targets[0], { top: "100%" });
          animated=false;
        }
      });
  
      (idx === h1.length - 1) ? (idx = 0) : idx++;
      gsap.to(h1[idx], {
        top: "-=100%",
        duration: 1,
        ease: Expo.easeInOut,
      });
  
    });

   }


});
