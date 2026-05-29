import { useEffect } from "react";
import getTodos from "../../service/TodoService";
function TodoViewer(){
    useEffect(()=>{
        getTodos();
    }, [])
    return(
        <div>
            <h1>Todo Viewer</h1>
        </div>
    )
}
export default TodoViewer;