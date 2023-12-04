import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Layout from './Layout/Layout';
import CreateDoPage from './Pages/CreateDoPage/CreateDoPage';

const App: React.FC = () => {


    return (

        <section className="wrapper">
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/Создать_задачу' element={<CreateDoPage />}/>
                </Route>
            </Routes>
        </section>
    )
}

export default App;