let specialNum = 5

export const returnSpecialNum = () => {
    return specialNum
}


export const sum = (num1, num2) => {
    return num1 + num2
}

export const mul = (num1, num2) => {
    return num1 * num2
}

export default class Person {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
}

const stam = new Person('gfvhjgj', 'uyfy')
stam.id = '7868698'

// export * as utils from './04-module-export.js'