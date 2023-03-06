export const DataFetching = async () => {
  try {
    const url = `https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/`;
    const response = await fetch(url);
    const result = await response.json();

    // validamos que venga con un code status 200 ok
    if(response.status !== 200) {
      throw result
    }

    //  Recorro todos los articulos
    const articles = result.articles.map((article) => {
      //  Extraigo los tags y los convierto en un arr para devolver los tags con el count con su indice
      const tagsArray = Object.entries(article.taxonomy.tags).map(
        ([key, value]) => {
          return {
            ...value, //  Toma una copia del arr y agregale "count: key"
            count: key,
          };
        }
      );
      //  Retornamos el nuevo obj de los articulos actualizados con su nueva clave: valor
      return {
        ...article,
        taxonomy: {
          ...article.taxonomy,
          tags: tagsArray,
        },
      };
    });

    //console.log(articles)
    return articles;
  } catch (error) {
    throw new Error("Error en el servidor", error);
  }
};
