const gridSizeBtn=document.querySelector(".gridSizeButton")
const rainbowMode=document.querySelector(".rainbowMode")
const gameScreenContainer=document.querySelector(".gameScreenContainer")
const shadeMode=document.querySelector('.shadeMode')


let mode=''
gridSizeBtn.addEventListener('click', function createGrid(){
    for(i=0;i<10;i++){
        const pixelRowCreation=document.createElement('div')
        pixelRowCreation.classList.add('pixelRows')
        gameScreenContainer.appendChild(pixelRowCreation)
        for(j=0;j<10;j++){
            console.log(5)
            const pixelBlockCreation=document.createElement('div')
            pixelBlockCreation.classList.add('pixelBlocks')
            pixelBlockCreation.textContent=''
            pixelBlockCreation.style.cssText='background-color: rgb(255,255,255)'
            pixelRowCreation.appendChild(pixelBlockCreation)
        }}

})




function createRainbowMode(){
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    mode='rainbowMode'
    pixelBlocks.forEach((pixelBlock)=>{
        pixelBlock.addEventListener('mouseover', ()=>{
            if(mode==='rainbowMode'){
                let color3=Math.floor(Math.random()*255)
                let color2=Math.floor(Math.random()*255)
                let color1=Math.floor(Math.random()*255)
                pixelBlock.style.cssText=`background-color: rgb(${color1},${color2},${color3});`
    }})})}

function createShadeMode(){
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    mode='shadeMode'
    pixelBlocks.forEach((pixelBlock)=>{
        pixelBlock.addEventListener('mouseover', ()=>{
            if(mode=='shadeMode'){
                let stringBackgroundColors=pixelBlock.style.backgroundColor.slice(4,-1)
                const arrayRGB=stringBackgroundColors.split(",")
                arrayRGB[0]=Number(arrayRGB[0])-25
                arrayRGB[1]=Number(arrayRGB[1])-25
                arrayRGB[2]=Number(arrayRGB[2])-25
                pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
            }
        })
    })
}
rainbowMode.addEventListener('click', createRainbowMode)
shadeMode.addEventListener('click', createShadeMode)


// const shadeMode=document.querySelector('.shadeMode')
// shadeMode.addEventListener('click', () =>{
//     console.log(shs)
//     const pixelBlocks=document.querySelectorAll(".pixelBlocks")
//     pixelBlocks.forEach((pixelBlock)=>{
//         pixelBlock.addEventListener('mouseover', ()=>{
//             shs=pixelBlock.style.backgroundColor
//             console.log(shs)
//             pixelBlock.style.background='rgb(0,0,0)'
//             console.log(pixelBlock.style.backgroundColor)
//     })})})