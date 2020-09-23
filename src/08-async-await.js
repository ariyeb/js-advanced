const asyncDivision = (dividend, divisor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (divisor === 0) {
                reject({
                    error: "cannot divide by 0",
                });
            } else {
                resolve(dividend / divisor);
            }
        }, 2000);
    });
};

const asyncPercentage = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num < 0) {
                reject({
                    error: "Percentage cannot be negative",
                });
            } else {
                resolve(num * 100);
            }
        }, 1500);
    });
};

const getPercentageOfDivison = async (num1, num2) => {
    try {
        const division = await asyncDivision(num1, num2)
        const percentage = await asyncPercentage(division)
        return percentage // resolve(percentage)
    } catch (err) {
        throw err
    }
}

getPercentageOfDivison(6, -10).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})