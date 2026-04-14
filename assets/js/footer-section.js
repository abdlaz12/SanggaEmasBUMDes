// assets/js/footer-section.js

document.addEventListener("DOMContentLoaded", function() {
    
    const footerHTML = `
    <footer class="footer-section">
        <div class="footer-top" style="background-image: url('assets/images/footer/bg-image.jpg'); background-position: center bottom; background-size: cover; overflow: hidden; padding: 60px 0 30px;">
            <div class="container">
                <div class="top d-flex flex-wrap justify-content-between border-bottom pb-4 mb-5">
                    <div class="post-item d-flex align-items-center mb-3" style="flex: 1; min-width: 250px;">
                        <div class="post-thumb mr-3">
                            <img src="assets/images/footer/icon/01.png" alt="Hubungi Kami" style="width: 40px;">
                        </div>
                        <div class="post-content">
                            <h6 class="mb-0">Hubungi Kami</h6>
                            <p class="mb-0 text-muted" style="font-size: 14px;">+62 812-3456-7890</p>
                        </div>
                    </div>
                    <div class="post-item d-flex align-items-center mb-3" style="flex: 1; min-width: 250px;">
                        <div class="post-thumb mr-3">
                            <img src="assets/images/footer/icon/02.png" alt="Kirim Pesan" style="width: 40px;">
                        </div>
                        <div class="post-content">
                            <h6 class="mb-0">Kirim Pesan</h6>
                            <p class="mb-0 text-muted" style="font-size: 14px;">sanggaemasbumdes@gmail.com</p>
                        </div>
                    </div>
                    <div class="post-item d-flex align-items-center mb-3" style="flex: 1; min-width: 250px;">
                        <div class="post-thumb mr-3">
                            <img src="assets/images/footer/icon/03.png" alt="Lokasi Kami" style="width: 40px;">
                        </div>
                        <div class="post-content">
                            <h6 class="mb-0">Lokasi Kami</h6>
                            <p class="mb-0 text-muted" style="font-size: 14px;">Desa Cikaso, Kuningan, Jawa Barat</p>
                        </div>
                    </div>
                </div>

                <div class="bottom row">
                    <div class="col-xl-4 col-lg-6 col-12 mb-4">
                        <div class="bottom-item">
                            <div class="footer-logo mb-3">
                                <a href="index.html"><img src="assets/images/logo/logo_bumdes.png" alt="footer-logo" style="max-height: 70px;"></a>
                            </div>
                            <p style="line-height: 1.6; font-size: 14px;">BUM Desa Sangga Emas Cikaso berdedikasi untuk membangun ekonomi desa melalui inovasi dan unit bisnis yang berkelanjutan untuk kesejahteraan warga.</p>
                            <a href="about.html" class="btn btn-success rounded-pill px-4 mt-2" style="font-size: 14px;">Baca Selengkapnya <i class="fas fa-angle-double-right ml-1"></i></a>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-12 mb-4">
                        <div class="bottom-item">
                            <h4 class="mb-4" style="font-size: 20px; font-weight: 700;">Kabar Terbaru</h4>
                            <div class="news-list">
                                <div class="post-item d-flex align-items-start mb-4">
                                    <div class="post-thumb mr-3">
                                        <a href="#"><img src="assets/images/banner/bg_sawahlope.png" alt="Sawah Lope" style="width: 90px; height: 65px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"></a>
                                    </div>
                                    <div class="post-content">
                                        <h6 class="mb-0" style="font-size: 14px; line-height: 1.4;">
                                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">Sawah Lope sebagai tempat wisata baru</a>
                                        </h6>
                                    </div>
                                </div>
                                <div class="post-item d-flex align-items-start">
                                    <div class="post-thumb mr-3">
                                        <a href="#"><img src="assets/images/project/unit_panagaran3.jpg" alt="Bukit Panagaran" style="width: 90px; height: 65px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"></a>
                                    </div>
                                    <div class="post-content">
                                        <h6 class="mb-0" style="font-size: 14px; line-height: 1.4;">
                                            <a href="#" class="text-dark" style="text-decoration: none; font-weight: 600;">Bukit Panagaran Camping Ground</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-12 mb-4">
                        <div class="bottom-item">
                            <h4 class="mb-4" style="font-size: 20px; font-weight: 700;">Galeri Foto</h4>
                            <div class="row no-gutters">
                                <div class="col-4 p-1"><img src="assets/images/banner/bg_bawang_goreng.png" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/banner/bg_kolam_cimalati.png" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/project/KKN2.jpeg" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/project/unit_DLH1.jpeg" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/project/unit_padi1.jpeg" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/project/unit_resto1.jpeg" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom py-3" style="background: transparent; border-top: 1px solid #eee;">
            <div class="container">
                <div class="text-center">
                    <span style="font-size: 13px; color: #777;">&copy; 2025 <a href="index.html" class="font-weight-bold text-success" style="text-decoration: none;">COMDEV PRASETIYA MULYA KDE001</a>. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </footer>
    `;

    const container = document.getElementById("main-footer-container");
    if (container) {
        container.innerHTML = footerHTML;
    }
});