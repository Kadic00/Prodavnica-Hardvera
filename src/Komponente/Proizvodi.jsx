import "../css/Proizvodi.css";
import { useState } from "react";

export default function Proizvodi() {
  return (
    <div className="Proizvodi">
      <div className="Filter">
        <Pretraga />
        <div>Cena</div>
        <div>Marka</div>
      </div>
      <div className="Krt">
        <Kartica />
        <Kartica />
        <Kartica />
        <Kartica />
      </div>
    </div>
  );
}

function Pretraga() {
  const [pretraga, setPretraga] = useState("");
  return <input type="text" onChange={(e) => setPretraga(e.target.value)} />;
}

function Kartica() {
  return (
    <div className="Kartica">
      <img
        src="https://annamariesdesign.wordpress.com/wp-content/uploads/2013/04/finished-red-gear-computers-outline1.jpg"
        alt="Kartica"
      />
      <div>Naziv</div>
    </div>
  );
}
