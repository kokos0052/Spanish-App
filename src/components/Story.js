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



function Story() {
    
    const slidesDate = [
        {img: image1, text: 'Este es Pablo, todos los días se levanta a las siete y media.Después de despertarse, hace la cama, se cepilla los dientes y se va a dar una ducha'},
        {img: image2, text: 'Después de una ducha, Pablo desayuna. Durante el desayuno, le gusta escuchar la radio o ver las noticias.Pablo es muy aficionado al desayuno.'},
        {img: image3, text: 'Pablo vive cerca de la Universidad. Por lo tanto, después del Desayuno a las quince y nueve, va a pie a la Universidad, a veces mientras escucha música.'},
        {img: image4, text: 'Las clases en la Universidad duran de nueve a tres y media.Pablo estudia como programador todas las clases se sienta en el ordenador y aprende varios programas y lenguajes de programación.'},
        {img: image5, text: 'Después de la clase es la hora del almuerzo. A Pablo le gusta mucho la cocina Oriental, por lo que a menudo come fideos o rolos.'},
        {img: image6, text: 'Pablo va a empezar los exámenes pronto. Por lo tanto, después del almuerzo, inmediatamente va a la biblioteca, donde comienza su preparación para los exámenes.'},
        {img: image7, text: 'А las cinco en punto va a correr. A Pablo le gusta mantenerse en forma por lo que gasta mucha fuerza en varios ejercicios. Después de correr, él toma una Ducha.'},
        {img: image8, text: 'A las siete y quince, Pablo va al cine junto a sus amigos. Le encantan las comedias, así que se ríen mucho durante la película.'},
        {img: image9, text: 'A las nueve está cenando con su familia. La madre de Pablo cocina muy sabroso, por lo que siempre se come todo'},
        {img: image10, text: 'A las nueve comienza el programa favorito de Pablo. Y pasa el resto del día mirándolo.'},
        {img: image11, text: 'Después del espectáculo, Pablo se va a la cama. Él es muy, porque hoy ha sido un día muy ocupado'},
    ];

    return (
        <div className="story">
            <div className="slider-container">
                <Slider infinite={false} swipe={false}>
                    {slidesDate.map(slide => <Slide img={slide.img} text={slide.text} />)}
                </Slider>
            </div>
        </div>
    )
}

export default Story;