import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxTypeHooks';
import style from './LikedPage.module.css'
import TodoType from '../../../types/TodoType';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { deleteLikedTodo } from '../../../Store/reducers/LikedDoSlice';
import { completeDo } from '../../../Store/reducers/CompleteDoSlice';
import DoneIcon from '@mui/icons-material/Done';





interface LikedItemProps {
    todo: TodoType
}


const LikedItem: React.FC<LikedItemProps> = ({todo}) => {

    const dispatch = useAppDispatch();

    const DeleteItemHandler = () => {
        dispatch(deleteLikedTodo(todo.id));
    }

    const completeTodoHandler = () => {
        if (todo.complete === false) {
            dispatch(completeDo(todo));
            dispatch(deleteLikedTodo(todo.id));
        }
    }

    return (
        <section className={style.likedItem}>
            <div>
                <h2>{todo.title}</h2>
                <h3>{todo.subtitle}</h3>
            </div>
            <div>
                <Button variant='text' onClick={completeTodoHandler} style={{'color': 'chartreuse'}}><DoneIcon /></Button>
                <Button variant='text' onClick={DeleteItemHandler} style={{'color': 'red'}}><CloseIcon /></Button>
            </div>
        </section>
    )
}


const LikedPage: React.FC = () => {

    const { likedTodos } = useAppSelector(state => state.LikedDoSlice);



    return (
        <section className={style.window}>
            <h1>Ваши избранные задачи</h1>
            <div className={style.list}>
                {likedTodos.length > 0 ? (likedTodos.map(todo => {
                    return (
                        <LikedItem key={todo.id} todo={todo}/>
                    )
                })) : <h2 style={{'color': '#fff'}}>Избранных задач нет</h2>}
            </div>
        </section>
    )
}

export default LikedPage;