import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";

function Menu({ menuItem }) {
  return (
    <MenuItemStyle>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="project-content">
              <div className="project-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GithubIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <h6>{item.title}</h6>
               <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </MenuItemStyle>
  );
}

const MenuItemStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .grid-item {
    .project-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 30vh;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        transform: translateY(-500px);
        transition: all 0.4s ease-in-out;
        position: absolute;
        left: 35%;
        top: 25%;
        opacity: 0;
        li {
          background-color: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          margin: 0 0.5rem;
          transition: all 0.4s ease-in-out;
          &:hover {
            background-color: var(--primary-color);
          }
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      .project-image {
        &::before {
          content: "";
          position: absolute;
          left: 0%;
          top: 0%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .project-image:hover {
        ul {
          transform: translateY(0);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-in-out;
          opacity: 1;
          li {
            transition: all 0.4s ease-in-out;
            &:hover {
              background-color: var(--primary-color);
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.4s ease-in-out;
            }
          }

          li:hover {
            svg {
              color: var(--white-color);
            }
          }
          svg {
            font-size: 2rem;
          }
        }
        &::before {
          height: calc(100% - 50%);
          width: calc(100% - 28%);
          background-color: white;
          opacity: 0.9;
          transform-origin: left;

          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
`;

export default Menu;
