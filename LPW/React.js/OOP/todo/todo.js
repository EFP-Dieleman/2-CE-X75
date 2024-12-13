import Task from './task.js';
import List from './list.js';
import EventManager from './eventmanager.js';

let todos = new List('todo');
let dones = new List('done');
let manager = new EventManager(todos, dones);


let t = new Task('Tester');
console.log(t);

todos.add(t);
todo = todos.add('Encore');

todos.done(todo, dones);
console.log(todos, dones);

let root = document.getElementById('root');
console.log(root);
manager.renderIn(root);

manager.ready();
