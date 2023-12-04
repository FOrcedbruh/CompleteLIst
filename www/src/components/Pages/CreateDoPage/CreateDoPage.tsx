import style from './CreateDoPage.module.css';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxTypeHooks';
import { createTodo } from '../../../Store/reducers/DoSlice';







const CreateDoPage: React.FC = () => {


    const dispatch = useAppDispatch();

    const { Todos } = useAppSelector(state => state.DoSlice)

    interface Inputs {
        title: string,
        subtitle: string
    }


    const {
        register,
        formState: {
            errors,
            isValid,
        },
        reset,
        handleSubmit
    } = useForm<Inputs>({
        mode: 'onBlur'
    })

    const onSubmit = (data: any) => {
        console.log(data);
        dispatch(createTodo(data));
        console.log(Todos);
        reset();
    }


    return (
        <section className={style.window}>
            <form onSubmit={handleSubmit(onSubmit)} name='createDo'>
                <div className={style.inputDiv}>
                    <label htmlFor="title">Задача...</label>
                    <input type="text" {...register('title', {
                        required: 'Какая задача?'
                    })}/>
                    {errors.title?.message && <div className={style.error}>{errors.title?.message}</div>}
                </div>
                <div className={style.inputDiv}>
                    <label htmlFor="subtitle">Описание задачи</label>
                    <input type="text" {...register('subtitle')}/>
                </div>
                <input type="submit" value={'Создать задачу'} className={`${style.Btn} ${!isValid ? `${style.disabled}` : ''}`} disabled={!isValid}/>
            </form>
        </section>
    )
}



export default CreateDoPage;