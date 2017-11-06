import React from "react"
import Layout from "../layouts/Layout"

export default () => {
  return (
    <Layout>
      <section className="promo">
        <h1>Spread the word about Scala Times!</h1>
        <p>
          Would you like to reveal your source of weekly Scala news? Get a banner on your page! Just follow these simple steps:
        </p>
        <ul className="cards-list">
          <li className="cards-list__item">
            <div className="card">
              <div className="card__img">
                <img src="static/img/download.png" />
              </div>
              <p className="card__text">
              Download the banner you like most
              </p>
            </div>
          </li>
          <li className="cards-list__item">
            <div className="card">
              <div className="card__img">
                <img src="static/img/desktop.png" />
              </div>
              <p className="card__text">
                Post it on your page
              </p>
            </div>
          </li>
          <li className="cards-list__item">
            <div className="card">
              <div className="card__img">
                <img src="static/img/st_250px.png" />
              </div>
              <p className="card__text">
                Link the banner to http://scalatimes.com
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="promo">
        <h2>The variety of banners for your choice</h2>
        <p>
          Download the size you want (PNG format)
        </p>
        <ul className="cards-list">
          <li className="cards-list__item">
            <div className="card">
              <div className="card__img">
                <img src="static/img/banners/125.png" />
              </div>
              <p className="card__text">
                <i className="fa fa-download"/> 125 x 114
                <br/>
                <i className="fa fa-download"/> 260 x 203
                <br/>
                <i className="fa fa-download"/> 285 x 223
                <br/>
                <i className="fa fa-download"/> 300 x 235 
              </p>
            </div>
          </li>
          <li className="cards-list__item">
            <div className="card">
              <div className="card__img">
                <img src="static/img/banners/125-2.png" />
              </div>
              <p className="card__text">
                <i className="fa fa-download"/> 125 x 101
                <br/>
                <i className="fa fa-download"/> 260 x 101
                <br/>
                <i className="fa fa-download"/> 285 x 111
                <br/>
                <i className="fa fa-download"/> 300 x 117
              </p>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  )
};