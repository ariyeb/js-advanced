// import {
//     sum as sumOf,
//     mul
// } from './04-module-export.js'

import MyPerson, * as utils from './04-module-export.js'
// import _ from 'lodash'

console.log(utils.sum(3, 4))
console.log(utils.mul(5, 6))

let moshe = new MyPerson('moshe', "hjjkbjk")
console.log(moshe)

let array = [{
        name: 'moshe',
        id: 'lml;ml;lm'
    },
    {
        name: 'yair',
        id: 'l;'
    },
    {
        name: 'michal',
        id: '68769889'
    }
]

// let array2 = _.cloneDeep(array)
// array2[0].name = 'moshik'
console.log(array[0])

console.log(utils.returnSpecialNum())

import './04-module-run.js'

//צרו משחק איקס עיגול שחקן מול שחקן
// המשחק צריך להכיל מודול שאחראי על כל הדאטה והלוגיקה של המשחק
// המשחק מסתיים בניצחון או בתיקו כאשר לא נותרים תאים פנויים