import React from "react";
import styled from "styled-components";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import VideoEmbed from "../components/VideoEmbed";

function WorkshopCard({ workshopItem }) {
  return (
      <>
      {workshopItem.map((item) => {
        <Card className="text-center">
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
      </>
  );
}

// const WorkshopCardStyle = styled.Card``;

export default WorkshopCard;
