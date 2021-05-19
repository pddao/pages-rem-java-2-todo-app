import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Boards from './components/Boards'
import useTodos from "./hooks/useTodos";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Board from "./components/Board";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

export default function App() {

    const {advanceTodo, addNewTodo, removeTodo, openTodos, inProgressTodos, doneTodos} = useTodos();
    return (
        <Router>
            <Page>
                <Header/>
                <Navigation/>
                <Switch>
                    <Route path={"/"} exact>
                        <AddATodo onAddClick={addNewTodo}/>
                        <Main openTodos={openTodos} inProgressTodos={inProgressTodos}
                              doneTodos={doneTodos} onAdvance={advanceTodo} onRemove={removeTodo}/>
                    </Route>
                    <Route path={"/open"}>
                        <Board
                            title="Todo"
                            todos={openTodos}
                            onAdvance={advanceTodo}
                            onRemove={removeTodo}
                        />
                    </Route>
                    <Route path={"/doing"}>
                        <Board
                            title="Doing"
                            todos={inProgressTodos}
                            onAdvance={advanceTodo}
                            onRemove={removeTodo}
                        />
                    </Route>
                    <Route path={"/done"}>
                        <Board
                            title="Done"
                            todos={doneTodos}
                            onAdvance={advanceTodo}
                            onRemove={removeTodo}
                        />
                    </Route>
                </Switch>
            </Page>
        </Router>
    )
}
