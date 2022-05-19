import {useEffect, useState} from "react";
import './header.scss';
import {NavLink} from "react-router-dom";
import {randNum, sleep} from "../utils/utils";

function Header(props: any) {
    const [titleAnimationText, setTitleAnimationText] = useState('');
    const titleAnimationTextVariants = [
        " blog",
        " page",
        " personal page",
        " example project?",
        " fan page ✨⭐",
        "`s abomination",
    ]

    async function animateTitle() {
        const textVariants = [...titleAnimationTextVariants];
        textVariants.splice(textVariants.indexOf(titleAnimationText), 1);
        let titleText = textVariants[randNum(textVariants.length, 0)];
        for (let char of titleText) {
            await sleep(randNum(250, 25));
            setTitleAnimationText(prevState => prevState += char + '▒');
            await sleep(randNum(250, 25));
            setTitleAnimationText(prevState => prevState.replace(/▒/g, ''));
        }
    }

    useEffect(() => {
        animateTitle();
    }, []);

    return (
        <header>
            <section className={'main-header-section'}>
                <span className={'title'}>
                    <h1 className={'title-header'}>@TimurAztec{titleAnimationText}</h1>
                    <h6 className={'title-subheader'}>aka @PingLord</h6>
                    <a href={'mailto:timotiaztec@gmail.com'}>timotiaztec@gmail.com</a>
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