import {NavLink,  Outlet} from 'react-router-dom';
import style from './Layout.module.css';
import AddIcon from '@mui/icons-material/Add';

const Layout: React.FC = () => {


    return (
        <>
            <header className={style.header}>
                <nav>
                   <ul>
                    <li>
                        <NavLink to='/'>Задачи</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Выполненные_задачи'>Выполненные задачи</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Создать_задачу'>Создать задачу <AddIcon /></NavLink>
                    </li>
                   </ul>
                </nav>
                <div>

                </div>
            </header>
            <section className={style.container}>
                <Outlet />
            </section>
        </>
        
    )
}

export default Layout;