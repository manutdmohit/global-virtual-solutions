const Pricing = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Pricing Information
        </h2>
        <p className="mt-4 text-gray-600">
          We offer competitive pricing models to suit your business needs.
          Choose from hourly rates, subscription plans, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Basic Plan
            </h3>
            <p className="text-gray-600 mb-4">
              Ideal for small businesses or startups. Includes basic
              administrative support and customer service.
            </p>
            <p className="text-4xl font-extrabold text-blue-600 mb-4">$500</p>
            <p className="text-gray-600 mb-4">per month</p>
            <ul className="text-left list-disc list-inside text-gray-600 mb-4">
              <li>10 hours of support</li>
              <li>Email support</li>
              <li>Basic reporting</li>
            </ul>
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Standard Plan
            </h3>
            <p className="text-gray-600 mb-4">
              Perfect for growing businesses. Includes additional support
              services and priority response times.
            </p>
            <p className="text-4xl font-extrabold text-blue-600 mb-4">$1,000</p>
            <p className="text-gray-600 mb-4">per month</p>
            <ul className="text-left list-disc list-inside text-gray-600 mb-4">
              <li>25 hours of support</li>
              <li>Priority email support</li>
              <li>Detailed reporting</li>
              <li>Monthly consultations</li>
            </ul>
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Premium Plan
            </h3>
            <p className="text-gray-600 mb-4">
              Best for large businesses or enterprises. Includes comprehensive
              support and dedicated account management.
            </p>
            <p className="text-4xl font-extrabold text-blue-600 mb-4">$2,500</p>
            <p className="text-gray-600 mb-4">per month</p>
            <ul className="text-left list-disc list-inside text-gray-600 mb-4">
              <li>Unlimited support hours</li>
              <li>Dedicated account manager</li>
              <li>Priority email and phone support</li>
              <li>Custom reporting and analytics</li>
              <li>Weekly consultations</li>
            </ul>
            <a
              href="/contact"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
