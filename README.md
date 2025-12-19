# Test Task: Frontend Developer (E-commerce Store)

This project is a single-page React application featuring a responsive product catalog and an interactive shopping cart with discount logic.

## Tech Stack

*   **Framework:** React 19+ (TypeScript)
*   **State Management:** Zustand (with Persist middleware)
*   **Backend & DB:** Supabase (PostgreSQL + Realtime)
*   **Styling:** Tailwind CSS v4
*   **Bundler:** Vite
*   **Version Control:** Git / GitHub
*   **Demo Hosting:** Vercel

## Live Demo

The application is deployed and available at the following link:
https://sartek-frontend-test-task.vercel.app/

## Local Development Setup

To run the project locally on your machine:

1.  Clone the repository:
    ```bash
    git clone https://github.com/AdminingSS/sartek-frontend-test-task.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd sartek-frontend-test-task
    ```
3.  Install dependencies (requires Node.js and npm installed):
    ```bash
    npm install
    ```
4.  Create a `.env.local` file in the root directory and add your credentials:
    ```bash
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```
5.  Start the development server:
    ```bash
    npm run dev
    ```

The application will be accessible at `http://localhost:5173/` (or another port specified in the terminal).

---