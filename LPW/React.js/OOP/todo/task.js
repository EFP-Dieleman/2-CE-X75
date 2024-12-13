
class Task{

  static index = 1;

  constructor(label){
    this.id = Task.index++;
    this.label = label;
    this.status = 'todo';
    this.createdOn = new Date();
    this.createdOn = this.createdOn.toLocaleString();
  }

  edit(label){
    this.label = label;
  }

  isEqual(task) {
    return task.id === this.id;
  }

  render(){
    return '<span id="'+this.id+'" data-created="' + this.createdOn + '">' + this.label + '</span>';
  }
}

export default Task;
