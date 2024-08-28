# auto-chek-api

A brief description of auto check api.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
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

2. **Access the application**
   \*\*Open your browser and navigate to `http://localhost:1111`

##Environment variables

1.  **To run this project, you will need to add the following environment variables to your .env file:**
    1. **For Production**
       `PORT` =1111
       `APP_ENV` =development
       `DB_URI`=mongodb://localhost:27017/auto-check `Use this for development mode`
       `HOST`=
       `NAME`=
       `PASSWORD`=
       `USER`=
       `DB_PORT`=
       `APP_NAME`=Auto check api
       `APP_PREFIX_PATH`=/api/v1
       `RAPID_API_UA` = RapidAPI-Playground
       `RAPID_API_KEY` = 37f4bc3034msha49c34d8cab9a70p1a537fjsnc2dbc343db77
       `RAPID_API_HOST` = https://vin-lookup-by-api-ninjas.p.rapidapi.com/v1
