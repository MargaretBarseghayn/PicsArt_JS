function createStack(){
    let stack = [];
    return {
        isEmpty: ()=>{return stack.length === 0},
        size: () =>{
            return stack.length;
        },
        peek: ()=>{return stack[stack.length - 1]},
        pop: ()=>{
            return stack.pop();

        },
        push: (...element)=>{
            stack.push(...element)
        },
        print: ()=>{
            for (let i = stack.length - 1; i >= 0; --i)
                console.log(`top = ` + stack[i]);
        }
    }
}

function createQ(){
    let stack1 = createStack(),
        stack2 = createStack();
    return {
        isEmpty: ()=>{
            return stack1.size() === 0 && stack2.size() === 0;
        },
        enqueue: (element)=> {
            while (stack2.size() > 0){
                stack1.push(stack2.pop())
            }
            stack1.push(element)
        },
        dequeue: ()=>{
            while (stack1.size() > 0){
                stack2.push(stack1.pop())
            }
            return stack2.pop();
        },
        peek: ()=>{
            while (stack1.size() > 0){
                stack2.push(stack1.pop())
            }
            return stack2.peek();
        }
    }
}

let q = createQ();
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log('peek',q.peek())
console.log(q.dequeue())
q.enqueue(5);
q.enqueue(10)
q.enqueue(20)
console.log(q.dequeue());
 console.log('peek',q.peek())
// console.log(q.peek())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.isEmpty());
