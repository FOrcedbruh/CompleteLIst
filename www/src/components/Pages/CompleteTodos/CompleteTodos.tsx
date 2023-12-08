import style from './CompleteTodos.module.css';
import { useAppSelector } from '../../../hooks/ReduxTypeHooks';
import TodoType from '../../../types/TodoType';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

interface CompleteItemProps {
    todo: TodoType;
}

const CompleteItem: React.FC<CompleteItemProps> = ({todo}) => {

    const { time } = useAppSelector(state => state.CompleteDoSlice)

    return (
        <article>
            <div>
                <h2>{todo.title}</h2>
                <h5>{todo.subtitle}</h5>
                <p>Задача выполнена: {time}</p>
            </div>
            <AlarmOnIcon style={{'color': '#fff'}} fontSize='large'/>
        </article>
    )
}


const CompleteTodos: React.FC = () => {

    
    const { completeTodos } = useAppSelector(state => state.CompleteDoSlice);

    
    return (
        <section className={style.window}>
            <div className={style.list}>
                {completeTodos.length > 0 ? completeTodos.map(todo => {
                    return (
                        <CompleteItem key={todo.id} todo={todo}/>
                    )
                }) : <h2 style={{'color': '#fff'}}>Ни одна задача не выполнена</h2>}
            </div>
        </section>
    )
}


export default CompleteTodos;