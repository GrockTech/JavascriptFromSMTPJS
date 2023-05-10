const fname = document.getElementById('firstname')
const lname= document.getElementById('lastname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

const form = document.querySelector('.contact-form')




form.addEventListener('submit', (e)=>{
    e.preventDefault()
    

const formData = new FormData(form)
    
    const emailData = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
    email: formData.get('email'),
    phone: formData.get('phone')
  };
//   console.log(emailData)

    Email.send({
    SecureToken : "bc69e7de-6f0d-4498-b887-71e0bd98849a",
    To : 'ootiarhin@gmail.com',
    From : 'ootiarhin@gmail.com', 
    Subject : "This is the subject",
    Body : JSON.stringify(emailData)

    
}).then(
  message => alert(message)
);

})