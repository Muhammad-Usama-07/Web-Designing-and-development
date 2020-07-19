var myimage = document.getElementById("modal-img");
myimage = ['images/1.jpg', 'images/3.jpg', 'images/5.jpg', 'images/6.jpg']


function onClosedImagModal(){
    var modal = document.getElementById('modal');
    modal.classList.remove('modal-close');
    modal.classList.add('modal-open')
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}
