function lihatInfo(nama) {

    let informasi = {

        "Kencur": {
            ilmiah: "Kaempferia galanga",
            deskripsi:
            "Kencur merupakan tanaman rimpang dengan aroma khas yang banyak dikenal dalam masakan dan pemanfaatan tradisional.",
            bagian: "Rimpang",
            perawatan:
            "Tanam pada media yang gembur, cukup lembap, dan memiliki drainase yang baik."
        },

        "Lengkuas": {
            ilmiah: "Alpinia galanga",
            deskripsi:
            "Lengkuas merupakan tanaman rimpang yang umum digunakan sebagai bumbu untuk memberikan aroma khas pada masakan.",
            bagian: "Rimpang",
            perawatan:
            "Membutuhkan tanah yang subur, cukup air, dan mendapatkan cahaya matahari."
        },

        "Jahe Merah": {
            ilmiah: "Zingiber officinale var. rubrum",
            deskripsi:
            "Jahe merah merupakan varietas jahe dengan rimpang berwarna kemerahan dan aroma yang khas.",
            bagian: "Rimpang",
            perawatan:
            "Gunakan media tanam yang gembur dan tidak tergenang air."
        },

        "Kunyit": {
            ilmiah: "Curcuma longa",
            deskripsi:
            "Kunyit merupakan tanaman rimpang berwarna kuning-oranye yang banyak digunakan sebagai rempah.",
            bagian: "Rimpang",
            perawatan:
            "Tanam pada tanah yang gembur, subur, dan memiliki drainase baik."
        },

        "Daun Kelor": {
            ilmiah: "Moringa oleifera",
            deskripsi:
            "Kelor merupakan tanaman yang daunnya dapat dimanfaatkan sebagai bahan pangan dan dikenal luas di daerah tropis.",
            bagian: "Daun",
            perawatan:
            "Membutuhkan sinar matahari yang cukup dan penyiraman secukupnya."
        },

        "Daun Salam": {
            ilmiah: "Syzygium polyanthum",
            deskripsi:
            "Daun salam merupakan daun aromatik yang banyak digunakan untuk memberikan aroma pada masakan.",
            bagian: "Daun",
            perawatan:
            "Dapat ditanam di pekarangan dengan tanah yang subur dan penyiraman secukupnya."
        },

        "Lidah Buaya": {
            ilmiah: "Aloe vera",
            deskripsi:
            "Lidah buaya merupakan tanaman sukulen dengan daun tebal yang relatif mudah dirawat.",
            bagian: "Daun",
            perawatan:
            "Gunakan media dengan drainase baik dan hindari penyiraman berlebihan."
        },

        "Kumis Kucing": {
            ilmiah: "Orthosiphon aristatus",
            deskripsi:
            "Kumis kucing merupakan tanaman berbunga dengan benang sari panjang yang tampak menyerupai kumis.",
            bagian: "Daun",
            perawatan:
            "Menyukai tempat dengan cahaya matahari cukup dan tanah yang tidak tergenang."
        },

        "Serai": {
            ilmiah: "Cymbopogon citratus",
            deskripsi:
            "Serai merupakan tanaman beraroma khas yang sering digunakan sebagai bumbu masakan dan bahan minuman.",
            bagian: "Batang",
            perawatan:
            "Menyukai tempat terbuka dengan cahaya matahari yang cukup."
        }

    };


    let tanaman = informasi[nama];


    document.getElementById("judul-popup").innerText = nama;

    document.getElementById("ilmiah-popup").innerText =
        tanaman.ilmiah;

    document.getElementById("deskripsi-popup").innerText =
        tanaman.deskripsi;

    document.getElementById("bagian-popup").innerText =
        tanaman.bagian;

    document.getElementById("perawatan-popup").innerText =
        tanaman.perawatan;

    document.getElementById("popup").style.display = "flex";
}


function tutupPopup() {

    document.getElementById("popup").style.display = "none";

}

function cariTanaman() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let kartu =
        document.querySelectorAll(".card");


    kartu.forEach(function(card) {

        let nama =
            card.querySelector("h3")
            .innerText
            .toLowerCase();


        if (nama.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}