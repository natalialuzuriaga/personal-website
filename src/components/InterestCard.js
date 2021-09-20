import React from "react";
import styled from "styled-components";

function InterestCard({
  image,
  title,
  paragraph,
  author,
  authorLink,
  source,
  sourceLink,
}) {
  return (
    <InterestCardStyle>
      <div className="card">
        <div className="card-content">
          <img src={image} alt="" />
          <h4>{title}</h4>
          <p>{paragraph}</p>
        </div>
        <div className="icon">
          Icons made by{" "}
          <a href={authorLink} title={author}>
            {author}
          </a>{" "}
          from{" "}
          <a href={sourceLink} title={source}>
            {sourceLink}
          </a>
        </div>
      </div>
    </InterestCardStyle>
  );
}

//Click on interest card -> takes to projects relating to the subject

const InterestCardStyle = styled.div`
  background-color: var(--background-dark-gray);
  border-left: 1px solid var(--border-color);
  border-top: 8px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.4 ease-in-out;

  display: flex;
  flex: 1;
  flex-direction: column;

  &:hover {
    border-top: 8px solid var(--primary-color);
    transform: translateY(3px);
  }
  .card {
    padding: 1.2rem;
    justify-content: space-between;

    h4 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding: 1rem 0;
      position: relative;
      &::after {
        content: "";
        width: 4rem;
        background-color: var(--border-color);
        height: 3px;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px;
      }
    }
    p {
      padding: 0.8rem 0;
      font-size: 1rem;
    }
    img {
      width: 100px;
      height: 100px;
      color: var(--white-color);
    }
    .icon {
      font-size: 0.4rem;
      visibility: hidden;
    }
  }
  .card:hover .icon {
  visibility: visible;
  opacity: 1;
}
`;

export default InterestCard;
