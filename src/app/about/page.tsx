'use client';

import Image from 'next/image';

const AboutPage = () => {
  return (
    <div>
      <section className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800">About Us</h2>
            <p className="mt-4 text-gray-600">
              At Global Virtual Solutions, we are dedicated to revolutionizing
              the way businesses operate by providing top-tier virtual employee
              services across the globe.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/about/about1.png"
                alt="Our Team"
                width={800}
                height={533}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                Our mission is to empower companies of all sizes to enhance
                productivity, efficiency, and innovation by offering access to a
                diverse pool of highly skilled professionals, irrespective of
                geographical boundaries.
              </p>
              <p className="text-gray-600">
                We specialize in delivering customized virtual staffing
                solutions tailored to meet the unique needs of each client,
                ranging from administrative support and customer service to
                specialized IT, marketing, and creative roles.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:space-x-8 mt-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/about/about2.png"
                alt="Our Office"
                width={800}
                height={533}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-4">
                With a commitment to excellence, reliability, and seamless
                integration, Global Virtual Solutions ensures that businesses
                can focus on their core objectives while we handle the
                complexities of recruitment, training, and management of their
                virtual workforce.
              </p>
              <p className="text-gray-600">
                Our state-of-the-art technology, combined with our rigorous
                selection process, guarantees that our clients receive the best
                talent available, driving their success in an increasingly
                competitive global market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
