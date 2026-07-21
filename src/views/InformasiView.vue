<template>
  <div class="min-h-screen bg-[#eef4ff] max-w-md mx-auto pb-28 text-slate-900">
    <main class="px-6 pt-6 pb-4">
      <header
        class="mb-6 flex items-center justify-between gap-4 rounded-[28px] bg-white px-5 py-5 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] border border-slate-200"
      >
        <div class="flex items-center gap-3">
          <div
            class="h-12 w-12 rounded-3xl bg-green-50 flex items-center justify-center text-2xl"
          >
            👤
          </div>
          <div>
            <p class="text-sm font-medium text-slate-500">
              Informasi & Riwayat
            </p>
            <h1 class="text-xl font-semibold text-slate-900">
              Warga Bank Sampah
            </h1>
          </div>
        </div>

        <button
          class="h-11 w-11 rounded-2xl bg-slate-100 text-xl text-slate-600 shadow-sm"
        >
          🔔
        </button>
      </header>

      <section
        class="mb-5 rounded-[32px] bg-white p-5 shadow-sm border border-gray-100"
      >
        <div class="flex items-center justify-between mb-5">
          <div>
            <p class="text-sm font-semibold text-slate-900">Riwayat Poin</p>
            <p class="text-xs text-slate-500">Lihat semua</p>
          </div>
          <span
            class="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-800"
            >Terbaru</span
          >
        </div>

        <div class="space-y-3">
          <div class="rounded-3xl border border-slate-200 p-4 shadow-sm">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div
                  class="h-11 w-11 rounded-3xl bg-green-50 flex items-center justify-center text-xl"
                >
                  ♻️
                </div>
                <div>
                  <p class="font-semibold text-slate-900">
                    Setoran Botol Plastik
                  </p>
                  <p class="text-sm text-slate-500">12 Okt 2023 · 14:20</p>
                </div>
              </div>
              <p class="text-lg font-semibold text-green-700">+45 Poin</p>
            </div>
          </div>

          <div class="rounded-3xl border border-slate-200 p-4 shadow-sm">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div
                  class="h-11 w-11 rounded-3xl bg-slate-100 flex items-center justify-center text-xl"
                >
                  🛒
                </div>
                <div>
                  <p class="font-semibold text-slate-900">Tukar Beras 5kg</p>
                  <p class="text-sm text-slate-500">08 Okt 2023 · 09:15</p>
                </div>
              </div>
              <p class="text-lg font-semibold text-red-600">-150 Poin</p>
            </div>
          </div>

          <div class="rounded-3xl border border-slate-200 p-4 shadow-sm">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div
                  class="h-11 w-11 rounded-3xl bg-green-50 flex items-center justify-center text-xl"
                >
                  📄
                </div>
                <div>
                  <p class="font-semibold text-slate-900">
                    Setoran Koran & Kertas
                  </p>
                  <p class="text-sm text-slate-500">03 Okt 2023 · 16:45</p>
                </div>
              </div>
              <p class="text-lg font-semibold text-green-700">+28 Poin</p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="mb-5 rounded-[32px] bg-white p-5 shadow-sm border border-gray-100"
      >
        <p class="mb-4 text-sm font-semibold text-slate-900">
          Informasi Bank Sampah
        </p>
        <div class="overflow-hidden rounded-[28px] bg-white">
          <iframe
            title="Lokasi Bank Sampah"
            src="https://www.google.com/maps?q=-6.164774,107.28062&z=16&output=embed"
            class="h-40 w-full border-0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div class="mt-4 space-y-4">
          <div
            class="flex items-center gap-3 rounded-[26px] bg-[#f9fbff] p-4 shadow-sm border border-slate-200"
          >
            <span
              class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 text-xl"
              >📞</span
            >
            <div>
              <p class="text-sm text-slate-500">WhatsApp Center</p>
              <p class="font-semibold text-slate-900">+62 812-3456-7890</p>
            </div>
          </div>

          <div
            class="flex items-center gap-3 rounded-[26px] bg-[#f9fbff] p-4 shadow-sm border border-slate-200"
          >
            <span
              class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 text-xl"
              >🕒</span
            >
            <div>
              <p class="text-sm text-slate-500">Jam Operasional</p>
              <p class="font-semibold text-slate-900">
                Senin - Sabtu (08:00 - 16:00)
              </p>
            </div>
          </div>

          <div
            class="flex items-center gap-3 rounded-[26px] bg-[#f9fbff] p-4 shadow-sm border border-slate-200"
          >
            <span
              class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 text-xl"
              >📍</span
            >
            <div>
              <p class="text-sm text-slate-500">Alamat Kantor</p>
              <p class="font-semibold text-slate-900">
                DUSUN BOJONG KARYA 2, RT 010, RW 000, DESA RENGASDENGKLOK
                SELATAN, KECAMATAN RENGASDENGKLOK SELATAN.
              </p>
              <a
                href="https://www.google.com/maps/place/6%C2%B009'53.2%22S+107%C2%B016'50.2%22E/@-6.164774,107.28062,697m"
                target="_blank"
                rel="noreferrer"
                class="text-xs text-slate-500 mt-1 inline-block hover:text-slate-900"
              >
                Lihat di Google Maps • 6°09'53.2"S 107°16'50.2"E
              </a>
            </div>
          </div>
        </div>

        <div class="mt-5 grid gap-3">
          <button
            class="w-full rounded-3xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm"
            @click="openWhatsApp"
          >
            Hubungi via WhatsApp
          </button>
          <button
            class="w-full rounded-3xl bg-emerald-900 px-4 py-3 text-sm font-semibold text-white shadow-sm"
            @click="openGoogleMaps"
          >
            Buka di Google Maps
          </button>
        </div>
      </section>

      <section
        class="rounded-[32px] bg-gradient-to-b from-emerald-900 to-emerald-800 p-5 text-white shadow-sm"
      >
        <p class="text-lg font-semibold">Yuk, Ajak Tetangga!</p>
        <p class="mt-3 text-sm text-white/80">
          Dapatkan bonus 50 poin untuk setiap warga baru yang bergabung melalui
          kode referral Anda.
        </p>
        <button
          class="mt-5 w-full rounded-3xl bg-white px-4 py-3 text-sm font-semibold text-emerald-950"
          @click="copyReferralCode"
        >
          Bagikan Kode
        </button>
      </section>
    </main>

    <BottomNavWarga />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BottomNavWarga from '../components/BottomNavWarga.vue'

function openWhatsApp() {
  window.open("https://wa.me/6281234567890", "_blank");
}

function openGoogleMaps() {
  window.open(
    "https://www.google.com/maps/place/6%C2%B009'53.2%22S+107%C2%B016'50.2%22E/@-6.164774,107.28062,697m",
    "_blank",
  );
}

function copyReferralCode() {
  const code = "REF12345";
  navigator.clipboard.writeText(code).catch(() => null);
  alert(`Kode referral disalin: ${code}`);
}
</script>
