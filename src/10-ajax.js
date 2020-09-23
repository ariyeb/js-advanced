// fetch('https://api.chucknorris.io/jokes/random')
//     .then((res) => {
//         if (res.ok) {
//             return res.json()
//         } else {
//             throw new Error(res.status)
//         }
//     })
//     .then((resObject) => {
//         console.log(resObject.value)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

const user = {
    name: 'moshe',
    phone: '689689798709'
}

fetch('https://my-db-example.firebaseio.com/users.json', {
    method: 'POST',
    body: JSON.stringify(user)
}).then((res) => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error(res.status)
    }
}).then((resObj) => {
    console.log(resObj)
}).catch((err) => {
    console.log(err)
})

// תרגיל
// צרו משחקון שבו עמוד ניגש באופן רנדומלי לאחת מהדומיות ב
// api
// המשתמש צריך לציין באיזה סרטים אותה הדמות השתתפה
// וללחוץ סאבמיט
// אם הוא צדק מופיעה הודעה שצדק ואם לא מופיעה הודעה ששגה

//https://swapi.dev/api/people/