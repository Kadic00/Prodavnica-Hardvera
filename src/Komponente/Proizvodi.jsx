import "../css/Proizvodi.css";
import { useState } from "react";

export default function Proizvodi() {
  const [stranica, setStranica] = useState(1);
  const [broj, setBroj] = useState(10);
  console.log(stranica);
  const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="Proizvodi">
      <div className="Filter">
        <Pretraga />
        <div>Cena</div>
        <div>Marka</div>
      </div>
      <div className="Krt">
        {niz.slice((stranica - 1) * 10, stranica * 10).map((it) => (
          <Kartica />
        ))}
      </div>
      <div className="Str">
        {[...Array(Math.ceil(niz.length / 10)).keys()]
          .map((i) => i + 1)
          .map((it) => (
            <Stranice broj={it} setStr={setStranica} />
          ))}
      </div>
    </div>
  );
}
function Stranice({ broj, setStr }) {
  return (
    <div className="Stranica" onClick={() => setStr(broj)}>
      {broj}
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
