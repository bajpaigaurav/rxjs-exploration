const { Observable } = require('rxjs')

const wrapArrayIntoObservable = arr => {
    return new Observable( subscriber => {

        for (let item of arr) {
            subscriber.next(item);
        }
    });
}

// creating data source 

let data = [10,20,30,40];

// directly subscribing to observable
wrapArrayIntoObservable(data).subscribe( value => console.log(value));

// creating an observable, subscribing twice

const observable = wrapArrayIntoObservable(data);

observable.subscribe( val1 => console.log('from 1st subscribtion',val1));

// modifying the souce - will reflect in second observable invocation
data.push(50)
data.push(60)
observable.subscribe( val2 => console.log('from 2nd subscription',val2));

const observableAfterModifying = wrapArrayIntoObservable(data);

observableAfterModifying.subscribe( val2 => console.log('After source modification',val2));



