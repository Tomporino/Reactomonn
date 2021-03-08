export default async function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {resolve(data);})
        .catch(err => {console.log(err)})
    })
}