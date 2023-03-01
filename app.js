const addForm = document.querySelector('.add');
const list = document.querySelector('.todos'); 
const search = document.querySelector('.search input');

const generateTodo = todo => {

  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;  

}

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); 

  if(todo.length){
    generateTodo(todo);
    addForm.reset(); // not lets user to submit blank or spaces 
  }
  
});


// delete todos

list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});

// function to filter todos

const filterTodos = (term) => {
  Array.from(list.children)
    // filter ones that do not match and add class filter to them
    .filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    // filter ones that match and remove class filter to them
    Array.from(list.children)
    .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};


// keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});