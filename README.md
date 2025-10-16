# MovieSphere 🎬

Live Application: https://movie-sphere-rho.vercel.app/

A dynamic movie database web application built with React, Tailwind CSS, and Axios that allows users to browse, search, and explore movies seamlessly.

## Features

- Browse trending and popular movies.
- Search for movies by title.
- View detailed movie information including rating, genre, release date, and synopsis.
- Responsive design for mobile, tablet, and desktop.
- Smooth, user-friendly interface powered by Tailwind CSS.
- Real-time API integration with movie data sources via Axios.

## Tech Stack

- Frontend: React.js
- Styling: Tailwind CSS
- HTTP Requests: Axios
- Routing: React Router DOM
- Deployment: Vercel
- API: [Provide API name or endpoint if available]

## Screenshots


1. Home Page
<img width="1887" height="849" alt="Screenshot 2025-10-12 214608" src="https://github.com/user-attachments/assets/98fe4290-aa4c-47d0-bd10-298779b80898" />

2. Showcasing trending movies.
<img width="1548" height="834" alt="Screenshot 2025-10-12 214629" src="https://github.com/user-attachments/assets/aaa80eb9-fc65-4d55-a461-df00c5096ebc" />

3. Search Results Page
Search results for a movie query.
<img width="1888" height="861" alt="image" src="https://github.com/user-attachments/assets/91cfec71-bca3-462d-89bd-ea546f0b2852" />



5. Movie Details
Detailed view of a selected movie.



## Getting Started

### Prerequisites

- Node.js (>=14)
- npm or yarn

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/movie-sphere.git
cd movie-sphere
```

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Create a `.env` file (if API key required):

```
REACT_APP_API_KEY=your_api_key_here
```

4. Run the development server:

```
npm start
# or
yarn start
```

Open http://localhost:3000 to view in your browser.

## Folder Structure

```
movie-sphere/
├── public/
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/           # Application pages (Home, Details, Search)
│   ├── services/        # Axios API calls
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── tailwind.config.js
```

## Features Breakdown

- Home Page: Displays trending and popular movies.
- Search: Users can type a movie name to get instant results.
- Movie Details: Clicking on a movie opens a detailed view with synopsis, ratings, and release information.
- Responsive UI: Works seamlessly across devices.

## Future Enhancements

- Add user authentication for personalized watchlists.
- Implement movie recommendations based on user preferences.
- Pagination or infinite scrolling for movie lists.
- Dark mode toggle for better UX.

## Deployment

This application is deployed on Vercel: https://movie-sphere-rho.vercel.app/

## License

MIT License
