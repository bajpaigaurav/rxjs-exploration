const {from} = require('rxjs');

const observable$ = from ( new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('its all good')}, 3000)
    })
)

observable$.subscribe( val => {
    console.log(val);
})

console.log('normal execution continues !!')