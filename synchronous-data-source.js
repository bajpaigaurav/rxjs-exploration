

const { from } = require('rxjs')

const observable = from([10,20,30]);

observable.subscribe( val => {
    console.log('synchronously executing:',val)
});