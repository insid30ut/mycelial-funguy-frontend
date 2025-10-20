# Mycelial Funguy Frontend

[![Build Status](https://img.shields.io/travis/com/your-username/mycelial-funguy-frontend.svg?style=for-the-badge)](https://travis-ci.com/your-username/mycelial-funguy-frontend)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/package-name.svg?style=for-the-badge)](https://www.npmjs.com/package/package-name)

A modern, content-driven frontend for the Mycelial Funguy blog and mycology resource hub. Built with Next.js and connected to a Sanity.io backend, it provides a fast, dynamic, and user-friendly experience for accessing articles, guides, and specialized calculators.

---

## Table of Contents

*   [About The Project](#about-the-project)
    *   [Key Features](#key-features)
    *   [Built With](#built-with)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
*   [Usage](#usage)
*   [Roadmap](#roadmap)
*   [Contributing](#contributing)
*   [License](#license)

---

## About The Project

This project serves as the primary user interface for Mycelial Funguy, a platform dedicated to the study and cultivation of fungi. It fetches and renders content from a headless CMS (Sanity.io), allowing for easy content management and a decoupled architecture. The site is designed to be a comprehensive resource, featuring in-depth blog posts, practical guides ("Teks"), and useful calculators for cultivators.

### Key Features

*   **Dynamic Content:** Articles and guides are fetched from Sanity.io at build time or on-demand, ensuring content is always up-to-date.
*   **Blog Platform:** A fully-featured blog with individual post pages.
*   **Teks & Tips:** A dedicated section for tutorials, techniques, and tips related to mycology.
*   **Mycology Calculators:** Interactive tools for common cultivation calculations:
    *   Substrate Recipe Calculator
    *   Agar Recipe Calculator
    *   Liquid Culture Recipe Calculator
*   **Responsive Design:** Styled with Tailwind CSS for a seamless experience on all devices.

### Built With

*   [Next.js](https://nextjs.org/) - React Framework
*   [React](https://reactjs.org/) - UI Library
*   [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
*   [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
*   [Sanity.io](https://www.sanity.io/) - Headless CMS for content management

---

## Getting Started

Follow these steps to set up a local development environment.

### Prerequisites

You must have the following software installed on your machine:
*   **Node.js:** v20.x or higher.
*   **Bun:** This project uses Bun for package management and as a runtime. You can install it with the following command:
    ```sh
    curl -fsSL https://bun.sh/install | bash
    ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/mycelial-funguy-frontend.git
    cd mycelial-funguy-frontend
    ```

2.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the necessary credentials for connecting to your Sanity.io backend.
    ```ini
    # .env.local

    NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_SANITY_PROJECT_ID"
    NEXT_PUBLIC_SANITY_DATASET="YOUR_SANITY_DATASET"
    ```

3.  **Install dependencies:**
    ```sh
    bun install
    ```

---

## Usage

To start the development server, run the following command:

```sh
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

*   The main page will display an overview of the content.
*   Navigate to `/blog` to see a list of all blog posts.
*   Navigate to `/teks` to see a list of all guides and tips.
*   Navigate to `/calculators` to use the mycology calculators.

---

## Roadmap

*   [ ] Implement user authentication
*   [ ] Add a search functionality for posts and teks
*   [ ] Add more calculators for different mycology processes

See the [open issues](https://github.com/your-username/mycelial-funguy-frontend/issues) for a full list of proposed features (and known issues).

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please see the `CONTRIBUTING.md` file for details on our code of conduct, and the process for submitting pull requests to us.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
