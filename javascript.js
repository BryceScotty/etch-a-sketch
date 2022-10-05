const gameScreen=document.querySelector(".gameScreen")
const buttons=document.querySelectorAll(".button")
const pixelBlocks=document.querySelectorAll(".pixelBlocks")
const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector(".sliderOutput")
const rePickPenColor= document.getElementById('re-pickPenColor')
const colorText=document.querySelectorAll('.colorText')

let mode='penColorChooser'  //Default mode

//Allows user to click or click & hold where they want their actions to occur
//Also allows the user to hover above already colored squares without accidentally painting over them
//So when the user wishes to create an object away from the border, an unwanted trail won't be created

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

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
    allButtons()
}

function removeHighlightOnButton(){
for(const button of buttons){
    button.addEventListener('click', ()=>{
        for(const button of buttons){
            button.classList.remove('clickedButton')
        }
        for(text of colorText){
            text.classList.remove('fullOpacity')
            text.style.cssText='opacity:0.7'
        }})}}
        

function allButtons(){
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    const clearButton=document.querySelector(".clear")
    clearButton.addEventListener('click', ()=>{
        for(const pixelBlock of pixelBlocks){
        pixelBlock.style.backgroundColor='rgb(255,255,255)'
    }})
    const toggleGridLinesButton=document.querySelector(".gridLines")
    toggleGridLinesButton.addEventListener('click', ()=>{
        for(const pixelBlock of pixelBlocks){
        pixelBlock.classList.toggle('noGridLines')
        }})
    removeHighlightOnButton()

    // Changes mode on button click, adds highlight to current button in use

    for(const button of buttons){
        button.addEventListener('click', ()=>{
            mode=button.id
            button.classList.add('clickedButton')
            for(const text of colorText){
                if(text.className.slice(10)==mode){
                    text.classList.add('fullOpacity')
                    text.style.cssText='opacity:1'
                }
            }
    })}
    modes('mouseover', true)
    modes('mousedown', false)
}


function modes(eventTrigger, conditional){
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    pixelBlocks.forEach((pixelBlock)=>{
        pixelBlock.addEventListener('dragstart', (e)=>{
            e.preventDefault()    //Prevents cursor from dragging when painting
        })
        pixelBlock.addEventListener(eventTrigger, ()=>{
            let stringRGB=pixelBlock.style.backgroundColor.slice(4,-1) //Makes 'RGB(255,255,255)' go to '255,255,255' for more convenient array split
            let arrayRGB=stringRGB.split(",")
            if(mouseDown==conditional){
                if(mode=='re-pickPenColor'){
                    //RGB to Hexadecimal conversion
                    //Created this since the input color type element in html only 
                    //uses hexadecimal and everything done up until now is in RGB
                    let translationRGB='#'
                    const hexArray=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
                    for(color of arrayRGB){
                            color/=16
                            color=color.toString()
                            if(color.includes('.')){
                                color=color.split(".")
                                let firstNumber=hexArray[color[0]]
                                let secondNumber='.'+color[1]
                                secondNumber=hexArray[secondNumber*16]
                                translationRGB+=firstNumber+secondNumber
                            }
                            else{
                                color=hexArray[color] +'0'
                                translationRGB+=color
                            }
                        }
                    penColorChooser.value=translationRGB
                    translationRGB='#'
                    penColorChooser.classList.add('clickedButton')
                    rePickPenColor.classList.remove('clickedButton')
                    mode='penColorChooser'
                    if(colorText){
                        
                    }
                    }
                if(mode=='rainbow'){
                    let color3=Math.floor(Math.random()*255)
                    let color2=Math.floor(Math.random()*255)
                    let color1=Math.floor(Math.random()*255)
                    pixelBlock.style.cssText=`background-color: rgb(${color1},${color2},${color3});`
                }
                if(mode=='shade'){
                    arrayRGB[0]=Number(arrayRGB[0])-25
                    arrayRGB[1]=Number(arrayRGB[1])-25
                    arrayRGB[2]=Number(arrayRGB[2])-25
                    pixelBlock.style.cssText=`background-color: rgb(${arrayRGB})`
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
            
            slider.oninput=function(){
                sliderOutput.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`;
              }
              sliderOutput.innerHTML=slider.value
              slider.addEventListener('mouseup', createGrid)

    


const sliderContainer=document.querySelector(".sliderContainer")
slider.addEventListener("mouseenter", ()=>{
    sliderContainer.classList.toggle("fullOpacity")
})
slider.addEventListener("mouseleave", ()=>{
    sliderContainer.classList.toggle("fullOpacity")
})

const inputTypeColors=document.querySelectorAll('.textHover')
const colorContainers=document.querySelectorAll('.colorContainer')
for(const input of inputTypeColors){
    input.onmouseenter=function(){
        for(const text of colorText){
            if(text.className.slice(10)==input.id){
                text.style.cssText='opacity:1;'
        }
    }
}}

for(const input of inputTypeColors){
    input.onmouseleave=function(){
        for(const text of colorText){
            if(text.className.slice(10)==input.id){
                text.style.cssText='opacity:0.7;'
        }
    }
}}

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
    allButtons()
    sliderOutput.innerHTML = `Grid Size: ${slider.value} x ${slider.value}`;
})