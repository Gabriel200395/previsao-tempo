import { useEffect, useState } from "react";
import "./style.css";
function TelaPrevisaoTempo() {
  const [capitais, setCapitais] = useState({});
  useEffect(() => {
    async function request() {
      const apiPrevisaoTempo = await fetch(
        "https://apiprevmet3.inmet.gov.br/previsao/capitais"
      );
      const response = await apiPrevisaoTempo.json();
      setCapitais(response);
    }
    request();
  }, []);

  // const { Aracaju } = capitais;
  // const dia = Aracaju && Aracaju["01/03/2021"];
  return (
    <section className="container-principal">
      <div className="sub-container">
        <h1>Previsão Do Tempo</h1>
        <input type="text" placeholder="Insira o nome da cidade" />
      </div>
    </section>
  );
}

export default TelaPrevisaoTempo;
