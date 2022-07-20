import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/general-layout/header";
import Footer from "./components/general-layout/footer";
import NotFound from "./components/general-layout/notFound";
import Home from "./components/home/home";
import './i18n.ts';

function App(props: any) {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/d'}/>}/>
                <Route path={'/d/*'} element={<DefaultPageLayout/>}/>
                <Route path={'/404'} element={<NotFound/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </Router>
    );
}

function DefaultPageLayout(props: any) {
    return (
        <div id={'wrapper'}>
            <Header/>
            <div className={`h-24`}></div>
            <Routes>
                <Route path={'/'} element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<Home/>}/>
                <Route path={'articles'} element={<Home/>}/>
                <Route path={'/*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;
