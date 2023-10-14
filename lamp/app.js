let range = document.querySelector('input');
let light = document.querySelector('.light')
let opacity = document.querySelector('h3');
opacity.innerHTML = range.value

range.addEventListener('input',()=>{
    opacity.innerHTML = range.value
    // light.style.boxShadow = `2px 1px 20px ${range.value}px yellow`
    light.style.background = `rgba(255,255,255,${(range.value)/100})`


})