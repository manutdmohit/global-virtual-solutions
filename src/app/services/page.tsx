import Image from 'next/image';

const ServicesPage = () => {
  return (
    <div>
      <section className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600">
              We offer a wide range of virtual staffing solutions tailored to
              meet the unique needs of each client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/services/administrative-support.png"
                alt="Administrative Support"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Administrative Support
              </h3>
              <p className="text-gray-600">
                Efficient administrative services to handle your day-to-day
                tasks, ensuring smooth operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/services/customer-service.png"
                alt="Customer Service"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Customer Service
              </h3>
              <p className="text-gray-600">
                Professional customer service support to manage your customer
                interactions and enhance satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/services/it-support.png"
                alt="IT Support"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                IT Support
              </h3>
              <p className="text-gray-600">
                Comprehensive IT services to support your technological needs
                and ensure seamless operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/services/marketing.png"
                alt="Marketing"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Marketing
              </h3>
              <p className="text-gray-600">
                Innovative marketing strategies to promote your business and
                drive growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/services/creative-services.png"
                alt="Creative Services"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Creative Services
              </h3>
              <p className="text-gray-600">
                Creative solutions including design, content creation, and more
                to enhance your brand's presence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/services/hr-support.png"
                alt="HR Support"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                HR Support
              </h3>
              <p className="text-gray-600">
                Human resources support to manage your recruitment, onboarding,
                and employee relations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
