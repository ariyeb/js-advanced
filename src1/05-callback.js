setTimeout(() => {
    console.log('3 second')
}, 3000)

console.log('The code is running')

// const asyncFunc1 = () => {
//     setTimeout(() => {
//         const data = {
//             name: 'moshe',
//             id: 'fgukhiolk'
//         }

//         return data
//     }, 1500)
// }

// const data1 = asyncFunc1()
// console.log('asyncFunc1 data:', data1)

const asyncFunc2 = (callback) => {
    setTimeout(() => {
        const data = {
            name: 'moshe',
            id: 'fgukhiolk'
        }
        callback(data)
    }, 1500)
}

const printData = (data) => {
    console.log('asyncFunc2 data:', data)
}
asyncFunc2(printData)

const asyncFunc3 = (callback) => {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 2)
        if (randomNum === 0) {
            callback({
                error: 'Error!!!'
            }, null)
        } else {
            callback(null, {
                name: 'micahl',
                id: '767676766'
            })
        }
    }, 2500)
}

asyncFunc3((err, res) => {
    if (err != null) {
        return console.log('asyncFunc3 Error:', err)
    }

    console.log('asyncFunc3 data:', res)
})


// תרגיל
// צרו פונקציה שמחזירה תוצאה של חילוק בצורה אסינכרונית
// ופונקציה אסינכרונית שמחזירה אחוזים ממספר 
// הדפיסו את תוצאת האחוזים מתוצאת החילוק
// בשתי הפונקציות התייחסו למצב שמוביל לשגיאה והדפיסו אותה אם היא קיימת

const asyncDivision = (dividend, divisor, callback) => {
    setTimeout(() => {
        if (divisor === 0) {
            callback({
                error: 'Cannot divide by 0'
            }, null)
        } else {
            callback(null, dividend / divisor)
        }
    }, 1000)
}

const asyncPercentage = (num, callback) => {
    setTimeout(() => {
        if (num < 0) {
            callback({
                error: 'Percentage cannot be negative'
            }, null)
        } else {
            callback(null, num * 100)
        }
    }, 1500)
}

asyncDivision(6, 10, (divErr, divRes) => {
    if (divErr) {
        return console.log('asyncDivison error:', divErr)
    }

    console.log('asyncDivison:', divRes)
    asyncPercentage(divRes, (err, res) => {
        if (err) {
            return console.log('asyncPercentage error:', err)
        }

        console.log('asyncPercentage:', res + "%")
    })
})