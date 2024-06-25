import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">
          Contact us today to see how we can help your business thrive.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTA;
