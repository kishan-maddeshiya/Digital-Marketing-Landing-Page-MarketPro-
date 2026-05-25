import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../data/services";


export default function ServicesSlider() {
  const [index, setIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);


  }, [index]);


  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (<section id="services" className="services-section">

    <div className="services-heading">
      <h2>Digital Marketing Services</h2>

      <p>
        Powerful marketing solutions designed to help your business
        increase traffic, leads, and revenue.
      </p>
    </div>



    <div className="slider-wrapper">

      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          className="service-card"

          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}

          transition={{ duration: 0.5 }}

          drag="x"
          dragConstraints={{ left: 0, right: 0 }}

          onDragEnd={(e, info) => {
            if (info.offset.x < -100) {
              nextSlide();
            }

            if (info.offset.x > 100) {
              prevSlide();
            }
          }}
        >

          <div className="service-icon">
            {services[index].icon}
          </div>

          <h3>{services[index].title}</h3>

          <p>{services[index].desc}</p>

          <button>Learn More</button>

        </motion.div>

      </AnimatePresence>


      <div className="slider-controls">

        <button onClick={prevSlide}>
          ← Prev
        </button>

        <button onClick={nextSlide}>
          Next →
        </button>

      </div>


      <div className="dots">

        {services.map((_, i) => (
          <span
            key={i}
            className={index === i ? "dot active-dot" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}

      </div>

    </div>

  </section>


  );
}
