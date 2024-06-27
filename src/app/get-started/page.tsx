import Image from 'next/image';

const GetStarted = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Reduce your expenses by upto 72%
          </h1>
          <p className="text-gray-600 mb-8">
            We saved £40,000, if not more, per employee per year.
          </p>
          <p className="text-gray-600 mb-8">
            Malcolm Paice, COO Keystone Group UK
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-2/5 bg-white p-8 rounded-lg shadow-lg m-4">
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="contactNumber"
                >
                  Contact Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contactNumber"
                  type="text"
                  placeholder="Contact Number"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="website"
                >
                  Website
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="website"
                  type="text"
                  placeholder="Website"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="projectRequirement"
                >
                  Project Requirement
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="projectRequirement"
                  required
                >
                  <option>Select Requirement</option>
                  <option value="">Looking for an employee</option>
                  <option value="">Looking for service</option>
                  <option value="">Not sure</option>
                  <option value="">Looking for a job</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="projectDuration"
                >
                  Project Duration
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="projectDuration"
                  required
                >
                  <option>Select Duration</option>
                  <option>Less than 1 month</option>
                  <option>1 to 3 months</option>
                  <option>3 to 6 months</option>
                  <option>6 to 12 months</option>
                  <option>More than 1 year</option>
                  <option>Not sure</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="workRequirement"
                >
                  Work Requirement
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="workRequirement"
                  placeholder="Add Your Requirement"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit Your Requirement
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-8 rounded-lg shadow-lg m-4">
            <div className="text-center mb-8">
              <Image
                src="/images/testimonials/john-doe.jpg" // Replace with your image path
                alt="Zinadine Zidane"
                className="mx-auto rounded-full"
                width={80}
                height={80}
              />
              <p className="mt-4 text-gray-700 font-bold">Zinadine Zidane</p>
              <p className="text-gray-500">CEO of xyz.com</p>
            </div>
            <p className="text-gray-600 mb-8">
              If you want a better quality of life, don't hesitate and enlist
              the services of Virtual Employee, don't even think about it any
              longer... you will be glad you did...
            </p>
            <ul className="text-left list-disc list-inside">
              <li>Resumes within 24 hours with Quote</li>
              <li>Bespoke Recruitment</li>
              <li>
                Detailed analysis, technical consultation & documentation of
                your project by a senior Tech Lead (for technical domains)
              </li>
            </ul>
            <p className="text-gray-600 mt-4">You are in good company</p>
            <ul className="text-left list-disc list-inside">
              <li>2007 Est</li>
              <li>CMMI Level 3 Certified</li>
              <li>3 Offices</li>
              <li>2000+ Staff</li>
              <li>100% Money Back Guarantee</li>
            </ul>
            <p className="text-gray-600 mt-4">Featured In</p>
            <div className="flex justify-center space-x-4">
              <Image
                src="/images/testimonials/john-doe.jpg"
                alt="Logo 1"
                width={80}
                height={40}
              />
              <Image
                src="/images/testimonials/jane-smith.jpg"
                alt="Logo 2"
                width={80}
                height={40}
              />
              {/* Add more logos here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
