import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-gray-200">
      <div className="max-w-5xl mx-auto bg-gray-800/90 shadow-2xl rounded-lg overflow-hidden backdrop-blur-lg">
        <div className="grid md:grid-cols-3">
          {/* Profile Picture */}
          <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 flex items-center justify-center p-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src="/IMG_6067.JPG"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-2 p-8">
            <header className="mb-6">
              <h1 className="text-4xl font-extrabold text-purple-500">About Me</h1>
              <p className="text-lg text-gray-400 italic">Passionate Developer and Lifelong Learner</p>
            </header>

            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hello! I'm Sabelo Sibaya, proficient in modern web technologies and languages, with a strong foundation in both front-end and back-end development. Passionate about creating responsive and user-friendly web applications. Seeking a junior role to leverage my skills and contribute to innovative projects.
              </p>

              <h2 className="text-2xl font-bold text-purple-500 mt-8 mb-4">Education</h2>
              <div className="text-gray-300 mb-6">
                <p>
                  <strong>ALX-AFRICA</strong>
                  <br />
                  Graduate of an Intensive Full Stack Software Engineering Program
                  <br />
                  Specializing in Front-End Development
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Completed a comprehensive curriculum covering both front-end and back-end technologies.</li>
                  <li>Gained proficiency in modern web technologies and languages.</li>
                  <li>Developed a strong foundation in creating responsive and user-friendly web applications.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-purple-500 mt-8 mb-4">Interests</h2>
              <p className="text-gray-300 leading-relaxed">
                Web Development, UI/UX Design, Open Source, and Learning as Much as I Can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
