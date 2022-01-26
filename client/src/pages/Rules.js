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
              <Card.Title>Step 1:</Card.Title> 
              Read the challenge. 
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 2:</Card.Title>
              Take a pic of yourself, friends, familiy, pets, doing the challenge. 
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 3: </Card.Title>
              Upload the link to a cloud storage. 
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 4</Card.Title>
              Sign into Jester and upload your link.  
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 5</Card.Title>
              Add a funny line or quote with the link.  
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 6</Card.Title>
              View yours and other jests on the current task page.   
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 7</Card.Title>
              Click 'like'on your favorite jest. The challenge winner is the one with the most likes.    
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 8</Card.Title>
              Any submissions that violate our decency standards will be removed by Jester admins.    
            </Card>
            <Card className="rulecard">
              <Card.Title>Step 9</Card.Title>
              Check back to see the new challenge and play again.   
            </Card>
          </CardColumns>
        </Container>
        {/* 4 cards of blah blah blah */}
      </div>
    </>
  );
}

export default Rules;
