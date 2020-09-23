const throwError1 = () => {
    const error = new Error('Error1')
    error.name = 'stamError'
    throw error

    // throw new Error('Error1')
}

// throwError1()

const division = (dividend, divisor) => {
    if (divisor === 0) {
        throw new Error('cannot divide by 0')
    }
    return dividend / divisor
}

// console.log(division(4, 0))

const throwError2 = () => {
    const error = new Error('error2')
    error.name = 'Error2'
    error.date = new Date()

    throw error
}

// throwError2()

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CustomError'
        this.date = new Date()
    }
}
const throwError3 = () => {
    throw new CustomError('my custom error')
}

// throwError3()

const throwError4 = () => {
    throw {
        name: 'Error4',
        message: 'error4 message',
        date: new Date()
    }
}
// throwError4()

// try catch

try {
    throwError1()
    throwError3()
} catch (err) {
    console.log(err.name)
} finally {
    console.log('finally!!!')
}