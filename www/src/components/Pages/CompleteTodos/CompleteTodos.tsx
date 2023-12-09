import style from './CompleteTodos.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxTypeHooks';
import TodoType from '../../../types/TodoType';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import Tooltip from '@mui/material/Tooltip';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { Button } from '@mui/material';
import { deleteComplete } from '../../../Store/reducers/CompleteDoSlice';
import { createBackTodo } from '../../../Store/reducers/DoSlice';



interface CompleteItemProps {
    todo: TodoType;
}

const CompleteItem: React.FC<CompleteItemProps> = ({todo}) => {

    const { time } = useAppSelector(state => state.CompleteDoSlice);

    const dispatch = useAppDispatch();


    const BackHandler = () => {
        dispatch(deleteComplete(todo.id));
        console.log(todo);
        dispatch(createBackTodo(todo));
    }


    return (
        <article>
            <div>
                <h2>{todo.title}</h2>
                <h5>{todo.subtitle}</h5>
                <p>Задача выполнена: {time}</p>
            </div>
            <Tooltip title='Отменить выполнение задачи'><Button onClick={BackHandler} variant='text' style={{'color': '#fff'}}><BackspaceIcon /></Button></Tooltip>
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