const {
  serverPromise,
  sqlConnectPromise,
  closeDatabaseConnection,
} = require("../app");
const request = require("supertest");

describe("Words API", () => {
  let server;
  beforeAll(async () => {
    server = await serverPromise;
    await sqlConnectPromise;
  });

  afterAll(async () => {
    server.close();
    await closeDatabaseConnection();
  });

  it("should get all words from the database", async () => {
    const response = await request(server).get("/words");

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          word_id: expect.any(Number),
          word: expect.any(String),
          word_type: expect.any(String),
        }),
      ])
    );
  });

  it("should get words by type from the database", async () => {
    const wordType = "Noun"; // change this to a word type in your test database
    const response = await request(server).get(`/words/${wordType}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          word_id: expect.any(Number),
          word: expect.any(String),
          word_type: wordType,
        }),
      ])
    );
  });
});
