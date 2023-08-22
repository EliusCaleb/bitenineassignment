// import React, { useState } from "react";
// import PropTypes from "prop-types";

// const Card = ({ title, frontText, backText }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const toggleFlip = () => {
//     setIsFlipped(!isFlipped);
//   };

//   return (
//     <div
//       className={`max-w-xs rounded overflow-hidden shadow-lg card group cardContainer ${
//         isFlipped ? "transform rotate-y-180" : ""
//       } xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl`}
//       onClick={toggleFlip}
//       style={{
//         width: "100%",
//         maxWidth: "600px",
//         height: "100%",
//         backgroundColor: "#f0f0f0", // Adjust background color
//         color: "#333", // Adjust text color
//         transition: "transform 0.5s ease-in-out", // Simplify transition
//       }}
//     >
//       <div
//         className="front relative transition-transform duration-500 ease-in-out transform cardRectangle"
//         style={{ width: "100%", height: "100%" }}
//       >
//         <div className="px-6 py-4 h-full flex flex-col justify-between">
//           <div>
//             <div className="font-bold text-xl mb-2">{title}</div>
//           </div>
//           <div className="text-gray-600">{frontText}</div>
//         </div>
//       </div>
//       <div
//         className="back absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out transform cardRectangle"
//         style={{
//           backgroundColor: "blue", // Adjust background color
//           width: "100%",
//           height: "100%",
//           color: "#fff", // Adjust text color
//         }}
//       >
//         <ul className="text-gray-200 text-sm list-disc h-full flex flex-col justify-between">
//           {backText.map((item, index) => (
//             <li key={index} className="mb-2">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   frontText: PropTypes.string.isRequired,
//   backText: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default Card;


import React from "react";

const Card = ({ title, details }) => {
  return (
    <div className="cardContainer w-72 h-20 perspective-3d">
      <div className="cardRectangle border-2 border-blue-500 relative h-full w-full transition-transform transform-style-preserve-3d">
        <div className="front">
          <p className="text-blue-500 text-lg font-semibold p-4">{title}</p>
        </div>
        <div className="back bg-blue-500 text-white transform rotate-y-180 flex justify-start p-4 rounded-md">
          <ul>
            {details.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;

