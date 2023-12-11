/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(t*1000);
        }, t*1000);
    })

}

function wait2(t) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(t*1000);
        }, t*1000);
    })
}

function wait3(t) {

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(t*1000);
        }, t*1000);
    })
}

// async function calculateTime(t1, t2, t3) {

//         const p1 = wait1(t1);
//         const p2 = wait1(t2);
//         const p3 = wait1(t3);

//         return Promise.all([p1,p2,p3]).then((res)=>{
//              return Math.max(...res)
//         })
// }


function calculateTime(t1, t2, t3) {

            const start = new Date().getTime();
            return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then((res)=>{
                const end = new Date().getTime();
                return end-start;
            })
    }



module.exports = calculateTime;
