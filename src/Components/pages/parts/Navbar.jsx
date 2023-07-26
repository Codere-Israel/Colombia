import React, {useState, memo} from 'react';
import { menuItems } from '../casino/localJSON/menuItems';
import { NavLink } from 'react-router-dom';
import {isMobile} from "react-device-detect";

const Navbar = memo(() => {
    let activeStyle = {
        color: '#79c000',
    };

    const prefix = "https://www.codere.com.co/Colombia/images/casinoIcons/";
    const [activeLink, setActiveLink] = useState("");

    return (
        <nav className='codereInnerMenuSeoP'>
            <ul className='codereInnerMenuSeoPmenus'>
                {menuItems.map((menu, index) => {
                    return (
                        <li
                            className='e-nav'
                            key={index}>
                            <NavLink
                                className={`codereInnerMenuItems ${menu.whiteFilter ? "tplFilter78" : ""}`}
                                activeclassname='active'
                                to={menu.url}
                                end
                            >
                                <div className={'codereInnerMenuItemsT64'}>
                                    <img
                                        className='navBarImage'
                                        src={prefix + menu.icon + ".svg"}
                                        style={isMobile ? { height: 32 } : { height: "2rem" }}
                                    />
                                    <span className='navBarTitle'>{menu.title}</span>

                                </div>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
});


export default Navbar;
