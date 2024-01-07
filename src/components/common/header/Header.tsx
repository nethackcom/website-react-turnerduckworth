import React from "react";
import {Link} from "react-router-dom";
import Earth from "assets/img/logotype.svg"
import "./style.header.scss"

export const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="header-nav">
                        <Link to="/">
                            <div className="header-logotype logotype">TBD</div>
                        </Link>
                        <ul>
                            <li>
                                <Link to="team">Team</Link>
                            </li>
                            <li>
                                <Link to="work">Work</Link>
                            </li>
                            <li>
                                <Link to="contact">Contact</Link>
                            </li>
                            <li>
                                <img src={Earth} alt="Select language"/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}