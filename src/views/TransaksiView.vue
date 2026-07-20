<template>
  <div class="min-h-screen bg-[#fbfaf6] px-4 pb-28 text-[#142431] md:px-0">
    <div class="mx-auto max-w-md">

      <!-- Header -->
      <header class="flex items-center justify-between px-1 py-4">
        <div class="flex items-center gap-3">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(20,36,49,0.10)]"
          >
            <span class="material-symbols-outlined text-[29px] text-[#147052]">
              eco
            </span>
          </div>

          <div>
            <h1 class="text-[21px] font-bold leading-tight text-[#126047]">
              Bank Sampah
            </h1>

            <p class="mt-1 text-[18px] leading-tight text-[#687481]">
              Bojong Karya 2
            </p>
          </div>
        </div>

        <button
          type="button"
          class="relative flex h-10 w-10 items-center justify-center text-[#142431]"
        >
          <span class="material-symbols-outlined text-[29px]">
            notifications_none
          </span>

          <span
            class="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-[#fbfaf6] bg-[#147052]"
          ></span>
        </button>
      </header>

      <!-- Balance Card -->
      <section class="mt-4">
        <div
          class="relative min-h-[205px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#fffefa] via-[#fbfaf0] to-[#eef4dc] p-5 shadow-[0_10px_24px_rgba(20,36,49,0.10)]"
        >
          <div class="relative z-10">
            <div class="flex items-center gap-2 text-[#6d7780]">
              <span class="material-symbols-outlined text-[23px]">
                spa
              </span>

              <p class="text-[18px]">
                Saldo Poin
              </p>
            </div>

            <p class="mt-5 text-[42px] font-bold leading-none text-[#126047]">
              5.150
              <span class="text-[30px]">Poin</span>
            </p>

            <p class="mt-5 text-[17px] text-[#687481]">
              Setara dengan Rp 51.500
            </p>
          </div>

          <!-- Ilustrasi tanaman -->
          <div
            class="pointer-events-none absolute -bottom-5 right-[-12px] h-[190px] w-[210px] opacity-75"
          >
            <svg
              viewBox="0 0 280 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-full w-full"
            >
              <path
                d="M89 252C104 205 112 157 113 99C113 72 108 47 99 25"
                stroke="#80B98A"
                stroke-width="8"
                stroke-linecap="round"
              />

              <path
                d="M111 154C78 137 59 113 56 80C87 82 111 105 111 154Z"
                fill="#A8D4A4"
              />

              <path
                d="M112 119C130 78 154 55 187 50C186 87 159 111 112 119Z"
                fill="#9CCA99"
              />

              <path
                d="M111 183C143 148 177 140 218 153C196 183 159 195 111 183Z"
                fill="#8FC58F"
              />

              <path
                d="M103 207C72 199 47 183 30 157C60 151 91 168 103 207Z"
                fill="#C8E2B4"
              />

              <path
                d="M113 79C105 50 111 25 132 3C149 30 141 59 113 79Z"
                fill="#A4D0A0"
              />

              <path
                d="M205 38C216 20 233 17 254 22C249 44 231 53 205 38Z"
                fill="#D4E5B8"
              />

              <path
                d="M218 68C231 54 249 54 267 64C257 82 238 85 218 68Z"
                fill="#D8E8BE"
              />

              <path
                d="M236 112C243 94 257 86 276 87C273 107 259 117 236 112Z"
                fill="#D9E9C2"
              />
            </svg>
          </div>

          <span
            class="material-symbols-outlined absolute right-5 top-8 text-[54px] text-[#dce8c9]"
          >
            recycling
          </span>
        </div>
      </section>

      <!-- Primary Action -->
      <section class="mt-6">
        <button
          type="button"
          @click="showForm = true"
          class="flex w-full items-center justify-between rounded-[22px] bg-[#08704f] px-5 py-4 text-white shadow-[0_8px_18px_rgba(8,112,79,0.22)] transition active:scale-[0.98]"
        >
          <span class="flex items-center gap-3">
            <span class="material-symbols-outlined text-[27px]">
              spa
            </span>

            <span class="text-[18px] font-semibold">
              Terima Sampah Warga
            </span>
          </span>

          <span class="material-symbols-outlined text-[27px]">
            chevron_right
          </span>
        </button>
      </section>

      <!-- Quick Actions -->
      <section class="mt-6 grid grid-cols-2 gap-3">

        <!-- Jadwal Penjemputan -->
        <router-link
          to="/jual"
          class="flex min-h-[92px] items-center gap-3 rounded-[22px] bg-white px-4 shadow-[0_8px_18px_rgba(20,36,49,0.08)] transition active:scale-[0.98]"
        >
          <div
            class="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#f4f5e9]"
          >
            <span class="material-symbols-outlined text-[32px] text-[#147052]">
              local_shipping
            </span>
          </div>

          <p class="text-[15px] font-medium leading-tight">
            Jadwal Penjemputan
          </p>
        </router-link>

        <!-- Catat Biaya -->
        <router-link
          to="/keuangan"
          class="flex min-h-[92px] items-center gap-3 rounded-[22px] bg-white px-4 shadow-[0_8px_18px_rgba(20,36,49,0.08)] transition active:scale-[0.98]"
        >
          <div
            class="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#f4f5e9]"
          >
            <span class="material-symbols-outlined text-[32px] text-[#147052]">
              receipt_long
            </span>
          </div>

          <p class="text-[15px] font-medium leading-tight">
            Catat Biaya
          </p>
        </router-link>

        <!-- Tukar Poin Full Width -->
        <router-link
          to="/tukar"
          class="col-span-2 flex min-h-[92px] items-center gap-3 rounded-[22px] bg-white px-4 shadow-[0_8px_18px_rgba(20,36,49,0.08)] transition active:scale-[0.98]"
        >
          <div
            class="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#f4f5e9]"
          >
            <span class="material-symbols-outlined text-[32px] text-[#147052]">
              calendar_month
            </span>
          </div>

          <p class="flex-1 text-[16px] font-medium">
            Tukar Poin
          </p>

          <span class="material-symbols-outlined text-[26px] text-[#147052]">
            chevron_right
          </span>
        </router-link>
      </section>

      <!-- Search -->
      <section class="mt-7">
        <div class="relative">
          <span
            class="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[29px] text-[#687481]"
          >
            search
          </span>

          <input
            v-model="query"
            placeholder="Cari nama atau jenis transaksi..."
            class="h-[66px] w-full rounded-full border border-[#e3e1da] bg-[#f9f8f3] px-14 pr-14 text-[16px] text-[#142431] outline-none placeholder:text-[#7b858e] focus:border-[#147052]"
          />

          <span
            class="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-[27px] text-[#687481]"
          >
            tune
          </span>
        </div>

        <!-- Filter Chips -->
        <div class="mt-4 flex gap-2 overflow-x-auto pb-1">
          <button
            v-for="chip in filterChips"
            :key="chip"
            type="button"
            @click="toggleChip(chip)"
            :class="[
              'shrink-0 rounded-full px-5 py-3 text-[14px] transition',
              activeChips.includes(chip)
                ? 'bg-[#08704f] font-semibold text-white'
                : 'bg-[#f5f3ec] text-[#142431]',
            ]"
          >
            {{ chip }}
          </button>
        </div>
      </section>

      <!-- Recent Transactions -->
      <section class="mt-7">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-[18px] font-medium">
            Transaksi Terakhir
          </h3>

          <button
            type="button"
            class="flex items-center gap-1 text-[14px] text-[#687481]"
          >
            Lihat semua

            <span class="material-symbols-outlined text-[22px]">
              chevron_right
            </span>
          </button>
        </div>

        <div class="space-y-3">
          <div
            v-for="(t, i) in filteredTransactions"
            :key="i"
            class="flex min-h-[104px] items-center gap-3 rounded-[22px] bg-white px-4 shadow-[0_8px_18px_rgba(20,36,49,0.08)]"
          >
            <div
              :class="[
                'flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[16px]',
                t.amount > 0 ? 'bg-[#eef3df]' : 'bg-[#f7f0df]',
              ]"
            >
              <span class="material-symbols-outlined text-[32px] text-[#147052]">
                recycling
              </span>
            </div>

            <div class="min-w-0 flex-1">
              <p class="truncate text-[16px] font-medium">
                {{ t.title }}
              </p>

              <p class="mt-1 truncate text-[14px] text-[#687481]">
                {{ t.subtitle }}
              </p>
            </div>

            <div class="text-right">
              <p
                :class="[
                  'whitespace-nowrap text-[16px] font-semibold',
                  t.amount > 0 ? 'text-[#08704f]' : 'text-red-500',
                ]"
              >
                {{ t.amount > 0 ? "+" : "-" }} Rp
                {{ Math.abs(t.amount).toLocaleString("id-ID") }}
              </p>

              <p class="mt-1 whitespace-nowrap text-[13px] text-[#687481]">
                {{ t.time }}
              </p>
            </div>

            <span class="material-symbols-outlined text-[24px] text-[#687481]">
              chevron_right
            </span>
          </div>

          <p
            v-if="filteredTransactions.length === 0"
            class="rounded-2xl bg-white p-5 text-center text-sm text-[#687481]"
          >
            Tidak ada transaksi yang sesuai.
          </p>
        </div>
      </section>

      <!-- Bottom Navigation -->
      <BottomNav />
    </div>
  </div>

  <!-- Popup Form Terima Sampah -->
  <Teleport to="body">
    <div
      v-if="showForm"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6"
      @click.self="showForm = false"
    >
      <div
        class="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-[24px] bg-white p-5 shadow-2xl"
      >
        <!-- Modal Header -->
        <div class="mb-5 flex items-center justify-between">
          <h3 class="text-[19px] font-semibold">
            Form Terima Sampah
          </h3>

          <button
            type="button"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#687481]"
            @click="showForm = false"
          >
            <span class="material-symbols-outlined text-[22px]">
              close
            </span>
          </button>
        </div>

        <!-- Nama Warga -->
        <label class="text-[14px] text-[#687481]">
          Nama Warga
        </label>

        <input
          v-model="namaWarga"
          class="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-[#147052]"
          placeholder="Contoh: Rahmat"
        />

        <!-- RT -->
        <label class="mt-4 block text-[14px] text-[#687481]">
          RT
        </label>

        <input
          v-model="rt"
          class="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-[#147052]"
          placeholder="07"
        />

        <!-- Item Sampah -->
        <div class="mt-5">
          <div class="flex items-center justify-between">
            <p class="text-[15px] font-medium">
              Item Sampah
            </p>

            <button
              type="button"
              class="text-sm font-medium text-[#147052]"
              @click="addItem"
            >
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
                class="mb-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#147052]"
              />

              <div class="flex gap-2">
                <input
                  v-model.number="item.berat"
                  type="number"
                  min="0"
                  placeholder="Berat (kg)"
                  class="w-1/2 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#147052]"
                />

                <button
                  type="button"
                  class="w-1/2 rounded-lg bg-red-50 text-sm text-red-600"
                  @click="removeItem(index)"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="mt-5 flex gap-2">
          <button
            type="button"
            class="w-1/3 rounded-xl bg-slate-100 py-3 text-sm font-medium text-[#687481]"
            @click="showForm = false"
          >
            Batal
          </button>

          <button
            type="button"
            @click.prevent="submitTransaction"
            class="w-2/3 rounded-xl bg-[#08704f] py-3 text-sm font-semibold text-white"
          >
            Simpan Transaksi
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed } from "vue";
import { submitSetoran } from "../services/api";
import BottomNav from "../components/BottomNav.vue";

const showForm = ref(false);
const namaWarga = ref("");
const rt = ref("");

const items = ref([
  {
    kategori: "",
    berat: 0,
  },
]);

function addItem() {
  items.value.push({
    kategori: "",
    berat: 0,
  });
}

function removeItem(i) {
  items.value.splice(i, 1);
}

const query = ref("");

const filterChips = [
  "Semua",
  "Setoran",
  "Penarikan",
  "Pembelian",
  "Biaya",
];

const activeChips = ref(["Semua"]);

function toggleChip(chip) {
  if (chip === "Semua") {
    activeChips.value = ["Semua"];
    return;
  }

  if (activeChips.value.includes(chip)) {
    activeChips.value = activeChips.value.filter((c) => c !== chip);

    if (activeChips.value.length === 0) {
      activeChips.value = ["Semua"];
    }
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
    aliases: ["Penarikan"],
  },
]);

const filteredTransactions = computed(() => {
  const q = query.value.toLowerCase().trim();

  return transactions.value.filter((t) => {
    const transactionTypes = [t.type, ...(t.aliases || [])];

    if (
      !activeChips.value.includes("Semua") &&
      !activeChips.value.some((chip) =>
        transactionTypes.includes(chip)
      )
    ) {
      return false;
    }

    if (!q) {
      return true;
    }

    return (
      t.title.toLowerCase().includes(q) ||
      t.subtitle.toLowerCase().includes(q)
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

    namaWarga.value = "";
    rt.value = "";

    items.value = [
      {
        kategori: "",
        berat: 0,
      },
    ];

    showForm.value = false;
  } catch (e) {
    alert("Gagal mengirim data. Periksa endpoint API.");
  }
}
</script>