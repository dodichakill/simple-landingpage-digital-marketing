"use client";
import { dataFAQs } from "@/utils/dataFAQs";
import React from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number>(1);
  return (
    <section className="bg-white">
      <div className="container max-w-4xl p-3 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl">
          Pertanyaan Yang Sering Ditanyakan
        </h1>
        <p className="text-sm text-slate-600 mt-3 text-center">
          Berikut beberapa pertanyaan yang sering ditanyakan tentang kami
        </p>

        <div className="mt-12 space-y-8">
          {dataFAQs.map((item) => (
            <div
              key={item.id}
              className="border-2 bg-white border-gray-100 rounded-lg "
            >
              <button
                onClick={() => setActiveIndex(item.id)}
                className="flex items-center justify-between w-full p-8"
              >
                <h1 className="font-semibold text-gray-700">{item.title}</h1>

                {activeIndex === item.id ? (
                  <span className="text-gray-400 bg-gray-200 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>

              {activeIndex === item.id && (
                <>
                  <hr className="border-gray-200" />

                  <p className="p-8 text-sm text-gray-500">
                    {item.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
