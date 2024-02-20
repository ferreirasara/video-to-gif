# Video to GIF

Video to GIF is a simple tool to convert video to gif, build as part of an selective process. This project is built using Nest.js and React.js, and consists of two main components: `video-to-gif-api` for the backend and `video-to-gif-app` for the frontend.

## video-to-gif-api

### Getting Started

To run the API, navigate to the `video-to-gif-api` directory and use the following commands:

1. Create a `.env` file in the `video-to-gif-api` directory with the following variables:

Replace the variables with your google storage details (founded on your JSON keyfile).

```env
STORAGE_BUCKET_NAME
GOOGLE_STORAGE_KEYFILE_NAME
```

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

# Example of a gif made with this tool

![tmplcr8zpyk-62223717-837e-4bd4-8f1c-6c7e0feee1cc](https://github.com/ferreirasara/video-to-gif/assets/42873969/27e2f0e0-9eb3-4517-8886-842ead6035e8)

# Screenshots

## Login page

![login](https://github.com/ferreirasara/video-to-gif/assets/42873969/1de2101d-77dd-4a3d-9427-50baad489974)

## Sign up page

![signup](https://github.com/ferreirasara/video-to-gif/assets/42873969/85a06d78-c4c3-4e13-8184-fbad8bf1b12f)

## Main page

![index](https://github.com/ferreirasara/video-to-gif/assets/42873969/2e6f4771-32d5-4ab7-9fcd-f1586087ff6e)

## Upload modal 

![upload-modal](https://github.com/ferreirasara/video-to-gif/assets/42873969/36a48b5c-67eb-4443-a23e-5d1543895db8)

## GIF preview

![gif-preview](https://github.com/ferreirasara/video-to-gif/assets/42873969/90534159-5a99-46bb-b49f-dbbc6d6ea2ff)

# Contact Information

For inquiries or further information, you can reach me via:

- Email: ferreirasara1501@gmail.com
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/ferreirasara1501)
