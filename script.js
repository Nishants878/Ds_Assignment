
//Q4 solution



class extending_stack {
    constructor() {
        this.counter = 0;
        this.store = {};
    }
    push(x) {
        this.store[this.counter] = x
        this.counter++
        return x;
    }
    pop() {
        if (this.counter === 0) {
            return "Kindly enter a value"
        }
        this.counter--
        let deleteItem = this.store[this.counter];
        delete this.store[this.counter];
        return deleteItem;
    }
    max() {
        if (this.counter === 0) {
            return "Kindly enter a value"
        }
        let maximum = this.store[0]
        for (let i in this.store) {
            if (this.store[i] > maximum) {
                maximum = this.store[i]
            }
        }
        return maximum
    }
}
 
let result = new extending_stack();
