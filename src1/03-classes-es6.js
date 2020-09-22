class Person {
    // name = 'ploni'
    // id
    static personsCount = 0
    constructor(name, id) {
        this._name = name
        this.id = id
        Person.personsCount++
    }

    toString() {
        return `Name: ${this.name}; id: ${this.id}`
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }

    get stam() {
        return this.id + "stam"
    }

    static getPersonsCount() {
        return this.personsCount
    }
}

let moshe = new Person('moshe', 'hkjklnkllk')
console.log(moshe.toString())
moshe.name = 'moshik'
console.log(moshe.name)
moshe._name = "yehoshua"
console.log(moshe.name)

console.log(moshe.stam)
let dan = new Person('dan', "hgkjk")
console.log(Person.getPersonsCount())

class Student extends Person {
    constructor(name, id, subject) {
        super(name, id)
        this.subject = subject
    }

    toString() {
        return super.toString() + `; subject: ${this.subject}`
    }
}

let yaron = new Student('yaron', "hjvhjbk", "math")
console.log(yaron.toString())

// תרגיל צרו מחלקות של מצולע, מלבן וריבוע
//  מחלקת מצולע מכילה שם ומספר צלעות ואורכי כל הצלעות
// מחלקת מלבן מכילה את הגובה והרוחב של המלבן
// ומחלקת ריבוע מכילה את אורך הצלע
// מחלקת ריבוע יורשת ממלבן ומחלקת מלבן יורשת ממצולע
// המחלקות יכילו פונקציות של היקף, שטח ותוסטרינג בהתאמה לסוגן
// אם יש אפשרות להשתמש בפונקציות של מחלקה מורישה יש להשתמש בהן
// במחלקת מצולע יש להגדיר את כל השדות כ-נאלל ואת שם המצולע כ
// Imposible shape
// אם הנתונים שהוכנסו לתוכו לא מסוגלים ליצור מצולע
// יש להתייחס לאפשרות זו בפונקציית תוסטרינג של כל המחלקות

class Polygon {
    constructor(name, sidesCount, ...sidedsLength) {
        this.name = name
        this.sidesCount = sidesCount
        this.sidedsLength = sidedsLength

        let totalLength = this.perimeter
        for (let side of sidedsLength) {
            if (side > totalLength - side || side <= 0) {
                this.name = "Imposible shape"
                this.sidesCount = null
                this.sidedsLength = null
                break
            }
        }
    }

    get perimeter() {
        return this.sidedsLength.reduce((acc, cor) => acc + cor)
    }

    toString() {
        if (!!this.sidedsLength) {
            return `${this.name} - sides count: ${this.sidesCount}; perimeter: ${this.perimeter}`
        }

        return this.name
    }
}

class Rectangle extends Polygon {
    constructor(width, height) {
        super('Rectangle', 4, width, width, height, height)
        this.width = width
        this.height = height
    }

    get area() {
        return this.width * this.height
    }

    toString() {
        if (!!this.sidedsLength) {
            return super.toString() + `;area: ${this.area}; width: ${this.width}; height: ${this.height}`
        }

        return 'Not a rectangle'
    }
}


class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength)
        this.name = 'Square'
        this.sideLength = sideLength
    }

    toString() {
        if (!!this.sidedsLength) {
            const parts = super.toString().split(";")
            return parts[0] + ";" + parts[1] + ";" + parts[2] + `; side length: ${this.sideLength}`
        }

        return 'Not a square'
    }
}

let polygon = new Polygon('triangle', 3, 2, 67, 3)
let rectangle = new Rectangle(-5, 4)
let square = new Square(-5)

console.log(polygon.toString())
console.log(rectangle.toString())
console.log(square.toString())