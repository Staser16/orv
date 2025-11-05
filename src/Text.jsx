import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Text({rozdzial, setRozdzial}) {

    const [tekst, setTekst] = useState("");



useEffect(() => {
  const name = `assets/orv/Orv${rozdzial}.txt`;
  fetch(name)
    .then(res => res.text())
    .then(data => {
      const lines = data.split('\n'); // rozdziel tekst na linie
      const firstLine = `<div class="pierwsza-linia">${lines[0]}</div>`;
      const rest = lines.slice(1).join('\n');
      setTekst(firstLine + "<br>" + `<img src='assets/images/orv-symbol.jpg' class="zdjecie"></img>` + "<br><br><br>" + rest); // dodaj odstęp
    })
    .catch(err => console.error("Błąd wczytywania pliku", err));
}, [rozdzial]);
            


return(
<div className="container-lg">
  <div className="row">
    <div className="top">
    </div>
    <div className="bg-image center">
    <div className="col-lg-6 mx-auto col-sm-4 col-md-6 col-xl-6 col-6 col-xxl-6 textPis" dangerouslySetInnerHTML={{ __html: tekst }} />
    </div>
    <div className='bottom'>
    <button className='btn btn-transparent text-white d_button' style={{fontSize:"20px"}} onClick={()=>{if(rozdzial<941) setRozdzial(prev=>prev+1); window.scrollTo({top: 0, behavior: "smooth"})}}>Kolejny Rozdział</button>
    </div>
  </div>
</div>
  )
}

export default Text;
