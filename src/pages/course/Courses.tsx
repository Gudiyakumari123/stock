import React, { useState } from 'react';

const Courses = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What is financial literacy?",
      answer: "Financial literacy is the ability to understand and effectively use various financial skills, including personal financial management, budgeting, and investing."
    },
   
    {
      question: "Why is investing important?",
      answer: "Investing is important because it helps to grow your money over time, which can help you achieve financial goals like buying a house, funding education, or saving for retirement."
    },
    {
      question: "How can I start investing?",
      answer: "You can start investing by educating yourself on different types of investments, setting financial goals, and beginning with a small, manageable amount of money."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-gray-900 body-font sm:rounded-3xl mb-5">
      <div className="w-full h-full md:w-1/2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZSbQ9yLJhVL6rx3N39oXqZH-6n5XOVI0ug&s"
          alt="Financial Literacy"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between w-full text-left text-lg font-medium text-gray-700"
              >
                <span>{faq.question}</span>
                <span>{openFaq === index ? '-' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="mt-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
