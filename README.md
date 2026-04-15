# Admin Dashboard

A comprehensive property management administration dashboard built with React, TypeScript, and Vite. This dashboard allows administrators to manage users (renters and landlords), properties, leases, move-out requests, payments, and system settings efficiently.

## Features

- **User Management:** Manage, search, and filter users (Landlords, Renters, Agents).
- **Property Management:** Verify new properties and manage existing ones.
- **Lease & Payment Tracking:** Monitor leases, payment statuses, and processing.
- **Analytics & Dashboards:** Visualize revenue, user growth, property locations, and more.
- **System Administration:** View logs, manage reports, and handle blacklists.

## Screenshots

<!-- ADD SCREENSHOT 1 HERE -->
> **[Screenshot 1 Placeholder: Dashboard Overview]**
> Add an image showing the main dashboard with statistics and charts here.
> `![Dashboard Overview](./docs/images/dashboard-overview.png)`

<!-- ADD SCREENSHOT 2 HERE -->
> **[Screenshot 2 Placeholder: User Management]**
> Add an image showing the user data table, search, and filtering capabilities.
> `![User Management](./docs/images/user-management.png)`

## Tech Stack

- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with `ui/` components likely derived from shadcn/ui)
- **Linting:** ESLint

## Getting Started

### Prerequisites

You will need `pnpm` installed locally to manage dependencies.

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running for Development

Start the development server with Hot Module Replacement (HMR):

```bash
pnpm run dev
```

### Building for Production

Create a production-ready build:

```bash
pnpm run build
```

To preview the production build locally:

```bash
pnpm run preview
```

## Project Structure

- `src/components/admin/`: Contains all the modular UI components and layout sections (Sidebar, Navbar, Dashboard Charts, User Tables).
- `src/pages/admin/`: Contains the top-level route pages (Main Dashboard, Leases, Payments, Management, System Settings).
- `src/context/`: Contains React Context providers for global state (e.g., Sidebar, Navbar, User Management).
- `src/data/`: Static or mock data for charts and tables.
- `src/routes/`: Application routing configuration.
