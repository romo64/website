const fulImgBox = document.getElementById("fulImgBox")
fulImg = document.getElementById("fulImg")
totalImg = 0
foto = 2

function openImg(esc){
    totalImg = esc
    if(esc == 1){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/mercedes.jpg"
    }else if(esc==2){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/ferrari.jpg"
    }else if(esc==3){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/redbull.jpg"
    }else if(esc==4){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/mclaren.jpg"
    }else if(esc==5){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/aston.jpg"
    }else if(esc==6){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/alpine.jpg"
    }else if(esc==7){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/haas.jpg"
    }else if(esc==8){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/alfa.jpg"
    }else if(esc==9){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/alpha.jpg"
    }else if(esc==10){
        fulImgBox.style.display = 'flex';
        fulImg.src="images/equipos/will.jpg"
    }
}

function closeImg(){
    fulImgBox.style.display = 'none'
}

function funcionEjecutar(side){
    if(side=="anterior"){
        if(foto != 0){
            foto = foto - 1
        }else{
            foto = 2
        }
    }
    if(side=='siguiente'){
        if(foto != 2){
            foto = foto+1
        }else{
            foto=0
        }
    }

    if(totalImg==1){
        if(foto==2){
            fulImg.src="images/equipos/mercedes.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/mercedes2.JPG"
        }
        else{
            fulImg.src="images/equipos/mercedes3.JPG"
        }
    }else if(totalImg==2){
        if(foto==2){
            fulImg.src="images/equipos/ferrari.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/ferrari2.JPG"
        }
        else{
            fulImg.src="images/equipos/ferrari3.JPG"
        }
    }else if(totalImg==3){
        if(foto==2){
            fulImg.src="images/equipos/redbull.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/redbull2.JPG"
        }
        else{
            fulImg.src="images/equipos/redbull3.JPG"
        }
    }else if(totalImg==4){
        if(foto==2){
            fulImg.src="images/equipos/mclaren.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/mclaren2.JPG"
        }
        else{
            fulImg.src="images/equipos/mclaren3.JPG"
        }
    }else if(totalImg==5){
        if(foto==2){
            fulImg.src="images/equipos/aston.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/aston2.JPG"
        }
        else{
            fulImg.src="images/equipos/aston3.JPG"
        }
    }else if(totalImg==6){
        if(foto==2){
            fulImg.src="images/equipos/alpine.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/alpine2.JPG"
        }
        else{
            fulImg.src="images/equipos/alpine3.JPG"
        }
    }else if(totalImg==7){
        if(foto==2){
            fulImg.src="images/equipos/haas.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/haas2.JPG"
        }
        else{
            fulImg.src="images/equipos/haas3.JPG"
        }
    }else if(totalImg==8){
        if(foto==2){
            fulImg.src="images/equipos/alfa.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/alfa2.JPG"
        }
        else{
            fulImg.src="images/equipos/alfa3.JPG"
        }
    }else if(totalImg==9){
        if(foto==2){
            fulImg.src="images/equipos/alpha.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/alpha2.JPG"
        }
        else{
            fulImg.src="images/equipos/alpha3.JPG"
        }
    }else if(totalImg==10){
        if(foto==2){
            fulImg.src="images/equipos/will.jpg"
        }else if(foto==1){
            fulImg.src="images/equipos/will2.JPG"
        }
        else{
            fulImg.src="images/equipos/will3.JPG"
        }
    }
}
