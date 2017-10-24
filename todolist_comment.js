/*eslint-disable */
(function() {
  var todos; // 데이터 입력시 사용할 데이터 배열을 위한 변수 선언

  var inputTodo = document.getElementById('input-todo'); // Dom방식으로 HTML의 input태그의 ID를 참조해서 해당 요소를 선택
  var todoList = document.getElementById('todo-list'); // Dom방식으로 HTML의 UL태그의 ID를 참조해서 해당 요소를 선택

  var render = function() { //render 함수 선언, render함수는 데이터 입력 또는 삭제에 따라 데이터를 수정해줌 ?????
    var html = ''; // todo 리스트에 추가 생성 되는 li 요소에 삽입 될 html  태그 내용을 담을 변수 선언

    todos.forEach(function(todo) { // todos란 변수명의 배열로 이뤄진 데이터를 이용하여 생성할 html 태그 생성 하는 함수 선언???
      var checked = todo.completed ? 'checked' : ''; // checked변수에 매개변수 todo(todos배열)의 completed 프로퍼티에 대한 삼항 조건문 값을 참조

      // 반복문으로 생성 할 HTMl 태그 모음
      html += '<li class="list-group-item"> \
        <div class="hover-anchor"> \
          <a class="hover-action text-muted"> \
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span> \
          </a> \
          <label class="i-checks" for="' + todo.id + '"> \
            <input type="checkbox" id="' + todo.id + '"' + checked + '><i></i> \
            <span>' + todo.content + '</span> \
          </label> \
        </div> \
      </li>';
    });

    todoList.innerHTML = html; // dom 방식으로 선택한 ul 테그에 새로운 html 태그 모음 삽입
  };

  var lastTodoId = function() { // 브라우져 입력 창에 기입 후 생성될 리스트 데이터의 id 값을 생성해주는 함수 / 새로운 id값은 가장 커야 함
    return todos ? Math.max.apply(null, todos.map(function(todo) {
      return todo.id;
    })) + 1 : 1; // 입력 시접의 todos 변수명의 데이터 리스트가 있으면 그 리스트들의 id 값을 전부 추출 후 가장 큰값에 + 1한 값을 리턴하고, 아니면 id값은 1
  };

  var getTodos = function() { // Load이벤트 발생 시 리스트 생성 하는 함수 
    todos = [ // 랜더 함수에 사용할 데이터 값 정의
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'Javascript', completed: false }
    ];
    render(); // 랜더 함수 실행
    console.log('[GET]\n', todos);
  };

  var addTodo = function() { // keyup이벤트 발생시 추가 시킬 데이터 배열 생성 함수
    var content = inputTodo.value;
    inputTodo.value = '';

    if (!todos) {
      todos = [{ id: 1, content, completed: false }];
    } else {
      todos = [{ id: lastTodoId(), content, completed: false }].concat(todos);
      // todos = [{ id: lastTodoId(), content, completed: false }, ...todos];
    }

    render();
    console.log('[ADD]\n', todos);
  };

  var removeTodo = function(id) {
    todos = todos.filter(function(todo) {
      return todo.id != id;
    });
    render();
    console.log('[REMOVE]\n', todos);
  };

  var toggleTodoComplete = function(id) {
    todos = todos.map(function(todo) {
      return todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    render();
    console.log('[TOGGLE-COMP]\n', todos);
  };

  //   load 이벤트는 모든 리소스(image, script, css 등) 의 로드가 완료하면 발생한다.
  window.addEventListener('load', function() { // Load이벤트, 브라우져 load즉시 발동 하는 이벤트
    getTodos(); //getTodos함수를 호출하여 브라우져에 표시할 리스트 생성 및 html에 삽입
  });

  inputTodo.addEventListener('keyup', function(e) {
    if (e.keyCode !== 13 || inputTodo.value === '') return;
    addTodo();
  });

  todoList.addEventListener('change', function(e) {
    toggleTodoComplete(e.target.id);
  });

  todoList.addEventListener('click', function(e) {
    var target = e.target;
    if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') return;
    removeTodo(target.dataset.id);
  });
}());