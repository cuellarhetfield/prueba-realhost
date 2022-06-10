import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./comps/header/Header";
import { getTodos } from "./tconjunts/acciones/todo/todo-action";
import loading from "./sou.svg"
import { Ficha } from "./comps/ficha/Ficha"


function App() {
  const isLoading = useSelector((state) => state.todoReducer.isLoading);
  const todos = useSelector((state) => state.todoReducer.todos);
  const error = useSelector((state) => state.todoReducer.error);
  const dispatch = useDispatch();

  console.log(todos);

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div className="container">
      {error && <div className="mt-3 alet alert-danger p-4" role={"alert"}>* {error}</div>}
      {isLoading && <div className="text-center">
        <img src={loading} alt="LOADING..." />
      </div>}
      <Header />
      <Ficha results={todos} />
    </div>
  );
}

export default App;
