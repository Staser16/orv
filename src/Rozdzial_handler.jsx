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
    <div className='change '>
        <select className='wybor rounded mx-auto bg-transparent text-light' style={{ width: "20vw", fontSize: "2vw", marginTop: "2vw" }} value={rozdzial} onChange={handleChange}>
          {opcje}
        </select>
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
            right: "80vw",
            width: "25vw",
            height: "100%",
            maskImage: "linear-gradient(to right, black, transparent)",
            WebkitMaskImage: "linear-gradient(to right, black, transparent)"
          }} className='d-md-block d-none'/>
        <img
          src="assets/images/LH.png" alt="example" style={{
            position: 'fixed',
            bottom: "0px",
            right: "-5vw",
            width: "25vw",
            height: "100%",
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)"
          }} className='d-md-block d-none'/>

      </div>
      <div className='row ' style={{ width: "auto"}}>
        <div className='glowna col-12 col-lg-9' style={{width: "100vw"}}>
          <div><h1 className='tytul ' ><br />Omniscient Reader's Viewpoint<br />Side Stories</h1></div>
        </div>
      </div>
      <Wynik rozdzial={rozdzial} setRozdzial={setRozdzial} />
      <Text rozdzial={rozdzial} setRozdzial={setRozdzial} />
      <button className=' btn' style={{
        position: "fixed",
        width: "18vw",
        bottom: "2vw",
        right: "80vw",
        fontSize: "1.2vw",
        textAlign: "center",
        color: "white",
        borderRadius: "20px",
        backgroundColor: "rgb(00,00,00,0.5)",
        border: "0.6vw groove white"

      }} onClick={() => { if (rozdzial > 689) setRozdzial(prev => prev - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Poprzedni Rozdział</button>
      <button className='mt-4 col-3 col-sm-2 col-md-2 col-lg-2 btn' style={{
        position: "fixed",
        bottom: "2vw",
        width: "18vw",
        textAlign: "center",
        right: "1vw",
        fontSize: "1.2vw",
        color: "white",
        borderRadius: "20px",
        backgroundColor: "rgb(00,00,00,0.5)",
        border: "0.6vw groove white"

      }} onClick={() => { if (rozdzial < 941) setRozdzial(prev => prev + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Kolejny Rozdział</button>
    </div>
  );

}

export default Rozdzial_handler
