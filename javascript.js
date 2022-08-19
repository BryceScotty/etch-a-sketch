const button=document.querySelector(".gridSizeButton")
const gameScreenContainer=document.querySelector(".gameScreenContainer")


button.addEventListener('click', function createGrid(){
    for(i=0;i<10;i++){
        const pixelRows=document.createElement('div')
        pixelRows.classList.add('pixelRows')
        gameScreenContainer.appendChild(pixelRows)
        for(j=0;j<10;j++){
        console.log(5)
        const pixelBlocks=document.createElement('div')
        pixelBlocks.classList.add('pixelBlocks')
        pixelBlocks.textContent=''
        pixelRows.appendChild(pixelBlocks)
        }}
})
