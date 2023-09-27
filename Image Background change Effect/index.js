const imgBox = document.querySelector('.img-box')
const imgWrap = document.querySelector(".img-wrap");
const OriginalImg = document.getElementById("original-img")
const line = document.getElementById("line");


OriginalImg.style.width = imgBox.offsetWidth + 'px'

let leftSpace = imgBox.offsetLeft

imgBox.onmousemove = function (e) {
    let boxWIdth = (e.pageX - leftSpace) + "px"

    imgWrap.style.width = boxWIdth

    line.style.left = boxWIdth

    
}