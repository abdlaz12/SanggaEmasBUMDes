// assets/js/footer-section.js

document.addEventListener("DOMContentLoaded", function() {
    
    const footerHTML = `
    <footer class="footer-section">
        <div class="footer-top" style="background-image: url(assets/images/footer/bg-image.jpg); background-position: center bottom; overflow: hidden;">
            <div class="container">
                <div class="top">
                    <div class="post-item">
                        <div class="post-thumb">
                            <img src="assets/images/footer/icon/01.png" alt="footer">
                        </div>
                        <div class="post-content">
                            <h6>Hubungi Kami</h6>
                            <p>+62 812-3456-7890</p>
                        </div>
                    </div>
                    <div class="post-item">
                        <div class="post-thumb">
                            <img src="assets/images/footer/icon/02.png" alt="footer">
                        </div>
                        <div class="post-content">
                            <h6>Kirim Pesan</h6>
                            <p>admin@bumdesamulur.id</p>
                        </div>
                    </div>
                    <div class="post-item">
                        <div class="post-thumb">
                            <img src="assets/images/footer/icon/03.png" alt="footer">
                        </div>
                        <div class="post-content">
                            <h6>Lokasi Kami</h6>
                            <p>Desa Mulur, Bendosari, Sukoharjo</p>
                        </div>
                    </div>
                </div>

                <div class="bottom row justify-content-center">
                    <div class="col-xl-4 col-lg-6 col-12">
                        <div class="bottom-item">
                            <div class="footer-logo">
                                <a href="index.html"><img src="assets/images/logo/logo_bumdes.png" alt="footer-logo"></a>
                            </div>
                            <p>BUM Desa Sugeng Abadi Mulur berdedikasi untuk membangun ekonomi desa melalui inovasi dan unit bisnis yang berkelanjutan untuk kesejahteraan warga.</p>
                            <a href="about.html" class="custom-btn">Baca Selengkapnya <i class="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-12">
                        <div class="bottom-item">
                            <h4>Kabar Terbaru</h4>
                            <ul>
                                <li class="post-item">
                                    <div class="post-thumb">
                                        <a href="#"><img src="assets/images/footer/blog/01.jpg" alt="footer"></a>
                                    </div>
                                    <div class="post-content">
                                        <h6>
                                            <a href="#">Kegiatan Bank Sampah Minggu Ini</a>
                                        </h6>
                                        <p>20 Desember 2025</p>
                                    </div>
                                </li>
                                <li class="post-item">
                                    <div class="post-thumb">
                                        <a href="#"><img src="assets/images/footer/blog/02.jpg" alt="footer"></a>
                                    </div>
                                    <div class="post-content">
                                        <h6>
                                            <a href="#">Peresmian Unit Usaha Baru</a>
                                        </h6>
                                        <p>15 Desember 2025</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-12">
                        <div class="bottom-item">
                            <h4>Galeri Foto</h4>
                            <ul class="footer-gallery">
                                <li>
                                    <div class="post-thumb">
                                        <a href="#"><img src="assets/images/footer/gallery/01.jpg" alt="footer-gallery"></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-thumb">
                                        <a href="#"><img src="assets/images/footer/gallery/02.jpg" alt="footer-gallery"></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-thumb">
                                        <a href="#"><img src="assets/images/footer/gallery/03.jpg" alt="footer-gallery"></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-thumb">
                                        <a href="#"><img src="assets/images/footer/gallery/04.jpg" alt="footer-gallery"></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-thumb">
                                        <a href="#"><img src="assets/images/footer/gallery/05.jpg" alt="footer-gallery"></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="post-thumb">
                                        <a href="#"><img src="assets/images/footer/gallery/06.jpg" alt="footer-gallery"></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="section-wrapper">
                    <div class="left">
                        <span>&copy; 2025 <a href="index.html">COMDEV PRASETIYA MULYA KDE001</a>. All Rights Reserved.</span>
                    </div>
                    <ul class="right">
                        <li>
                            <a class="facebook" href="#"><i class="fab fa-facebook-f"></i></a>
                            <span>Facebook</span>
                        </li>
                        <li>
                            <a class="twitter" href="#"><i class="fab fa-instagram"></i></a>
                            <span>Instagram</span>
                        </li>
                        <li>
                            <a class="linkedin" href="#"><i class="fab fa-whatsapp"></i></a>
                            <span>WhatsApp</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Masukkan HTML ke dalam wadah (Container)
    const container = document.getElementById("main-footer-container");
    if (container) {
        container.innerHTML = footerHTML;
    }
});