import style from './HomePage.module.css';
import { useAppSelector } from '../../../hooks/ReduxTypeHooks';
import TodoType from '../../../types/TodoType';
import Checkbox from '@mui/material/Checkbox';




interface DoItemProps {
    todo: TodoType,
}


const DoItem: React.FC<DoItemProps> = ({todo}) => {


    return (
        <article className={style.Todo}>
            <div>
                <p>Задача номер: {todo.id + 1}</p>
                <h2>{todo.title}</h2>
                <p>{todo.subtitle}</p>
            </div>
            Выполнение <Checkbox style={{'color': 'chartreuse'}}/>
        </article>
    )
}



const HomePage: React.FC = () => {

    

    const { Todos } = useAppSelector(state => state.DoSlice);


    return (
        <section className={style.window}>
            <div className={style.DoList}>
                {Todos.length > 0 ? Todos.map(todo => {
                    return (
                        <DoItem key={todo.id} todo={todo}/>
                    )
                }) : <h2 style={{'color': '#fff'}}>Задач нет</h2>}
            </div>
        </section>
    )
}

export default HomePage;
