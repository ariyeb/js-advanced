let str = "  string  "

console.log(str[3])
console.log(str.charCodeAt(3))

console.log(str.trim().toUpperCase().toLowerCase())

// תרגיל: כתבו פונקציה שבודקת האם סטרינג מסויים נמצא בתוך סטרינג אחר,
// החל מנקודה מסויימת שאם היא לא מסופקת אז מתחילים באפס

const myIncludes = (str, strSearched, position = 0) => {
    let i2 = 0
    for (let i = position; i < str.length; i++) {
        if (str[i] !== strSearched[i2]) {
            i2 = 0;
            continue
        }

        if (i2 === strSearched.length - 1) {
            return true
        }

        i2++
    }

    return false
}

console.log(myIncludes("lokking for the fox", "fox"))
console.log("lokking for the fox".includes('fox'))


// indexOf

const myIndexOf = (str, strSearched, position = 0) => {
    let i2 = 0
    for (let i = position; i < str.length; i++) {
        if (str[i] !== strSearched[i2]) {
            i2 = 0;
            continue
        }

        if (i2 === strSearched.length - 1) {
            return i - i2
        }

        i2++
    }

    return -1
}

console.log("lokking for the fox".indexOf('fox'))
console.log(myIndexOf("lokking for the fox", 'fox'))

// "lokking for (fox) the fox  fox"
const myLastIndexOf = (str, strSearched, position = 0) => {
    let i2 = strSearched.length - 1
    for (let i = str.length - 1; i >= position; i--) {
        if (str[i] !== strSearched[i2]) {
            i2 = strSearched - 1;
            continue
        }

        if (i2 === 0) {
            return i
        }

        i2--
    }

    return -1
}

console.log(myLastIndexOf("lokking for (fox) the fox  fox", 'fox'))
console.log("lokking for (fox) the fox  fox".lastIndexOf('fox'))

// צרו פונקציה שמקבלת נקודת התחלה וסוף ומחזירה חתיכה מהמחרוזת לפי נקודת אלו
// אם נקודת ההתחלה לא כלולה אז מתחילים מתחילת הסטרינג 
// ואם נקודת הסוף איננה כלוללה אז חותכים עד סוף הסטרינג
const mySlice = (str, startIndex = 0, endIndex = str.length - 1) => {
    if (startIndex > str.length - 1) return ""

    let result = ""
    for (let i = startIndex; i < endIndex && i < str.length - 1; i++) {
        result += str[i]
    }
    return result
}

console.log(mySlice("lokking for (fox) the fox  fox", 1, 5))
console.log("lokking for (fox) the fox  fox".slice(1, 5))

// כתבו פונקציה שמחזירה את מספר הפעמים שסטרינג כלול בתוך סטרינג
// באופן רגיל ורקורסיבי

const substringCounter = (str, subString) => {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        i = str.indexOf(subString, i)

        if (i === -1) break

        result++
    }

    return result
}

console.log(substringCounter("lokking for (fox) the fox  fox", "fox"))

const subStringCounterRecursive = (str, subString) => {
    let i = str.indexOf(subString)
    if (i === -1) return 0

    return 1 + subStringCounterRecursive(str.slice(i + 1), subString)
}

console.log(subStringCounterRecursive("lokking for (fox) the fox  fox", "fox"))

console.log("Hello ".concat("World", "!"))

const myReplace = (str, strToReplace, strReplacemant) => {
    const startIndex = str.indexOf(strToReplace)
    if (startIndex === -1) return str

    const endIndex = startIndex + strToReplace.length
    return str.slice(0, startIndex).concat(strReplacemant, str.slice(endIndex))
}

console.log(myReplace("lokking for (fox) the fox  fox", "fox", "cat"))
console.log("lokking for (fox) the fox  fox".replace("fox", "cat"))

// const myReplaceAll(str, strToReplace, strReplacemant)

// const myReplaceAll = (str, strToReplace, strReplacemant) => {
//     while (str.includes(strToReplace)) {
//         str = str.replace(strToReplace, strReplacemant)
//     }

//     return str
// }

// console.log(myReplaceAll("lokking for (fox) the fox  fox", "fox", "cat"))

// const myReplaceAllrecursive = (str, strToReplace, strReplacemant) => {
//     if (!str.includes(strToReplace)) return str

//     return myReplaceAllrecursive(
//         str.replace(strToReplace, strReplacemant),
//         strToReplace,
//         strReplacemant
//     )
// }

// console.log(myReplaceAllrecursive("lokking for (fox) the fox  fox", "fox", "cat"))

// צרו פונקציה שמקבלת מחרוזת ומפריד
// אם המפריד הוא לא מוגדר אז הפונקציה מחזריה מערך שבתוכו אלמנט אחד המחרוזת
// אם המפריד הוא מחרוזת ריקה הפונקציה מחזירה מערך של כל התוים של המחרוזת
// אם המפריד לא מחרוזת ריקה הפונקציה מחזירה מערך של קטעי המחרוזת ללא המפריד אם המפריד קיים בתוך המחרוזת
// a b c d
// ['a b c d']
// ['a', ' ', 'b'.]
// // ['a b', ' d']

const mySplit = (str, separtor) => {

    if (separtor == null) return [str]

    let result = []

    if (separtor.length > 0) {
        while (str.includes(separtor)) {
            let i = str.indexOf(separtor)

            let slice = str.slice(0, i)
            if (slice.length > 0) {
                result.push(slice)
            }

            str = str.slice(i + separtor.length)
        }
        result.push(str)
    } else {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i])
        }
    }

    return result
}

console.log('mySplit:', mySplit('a b c d', "g"))

const mySplitRecursive = (str, separator) => {
    if (separator == null) {
        return [str]
    }

    if (separator.length > 0) {
        let i = str.indexOf(separator)
        if (i === -1) {
            return [str]
        }

        const slice = str.slice(0, i)
        str = str.slice(i + separator.length)

        return [slice].concat(mySplitRecursive(str, separator))
            .filter(str => str !== "")
    }

    if (str.length === 1) {
        return [str]
    }
    const slice = str.slice(0, 1)
    str = str.slice(1)
    return [slice].concat(mySplitRecursive(str, separator))
}

console.log('mySplitRecursive:', mySplitRecursive('a b c d'))

// console.log("split:", 'a b c d'.split('a'))

const stringEnumeratoins = (str) => {
    let strChars = str.split('')
    let enumerations = new Set()

    const getEnumerations = (chars, enumeratin) => {
        if (chars.length === 0) {
            enumerations.add(enumeratin) //תנאי עצירה
        } else {
            for (let i = 0; i < chars.length; i++) {
                let newChars = [...chars]
                let char = newChars.splice(i, 1) //     
                let newEnumeration = enumeratin + char // 
                console.log(newEnumeration, newChars)
                getEnumerations(newChars, newEnumeration)
            }
        }
    }
    console.log(strChars)
    getEnumerations(strChars, "")

    return [...enumerations]
}

console.log(stringEnumeratoins('abc'))


// תרגיל: צרו אתר של ספר טלפונים
// באתר ניתן להוסיף שם וטלפון - שם יכול להופיע רק פעם אחת
// אם בטלפון יש רווח מופיעה הודעת שגיאה שהטלפון לא יכול לכלול רווח כאשר לוחצים על סאבמיט
// אם בטלפון יש מקף הוא נמחק כאשר מכניסים אותו לתוך מאגר המידע

// השמות והטלפונים מוצגים אחד מתחת לשני כאשר לצד כל רשומה יש כפתור למחיקה

// יש שדה חיפוש שכאשר מקלידים בו הוא מציג את כל הרשומות שהשם מכיל את ערך החיפוש
//   .יש שדה סלקט שבו ניתן לקבוע האם לסדר את הרשומות מלמטה למעלה או להיפך.