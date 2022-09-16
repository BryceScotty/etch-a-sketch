const gameScreen=document.querySelector(".gameScreen")
const buttons=document.querySelectorAll(".button")
const pixelBlocks=document.querySelectorAll(".pixelBlocks")
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector(".sliderOutput");
sliderOutput.innerHTML=slider.value
slider.oninput=function(){
  sliderOutput.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`;
}

let mode='penColorChooser'


slider.addEventListener('mouseup', function createGrid(){
    gameScreen.textContent=''    
    for(i=0;i<slider.value;i++){
        const pixelRowCreation=document.createElement('div')
        pixelRowCreation.classList.add('pixelRows')
        gameScreen.appendChild(pixelRowCreation)
        for(j=0;j<slider.value;j++){
            const pixelBlockCreation=document.createElement('div')
            pixelBlockCreation.classList.add('pixelBlocks')
            pixelBlockCreation.style.cssText='background-color: rgb(255,255,255)'
            pixelRowCreation.appendChild(pixelBlockCreation)
        }
    }
    entireGame()
})

function entireGame(){
    const toggleGridLines=document.querySelector(".gridLines")
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    toggleGridLines.addEventListener('click', ()=>{
        for(const pixelBlock of pixelBlocks){
        pixelBlock.classList.toggle('noGridLines')
        }})
    for(const button of buttons){
        button.addEventListener('click', ()=>{
            mode=button.id
            for(const button of buttons){
                button.classList.remove('clickedButton')
            }})}
    for(const button of buttons){
        button.addEventListener('click', ()=>{
            button.classList.add('clickedButton')
        })
    }
    modes('mouseover', true)
    modes('mousedown', false)
    }

function modes(eventTrigger, conditional){
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    pixelBlocks.forEach((pixelBlock)=>{
        pixelBlock.addEventListener('dragstart', (e)=>{
            e.preventDefault()
        })
        pixelBlock.addEventListener(eventTrigger, ()=>{
            if(mouseDown==conditional){
            if(mode=='re-pickPenColor'){
                pixelBlock.addEventListener('click', ()=>{
                    penColorChooser.value=pixelBlock.background
                })
            }
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
                console.log(pixelBlock.backgroundColor)
            }
            if(mode=='lighten'){
                let stringBackgroundColors=pixelBlock.style.backgroundColor.slice(4,-1)
                const arrayRGB=stringBackgroundColors.split(",")
                arrayRGB[0]=Number(arrayRGB[0])+25
                arrayRGB[1]=Number(arrayRGB[1])+25
                arrayRGB[2]=Number(arrayRGB[2])+25
                pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
            }
            if(mode=='penColorChooser'){
                console.log('ay')
                pixelBlock.style.cssText=`background-color: ${penColorChooser.value}`
            }
            if(mode=='eraser'){
                pixelBlock.style.backgroundColor=`rgb(255,255,255)`
            }
        }})
        })}

    
        let mouseDown = false
        document.body.onmousedown = () => (mouseDown = true)
        document.body.onmouseup = () => (mouseDown = false)

const sliderContainer=document.querySelector(".sliderContainer")
slider.addEventListener("mouseenter", ()=>{
    sliderContainer.classList.toggle("fullOpacity")
})
slider.addEventListener("mouseleave", ()=>{
    sliderContainer.classList.toggle("fullOpacity")
})









// window.addEventListener('load', ()=>{
// for(i=0;i<16;i++){
//     const pixelRowCreation=document.createElement('div')
//     pixelRowCreation.classList.add('pixelRows')
//     gameScreen.appendChild(pixelRowCreation)
//     for(j=0;i<16;j++){
//         const pixelBlockCreation=document.createElement('div')
//         pixelBlockCreation.classList.add('pixelBlocks')
//         pixelBlockCreation.style.cssText='background-color: rgb(255,255,255)'
//         pixelRowCreation.appendChild(pixelBlockCreation)
//     }
// }
// })


window.addEventListener('load', ()=>{
    for(i=0;i<16;i++){
        const pixelRowCreation=document.createElement('div')
        pixelRowCreation.classList.add('pixelRows')
        gameScreen.appendChild(pixelRowCreation)
        for(j=0;j<16;j++){
            const pixelBlockCreation=document.createElement('div')
            pixelBlockCreation.classList.add('pixelBlocks')
            pixelBlockCreation.style.cssText='background-color: rgb(255,255,255)'
            pixelRowCreation.appendChild(pixelBlockCreation)
        }
    }
    entireGame()
    sliderOutput.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`;
})