import React from "react";
import { motion } from "framer-motion";
import { Code, Paintbrush, LayoutDashboard } from "lucide-react";

const CodingQuotes = () => {
  const quotes = [
    {
      text: "\u201CTalk is cheap. Show me the code.\u201D",
      author: "Linus Torvalds",
    },
    {
      text: "\u201CPrograms must be written for people to read, and only incidentally for machines to execute.\u201D",
      author: "Harold Abelson",
    },
    {
      text: "\u201CTruth can only be found in one place: the code.\u201D",
      author: "Robert C. Martin",
    },
    {
      text: "\u201CSimplicity is the soul of efficiency.\u201D",
      author: "Austin Freeman",
    },
    {
      text: "\u201CAny fool can write code that a computer can understand. Good programmers write code that humans can understand.\u201D",
      author: "Martin Fowler",
    },
  ];

  const skills = [
    {
      icon: <Code size={32} className="text-purple-500" />,
      title: "Clean Code",
      description: "Writing maintainable and human-readable code is my mantra.",
    },
    {
      icon: <Paintbrush size={32} className="text-purple-500" />,
      title: "UI/UX Design",
      description: "Crafting seamless and visually appealing user interfaces.",
    },
    {
      icon: <LayoutDashboard size={32} className="text-purple-500" />,
      title: "Responsive Layouts",
      description: "Ensuring designs adapt beautifully to all screen sizes.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-bl from-purple-900 via-purple-700 to-purple-600 text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full absolute top-10 left-10"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="w-72 h-72 bg-purple-300 opacity-10 blur-3xl rounded-full absolute bottom-10 right-10"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
      </div>

      <motion.div
        className="container mx-auto text-center px-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
          Inspiration for Coders
        </h2>
        <p className="text-lg italic mb-12 opacity-90 max-w-3xl mx-auto">
          A collection of wisdom and motivation to ignite your coding journey.
        </p>

        {/* Quotes Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gradient-to-tr from-white via-gray-100 to-gray-200 text-gray-900 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 relative"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-lg leading-relaxed mb-6 font-medium">
                "{quote.text}"
              </p>
              <p className="text-sm font-bold text-gray-600">- {quote.author}</p>
              <motion.div
                className="absolute inset-0 bg-purple-300 opacity-0 rounded-xl"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Showcase Front-End Skills */}
        <div className="bg-white p-10 rounded-xl shadow-2xl text-gray-900 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-purple-500 opacity-5 transform scale-150"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          <h3 className="text-3xl font-bold mb-8 text-center relative z-10">
            My Front-End Developer Skills
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md text-center transform hover:scale-105 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-sm text-gray-700">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CodingQuotes;
