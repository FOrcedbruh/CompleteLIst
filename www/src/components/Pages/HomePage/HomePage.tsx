import style from './HomePage.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxTypeHooks';
import TodoType from '../../../types/TodoType';
import { completeDo, setStatusComplete } from '../../../Store/reducers/CompleteDoSlice';
import StarIcon from '@mui/icons-material/Star';
import { LikeDo } from '../../../Store/reducers/LikedDoSlice';
import { useState } from 'react';
import Snackbar from '@mui/joy/Snackbar';
import { deleteTodo } from '../../../Store/reducers/DoSlice';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';





interface DoItemProps {
    todo: TodoType,
    snack: boolean,
    setSnack: React.Dispatch<React.SetStateAction<boolean>>,
}


const DoItem: React.FC<DoItemProps> = ({todo, setSnack}) => {

    const { time } = useAppSelector(state => state.DoSlice);

    const dispatch = useAppDispatch();


    const completeTodoHandler = () => {
        if (todo.complete === false) {
            dispatch(completeDo(todo));
            dispatch(setStatusComplete(true));
            dispatch(deleteTodo(todo.id));
            setSnack(true);
        }
    }


    const deleteHandler = () => {
        dispatch(deleteTodo(todo.id));
    }


    const LikedHandler = () => {
        dispatch(LikeDo(todo));
        dispatch(deleteTodo(todo.id));
    }


    


    return (
        <article className={style.Todo}>
            <div className={style.info}>
                <p>Задача номер: {todo.id + 1}</p>
                <h2>{todo.title}</h2>
                <p>{todo.subtitle}</p>
                <p>Выполните за срок: {todo.time}</p>
                <p>Создано: {time}</p>
            </div>
            <div className={style.actions}>
                <Button onClick={LikedHandler} style={{'color': 'yellow'}}><StarIcon fontSize='medium'/></Button>
                <div className={style.complete}><Button onClick={completeTodoHandler}  style={{'color': 'chartreuse'}}><DoneIcon fontSize='medium'/></Button></div>
                <Button onClick={deleteHandler} variant='text' style={{'color': 'red'}}><CloseIcon fontSize='medium'/></Button>
            </div>
        </article>
    )
}



const HomePage: React.FC = () => {
    

    
    const [snack, setSnack] = useState<boolean>(false);

    const onCloseSnack = (e: any, reason: string) => {
        if (reason === 'clickaway') {
            e.preventDefault();
            return setSnack(false);
        }
    }





    const { Todos } = useAppSelector(state => state.DoSlice);


    return (
        <section className={style.window}>
            <div className={style.DoList}>
                {Todos.length > 0 ? Todos.map(todo => {
                    return (
                        <DoItem key={todo.id} todo={todo} snack={snack} setSnack={setSnack}/>
                    )
                }) : <h2 style={{'color': '#fff'}}>Задач нет</h2>}
            </div>
            <Snackbar color='success' size='sm' open={snack} onClose={onCloseSnack}>
                <p>Задача выполнена и отправлена в раздел 'Выполненные задачи'.</p>
            </Snackbar>
        </section>
    )
}

export default HomePage;
