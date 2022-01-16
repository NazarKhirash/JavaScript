// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(value => value.json())
    //     .then(value => {
    //         let mainDiv = document.createElement('div')
    //         mainDiv.classList.add('main-div')
    //         for (const valueElement of value) {
    //             let divPost = document.createElement('div')
    //             divPost.classList.add('div-post')
    //
    //             let divPostId = document.createElement('div')
    //             divPostId.innerHTML = `${valueElement.id}`
    //
    //             let divPostTitle = document.createElement('div')
    //             divPostTitle.innerHTML = `${valueElement.title}`
    //
    //             let divPostBody = document.createElement('div')
    //             divPostBody.innerHTML = `${valueElement.body}`
    //
    //             divPost.append(divPostId, divPostTitle, divPostBody)
    //             mainDiv.appendChild(divPost)
    //             document.body.appendChild(mainDiv)
    //         }
    //     })


//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => {
            let div = document.createElement('div')
            div.classList.add('wrap-div')
            for (const valueElement of value) {
                let divComment = document.createElement('div')
                divComment.classList.add('div-comment')

                let divId = document.createElement('div')
                divId.innerHTML = `${valueElement.id}`

                let divNAme = document.createElement('div')
                divNAme.innerHTML = `${valueElement.name}`

                let divEmail = document.createElement('div')
                divEmail.innerHTML = `${valueElement.email}`

                let divBody = document.createElement('div')
                divBody.innerHTML = `${valueElement.body}`


                document.body.appendChild(div)
                div.appendChild(divComment)
                divComment.append(divId, divNAme, divEmail, divBody)
            }
        })

