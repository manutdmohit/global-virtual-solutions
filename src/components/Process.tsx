import Link from 'next/link';
import {
  FaClipboardList,
  FaHandshake,
  FaFileSignature,
  FaPenNib,
  FaUsers,
  FaCogs,
  FaComments,
  FaCheckCircle,
} from 'react-icons/fa';

const Process = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          How It Works
        </h2>
        <p className="mt-4 text-gray-600">
          Our step-by-step process explains how clients can engage our services,
          from initial inquiry to project completion.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaClipboardList className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1</h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Initial Inquiry
            </h4>
            <p className="text-gray-600">
              Reach out to us through our contact form or support channels.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaHandshake className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2</h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Consultation
            </h4>
            <p className="text-gray-600">
              Schedule a consultation with our experts to explore our services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaFileSignature className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 3</h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Proposal
            </h4>
            <p className="text-gray-600">
              Receive a detailed proposal tailored to your requirements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaPenNib className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 4</h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Agreement
            </h4>
            <p className="text-gray-600">
              Review and sign the agreement to officially start the project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaUsers className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 5</h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Onboarding
            </h4>
            <p className="text-gray-600">
              Seamless integration of our virtual employees into your
              operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaCogs className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 6</h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Project Execution
            </h4>
            <p className="text-gray-600">
              Our virtual employees work on your project with regular updates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaComments className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 7</h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Review and Feedback
            </h4>
            <p className="text-gray-600">
              Regular reviews and feedback to ensure we meet your expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaCheckCircle className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 8</h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Project Completion
            </h4>
            <p className="text-gray-600">
              Final review, handover of deliverables, and ensuring satisfaction.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            href="/how-it-works"
            className="text-blue-600 font-bold underline hover:text-blue-800"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;
