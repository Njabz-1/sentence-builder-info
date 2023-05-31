const { server, closeDatabaseConnection } = require("../app");
const request = require("supertest");
const app = server;
const sql = require('mssql');

describe("Sentences API", () => {
    beforeAll(async () => {
        // If server and sql.connect() do not return Promises, 
        // you will need to refactor your app to make them do so
        await server;
        await sql.connect();
      });
    
      afterAll(async () => {
        await closeDatabaseConnection();
      });
  it("should save a sentence to the database", async () => {
    const response = await request(app)
      .post("/sentences")
      .send({ sentence: "This is a test sentence" });

    expect(response.statusCode).toEqual(201);
    expect(response.body.message).toEqual("Sentence added successfully");
  });
});
