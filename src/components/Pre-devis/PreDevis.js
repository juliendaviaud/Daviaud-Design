/* import React, { useState } from "react";
import "./PreDevis.css";
import emailjs from "@emailjs/browser";

const PreDevis = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false); // État pour contrôler l'affichage du budget après soumission
  const [formData, setFormData] = useState({
    siteType: "",
    functionalities: [],
    description: "",
    budget: 0,
  });

  const prices = {
    "site-vitrine": 500,
    "site-ecommerce": 1000,
    blog: 300,
    reservation: 200,
    paiement: 250,
    multilingue: 150,
  };

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  const handleSiteTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      siteType: type,
      budget: prices[type],
    }));
    handleNextStep();
  };

  const handleFunctionalitiesChange = (func) => {
    const newFunctionalities = formData.functionalities.includes(func)
      ? formData.functionalities.filter((f) => f !== func)
      : [...formData.functionalities, func];

    const newBudget = newFunctionalities.reduce(
      (total, func) => total + prices[func],
      prices[formData.siteType]
    );

    setFormData((prev) => ({
      ...prev,
      functionalities: newFunctionalities,
      budget: newBudget,
    }));
    handleNextStep();
  };

  const handleDescriptionChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
	setSubmitted(true); // a supprimer une fois l'envoi de mail rétabli
    emailjs
      .send(
        "service_vh5rbu8",
        "template_xbpm1jn",
        {
          siteType: formData.siteType,
          functionalities: formData.functionalities.join(", "),
          description: formData.description,
          budget: formData.budget,
        },
        "7YZz1VwfsI6U9iPce"
      )
      .then( 
        
      );
  };

  return (
    <div className="preDevisForm">
      <h2>Demande de création de site internet</h2>
      {!submitted ? ( // Condition pour afficher les étapes uniquement si le formulaire n'est pas soumis
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h3>Quel type de site internet souhaitez-vous ?</h3>
              <button onClick={() => handleSiteTypeChange("site-vitrine")}>
                Site Vitrine
              </button>
              <button onClick={() => handleSiteTypeChange("site-ecommerce")}>
                Site E-commerce
              </button>
              <button onClick={() => handleSiteTypeChange("blog")}>Blog</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3>Quelles fonctionnalités souhaitez-vous ajouter ?</h3>
              <button
                onClick={() => handleFunctionalitiesChange("reservation")}
              >
                Système de Réservation
              </button>
              <button onClick={() => handleFunctionalitiesChange("paiement")}>
                Paiement en ligne
              </button>
              <button
                onClick={() => handleFunctionalitiesChange("multilingue")}
              >
                Site Multilingue
              </button>
              <div>
                <button onClick={handlePrevStep}>Précédent</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3>Décrivez rapidement votre projet</h3>
              <textarea
                value={formData.description}
                onChange={handleDescriptionChange}
              />
              <div>
                <button onClick={handlePrevStep}>Précédent</button>
                <button type="submit">Envoyer la demande de devis</button>
              </div>
            </div>
          )}
        </form>
      ) : (
        <div>
          <h4>Votre demande a été soumise avec succès !</h4>
          <h4>Budget estimé : {formData.budget} €</h4>
        </div>
      )}

      
    </div>
  );
};

export default PreDevis;
 */

import React, { useState } from 'react';
import "./PreDevis.css";
import emailjs from "@emailjs/browser";

function PreDevis() {
  const [step, setStep] = useState(1);
  const [typeSite, setTypeSite] = useState('');
  const [features, setFeatures] = useState([]);
  const [description, setDescription] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  // Calcul des prix des options
  const PRICING = {
    vitrine: 500,
    ecommerce: 1500,
    blog: 800,
    homepage: 200,
    contactForm: 100,
    blogFeature: 300,
  };

  const handleTypeSiteSelection = (type) => {
    setTypeSite(type);
    setTotalPrice(PRICING[type]);
  };

  const toggleFeatureSelection = (feature) => {
    let updatedFeatures;
    if (features.includes(feature)) {
      updatedFeatures = features.filter(f => f !== feature);
      setTotalPrice(totalPrice - PRICING[feature]);
    } else {
      updatedFeatures = [...features, feature];
      setTotalPrice(totalPrice + PRICING[feature]);
    }
    setFeatures(updatedFeatures);
  };

  const handleNext = () => {
    if ((step === 1 && typeSite) || (step === 2 && features.length > 0) || step === 3) {
      setStep(step + 1);
    }
    if (step === 3) {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    const templateParams = {
      typeSite,
      features: features.join(', '),
      description,
      totalPrice,
    };

    emailjs.send('service_vh5rbu8', 'template_xbpm1jn', templateParams, '7YZz1VwfsI6U9iPce%')
      .then((result) => {
        alert('Votre demande a été envoyée avec succès !');
      }, (error) => {
        alert('Une erreur est survenue, veuillez réessayer.');
      });
  };

  return (
    <div className="preDevisForm">
      {step === 1 && (
        <div>
          <h2>{step}. Quel type de site souhaitez-vous ?</h2>
          <button onClick={() => handleTypeSiteSelection('vitrine')}>
            Site Vitrine {typeSite === 'vitrine' && '✔️'}
          </button>
          <button onClick={() => handleTypeSiteSelection('ecommerce')}>
            Site E-commerce {typeSite === 'ecommerce' && '✔️'}
          </button>
          <button onClick={() => handleTypeSiteSelection('blog')}>
            Blog {typeSite === 'blog' && '✔️'}
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>{step}. Quelles fonctionnalités souhaitez-vous ?</h2>
          <button onClick={() => toggleFeatureSelection('homepage')}>
            Page d’accueil personnalisée {features.includes('homepage') && '✔️'}
          </button>
          <button onClick={() => toggleFeatureSelection('contactForm')}>
            Formulaire de contact {features.includes('contactForm') && '✔️'}
          </button>
          <button onClick={() => toggleFeatureSelection('blogFeature')}>
            Blog {features.includes('blogFeature') && '✔️'}
          </button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>{step}. Décrivez votre projet</h2>
          <textarea
            placeholder="Décrivez en quelques mots votre projet"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Résumé et estimation de prix</h2>
          <p>Type de site : {typeSite}</p>
          <p>Fonctionnalités : {features.join(', ')}</p>
          <p>Description : {description}</p>
          <p><strong>Prix total : {totalPrice}€</strong></p>
          {/* <button onClick={handleSubmit}>Envoyer la demande</button> */}
        </div>
      )}

      <div className="navigation-buttons">
        {step > 1 && <button onClick={handlePrevious}>Précédent</button>}
        {step < 3 && <button onClick={handleNext}>Suivant</button>}
        {step === 3 && <button onClick={handleNext}>Envoyer la demande</button>}
      </div>
    </div>
  );
}

export default PreDevis;
