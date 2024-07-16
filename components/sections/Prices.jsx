"use client";

export default function PricingTable() {
  const services = [
    {
      name: "Maquillage permanent",
      price: "de 100€ à 150€",
      duration: "selon la zone",
      description: [
        "Sourcils, lèvres et eye-liners parfaits.",
        "Apparence soignée sans maquillage quotidien.",
        "Utilisation de matériaux sûrs et de haute qualité.",
        "Résultat naturel et harmonieux.",
      ],
    },
    {
      name: "Massage facial sous vide",
      price: "30€",
      duration: "par séance",
      description: [
        "Amélioration du tonus de la peau.",
        "Réduction des gonflements et des rides.",
        "Peau fraîche et éclatante après la première séance.",
      ],
    },
    {
      name: "Lamination des cils",
      price: "30€",
      duration: "par séance",
      description: [
        "Cils épais, longs et soignés.",
        "Regard expressif et attrayant sans efforts supplémentaires.",
      ],
    },
    {
      name: "Nettoyage du visage",
      price: "40€",
      duration: "par séance",
      description: [
        "Nettoyage en profondeur des pores.",
        "Nettoyage matériel et manuel.",
        "Teint sain.",
        "Restauration de la fraîcheur naturelle de la peau.",
      ],
    },
    {
      name: "Coloration et épilation des sourcils",
      price: "30€",
      duration: "par séance",
      description: [
        "Forme et couleur parfaites des sourcils.",
        "Apparence harmonieuse et stylée.",
        "Approche individuelle pour chaque client.",
      ],
    },
  ];

  return (
    <section id="prix">
      <div className="container">
        <h2 className="title lg:max-w-[570px] lg:ml-auto">Prix</h2>
        <div className="price-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-price">
                <strong>Prix:</strong> {service.price}
              </p>
              <p className="service-duration">
                <strong>Durée:</strong> {service.duration}
              </p>
              <ul className="service-description">
                {service.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
          <style jsx>{`
            .price-list {
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 8px;
            }
            .service-item {
              margin-bottom: 20px;
              padding: 15px;
              border: 1px solid #ddd;
              border-radius: 8px;
              background-color: #fff;
            }
            .service-name {
              font-size: 1.5em;
              margin-bottom: 10px;
              color: #333;
            }
            .service-price,
            .service-duration {
              font-size: 1.2em;
              margin-bottom: 10px;
              color: #555;
            }
            .service-description {
              list-style: disc inside;
              color: #666;
            }
            .service-description li {
              margin-bottom: 5px;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
