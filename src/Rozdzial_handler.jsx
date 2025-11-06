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
        <select className='wybor rounded mx-auto bg-transparent text-light' style={{ marginTop: "2vw" }} value={rozdzial} onChange={handleChange}>
          {opcje}
        </select>
    </div>
  );
};
function Rozdzial_handler() {

  useEffect(()=>{
    var firstVisit = localStorage.getItem("firstVisit");

    if(!firstVisit){
      localStorage.setItem("firstVisit", "true");
      setRozdzial(689);
    }
  },[]);

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
          <div className='tytul_pojemnik'><h1 className='tytul ' ><br />Omniscient Reader's Viewpoint<br />Side Stories</h1></div>
        </div>
      </div>
      <Wynik rozdzial={rozdzial} setRozdzial={setRozdzial} />
      <Text rozdzial={rozdzial} setRozdzial={setRozdzial} />
      <button className='button_p' onClick={() => { if (rozdzial > 689) setRozdzial(prev => prev - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Poprzedni Rozdział</button>
      <button className='button_n'onClick={() => { if (rozdzial < 941) setRozdzial(prev => prev + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>Kolejny Rozdział</button>
    </div>
  );

}

export default Rozdzial_handler
