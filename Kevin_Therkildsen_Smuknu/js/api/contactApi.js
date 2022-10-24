const onSubmit = (e) => {

    e.preventDefault();

    const resultElement = document.querySelector('#valid');

    let postObj = {
        "tlf" : e.target.elements.tlf.value,
        "email" : e.target.elements.email.value,
        "message" : e.target.elements.message.value
    } 

fetch('https://modelin.webmcdm.dk/contacts', {
    method: 'POST',
    body: JSON.stringify(postObj),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }   
})
.then((response) => {
    console.log('--->', response, response.ok)
    
    return response.json()
})
.then(response => {
    console.log('--->hey')
    resultElement.textContent = response.result
})
}
  
const contactForm = document.querySelector('.contact-container');
contactForm.addEventListener('submit', onSubmit)


function timer(){
    document.getElementById("valid").style.display = "flex"
}

function remove(){
    setTimeout(() => {
        document.getElementById('valid').style.display = 'none'
    }, 3000);
}