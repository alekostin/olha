// components/PricingTable.js
const pricingPlans = [
  {
    title: "Basic",
    price: "$10",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Standard",
    price: "$20",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Premium",
    price: "$30",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

export default function PricingTable() {
  return (
    <section id="prix">
      <div className="container">
        <div className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Prix</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                    <p className="mt-4 text-3xl font-bold mb-6">{plan.price}</p>
                    <ul className="mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 py-1">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="bg-primary text-white py-2 px-4 rounded-full">
                      Choose Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
