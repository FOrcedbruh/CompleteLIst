import style from './HomePage.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxTypeHooks';
import TodoType from '../../../types/TodoType';
import Checkbox from '@mui/material/Checkbox';
import { completeDo, setStatusComplete } from '../../../Store/reducers/CompleteDoSlice';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { LikeDo } from '../../../Store/reducers/LikedDoSlice';
import { useState } from 'react';
import Snackbar from '@mui/joy/Snackbar';
import { deleteTodo } from '../../../Store/reducers/DoSlice';


interface DoItemProps {
    todo: TodoType,
    snack: boolean,
    setSnack: React.Dispatch<React.SetStateAction<boolean>>,
}


const DoItem: React.FC<DoItemProps> = ({todo, snack, setSnack}) => {

    const { time } = useAppSelector(state => state.DoSlice);

    const dispatch = useAppDispatch();


    const checkboxHandle = () => {
        if (todo.complete === false) {
            dispatch(completeDo(todo));
            dispatch(setStatusComplete(true));
            dispatch(deleteTodo(todo.id));
            setSnack(true);
        }
    }

    const [like, setLike] = useState<boolean>(false);

    const LikedHandler = () => {
        dispatch(LikeDo(todo));
        setLike(true)
    }


    return (
        <article className={style.Todo}>
            <div className={style.info}>
                <p>Задача номер: {todo.id + 1}</p>
                <h2>{todo.title}</h2>
                <p>{todo.subtitle}</p>
                <p>Создано: {time}</p>
            </div>
            <div className={style.actions}>
                <div onClick={LikedHandler}>{like ? <StarIcon fontSize='large' style={{'cursor': 'pointer'}}/> : <StarBorderIcon fontSize='large' style={{'cursor': 'pointer'}}/>}</div>
                <div className={style.complete}><p>Выполнение</p> <Checkbox value={todo.complete} onClick={checkboxHandle}  style={{'color': 'chartreuse'}}/></div>
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
