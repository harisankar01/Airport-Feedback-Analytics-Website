# Airport-Feedback-Analytics-Dashboard

- This website provides visualizations and analytics regarding the feedback provided by customers on airports and airlines around the world.
- Interactive charts are used for a better understanding of the review analytics.
- Creates tickets from bad reviews, that will be displayed to be resolved.
- Filtering of tickets based on the word cloud.
- Provides separate analytics on food at the airport and airlines, lounge in the airport, and flights from a specific airport.

> Visit the website at [airport-feedback-analytics-dashboard](https://airport-feedback-analytics-website.vercel.app)

### Tech Stack

- The front end is made with **React**.
- The backend is made with the **Django** Framework.
- **MongoDB** Atlas is being used as a database.
- The deployment was automated with **vercel**

## Local Development

- Just create a `.env` file with the backend URL named `REACT_APP_BACKEND_BASE_URL`.
- Set up the backend. Please refer to the [backend repo](https://github.com/harisankar01/Airport-Feedback-Analytics-website-Backend) for instructions on setting up the backend.
- Install the packages,

```jsx!
npm install
```

- Run the server locally,

```jsx!
npm run start
```

> Navigate to localhost:3000

# Screenshots

![Home page](./Screenshots/home.png?raw=true "Landing page")

![Analytics page](./Screenshots/sentimental.png?raw=true "Sentimental Analysis")

![Analytics page](./Screenshots/location.png?raw=true "Location Analysis")

![Analytics page](./Screenshots/word_cloud.png?raw=true "Word Cloud Images")

![Analytics page](./Screenshots/tickets.png?raw=true "Tickets")

![Lounge analytics page](./Screenshots/specific.png?raw=true "Specific analytics")

![Lounge analytics page](./Screenshots/arrow.png?raw=true "Specific analytics")
