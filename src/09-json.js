let moshe = {
    name: 'moshe',
    id: 'hjvjkhkkl',
    age: 20,
    isMale: true,
    brothers: ['dan', 'shir']
}

const mosheJson = JSON.stringify(moshe)

console.log(mosheJson)
console.log(mosheJson.name)
console.log(mosheJson[2])

const backtoObject = JSON.parse(mosheJson)
console.log(backtoObject.name)