let arr = [1, "string", true, null, undefined, {
    name: 'ariye'
}]
console.log(arr[2])

arr = [
    [1, 2],
    [3, 4]
]

console.log(arr[1][1])

arr = [1, 2, 3, 4]
delete arr[2]
console.log(arr)

arr = [1, 2, 3, 4]
arr.push(5)
console.log(arr)
let last = arr.pop()
console.log(arr, last)

arr.unshift(0)
console.log(arr)

let first = arr.shift()
console.log(arr, first)

let arrString = ""
for (let i = 0; i < arr.length; i++) {
    arrString += arr[i] + " "
}
console.log(arrString)


arrString = ""
for (let el of arr) {
    arrString += el + " "
}
console.log(arrString)

arrString = ""
arr.forEach((el, i) => {
    arrString += `${i}: ${el} `
})
console.log(arrString)

const myForEach = (arr, callback) => {
    console.log(callback)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined) {
            callback(arr[i], i)
        }
    }
}
arrString = ""
const arrayToString = () => {
    // arrString += `${i}: ${el} `
    console.log('Hello')
}
console.log(arrayToString)

const sayMiau = () => {
    console.log('miau')
}

myForEach(arr, sayMiau)
// console.log('myForEach:', arrString)

arr = [1, 2, 3, 4]

console.log(arr.indexOf(2))
console.log(arr.indexOf(5))

console.log(arr.includes(2))
console.log(arr.includes(5))

// copy
let arr2 = [...arr, 8, 9]
arr2[2] = 7
console.log(arr[2])
console.log(arr2)

// arr2 = []
// for (let el of arr) {
//     arr2.push(el)
// }

// תרגיל: כתבו פונקציה שקוראים לה
// mySlice
// הפונקציה מקבלת נקודת התחלה וסוף והיא מחזיר חלק מהמערך לפי אותן נקודות
// אם נקודת הסוף לא כלולה היא מחזירה מנקודת ההצחלה עד סוף המערך
// אם נקודת הסוף לא כלולה אז היא מחזירה מתחילת המערך עד פרמטר נקודת הסוף
// ואם אין פרמטרים בכלל היא מחזירה העתק של המערך.

const mySlice = (arr, startIndex = 0, endIndex = arr.length) => {
    let result = []
    endIndex = endIndex > arr.length ? arr.length : endIndex
    for (let i = startIndex; i < endIndex; i++) {
        result.push(arr[i])
    }
    return result
}

console.log(arr2.slice(2, 5))
arr2 = arr.slice()

arr2 = arr2.concat(arr, [676, 888], [55, 23])
console.log("concat:", arr2)

const factorial = (num) => {
    if (num === 0) return 1

    let result = 1
    for (let corrent = 1; corrent <= num; corrent++) {
        result *= corrent
    }

    return result
}

console.log(factorial(4))

const factorialRecutsive = (num) => {
    if (num === 0 || num === 1) return 1

    return num * factorialRecutsive(num - 1)
}

console.log("factorialRecutsive:", factorialRecutsive(4))

// 4 * 3 * 2 * 1

// תרגיל : תכתבו פונקציה שמקבלת מערך ומחזירה מערך הפוך 

const myReverseArray = (arr) => {
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}
console.log(myReverseArray([1, 2, 3, 4]))

// 1 2 3 4 -> 4 3 2 1
// 4   1 2 3 - > 4 3 2 1

// [...arr] => [arr[0], arr[1], arr[2],...arr[arr.length-1]]
// [[arr[0], arr[1]]]
// [{name: 'yakir'}, {name: 'danny'}]
// []
// lodash

const myReverseArratRecursive = (arr) => {
    let result = [...arr]
    if (result.length === 0 || result.length === 1) {
        return result
    }

    let lastEl = result.pop()

    return [lastEl].concat(myReverseArratRecursive(result))
}
console.log("myReverseArratRecursive:", myReverseArratRecursive([1, 2, 3, 4]))

arr = [1, 2, 3, 4]
arr.reverse()
console.log(arr)

// תרגיל כתבו פונקציה שמקבלת מערך אינדקס התחלה, מספר מקומות למחוק, ועוד פרמטרים להכניס במקום האלמנטים שנמחקו
// הפונקציה מוחקת החל מאינדקס ההתחלה עד מספר המקומות שנקבע ומכניסה במקום את האלמנטים
// אם אינדקס ההתחלה גדול מאורך המערך אז רק מוסיפים את האלמנטים החלופיים בסוף המערך
// אם אין מספר מקומות הפונקציה מוחקת עד סוף המערך
// אם מספר המקומות למחיקה שווה לאפס שום אבר לא נמחק רק מתווסף המערך החלופים באינדקס שנבחר
// אם אין אלמנטיים חלופיים אז לא מוסיפה כלום, רק מוחקת

const stamFunc = (par1, ...rest) => {
    console.log(par1, rest)
}
stamFunc(3, 6, 7, 8, 12)

const mySplice = (arr, startIndex, deleteCount, ...altArray) => {
    altArray = altArray || []

    if (deleteCount == null) {
        deleteCount = arr.length - startIndex
    } else {
        if (deleteCount > 0) {
            deleteCount = startIndex + deleteCount > arr.length ?
                arr.length - startIndex :
                deleteCount
        } else {
            deleteCount = 0
        }
    }

    return arr.slice(0, startIndex).concat(altArray, arr.slice(startIndex + deleteCount))
}

console.log("mySplice:", mySplice([1, 2, 3, 4, 5, 6], 1, 2))
arr = [1, 2, 3, 4, 5, 6, 7]
let deletedEl = arr.splice(2, 3, 11, 33)
console.log(arr, deletedEl)

// join
console.log('join:', ["h", 'e', 'l', 'l', 'o'].join("-"))

// צרו פונקציה שמקבלת מערך וקולבק ומחזירה מערך של כל האלמנטים שהקולבק החזיר חיובי עבורם

const myFilter = (arr, callback) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(myFilter([1, 2, 3, 4, 5, 6], (el) => {
    return el > 4
}))
arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.filter((el, i) => el < 3 && i === 0))

arr = [{
        name: 'ariye'
    },
    {
        name: 'moshe'
    },
    {
        name: 'michal'
    }
]

console.log(arr.filter(el => el.name[0] === 'm'))

// תרגיל צרו מערך שמכיל את המספרים מ1 עד 100
// החזירו באמצעות פילטר מערך שכולל רק את המספרים הראשוניים
// יש לפתור פעמיים פעם אחת הצורה רגילה ופעם אחרת בצורה רקורסיבית

const isPrimeNumber = (num) => {
    if (num === 0 || num === 1) return false
    if (num === 2) return true

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true
}

arr = []
for (let i = 0; i <= 100; i++) {
    arr.push(i)
}

let timeBefore = Date.now()
console.log("prime numbers:", arr.filter(isPrimeNumber))
console.log('time past', Date.now() - timeBefore)

const isPrimeNumberRecursive = (num, i, arr, ...rest) => {
    if (num === 0 || num === 1) return false
    if (num === 2) return true

    const denominator = rest.length === 0 ? num - 1 : rest[0];

    if (denominator < 2) return true

    return num % denominator === 0 ? false : isPrimeNumberRecursive(num, i, arr, denominator - 1)
}

// arr = []
// for (let i = 0; i <= 1000; i++) {
//     arr.push(i)
// }
timeBefore = Date.now()
console.log('prime number recursive:', arr.filter(isPrimeNumberRecursive))
console.log('time past recursive', Date.now() - timeBefore)

// find

arr = [1, 2, 3, 4]
console.log(arr.find((el) => el > 2))

// findIndex

console.log(arr.findIndex((el) => el > 2))

// every

console.log(arr.every(el => el < 5))
console.log(arr.every(el => el < 3))

//some
console.log(arr.some(el => el < 3))
console.log(arr.some(el => el < 0))

// map
console.log(arr.map(el => el * 2))
const myMap = (arr, callback) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr))
    }
    return result
}
console.log(myMap(arr, (el) => el ** 2))

arr = [{
        name: 'moshe',
        id: 'ghchjvhj'
    },
    {
        name: 'moshe2',
        id: 'ghchjvhj'
    },
    {
        name: 'moshe3',
        id: 'ghchjvhj'
    }
]

console.log(arr.map((person => {
    return {
        name: person.name
    }
})))

arr = [1, 2, 3, 4, 5, 6]
const isEvenNumber = (num) => num % 2 === 0


console.log(arr.filter(isEvenNumber))

console.log(arr.map((el) => el ** 2))

arr = ["a", "b", "c"]
console.log(arr.map((el, i) => `${i}: ${el}`))

// sort
arr = ["a", "b", "c", 'h', 'r', 'v', 'g']
arr.sort()
console.log("sort:", arr)

arr = [100, 3, 500, 50, 200]
arr.sort()
console.log("sort:", arr)

arr.sort((el2, el1) => {
    return el2 - el1
})
console.log("sort:", arr)

arr = ["a", "b", "c", 'h', 'r', 'v', 'g']

const compare2Strings = (string2, string1) => {
    if (string2 > string1) return -1
    if (string2 < string1) return 1
    return 0
}
arr.sort(compare2Strings)
console.log("sort:", arr)

// reduce

arr = ['1', '2', '3', '4']
const sumReducer = (acc, cor) => {
    return acc + cor
}

console.log("reduce:", arr.reduce(sumReducer))

const myReduce = (arr, callback, initialValue) => {
    let i, acc;
    if (initialValue == null) {
        i = 1;
        acc = arr[0]
    } else {
        i = 0
        acc = initialValue
    }

    for (; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
    }

    return acc
}

arr = [1, 2, 3, 4]
console.log("myReduce:", myReduce(arr, sumReducer, 4))

arr = [
    ['a', 1],
    ['b', 2],
    ['c', 3]
]

let obj = {
    a: 1,
    b: 2,
    c: 3
}

// console.log("reduce:", arr.reduce((acc, cor) => {
//     acc[cor[0]] = cor[1]
//     return acc
// }, {}))

console.log("reduce:", arr.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
}, {}))

arr = [1, 2, 3, 4]
// let el0 = arr[0]
// let el1 = arr[1]
let [el0, el1] = arr
console.log(el0, el1)

let obj2 = {
    ...obj
}
obj2.a = 8
console.log(obj)

// Map
////////////

obj = {}
obj['a'] = 2
obj['a'] = 3

const map = new Map()

map.set('a', 'A')
map.set('b', "B")
map.set('c', 'C')

console.log(map.get('a'))

map.set('a', 'The letter A')

console.log(map.get('a'))

// for (let el of map) {
//     console.log(`key: ${el[0]}; value: ${el[1]}`)
// }

for (let [key, value] of map) {
    console.log(`key: ${key}; value: ${value}`)
}

console.log(map.has('a'))
console.log(map.has('g'))

console.log(map.size)

map.delete('a')

console.log(map.size)

console.log([...map])

console.log(map)
map.clear()
console.log(map)

// Set
let set = new Set()

set.add('a')
set.add('a')
set.add('b')
console.log(set)

let setArray = [...set]
console.log([...set])

set.delete('a')
console.log(set)

set.add('c')

for (let el of set) {
    console.log(el)
}

console.log(set.has('a'))

set.clear()
console.log(set)

set.add({
    name: 'michal'
})

set.add({
    name: 'michal'
})

console.log(set)

// object

obj = {
    name: 'shir',
    id: 'gcfyugiygui',
    phone: '6578587687'
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


arr = []
for (let key in obj) {
    console.log(key)
    arr.push(obj[key])
}

console.log(arr)


for (let [key, value] of Object.entries(obj)) {
    console.log(key, value)
}

let {
    name,
    id
} = obj

console.log(name, id)

name = 'ron'
id = "fyufguui"

obj = {
    name,
    id
}

console.log(obj)