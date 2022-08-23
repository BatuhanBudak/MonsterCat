import { useState } from 'react'
import useScreenSize from '../hooks/useScreenSize';
import Nav from './Nav';
import Image from 'next/image';
import logo from '../public/icons/monstercat-logo.webp';

export default function Header() {
    const [navToggled, setNavToggled] = useState(false);
    const windowWidth = useScreenSize();
    const desktopScreenWidth = 800;

    function toggleNav() {
        if (windowWidth) {
            if (windowWidth > desktopScreenWidth) return;
            setNavToggled((prev) => !prev);
        }
    }

    function closeNav() {
        if (windowWidth) {
            if (windowWidth > desktopScreenWidth) return;
            setNavToggled(false);
        }
    }

    return (
        <header className={`header ${navToggled ? 'nav-open' : ''}`}>


            <a href="https://www.monstercat.com" className='logo-link'>
                <Image src={logo} alt='monstercat logo' />
            </a>

            <button className="nav-toggle"
                aria-expanded={navToggled}
                onClick={toggleNav}
                aria-controls="navigation">
                <span className='hamburger'> </span>
            </button>
            <Nav closeNav={closeNav} />

        </header>
    )
}
