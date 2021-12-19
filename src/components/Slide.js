function Slide({ text, img, audio, isPlaying }) {
  return (
    <div className="slide">
      <img src={img} alt="" />
      <p>{text}</p>
      <button onClick={audio} disabled={isPlaying}>
        Reproducir
      </button>
    </div>
  );
}

export default Slide;
