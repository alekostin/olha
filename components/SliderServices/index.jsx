"use client";

import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import styles from "./styles/Slider.module.css";

const slides = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
  { id: 3, content: "Slide 3" },
];

const textVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function AnimatedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className={styles.slide}>
            <motion.div
              initial="hidden"
              animate={currentSlide === index ? "visible" : "hidden"}
              variants={textVariants}
              className={styles.slideContent}
            >
              {slide.content}
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

/* "use client";

import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

import styles from "./styles/Slider.module.css";

const slides = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
  { id: 3, content: "Slide 3" },
];

const textVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function SliderServices() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={slide.id} className={styles.slide}>
            <motion.div
              initial="hidden"
              animate={currentSlide === index ? "visible" : "hidden"}
              variants={textVariants}
              className={styles.slideContent}
            >
              {slide.content}
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
 */
