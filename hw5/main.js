// Model => Retrieve, store, process data
// View => User interface
// Controller => Manage view and data & handle uers actions

const Api = (() => {
  // Fetch data from server
  const url = "https://jsonplaceholder.typicode.com/todos";
  const getData = fetch(url).then((res) => res.json());
  return {
    getData,
  };
})();

const View = (() => {
  const domStr = {
    container: ".todolist_container",
    inputBox: "#user-input",
    addBtn: "#addBtn",
    deleteBtn: ".deleteBtn",
  };
  // <button class="deleteBtn" data-index="${index}">delete</button>
  const creatTmp = (arr) => {
    let tmp = "";
    let index = 0;
    arr.forEach((todo) => {
      tmp += `<li>
      <span>${todo.title}</span>
      <button class="deleteBtn" data-index="${index}">delete</button>
      </li>`;
      index++;
    });
    return tmp;
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  return {
    domStr,
    creatTmp,
    render,
  };
})();

const Model = ((view, api) => {
  // const todos =[
  //   { title: 'Movie' },
  //   { title: 'Lunch' },
  //   { title: 'Homework' },
  //   { title: 'Take a nap' },
  // ];
  const { getData } = api;

  const { domStr, creatTmp, render } = view;

  class State {
    constructor() {
      this._todoList = [];
    }
    get getTodoList() {
      return this._todoList;
    }
    set newTodoList(arr) {
      this._todoList = arr;
      const todoContainer = document.querySelector(domStr.container);
      const tmp = creatTmp(this._todoList);
      render(todoContainer, tmp);
    }
  }

  return {
    // todos,
    getData,
    State,
  };
})(View, Api);

const Controller = ((view, model) => {
  const { getData, State } = model;
  const { domStr } = view;

  const state = new State();
  const init = () => {
    return getData.then((data) => {  // let init() returns a promise so that deleteTodo() can be called after getData done.
      state.newTodoList = data;
    });
  };

  // Add event listener
  const addTodo = () => {
    const userInput = document.querySelector(domStr.inputBox);
    const btn = document.querySelector(domStr.addBtn);
    btn.addEventListener("click", () => {
      let item = {
        title: userInput.value,
      };
      const newTodos = [item, ...state.getTodoList];
      state.newTodoList = newTodos;
      userInput.value = "";
    });
  };

  const deleteTodo = () => {
    // This will only work once if adding event listener to each button, since after delete once, createTmp will create new buttons and this eventlistener will not work anymore
    // const btnList = document.querySelectorAll("domStr.deleteBtn");
    // btnList.forEach((btn) => {
    //   btn.addEventListener("click", (event) => {
    //     const index = event.target.getAttribute("data-index");
    //     console.log(index, state.getTodoList[index])
    //     const newTodoList = state.getTodoList.filter((_, i) => i !== +index)
    //     state.newTodoList = newTodoList;
    //   });
    // })
    // console.log(btnList)

    // Instead we can add just one eventlistener to the todolist_container
    const todoContainer = document.querySelector(domStr.container);
    todoContainer.addEventListener("click", (event) => {
      if (event.target.className === "deleteBtn") {
        const index = event.target.getAttribute("data-index");
        const newTodoList = state.getTodoList.filter((_, i) => i !== +index);
        state.newTodoList = newTodoList;
      }
    });
  };

  const bootstrap = () => {
    init().then(() => {
      deleteTodo();
    });
    addTodo();
  }

  return {
    bootstrap
  }
})(View, Model);

Controller.bootstrap();