import React from 'react';
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./components/notFound";
import Home from "./components/home/home";

function App(props: any) {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/d'}/>}/>
                <Route path={'/d/*'} element={<DefaultPageLayout/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                <Route path={'/404'} element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

function DefaultPageLayout(props: any) {
    return (
        <div id={'wrapper'}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<Home/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App;
