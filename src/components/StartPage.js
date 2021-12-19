import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="main-page">
      <div>
        <p>Un día de la vida de Pablo</p>
        <button
          className="button"
          onClick={() => {
            navigate("../story");
          }}
        >
          Ir a la historia
        </button>
      </div>
    </div>
  );
}

export default StartPage;
