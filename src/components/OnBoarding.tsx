import { FaUserPlus, FaChalkboardTeacher, FaPlayCircle } from 'react-icons/fa';

const Onboarding = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Onboarding Process
        </h2>
        <p className="mt-4 text-gray-600">
          Seamlessly integrate our virtual employees into your operations.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaUserPlus className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 1</h3>
            <p className="text-gray-600">Initial setup and account creation.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaChalkboardTeacher className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 2</h3>
            <p className="text-gray-600">Team introduction and training.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <FaPlayCircle className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Step 3</h3>
            <p className="text-gray-600">Workflow integration and kickoff.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
