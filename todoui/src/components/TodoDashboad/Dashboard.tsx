import TodoTaker from "../TodoTaker/TodoTaker";
import TodoViewer from "../TodoViewer/TodoViewer";

function TodoDashboard(){
    return(
        <div>
            <TodoTaker/>
            <TodoViewer/>
        </div>
    )
}
export default TodoDashboard;