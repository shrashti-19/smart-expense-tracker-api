const request = require("supertest");
const fs = require("fs/promises");
const path = require("path");

process.env.NODE_ENV = "test";

const app = require("../src/app");

const filePath = path.join(__dirname, "../src/data/expenses.json");

beforeEach(async () => {
    await fs.writeFile(filePath, "[]");
});

describe("Expense API", () => {

    test("POST /expenses should add an expense", async () => {

        const response = await request(app)
            .post("/expenses")
            .send({
                title: "Coffee",
                amount: 250,
                category: "Food",
                date: "2026-08-02"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.data.title).toBe("Coffee");
    });

    test("GET /expenses should return all expenses", async () => {

        await request(app)
            .post("/expenses")
            .send({
                title: "Coffee",
                amount: 250,
                category: "Food",
                date: "2026-08-02"
            });

        const response = await request(app).get("/expenses");

        expect(response.statusCode).toBe(200);
        expect(response.body.count).toBe(1);
    });

    test("GET /expenses?category=Food should filter expenses", async () => {

    await request(app)
        .post("/expenses")
        .send({
            title: "Coffee",
            amount: 250,
            category: "Food",
            date: "2026-08-02"
        });

    await request(app)
        .post("/expenses")
        .send({
            title: "Bus",
            amount: 100,
            category: "Travel",
            date: "2026-08-02"
        });

    const response = await request(app)
        .get("/expenses?category=Food");

    expect(response.statusCode).toBe(200);
    expect(response.body.count).toBe(1);
    expect(response.body.data[0].category).toBe("Food");
});
  test("GET /expenses/total should calculate total expenses", async () => {

    await request(app)
        .post("/expenses")
        .send({
            title: "Coffee",
            amount: 250,
            category: "Food",
            date: "2026-08-02"
        });

    await request(app)
        .post("/expenses")
        .send({
            title: "Lunch",
            amount: 350,
            category: "Food",
            date: "2026-08-02"
        });

    const response = await request(app)
        .get("/expenses/total");

    expect(response.statusCode).toBe(200);
    expect(response.body.total).toBe(600);
});

test("DELETE /expenses/:id should delete an expense", async () => {

    const createResponse = await request(app)
        .post("/expenses")
        .send({
            title: "Coffee",
            amount: 250,
            category: "Food",
            date: "2026-08-02"
        });

    const id = createResponse.body.data.id;

    const deleteResponse = await request(app)
        .delete(`/expenses/${id}`);

    expect(deleteResponse.statusCode).toBe(200);
    expect(deleteResponse.body.success).toBe(true);

    const getResponse = await request(app)
        .get("/expenses");

    expect(getResponse.body.count).toBe(0);
});

});