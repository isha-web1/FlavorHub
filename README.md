# FlavorHub - A Culinary Delight

## Overview

FlavorHub is a full-stack web application designed to provide users with a seamless experience for exploring menus, ordering food, and managing their culinary preferences. Built with React, Tailwind CSS, and integrated with Firebase for authentication, FlavorHub offers a modern and responsive interface. The backend, powered by Node.js and Express, ensures efficient data management and API functionality.

## Features

*   **Menu Exploration:** Browse a diverse menu with detailed descriptions and enticing visuals.
*   **Effortless Ordering:** Add items to your cart and place orders with ease.
*   **Secure Authentication:** User authentication managed via Firebase, ensuring secure access and personalized experiences.
*   **Dashboard:** Dedicated dashboards for both users and administrators, offering tailored functionalities.
*   **Admin Privileges:** Administrators can manage menu items, bookings, and user roles.
*   **User Reviews:** Users can submit reviews and testimonials, enhancing community engagement.
*   **Payment History:** Track your payment history for easy reference.
*   **Responsive Design:** Enjoy a consistent experience across various devices, thanks to Tailwind CSS.

## Technologies Used

### Frontend

*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **React Router DOM:** For navigation and routing within the application.
*   **Firebase:** For secure user authentication.
*   **React Icons:** For incorporating a wide range of icons.
*   **SweetAlert2:** For attractive and customizable alert messages.
*   **Swiper:** For creating engaging testimonial sliders.
*   **@smastrom/react-rating:** For implementing interactive rating components.
*   **Axios:** For making HTTP requests to the backend.
*   **@tanstack/react-query:** For efficient data fetching and caching.

### Backend

*   **Node.js:** A JavaScript runtime for building scalable server-side applications.
*   **Express:** A minimalist web application framework for Node.js.
*   **MongoDB:** A NoSQL database for storing application data.
*   **Mongoose:** An Object Data Modeling (ODM) library for MongoDB and Node.js.
*   **Cors:** Middleware to enable Cross-Origin Resource Sharing.
*   **Vercel:** Cloud platform for serverless deployment.

## Installation

### Frontend

1.  Clone the repository:

    ```bash
    git clone https://github.com/isha-web1/FlavorHub.git
    cd flavorhub
    cd client
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Configure Firebase:

    *   Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
    *   Enable Authentication (e.g., Email/Password, Google Sign-in).
    *   Obtain your Firebase configuration object.
    *   Create a `.env` file in the `client` directory and add your Firebase configuration:

    ```
    VITE_apiKey=YOUR_API_KEY
    VITE_authDomain=YOUR_AUTH_DOMAIN
    VITE_projectId=YOUR_PROJECT_ID
    VITE_storageBucket=YOUR_STORAGE_BUCKET
    VITE_messagingSenderId=YOUR_MESSAGING_SENDER_ID
    VITE_appId=YOUR_APP_ID
    ```

4.  Start the development server:

    ```bash
    npm run dev
    ```

### Backend

1.  Navigate to the server directory:

    ```bash
    cd ../server
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Configure MongoDB:

    *   Set up a MongoDB database, either locally or using a cloud service like MongoDB Atlas.
    *   Create a `.env` file in the `server` directory and add your MongoDB connection string:

    ```
    DB_URI=YOUR_MONGODB_CONNECTION_STRING
    ```

4.  Start the server:

    ```bash
    npm run start
    ```

## Usage

1.  **Frontend:** Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).
2.  **Backend:** The server will run on `http://localhost:5000` (or the port specified in your configuration).

## Environment Variables

Ensure you have the following environment variables configured in both the `client/.env` and `server/.env` files:

### Client

*   `VITE_apiKey`
*   `VITE_authDomain`
*   `VITE_projectId`
*   `VITE_storageBucket`
*   `VITE_messagingSenderId`
*   `VITE_appId`




## API Endpoints

The backend provides the following API endpoints:

*   `GET /menu`: Retrieve the full menu.
*   `POST /users`: Create a new user.
*   `GET /users/admin/:email`: Check if a user is an admin.
*   `GET /carts`: Retrieve the user's cart.
*   `DELETE /carts/:id`: Delete an item from the cart.
*   `GET /reviews`: Retrieve user reviews.
*   `POST /menu`: Add a new menu item (Admin only).
*   `DELETE /menu/:id`: Delete a menu item (Admin only).


