# Video to GIF

Video to GIF is a simple tool to convert video to gif, build as part of an selective process. This project is built using Node.js and consists of two main components: `video-to-gif-api` for the backend and `video-to-gif-app` for the frontend.

## video-to-gif-api

### Getting Started

To run the API, navigate to the `video-to-gif-api` directory and use the following commands:

1. Create a `.env` file in the `video-to-gif-api` directory with the following variables:

```env
STORAGE_BUCKET_NAME
STORAGE_TYPE
STORAGE_PROJECT_ID
STORAGE_PRIVATE_KEY_ID
STORAGE_PRIVATE_KEY
STORAGE_CLIENT_EMAIL
STORAGE_CLIENT_ID
STORAGE_UNIVERSE_DOMAIN
```

Replace the variables with your google storage details.

2. Install dependencies and start the API server:

```bash
# Install dependencies
npm install

# Start the API server
npm run start:dev
```

## video-to-gif-app

The frontend of the Video to GIF tool is developed using React. To launch the application, navigate to the `video-to-gif-app` directory and use the following commands:

1. Create a `.env` file in the `video-to-gif-app` directory with the following variable:

```env
REACT_APP_API_BASE_URL=http://localhost:your_api_port
```

Replace `your_api_port` with the port where your API server is running.

2. Install dependencies and start the frontend application:

```bash
# Install dependencies
npm install

# Start the frontend application
npm start
```

## Contact Information

For inquiries or further information, you can reach me via:

- Email: ferreirasara1501@gmail.com
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/ferreirasara1501)