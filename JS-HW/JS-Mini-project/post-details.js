let url2 = new URL(location.href)
let postDetails = url2.searchParams.get('post-det')
let parseOfPost = JSON.parse(postDetails)


let wrapOfPostAndBtn = document.createElement('div')
wrapOfPostAndBtn.classList.add('wrap-postBtn')

let detailsPostWrap = document.createElement("div")
detailsPostWrap.classList.add('post-wrap')
detailsPostWrap.innerHTML = `
                <h2>UserId: ${parseOfPost.userId}, ID: ${parseOfPost.id}</h2>
                <h3>Title: ${parseOfPost.title}, </br> ${parseOfPost.body}</h3>
                `


let btnOfComments = document.createElement('button')
btnOfComments.classList.add('btn-comment')
btnOfComments.innerText = 'check comments'

wrapOfPostAndBtn.appendChild(detailsPostWrap)
detailsPostWrap.appendChild(btnOfComments)

let mainDivComments = document.createElement('div')
mainDivComments.classList.add('main-div_comments')


btnOfComments.onclick = ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => {
            for (const commentElement of value) {
                if (commentElement.postId===parseOfPost.userId){
                    let commentDiv = document.createElement('div')
                    commentDiv.classList.add('comment-div')
                    commentDiv.innerHTML = `
                                <h3>UserId: ${commentElement.postId} / ID: ${commentElement.id}</h3>
                                <h2>Name: ${commentElement.name}</h2>
                                <h3>Email: ${commentElement.email}</h3>
                                <p>Body: ${commentElement.body}</p>
                    `
                    mainDivComments.append(commentDiv)
                }

            }
        })
}


document.body.append(wrapOfPostAndBtn, mainDivComments)