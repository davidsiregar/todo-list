let data_todo_list = [];

let showTodo = document.getElementById("show-todo");
let addTodoList = () => {
	let todoInput = document.getElementById("todo-input");

	if (!todoInput.value) {
		alert("please fill the box input");
	} else {
		const d = new Date();
		const todo = {
			id: Date.now(),
			description: todoInput.value,
			isDone: false,
		};

		data_todo_list.push(todo);
		renderTodoList();
		todoInput.value = "";
	}
};

let doneTodoList = (id) => {
	for (let i = 0; i < data_todo_list.length; i++) {
		if (data_todo_list[i].id === id) data_todo_list[i].isDone = true;
	}
	renderTodoList();
};

let deleteTodo = (id) => {
	for (let i = 0; i < data_todo_list.length; i++) {
		if (data_todo_list[i].id === id) {
			data_todo_list.splice(i, 1);
		}
	}
	renderTodoList();
};
let renderTodoList = () => {
	let todoElement = "";

	if (data_todo_list.length < 1) {
		todoElement += `<img src="./img/43029.jpg" class="img-todo" alt="" id="img-todo">`;
	} else {
		for (td of data_todo_list) {
			const { id, description, isDone } = td;
			let btnDone = `<button type="button" onclick="doneTodoList(${id})" class="btn-done">Done</button>`;

			let textSuccess = "";
			if (isDone) {
				btnDone = "";
				textSuccess = "text success";
			}

			todoElement += `<div class="todos">
		<p class="todo-name text-center ${textSuccess}">${description} </p>
		<div class="todo-isdone">${btnDone}
		
		<button type="button" class="btn-delete" onclick="deleteTodo(${id})">X</button>
		</div>
		</div>`;
		}
	}
	showTodo.innerHTML = todoElement;
};

renderTodoList();
