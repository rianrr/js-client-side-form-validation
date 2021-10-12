const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const checkPassword = document.getElementById('check-password')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  // * get the values from the inputs
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const checkPasswordValue = checkPassword.value.trim()

  if (usernameValue === '') {
    // * show error and add error class
    setErrorFor(username, 'Username cannot be blank')
  } else {
    // * add success class
    setSuccessFor(username)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Put a valid email')
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    // * show error and add error class
    setErrorFor(password, 'Password cannot be blank')
  } else {
    // * add success class
    setSuccessFor(password)
  }

  if (checkPasswordValue === '') {
    // * show error and add error class
    setErrorFor(checkPassword, 'Password cannot be blank')
  } else if (passwordValue !== checkPasswordValue) {
    setErrorFor(checkPassword, 'Passwords does not match')
  } else {
    // * add success class
    setSuccessFor(checkPassword)
  }

  // TODO: show a success message
}

function setErrorFor(input, message) {
  const formControl = input.parentElement // * .form-control
  const small = formControl.querySelector('small')

  // * add error message inside small
  small.innerText = message

  // * add error class
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement

  // * add error class
  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}
