# auto-chek-api

A brief description of auto check api.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Owoeye1321/auto-chek-api.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd auto-check-api
   ```

3. **Install all dependencies**:
   ```bash
   yarn
   ```

## Environment variables

1.  **To run this project, you will need to add the following environment variables to your .env file:**
    ```
    `PORT` =1111
    `APP_ENV` =development
    `DB_URI`=`mongodb://localhost:27017/auto-check` Use this for development mode
    `HOST`=
    `NAME`=
    `PASSWORD`=
    `USER`=
    `DB_PORT`=
    `APP_NAME`=Auto check api
    `APP_PREFIX_PATH`=/api/v1
    `RAPID_API_UA`= RapidAPI-Playground`RAPID_API_KEY`= 37f4bc3034msha49c34d8cab9a70p1a537fjsnc2dbc343db77`RAPID_API_HOST`=`https://vin-lookup-by-api-ninjas.p.rapidapi.com/v1`
    ```

## Usage

1. **Start the application**

   1. **For development**

   ```bash
   npm run nodemon
   ```

   2. **For Production**

   ```bash
   yarn run build
   yarn  start
   ```

   3. **Access the application**
      \*\*Open your browser and navigate to `http://localhost:1111` for development mode

## Folder Structure

.```├── README.md              # Project documentation```
```├── node_modules           # Project dependencies```
```├── package-lock.json      # Lock file for npm dependencies```
```├── package.json           # Project metadata and scripts```
```├── src                    # Source code```
```│   ├── app.ts             # Main application entry point```
```│   ├── config             # Configuration files and utilities```
```│   │   ├── apiError.ts    # API error handling```
```│   │   ├── catchError.ts  # Error catching utility```
```│   │   ├── enum.ts        # Enum definitions```
```│   │   ├── index.ts       # Config index```
```│   │   ├── logger.ts      # Logger setup```
```│   │   └── morgan.ts      # Morgan setup for HTTP request logging```
```│   ├── controller         # Route controllers```
```│   │   ├── index.ts       # Controller index```
```│   │   ├── loan.controller.ts  # Loan-related controller logic```
```│   │   └── vehicle.controller.ts # Vehicle-related controller logic```
```│   ├── interface          # TypeScript interfaces```
```│   │   ├── index.ts       # Interface index```
```│   │   └── vin-look-up-response.ts # VIN look-up response interface```
```│   ├── middleware         # Express middleware```
```│   │   ├── data.validation.ts  # Data validation middleware```
```│   │   ├── error.middleware.ts # Error handling middleware```
```│   │   └── index.ts       # Middleware index```
```│   ├── model              # Mongoose models```
```│   │   ├── loan.application.model.ts # Loan application model```
```│   │   ├── valuation.model.ts # Valuation model```
```│   │   └── vehicle.model.ts   # Vehicle model```
```│   ├── routes             # Express routes```
```│   │   ├── index.ts       # Routes index```
```│   │   ├── loan.route.ts  # Loan-related routes```
```│   │   └── vehicle.route.ts # Vehicle-related routes```
```│   └── service            # Service layer for business logic```
```│       ├── index.ts       # Service index```
```│       ├── loan.service.ts    # Loan-related services```
```│       └── vehicle.service.ts # Vehicle-related services```
```├── tsconfig.json          # TypeScript configuration```
```└── yarn.lock              # Lock file for Yarn dependencies```

