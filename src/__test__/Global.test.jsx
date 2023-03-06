import { DataFetching } from "../components/Home/DataFetching";

// MOCK
const responseMock = {
  articles: [
    {
      subtype: 1,
      taxonomy: {
        tags: [
          { slug: "tag1", text: "Tag 1" },
          { slug: "tag2", text: "Tag 2" },
        ],
      },
    },
    {
      subtype: 2,
      taxonomy: {
        tags: [
          { slug: "tag3", text: "Tag 3" },
          { slug: "tag4", text: "Tag 4" },
        ],
      },
    },
  ],
};

describe("GET DataFetching API", () => {
  //  Hacemos un test de lo que viene en la api
  it("Obtenemos los datos de la API correctamente", async () => {
    //  Consumo la entrada, la respuesta del mock
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: async () => await responseMock,
        status: 200,
      })
    );

    //  Lo que espero de la api
    const result = await DataFetching();
    expect(result).toEqual([
      {
        subtype: 1,
        taxonomy: {
          tags: [
            { slug: "tag1", text: "Tag 1", count: "0" },
            { slug: "tag2", text: "Tag 2", count: "1" },
          ],
        },
      },
      {
        subtype: 2,
        taxonomy: {
          tags: [
            { slug: "tag3", text: "Tag 3", count: "0" },
            { slug: "tag4", text: "Tag 4", count: "1" },
          ],
        },
      },
    ]);
  });

  //  Error de servidor 500
  it("Error en el servidor 500", async () => {
    global.fetch = () => {
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve(),
      });
    };

    //  Ejecuto test
    await expect(DataFetching()).rejects.toThrow(
      new Error("Error en el servidor")
    );
  });
});
