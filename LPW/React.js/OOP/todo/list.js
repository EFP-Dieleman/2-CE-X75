import Task from './task.js';

class List{

  constructor(status){
    this.status = status;
    this.tasks = [];
  }

  add(task){
    if (!(task instanceof Task))
      task = new Task(task);

    this.tasks.push(task);

    return task;
  }

  remove(task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task.isEqual(this.tasks[i])) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  done(task, list){
    task.status = 'done';
    list.add(task);
    this.remove(task);
  }
  // remove(task) {
  //    this.tasks = this.tasks.filter(t => !task.isEqual(t));
  // }

  render(){
    let html = '<ul data-status=' + this.status + ' data-count='+ this.tasks.length +'>';

    for(let task of this.tasks)
      html += '<li>' + task.render() + '</li>';
    html += '</ul>';

    return html;
  }
}

export default List;
