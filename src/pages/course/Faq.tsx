import React, { useState } from 'react';

const faqData = [
  { question: "How do I change my account email?", answer: "You can log in to your account and change it from your Profile > Edit Profile. Then go to the general tab to change your email." },
  { question: "What should I do if my payment fails?", answer: "If your payment fails, try again using a different payment method or contact support." },
  { question: "What is your cancellation policy?", answer: "Our cancellation policy allows you to cancel your order within 24 hours for a full refund." },
  { question: "How do I check my course status?", answer: "You can check your order status from your account dashboard under Orders." },
  { question: "What is the process for refund?", answer: "The refund process starts once we receive the returned product. Refunds will be processed within 7-10 business days." },
  { question: "How many days should I wait for Certificates?", answer: "Refunds typically take 7-10 business days to process." },
  { question: "How instantly can I use my courses?", answer: "You can withdraw your money instantly if your account is verified." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" text-white min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl flex justify-center font-bold mb-4">FAQs</h1>
               <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="  border-b-2 text-[#cacacf] border-[#8c9494] p-4">
              <div onClick={() => toggleFaq(index)} className="flex justify-between items-center cursor-pointer">
                <h3 className="text-lg font-medium">{item.question}</h3>
                <span>{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && <p className="mt-2">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
