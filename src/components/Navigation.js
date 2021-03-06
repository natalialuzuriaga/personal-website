import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import natLogo from "../img/natlogo.png";


function Navigation(){
    return(
        <NavigationStyle>
            <div className="logo">
                <img src={natLogo} alt="hi"/>
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
                    <NavLink to="/projects" activeClassName="active-class">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/workshops" activeClassName="active-class">Workshops</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blog" activeClassName="active-class">Blog</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>© 2021 Natalia Luzuriaga</p>
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
    border-right: 1px solid var(--border-color);

    .logo{
        width: 80%;
        border-bottom: 3px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color);
        }
        li {
            display: block;
            a {
                display: block;
                color: var(--white-color);
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                }
                &::before {
                    content: "";
                    color: var(--white-color);
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var(--primary-color);
                    transition: All 0.4s cubic-bezier(1, -0.2, .25, .95);
                    z-index: -1;
                    opacity: 0.21;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;