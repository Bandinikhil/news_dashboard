# News Dashboard

## Introduction

This project is a News Dashboard web application built using React. It fetches and displays news data from a provided API, including headlines, icons, text, sources, and supports category filtering and real-time search functionality. It aims to create a user-friendly experience similar to [Inshorts](https://www.inshorts.com/en/read) with a focus on headlines.

## Deployed link
[News_Dashboard](https://newsdashboards.netlify.app/)


## Project Setup

To set up this project, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Bandinikhil/news_dashboard.git

2. Change your current directory to the project folder: 
   ```bash
   cd news-dashboard

3. Install the project dependencies using npm or yarn:
   ```bash
   npm install
    # or
   yarn install


4.Start the development server: 
   ```bash
    npm start
     # or
    yarn start.

## ScreenShots

![Screenshot (125)](https://github.com/Bandinikhil/news_dashboard/assets/105233916/b734924c-17bb-4f0c-a0f9-dd2fc0934fa5)

<br>

![Screenshot (126)](https://github.com/Bandinikhil/news_dashboard/assets/105233916/e8bc47d8-2ce9-4023-b15d-1577ebe4653f)

<br>

![Screenshot (127)](https://github.com/Bandinikhil/news_dashboard/assets/105233916/80e77f30-97a0-47a7-b547-545aa7882bb5)

<br>


### Fetch News Data

- Fetch news data from the provided API endpoint.

- Display news articles with the following information:

  - Headline
  - newsIcon
  - Source
  - Hashtags

### Category Filter

- Implement a category filter at the top of the dashboard.

- Categories should include, but are not limited to:

  - Entertainment
  - Sports
  - Global
  - Technology
  - Health

- When a category is selected, the dashboard should display news articles only from that category.

### Search Filter

- Add a search filter input field at the top of the dashboard.

- Users should be able to search for news articles using keywords.

- As the user types in the search filter, the displayed articles should update in real-time based on the search query.

### Styling

- Apply appropriate CSS styles to make the dashboard visually appealing.

- Ensure that the design is responsive, suitable for both desktop and mobile devices.

### API Endpoint

The API endpoint for fetching news data can be found at (Dummy) - [https://linesnews.onrender.com/api/news-datas](https://linesnews.onrender.com/api/news-datas)

API for Filtering - [https://linesnews.onrender.com/api/news-datas?category=SPORTS](https://linesnews.onrender.com/api/news-datas?category=SPORTS)

API for Pagination - [https://linesnews.onrender.com/api/news-datas?page=1&pageSize=10](https://linesnews.onrender.com/api/news-datas?page=1&pageSize=10)

## Project Structure

Here's a brief overview of the project structure:

- `src/` - Contains the source code for the React application.
  - `components/` - React components for Header, Filters, Cards, and more.
  - `utils/` - Utility functions and Redux slices for state management.
  - `App.js` - The main entry point of the React application.
  - `index.js` - React DOM rendering.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**API Endpoints:**

Main API Endpoint: [https://linesnews.onrender.com/api/news-datas](https://linesnews.onrender.com/api/news-datas)

API for Category Filtering: [https://linesnews.onrender.com/api/news-datas?category=SPORTS](https://linesnews.onrender.com/api/news-datas?category=SPORTS)

API for Pagination: [https://linesnews.onrender.com/api/news-datas?page=1&pageSize=10](https://linesnews.onrender.com/api/news-datas?page=1&pageSize=10)



Happy coding! 🚀


      
