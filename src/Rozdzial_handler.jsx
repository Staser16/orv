import { useEffect, useState } from 'react';
import '@fontsource/great-vibes';
import 'bootstrap/dist/css/bootstrap.css';
import Text from './Text';
import './App.css';
import '@fontsource/great-vibes';


const Wynik = ({ rozdzial, setRozdzial }) => {
  const opcje = [];
  for (let i = 689; i <= 941; i++) {
    opcje.push(
      <option className='bg-dark' style={{ textAlign: "center" }} key={i} value={i}>
        Rozdział {i}
      </option>
    );
  }

  const handleChange = (e) => {
    setRozdzial(Number(e.target.value)); // zmiana rozdziału po wyborze
  };

  return (
    <div className='change mb-4 mt-4 pt-2 pb-2 col-7 col-sm-6 col-md-3 col-lg-3 col-xl-2 col-xxl-2 mx-auto'>
      <div className='row'>
        <select className='wybor rounded mx-auto bg-transparent text-light' style={{ width: "600px" }} value={rozdzial} onChange={handleChange}>
          {opcje}
        </select>
      </div>
    </div>
  );
};
function Rozdzial_handler() {

  //zapis do pamieci
  const [rozdzial, setRozdzial] = useState(() => {
    return Number(localStorage.getItem("rozdzial")) || 0;
  });

  //odczyt z pamieci
  useEffect(() => {
    localStorage.setItem("rozdzial", rozdzial)
  }, [rozdzial]);

  return (
    <div>
      <br /><br />
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <img
          src="assets/images/KD.png" alt="example" style={{
            position: 'fixed',
            bottom: "0px",
            right: "80%",
            width: "auto",
            height: "100%",
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)"
          }} />
        <img
          src="assets/images/LH.png" alt="example" style={{
            position: 'fixed',
            bottom: "0px",
            right: "-5%",
            width: "auto",
            height: "100%",
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)"
          }} />
      </div>
      <div className='glowna '>
        <div className='row'>
          <div className=' col-lg-8 mx-auto col-sm-6 col-8 mx-auto col-xxl-10'><br /><br /><h1 className='tytul' >Omniscient Reader's Viewpoint<br />Side Stories</h1></div>
        </div>
      </div>
      <Wynik rozdzial={rozdzial} setRozdzial={setRozdzial} />
      <Text rozdzial={rozdzial} setRozdzial={setRozdzial} />
      <button className='mt-4 col-3 col-sm-2 col-md-2 col-lg-2 btn' style={{
        position: "fixed",
        bottom: "50px",
        right: "75%",
        fontSize: "20px",
        color: "white",
        borderRadius: "20px",
        backgroundColor: "rgb(00,00,00,0.5)",
        border: "5px groove white"

      }} onClick={() => { if (rozdzial > 689) setRozdzial(prev => prev - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Poprzedni Rozdział</button>
      <button className='mt-4 col-3 col-sm-2 col-md-2 col-lg-2 btn' style={{
        position: "fixed",
        bottom: "50px",
        right: "8%",
        fontSize: "20px",
        color: "white",
        borderRadius: "20px",
        backgroundColor: "rgb(00,00,00,0.5)",
        border: "5px groove white"

      }} onClick={() => { if (rozdzial < 941) setRozdzial(prev => prev + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Kolejny Rozdział</button>
    </div>
  );

}

export default Rozdzial_handler