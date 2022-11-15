/**
 * Todos
 *
 * STEG 1
 * Loopa över todos och för varje todo, skriv ut en
 * `<li class="list-group-item">` till #todos med titeln på todo:n.
 *
 * STEG 2
 * Koppla ihop formuläret så att det skapas en nytt TODO-objekt som
 * stoppas in i `todos`-array:en när formuläret submit:as.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 * STEG 3
 * När man klickar på en todo, hitta todo:n som klicket skedde på,
 * leta upp todo-objektet och ändra `completed` till `true`.
 * Glöm inte rendera ut den uppdaterade listan till DOM!
 *
 */

// list of todos
const todos = [
	{
		title: "Learn basic JavaScript",
		completed: false,
	},
	{
		title: "Learn DOM",
		completed: false,
	},
	{
		title: "Take over the world",
		completed: false,
	},
	{
		title: "Take over the universe",
		completed: false,
	},
];

// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

const todoList = () => {
	
	// Clear the DOM and renders the list
	todosEl.innerHTML = ``;

	todos.forEach(todoItem => {
		
		console.log('SKRIVER: ', todoItem.title);
		
		// Create the li element
		const liEl = document.createElement('li');
		liEl.className = 'list-group-item';
		liEl.textContent = todoItem.title;
		todosEl.append(liEl);
	});
}

// Start the function when the page loads
todoList();

// Push in a new object to the Todos list
newTodoFormEl.addEventListener('submit', (e) =>{
	
	e.preventDefault();
	
	console.log('Pushing the button');

	const newTodoItem = newTodoFormEl.newTodo.value;
	console.log(newTodoItem);

	todos.push( { title: newTodoItem, completed: false });

	todoList();

});

todosEl.addEventListener('click', (e) => {
	console.log(e.target.textContent);

	const selectItem = todos.find(({ title }) => title === e.target.textContent);
	console.log(selectItem);

	selectItem.completed = true;
	
	console.log(todos);

})