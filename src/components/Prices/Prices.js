import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import "./Prices.css";
import thunderBolt from "../../assets/images/thunderbolt.svg";
import multiplePages from "../../assets/images/multiple-pages.svg";
import cart from "../../assets/images/cart.svg";
import checked from "../../assets/images/checked.svg";

const Prices = () => {
  const [packPaymentMethod, setpackPaymentMethod] = useState("Subscription");

  /* const toggle = () => {
    packPaymentMethod === "Subscription"
      ? setpackPaymentMethod("Purchase")
      : setpackPaymentMethod("Subscription");
  }; */
  const toggle = () => {
    packPaymentMethod === "Subscription"
      ? setpackPaymentMethod("Purchase")
      : setpackPaymentMethod("Subscription");
  };

  const switchPaymentMethodToSubscription = () => {
    if (packPaymentMethod !== "Subscription") {
      setpackPaymentMethod("Subscription");
    }
  };

  const switchPaymentMethodToPurchase = () => {
    if (packPaymentMethod !== "Purchase") {
      setpackPaymentMethod("Purchase");
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
            (packPaymentMethod === "Subscription"
              ? "activePaymentMethodLeft"
              : "activePaymentMethodRight")
          }
        ></span>
        <button
          className={
            "switch-button-case paymentSwitchButtonLeft" +
            " " +
            (packPaymentMethod === "Subscription" ? "active-case" : "")
          }
          onClick={() => switchPaymentMethodToSubscription()}
        >
          Abonnements
        </button>
        <button
          className={
            "switch-button-case paymentSwitchButtonRight" +
            " " +
            (packPaymentMethod === "Purchase" ? "active-case" : "")
          }
          onClick={() => switchPaymentMethodToPurchase()}
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
              {packPaymentMethod === "Subscription" ? (
                <div className="subscriptionPriceContainer">
                  <div className="subscriptionPriceAndCommitment">
                    <div className="subscriptionPrice">
                      <p className="pricesPackPrice subscriptionPackPrice">
                        50€
                      </p>
                      <p>/mois</p>
                    </div>
                    <p className="pricesPackPaymentModality">
                      Engagement d'un an
                    </p>
                  </div>
                  <span className="pricesPackHorizontalBar"></span>
                  <div className="subscriptionPriceAndCommitment">
                    <div className="subscriptionPrice">
                      <p className="pricesPackPrice subscriptionPackPrice">
                        70€
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
                  <p className="pricesPackPrice">1500€</p>
                  <p className="pricesPackPaymentModality">
                    Paiement en plusieurs fois
                  </p>
                </>
              )}

              {/* <p className="pricesPackPaymentModality">
                {packPaymentMethod === "Subscription"
                  ? "Engagement d'un an"
                  : "Paiement en plusieurs fois"}
              </p> */}
            </div>
            <div className="pricesPackAdvantagesContainer">
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Création d'un logo</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>{"Design professionnel & " + (packPaymentMethod === "Subscription" ? "personalisé" : "sur-mesure")}</p>
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
                <p>Hébergement & mise en ligne</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>Page composée de 5 sections</p>
              </div>
              <div className="pricesPackAdvantage">
                <img className="pricesPackAdvantageIcon" src={checked} alt="" />
                <p>
                  Sécurisation SSL
                  <br />
                  (pour un site sécurisé "https")
                </p>
              </div>
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
              {packPaymentMethod === "Subscription" ? (
                <div className="subscriptionPriceContainer">
                  <div className="subscriptionPriceAndCommitment">
                    <div className="subscriptionPrice">
                      <p className="pricesPackPrice subscriptionPackPrice">
                        78€
                      </p>
                      <p>/mois</p>
                    </div>
                    <p className="pricesPackPaymentModality">
                      Engagement d'un an
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
              )}

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
                <p>
                  Intégration de Google Analytics (suivi des visiteurs et
                  performance du site)
                </p>
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
              {packPaymentMethod === "Subscription" ? (
                <div className="subscriptionPriceContainer">
                  <div className="subscriptionPriceAndCommitment">
                    <div className="subscriptionPrice">
                      <p className="pricesPackPrice subscriptionPackPrice">
                        150€
                      </p>
                      <p>/mois</p>
                    </div>
                    <p className="pricesPackPaymentModality">
                      Engagement d'un an
                    </p>
                  </div>
                  <span className="pricesPackHorizontalBar"></span>
                  <div className="subscriptionPriceAndCommitment">
                    <div className="subscriptionPrice">
                      <p className="pricesPackPrice subscriptionPackPrice">
                        170€
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
                  <p className="pricesPackPrice">+4000€</p>
                  <p className="pricesPackPaymentModality">
                    Paiement en plusieurs fois
                  </p>
                </>
              )}

              {/* <p className="pricesPackPaymentModality">
                {packPaymentMethod === "Subscription"
                  ? "Engagement d'un an"
                  : "Paiement en plusieurs fois"}
              </p> */}
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
