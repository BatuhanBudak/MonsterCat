import { useState } from 'react'
import useScreenSize from '../hooks/useScreenSize';
import Nav from './Nav';
import Image from 'next/image';
import logo from '../public/icons/monstercat-logo.webp';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const windowWidth = useScreenSize();
    const desktopScreenWidth = 800;

    function toggleNav() {
        if (windowWidth) {
            if (windowWidth > desktopScreenWidth) return;
            setNavOpen((prev) => !prev);
        }
    }

    function closeNav() {
        if (windowWidth) {
            if (windowWidth > desktopScreenWidth) return;
            setNavOpen(false);
        }
    }

    return (
        <header className={`header ${navOpen ? 'nav-open' : ''}`}>


            <a href="https://www.monstercat.com" className='logo-link'>
                <Image src={logo} alt='monstercat logo' />
            </a>

            <button className="nav-toggle"
                aria-expanded={navOpen}
                onClick={toggleNav}
                aria-controls="navigation">
                <span className='hamburger'> </span>
            </button>
            <Nav closeNav={closeNav} />

        </header>
    )
}
