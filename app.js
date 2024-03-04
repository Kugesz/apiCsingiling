let products = [];
let osszes = 0;

fetch('https://hur.webmania.cc/products.json')
  .then(response => {   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Corrected to call response.json() to parse the JSON
  })
  .then(prod => {
    megkapva(prod);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  
function megkapva(pr){
      products = pr.products;
      osszes = products.length;
      console.log(products)
      betoltes(1, 1);
      betoltes(2, 1);
      betoltes(3, 1);
}
    
function betoltes(containerSzama, sorszam){
    let adatok = products.filter(object => object.id == sorszam)[0];
    document.querySelector(`div.t${containerSzama} p#kategoria`).textContent = adatok.category;
    document.querySelector(`div.t${containerSzama} h1#nev`).textContent = adatok.name;
    document.querySelector(`div.t${containerSzama} img#kep`).setAttribute('src', adatok.picture)
    document.querySelector(`div.t${containerSzama} p#leiras`).textContent = adatok.description;
    document.querySelector(`div.t${containerSzama} p#ar`).textContent = adatok.price + "Ft";
    document.querySelector(`div.t${containerSzama} p#mennyiseg`).textContent = adatok.stock + "db";

}


function lapozas(sorszam, irany){
    jelenlegi = parseInt(document.querySelector(`div.t${sorszam}`).getAttribute('data-jelenlegi'));
    jelenlegi += parseInt(irany);
    if(jelenlegi > osszes){jelenlegi = 1}
    if(jelenlegi < 1){jelenlegi = osszes}

    console.log(jelenlegi)
    document.querySelector(`div.t${sorszam}`).setAttribute('data-jelenlegi', jelenlegi);

    betoltes(sorszam,jelenlegi);
}

