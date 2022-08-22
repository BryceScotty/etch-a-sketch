const gridSizeBtn=document.querySelector(".gridSizeButton")
const rainbowMode=document.querySelector(".rainbowMode")
const gameScreenContainer=document.querySelector(".gameScreenContainer")



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
            pixelRowCreation.appendChild(pixelBlockCreation)
        }}
        createRainbowMode()
})


function createRainbowMode(){
    const pixelBlocks=document.querySelectorAll(".pixelBlocks")
    rainbowMode.addEventListener('click', ()=>{
        pixelBlocks.forEach((pixelBlock)=>{
            pixelBlock.addEventListener('mouseover', ()=>{
                let color3=Math.floor(Math.random()*255)
                let color2=Math.floor(Math.random()*255)
                let color1=Math.floor(Math.random()*255)
                pixelBlock.style.cssText=`background-color: rgb(${color1},${color2},${color3});`
        })})})}

