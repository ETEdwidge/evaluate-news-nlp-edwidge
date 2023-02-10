const { checkForName } = require('./nameChecker');


function handleSubmit(event) {
    event.preventDefault()

    //Get input
    var url = document.querySelectorAll('input[name=input]')

    // check what text was put into the form field
    let formTextInput = document.getElementById('name').value

    // Check for name on the input value
    checkForName(formTextInput)

    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    if(Client.checkForName(JSON.parse(JSON.stringify(url[0].value))))
    {
        fetch('http://localhost:8080/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: url[0].value})
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res); 
            document.querySelector('section.url-results #polarity').innerHTML = res.polarity
            document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
            document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
            document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
            document.querySelector('section.url-results #excerpt').innerHTML = res.text
        })

    }else{
        // Manage error for the worst case
        var section_error = document.querySelector('section.errors');
        var error = document.querySelector('section.errors #error');
        error.innerHTML = "URL:\"" +JSON.stringify(url[0].value)+"\" the url is not valid. Can you enter a valid one?"
        section_error.style.display = "block";
        
    }     
}

export { handleSubmit }


