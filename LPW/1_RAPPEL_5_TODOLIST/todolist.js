const todoList = document.getElementById('todo');
const doneList =  document.getElementById('done');

// reload everything from localStorage
const persistenceReload = () => {

  for ( var i = 0, len = localStorage.length; i < len; ++i ) {
    let key = localStorage.key(i);
    if(key == 'dones'){
      let dones = JSON.parse(localStorage.getItem(key));
      dones.forEach((label, index) => {
        doneList.appendChild(document.createElement('li').appendChild(createTaskContent(label)));
      });
    }
    else{
        todoList.appendChild(createListItem(localStorage.getItem(key),key));
    }
  }
}

// add to UI and storage
const addToDone = (label) =>{
  // add to UI
  doneList.appendChild(document.createElement('li').appendChild(createTaskContent(label)));

  // add to storage
  let dones = localStorage.getItem('dones');
  dones = dones == null ? [] : JSON.parse(dones);
  dones.push(label);
  localStorage.setItem('dones', JSON.stringify(dones));
}

// remove an item from todo, returns the label of the task
const removeFromTodo = (taskId) => {

    let task = document.getElementById(taskId);
    let taskLabel =  task.getElementsByClassName('task-content')[0].innerText;

    // remove from UI
    task.remove();

    // remove from storage
    localStorage.removeItem(taskId);

    // return label
    return taskLabel;
}

// create a todo list item  (li) with CTAs
const createListItem = (content, id) => {
  const li = document.createElement('li');
  li.setAttribute('id', id);
  li.appendChild(actionComplete());
  li.appendChild(createTaskContent(content));
  li.appendChild(actionModify());
  li.appendChild(actionDelete());

  return li;
}

// generates a new task id based on existing tasks
const newTaskId = () => {
  let ret = 0;

  if(todoList.lastChild !== null){
    ret = parseInt(todoList.lastChild.getAttribute('id'));
  }

  return ++ret;
}

// creates a span element to store the task label
const createTaskContent = (text) => {
  const ret = document.createElement('span');
  ret.classList.add('task-content');
  ret.textContent = text;

  return ret;
}

// create an actionnable to mark the task as completed
const actionComplete = () => {
  const ret = document.createElement('input');
  ret.setAttribute('type', 'checkbox');

  ret.addEventListener('click', (event) => {
    let taskId = event.target.parentNode.getAttribute('id');
    addToDone(removeFromTodo(taskId));
  })

  return ret;
}

// create an actionnable to open an edition modal
const actionModify = () => {
  const ret = document.createElement('button');

  ret.textContent = 'alter';
  ret.addEventListener('click', (event) =>{
      openModal(event);
  })

  return ret;
}

// creates as actionnable to remove the todo task
const actionDelete = () => {
  const ret = document.createElement('button');
  ret.textContent = 'delete';
  ret.addEventListener('click', (event) => {
      removeFromTodo(event.target.parentNode.id);
  })
  return ret;
}


const addToTodo = (label) => {
  let task_id = newTaskId(todoList);
  todoList.appendChild(createListItem(label, newTaskId(todoList)));
  localStorage.setItem(task_id, label);
}
//
const openModal = (event) => {
    const editModal = document.getElementById('edit-modal');
    const editInput = document.getElementById('edit-input');
    const task = event.target.parentNode;

    editInput.value = task.querySelector('span.task-content').textContent;

    document.getElementById('edit-form').addEventListener('submit', (event) => {
        event.preventDefault();

        document.getElementById(task.getAttribute('id')).querySelector('span.task-content').textContent = editInput.value;
        localStorage.setItem(task.getAttribute('id'), editInput.value);

        editModal.style.display = 'none';
    })

    editModal.style.display = 'flex';
}


persistenceReload();

document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const input_value = document.getElementById('new-task').value;
    if(input_value.length > 0){
        addToTodo(input_value);
    }
});
