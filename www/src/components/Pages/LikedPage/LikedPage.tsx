import { useAppSelector } from '../../../hooks/ReduxTypeHooks';
import style from './LikedPage.module.css'
import TodoType from '../../../types/TodoType';

interface LikedItemProps {
    todo: TodoType
}


const LikedItem: React.FC<LikedItemProps> = ({todo}) => {



    return (
        <section>
            <h2>{todo.title}</h2>
            <h3>{todo.subtitle}</h3>
        </section>
    )
}


const LikedPage: React.FC = () => {

    const { likedTodos } = useAppSelector(state => state.LikedDoSlice);



    return (
        <section className={style.window}>
            <div className={style.list}>
                {likedTodos.map(todo => {
                    return (
                        <LikedItem key={todo.id} todo={todo}/>
                    )
                })}
            </div>
        </section>
    )
}

export default LikedPage;