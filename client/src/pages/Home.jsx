import { useQuery } from "@apollo/client";
import React, { useState } from 'react';
import auth from "../utils/auth";

import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const getUser = () => {
    const user = auth.getProfile().data
    return user
  }

  const submitCategory = () => {
    //need to capture the value the user selects in the dropdown toggle and then bring the user to the page with that quiz
    document.location.assign(`/search/${selectedCategory}`)
  }


  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>
              Welcome, {getUser().username}
            </h1>
            <h3>
              Here at Quizzy, you are able to test your knowledge on a category of your choice! Simply select a quiz category from the drop down menu and click search to view all quizzes that fall in that field. Enjoy!
            </h3>
          </Col>
          {/* here, there should be a div with a dropdown menu, the dropdown menu should have options of the type of quiz the user wants to take, including an ALL option. There should be a search button which then brings you to a new page */}
          <Col>
            <div style={{textAlign: 'center', border: 'solid black 1px', padding: '2%'}}>
            <p>
              Select Your Desired Quiz Category!
            </p>
              <Dropdown>
                <Dropdown.Toggle variant="success"
                style={{backgroundColor:'#1f5f51', margin: '2%'}} id="dropdown-basic">
                 {selectedCategory === '' ? 'Category' : selectedCategory}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSelectedCategory('Biology')}>Biology</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSelectedCategory('Tech')}>Tech</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSelectedCategory('Chemistry')}>Chemistry</Dropdown.Item>
                  <Dropdown.Item onClick={() => setSelectedCategory('All')}>View All</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button onClick={submitCategory}>Submit</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;