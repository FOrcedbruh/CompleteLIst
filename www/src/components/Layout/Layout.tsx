import { NavLink,  Outlet, Link } from 'react-router-dom';
import style from './Layout.module.css';
import AddIcon from '@mui/icons-material/Add';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';



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
                        <NavLink to='/выполненные_задачи'>Выполненные задачи</NavLink>
                    </li>
                    <li>
                        <NavLink to='/создать_задачу'>Создать задачу <AddIcon /></NavLink>
                    </li>
                   </ul>
                </nav>
                <Link className={style.mainDo} to='/избранные_задачи'>
                    Избранные задачи <StarBorderIcon />
                </Link>
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