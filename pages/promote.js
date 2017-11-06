import React from "react"
import Layout from "../layouts/Layout"

export default () => {
  return (
    <Layout>
      <section className="promo">
        <h1>Spread the word about your event!</h1>
        <p>
          Would you like us to spread the word to over 4000 Scala Times subscribers from all around the world about your Scala event? No problem! In exchange, we would just ask you to either:
        </p>
        <ul className="cards-list">
          <li className="cards-list__item">
            <div className="card">
              <div className="card__img">
                <img src="static/img/desktop.png"/>
              </div>
              <p className="card__text">
                Add the Scala Times logo in the Media Partners section on the event’s web page and link it to scalatimes.com
              </p>
            </div>
          </li>
          <li className="cards-list__item">
            <div className="card">
              <div className="card__img">
                <img src="static/img/ticket.png"/>
              </div>
              <p className="card__text">
                Send us a discount code for tickets for Scala Times subscribers and a link to your event
              </p>
            </div>
          </li>
          <li className="cards-list__item">
            <div className="card">
              <div className="card__img">
                <img src="static/img/desktop_ticket.png"/>
              </div>
              <p className="card__text">
                or both!
              </p>
            </div>
          </li>
        </ul>
        <p>
          Once we get your e-mail, the information about your event and the discount code will be sent to the Scala&nbsp;Times subscribers in the next newsletter.
        </p>
      </section>
      <section className="promo">
        <h1>Scala Times stickers!</h1>
        <p>
          Would you like to share Scala Times stickers among the event participants? Just let us know how many stickers you need and who we should send them to. It usually takes us up to 2 weeks to ship them.
        </p>
      </section>
    </Layout>
  )

};