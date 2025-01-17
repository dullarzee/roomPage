const backButton = document.querySelector('#backButton');
const nextButton = document.querySelector('#nextButton');
const mainImage = document.querySelector('#section1').querySelector('.furniture');
const mainImage2 = document.querySelector('#section1').querySelector('source');
const h1 = document.querySelector('#section2').querySelector('#h1');
const p1 = document.querySelector('#section2').querySelector('#p1');
const section2 = document.querySelector('#section2');
const navSpans = document.querySelector('nav').querySelectorAll('.navSpan');
const hamburger = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobileNav');
const closeMenu = document.querySelector('#closeMenu');



let i = 0;
let j = 0;
const arrayDesktop = ['desktop-image-hero-1.jpg', 'desktop-image-hero-2.jpg', 'desktop-image-hero-3.jpg'];
const arrayMobile = ['mobile-image-hero-1.jpg', 'mobile-image-hero-2.jpg', 'mobile-image-hero-3.jpg'];
mobileNav.style.display = 'none';

function displayNav()
{
    mobileNav.style.display = '';
}
function clickEffect(e)
{
    e.target.style.backgroundColor = 'hsl(0, 0%, 63%)';
    setTimeout(()=>{e.target.style.backgroundColor = '';}, 130);
}
function replayAnimation() {

    const clone = section2.cloneNode(true);
    if(j === 0)
    {
        // Clone the element to force a reflow (resetting the animation)
        
        section2.parentNode.replaceChild(clone, section2);
    
        clone.querySelector('#h1').textContent = 'Discover innovative ways to decorate';
        clone.querySelector('#p1').textContent = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
        // Force a reflow by getting the element's offsetHeight
        void clone.offsetHeight;
    
        ++j;
    }
    else if(j === 1)
    {
        const section2B = document.querySelector('#section2');

        section2B.parentNode.replaceChild(section2, section2B);
        j = 0;

    }
}
  
function slidePicsForward(e)
{
    if(window.innerWidth <= 450)
    {
        mainImage2.srcset = `images/${arrayMobile[i]}`;
        i++;
        if(i === 3) i = 0; 
    }
    else
    {
        mainImage.src = `images/${arrayDesktop[i]}`; 

        i++;
        if(i === 3) i = 0;
    }
    clickEffect(e);
    replayAnimation();

}
function slidePicsBackward(e)
{
    if(window.innerWidth <= 450)
        {
            mainImage2.srcset = `images/${arrayMobile[i]}`;
            i--;
            if(i === -1) i = 2; 
        }
        else
        {
            mainImage.src = `images/${arrayDesktop[i]}`; 
    
            i--;
            if(i === -1) i = 2;
        }
    clickEffect(e);
    replayAnimation();
}
nextButton.addEventListener('click', slidePicsForward);
backButton.addEventListener('click', slidePicsBackward);
hamburger.addEventListener('click', displayNav);
closeMenu.addEventListener('click', ()=>{
    mobileNav.style.display = 'none';
})
for(const span of navSpans)
{
    span.addEventListener('click', (e)=>{
        for(const it of navSpans)
        {
            it.style.border = '0px';
        }
        e.target.style.borderBottom = '2px solid white';
    })
}