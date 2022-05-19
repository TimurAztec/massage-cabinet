import {useEffect} from "react";
import './header.scss';
import {NavLink} from "react-router-dom";

function Header(props: any) {

    useEffect(() => {

    }, []);

    return (
        <header>
            <section className={'main-header-section'}>
                <span className={'title'}>
                    <h1 className={'title-header'}>Julia</h1>
                </span>
                <nav>
                    <ul className={'nav-list'}>
                        <li>
                            <NavLink to={'/d/home'}><h4>Home</h4></NavLink>
                        </li>
                        <li>
                            <NavLink to={'/d/projects'}><h4>Projects</h4></NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;