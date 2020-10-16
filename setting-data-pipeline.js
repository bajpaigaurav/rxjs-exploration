

const {from} = require('rxjs')
const { tap, filter, map} = require('rxjs/operators')


// from used to create observable from array of values
const sourceArrayObservable$ = from([1,2,10,20,30,40]);

const dataPipeLine = sourceArrayObservable$.pipe(
    tap(val => console.log('value being passed',val)),
    filter(val => val > 2),
    map(val => val *2)
)

const subscribeToSouceArrayObservable = () => {
    return sourceArrayObservable$.subscribe( val => {
        console.log('from base observable',val)
    });
}

const subscribeToDataPipeline = () => {
    return dataPipeLine.subscribe( val => {
        console.log('from datapipeline', val)
    });
}

subscribeToDataPipeline();

console.log('Subscribing to base observable result ---->');

subscribeToSouceArrayObservable();

