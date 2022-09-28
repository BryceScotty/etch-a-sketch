const gameScreen=document.querySelector(".gameScreen")
const buttons=document.querySelectorAll(".button")
const pixelBlocks=document.querySelectorAll(".pixelBlocks")
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector(".sliderOutput")
const rePickPenColor= document.getElementById('re-pickPenColor')
const backgroundColorChooser=document.getElementById('backgroundColorChooser')
sliderOutput.innerHTML=slider.value
slider.oninput=function(){
  sliderOutput.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`;
}

let mode='penColorChooser'










function createGrid(){
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
}

function highlightActiveButton(){
for(const button of buttons){
    button.addEventListener('click', ()=>{
        mode=button.id
        for(const button of buttons){
            button.classList.remove('clickedButton')
        }})}}


slider.addEventListener('mouseup', createGrid)

function entireGame(){
    const toggleGridLines=document.querySelector(".gridLines")
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    const clear=document.querySelector(".clear")
    clear.addEventListener('click', ()=>{
        for(const pixelBlock of pixelBlocks){
        pixelBlock.style.backgroundColor='rgb(255,255,255)'
        console.log(pixelBlock.style.backgroundColor)
    }})
    toggleGridLines.addEventListener('click', ()=>{
        for(const pixelBlock of pixelBlocks){
        pixelBlock.classList.toggle('noGridLines')
        }})
        highlightActiveButton()
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
            let stringBackgroundColors=pixelBlock.style.backgroundColor.slice(4,-1)
            let arrayRGB=stringBackgroundColors.split(",")
            if(mouseDown==conditional){
            if(mode=='re-pickPenColor'){
                    mode='penColorChooser'
                    let translationRGB='#'
                    for(color of arrayRGB){
                            color=Number(color)/16
                            color=color.toString()
                            if(color.includes('.')){
                                color=color.split(".")
                                let firstNumber=hexArray[color[0]]
                                let secondNumber='.'+color[1]
                                secondNumber=hexArray[secondNumber*16]
                                console.log(secondNumber)
                                color=firstNumber+secondNumber
                                translationRGB+=color
                            }
                            else{
                                color=hexArray[color] +'0'
                                translationRGB+=color
                            }
                            console.log(translationRGB)
                        }
                    penColorChooser.value=translationRGB
                    translationRGB='#'
                    penColorChooser.classList.add('clickedButton')
                    rePickPenColor.classList.remove('clickedButton')
                }
            if(mode=='rainbow'){
                let color3=Math.floor(Math.random()*255)
                let color2=Math.floor(Math.random()*255)
                let color1=Math.floor(Math.random()*255)
                pixelBlock.style.cssText=`background-color: rgb(${color1},${color2},${color3});`
            }
            if(mode=='shade'){
                console.log(pixelBlock.style.backgroundColor)
                arrayRGB[0]=Number(arrayRGB[0])-25
                arrayRGB[1]=Number(arrayRGB[1])-25
                arrayRGB[2]=Number(arrayRGB[2])-25
                pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
                console.log(pixelBlock.style.backgroundColor)
            }
            if(mode=='lighten'){
                arrayRGB[0]=Number(arrayRGB[0])+25
                arrayRGB[1]=Number(arrayRGB[1])+25
                arrayRGB[2]=Number(arrayRGB[2])+25
                pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
            }
            if(mode=='penColorChooser'){
                pixelBlock.style.cssText=`background-color: ${penColorChooser.value}`
            }
            if(mode=='backgroundColorChooser'){
                for(const pixelBlock of pixelBlocks){
                    pixelBlock.style.cssText=`background-color: ${backgroundColorChooser.value}`
                }
            }
            if(mode=='eraser'){
                pixelBlock.style.backgroundColor=`rgb(255,255,255)`
            }
            }})})}
        

    
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


let hexArray=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
