import React from "react";
import { Jumbotron, Container, CardColumns, Card } from "react-bootstrap";
import "../App.css";

function Rules() {
  return (
    <>
      <div className="rules">
        <br/>
        <Jumbotron className="jumbotron">
          <Container>
            <h3>How to play Jester</h3>
          </Container>
        </Jumbotron>
        <br/>
        <Container>
          <CardColumns>
            <Card className="rulecard">
              <Card.Title>Step 1:</Card.Title> Read the challenge.
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 2:</Card.Title>
              Take a pic of yourself doing the challenge.
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 3: </Card.Title>
              Save the pic to SnapChat, iCloud, Google Drive, Dropbox, etc. to create a link for the pic. 
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 4</Card.Title>
              In the Submit Jest form, post the link to the pic. Write a witty caption for the pic. Click Submit Jest!
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 5</Card.Title>
              See your Jest in the Current Challenge page. It'll be on you Profile page also. 
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 6</Card.Title>
              Like your favorite . The winner is the Jest with the most likes.  
            </Card>
          </CardColumns>
        </Container>
        {/* 4 cards of blah blah blah */}
      </div>
    </>
  );
}

export default Rules;
