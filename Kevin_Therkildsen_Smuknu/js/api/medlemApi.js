const onSubmit = (e) => {
    e.preventDefault();
    let resultElement = document.querySelector('.nyt-medlem');
    const nytmedlem = document.querySelector('#valid');
    const vanish = document.querySelector('.headline-valid');
    const remove = document.querySelectorAll('.removes')
    
    let postObj = {
        "name" : e.target.elements.name.value,
        "email" : e.target.elements.email.value,
        "message" : e.target.elements.message.value,
    } 
    
    fetch('https://smuknu.webmcdm.dk/subscribe',{
        method: 'POST',
        body: JSON.stringify(postObj),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
            
        }  
    })
    .then((response) => {
        return response.json()
    })
    .then(response => {
        if(response.result.name !== undefined){
            resultElement.innerHTML = response.result.name;
            
        }
        else{
            resultElement.innerHTML = "Denne e-mail findes allerede, eller dine oplysninger er forkerte!";
            resultElement.classList.add("besked")
            vanish.innerHTML = "Beklager ☻";
            remove.forEach((response)=>{
                response.classList.add("remove-me");
            })
        }
        nytmedlem.style.display = 'flex';     
    })
}
  
const medlemForm = document.querySelector('.medlem-box');
medlemForm.addEventListener('submit', onSubmit)

function retry() {
    document.querySelector("#valid").style.display = "none";
}







document.addEventListener("DOMContentLoaded", function() { 
    
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function(e) {
    localStorage.setItem('scrollpos', window.scrollY);
};

