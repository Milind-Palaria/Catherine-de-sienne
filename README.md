# Catherine de Sienne

![Home Page](/images/Screenshots/welcome.png)
![Home Page](/images/Screenshots/login.png)
![Home Page](/images/Screenshots/register.png)
![Home Page](/images/Screenshots/home.png)
![Home Page](/images/Screenshots/mybanks.png)
![Home Page](/images/Screenshots/transaction.png)
![Home Page](/images/Screenshots/history.png)
![Home Page](/images/Screenshots/connect.png)


Catherine de Sienne is a comprehensive financial SaaS platform designed to empower users to manage their finances effectively. By connecting to multiple bank accounts, the platform offers real-time transaction monitoring, secure money transfers between users, and a host of other features to streamline financial management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Multiple Bank Connections:** Securely connect to various bank accounts using Plaid and Dwolla.
- **Real-time Transaction Monitoring:** View transactions as they happen, providing a clear overview of your financial activities.
- **Fund Transfers:** Transfer money between your accounts or to other users on the platform with ease.
- **Comprehensive Financial Management:** Manage your finances from a single, intuitive dashboard.
- **Secure Authentication:** User data is protected with Appwrite's secure authentication.
- **Responsive Design:** The interface is fully responsive, offering a seamless experience on both desktop and mobile devices.
- **Dynamic Data Visualizations:** View your financial data through engaging and informative charts using Chart.js.

## Technologies Used

- **[Next.js](https://nextjs.org/):** A React framework for building fast and user-friendly web applications.
- **[TypeScript](https://www.typescriptlang.org/):** A typed superset of JavaScript that adds static types to the language.
- **[Appwrite](https://appwrite.io/):** A secure open-source backend server for web, mobile, and flutter developers.
- **[Plaid](https://plaid.com/):** A financial technology platform that connects applications to users' bank accounts.
- **[Dwolla](https://www.dwolla.com/):** A platform for bank transfers and payments.
- **[React Hook Form](https://react-hook-form.com/):** A performant, flexible, and extensible form library for React.
- **[Zod](https://zod.dev/):** A TypeScript-first schema declaration and validation library.
- **[TailwindCSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom user interfaces.
- **[Chart.js](https://www.chartjs.org/):** A simple yet flexible JavaScript charting library.
- **[ShadCN](https://shadcn.dev/):** A component library for building modern, responsive UIs.

## Installation

### Prerequisites

- Node.js (v14.x or later)
- Yarn or npm
- Appwrite
- Plaid and Dwolla API keys

### Clone the Repository

```bash
git clone https://github.com/milind-palara/catherine-de-sienne.git
cd catherine-de-sienne
```

### Install Dependencies

Using Yarn:

```bash
yarn install
```

Using npm:

```bash
npm install
```

## Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```bash
NEXT_PUBLIC_APPWRITE_ENDPOINT=<Your Appwrite endpoint>
NEXT_PUBLIC_APPWRITE_PROJECT_ID=<Your Appwrite project ID>
NEXT_PUBLIC_APPWRITE_API_KEY=<Your Appwrite API key>
NEXT_PUBLIC_PLAID_CLIENT_ID=<Your Plaid client ID>
NEXT_PUBLIC_PLAID_SECRET=<Your Plaid secret>
NEXT_PUBLIC_PLAID_ENV=<Plaid environment (sandbox/development/production)>
NEXT_PUBLIC_DWOLLA_APP_KEY=<Your Dwolla app key>
NEXT_PUBLIC_DWOLLA_APP_SECRET=<Your Dwolla app secret>
```

## Running the Application

To run the application in development mode:

Using Yarn:

```bash
yarn dev
```

Using npm:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

Here is a brief overview of the project's structure:

```
├── public/             # Static files
├── src/
│   ├── app/            # Next.js pages and routing
│   ├── components/     # Reusable React components
│   ├── lib/            # Utility functions and helpers
│   ├── styles/         # Global styles and Tailwind CSS configuration
│   ├── public/         # TypeScript types and interfaces
│   ├── constants/      # TypeScript types and interfaces
│   ├── data/           # TypeScript types and interfaces
│   ├── types/          # TypeScript types and interfaces
│   └── utils/          # TypeScript types and interfaces
├── .env.example        # Env File Example
└── README.md           # Project documentation
```

## Contributing

We welcome contributions! If you would like to contribute to Catherine de Sienne, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please ensure your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---