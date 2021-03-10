function handleError(response) {
    if (!response.ok) {
        console.log(response)
    }
    return response.json();
}


export default async function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(handleError)
            .then(data => { resolve(data); })
            .catch(err => { resolve(err) })
    })
}