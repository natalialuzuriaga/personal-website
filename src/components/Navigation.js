import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from "../img/avatar.jpeg";


function Navigation(){
    return(
        <NavigationStyle>
            <div className="avatar">
                {/* <img src={avatar} alt="hi"/> */}
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/experience" activeClassName="active-class">Experience</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class">Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blog" activeClassName="active-class">Blog</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 Natalia Luzuriaga's Website</p>
            </footer>
        </NavigationStyle>
    )
}

const NavigationStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;


    .avatar{
        width: 10%;
        border-bottom: 1px solid var(--border-color);
        .img{
            width: 10%;
            height: 10%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
            padding: 2rem 0;
        }
    }
`;
export default Navigation;