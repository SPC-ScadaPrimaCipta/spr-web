export interface MisiItem {
  id: number;
  text: string;
}

export interface PendekatanItem {
  title: string;
  description: string;
  icon: string;
}

export interface LayananDetail {
  title: string;
  description: string;
  bullets?: string[];
}

export interface LayananCategory {
  categoryTitle: string;
  categorySubtitle: string;
  items: LayananDetail[];
}

export interface MengapaPilihItem {
  title: string;
  description: string;
  icon: string;
}

export const companyProfile = {
  name: "PT. Sakatoyo Prima Resources",
  shortName: "SPR",
  tagline: "Solusi Rekayasa Proses Penambangan, Pengolahan Mineral, Metalurgi, dan Sumber Daya Berkelanjutan",
  overviews: [
    "PT. Sakatoyo Prima Resources (SPR) merupakan perusahaan yang bergerak di bidang konsultansi teknik, rekayasa proses, pengembangan teknologi proses penambangan dan pengolahan mineral, metalurgi, serta pemanfaatan sumber daya sekunder. Kami mendukung perusahaan pertambangan dan industri dalam meningkatkan efisiensi operasional, nilai tambah sumber daya, serta keberlanjutan melalui penerapan teknologi, rekayasa proses, dan otomasi industri.",
    "Didukung oleh tenaga ahli yang memiliki pengalaman di bidang pertambangan, geologi, metalurgi, otomasi industri, dan rekayasa proses, SPR menyediakan solusi yang terintegrasi mulai dari studi awal, eksplorasi, desain fasilitas proses penambangan dan pengolahan mineral, implementasi teknologi, hingga peningkatan kompetensi sumber daya manusia.",
    "Fokus kami adalah membantu pelanggan mengoptimalkan pemanfaatan sumber daya alam maupun sumber daya sekunder, termasuk tailing, stockpile, mineral berkadar rendah, serta mineral industri lainnya melalui teknologi yang efisien, ekonomis, dan ramah lingkungan."
  ]
};

export const visiMisi = {
  visi: "Menjadi perusahaan rekayasa dan konsultansi terpercaya dalam pengembangan teknologi proses penambangan dan pengolahan mineral, metalurgi, serta pemanfaatan sumber daya berkelanjutan di Indonesia.",
  misi: [
    {
      id: 1,
      text: "Mengembangkan solusi proses penambangan dan pengolahan mineral yang efisien, ekonomis, dan berorientasi pada peningkatan nilai tambah."
    },
    {
      id: 2,
      text: "Mendukung industri pertambangan melalui penerapan teknologi, otomasi industri, dan sistem pengendalian proses yang modern."
    },
    {
      id: 3,
      text: "Mengembangkan kompetensi sumber daya manusia melalui program pelatihan berbasis kebutuhan industri."
    },
    {
      id: 4,
      text: "Mendorong penerapan teknologi yang ramah lingkungan, hemat energi, dan mengurangi penggunaan bahan kimia berbahaya dalam proses produksi."
    }
  ]
};

export const teknologiPendekatan = {
  description: "SPR menerapkan pendekatan rekayasa yang mengutamakan efisiensi proses, kemudahan operasional, keselamatan kerja, dan keberlanjutan investasi. Dalam setiap proyek, kami mengembangkan solusi berdasarkan karakteristik material, kondisi geologi, kapasitas produksi, kondisi lapangan, serta target investasi pelanggan sehingga menghasilkan sistem yang efektif dan sesuai kebutuhan operasional.",
  items: [
    {
      title: "Teknologi Proses Penambangan dan Pengolahan Mineral",
      description: "Kami mengembangkan solusi proses penambangan dan pengolahan mineral menggunakan kombinasi teknologi pemisahan gravitasi, flotasi, klasifikasi, crushing, grinding, screening, magnetic separator, serta proses mekanis lainnya yang disesuaikan dengan karakteristik mineral dan target produksi.",
      icon: "Cpu"
    },
    {
      title: "Efisiensi Investasi",
      description: "Setiap fasilitas dirancang dengan mempertimbangkan keseimbangan antara biaya investasi (CAPEX), biaya operasional (OPEX), kemudahan pemeliharaan, serta produktivitas jangka panjang.",
      icon: "TrendingUp"
    },
    {
      title: "Desain Modular",
      description: "Unit pengolahan dirancang secara modular sehingga mudah dikembangkan sesuai peningkatan kapasitas produksi maupun kebutuhan pelanggan.",
      icon: "Layers"
    },
    {
      title: "Otomasi Industri",
      description: "SPR mengintegrasikan teknologi PLC, SCADA, HMI, Industrial IoT (IIoT), instrumentasi, dan sistem monitoring real-time untuk meningkatkan efisiensi operasi serta mendukung pengambilan keputusan berbasis data.",
      icon: "Sliders"
    },
    {
      title: "Keberlanjutan Lingkungan",
      description: "Kami mendorong penggunaan teknologi yang hemat energi, efisien dalam penggunaan air, serta mengurangi penggunaan bahan kimia sehingga mendukung operasional yang berkelanjutan dan sesuai regulasi.",
      icon: "Leaf"
    }
  ]
};

export const layananUtama: LayananCategory[] = [
  {
    categoryTitle: "A. Konsultansi Teknik dan Rekayasa",
    categorySubtitle: "SPR menyediakan layanan konsultansi dan rekayasa yang mencakup seluruh tahapan proyek proses penambangan dan pengolahan mineral.",
    items: [
      {
        title: "Studi Potensi dan Karakterisasi Material",
        description: "Melakukan analisis laboratorium menggunakan Fire Assay, XRF, analisis mineralogi, petrografi, dan berbagai metode karakterisasi material lainnya untuk menentukan potensi pengembangan suatu sumber daya mineral."
      },
      {
        title: "Studi Kelayakan (Feasibility Study)",
        description: "Menyusun studi teknis dan ekonomi yang meliputi estimasi investasi, biaya operasional, analisis keekonomian proyek, estimasi produksi, hingga evaluasi risiko investasi."
      },
      {
        title: "Perancangan Proses Penambangan dan Pengolahan Mineral",
        description: "Merancang sistem proses penambangan dan pengolahan mineral berdasarkan karakteristik endapan, jenis mineral, target produksi, serta hasil pengujian laboratorium maupun pilot plant sehingga menghasilkan proses yang efisien dan optimal."
      },
      {
        title: "Desain Fasilitas Proses",
        description: "Menyediakan layanan desain Process Flow Diagram (PFD), Process & Instrumentation Diagram (P&ID), Plant Layout, Detail Engineering Design (DED), hingga perencanaan utilitas dan infrastruktur pendukung."
      },
      {
        title: "Manajemen Proyek",
        description: "Memberikan layanan pendampingan mulai dari Engineering, Procurement, Construction (EPC), instalasi, commissioning, performance test, hingga optimalisasi operasional."
      },
      {
        title: "Sistem Otomasi Industri",
        description: "Merancang dan mengimplementasikan sistem PLC, SCADA, HMI, instrumentasi, historian database, Industrial IoT, serta dashboard monitoring produksi secara real-time."
      }
    ]
  },
  {
    categoryTitle: "B. Pelatihan dan Pengembangan Sumber Daya Manusia",
    categorySubtitle: "SPR menyelenggarakan berbagai program pelatihan teknis berbasis praktik guna meningkatkan kompetensi tenaga kerja di bidang pertambangan, metalurgi, manufaktur, dan otomasi industri.",
    items: [
      {
        title: "Pelatihan Proses Penambangan dan Pengolahan Mineral",
        description: "Pelatihan mengenai proses penambangan dan pengolahan mineral mulai dari teknik penambangan, crushing, grinding, screening, klasifikasi, konsentrasi mineral, hingga pengolahan mineral industri seperti batu kapur, pasir silika, batuan fosfat, gipsum, dan mineral lainnya menjadi bahan baku industri bernilai tambah."
      },
      {
        title: "Pelatihan Metalurgi dan Paduan Logam (Alloy)",
        description: "Pelatihan mengenai perhitungan komposisi logam, teknik peleburan, pengendalian kualitas, perlakuan panas (heat treatment), serta standar mutu material sesuai standar nasional maupun internasional."
      },
      {
        title: "Pelatihan Teknologi Perhiasan dan Kriya Logam",
        description: "Meliputi program pelatihan intensif dalam teknik manufaktur logam mulia dan perhiasan berstandar komersial:",
        bullets: [
          "Casting (Pengecoran)",
          "Electroplating",
          "Electroforming",
          "Stamping",
          "Teknik pembuatan perhiasan secara manual (Handmade)",
          "Finishing dan Quality Control"
        ]
      },
      {
        title: "Pelatihan Otomasi Industri",
        description: "Meliputi PLC, SCADA, Instrumentasi, HMI, Industrial IoT, sistem monitoring industri, dan digitalisasi proses produksi."
      }
    ]
  }
];

export const layananPendukung = [
  "Pemetaan geologi dan identifikasi potensi sumber daya mineral.",
  "Konsultansi eksplorasi mineral.",
  "Pendampingan pengurusan perizinan usaha pertambangan dan industri.",
  "Konsultansi pengelolaan limbah B3 dan pemanfaatan sumber daya sekunder.",
  "Perancangan kawasan industri logam, mineral, dan perhiasan.",
  "Pengembangan sistem otomasi, digitalisasi, dan transformasi industri."
];

export const mengapaSPR = [
  {
    title: "Tenaga Ahli Berpengalaman",
    description: "Didukung oleh tenaga profesional yang memiliki pengalaman di bidang pertambangan, geologi, metalurgi, otomasi industri, dan rekayasa proses.",
    icon: "Users"
  },
  {
    title: "Solusi Terintegrasi",
    description: "Memberikan layanan mulai dari eksplorasi, studi kelayakan, desain, implementasi, commissioning, hingga pendampingan operasional.",
    icon: "Briefcase"
  },
  {
    title: "Pendekatan Berbasis Efisiensi",
    description: "Setiap solusi dirancang dengan mempertimbangkan aspek teknis, ekonomi, keselamatan, kemudahan operasional, dan keberlanjutan investasi.",
    icon: "ShieldAlert"
  },
  {
    title: "Berorientasi pada Nilai Tambah",
    description: "Membantu pelanggan meningkatkan pemanfaatan sumber daya melalui teknologi proses penambangan dan pengolahan mineral, metalurgi, serta otomasi industri yang tepat guna.",
    icon: "Sparkles"
  },
  {
    title: "Transfer Pengetahuan",
    description: "Selain menyediakan solusi teknis, SPR juga membangun kompetensi pelanggan melalui pelatihan, pendampingan, dan transfer teknologi.",
    icon: "BookOpen"
  },
  {
    title: "Komitmen terhadap Keberlanjutan",
    description: "Mendorong penerapan teknologi yang ramah lingkungan, efisien dalam penggunaan energi, serta mendukung kepatuhan terhadap regulasi nasional.",
    icon: "Heart"
  }
];

export const kontakInfo = {
  address: "Jl. Mohammad Toha No.49, Pungkur, Kec. Regol, Kota Bandung, Jawa Barat 40252",
  region: "Jawa Barat – Indonesia",
  phone: "+62 22-63173009",
  email: "support@sakatoyo.co.id",
  website: "www.sakatoyo.co.id",
  rawWebsite: "https://www.sakatoyo.co.id",
  coordination: {
    lat: -6.937299, 
    lng: 107.610543
  }
};
