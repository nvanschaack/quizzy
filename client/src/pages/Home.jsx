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

  console.log(selectedCategory);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>
              Welcome, {getUser().username}
            </h1>
            <h3>
              Here at quizzy, you are able to test your knowledge on a category of your choice! Simply select a quiz category from the drop down menu and click search to view all quizzes that fall in that field. Enjoy!
            </h3>
          </Col>
          {/* here, there should be a div with a dropdown menu, the dropdown menu should have options of the type of quiz the user wants to take, including an ALL option. There should be a search button which then brings you to a new page */}
          <Col>
            <div>
              Select Your Desired Quiz Category!
            </div>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" onClick={() => setSelectedCategory('Biology')}>Biology</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={() => setSelectedCategory('Tech')}>Tech</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={() => setSelectedCategory('Chemistry')}>Chemistry</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={() => setSelectedCategory('All')}>View All</Dropdown.Item>
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