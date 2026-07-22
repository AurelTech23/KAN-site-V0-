
<img src="/src/logossfondblanc.png" alt="huiles" id="monimage2" onclick="showPage('page1')"/>

// Changement de page
window.showPage = function(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');

  if (pageId === 'page1') {
    setTimeout(() => map.invalidateSize(), 100);
  }
};

// Carte Leaflet
const initialCenter = [47.8, 13.8];
const initialZoom = 4;
const map = L.map('map').setView(initialCenter, initialZoom);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// Marqueurs
const franceAnjouMarker = L.marker([47.47,-0.55]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://tse4.mm.bing.net/th/id/OIP.BER4vYgAaItdmAOt2M-dcQHaFA?rs=1&pid=ImgDetMain&o=7&rm=3" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Camomille Romaine</h3>
        <p style="margin:5px; font-size:12px;">🌼 Favorise le sommeil et apaise les peaux sensibles.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Anjou, France</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Py'still</p>
  </div>`);
franceAnjouMarker.on('click', function () { map.flyTo([46.603354, 1.888334], 5); });


const franceQuercyMarker = L.marker([44.4,1.54]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://www.fermedelours.fr/wp-content/uploads/2021/03/lavande-fine-min.png" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Lavande Fine</h3>
        <p style="margin:5px; font-size:12px;">🌿 Réduit le stress, favorise le sommeil.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Quercy, France</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Py'still</p>
  </div>`);
franceQuercyMarker.on('click', function () { map.flyTo([46.603354, 1.888334], 5); });


const franceOccitanieMarker = L.marker([43.6,3.88]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://tse3.mm.bing.net/th/id/OIP.J8P9wvHJQzL0xojkP8c0eQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Menthe Poivrée</h3>
        <p style="margin:5px; font-size:12px;">🌿 Soulage les maux de tête, favorise la concentration.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Occitanie, France</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Py'still</p>
  </div>`);
franceOccitanieMarker.on('click', function () { map.flyTo([46.603354, 1.888334], 5); });


const franceHautesPyreneesMarker = L.marker([43.09,0.11]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://www.rustica.fr/images/shutterstock-198891434.jpg" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Carotte</h3>
        <p style="margin:5px; font-size:12px;">🥕 Redonne éclat et vitalité à la peau.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Hautes-Pyrénées, France</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Py'still</p>
  </div>`);
franceHautesPyreneesMarker.on('click', function () { map.flyTo([46.603354, 1.888334], 5); });


const franceSudOuestMarker = L.marker([44.50,-0.57]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://th.bing.com/th/id/R.dad3def06c97a876d25842cb6ad50b22?rik=n8hbUfmKV9UOTQ&pid=ImgRaw&r=0" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Immortelle</h3>
        <p style="margin:5px; font-size:12px;">🌼 Anti-âge, atténue les marques et rougeurs.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Sud-Ouest, France</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Py'still</p>
  </div>`);
franceSudOuestMarker.on('click', function () { map.flyTo([46.603354, 1.888334], 5); });


const ItalieMarker = L.marker([41.87, 12.57]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://minnetonkaorchards.com/wp-content/uploads/2021/06/Bergamot-Orange-Tree-640x427.jpg" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Bergamote</h3>
        <p style="margin:5px; font-size:12px;">🌿 Fraîcheur en parfum et cosmétiques.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Italie</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Florihana</p>
  </div>`);
ItalieMarker.on('click', function () { map.flyTo([43.828633, 11.174411], 6); });


const EspagneMarker = L.marker([40.46, -3.74]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://img.cuisineaz.com/1200x675/2020/11/30/i156336-citron-vert.jpeg" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Citron Vert</h3>
        <p style="margin:5px; font-size:12px;">🌿 Fraîcheur en parfum et cosmétiques.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Espagne</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Florihana</p>
  </div>`);
EspagneMarker.on('click', function () { map.flyTo([40.854495, -3.869755], 6); });


const AllemagneMarker = L.marker([51.17, 10.45]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://tse1.mm.bing.net/th/id/OIP.Mckl1GkOhJRnJMEsFl_iQwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Mûre graine</h3>
        <p style="margin:5px; font-size:12px;">🌿 Extraction CO2, préserve les actifs aromatiques.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Allemagne</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Florihana</p>
  </div>`);
AllemagneMarker.on('click', function () { map.flyTo([50.985804, 10.135325], 6); });


const PortugalMarker = L.marker([39.40, -8.22]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://th.bing.com/th/id/R.c5f7e367b572c389affe0ed3b15d5213?rik=ARBjjnUrN4ZQgg&pid=ImgRaw&r=0" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Pin Maritime</h3>
        <p style="margin:5px; font-size:12px;">🌿 Notes boisées et fraîches, aromathérapie et parfumerie.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Portugal</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Florihana</p>
  </div>`);
PortugalMarker.on('click', function () { map.flyTo([39.223637, -8.122096], 6); });


const HongrieMarker = L.marker([47.16,19.50]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://tse2.mm.bing.net/th/id/OIP.SJX0_0e_BZquq5gL4mCsjgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Fenouil Doux</h3>
        <p style="margin:5px; font-size:12px;">🌿 Notes anisées, bien-être et cosmétique.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Hongrie</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Florihana</p>
  </div>`);
HongrieMarker.on('click', function () { map.flyTo([46.819361, 19.047064], 6); });


const BulgarieMarker = L.marker([42.51,27.47]).addTo(map).bindPopup(`
  <div style="gap:10px; width:270px;">
    <div style="display:flex; flex-direction:row; align-items:flex-start;">
      <img src="https://tse1.mm.bing.net/th/id/OIP.N4JH7HF3qMrbBJD2TjgNHQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain&o=7&rm=3" style="width:100px; height:100px; object-fit:cover; border-radius:8px;">
      <div style="display:flex; flex-direction:column; align-items:flex-start;">
        <h3 style="margin:5px;">Rose Damascena</h3>
        <p style="margin:5px; font-size:12px;">🌹 Parfum floral élégant, prisée en parfumerie de luxe.</p>
      </div>
    </div>
    <p style="margin:5px 0; font-size:12px;">📍 Bulgarie</p>
    <p style="margin:5px; font-size:12px;">🏭 Fournisseur : Florihana</p>
  </div>`);
BulgarieMarker.on('click', function () { map.flyTo([42.743518, 25.265326], 6); });


map.on('popupclose', function () {
    map.flyTo(initialCenter, initialZoom);
});


// Popup référencement
document.getElementById('bouton2').addEventListener('click', function () {
  document.querySelector('.boxcoutour').style.display = 'block';
});


document.getElementById('closePopup').addEventListener('click', function () {
  document.querySelector('.boxcoutour').style.display = 'none';
});


// Envoi formulaire
document.getElementById('bouton').addEventListener('click', function(){
  var nom = document.getElementById('monexp1').value;
  var nomdesociete = document.getElementById('monexp2').value;
  var email = document.getElementById('monexp3').value;
  var message = document.getElementById('monexp4').value;


  if(nom === "" || nomdesociete === "" || email === "" || message === ""){
    alert("Veuillez remplir tous les champs !");
    return;
  }


  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    alert("Veuillez entrer une adresse mail valide !");
    return;
  }


  var corps = "Bonjour l'équipe KAN,\n\n"
    + "Je suis " + nom + ", fournisseur de la société " + nomdesociete + ".\n\n"
    + "Je suis très intéressé.e pour être affiché dans votre base de données.\n\n"
    + message + "\n\n"
    + "Mes disponibilités sont les suivantes : " + 
    + "Bien Cordialement,\n\n"
    + nom;


  var mailto = "mailto:aurelien.lule@gmail.com"
    + "?subject=" + encodeURIComponent("Demande de référencement de " + nomdesociete)
    + "&body=" + encodeURIComponent(corps);


  window.open(mailto);
});

window.toggleCarte = function(carte) {
  carte.classList.toggle('ouverte');
}
// Révélation au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const kanjiFrames = [
  "/src/kanjiru1.png",
  "/src/kanjiru2.png",
  "/src/kanjiru3.png",
  "/src/kanjiru4.png",
  "/src/kanjiru5.png",
  "/src/kanjiru6.png",
  "/src/kanjiru7.png",
  "/src/kanjiru8.png",
  "/src/kanjiru9.png",
  "/src/kanjiru10.png",
  "/src/kanjiru11.png",
  "/src/kanjiru12.png",
  "/src/kanjiru13.png"
];
window.playKanji = function() {
  const popup = document.getElementById('kanjiPopup');
  popup.style.display = 'flex';
  let i = 0;
  document.getElementById('kanjiAnim').src = kanjiFrames[0];

  const interval = setInterval(() => {
    i++;
    if (i >= kanjiFrames.length) {
      clearInterval(interval);
      return;
    }
    document.getElementById('kanjiAnim').src = kanjiFrames[i];
  }, 500);
};

window.closeKanji = function() {
  document.getElementById('kanjiPopup').style.display = 'none';
};