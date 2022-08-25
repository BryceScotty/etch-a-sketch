const gridSizeBtn=document.querySelector(".gridSizeButton")
const gameScreenContainer=document.querySelector(".gameScreenContainer")
const buttons=document.querySelectorAll(".button")

const slider = document.getElementById("slider");
const sliderOutput = document.querySelector(".sliderOutput");
sliderOutput.innerHTML=slider.value
slider.oninput=function(){
  sliderOutput.innerHTML = slider.value;
}

let mode=''

gridSizeBtn.addEventListener('click', function createGrid(){
    gameScreenContainer.textContent=''    
    for(i=0;i<sliderOutput.innerHTML;i++){
        const pixelRowCreation=document.createElement('div')
        pixelRowCreation.classList.add('pixelRows')
        gameScreenContainer.appendChild(pixelRowCreation)
        for(j=0;j<sliderOutput.innerHTML;j++){
            const pixelBlockCreation=document.createElement('div')
            pixelBlockCreation.classList.add('pixelBlocks')
            pixelBlockCreation.style.cssText='background-color: rgb(255,255,255)'
            pixelRowCreation.appendChild(pixelBlockCreation)
        }
    }
    entireGame()
})

function entireGame(){
    for(const button of buttons){
        button.addEventListener('click', ()=>{
            mode=button.id
        })}
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    pixelBlocks.forEach((pixelBlock)=>{
        pixelBlock.addEventListener('mouseover', ()=>{
            if(mode=='rainbow'){
                let color3=Math.floor(Math.random()*255)
                let color2=Math.floor(Math.random()*255)
                let color1=Math.floor(Math.random()*255)
                pixelBlock.style.cssText=`background-color: rgb(${color1},${color2},${color3});`
            }
            if(mode=='shade'){
                let stringBackgroundColors=pixelBlock.style.backgroundColor.slice(4,-1)
                const arrayRGB=stringBackgroundColors.split(",")
                arrayRGB[0]=Number(arrayRGB[0])-25
                arrayRGB[1]=Number(arrayRGB[1])-25
                arrayRGB[2]=Number(arrayRGB[2])-25
                pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
            }
            if(mode=='lighten'){
                let stringBackgroundColors=pixelBlock.style.backgroundColor.slice(4,-1)
                const arrayRGB=stringBackgroundColors.split(",")
                arrayRGB[0]=Number(arrayRGB[0])+25
                arrayRGB[1]=Number(arrayRGB[1])+25
                arrayRGB[2]=Number(arrayRGB[2])+25
                pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
            }
            if(mode=='specificColorChooser'){
                console.log('ay')
                pixelBlock.style.cssText=`background-color: ${specificColorChooser.value}`
            }
        })})}

    






































// function createRainbowMode(){
//     const pixelBlocks=document.querySelectorAll(".pixelBlocks")
//     mode='rainbowMode'
//     console.log('heyy')
//     pixelBlocks.forEach((pixelBlock)=>{
//         pixelBlock.addEventListener('mouseover', ()=>{
//             if(mode==='rainbowMode'){
//                 let color3=Math.floor(Math.random()*255)
//                 let color2=Math.floor(Math.random()*255)
//                 let color1=Math.floor(Math.random()*255)
//                 pixelBlock.style.cssText=`background-color: rgb(${color1},${color2},${color3});`
//                 console.log(pixelBlock.style.backgroundColor)
//                 console.log("------")
                

//     }})})}

// function createShadeMode(){
//     const pixelBlocks=document.querySelectorAll(".pixelBlocks")
//     mode='shadeMode'
//     pixelBlocks.forEach((pixelBlock)=>{
//         pixelBlock.addEventListener('mouseover', ()=>{
//             if(mode=='shadeMode'){
//                 let stringBackgroundColors=pixelBlock.style.backgroundColor.slice(4,-1)
//                 const arrayRGB=stringBackgroundColors.split(",")
//                 arrayRGB[0]=Number(arrayRGB[0])-15
//                 arrayRGB[1]=Number(arrayRGB[1])-15
//                 arrayRGB[2]=Number(arrayRGB[2])-15
//                 pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
//             }
//         })
//     })
// }

// function createLightenMode(){
//     const pixelBlocks=document.querySelectorAll(".pixelBlocks")
//     mode='lightenMode'
//     pixelBlocks.forEach((pixelBlock)=>{
//         pixelBlock.addEventListener('mouseover', ()=>{
//             if(mode=='lightenMode'){
//                 let stringBackgroundColors=pixelBlock.style.backgroundColor.slice(4,-1)
//                 const arrayRGB=stringBackgroundColors.split(",")
//                 arrayRGB[0]=Number(arrayRGB[0])+20
//                 arrayRGB[1]=Number(arrayRGB[1])+20
//                 arrayRGB[2]=Number(arrayRGB[2])+20
//                 pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
//             }
//         })
//     })
    
// }

// rainbowMode.addEventListener('click', createRainbowMode)
// shadeMode.addEventListener('click', createShadeMode)
// lightenMode.addEventListener('click', createLightenMode)
