import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Company',
    testimony:
      'Global Virtual Solutions has transformed the way we operate. Their virtual employees are skilled, dedicated, and a true extension of our team.',
    imageUrl: '/images/testimonials/john-doe.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, TechCorp',
    testimony:
      'The support we received from Global Virtual Solutions was phenomenal. They understood our needs and provided us with top-notch virtual employees.',
    imageUrl: '/images/testimonials/jane-smith.jpg',
  },
  {
    name: 'Mark Johnson',
    role: 'Manager, Sales Inc.',
    testimony:
      'Our project execution improved drastically after engaging with Global Virtual Solutions. Their process is seamless and highly efficient.',
    imageUrl: '/images/testimonials/mark-johnson.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Client Testimonials
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <FaQuoteLeft className="text-blue-500 text-4xl mb-4 mx-auto" />
              <p className="text-gray-600 italic mb-4">
                "{testimonial.testimony}"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
