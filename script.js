// Fungsi untuk scroll ke section dengan animasi smooth
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

// Tampilkan detail film pada halaman Movies
function showMovieDetails(movieId) {
    let title, synopsis, downloadLink;

    // Menentukan film berdasarkan ID
    switch (movieId) {
        case 'movie1':
            title = "Donnie Darko (2001)";
            synopsis = "Film Donnie Darko bercerita tentang Donnie Darko, seorang remaja bermasalah yang mengalami sleep walking dan bertemu dengan sosok misterius bernama Frank. Frank mengenakan kostum kelinci yang mengerikan dan memberitahu Donnie bahwa dunia akan kiamat dalam waktu 28 hari, 6 jam, 42 menit, dan 12 detik.";
            downloadLink = "https://filemoon.in/download/ftnb4jg6s95s";
            break;
        case 'movie2':
            title = "Fight Club (1999)";
            synopsis = "Sulit tidur dan bosan dengan rutinitasnya, seorang pekerja kantoran membentuk sebuah klub pertarungan terlarang bersama rekannya. Namun, segalanya berubah menjadi tak terkendali dan sangat berbahaya.";
            downloadLink = "https://filemoon.in/download/f78hp7ifakqr";
            break;
        case 'movie3':
            title = "Se7en (1995)";
            synopsis = "Seorang pembunuh berantai mulai membunuhi orang-orang sesuai dengan tujuh dosa besar. Dua detektif: satu baru bergabung dan satunya akan pensiun, harus bekerjasama untuk menangkap pelakunya.";
            downloadLink = "https://filemoon.in/download/pb8c6t9ha8qy";
            break;
        case 'movie4':
            title = "Nightcrawler (2014)";
            synopsis = "Nightcrawler adalah film thriller neo-noir Amerika yang dirilis pada tahun 2014. Film ini bercerita tentang Lou Bloom (Jake Gyllenhaal), seorang pencuri yang beralih profesi menjadi seorang Nightcrawler. Nightcrawler adalah sebutan untuk fotografer yang menjual rekaman peristiwa tragis seperti kecelakaan atau kebakaran kepada kantor berita.";
            downloadLink = "https://filemoon.in/download/qcx5ff48exri";
            break;
        case 'movie5':
            title = "Shutter Island (2010)";
            synopsis = "Seorang perwira ditugaskan untuk menyelidiki hilangnya seorang pasien yang telah melarikan diri dari rumah sakit jiwa. Hal-hal berbahaya mulai meragukan segalanya, termasuk kewarasannya sendiri.";
            downloadLink = "https://filemoon.in/download/cbl0h7u9nvhn";
            break;
        case 'movie6':
            title = "Movie Title 6";
            synopsis = "This is the synopsis for Movie 6. An epic fantasy adventure!";
            downloadLink = "downloads/movie6.mp4";
            break;
        case 'movie7':
            title = "Movie Title 7";
            synopsis = "This is the synopsis for Movie 7. A mystery thriller!";
            downloadLink = "downloads/movie7.mp4";
            break;
        case 'movie8':
            title = "Movie Title 8";
            synopsis = "This is the synopsis for Movie 8. Full of laughs and comedy!";
            downloadLink = "downloads/movie8.mp4";
            break;
        case 'movie9':
            title = "Movie Title 9";
            synopsis = "This is the synopsis for Movie 9. A drama about relationships!";
            downloadLink = "downloads/movie9.mp4";
            break;
        case 'movie10':
            title = "Movie Title 10";
            synopsis = "This is the synopsis for Movie 10. A fantasy journey!";
            downloadLink = "downloads/movie10.mp4";
            break;
        case 'movie11':
            title = "Movie Title 11";
            synopsis = "This is the synopsis for Movie 11. A superhero action film!";
            downloadLink = "downloads/movie11.mp4";
            break;
        case 'movie12':
            title = "Movie Title 12";
            synopsis = "This is the synopsis for Movie 12. A historical drama!";
            downloadLink = "downloads/movie12.mp4";
            break;
        case 'movie13':
            title = "Movie Title 13";
            synopsis = "This is the synopsis for Movie 13. A gripping crime story!";
            downloadLink = "downloads/movie13.mp4";
            break;
        case 'movie14':
            title = "Movie Title 14";
            synopsis = "This is the synopsis for Movie 14. A heart-pounding thriller!";
            downloadLink = "downloads/movie14.mp4";
            break;
        case 'movie15':
            title = "Movie Title 15";
            synopsis = "This is the synopsis for Movie 15. A classic horror tale!";
            downloadLink = "downloads/movie15.mp4";
            break;
        case 'movie16':
            title = "Movie Title 16";
            synopsis = "This is the synopsis for Movie 16. An intense action movie!";
            downloadLink = "downloads/movie16.mp4";
            break;
        case 'movie17':
            title = "Movie Title 17";
            synopsis = "This is the synopsis for Movie 17. A futuristic sci-fi movie!";
            downloadLink = "downloads/movie17.mp4";
            break;
        case 'movie18':
            title = "Movie Title 18";
            synopsis = "This is the synopsis for Movie 18. A family-friendly adventure!";
            downloadLink = "downloads/movie18.mp4";
            break;
        case 'movie19':
            title = "Movie Title 19";
            synopsis = "This is the synopsis for Movie 19. A feel-good comedy!";
            downloadLink = "downloads/movie19.mp4";
            break;
        case 'movie20':
            title = "Movie Title 20";
            synopsis = "This is the synopsis for Movie 20. A documentary film!";
            downloadLink = "downloads/movie20.mp4";
            break;
    }

    // Menampilkan detail film dalam modal
    document.getElementById('movie-title').textContent = title;
    document.getElementById('movie-synopsis').textContent = synopsis;
    document.getElementById('movie-download').setAttribute('href', downloadLink);

    // Menampilkan modal
    document.getElementById('movie-detail').style.display = 'block';
}

// Tutup detail film
function closeMovieDetail() {
    document.getElementById('movie-detail').style.display = 'none';
}