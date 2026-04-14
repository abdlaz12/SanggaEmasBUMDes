// assets/js/footer-section.js

document.addEventListener("DOMContentLoaded", function() {
    
    const footerHTML = `
    <footer class="footer-section">
        <div class="footer-top" style="background-image: url('assets/images/footer/bg-image.jpg'); background-position: center bottom; background-size: cover; overflow: hidden; padding: 60px 0 30px;">
            <div class="container">
                <div class="top d-flex flex-wrap justify-content-between border-bottom pb-4 mb-5">
                    <div class="post-item d-flex align-items-center mb-3" style="flex: 1; min-width: 250px;">
                        <div class="post-thumb mr-3">
                            <img src="assets/images/footer/icon/01.png" alt="Hubungi Kami" style="width: 45px;">
                        </div>
                        <div class="post-content">
                            <h6 class="mb-0">Hubungi Kami</h6>
                            <p class="mb-0 text-muted">+62 812-3456-7890</p>
                        </div>
                    </div>
                    <div class="post-item d-flex align-items-center mb-3" style="flex: 1; min-width: 250px;">
                        <div class="post-thumb mr-3">
                            <img src="assets/images/footer/icon/02.png" alt="Kirim Pesan" style="width: 45px;">
                        </div>
                        <div class="post-content">
                            <h6 class="mb-0">Kirim Pesan</h6>
                            <p class="mb-0 text-muted">sanggaemasbumdes@gmail.com</p>
                        </div>
                    </div>
                    <div class="post-item d-flex align-items-center mb-3" style="flex: 1; min-width: 250px;">
                        <div class="post-thumb mr-3">
                            <img src="assets/images/footer/icon/03.png" alt="Lokasi Kami" style="width: 45px;">
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
                                <a href="index.html"><img src="assets/images/logo/logo_bumdes.png" alt="footer-logo" style="max-height: 80px;"></a>
                            </div>
                            <p style="line-height: 1.6;">BUM Desa Sangga Emas Cikaso berdedikasi untuk membangun ekonomi desa melalui inovasi dan unit bisnis yang berkelanjutan untuk kesejahteraan warga.</p>
                            <a href="about.html" class="btn btn-success rounded-pill px-4 mt-2">Baca Selengkapnya <i class="fas fa-angle-double-right ml-1"></i></a>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-12 mb-4">
                        <div class="bottom-item">
                            <h4 class="mb-4" style="position: relative; padding-bottom: 10px;">Kabar Terbaru</h4>
                            <ul class="list-unstyled">
                                <li class="post-item d-flex mb-3 align-items-center">
                                    <div class="post-thumb mr-3">
                                        <a href="#"><img src="assets/images/banner/bg_sawahlope.png" alt="Sawah Lope" style="width: 70px; height: 50px; object-fit: cover; border-radius: 4px;"></a>
                                    </div>
                                    <div class="post-content">
                                        <h6 class="mb-0" style="font-size: 15px;"><a href="#" class="text-dark">Sawah Lope sebagai tempat wisata baru</a></h6>
                                    </div>
                                </li>
                                <li class="post-item d-flex align-items-center">
                                    <div class="post-thumb mr-3">
                                        <a href="#"><img src="assets/images/project/unit_panagaran3.jpg" alt="Bukit Panagaran" style="width: 70px; height: 50px; object-fit: cover; border-radius: 4px;"></a>
                                    </div>
                                    <div class="post-content">
                                        <h6 class="mb-0" style="font-size: 15px;"><a href="#" class="text-dark">Bukit Panagaran Camping Ground</a></h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-6 col-12 mb-4">
                        <div class="bottom-item">
                            <h4 class="mb-4">Galeri Foto</h4>
                            <div class="row no-gutters">
                                <div class="col-4 p-1"><img src="assets/images/banner/bg_bawang_goreng.png" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/banner/bg_kolam_cimalati.png" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/project/KKN2.jpeg" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/project/unit_DLH.jpeg" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/project/unit_padi1.jpeg" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                                <div class="col-4 p-1"><img src="assets/images/project/unit_resto1.jpeg" class="img-fluid rounded" style="aspect-ratio: 1/1; object-fit: cover;" alt="Galeri"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom py-3" style="background: #fdfdfd; border-top: 1px solid #eee;">
            <div class="container">
                <div class="text-center">
                    <span style="font-size: 14px; color: #777;">&copy; 2025 <a href="index.html" class="font-weight-bold text-success">COMDEV PRASETIYA MULYA KDE001</a>. All Rights Reserved.</span>
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