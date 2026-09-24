const title = document.getElementById('title');
const body = document.getElementById('body');
const userId = document.getElementById('userId');
const submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    postRequest(title.value, body.value, userId.value)
})

const postRequest = (title, body, userId) => {
    const data = {
        title: title,
        body: body,
        userId: userId
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            // fetch only rejects on network errors, so check the HTTP status too
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`)
            }
            return response.json()
        })
        .then(sentData => {
            console.log(sentData)
            // only report success once the request has actually succeeded
            Swal.fire({
                title: 'Success',
                text:
                `Title you sent is ${title} 
                Body you sent is ${body} 
                UserId you sent is ${userId}
                `,
            })
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                title: 'Error',
                text: err.message,
                icon: 'error',
            })
        })
}


