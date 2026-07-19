<template>
  <div class="min-h-screen bg-background px-4 text-on-surface md:px-0 pb-24">
    <div class="mx-auto max-w-md">
      <!-- Top bar -->
      <header class="flex items-center justify-between py-4 px-2">
        <button @click="$router.back()" class="text-primary text-lg">
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 class="font-headline-md text-headline-md text-primary">
          Catat Biaya
        </h1>
        <div
          class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-sm font-bold text-primary"
        >
          BK
        </div>
      </header>

      <!-- Saldo Card -->
      <section class="p-4">
        <div class="rounded-2xl bg-white p-4 soft-float">
          <p class="text-sm text-slate-500">Saldo Saat Ini</p>
          <p class="mt-3 text-2xl font-bold text-primary">Rp 650.000</p>
        </div>
      </section>

      <!-- Form -->
      <form class="px-4 space-y-4">
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700"
            >Nominal</label
          >
          <div class="rounded-2xl bg-white p-3 soft-float flex items-center">
            <span class="text-sm text-on-surface-variant mr-3">Rp</span>
            <input
              v-model.number="nominal"
              type="number"
              placeholder="0"
              class="w-full bg-transparent outline-none text-lg font-semibold"
            />
          </div>
        </div>

        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Kategori</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="c in categories"
              :key="c"
              type="button"
              @click="selectCategory(c)"
              :class="[
                'px-4 py-2 rounded-full text-sm',
                selectedCategory === c
                  ? 'bg-primary text-white'
                  : 'bg-surface-container text-on-surface',
              ]"
            >
              {{ c }}
            </button>
          </div>
        </div>

        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700"
            >Keterangan</label
          >
          <textarea
            v-model="keterangan"
            rows="4"
            class="w-full rounded-2xl bg-white p-3 soft-float outline-none"
            placeholder="Tuliskan detail biaya..."
          ></textarea>
        </div>

        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">
            Foto Bukti (Opsional)
          </p>
          <label
            class="block rounded-2xl border-2 border-dashed border-surface-container p-6 text-center bg-white soft-float cursor-pointer"
          >
            <input
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleFile"
            />
            <div
              class="mx-auto w-12 h-12 rounded-full bg-surface-container flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-primary"
                >add_a_photo</span
              >
            </div>
            <p class="mt-2 text-sm text-on-surface-variant">
              Ketuk untuk unggah foto nota atau struk
            </p>
          </label>
        </div>
      </form>

      <!-- Sticky action -->
      <div
        class="fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md p-4 border-t border-slate-100 z-50"
      >
        <div class="max-w-md mx-auto flex items-center justify-between gap-4">
          <div>
            <p class="text-sm text-on-surface-variant">Saldo setelah biaya:</p>
            <p class="text-base font-semibold text-primary">
              {{ formatRupiah(saldoAfter) }}
            </p>
          </div>
          <button
            @click.prevent="submitKeuangan"
            class="ml-2 flex-1 rounded-2xl bg-primary py-3 text-white font-semibold"
          >
            Simpan Biaya
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { submitBiaya } from "../services/api";

const nominal = ref(0);
const jenis = ref("");
const keterangan = ref("");
const selectedCategory = ref("Angkut");
const categories = [
  "Angkut",
  "Karung",
  "Konsumsi",
  "Alat Tulis",
  "Perawatan",
  "Kegiatan Sosial",
  "Lainnya",
];
const saldoAwal = ref(650000);

const saldoAfter = computed(() => {
  const n = Number(nominal.value) || 0;
  return Math.max(0, saldoAwal.value - n);
});

function formatRupiah(value) {
  return "Rp " + Number(value).toLocaleString("id-ID");
}

function selectCategory(cat) {
  selectedCategory.value = cat;
}

function handleFile(e) {
  // no-op for demo; could store file for upload
}

async function submitKeuangan() {
  if (!selectedCategory.value) {
    alert("Pilih kategori terlebih dahulu.");
    return;
  }

  if (!nominal.value) {
    alert("Masukkan nominal biaya.");
    return;
  }

  try {
    await submitBiaya({
      jenis: selectedCategory.value,
      nominal: Number(nominal.value),
      keterangan: keterangan.value,
    });
    alert("Catatan keuangan berhasil dikirim.");
    nominal.value = 0;
    keterangan.value = "";
  } catch (err) {
    alert("Gagal mengirim data keuangan.");
  }
}
</script>
