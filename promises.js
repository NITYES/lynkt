
let count = 0;


function PromiseA() {
    return new Promise((resolve, reject) => {
        resolve("ok")
    })
}


function PromiseB() {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

function PromiseC() {
    return new Promise((resolve, reject) => {
        resolve()
    })
}

function promiseD() {
    return new Promise((resolve, reject) => {
        resolve()
    })
        .then(res => {
            PromiseE()
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    promiseD()
                })
        })
}

function PromiseE() {
    return new Promise((resolve, reject) => {
        if (count > 20) {
            resolve(`You are successfull after ${count} attemps.Well done Nitesh`)
        } else {
            count++;
            reject("You have written bad codes")
        }
    })
}



PromiseA().then(() => {
    Promise.all([PromiseB(), PromiseC()]).then(() => {
        promiseD().catch(err => {
        })
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log( err.messages)
})

