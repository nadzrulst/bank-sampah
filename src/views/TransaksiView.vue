<template>
  <div class="min-h-screen bg-background px-4 text-on-surface md:px-0 pb-28">
    <div class="mx-auto max-w-md">
      <!-- Header -->
      <header class="flex items-center justify-between py-4 px-2">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center overflow-hidden soft-float"
          >
            <span class="font-bold text-on-primary-fixed-variant">BK</span>
          </div>
          <div>
            <p class="text-sm text-on-surface-variant">
              Bank Sampah Bojong Karya 2
            </p>
            <h1
              class="font-headline-lg-mobile text-headline-lg-mobile text-primary"
            >
              Selamat pagi,
            </h1>
          </div>
        </div>
        <button class="text-on-surface-variant">
          <span class="material-symbols-outlined">settings</span>
        </button>
      </header>

      <!-- Balance Card -->
      <section class="p-2">
        <div class="rounded-2xl bg-white p-4 soft-float">
          <p class="text-sm text-on-surface-variant">Saldo Poin</p>
          <p class="mt-2 text-3xl font-semibold text-primary">5.150 Poin</p>
          <p class="mt-2 text-sm text-on-surface-variant">
            Surplus kegiatan 150 Poin
          </p>
        </div>
      </section>

      <!-- Primary Action -->
      <section class="px-2 mt-4">
        <button
          @click="showForm = !showForm"
          class="w-full rounded-2xl bg-primary py-5 text-white font-semibold text-lg soft-float"
        >
          Terima Sampah Warga
        </button>
      </section>

      <!-- Quick actions -->
      <section class="px-2 mt-4 grid grid-cols-2 gap-3">
        <router-link
          to="/jual"
          class="rounded-2xl bg-white p-4 text-center soft-float"
        >
          <span class="material-symbols-outlined text-primary"
            >local_shipping</span
          >
          <p class="mt-2 text-sm">Jual ke Pengepul</p>
        </router-link>
        <router-link
          to="/keuangan"
          class="rounded-2xl bg-white p-4 text-center soft-float"
        >
          <span class="material-symbols-outlined text-primary"
            >receipt_long</span
          >
          <p class="mt-2 text-sm">Catat Biaya</p>
        </router-link>
        <router-link
          to="/tukar"
          class="col-span-2 rounded-2xl bg-white p-4 text-center soft-float"
        >
          <span class="material-symbols-outlined text-primary">redeem</span>
          <p class="mt-2 text-sm">Tukar Poin</p>
        </router-link>
      </section>

      <!-- Search & filters (Riwayat style) -->
      <section class="px-2 mt-5">
        <input
          v-model="query"
          placeholder="Cari nama atau jenis transaksi..."
          class="w-full rounded-full px-4 py-3 bg-surface-container border border-slate-200 outline-none"
        />
        <div class="mt-3 flex gap-2 flex-wrap">
          <button
            v-for="chip in filterChips"
            :key="chip"
            @click="toggleChip(chip)"
            :class="[
              'px-3 py-2 rounded-full text-sm',
              activeChips.includes(chip)
                ? 'bg-primary text-white'
                : 'bg-surface-container text-on-surface',
            ]"
          >
            {{ chip }}
          </button>
        </div>
      </section>

      <!-- Recent transactions list -->
      <section class="px-2 mt-4 space-y-3">
        <h3 class="text-sm font-medium text-on-surface-variant">Hari Ini</h3>
        <div
          v-for="(t, i) in filteredTransactions"
          :key="i"
          class="bg-white p-3 rounded-2xl soft-float flex items-center justify-between"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-primary"
                >recycling</span
              >
            </div>
            <div>
              <p class="font-medium">{{ t.title }}</p>
              <p class="text-sm text-on-surface-variant">{{ t.subtitle }}</p>
            </div>
          </div>
          <div class="text-right">
            <p
              :class="[
                'font-semibold',
                t.amount > 0 ? 'text-emerald-600' : 'text-red-500',
              ]"
            >
              {{ t.amount > 0 ? "+" : "-" }} Rp
              {{ Math.abs(t.amount).toLocaleString("id-ID") }}
            </p>
            <p class="text-sm text-on-surface-variant">{{ t.time }}</p>
          </div>
        </div>
      </section>

      <!-- Collapsible form for receiving waste -->
      <section v-if="showForm" class="px-2 mt-4">
        <div class="rounded-2xl bg-white p-4 soft-float">
          <h3 class="font-semibold mb-3">Form Terima Sampah</h3>
          <label class="text-sm text-slate-600">Nama Warga</label>
          <input
            v-model="namaWarga"
            class="w-full rounded-xl border border-slate-200 px-3 py-3 mt-2"
            placeholder="Contoh: Rahmat"
          />
          <label class="text-sm text-slate-600 mt-3">RT</label>
          <input
            v-model="rt"
            class="w-full rounded-xl border border-slate-200 px-3 py-3 mt-2"
            placeholder="07"
          />

          <div class="mt-4">
            <div class="flex items-center justify-between">
              <p class="font-medium">Item Sampah</p>
              <button class="text-sm text-primary" @click="addItem">
                Tambah Item
              </button>
            </div>
            <div class="mt-3 space-y-3">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="rounded-xl border border-slate-100 p-3"
              >
                <input
                  v-model="item.kategori"
                  placeholder="Kategori"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 mb-2"
                />
                <div class="flex gap-2">
                  <input
                    v-model.number="item.berat"
                    type="number"
                    min="0"
                    placeholder="Berat (kg)"
                    class="w-1/2 rounded-lg border border-slate-200 px-3 py-2"
                  />
                  <button
                    class="w-1/2 rounded-lg bg-red-50 text-red-600"
                    @click="removeItem(index)"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            @click.prevent="submitTransaction"
            class="mt-4 w-full rounded-2xl bg-primary py-3 text-white font-semibold"
          >
            Simpan Transaksi
          </button>
        </div>
      </section>

      <!-- Bottom nav -->
      <nav
        class="fixed bottom-0 left-0 w-full bg-surface z-40 py-3 border-t border-slate-100"
      >
        <div class="max-w-md mx-auto flex items-center justify-between px-6">
          <router-link
            to="/transaksi"
            class="flex flex-col items-center gap-1 text-sm text-primary"
          >
            <span class="material-symbols-outlined">inventory_2</span>
            <span>Transaksi</span>
          </router-link>
          <router-link
            to="/riwayat"
            class="flex flex-col items-center gap-1 text-sm text-on-surface-variant"
          >
            <span class="material-symbols-outlined">history</span>
            <span>Riwayat</span>
          </router-link>
          <router-link
            to="/laporan"
            class="flex flex-col items-center gap-1 text-sm text-on-surface-variant"
          >
            <span class="material-symbols-outlined">bar_chart</span>
            <span>Laporan</span>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { submitSetoran } from "../services/api";

const showForm = ref(false);
const namaWarga = ref("");
const rt = ref("");
const items = ref([{ kategori: "", berat: 0 }]);

function addItem() {
  items.value.push({ kategori: "", berat: 0 });
}
function removeItem(i) {
  items.value.splice(i, 1);
}

const query = ref("");
const filterChips = ["Semua", "Setoran", "Penjualan", "Biaya"];
const activeChips = ref(["Semua"]);

function toggleChip(chip) {
  if (chip === "Semua") {
    activeChips.value = ["Semua"];
    return;
  }
  if (activeChips.value.includes(chip)) {
    activeChips.value = activeChips.value.filter((c) => c !== chip);
    if (activeChips.value.length === 0) activeChips.value = ["Semua"];
  } else {
    activeChips.value = activeChips.value.filter((c) => c !== "Semua");
    activeChips.value.push(chip);
  }
}

const transactions = ref([
  {
    title: "Setoran Sampah",
    subtitle: "Budi Santoso • 12.5 kg",
    amount: 45000,
    time: "10:30 WIB",
    type: "Setoran",
  },
  {
    title: "Tarik Saldo",
    subtitle: "Ani Yudhoyono",
    amount: -20000,
    time: "09:15 WIB",
    type: "Biaya",
  },
]);

const filteredTransactions = computed(() => {
  const q = query.value.toLowerCase().trim();
  return transactions.value.filter((t) => {
    if (
      !activeChips.value.includes("Semua") &&
      !activeChips.value.includes(t.type)
    )
      return false;
    if (!q) return true;
    return (
      t.title.toLowerCase().includes(q) || t.subtitle.toLowerCase().includes(q)
    );
  });
});

async function submitTransaction() {
  if (
    !namaWarga.value ||
    !rt.value ||
    items.value.some((it) => !it.kategori || !it.berat)
  ) {
    alert("Harap lengkapi data warga dan item sampah.");
    return;
  }
  try {
    await submitSetoran({
      namaWarga: namaWarga.value,
      rt: rt.value,
      items: items.value,
    });
    alert("Transaksi setoran berhasil disimpan.");
    // reset form
    namaWarga.value = "";
    rt.value = "";
    items.value = [{ kategori: "", berat: 0 }];
    showForm.value = false;
  } catch (e) {
    alert("Gagal mengirim data. Periksa endpoint API.");
  }
}
</script>
