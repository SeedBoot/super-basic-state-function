const { store, componentStore } = require('./store');



const myStore = store({ count: 0 });

function counter(store) {
    const { getProps, setProps } = componentStore(store);

    function increment(amount) {
        store.setState({
            'count': getProps().count + amount
        });
        setProps();
    }

    return {
        getProps,
        increment,
    }
}

const myCounter = counter(myStore);

console.log(myCounter.getProps());

myCounter.increment(1);
console.log(myCounter.getProps());

myCounter.increment(1);
console.log(myCounter.getProps());