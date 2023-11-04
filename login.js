const loginForm = document.querySelector('#loginForm')
const general = document.getElementById('general');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombreLogin = document.querySelector('#namelogin').value
    const passwordLogin = document.querySelector('#passlogin').value
    const escuderiaLogin = document.querySelector('#escuderialogin').value

    
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.name === nombreLogin && user.pass === passwordLogin)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }

    localStorage.setItem('login_success', JSON.stringify(validUser.name))
    localStorage.setItem('escuderia', JSON.stringify(escuderiaLogin))
    
    window.location.href = 'login.html'

})
