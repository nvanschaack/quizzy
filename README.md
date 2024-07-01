# Tech Quiz

Welcome to the Tech Quiz application! This project is designed to help programmers enhance their knowledge by taking quizzes on various tech-related topics. Users can log in, take quizzes, and see their scores.

## Live Demo

Check out the live application [here](https://tech-quiz-project.onrender.com/).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication (login/signup/logout)
- Home page with information about the quiz
- Take Quiz page for logged-in users
- Logout functionality
- Responsive design

## Technologies Used

- **Frontend**: React, React Router DOM
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **GraphQL**: Apollo Server, Apollo Client
- **Authentication**: JSON Web Tokens (JWT), bcrypt
- **Deployment**: Render

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tech-quiz.git
   cd tech-quiz

2. Install the dependencies:

    bash
    Copy code
    npm install

3. Create a .env file in the root directory and add the following environment variables:

    env
    Copy code
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

4.Start the server:

    bash
    Copy code
    npm start

5.The application will be running at http://localhost:3000.

## Usage
Sign Up: Create a new account by providing your username, email, and password.
Log In: Log in with your credentials to access the quiz.
Take Quiz: Navigate to the Take Quiz page and start the quiz.
Log Out: Log out from your account.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

### Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
If you have any questions or suggestions, feel free to reach out to the team via GitHub:

### Our Team
GitHub Links: 
- [Nell-GitHub](https://github.com/nvanschaack)
- [Janani-GitHub](https://github.com/janani787)
- [Max-GitHub](https://github.com/maxbonetti)


Thank you for using Tech Quiz! We hope it helps you in your journey to become a better programmer.

## Future Development Goals
- Adding % calc's to score/highscore
- Adding a leaderboard page
- Delete/update comments
- Adding more quizzes with quiz categories
- Admin role to add/delete quiz