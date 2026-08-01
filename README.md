# Smart Expense Tracker API

A RESTful API built with Node.js and Express.js to manage personal expenses. The API supports creating, viewing, filtering, calculating totals, and deleting expenses. Data is stored locally in a JSON file.

## Features

- Add a new expense
- View all expenses
- Filter expenses by category
- Calculate total expenses (overall and by category)
- Delete an expense
- Input validation
- Local JSON file storage
- Integration tests using Jest and Supertest

---

## Tech Stack

- Node.js
- Express.js
- Jest
- Supertest

---

## Project Structure

```
smart-expense-tracker-api/
│
├── README.md
├── AI_NOTES.md
├── src/
├── tests/
└── package.json
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
cd smart-expense-tracker-api
```

Install dependencies

```bash
npm install
```

---

## Run the Server

```bash
npm start
```

For development

```bash
npm run dev
```

---

## Run Tests

```bash
npm test
```

---

## API Endpoints

### Add Expense

```
POST /expenses
```

Example Request

```json
{
  "title": "Coffee",
  "amount": 250,
  "category": "Food",
  "date": "2026-08-02"
}
```

---

### Get All Expenses

```
GET /expenses
```

---

### Filter Expenses

```
GET /expenses?category=Food
```

---

### Calculate Total Expenses

Overall

```
GET /expenses/total
```

By Category

```
GET /expenses/total?category=Food
```

---

### Delete Expense

```
DELETE /expenses/:id
```

---

## Testing

Integration tests are implemented using Jest and Supertest to verify all API endpoints.
