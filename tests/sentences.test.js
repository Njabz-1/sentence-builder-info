const {
  serverPromise,
  sqlConnectPromise,
  closeDatabaseConnection,
} = require("../app");
const request = require("supertest");

describe("Sentences API", () => {
  let server;
  beforeAll(async () => {
    server = await serverPromise;
    await sqlConnectPromise;
  });

  afterAll(async () => {
    server.close();
    await closeDatabaseConnection();
  });

  it("should save a sentence to the database", async () => {
    const response = await request(server)
      .post("/sentences")
      .send({ sentence: "This is a 2nd test sentence" });

    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("Sentence added successfully");
  });

  it("should get sentences from the database", async () => {
    const response = await request(server).get("/sentences");

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          sentence_id: expect.any(Number),
          sentence: expect.any(String),
          creation_date: expect.any(String),
        }),
      ])
    );
  });
});
