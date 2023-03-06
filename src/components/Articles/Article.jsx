import { formatDate } from "../../utils/helpers";

const Article = ({ article }) => {
  const { headlines, display_date, promo_items } = article;

  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section id="" className="cont-figure">
        <a href="/" className="figure">
          <picture id="" className="content-pic picture">
            <img
              src={promo_items.basic.url}
              alt={`Imagen de la receta ${headlines.basic}`}
              className="content-img"
            />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href="/">
            <b>{headlines.basic}</b>
          </a>
        </h2>
        <h4 className="com-date">{formatDate(display_date)}</h4>
      </div>
    </article>
  );
};

export default Article;
