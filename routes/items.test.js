process.env.NODE_ENV = "test";
const request = require("supertest");
const app = require("../app");
let testItems = require("../fakeDb");

// beforeEach(function() {

// });
afterEach(function() {
  testItems = [];
});

/** GET items */
describe("GET /items", function() {
  test("Gets a list of items", async function() {
    const resp = await request(app).get(`/items`);
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(testItems);
  });
});

describe("POST /items", function() {
  test("Creates a new item", async function() {
    const resp = await request(app)
      .post(`/items`)
      .send({
        name: "Book",
        price: 75
      });
    expect(resp.statusCode).toBe(201);
    console.log(resp.body)
    expect(resp.body).toEqual({
      added: { "name": "Book", "price": 75 }
    });
  });
});