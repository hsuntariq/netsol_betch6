let list=document.querySelector('.bi-list')
let sidebar=document.querySelector('.sidebar')
let overlay=document.querySelector('.overlay')
list.addEventListener('click',()=>{
    sidebar.style.transform='translate(0)';
    overlay.style.transform='translate(0)'
})
overlay.addEventListener('click',()=>{
    overlay.style.transform='translate(-100%)'
    sidebar.style.transform='translate(-100%)'
})
