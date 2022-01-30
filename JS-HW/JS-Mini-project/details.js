let url = new URL(location.href)
let object = url.searchParams.get('data');
let parseObj = JSON.parse(object)

let mainDivDetails = document.createElement('div')
mainDivDetails.classList.add('main-div_details')

let divDetails = document.createElement('div')
divDetails.classList.add('div-details')
divDetails.innerHTML = `
    <h2>${parseObj.id} - ${parseObj.name}</h2>
    <h3>${parseObj.username} - ${parseObj.email}</h3>
    <p>${parseObj.address.street} - ${parseObj.address.suite} - ${parseObj.address.city} - ${parseObj.address.zipcode}</p>
    <p>GEO: ${parseObj.address.geo.lat} - ${parseObj.address.geo.lng}</p>
    <p>PHONE: ${parseObj.phone} WEBSITE: ${parseObj.website}</p>
    <p>COMPANY: ${parseObj.company.name} - ${parseObj.company.catchPhrase} - ${parseObj.company.bs}</p>
`

let btn = document.createElement("button")
btn.classList.add('btn-details')
btn.innerText = 'post of current user'

let mainDibPost = document.createElement('div')
mainDibPost.classList.add('div-post_title')

btn.onclick = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
                for (const postElement of value) {
                    let wrapDivPost = document.createElement('div')
                    wrapDivPost.classList.add('wrap-div_post')
                    if (postElement.userId === parseObj.id) {
                        let divPostTitle = document.createElement('div')
                        divPostTitle.innerHTML = `${postElement.title}`

                        let linkOfPost = document.createElement("a")
                        linkOfPost.innerText = 'post details'
                        linkOfPost.href = 'post-details.html?post-det=' + JSON.stringify(postElement)


                        wrapDivPost.append(divPostTitle, linkOfPost)
                        mainDibPost.appendChild(wrapDivPost)

                }

            }
        })
}

mainDivDetails.append(divDetails, btn)
document.body.append(mainDivDetails, mainDibPost)






