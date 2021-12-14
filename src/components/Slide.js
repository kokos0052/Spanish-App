

function Slide({text, img}) {
    return (
    <div className="slide">
        <img src={img} />
        <p>{text}</p>
    </div>
    )
}

export default Slide;
