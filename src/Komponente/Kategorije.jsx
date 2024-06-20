import "../css/Kategorije.css";
const niz = [
  {
    id: 1,
    slika:
      "https://annamariesdesign.wordpress.com/wp-content/uploads/2013/04/finished-red-gear-computers-outline1.jpg",
    tekst: "Ja sam tekst",
  },
  {
    id: 2,
    slika:
      "https://annamariesdesign.wordpress.com/wp-content/uploads/2013/04/finished-red-gear-computers-outline1.jpg",
    tekst: "Ja sam tekst 2",
  },
  {
    id: 3,
    slika:
      "https://annamariesdesign.wordpress.com/wp-content/uploads/2013/04/finished-red-gear-computers-outline1.jpg",
    tekst: "Ja sam tekst 3",
  },
];
export default function Kategorije() {
  return (
    <div className="Kategorije">
      {niz.map((it) => (
        <TipKategorije id={it.id} slika={it.slika} tekst={it.tekst} />
      ))}
    </div>
  );
}

function TipKategorije({ id, slika, tekst }) {
  return (
    <div className="TipKat">
      <div className="KatSlik">
        <img src={slika} alt="Slika1" />
      </div>
      <div>{tekst}</div>
    </div>
  );
}
