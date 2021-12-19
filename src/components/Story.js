import Slider from "react-slick";
import Slide from "./Slide";

import image1 from "../assets/img/pic_1.jpg";
import image2 from "../assets/img/pic_2.jpg";
import image3 from "../assets/img/pic_3.jpg";
import image4 from "../assets/img/pic_4.jpg";
import image5 from "../assets/img/pic_5.jpg";
import image6 from "../assets/img/pic_6.jpg";
import image7 from "../assets/img/pic_7.jpg";
import image8 from "../assets/img/pic_8.jpg";
import image9 from "../assets/img/pic_9.jpg";
import image10 from "../assets/img/pic_10.jpg";
import image11 from "../assets/img/pic_11.jpg";

import audio1 from "../assets/audio/audio_1.mp3";
import audio2 from "../assets/audio/audio_2.mp3";
import audio3 from "../assets/audio/audio_3.mp3";
import audio4 from "../assets/audio/audio_4.mp3";
import audio5 from "../assets/audio/audio_5.mp3";
import audio6 from "../assets/audio/audio_6.mp3";
import audio7 from "../assets/audio/audio_7.mp3";
import audio8 from "../assets/audio/audio_8.mp3";
import audio9 from "../assets/audio/audio_9.mp3";
import audio10 from "../assets/audio/audio_10.mp3";
import audio11 from "../assets/audio/audio_11.mp3";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Howl } from "howler";

function Story() {
  const navigate = useNavigate();
  const slidesDate = [
    {
      img: image1,
      audio: audio1,
      text: "Este es Pablo, todos los días se levanta a las siete y media.Después de despertarse, hace la cama, se cepilla los dientes y se va a  ducharse",
    },
    {
      img: image2,
      audio: audio2,
      text: "Después de la ducha, Pablo desayuna. Durante el desayuno, le gusta escuchar la radio o ver las noticias.",
    },
    {
      img: image3,
      audio: audio3,
      text: "Pablo vive cerca de la Universidad. Por lo tanto, después del desayuno a las ocho y nueve, va a pie a la Universidad, a veces  escucha la música por el camino.",
    },
    {
      img: image4,
      audio: audio4,
      text: "Las clases en la Universidad duran desde las nueve has ta las tres y media.Pablo quiere ser programador, por eso todas las clases se sienta delante del ordenador y aprende varios programas y lenguajes de programación.",
    },
    {
      img: image5,
      audio: audio5,
      text: "Después de las clases es la hora de almuerzo. A Pablo le gusta mucho la cocina oriental, por lo que a menudo come fideos o rolos.",
    },
    {
      img: image6,
      audio: audio6,
      text: "Pablo va a dar los exámenes pronto. Por eso, después del almuerzo, inmediatamente va a la biblioteca, donde comienza a prepararse para los exámenes.",
    },
    {
      img: image7,
      audio: audio7,
      text: "А las cinco en punto va a correr. A Pablo le gusta mantenerse en forma por lo que gasta mucha fuerza en varios ejercicios. Después de correr, él se ducha.",
    },
    {
      img: image8,
      audio: audio8,
      text: "A las siete y quince, Pablo va al cine con sus amigos. Le encantan las comedias, así que se ríen mucho durante la película.",
    },
    {
      img: image9,
      audio: audio9,
      text: "A las nueve Cena con su familia. La madre de Pablo cocina muy bien, por eso  siempre se come todo.",
    },
    {
      img: image10,
      audio: audio10,
      text: "A las nueve comienza el programa favorito de Pablo. Y pasa el resto del día mirándolo.",
    },
    {
      img: image11,
      audio: audio11,
      text: "Después de ver el espectáculo, Pablo se va a la cama. Él esta muy cansado, porque hoy ha sido un día muy dificil.",
    },
  ];
  const [showQustionsButton, setShowQustionsButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function soundPlay(src) {
    const sound = new Howl({ src });
    sound.play();
    sound.on("play", () => setIsPlaying(true));
    sound.on("end", () => setIsPlaying(false));
  }

  return (
    <div className="story">
      <div className="slider-container">
        <Slider
          infinite={false}
          swipe={false}
          afterChange={(a) => {
            if (a === slidesDate.length - 1) {
              setShowQustionsButton(true);
            } else {
              setShowQustionsButton(false);
            }
          }}
        >
          {slidesDate.map((slide, i) => (
            <Slide
              img={slide.img}
              text={slide.text}
              audio={() => soundPlay(slide.audio)}
              isPlaying={isPlaying}
              key={i}
            />
          ))}
        </Slider>
      </div>
      {showQustionsButton && (
        <button
          className="question-button"
          onClick={() => navigate("../questions")}
        >
          Ir a preguntas
        </button>
      )}
    </div>
  );
}

export default Story;
