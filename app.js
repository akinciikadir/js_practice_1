
let urun1 = {
    isim: "ACER swift",
    fiyat: 6.234,
    kategori: "teknoloji"

}


let urun2 = {
    isim: "ACER nitro 5",
    fiyat: 15.246,
    kategori: "teknoloji"

}

let urun3 = {
    isim: "lenova v15",
    fiyat: 54.24,
    kategori: "teknoloji"

}

let urun4 = {
    isim: "LENOVA V14",
    fiyat: 3.934,
    kategori: "teknoloji"

}

let urun5 = {
    isim: "Lenova ıdeapad",
    fiyat: 78.2334,
    kategori: "teknoloji"

}

let urunler = [urun1,urun2,urun3,urun4,urun5];
let filitreliurun= [];
let kullaniciGirdi = prompt("aramak istediğiniz kelime");

function filitreliurundoldur(urunler){
    urunler.forEach(function(urun) {
        if(urun.isim.toUpperCase().includes(kullaniciGirdi.toUpperCase(),0)){
            filitreliurun.push(urun);
     }
    });
}
function filitreyazdir(urunler){
    urunler.forEach(function(urun) {
        console.log("-----------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        
    });
}



filitreliurundoldur(urunler)
filitreyazdir(filitreliurun)



