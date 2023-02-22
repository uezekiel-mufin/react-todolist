import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todosProps, handleChange, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
    ))}
  </ul>
);

export default TodoList;
TodoList.propTypes = {
  todosProps: PropTypes.arrayOf.isRequired,
  delTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
