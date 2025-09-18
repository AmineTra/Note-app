# NoteApp

A simple Note app with a Django backend and React frontend.

## Prerequisites
- Python 3.9+
- Node.js & npm

## Backend Setup (Django)
1. Go to the backend directory:
   ```sh
   cd Backend
   ```
2. Install Python dependencies:
   ```sh
   pip install django djangorestframework django-cors-headers
   ```
3. Run migrations:
   ```sh
   python3 manage.py makemigrations
   python3 manage.py migrate
   ```
4. Start the backend server:
   ```sh
   python3 manage.py runserver
   ```

## Frontend Setup (React)
1. Go to the frontend directory:
   ```sh
   cd Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend app:
   ```sh
   npm run start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes
- Make sure the backend is running on [http://localhost:8000](http://localhost:8000) before starting the frontend.
- The frontend will connect to the backend API at `/api/notes/`.
- Do not commit `node_modules`, `db.sqlite3`, or build files (see `.gitignore`).
