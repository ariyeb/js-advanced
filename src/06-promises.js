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
