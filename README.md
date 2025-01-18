# Smartinno Backend Server

## About Shamba Bora
We are an all-inclusive digital platform designed to assist farmers through their cooperative unions (with their AMCOSes, and AMCOS groups). With SHAMBA BORA platform farmers will be able to acquire knowledge related to markets, advisory services, understanding patterns and trends. Also farmers can collect their crops at their collection centres, sell their crops and make purchases for agricultural inputs such as seeds, fertilizer, tools and the like on credit. The platform combines a carefully formulated support of all key stakeholders in different crop value chains such as various Government officials, extension officers and other key members.

## Prerequisites
- [Bun](https://bun.sh/) runtime installed
- PostgreSQL database
- Node.js (recommended version 18+)

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/smartinno-website-v2backend.git

# Install dependencies
bun install
```

## Development

To start the development server:

```bash
bun run dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL=
PORT=3000
JWT_SECRET=
```

## API Documentation

API documentation is available at `/api/docs` when running the development server.

## License

[MIT](LICENSE)