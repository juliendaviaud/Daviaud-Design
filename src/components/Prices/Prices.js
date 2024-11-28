import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import "./Prices.css";
import thunderBolt from "../../assets/images/thunderbolt.svg";
import multiplePages from "../../assets/images/multiple-pages.svg";
import cart from "../../assets/images/cart.svg";
import checked from "../../assets/images/checked.svg";

const Prices = () => {
  const [subscriptionTime, setSubscriptionTime] = useState(3);

  /* const toggle = () => {
    packPaymentMethod === "Subscription"
      ? setpackPaymentMethod("Purchase")
      : setpackPaymentMethod("Subscription");
  }; */
  /* const toggle = (numberOfMonth) => {
    packPaymentMethod === 3
      ? setpackPaymentMethod("Purchase")
      : setpackPaymentMethod("Subscription");
  }; */

  const switchSubscriptionTime = (numberOfMonth) => {
    if (subscriptionTime !== numberOfMonth) {
      setSubscriptionTime(numberOfMonth);
    }
  };
  return (
    <div className="pricesPacks">
      {/* <div className="changePaymentMethodButtonAndText">
        <div
          className={`toggle-button ${
            packPaymentMethod === "Subscription" ? "on" : "purchase"
          }`}
          onClick={toggle}
        >
          <div className="toggle-circle"></div>
        </div>
        <p>
          {packPaymentMethod === "Subscription"
            ? "Achat de site"
            : "Location de site"}
        </p>
      </div> */}
      <div className="changePaymentMethodSwitchButton">
        <span
          className={
            "active" +
            " " +
            (subscriptionTime === 3
              ? "activeSubscriptionPeriodLeft"
              : subscriptionTime === 6
              ? "activeSubscriptionPeriodMiddleLeft"
              : subscriptionTime === 12
              ? "activeSubscriptionPeriodMiddleRight"
              : "activeSubscriptionPeriodRight")
          }
        ></span>
        <button
          className={
            "switch-button-case paymentSwitchButtonLeft" +
            " " +
            (subscriptionTime === 3 ? "active-case" : "")
          }
          onClick={() => switchSubscriptionTime(3)}
        >
          3 mois
        </button>
        <button
          className={
            "switch-button-case paymentSwitchButtonRight" +
            " " +
            (subscriptionTime === 6 ? "active-case" : "")
          }
          onClick={() => switchSubscriptionTime(6)}
        >
          6 mois
        </button>
        <button
          className={
            "switch-button-case paymentSwitchButtonRight" +
            " " +
            (subscriptionTime === 12 ? "active-case" : "")
          }
          onClick={() => switchSubscriptionTime(12)}
        >
          1 an
        </button>
        <button
          className={
            "switch-button-case paymentSwitchButtonRight" +
            " " +
            (subscriptionTime === 1000 ? "active-case" : "")
          }
          onClick={() => switchSubscriptionTime(1000)}
        >
          Achat
        </button>
      </div>
      <div className="pricesPacksContainer">
        <div className="pricePack">
          <div className="pricePackFirstSection">
            <img className="pricesPackIcon" src={thunderBolt} alt="" />
            <h4 className="pricesPackName">Site vitrine</h4>
            <p className="pricesPackDescription">
              Pour une présence en ligne simple.
              <br />
              Idéal pour les petits budgets.
            </p>
            <div className="pricesPackPriceContainer">
              <div className="subscriptionPrice">
                <p className="pricesPackPrice">
                  {subscriptionTime === 3
                    ? "60€"
                    : subscriptionTime === 6
                    ? "55€"
                    : subscriptionTime === 12
                    ? "50€"
                    : "1500€"}
                </p>
                <p
                  className={
                    "pricesPackSubscriptionPackSchedule" +
                    (subscriptionTime === 1000 ? " displayNone" : "")
                  }
                >
                  /mois
                </p>
              </div>
              <p className="pricesPackPaymentModality">
                {subscriptionTime === 3
                  ? "Abonnement de 3 mois"
                  : subscriptionTime === 6
                  ? "Abonnement de 6 mois"
                  : subscriptionTime === 12
                  ? "Abonnement de 1 an"
                  : "Paiement en plusieurs fois"}
              </p>
            </div>
            <div className="pricesPackAdvantagesContainer">
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Plusieurs pages (jusqu'à 3)</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>
                  {"Design professionnel & " +
                    (subscriptionTime < 1000 ? "personalisé" : "sur-mesure")}
                </p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>
                  Site responsive (optimisé pour mobile,
                  <br />
                  tablette et ordinateur)
                </p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Formulaire de contact</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>
                  Intégration de Google Analytics (suivi des visiteurs et
                  performance du site)
                </p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Création d'un logo</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Hébergement & mise en ligne</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>
                  Sécurisation SSL
                  <br />
                  (pour un site sécurisé "https")
                </p>
              </div>
              {subscriptionTime < 1000 ? (
                <div className="pricesPackAdvantage">
                  <img
                    className="pricesPackAdvantageIcon"
                    src={checked}
                    alt=""
                  />
                  <p>
                    Un accompagnement par un développeur professionel dédié (
                    <span className="coloredText">une réunion par mois</span>)
                  </p>
                </div>
              ) : (
                <div className="pricesPackAdvantage">
                  <img
                    className="pricesPackAdvantageIcon"
                    src={checked}
                    alt=""
                  />
                  <p>
                    Une formation de la base de la gestion du site par un développeur professionel dédié
                  </p>
                </div>
              )}
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Intégration des réseaux sociaux</p>
              </div>
            </div>
          </div>
          <LinkScroll
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="pricesPackButton"
          >
            C'est parti !
          </LinkScroll>
        </div>

        <div className="pricePack pricePackBusiness">
          <div className="pricesMostPopular">
            <p>Le plus choisi</p>
          </div>
          <div className="pricePackFirstSection">
            <img className="pricesPackIcon" src={multiplePages} alt="" />
            <h4 className="pricesPackName">Business</h4>
            <p className="pricesPackDescription">
              Ce pack présente un site vitrine complet.
              <br />
              Parfait pour présenter votre activité.
            </p>
            <div className="pricesPackPriceContainer">
              <div className="subscriptionPrice">
                <p className="pricesPackPrice">
                  {subscriptionTime === 3
                    ? "80€"
                    : subscriptionTime === 6
                    ? "75€"
                    : subscriptionTime === 12
                    ? "70€"
                    : "1700 - 3000€"}
                </p>
                <p
                  className={
                    "pricesPackSubscriptionPackSchedule" +
                    (subscriptionTime === 1000 ? " displayNone" : "")
                  }
                >
                  /mois
                </p>
              </div>
              <p className="pricesPackPaymentModality">
                {subscriptionTime === 3
                  ? "Abonnement de 3 mois"
                  : subscriptionTime === 6
                  ? "Abonnement de 6 mois"
                  : subscriptionTime === 12
                  ? "Abonnement de 1 an"
                  : "Paiement en plusieurs fois"}
              </p>
              {/* {packPaymentMethod === "Subscription" ? (
                <div className="subscriptionPriceContainer">
                  <div className="subscriptionPriceAndCommitment">
                    <div className="subscriptionPrice">
                      <p className="pricesPackPrice subscriptionPackPrice">
                        {subscriptionTime === 3
                          ? "80€"
                          : subscriptionTime === 6
                          ? "75€"
                          : "70€"}
                      </p>
                      <p>/mois</p>
                    </div>
                    <p className="pricesPackPaymentModality">
                      {"Abonnement de " +
                        (subscriptionTime === 3
                          ? "3 mois"
                          : subscriptionTime === 6
                          ? "6 mois"
                          : "1 an")}
                    </p>
                  </div>
                  <span className="pricesPackHorizontalBar"></span>
                  <div className="subscriptionPriceAndCommitment">
                    <div className="subscriptionPrice">
                      <p className="pricesPackPrice subscriptionPackPrice">
                        98€
                      </p>
                      <p className="pricesPackSubscriptionPackSchedule">
                        /mois
                      </p>
                    </div>
                    <p className="pricesPackPaymentModality">Sans engagement</p>
                  </div>
                </div>
              ) : (
                <>
                  <p className="pricesPackPrice">1700 - 3000€</p>
                  <p className="pricesPackPaymentModality">
                    Paiement en plusieurs fois
                  </p>
                </>
              )} */}

              {/* <p className="pricesPackPaymentModality">
                {packPaymentMethod === "Subscription"
                  ? "Engagement d'un an"
                  : "Paiement en plusieurs fois"}
              </p> */}
            </div>
            <div className="pricesPackAdvantagesContainer">
              <div className="pricesPackAdvantage pricesPackAdvantagePackIncluded">
                <p>Pack "Site vitrine"</p>
              </div>
              <div className="pricesPackAdvantagePlus">
                <p>+</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Plusieurs pages (jusqu’à 10)</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Optimisation du parcours utilisateur</p>
              </div>

              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Intégration d'une carte Google Maps</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Système de newsletters</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Création d’un blog intégré (gestion de contenu simple)</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Hébergement & nom de domaine inclus la première année</p>
              </div>
            </div>
          </div>
          <LinkScroll
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="pricesPackButton pricesPackMainButton"
          >
            C'est parti !
          </LinkScroll>
        </div>

        <div className="pricePack pricePackEcommerce">
          <div className="pricePackFirstSection">
            <img
              className="pricesPackIcon pricesPackCartIcon"
              src={cart}
              alt=""
            />
            <h4 className="pricesPackName">E-commerce</h4>
            <p className="pricesPackDescription">
              Pour les entreprises souhaitant une
              <br />
              plateforme e-commerce sur mesure.
            </p>
            <div className="pricesPackPriceContainer">
              <div className="subscriptionPrice">
                <p className="pricesPackPrice">
                  {subscriptionTime === 3
                    ? "160€"
                    : subscriptionTime === 6
                    ? "155€"
                    : subscriptionTime === 12
                    ? "150€"
                    : "+4000€"}
                </p>
                <p
                  className={
                    "pricesPackSubscriptionPackSchedule" +
                    (subscriptionTime === 1000 ? " displayNone" : "")
                  }
                >
                  /mois
                </p>
              </div>
              <p className="pricesPackPaymentModality">
                {subscriptionTime === 3
                  ? "Abonnement de 3 mois"
                  : subscriptionTime === 6
                  ? "Abonnement de 6 mois"
                  : subscriptionTime === 12
                  ? "Abonnement de 1 an"
                  : "Paiement en plusieurs fois"}
              </p>
            </div>
            <div className="pricesPackAdvantagesContainer">
              <div className="pricesPackAdvantage pricesPackAdvantagePackIncluded">
                <p>Pack "Business"</p>
              </div>
              <div className="pricesPackAdvantagePlus">
                <p>+</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Design e-commerce sur mesure (15 pages ou plus)</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>
                  Intégration d’une plateforme de paiement sécurisée (Stripe,
                  PayPal, etc.)
                </p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Gestion des stocks, commandes, et expéditions</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>
                  Création d’un espace client pour les utilisateurs (historique
                  de commandes, profil)
                </p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Intégration d’un module de suivi des commandes</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Formation client à la gestion du site</p>
              </div>
            </div>
          </div>
          <LinkScroll
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="pricesPackButton"
          >
            C'est parti !
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default Prices;
