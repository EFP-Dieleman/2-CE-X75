import Task from './task.js';
import List from './list.js';

class EventManager{
  constructor(todos, dones)
  {
    this.dones = dones;
    this.todos = todos;
  }

  render(){
    let html = this.todos.render();
    html += this.dones.render();

    return html;
  }

  renderIn(elt){
    elt.innerHTML=this.render();
  }

  ready(){
    for(let task of this.todos.tasks){
      document.getElementById(task.id).addEventListener('click', () => {
        this.todos.done(task, this.dones);
        this.renderIn(document.getElementById('root'));
      });
    }
  }

}

export default EventManager;
