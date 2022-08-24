import React from "react";
import useScreenSize from "../hooks/useScreenSize";
import Image from "next/image";
import logoLarge from "../public/icons/monstercat-logo-nav.svg";
import useToggle from "../hooks/useToggle";

export default function Nav({ }) {
    const windowWidth = useScreenSize();
    const [toggledFirst, toggleStateFirst] = useToggle();
    const [toggledSecond, toggleStateSecond] = useToggle();
    const [toggledThird, toggleStateThird] = useToggle();
    const [toggledFourth, toggleStateFourth] = useToggle();

    if (windowWidth < 800) {
        return (
            <nav>
                <div className="nav-logo">
                    <Image src={logoLarge} alt="" />
                </div>
                <ul className="navigation" id="navigation">
                    <li >
                        <a onClick={toggleStateFirst} className="nav-link nav__item has-content"
                        >
                            MUSIC
                        </a>
                        {toggledFirst && <ul className="nav__item-sublist">
                            <li>
                                <a
                                    className="nav__item-sublist-link"
                                    href="https://www.monstercat.com/music"
                                >
                                    OUR MUSIC
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    INSTINCT
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    UNCAGED
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    SILK
                                </a>
                            </li>
                        </ul>}
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav-link">
                            ARTISTS
                        </a>
                    </li>
                    <li>
                        <a

                            className="nav-link nav__item has-content"
                            onClick={toggleStateSecond}
                        >
                            ABOUT
                        </a>
                        {toggledSecond && <ul className="nav__item-sublist">
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    About Monstercat
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Diversity {"&"} Inclusion
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Code of Ethics
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Environmental
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Contact Us
                                </a>
                            </li>
                        </ul>}
                    </li>
                    <li className="nav__item">
                        <a
                            href=""
                            className="nav-link"
                        >
                            NEWS
                        </a>
                    </li>
                    <li className="nav__item">
                        <a

                            className="nav-link nav__item has-content"
                            onClick={toggleStateThird}
                        >
                            EVENTS
                        </a>
                        {toggledThird && <ul className="nav__item-sublist">
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Monstercat Events Experience
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Upcoming Events
                                </a>
                            </li>
                        </ul>}
                    </li>
                    <li >
                        <a
                            className="nav-link nav__item has-content"
                            onClick={toggleStateFourth}
                        >
                            PROGRAMMING
                        </a>
                        {toggledFourth && <ul className="nav__item-sublist">
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    MonstercatTV
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Call of the Wild
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Silk Showcase
                                </a>
                            </li>
                            <li>
                                <a className="nav__item-sublist-link" href="">
                                    Upcoming Shows
                                </a>
                            </li>
                        </ul>}
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav-link">
                            GOLD
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav-link">
                            PARTNERS
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav-link">
                            PRESS
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav-link">
                            PLAYER
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="/contact" className="nav-link">
                            SHOP
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="" className="nav-link">
                            LOST CIVILIZATION
                        </a>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav>
                <ul className="navigation" id="navigation">
                    <li className="nav__item">
                        <a
                            href="https://www.instrument.com/what-we-do"
                            className="nav-link"
                        >
                            WHAT WE DO
                        </a>{" "}
                    </li>
                    <li className="nav__item">
                        <a href="https://www.instrument.com/work className='nav-link'">
                            WORK
                        </a>{" "}
                    </li>
                    <li className="nav__item">
                        <a
                            href="https://www.instrument.com/who-we-are"
                            className="nav-link"
                        >
                            WHO WE ARE
                        </a>{" "}
                    </li>
                    <li className="nav__item">
                        <a
                            href="https://www.instrument.com/being-here"
                            className="nav-link"
                        >
                            BEING HERE
                        </a>{" "}
                    </li>
                    <li className="nav__item">
                        <a href="https://www.instrument.com/careers" className="nav-link">
                            CAREERS
                        </a>{" "}
                    </li>
                </ul>
            </nav>
        );
    }
}
