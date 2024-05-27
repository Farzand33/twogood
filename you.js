// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconanimation(){

}

videoconanimation()
function loadinganim(){
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stager:0.2
    
    })
    gsap.from("#page1 #video-container", {
        // y:100,
        scale:0.8,


        opacity:0,
        delay:1,
        duration:0.5,
        
    
    })
}
loadinganim()

document.addEventListener("mousemove", function (dets)
{
  
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
        
    }) 
})

document.querySelector("#child1").addEventListener("mousemove", function(){
    gsap.to("#cursor",{
        transform:'translate(-50%, -50%) scale(1)'})
})