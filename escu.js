const escLogin = JSON.parse(localStorage.getItem('escuderia'));
const ancho = window.screen.width;

console.log(ancho)
    if(user){
        botonLogin.innerHTML = nombreUsuario
        document.getElementById('accesoUsuario').href = 'login.html#cambioForm'

        if(escLogin == 'mercedes'){
            if(ancho < 750){
                general.style.backgroundImage = 'url("images/elfondocelu-mercedes.jpg")'
                general.style.backgroundSize = 'cover'
                general.style.display = 'flex'
            }else{
                general.style.backgroundImage = 'url("images/elfondo-mercedes.jpg")'
                general.style.backgroundSize = 'cover'
                general.style.display = 'flex'
            }
        } else if(escLogin == 'ferrari'){
            if(ancho < 750){
                general.style.backgroundImage = 'url("images/elfondocelu-ferrari.jpg")'
                general.style.backgroundSize = 'cover'
                general.style.display = 'flex'
            }else{
                general.style.backgroundImage = 'url("images/elfondo-ferrari.jpg")'
                general.style.backgroundSize = 'cover'
                general.style.display = 'flex'
            }
        } else{
            if(ancho < 750){
                general.style.backgroundImage = 'url("images/elfondocelu-red.jpg")'
                general.style.backgroundSize = 'cover'
                general.style.display = 'flex'
            }else{
                general.style.backgroundImage = 'url("images/elfondo-redbull.jpeg")'
                general.style.backgroundSize = 'cover'
                general.style.display = 'flex'
            }
        }
    }