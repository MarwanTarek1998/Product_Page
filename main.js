let imgs = document.querySelectorAll('.gallery .img-container img');
let productImg = document.querySelector('.gallery .main-img img'); 
let gallery = document.querySelector('.top .gallery');
let productInfo = document.querySelector('.top .product-info');
let description = document.querySelector('.bottom .description');
let container = document.querySelector('.container');
let buttons = document.querySelector('.buttons');
let right = document.querySelector('.top .product-info .right');
let bottom = document.querySelector('.bottom');
let copyBtn = document.querySelector('.bottom .copy')

let mainImg = document.querySelector('.top .gallery .main-img img')
let bigImgContainer = document.querySelector('.big-img')
let bigImg = document.querySelector('.big-img img')

imgs.forEach(element => {
    element.addEventListener(('click'),()=>{
        imgs.forEach(e =>{
            e.classList.remove("active");
        })
        element.classList.add("active");
        productImg.setAttribute('src',element.getAttribute('src'));
    })
});

mainImg.addEventListener("click" , ()=>{
    let imgSrc = mainImg.getAttribute('src') 
    bigImg.setAttribute('src',imgSrc)
    bigImgContainer.style.display = "block"
})

bigImgContainer.addEventListener('click' , ()=>{
    bigImgContainer.style.display = 'none'
})

document.getElementById("download").addEventListener("click",()=>{
    // gallery.style.cssText = "flex:0 0 100%";
    // productInfo.style.cssText = "flex:0 0 100%";
    // description.style.cssText = "padding-right: 50px; flex:0 0 100%";
    // container.style.width = '680px'
    // buttons.style.cssText = "display : none";
    // right.style.width = '360px'
    // bottom.style.marginTop = '220px';
    
    let pdf = this.document.getElementById("pdf")

    var opt = {
        filename : 'filename.pdf'
    }

    html2pdf().set(opt).from(pdf).save()

    // back()

});

function back(){
        setInterval(()=>{
            gallery.style.cssText = "flex:0 0 48%";
        productInfo.style.cssText = "flex:0 0 50%";
        description.style.cssText = "padding-right: 25px; flex: 0 0 48%";
        container.style.width = '1170px';
        buttons.style.cssText = 'display : flex';
        right.style.width = '283px';
        bottom.style.marginTop = '0px';
        } , 100)
}

copyBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    var copy_text = window.location.href
    console.log(copy_text)

    document.addEventListener('copy', function(e) {
        e.clipboardData.setData('text/plain', copy_text);
        e.preventDefault();
     }, true);

    document.execCommand('copy'); 
})
