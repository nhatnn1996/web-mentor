
// import * as api from "./api"

// const EmailServer = (email) => {
//   return new Promise((resolve, reject) => {
//     api.post('/validation/email', { email: email })
//       .then(result => {
//         if (result) resolve(result.data.validation)
//       })
//       .catch(error => resolve(false))
//   })
// }/

// function validate
const email = function (email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const password = function (password) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(String(password));
}
const required = function (content) {
  return content ? true : false
}

const validation = (input, type) => {
  let result = false
  switch (type) {
    case "email": result = email(input); break;
    case "password": result = password(input); break;
    case "required": result = required(input); break;
    default:
      break;
  }
  return result;
}

export default validation;