//待办事项1
const getToDoList = ({ $axios }, data) =>
  $axios.get(`/alm/postLoan/business/toDoList`, data);

export { getToDoList };
