
document.addEventListener('DOMContentLoaded',()=>{
    const sidenav=document.querySelector('.side-nav');
    const bnav=document.querySelector('#bnav');
    const overlayscreen=document.querySelector('.nav-overlay');

    bnav.addEventListener('click',()=>{
        sidenav.classList.add('open');
    });
  
    overlayscreen.addEventListener('click',()=>{
        sidenav.classList.remove('open');
    });
   
});