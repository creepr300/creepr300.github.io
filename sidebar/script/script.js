Normal1 = new Image();
Normal1.src = "img/home1.png";
Highlight1 = new Image();
Highlight1.src = "img/home1h.png";

function Bildwechsel(Bildnr,Bildobjekt) {
window.document.images[Bildnr].src = Bildobjekt.src;
}
