// // VerticalCarousel.jsx

// import React, { useRef } from 'react';
// import './componentstyle.css';

// const VerticalCarousel = ({ items }) => {
//   const containerRef = useRef(null);

//   const scrollUp = () => {
//     if (containerRef.current) {
//       containerRef.current.style.transform = 'translateY(-100%)';
//     }
//   };

//   const scrollDown = () => {
//     if (containerRef.current) {
//       containerRef.current.style.transform = 'translateY(0)';
//     }
//   };

//   return (
//     <div className="vertical-carousel">
//       <div className="carousel-container" ref={containerRef}>
//         {items.map((item, index) => (
//           <div key={index} className="carousel-item">
//             {item}
//           </div>
//         ))}
//       </div>
//       <div className="navigation">
//         <button className="prev-button" onClick={scrollDown}>Previous</button>
//         <button className="next-button" onClick={scrollUp}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default VerticalCarousel;

// VerticalCarousel.jsx

import React, { useRef, useState } from 'react';
import './componentstyle.css';

const VerticalCarousel = ({ items }) => {
  const containerRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(0);

  const scrollUp = () => {
    if (currentItem > 0) {
      setCurrentItem(currentItem - 1);
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(-${currentItem * 100}%)`;
      }
    }
  };

  const scrollDown = () => {
    if (currentItem < items.length - 1) {
      setCurrentItem(currentItem + 1);
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(-${currentItem * 100}%)`;
      }
    }
  };

  return (
    <div className="vertical-carousel">
      <div className="carousel-container" ref={containerRef}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="prev-button" onClick={scrollUp} disabled={currentItem === 0}>
          Previous
        </button>
        <button
          className="next-button"
          onClick={scrollDown}
          disabled={currentItem === items.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VerticalCarousel;
