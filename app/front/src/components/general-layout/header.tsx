import {useEffect, useRef, useState} from "react";
import { useTranslation } from "react-i18next";
import {NavLink} from "react-router-dom";
import { useOutsideClickHandler } from "../../utils/utils";
import ContactInfo from "./contact-info";

function Header(props: any) {

    const logoSrc: string = '/logo512.png';
    const [showBurgerMenu, setBurgerMenuVisible] = useState(false); 
    const [ t, i18n ] = useTranslation();

    function handleClickOutside(e: any) {
        setBurgerMenuVisible(false);
    }

    const clickOutsideRef = useRef(null);
    useOutsideClickHandler(clickOutsideRef, handleClickOutside);

    return (
        <header ref={clickOutsideRef} className={`w-full flex fixed bg-gradient-to-r from-purple-100 to-purple-600 shadow-3xl`}>
            <section className={`w-full flex flex-col md:flex-row items-center p-4`}>
                <span className={`w-full md:w-1/2 lg:w-2/12 flex items-center`}>
                    <img src={logoSrc} className={`rounded w-16`}></img>
                    {/* <h1>Julia Schepetko</h1> */}
                    <h1>{t('Welcome to React')}</h1>
                    <div className="flex md:hidden ml-auto" onClick={() => setBurgerMenuVisible(!showBurgerMenu)}>
                        <div className="space-y-2">
                        <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
                        <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
                        <span className="block w-8 h-0.5 bg-black animate-pulse"></span>
                        </div>
                    </div>
                </span>
                <nav className={`md:w-1/3 lg:w-3/12 ${showBurgerMenu ? '' : 'hidden'} md:flex`}>
                    <ul className={`w-full flex flex-col md:flex-row justify-between`}>
                        <li>
                            <NavLink to={'/d/home'} className={`flex justify-center`}><span className={`text-2xl text-shadow-sm text-gray-500 text-center`}>Home</span></NavLink>
                        </li>
                        <li>
                            <NavLink to={'/d/pricing'} className={`flex justify-center`}><h4 className={`text-2xl text-shadow-sm text-gray-500 text-center`}>Pricing</h4></NavLink>
                        </li>
                        <li>
                            <NavLink to={'/d/articles'} className={`flex justify-center`}><h4 className={`text-2xl text-shadow-sm text-gray-500 text-center`}>Articles</h4></NavLink>
                        </li>
                    </ul>
                </nav>
                <span className={`md:ml-auto text-2xl ${showBurgerMenu ? '' : 'hidden'} md:flex lg:pr-2`}>
                    <span className={`p-1 cursor-pointer`} onClick={() => i18n.changeLanguage('ua')}>
                    🇺🇦
                    </span>
                    <span className={`p-1 cursor-pointer`} onClick={() => i18n.changeLanguage('en')}>
                    🇬🇧
                    </span>
                </span>
                <ContactInfo className={`hidden lg:flex w-2/12`}/>
            </section>
        </header>
    )
}

export default Header;