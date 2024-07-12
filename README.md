# E-Commerce Back End

## Description

Internet retail, also known as e-commerce, plays a significant role within the electronics industry, empowering businesses and consumers to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated a substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

## Task

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a PostgreSQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Mock-Up

The following video shows the application and its features. [Demo Video](https://drive.google.com/file/d/1DAH6zWHqU6s9YpbvIdHK9XpLVd2fgtyk/view).

## Getting Started

This application will include a video submission. Refer to the link above "Demo video" for walkthrogh of app.

You’ll need to use the "pg" and "Sequelize" packages to connect your Express.js API to a PostgreSQL database and the dotenv package to use environment variables to store sensitive data.

Use the schema.sql file in the db folder to create your database with PostgreSQL shell commands. Use environment variables to store sensitive data like your PostgreSQL username, password, and database name.

## Installation 

1. Install the dependencies "dotenv, express, mysql2, sequelize" --- npm i
2. Set up PostgreSQL database by using the "schema.sql" file in "db" folder. Then exit the postgres.
3. Run npm run seed.
4. Run npm run start


## Usage

 Using Insomnia you can get all the endpoints and see the functionality of the get, put, post, and delete features.
You can update specific tags, categories, and products. As well, as delete them. You can also create new tags, prodcucts, and categories. All this to be explored using insomnia.

## License

 This project is licensed under the MIT License.