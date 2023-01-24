import React from "react";
import styled from "styled-components";

import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import VideoEmbed from "../components/VideoEmbed";

function WorkshopCard({ workshopItem }) {
  return (
      <div className='boot'>
      {workshopItem.map((item) => {
        <Card Card style={{ width: "18rem" }} className="box">
          <Card.Body>
            <Card.Title>
              <b>{item.title}</b>
            </Card.Title>
            <VideoEmbed embedId={item.vidLink} />
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Card.Link href={item.slides}>Slides</Card.Link>
            </ListGroupItem>
          </ListGroup>
        </Card>;
      })}
      </div>
  );
}

// const WorkshopCardStyle = styled.Card``;

export default WorkshopCard;
