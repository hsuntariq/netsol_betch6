const colors = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];

let newHex;
const generateRandom = () => {
    let random = Math.random() * colors.length;
    let floor = Math.floor(random);
    return floor;
}

    const generateColor = () => {
        let hex = '#';
        for(let i=0; i<6; i++){
            hex+=colors[generateRandom()]
        }
        return hex
    }

    


window.addEventListener('mousemove',()=>{
    document.body.style.background = generateColor()
})