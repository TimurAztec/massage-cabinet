import './App.scss';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import NotFound from "./components/default-layout/notFound";
import './i18n.ts';
import { DefaultLayout } from './components/default-layout/layout';

function App(props: any) {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/d'}/>}/>
                <Route path={'/d/*'} element={<DefaultLayout/>}/>
                <Route path={'/404'} element={<NotFound/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
