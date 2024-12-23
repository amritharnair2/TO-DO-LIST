const signupForm=document.getElementById("signupForm")

signupForm.addEventListener("submit", (event) => {
    event.preventDefault()

    document.getElementById("nameError").innerText=""
    document.getElementById("mailError").innerText = ""
    document.getElementById("passError").innerText = ""
    document.getElementById("cpassError").innerText = ""

    const name=signupForm.name.value;
    const mail=signupForm.mail.value;
    const pass=signupForm.pass.value;
    const cpass=signupForm.cpass.value;

    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    let isvalid=true;
    if(name.trim().length<3) {
        document.getElementById("nameError").innerText="Minimum 3 characters required"
        isvalid=false
    }

    if(!mail.match(emailRegex)) {
        document.getElementById("mailError").innerText="Enter a valid email address"
        isvalid=false
    }

    if(!pass.match(passwordRegex)) {
        document.getElementById("passError").innerText="Password must be atleast 8 characters long, including one uppercase letter, one digit and one special character"
        isvalid=false
    }

    if(cpass!==pass) {
        document.getElementById("cpassError").innerText="Password doesnot match"
        isvalid=false
    }

    if(isvalid) {
        signupForm.submit()
        signupForm.reset()
    }
})

let showStatus=false
const showHideButton=document.getElementById("icon1")
showHideButton.addEventListener('click', () => {
    showStatus=!showStatus
    document.getElementById("pass").type=showStatus? "text":"password"
    showHideButton.innerHTML=showStatus? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
})

let confirmPasswordshowStatus=false
const confirmPasswordshowHideButton=document.getElementById("icon2")
confirmPasswordshowHideButton.addEventListener('click', () => {
    confirmPasswordshowStatus=!confirmPasswordshowStatus
    document.getElementById("cpass").type=confirmPasswordshowStatus? "text":"password"
    confirmPasswordshowHideButton.innerHTML=confirmPasswordshowStatus? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>'
})