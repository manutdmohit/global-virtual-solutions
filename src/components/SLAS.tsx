const SLAS = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Service Level Agreements (SLAs)
        </h2>
        <p className="mt-4 text-gray-600">
          Our commitments regarding service quality, response times, and client
          support.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Response Time
            </h3>
            <p className="text-gray-600">
              We guarantee a response time of 1 hour for all critical issues and
              24 hours for non-critical issues.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Uptime Commitment
            </h3>
            <p className="text-gray-600">
              Our services are designed to ensure 99.9% uptime, providing
              reliable access to your operations.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Issue Resolution
            </h3>
            <p className="text-gray-600">
              We strive to resolve all issues within 24 hours for critical
              problems and within 3 days for non-critical problems.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Data Security
            </h3>
            <p className="text-gray-600">
              Our top priority is to protect your data with industry-standard
              encryption and security protocols.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Customer Support
            </h3>
            <p className="text-gray-600">
              Our dedicated support team is available 24/7 to assist you with
              any issues or queries you may have.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Service Monitoring
            </h3>
            <p className="text-gray-600">
              We continuously monitor our services to ensure optimal performance
              and quick resolution of any issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SLAS;
