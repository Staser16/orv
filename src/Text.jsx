import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Text({rozdzial, setRozdzial}) {

    const [tekst, setTekst] = useState("");

  

useEffect(() => {
  if(rozdzial>=689 && rozdzial<=942){
  var name = `assets/orv/Orv${rozdzial}.txt`;
}
  else{
  var name = `assets/orv/Orv689.txt`;
  }
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
  <div className="frame row">
  <div className="side col-md-12 col-lg-7">
    <div className="top"></div>
    <div className="center">
      <div
        className="textPis md-fs-1"
        dangerouslySetInnerHTML={{ __html: tekst }}
      />
    </div>
    <div className="bottom">
      <button
        className="btn btn-transparent text-white d_button"
        style={{ fontSize: "2vw", padding: "0vw" }}
        onClick={() => {
          if (rozdzial < 941) setRozdzial((prev) => prev + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Kolejny Rozdział
      </button>
    </div>
  </div>
</div>
  )
}

export default Text;
