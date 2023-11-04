const signupForm = document.querySelector("#signupForm")
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre = document.querySelector('#name').value
    const password = document.querySelector('#pass').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.name === nombre)
    if(isUserRegistered){
        return alert('El usuario ya esta registrado')
    }

    Users.push({name: nombre, pass: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    const formularioDeRegistro = document.querySelector(".register")
    const formularioDeLogin = document.querySelector(".login")
    //coment redireccion
    formularioDeRegistro.classList.add("hide")
    formularioDeLogin.classList.remove("hide")


})