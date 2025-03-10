function randomColor(){
    const hex='0123456789ABCDEF'
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

body=document.querySelector('body')
document.querySelector('#start').addEventListener("click",function(){
const changeColor=setInterval(function(){
    const c=randomColor()
body.style.backgroundColor=c
},1000)
document.querySelector('#stop').addEventListener("click",function(){
clearInterval(changeColor)

})

})