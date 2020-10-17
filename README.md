<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="public/images/favicon.png" alt="Project logo"></a>
</p>

<h3 align="center">Expensify</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/FernandoC1217/Expensify-App/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Track your expenses easily and save more money!
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Expensify is a project that track your expenses.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system or server.

### Prerequisites

What things you need to install the software and how to install them.

```
Webpack
Yarn
```

### Installing

A step by step series of examples that tell you how to get a development env running.

First install node js, and yarn
clone this repository in your local computer.

```
git clone https://github.com/FernandoC1217/Expensify-App
```

Then when you have it in your local computer.
Run the following commands

```
yarn start (To get node modules)
yarn run serve / npm run serve (To get the page)
```

## 🔧 Running the tests <a name = "tests"></a>

This project use Jest for testing, here is a guide on how to run the tests,

### Break down into end to end tests

These test are to get the most of this React application.
To run tests, you can type this command.

```
yarn run test / npm run test
```

### And coding style tests

For example i can test the component

```
// Test ExpenseSummary Component

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});
```

## 🎈 Usage <a name="usage"></a>

You can login with your google account and start using the application.
Enter your expenses in the app

## 🚀 Deployment <a name = "deployment"></a>

You can deploy these project to heroku. To do it , you **must** have a account on the platform. First commit your changes and later run

```
// Push to heroku

git push heroku master

```

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Web Framework
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Redux](https://redux.js.org/) - State Container

## ✍️ Authors <a name = "authors"></a>

- [@fernandocutire](https://github.com/FernandoC1217) - Build by
- [@andrewjmead](https://github.com/andrewjmead) - Idea and Initial Work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Learning React
- Inspiration to track expenses
