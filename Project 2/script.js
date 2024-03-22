function HomePageAnimation() {
    gsap.set(".rowslides", {
        scale: 6
    })
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 3,
        }
    })

    tl
        .to(".video", {
            '--clip': "0%",
            ease: Power2,
        }, 'a')
        .to(".rowslides", {
            scale: 1,
            ease: Power2,
        }, 'a')
        .to(".lft", {
            xPercent: -10,
            stagger: 0.03,
            ease: Power4
        }, 'b')
        .to(".rgt", {
            xPercent: 10,
            stagger: 0.03,
            ease: Power4
        }, 'b')
}

function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2
        },
        xPercent: -200,
        ease: Power4
    })
}

function teamAnimation(){
    document.querySelectorAll(".listelem").forEach(function(ele){
        ele.addEventListener("mousemove",function(e){
            let x=gsap.utils.mapRange(0,window.innerWidth,-200,200,e.clientX)
            gsap.to(this.querySelector(".picture"),{
                opacity:1,
                x,
                ease:Power4,
                duration:.5
            })
        })
    
        ele.addEventListener("mouseleave",function(e){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,
                ease:Power4,
                duration:.5
            })
        })
    }
    )
}

function paraAnimation(){
    var clutter="";
    document.querySelector(".paratext")
    .textContent.split("")
    .forEach(function(letter){
       // if(letter==" ")    clutter += `<span>&nbsp;</span>`
        clutter += `<span>${letter}</span>`
    })
    document.querySelector(".paratext").innerHTML = clutter;
    
    gsap.set(".paratext span",{opacity: .1})
    gsap.to(".paratext span",{
        scrollTrigger:{
            trigger: ".para",
            start:"top 80%",
            end:"bottom 90%",
            scrub:2
        },
        opacity:1,
        stagger:0.01,
        ease:Power4
    })
    
}

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2",{
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease: Power4
    })
}

function changeColor(){
    document.querySelectorAll(".section").forEach(function(section){
        ScrollTrigger.create({
            trigger:section,
            start:"top 50%",
            end:"bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme",section.dataset.color)
            },
            onEnterBack: function(){
                document.body.setAttribute("theme",section.dataset.color)
            }
        })
    })
}

HomePageAnimation()
realPageAnimation()
teamAnimation()
paraAnimation()
capsulesAnimation()
changeColor()