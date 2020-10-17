const {Subject} = require('rxjs')

const {map} = require('rxjs/operators')

const mySubject = new Subject();

// publish the data to subs
const addData = d => {
    mySubject.next(d);
}

const consumeData = () => {
    return mySubject.pipe(
        map( val => {
            return 'value from Subject-'+val
        })
    )
}

const producers = {
    produce1 : () => addData(1),
    produce2 : () => addData(2),
    produce3 : () => addData(3)
}

const consumers = {
    consumer1 : () => {
        consumeData().subscribe( val => {
            console.log('value from 1st consumer-', val);
        });
    },
    consumer2 : () => {
        consumeData().subscribe( val => {
            console.log('value from 2nd consumer-', val);
        });
    },
    consumer3 : () => {
        consumeData().subscribe( val => {
            console.log('value from 3rd consumer-', val);
        });
    }
}
// setting consumers first as subject does not stores
// previously emitted data for new subscribers
consumers.consumer1();
consumers.consumer2();
consumers.consumer3();

producers.produce1();
producers.produce2();
producers.produce3();

