function menuPhone(n){
    var menu = document.getElementById("navMenu")
    if(n == 0){
        menu.classList.remove('phone')
        menu.classList.add('no-phone')
    }
    else if(n == 1){
        menu.classList.remove('no-phone')
        menu.classList.add('phone')
    }
}

function chamgeBgBox(n){
    let box = document.getElementById('box')
    if(n == 0){
        box.style.backgroundImage = "url('media/bg-fibra.png')"
    }
    else if(n == 1){
        box.style.backgroundImage = "url('media/bg-ti.png')"
    }
    else if(n == 2){
        box.style.backgroundImage = "url('media/bg-ele.png')"
    }
    else if(n == 3){
        box.style.backgroundImage = "url('media/bg-telecom.png')"
    }
    else if(n == 4){
        box.style.backgroundImage = "url('media/bg2.png')"
    }
}




