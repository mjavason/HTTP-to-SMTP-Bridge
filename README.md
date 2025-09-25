# HTTP-To-SMTP-Bridge

A secure HTTP to SMTP bridge service that allows applications to send emails through HTTP API calls. This service acts as a middleware between your applications and SMTP servers, providing a simple REST API for sending emails with authentication and logging capabilities.

## Features

- 🔒 **Bearer Token Authentication** - Secure your email sending endpoint
- 📧 **SMTP Integration** - Connect to any SMTP server (Gmail, Outlook, custom servers)
- 🌐 **REST API** - Simple HTTP POST interface for sending emails
- 📊 **Swagger Documentation** - Interactive API documentation at `/docs`
- 🪵 **Logging with Pino** - Structured logging with optional Loki integration

## Prerequisites

- Node.js (v14 or higher) and npm installed on your system. You can download them from the [official Node.js website](https://nodejs.org)
- Access to an SMTP server (Gmail, Outlook, SendGrid, etc.)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/mjavason/HTTP-to-SMTP-Bridge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd HTTP-to-SMTP-Bridge
   ```

3. Install the project's dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables by copying the sample file:

   ```bash
   cp env.sample .env
   ```

5. Configure your environment variables in `.env` file according to your SMTP server and security requirements.

## Running the Project

### Development Mode

Start the development server with hot reloading:

```bash
npm run dev
```

### Production Build

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

### Testing

Run the test suite:

```bash
npm run test
```

## API Documentation

After starting the server, you can access the interactive Swagger documentation at:

- **Local**: [http://localhost:5000/docs](http://localhost:5000/docs)
- **Production**: `{BASE_URL}/docs`

## Security Notes

- Always use environment variables for sensitive configuration
- Use strong, unique passwords for the `APP_PASSWORD`

## Logging

The service includes structured logging with Pino. Logs include:

- Email sending attempts
- Authentication failures
- Server startup information
- Error tracking

Optional Loki integration for centralized logging in production environments.

## License

This project is licensed under the ISC License.
