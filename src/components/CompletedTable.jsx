import PropTypes from "prop-types";
import "./CompletedTable.css";

const CompletedTable = ({ completedTodos }) => {
  return (
    <div className="completed-table">
      <h2>Completed Tasks</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {completedTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.text}</td>
                <td>Done</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

CompletedTable.propTypes = {
  completedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default CompletedTable;
