import React, { useState, useEffect } from "react";

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: "url(https://medscraft.com/assets/wp-content/uploads/2019/08/3.jpg)"
    },
    {
      backgroundImage: "url(https://medscraft.com/assets/wp-content/uploads/2019/08/1.jpg)"
    },
    {
      backgroundImage: "url(https://medscraft.com/assets/wp-content/uploads/2019/08/1.jpg)"
    },
    {
      backgroundImage: "url(https://medscraft.com/assets/wp-content/uploads/2019/08/1.jpg)"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div style={{ padding: "100px" }} className="">
      <div
        className="slider-container"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "60px",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: slide.backgroundImage,
              display: index === currentSlide ? "block" : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              transition: "opacity 1s ease-in-out",
              textAlign: "center",
              padding: "50px 0",
              color: "white",
              borderRadius: "60px",
            }}
          >
            {/* Additional content like heading and description can be added here */}
          </div>
        ))}

        {/* Previous Arrow */}
        <span
          onClick={prevSlide}
          style={{
            position: "absolute",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            fontSize: "24px",
            cursor: "pointer",
            color: "white",
            zIndex: 10,
          }}
        >
          &#10094;
        </span>

        {/* Next Arrow */}
        <span
          onClick={nextSlide}
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            fontSize: "24px",
            cursor: "pointer",
            color: "white",
            zIndex: 10,
          }}
        >
          &#10095;
        </span>

        {/* Responsive Styles */}
        <style>
          {`
            @media (max-width: 768px) {
              .slider-container {
                border-radius: 30px;
              }
              .slide {
                height: 300px;
                padding: 50px 0;
              }
              span {
                font-size: 18px;
              } 
            }

            @media (max-width: 480px) {
              .slider-container {
                border-radius: 20px;
              }
              .slide {
                height: 200px;
                padding: 30px 0;
              }
              span {
                font-size: 16px;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default CustomSlider;
