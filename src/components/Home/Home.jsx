import { useState, useEffect } from "react"
import { DataFetching } from "./DataFetching"
import BannerTop from "../Advertising/BannerTop"
import BannerSticky from "../Advertising/BannerSticky"
import Tags from "../Tags/Tags"
import ListsArticles from "../Articles/ListsArticles"
import BannerSmallMobile from "../Advertising/BannerSmallMobile"
import BannerLargeDesktop from "../Advertising/BannerLargeDesktop"

const Home = () => {
 const [articles, setArticles] = useState([])

  useEffect(() => {
    //  Fetching de datos
    DataFetching()
      .then(res => res)
      .then(result => setArticles(result))
      .catch(error => console.log(error))
  }, [])

  return (
    <main>
      {/** <!-- BANNER TOP --> */}
      <BannerTop />
      {/** <!-- BANNER STICKY --> */}
      <BannerSticky />
      <div className="lay-sidebar">
        <div className="sidebar__main">
          <div className="row">
            <div className="com-titleWithfollow hlp-marginBottom-15">
              <h1 className="com-title-section-xl hlp-marginBottom-40">
                Prueba Grilla
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
              {
                <Tags
                  articles={articles} 
                />
              }
            </div>
          </div>
          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {
              <ListsArticles 
                articles={articles} 
              />
            }
            {/**<!-- BANNER SMALL MOBILE -->*/}
            <BannerSmallMobile />
            {/**<!-- BANNER SMALL MOBILE -->*/}
            <BannerSmallMobile />
            <div className="transparency" style={{ height: "553px" }}></div>
          </section>
          <section className="row">
            <div className="col-12 hlp-text-center hlp-margintop-40">
              <button className="--btn --secondary">
                MÁS NOTAS DE ACUMULADO GRILLA
              </button>
            </div>
          </section>
        </div>

        <div className="sidebar__aside">
          {/**<!-- BANNER LARGE DESKTOP -->*/}
          <BannerLargeDesktop />
          {/**<!-- BANNER LARGE DESKTOP -->*/}
          <BannerLargeDesktop />
        </div>
      </div>
    </main>
  )
}

export default Home
