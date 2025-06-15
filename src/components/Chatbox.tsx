import React from "react";
import ChatInput from "./chat/chat-input";
import BubbleContainer from "./chat/Bubble";

const formatDate = (date: Date) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === today.toDateString()) {
    return "Today";
  }
  if (date.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  }

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const suffix = ["th", "st", "nd", "rd"][
    (day % 10 > 3 ? 0 : day % 10) +
      (day === 11 || day === 12 || day === 13 ? 0 : 1)
  ];

  return `${day}${suffix} ${month}, ${year}`;
};

function Chatbox() {
  const date = new Date();
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 h-[85dvh] w-[500px] rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
      <header className="bg-gray-50 dark:bg-gray-800 flex-shrink-0 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
        <div className="py-4 px-6">
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Chatbot playground
          </p>
        </div>
      </header>
      <main className="flex flex-col flex-1 overflow-hidden">
        <section className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-500">
          <div className="p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center justify-center">
              {formatDate(date)}
            </div>
            <div className="flex flex-col gap-6">
              <BubbleContainer type="chatbot">
                How may I help you today?
              </BubbleContainer>
              <BubbleContainer type="user">
                I am looking for actions from Customer A
              </BubbleContainer>
            </div>
          </div>
        </section>
        <div className="flex-shrink-0 p-4">
          <ChatInput />
        </div>
      </main>
    </div>
  );
}

export default Chatbox;
