# AI Usage Notes

## AI Tools Used

- ChatGPT

---

## 1. Which parts were AI-generated?

AI was used as a learning and development assistant during the implementation.

It helped with:
- Project structure and folder organization
- Express.js architecture (Route → Controller → Service)
- Initial boilerplate for API endpoints
- Writing integration tests using Jest and Supertest
- Improving README documentation

---

## 2. What did I validate, test, or modify?

I reviewed and tested every API endpoint manually using Postman.

During development, I made several modifications based on testing and debugging:

- Replaced the `uuid` package with Node.js `crypto.randomUUID()` because of ESM compatibility issues.
- Fixed file path issues for `expenses.json`.
- Added request validation middleware for invalid input.
- Verified all CRUD operations through manual testing.
- Added automated integration tests for the API.

---

## 3. AI suggestions I chose not to use

Initially, AI suggested creating additional service wrapper functions that duplicated existing helper methods. I simplified the implementation by directly reusing existing helper functions to reduce unnecessary code.

I also chose to keep local JSON file storage instead of introducing a database because the assignment explicitly allowed local file storage and keeping the solution simple matched the project requirements.

---

## Summary

AI was used as a development assistant for brainstorming, code structure, debugging, and documentation. The implementation was reviewed, tested, and refined manually before submission.