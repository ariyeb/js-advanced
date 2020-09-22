const PersonMaker = function (name, theId) {
    this.name = name
    let id = theId
    PersonMaker.personsCount++

    this.getId = function () {
        return id
    }

    this.setId = function (newId) {
        id = newId
    }

    this.toString = function () {
        return `name: ${this.name}; id: ${id}`
    }
}
PersonMaker.personsCount = 0
PersonMaker.getPersonsCount = function () {
    return this.personsCount
}
PersonMaker.setPersonsCount = function (count) {
    this.personsCount = count
}

console.log(PersonMaker.prototype)
// PersonMaker.prototype.toString = function () {
//     return `name: ${this.name}; id: ${this.id}`
// }
console.log(PersonMaker.prototype)

let moshe = new PersonMaker('moshe', "gchgvhj")
console.log(moshe.toString())
console.log(moshe)
console.log(moshe.hasOwnProperty('toString'))

moshe.setId('123456')
console.log(moshe.toString())
let shir = new PersonMaker('shir', '7786876')
console.log(PersonMaker.personsCount)
PersonMaker.setPersonsCount(77)
console.log(PersonMaker.getPersonsCount())

// ירושה

function ChessPiece(isBlack) {
    this.isBlack = isBlack
}

ChessPiece.prototype.toString = function () {
    return this.isBlack ? "B" : "W"
}

function Pawn(isBlack, isDoneFirstMove) {
    ChessPiece.call(this, isBlack)
    this.isDoneFirstMove = isDoneFirstMove
}
Pawn.prototype = Object.create(ChessPiece.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Pawn,
        writable: true
    }
})

Pawn.prototype.toString = function () {
    return ChessPiece.prototype.toString.call(this) + "P"
}

let pawn = new Pawn(true, false)
console.log(pawn.toString())
console.log(pawn instanceof Pawn)
console.log(pawn instanceof ChessPiece)

//  תרגיל צרו מחלקה של מלבן עם פונקציות של החזרת היקף ושטח ותוסטרינג
// צרו מחלקה של ריבוע שיורשת מהמחלקה של המלבן ומקיימ את כל הפונקציות

function Rectangle(width, height) {
    this.width = width
    this.height = height
}

Rectangle.prototype.getArea = function () {
    return this.width * this.height
}

Rectangle.prototype.getPeimeter = function () {
    return (this.width + this.height) * 2
}

Rectangle.prototype.toString = function () {
    return `Rectangle - width: ${this.width}; height: ${this.height}`
}

function Square(sideLength) {
    this.sideLength = sideLength
    Rectangle.call(this, sideLength, sideLength)
}

Square.prototype = Object.create(Rectangle.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Square,
        writable: true
    }
})

Square.prototype.toString = function () {
    return `Square - side length: ${this.sideLength}`
}

const square = new Square(3)
console.log(square.toString(), square.getArea(), square.getPeimeter())