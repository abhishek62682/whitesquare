
     
     
     const lenis = new Lenis({
  autoRaf: true,
});
     window.addEventListener("DOMContentLoaded", () => {

      ScrollTrigger.refresh();
        let split = SplitText.create(".loader-text", {
          type: "chars",
          mask: "chars",
        });

        const tl = gsap.timeline();

        tl.from(split.chars, {
          yPercent: 110,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
        })

          .to(".loader-top", {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut",
          },"a")

          .to(
            ".loader-bottom",
            {
              yPercent: 100,
              duration: 0.9,
              ease: "power4.inOut",
            },
            "a",
          )
          .to(".loader-wrapper",{
            duration: 0.9,

            backgroundColor:"transparent"
          },"a+=0.2")

          .set(".loader-wrapper", {
            display: "none",
          });
      });





      function HeroAnimation(){
          const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    end: "80% top",
    scrub: 2,
    pin:true,
    // markers:true
  },
});

tl.to("nav", {
  y: "-100%",
  ease: "linear",
});

tl.to(".fake-image:last-child", {
  rotate: 0,
  scale: 1,
  ease: "linear",
});


      }



      function ServiceAnimation(){
         const cards = gsap.utils.toArray(".service-card").reverse();
  const images = gsap.utils.toArray(".service-image").reverse();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-pin-wrap",
      start: "top top",
      end: "100% 100%",
      scrub: 1,
     
      anticipatePin: 1,
    },
  });

  cards.forEach((card, index) => {
    if (index === cards.length - 1) return;

    tl.to(
      images[index],
      {
        opacity: 0,
        scale: 1.08,
        duration: 1,
        ease: "power2.out",
      },
      index
    );

    tl.to(
      card,
      {
        opacity: 0,
        y: -80,
        filter: "blur(10px)",
        duration: 1,
        ease: "power2.out",
      },
      index
    );
  });
      }



        


      


      // HeroAnimation();

      ServiceAnimation();



      const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-big-text",
    start: "top 80%",
    end:"50% 50%",
    
    scrub:2
  },
});

footerTl
  .from(".footer-big-text span:first-child", {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  },"n")
  .from(
    ".footer-big-text span:last-child",
    {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "n" 
  );