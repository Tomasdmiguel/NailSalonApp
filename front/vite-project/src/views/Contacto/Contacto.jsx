import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import wsp from "./img/wsp.jpeg";
import email from "./img/email.jpg";
import styles from "./Contacto.module.css";

const Contacto = () => {
  const slides = [
    {
      image: wsp,
      alt: "WhatsApp",
      caption: "2494588480",
    },
    {
      image: email,
      alt: "Email",
      caption: "Tomasdeskate@hotmail.es",
    },
    
  ];

  return (
    <div className="container">
      <h1 className={styles.title}>Contacto</h1>
      <p className={styles.subtitle}>¡Ponte en contacto con nosotros!</p>
      <div
        className={`d-flex justify-content-center ${styles.carouselContainer}`}>
        <Carousel style={{ maxWidth: "600px" }}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index} className="rounded-3">
              <img
                className={`d-block w-100 ${styles.carouselImage}`}
                src={slide.image}
                alt={slide.alt}
              />
              <Carousel.Caption>
                
                <p className={styles.textblack}>{slide.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Contacto;
