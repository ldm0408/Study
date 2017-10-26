let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

var ids = todos.map(function(todo) {
  return todo.id;
});
console.log(ids);

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

var maxValue = Math.max.apply(null, ids);
console.log(maxValue);

// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

var addTodo = function(todo) {
  return todos = [{ id: 4, content: 'Test', completed: false }].concat(todos);
};
console.log(addTodo());

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
var removeTodo = function(id) {
  return todos.filter(function(todo) {
    return todo.id !== id;
  });
};
todos = removeTodo(4);
console.log(removeTodo(4));
console.log(todos);

// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: ture },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];
var compValue = function(id) {
  todos = todos.map(function(todo) {
    return todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
  return todos
};

console.log(compValue(3));

// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: ture },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: ture }
// ];