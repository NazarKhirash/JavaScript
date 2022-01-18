// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        let mainDiv = document.createElement('div')
        mainDiv.classList.add('main-div')

        // let divOfBtn = document.createElement('div')
        // divOfBtn.classList.add('divOfBtn')

        for (const valueElement of value) {
            let divPost = document.createElement('div')
            divPost.classList.add('div-post')

            let idPost = document.createElement('div')
            idPost.innerHTML = `${valueElement.id}`

            let postTitle = document.createElement('div')
            postTitle.innerHTML = `${valueElement.title}`

            let postBody = document.createElement('div')
            postBody.innerHTML = `${valueElement.body}`

            let postBtn = document.createElement('button')
            postBtn.innerHTML = 'click'

            postBtn.onclick = function () {
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(valueComment => valueComment.json())
                    .then(valueComment => {
                        for (const valueCommentElement of valueComment) {
                            if (valueCommentElement.id === valueElement.id) {
                                let commentDiv = document.createElement('div')
                                commentDiv.classList.add('comment-div')

                                let commentId = document.createElement('h2')
                                commentId.innerHTML = `${valueCommentElement.id}`

                                let commentNameEmail = document.createElement('h3')
                                commentNameEmail.innerHTML = `${valueCommentElement.name} - ${valueCommentElement.email}`

                                let commentBody = document.createElement('p')
                                commentBody.innerHTML = `${valueCommentElement.body}`

                                commentDiv.append(commentId, commentNameEmail, commentBody)
                                divPost.append(commentDiv)
                            }
                        }
                    })
            }

            divPost.append(idPost, postTitle, postBody, postBtn)
            mainDiv.appendChild(divPost)

            document.body.append(mainDiv)


        }
    })