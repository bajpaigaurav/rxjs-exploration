const { Observable} = require('rxjs');
const { filter, map, tap } = require('rxjs/operators');

const dataArray = [10,20,30,40,50];

// taking an static array -> adding settimeout to trigger the event post a delay
const observable$ = arr => {
    return new Observable ( subscriber => {
        subscriber.next(arr[0]);
        for(let i of arr.slice(1)) {
            setTimeout(() => { subscriber.next(i)},200);
        }
    });
} 

const arrayBaseObservable = observable$(dataArray);

// calling base observable 

arrayBaseObservable.subscribe(
    val => {
        console.log('from base observable:', val);
    });

// adding a datapipeline

// const dataPipeline = arrayBaseObservable.pipe(
//     tap((val) => { console.log('value being processed:',val)}),
//     filter((val) => { val > 20}),
//     map(val => val * .5)
// )

// dataPipeline.subscribe(
//     (val) => {
//         console.log('from data pipeline',val);
//     }
// )