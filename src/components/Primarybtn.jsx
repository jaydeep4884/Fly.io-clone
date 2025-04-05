import React from "react";
function Primarybtn(props) {
  return (
    <div>
      <button className="group relative flex items-center gap-1 bg-[#7c3aed] text-white font-medium px-5 py-3 rounded-full hover:bg-[#6933c7] transition-all duration-300">
        <span>{props.name}</span>
        <span className="relative w-4 h-4 overflow-hidden">
          {/* Small arrow default */}
          <span className="absolute inset-0 transition-all duration-300 group-hover:-translate-x-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          {/* Full arrow slides in on hover */}
          <span className="absolute inset-0 translate-x-full transition-all duration-300 group-hover:translate-x-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </span>
      </button>
    </div>
  );
}

export default Primarybtn;
