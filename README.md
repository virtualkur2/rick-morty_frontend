# Rick & Morty Character Explorer (Frontend)

This is the frontend application for a web portal designed to explore Rick & Morty characters, manage user favorites, and provide administrative tools for user management. It features a modern user interface built with React and leverages Redux Toolkit Query for efficient data management.

## Features

* **User Authentication**: Secure Login and Signup functionality.
* **Public Access**: Landing page, Login, Signup, and Error pages are publicly accessible.
* **Protected Routes**: Dashboard and Admin sections are only accessible to authenticated users.
* **Rick & Morty Character List**:
    * Paginated display of 20 characters per page.
    * Characters presented as horizontal cards with image and basic information.
    * Pagination controls at the top and bottom of the list.
    * Ability to filter characters by name, species, or status (one filter at a time).
* **Favorite Characters**:
    * Users can mark characters as favorites with a star icon on their cards.
    * Favorited characters are indicated by a filled star icon.
* **Admin User Management**:
    * **Admin-Exclusive Access**: A dedicated page for administrators to manage users.
    * **User List Table**: Displays registered users with their name, email, role, and creation date.
    * **View User Favorites**: Admins can view the favorite characters list of any specific user.
    * **Extended Character Details**: Admins can access more detailed information for each character directly from their card.

## Technologies Used

* **React**: A JavaScript library for building user interfaces.
* **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
* **Redux Toolkit (RTK)**: For efficient state management.
* **RTK Query**: Powerful data fetching and caching solution built on Redux Toolkit.
* **React Router DOM**: For declarative routing.
* **Styled Components**: For component-based styling.
* **Axios**: (Used internally by RTK Query's `fetchBaseQuery`) Promise-based HTTP client for the browser and node.js.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) or Yarn installed on your machine.

* **Node.js & npm**: Download from [nodejs.org](https://nodejs.org/).
* **Yarn** (optional): `npm install -g yarn`

### 1. Clone the Repository

First, clone the frontend repository to your local machine:

```bash
git clone https://github.com/virtualkur2/rick-morty_frontend.git
cd <your-frontend-repo-directory> # e.g., cd rick-morty_frontend
```

### 2. Install Dependencies

Navigate into the frontend directory and install the required Node.js packages:

```bash
npm install
# or if you use yarn
yarn install
```

---

### 3. Environment Variables

Create a `.env` file in the root of your frontend directory (the same level as `package.json`). This file will store your backend API URL.

```env
VITE_BACKEND_API_URL=http://localhost:3000
```

> **Note:** Ensure the URL matches where your backend API is running. If you're running the backend on `localhost:3000` as in the example, this value is correct.

---

### 4. Run the Application

Start the development server:

```bash
npm run dev
# or if you use yarn
yarn dev
```

The application should now be running locally, usually accessible at [http://localhost:5173](http://localhost:5173).

---

## Usage Guide

### Public Access

Upon starting the application, you can access the following public routes:

- **Landing Page:** `/`
- **Login Page:** `/login`
- **Signup Page:** `/signup`
- **Unauthorized Access Page:** `/unauthorized` (Users are redirected here if they try to access a protected route without proper permissions).

---

### User Authentication

#### Signup

1. Navigate to `/signup`.
2. Fill in your desired Name, Email, and Password.
3. Click **"Sign Up"**.
4. Upon successful registration, you will be redirected to the Login page.

#### Login

1. Navigate to `/login`.
2. Enter your registered Email and Password.
3. Click **"Login"**.
4. Upon successful login, you will be redirected to the Dashboard.

---

### Dashboard (For all Registered Users)

The Dashboard (`/dashboard`) is your main hub for exploring Rick & Morty characters.

- **Character List:** A paginated list of characters is displayed, 20 items per page. Each character is shown in a horizontal card format.
- **Pagination:** Use the "Previous", "Next", and page number buttons at the top and bottom of the character list to navigate through pages.

#### Favoriting Characters

- Each character card has a star icon.
- Click an empty star to add a character to your favorites (the star will fill).
- Click a filled star to remove a character from your favorites (the star will become empty).

#### Filtering Characters

- You can apply one filter at a time using the filter controls at the top of the page.
- **Select Filter Type:** Choose 'Name', 'Species', or 'Status' from the "Filter By" dropdown.
- **Enter Value:** Type your search term into the "Value" input field.
- **Apply Filter:** Click "Apply Filter" to see results matching your criteria. The pagination will reset to page 1.
- **Clear Filter:** Click "Clear Filter" to remove the active filter and view all characters again.

---

### Admin Privileges

If you log in as an administrator, you gain access to additional features.

**Default Admin Credentials (if seeded in your backend):**

- **Email:** `admin@example.com`
- **Password:** `SuperSecureAdminPass123!`

---

#### User Management Page

- **Access:** After logging in as an admin, a "Manage Users" link will appear in the top navigation bar. Click it to go to `/admin/users`.
- **User List:** This page displays a table of all registered users, showing their Name, Email, Role, and Date Created.
- **View User Favorites:** For each user in the table, there's a "View Favorites" link. Clicking this will take you to a dedicated page (`/admin/users/:userId/favorites`) showing that specific user's entire list of favorite characters. You can use the "Back to User List" button to return.

---

#### Extended Character Details (Dashboard)

When logged in as an admin on the Dashboard (`/dashboard`), each character card will have an additional **"View Details"** button.

- Clicking this button will open a modal displaying extended information about the character (e.g., type, gender, origin, last known location, episodes, creation date), which is typically not visible to regular users.

---

## Backend Setup

This frontend application requires a running backend API to function correctly.  
Please refer to the backend repository's `README.md` for instructions on how to set up and run the backend server.
