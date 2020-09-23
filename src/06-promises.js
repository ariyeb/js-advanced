const asyncPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
      reject({
        error: "ERROR!!!",
      });
    } else {
      resolve({
        name: "natan",
        id: "jgjkbkjhjkhk",
      });
    }
  }, 2000);
});

// asyncPromise.then(
//     (res) => {
//         console.log('asyncPromise data:', res)
//     },
//     (err) => {
//         console.log('asyncPromise error:', err)
//     }
// )

asyncPromise
  .then((res) => {
    console.log("asyncPromise data:", res);
  })
  .catch((err) => {
    console.log("asyncPromise error:", err);
  });

// תרגיל: צרו פונקציה אסיכרונית שמחזירה תוצאה של חילוק שני מספרים בצורה של פרומיס
// והדגימו את פעולתה
// בפונקציה יש התייחסות לשגיאות

// asyncDivision(6, 10).then(
//     (res) => {
//         console.log('asyncDivison result:', res)
//     },
//     (err) => {
//         console.log('asyncDivison error:', err)
//     }
// )

// צרו פונקציית המרה לאחוזים אסינכרונית בצורה של פרומיס
// והפעילו אותו על התוצאה של פונקציית החלוקה האסינכרונית
// עם התייחסות לשגיאות

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

// asyncDivision(6, 10).then(
//     (divRes) => {
//         asyncPercentage(divRes).then((res) => {
//             console.log('asyncPercentage:', res)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }
// ).catch((err) => {
//     console.log(err)
// })

// שרשור פרומיסים

asyncDivision(6, 10)
  .then((res) => {
    return asyncPercentage(res);
  })
  .then((res) => {
    console.log("asyncPercentage:", res + "%");
  })
  .catch((err) => {
    console.log(err);
  });

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p1 error')
    resolve('p1')
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 error')
    resolve('p2')
  }, 500)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('p3 error')
    resolve('p3')
  }, 1500)
})

// Promise.race([p1, p2, p3]).then((res) => {
//   console.log('race res:', res)
// }).catch((err) => {
//   console.log('race err:', err)
// })

const myPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      promise.then(
        (res) => {
          return resolve(res)
        },
        (err) => {
          return reject(err)
        }
      )
    }
  })
}

// myPromiseRace([p1, p2, p3]).then((res) => {
//   console.log('myRace res:', res)
// }).catch((err) => {
//   console.log('myRace err:', err)
// })

// Promise.all([p1, p2, p3]).then((res) => {
//   console.log('all res:', res)
// }).catch((err) => {
//   console.log('all err:', err)
// })

const myPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    let results = []
    let resultsCount = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (res) => {
          results[i] = res
          // results.push(res) // לא לפי הסדר
          resultsCount++
          if (resultsCount === promises.length) {
            return resolve(results)
          }
        },
        (err) => {
          return reject(err)
        }
      )
    }
  })
}

myPromiseAll([p1, p2, p3]).then((res) => {
  console.log('my all res:', res)
}).catch((err) => {
  console.log('my all error:', err)
})


// צרו פונקציה שמקבלת מערך של פרומיסים
// ומחזירה מערך של אובייקטים של תוצאות לפי הסדר של המערך הראשון 
// result
// {
//     status: "fulfilled",
//     value: result
// }

// error
// {
//     status: "rejected",
//     reason: error
// }

const myPromiseAllSettled = (promises) => {
  return new Promise((resolve) => {
    let results = []
    let resultsCount = 0
    const resolveResults = () => {
      resultsCount++
      if (resultsCount === promises.length) {
        resolve(results)
      }
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (res) => {
          results[i] = {
            status: "fulfilled",
            value: res
          }

          resolveResults()
        },
        (err) => {
          results[i] = {
            status: "rejected",
            reason: err
          }

          resolveResults()
        }
      )
    }
  })
}


// myPromiseAllSettled([p1, p2, p3]).then((res) => {
//   console.log('myPromiseAllSettled res:', res)
// })


// צרו פונקציה שמקבלת מערך של פרומיסים
// אם ישנה תוצאה היא מחזירה את אותה תוצאה כפרומיס 
// ואם לא היא מחזירה מערך של שגיאות לפי סדר הפרומיסים

const myPromiseAny = (promises) => {
  return new Promise((resolve, reject) => {
    let errors = []
    let errorsCount = 0

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        (res) => {
          return resolve(res)
        },
        (err) => {
          errors[i] = err
          errorsCount++
          if (errorsCount === promises.length) {
            return reject(errors)
          }
        }
      )
    }
  })
}

myPromiseAny([p1, p2, p3]).then((res) => {
  console.log('any res:', res)
}).catch((err) => {
  console.log('any err', err)
})