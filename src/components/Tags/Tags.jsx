const Tags = ({ articles }) => {
  
  //  Tomo los primeros 10 articulos del arreglo articles, para iterar sobre estos 10 articulos y construir el arreglo de tags.
  const topTenTags = articles.slice(0, 10).reduce((taxonomy, article) => {
    //  Para cada articulo, obtengo los tags de la propiedad "taxonomy.tags"
    const articleTags = article.taxonomy.tags.map((tag) => {
      //  Ordeno de mayor a menor los count que tienen los tags
      article.taxonomy.tags.sort((a, b) => b.count - a.count)
      //  Retorno un obj con los 10 valores, ordenados por count
      return {
        slug: tag.slug,
        text: tag.text,
      };
    });
    //  Agrega los tags de cada articulo al arreglo taxonomy, que inicializa con un arr vacio
    return [...taxonomy, ...articleTags]
  }, []); //  inicio reducer en un arr vacio

  return (
    <div className="row">
      <div id="" className="cont_tags com-secondary-tag hlp-marginBottom-20">
        {
          // Tomo los primeros 10 tags del arreglo topTenTags y los muestro por pantalla
          topTenTags.slice(0, 10).map((tag) => (
            <a href={`https://especiales.lanacion.com.ar/arc-css/${tag.slug}`} key={tag.slug}>
              {tag.text}
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default Tags;
