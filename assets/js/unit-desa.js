// assets/js/unit-desa.js

const unitsData = {
    "bukit-panagaran": {
            title: "Wisata Alam Bukit Panagaran",
            subtitle: "Camping Ground & Wisata Edukasi Desa Cikaso",
            category: "Pariwisata",
            client: "Wisatawan Umum",
            date: "Sejak 2023",
            location: "Bukit Panagaran, Desa Cikaso",
            images: [
                "assets/images/project/single/01.jpg", 
                "assets/images/project/single/02.jpg", 
                "assets/images/project/single/03.jpg"
            ],
            description: `
                <p>Bukit Panagaran menawarkan pemandangan alam yang memukau dari ketinggian Desa Cikaso. Destinasi ini cocok untuk camping, menikmati sunrise, dan fotografi alam.</p>
                <p>Fasilitas yang tersedia meliputi area parkir, spot foto instagramable, dan area berkemah yang aman dan nyaman. Kami juga menyediakan paket wisata edukasi pertanian dan peternakan domba.</p>
            `,
            // [BARU] Data Paket Harga sesuai brosur
            pricePackages: [
                {
                    name: "Paket Teman (Outing)",
                    price: "Rp100.000",
                    pax: "Max. 3 Pax",
                    features: [
                        "Tiket Camping 1 Malam",
                        "Kayu Bakar (Api Unggun)",
                        "Jagung Sosis"
                    ]
                },
                {
                    name: "Paket Wisata 1",
                    price: "Rp60.000",
                    pax: "Max. 3 Pax",
                    features: [
                        "Makan Siang (Lunch)",
                        "Tiket Edukasi Wisata Domba"
                    ]
                },
                {
                    name: "Paket Wisata 2",
                    price: "Rp130.000",
                    pax: "Max. 3 Pax",
                    features: [
                        "Tiket Camping 1 Malam",
                        "Tiket Sawah Lope",
                        "Tiket Edukasi Wisata Domba"
                    ]
                }
            ]
        },
    "resto-sawah-lope": {
        title: "Resto Sawah Lope",
        subtitle: "Sensasi Kuliner Lezat dengan Nuansa Alam Pedesaan",
        category: "Kuliner",
        client: "Pecinta Kuliner",
        date: "Sejak 2023",
        location: "Area Sawah Lope",
        images: [
            "assets/images/project/unit_resto1.jpeg", // Utama
            "assets/images/project/unit_resto3.jpeg", // Samping 1
            "assets/images/project/unit_resto4.jpeg"  // Samping 2
        ],
        description: `
            <p>Nikmati hidangan khas Sunda dan masakan nusantara lainnya tepat di tepi sawah yang asri. Resto Sawah Lope menghadirkan suasana makan yang tenang dengan angin sepoi-sepoi.</p>
            <p>Menu andalan kami meliputi Nasi Liwet, Ikan Bakar, dan aneka sambal dadak yang menggugah selera.</p>
        `
    },
    "sawah-lope": {
        title: "Wisata Sawah Lope",
        subtitle: "Menjelajahi Keasrian Wisata Sawah Lope: Harmoni Alam dan Edukasi Tani",
        category: "Agrowisata",
        client: "Keluarga & Sekolah",
        date: "Sejak 2022",
        location: "Dusun II, Desa Cikaso",
        images: [
            "assets/images/project/unit_sawah6.png", // Utama
            "assets/images/project/unit_sawah5.jpeg.jpg", // Samping 1
            "assets/images/project/unit_sawah3.jpeg"  // Samping 2
        ],
        description: `
            <p>Sawah Lope adalah destinasi wisata berbasis edukasi dan alam. Pengunjung dapat berjalan di atas jembatan kayu yang membelah sawah hijau nan estetik.</p>
            <p>Cocok untuk wisata keluarga dan edukasi pertanian bagi anak-anak sekolah.</p>
        `
    },
    "penggilingan-padi": {
        title: "Unit Penggilingan Padi",
        subtitle: "Solusi Pascapanen Modern untuk Petani Cikaso",
        category: "Pertanian",
        client: "Petani Lokal",
        date: "Sejak 2021",
        location: "Sentra Tani Cikaso",
        images: [
            "assets/images/project/unit_padi1.jpeg", // Utama
            "assets/images/project/unit_padi8.jpeg", // Samping 1
            "assets/images/project/unit_padi10.png"  // Samping 2

        ],
        description: `
            <p>Unit usaha ini membantu petani mengolah gabah menjadi beras berkualitas premium dengan mesin modern yang efisien.</p>
            <p>Kami menjamin hasil gilingan yang bersih, utuh, dan minim patahan (menir).</p>
        `
    },
    "kolam-renang": {
        title: "Kolam Renang Cimalati",
        subtitle: "Wahana Rekreasi Air Keluarga yang Menyegarkan",
        category: "Rekreasi",
        client: "Masyarakat Umum",
        date: "Sejak 2024",
        location: "Kawasan Cimalati",
        images: [
            "assets/images/project/unit_kolam1.png", // Utama
            "assets/images/project/02.jpg", // Samping 1
            "assets/images/project/03.jpg"  // Samping 2

        ],
        description: `
            <p>Kolam renang dengan air yang bersumber langsung dari mata air pegunungan, tanpa kaporit berlebih, memberikan kesegaran alami.</p>
            <p>Dilengkapi dengan kolam anak dan dewasa serta fasilitas bilas yang bersih.</p>
        `
    },
    "lumbung-pangan": {
        title: "Lumbung Pangan Desa",
        subtitle: "Menjaga Stabilitas dan Ketahanan Pangan Warga",
        category: "Ketahanan Pangan",
        client: "Warga Desa",
        date: "Sejak 2020",
        location: "Gudang BUMDes",
        images: [
            "assets/images/project/01.jpg", // Utama
            "assets/images/project/02.jpg", // Samping 1
            "assets/images/project/03.jpg"  // Samping 2

        ],
        description: `
            <p>Unit ini berfungsi menjaga ketersediaan stok beras bagi warga desa, terutama saat masa paceklik atau harga pasar melambung tinggi.</p>
        `
    },
    "bri-link": {
        title: "Agen BRILink BUMDes",
        subtitle: "Transaksi Keuangan Jadi Lebih Dekat dan Mudah",
        category: "Jasa Keuangan",
        client: "Nasabah Bank",
        date: "Sejak 2022",
        location: "Kantor BUMDes",
        images: [
            "assets/images/project/01.jpg", // Utama
            "assets/images/project/02.jpg", // Samping 1
            "assets/images/project/03.jpg"  // Samping 2

        ],
        description: `
            <p>Melayani transfer, tarik tunai, pembayaran listrik, BPJS, dan transaksi perbankan lainnya tanpa harus jauh-jauh ke kantor cabang bank.</p>
        `
    },
    "bawang-goreng": {
        title: "Bawang Goreng Sang Lobang",
        subtitle: "Cita Rasa Khas Produk Unggulan Desa",
        category: "Produk Olahan",
        client: "Konsumen & Toko Oleh-oleh",
        date: "Sejak 2023",
        location: "Rumah Produksi UMKM",
        images: [
            "assets/images/project/01.jpg", // Utama
            "assets/images/project/02.jpg", // Samping 1
            "assets/images/project/03.jpg"  // Samping 2

        ],
        description: `
            <p>Produk unggulan UMKM Desa Cikaso. Dibuat dari bawang merah pilihan varietas lokal yang digoreng renyah tanpa pengawet.</p>
        `
    },
    "penyewaan-kios": {
        title: "Unit Penyewaan Kios",
        subtitle: "Mendorong Pertumbuhan Ekonomi dan UMKM Lokal",
        category: "Properti / Aset",
        client: "Pelaku UMKM",
        date: "Sejak 2021",
        location: "Pasar Desa",
        images: [
            "assets/images/project/unit_ruko1.jpeg", // Utama
            "assets/images/project/unit_ruko2.jpeg", // Samping 1
            "assets/images/project/unit_ruko5.jpeg"  // Samping 2

        ],
        description: `
            <p>Penyediaan tempat usaha yang strategis dan terjangkau bagi warga desa yang ingin membuka usaha dagang atau jasa.</p>
        `
    }
};