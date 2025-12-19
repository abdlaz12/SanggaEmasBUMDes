document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Definisikan HTML Menu
    const headerHTML = `
    <div class="mobile-menu">
        <nav class="mobile-header primary-menu d-xl-none">
            <div class="header-logo">
                <a href="index.html" class="logo"><img src="assets/images/logo/logo_bumdes.png" alt="logo"></a>
            </div>
            <div class="header-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <nav class="menu">
            <div class="mobile-menu-area d-xl-none">
                <div class="mobile-menu-area-inner" id="scrollbar">
                    <ul class="m-menu">
                        <li><a href="index.html">Beranda</a></li>
                        
                        <li>
                            <a href="#">Tentang <i class="fas fa-caret-down" style="float:right"></i></a>
                            <ul class="m-submenu">
                                <li><a href="about.html">Tentang Kami</a></li>
                                <li><a href="law.html">Dasar Hukum</a></li>
                                <li><a href="goals.html">Visi & Misi</a></li>
                                <li><a href="development.html">Potensi Desa</a></li>
                            </ul>
                        </li>

                        <li><a href="blog.html">Kabar Kami</a></li>
                        
                        <li>
                            <a href="#">Unit Bisnis <i class="fas fa-caret-down" style="float:right"></i></a>
                            <ul class="m-submenu">
                                <li><a href="project.html">Semua Unit</a></li>
                                <li><a href="project-single.html?id=bukit-panagaran">Bukit Panagaran</a></li>
                                <li><a href="project-single.html?id=resto-sawah-lope">Resto Saung Manis</a></li>
                                <li><a href="project-single.html?id=sawah-lope">Sawah Lope</a></li>
                                <li><a href="project-single.html?id=penggilingan-padi">Penggilingan Padi</a></li>
                                <li><a href="project-single.html?id=kolam-renang">Kolam Renang Cimalati</a></li>
                                <li><a href="project-single.html?id=lumbung-pangan">Kedai Sebalak Cimalati</a></li>
                                <li><a href="project-single.html?id=bri-link">Jasa Pengangkutan Sampah</a></li>
                                <li><a href="project-single.html?id=bawang-goreng">Bawang Goreng "Sang Lobang"</a></li>
                                <li><a href="project-single.html?id=penyewaan-kios">Penyewaan Kios</a></li>                            
                            </ul>
                        </li>
                        <li><a href="contact-us.html">Kontak Kami</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <header class="header-section d-xl-block d-none">
        <div class="header-area">
            <div class="logo">
                <a href="index.html"><img src="assets/images/logo/logo_bumdes.png" alt="logo"></a>
            </div>
            <div class="main-menu d-none d-xl-block">
                <div class="top">
                    <ul class="left">
                        <li>Jam Operasional : 08:00 - 16:00</li>
                        <li>Email : sanggaemasbumdes@gmail.com</li>
                    </ul>
                    <ul class="right">
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                    </ul>
                </div>
                <ul class="menu">
                    <li><a href="index.html">Beranda</a></li>
                    <li>
                        <a href="about.html">Tentang</a>
                        <ul>
                            <li><a href="about.html">Tentang Kami</a></li>
                            <li><a href="law.html">Dasar Hukum</a></li>
                            <li><a href="goals.html">Visi & Misi</a></li>
                            <li><a href="development.html">Potensi Desa</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="project.html">Unit Bisnis</a>
                        <ul>
                            <li><a href="project.html">Semua Unit</a></li>
                            <li><a href="project-single.html?id=bukit-panagaran">Bukit Panagaran</a></li>
                            <li><a href="project-single.html?id=resto-sawah-lope">Resto Saung Manis</a></li>
                            <li><a href="project-single.html?id=sawah-lope">Sawah Lope</a></li>
                            <li><a href="project-single.html?id=penggilingan-padi">Penggilingan Padi</a></li>
                            <li><a href="project-single.html?id=kolam-renang">Kolam Renang Cimalati</a></li>
                            <li><a href="project-single.html?id=lumbung-pangan">Kedai Sebalak Cimalati</a></li>
                            <li><a href="project-single.html?id=bri-link">Jasa Pengangkutan Sampah</a></li>
                            <li><a href="project-single.html?id=bawang-goreng">Bawang Goreng "Sang Lobang"</a></li>
                            <li><a href="project-single.html?id=penyewaan-kios">Penyewaan Kios</a></li>  
                        </ul>
                    </li>
                    <li><a href="contact-us.html">Kontak Kami</a></li>
                </ul>
            </div>
        </div>
    </header>
    `;

    // 2. Masukkan HTML ke wadah
    const container = document.getElementById("main-header-container");
    if (container) {
        container.innerHTML = headerHTML;
        
        // 3. Logic Agar Dropdown Mobile Bisa Dipencet (PENTING)
        if (typeof jQuery !== 'undefined') {
            
            // Tombol Hamburger (Garis Tiga)
            jQuery('.header-bar').on('click', function () {
                jQuery(this).toggleClass('active');
                jQuery('.mobile-menu').toggleClass('active');
            });
            
            // Sembunyikan submenu saat awal
            jQuery('.mobile-menu .m-submenu').slideUp(); 

            // Saat menu "Tentang" atau "Unit Bisnis" diklik
            jQuery('.mobile-menu .menu li a').on('click', function(e) {
               // Cek apakah menu ini punya anak (submenu)
               var $next = jQuery(this).next('ul'); 
               
               if ($next.length > 0) {
                   // JANGAN pindah halaman
                   e.preventDefault(); 
                   // Buka/Tutup Submenu
                   $next.slideToggle();
                   // Putar ikon panah (opsional)
                   jQuery(this).find('i').toggleClass('fa-caret-down fa-caret-up');
               }
            });
        }

        // 4. Set Active Menu (Warna Hijau)
        var path = window.location.pathname.split("/").pop();
        if (path == '') { path = 'index.html'; }
        
        var links = document.querySelectorAll('.menu li a, .m-menu li a');
        links.forEach(link => link.classList.remove('active'));

        if (typeof jQuery !== 'undefined') {
            jQuery('.menu li a[href="' + path + '"]').addClass('active');
            jQuery('.m-menu li a[href="' + path + '"]').addClass('active');
            jQuery('.menu li a[href="' + path + '"]').closest('ul').parent('li').children('a').addClass('active');
        }
    }
});