function myDay(myDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (myDay) {
                resolve('Мій розпорядок дня')
            } else {
                reject('error')
            }
        }, 100)
    })
}


function wakeUp(wakeUp) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Проснувся')
        }, 300)
    })
}

function breakFast(breakFast) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Сніданок')
        }, 200)
    })

}

function goWork() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Іду на роботу')
        }, 400)
    })
}

//
function drinkTea() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Чаювання')
        }, 1000)
    })
}

function goHome() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Іду до дому')
        }, 450)
    })
}

function goDinner() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Вечеряю')
        }, 600)
    })
}

function goStudy() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Вчуся')
        }, 2000)
    })
}

function goLunch() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Перекус')
        }, 250)
    })
}

function timeForFriends() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Гуляю з друзями')
        }, 780)
    })
}

function goSleep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Лягаю спати')
        })
    })
}

// ------------------------------------------------------------Promise---------------------------------------------------------------------
myDay(true)
    .then(startDay => {
        console.log(startDay)
        return wakeUp()
    })

    .then(wakeup => {
        console.log(wakeup)
        return breakFast()
    })

    .then(breakfast => {
        console.log(breakfast)
        return goWork()
    })

    .then(gowork => {
        console.log(gowork)
        return drinkTea()
    })

    .then(drinktea => {
        console.log(drinktea)
        return goHome()
    })

    .then(gohome => {
        console.log(gohome)
        return lunch()
    })

    .then(eat => {
        console.log(eat)
        return study()
    })

    .then(studing => {
        console.log(studing)
        return timeForFriends()
    })

    .then(friendsTime => {
        console.log(friendsTime)
        return sleep()
    })

    .then(finish => {
        console.log(finish)
    })

    .catch(e => {
        console.log('День не почався')
    })

// ---------------------------------------------------------------------async await---------------------------------------------------------------------------------
async function myDAy() {
    try {
        const day = await myDay(false);
        const wUp = await wakeUp(day);
        const bFast = await breakFast(wUp);
        const work = await goWork(bFast);
        const dTea = await drinkTea(work);
        const home = await goHome(dTea);
        const eat = await goDinner(home);
        const studding = await goStudy(eat);
        const haveLunch = await goLunch(studding);
        const friends = await timeForFriends(haveLunch);
        const sleep = await goSleep(friends);


        console.log(day);
        console.log(wUp);
        console.log(bFast);
        console.log(work);
        console.log(dTea);
        console.log(home);
        console.log(eat)
        console.log(studding);
        console.log(haveLunch);
        console.log(friends);
        console.log(sleep)
    } catch (e) {
        console.error(e)

    }

}


myDAy()