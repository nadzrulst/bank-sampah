/**
 * ==========================================================
 * ROUTER.GS
 * Sistem Digital Bank Sampah Bojong Karya 2
 * ==========================================================
 */

function doGet(e) {

  try {

    const action = (e.parameter.action || "").trim();

    switch (action) {

      /* ======================================================
       * MASTER
       * ====================================================== */

      case "master_sampah":
        return getMasterSampah();

      case "kelompok_aktif":
        return getKelompokAktif();

      case "stok":
        return getStok();

      case "login_operator":
        return loginOperator(body);

      /* ======================================================
       * WARGA
       * ====================================================== */

      case "login_warga":
        return loginWarga(e);

      case "profil_warga":
        return getProfilWarga(e);

      case "riwayat_setoran":
        return getRiwayatSetoran(e);

      /* ======================================================
       * TRANSAKSI
       * ====================================================== */

      case "detail_setoran":
        return getDetailSetoran(e);

      case "riwayat_transaksi":
        return getRiwayatTransaksi();

      /* ======================================================
       * KEUANGAN
       * ====================================================== */

      case "saldo_kas":
        return getSaldoKas();

      case "riwayat_kas":
        return getRiwayatKas();

      case "dashboard":
        return getDashboard();

      case "laporan":
        return getLaporan(e);

      /* ======================================================
       * PENGUMUMAN
       * ====================================================== */

      case "pengumuman":
        return getPengumuman();

      default:
        return responseGagal("Action tidak ditemukan.");

    }

  } catch (err) {

    return responseGagal(err.message);

  }

}



function doPost(e) {

  try {

    const body = JSON.parse(e.postData.contents);

    switch (body.action) {

      /* ======================================================
       * MASTER SAMPAH
       * ====================================================== */

      case "tambah_master_sampah":
        return tambahMasterSampah(body);

      case "ubah_master_sampah":
        return ubahMasterSampah(body);

      case "hapus_master_sampah":
        return hapusMasterSampah(body);

      /* ======================================================
       * KELOMPOK KEGIATAN
       * ====================================================== */

      case "tambah_kelompok":
        return tambahKelompok(body);

      case "aktifkan_kelompok":
        return aktifkanKelompok(body);

      case "hapus_kelompok":
        return hapusKelompok(body);

      /* ======================================================
       * WARGA
       * ====================================================== */

      case "tambah_warga":
        return tambahWarga(body);

      /* ======================================================
       * TRANSAKSI
       * ====================================================== */

      case "simpan_setoran":
        return simpanSetoran(body);

      case "batalkan_setoran":
        return batalkanSetoran(body);

      case "simpan_penjualan":
        return simpanPenjualan(body);

      /* ======================================================
       * KEUANGAN
       * ====================================================== */

      case "catat_biaya":
        return catatBiaya(body);

      case "catat_dana_masuk":
        return catatDanaMasuk(body);

      /* ======================================================
       * PENGUMUMAN
       * ====================================================== */

      case "tambah_pengumuman":
        return tambahPengumuman(body);

      case "ubah_pengumuman":
        return ubahPengumuman(body);

      case "hapus_pengumuman":
        return hapusPengumuman(body);

      default:
        return responseGagal("Action tidak ditemukan.");

    }

  } catch (err) {

    return responseGagal(err.message);

  }

}