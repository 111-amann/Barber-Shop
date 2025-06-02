import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className="w-full bg-zinc-800 rounded-2xl md:mb-4 sm:mb-3 mb-2 overflow-hidden cursor-pointer"
      onClick={() => setIsOpen(!isOpen)} 
    >
      <div className="flex items-center justify-between md:p-5 sm:p-3 p-2 group">
        <h1 className="font-semibold md:text-lg sm:text-base text-sm group-hover:text-yellow-400">
          {question}
        </h1>
        <i
          className={`ri-arrow-${
            isOpen ? "up" : "down"
          }-s-line md:text-lg sm:text-base text-sm text-zinc-500`}
        ></i>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: height + 32, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:px-5 sm:px-3 px-2 overflow-hidden sm:text-sm text-xs text-zinc-400"
          >
            <div ref={contentRef} className="py-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function Questions() {
  const faqs = [
    {
      question: "Do I need an appointment or can I walk in?",
      answer:
        "We welcome both appointments and walk-ins. However, we recommend booking in advance to ensure your preferred time slot, especially on weekends. You can book through our website, by phone, or via WhatsApp.",
    },
    {
      question: "How long does typical haircut take?",
      answer:
        "A standard men's haircut takes approximately 30-45 minutes. Services like beard trims add 15-20 minutes, while premium services like hot towel shaves may take up to an hour. We take our time to ensure quality results.",
    },
    {
      question: "Do you accept digital payments?",
      answer:
        "Yes, we accept UPI, credit/debit cards, and other digital methods.",
    },
    {
      question: "Do you offer any loyalty programs or discouts?",
      answer:
        "Yes, we offer a loyalty program where your 10th haircut is free. We also offer discounts for military personnel, first responders, seniors, and students with valid ID..",
    },
  ];

  return (
    <div className="w-full xl:min-h-screen h-fit bg-[#1a1a1a] px-6 text-white md:py-10 sm:py-8 py-5 relative overflow-hidden">
      <div className="circle1 w-52 h-52 rounded-full bg-yellow-400/5 absolute right-[-7%] top-[-9%]"></div>
      <div className="circle1 w-70 h-70 rounded-full bg-yellow-400/8 absolute right-[-14%] top-[-18%]"></div>
      <div className="circle2 w-50 h-50 rounded-full bg-yellow-400/5 absolute left-[-7%] bottom-[-7%]"></div>

      <div className="about text-center mb-10">
        <p className="text-yellow-400 font-semibold mb-2 text-xs sm:text-base">Common Questions</p>
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl mb-4">Frequently Asked Questions</h1>
        <p className="md:text-lg sm:text-base text-sm sm:w-[60%] w-full mx-auto text-zinc-600">
          Answers to common questions about our barbershop services.
        </p>
      </div>

      <div className="flex flex-col items-center md:gap-4 sm:gap-3 gap-2 w-full">
        <input
          type="text"
          placeholder="Search for questions"
          className="md:w-[60%] sm:w-[80%] w-full md:h-12 sm:h-10 h-8 bg-zinc-800 rounded-full border border-zinc-700 outline-none px-5 text-sm focus:border-zinc-500 focus:shadow focus:shadow-white/50 md:mb-6 sm:mb-4 mb-3"
        />

        <div className="faqs md:w-[60%] sm:w-[80%] w-full">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
