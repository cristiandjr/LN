import Article from "./Article";

const ListsArticles = ({ articles }) => {
  
  // ▪ listar sólo artículos con el "subtype":"7",
  const articleSubtype = articles.filter( article => article.subtype === '7')
  //console.log(articleSubtype)

  return (
    <>
      {
        articleSubtype.map((article) => (
          <Article
            key={article._id}
            article={article}
          />
        ))
      }
    </>
  );
};

export default ListsArticles;
