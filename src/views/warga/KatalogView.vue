<template>
  <div class="min-h-screen bg-[#f9f9ff] text-slate-900 pb-24">
    <header class="sticky top-0 z-20 bg-white border-b border-gray-100 px-4 py-4">
      <div class="max-w-md mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-[#e8f4ef] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <path d="M3 10 12 3l9 7" />
              <path d="M5 10v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-500">Bank Sampah</p>
            <h1 class="text-lg font-bold text-[#003A36]">Katalog Sembako</h1>
          </div>
        </div>

        <button class="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <path d="M10 5a2 2 0 0 1 4 0 4 4 0 0 0 3.9 4h.1v1.6c0 .8.2 1.5.6 2.2l1.2 1.7a1 1 0 0 1-.8 1.5H7.9a1 1 0 0 1-.8-1.5L8.3 9.4c.3-.7.5-1.4.5-2.2V9A4 4 0 0 0 10 5Z" />
            <path d="M10 17a2 2 0 0 0 4 0" />
          </svg>
        </button>
      </div>
    </header>

    <main class="max-w-md mx-auto px-4 py-5">
      <div class="space-y-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <circle cx="11" cy="11" r="6" />
              <path d="m20 20-4.2-4.2" />
            </svg>
          </div>
          <input
            v-model="search"
            type="text"
            placeholder="Cari beras, gula, atau lainnya..."
            class="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-2 focus:ring-[#003A36]/20"
          />
        </div>

        <div class="bg-[#00534d] rounded-2xl p-5 overflow-hidden relative shadow-sm text-white">
          <div class="absolute top-0 right-0 opacity-10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="h-[120px] w-[120px]">
              <path d="M4 7h16" />
              <path d="M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
              <path d="M9 11h6" />
              <path d="M9 15h6" />
            </svg>
          </div>
          <div class="relative z-10 flex items-center justify-between gap-4">
            <div>
              <p class="text-sm text-white/80">Poin Tersedia</p>
              <div class="flex items-center gap-2 mt-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                  <path d="M12 3 14.5 8 20 8l-4.5 3.5 1.5 6-5-3.5-5 3.5 1.5-6L4 8h5.5L12 3Z" />
                </svg>
                <h2 class="text-3xl font-bold">2.450</h2>
              </div>
            </div>
            <button class="bg-[#0a45e6] px-4 py-2 rounded-xl text-white font-semibold shadow-sm">
              Riwayat
            </button>
          </div>
        </div>
      </div>

      <section class="mt-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-[#003A36]">Pilihan Terbaik</h3>
          <button class="text-sm font-semibold text-[#0a45e6]">Lihat Semua</button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="item in filteredItems"
            :key="item.id"
            class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
          >
            <div class="h-32 relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg v-if="item.icon === 'beras'" viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-16 w-16">
                  <path d="M4 8h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
                  <path d="M4 8V6a2 2 0 0 1 2-2h2" />
                  <path d="M17 8V6" />
                  <circle cx="9" cy="16" r="1" fill="#147052" stroke="none" />
                  <circle cx="15" cy="16" r="1" fill="#147052" stroke="none" />
                </svg>
                <svg v-else-if="item.icon === 'minyak'" viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-16 w-16">
                  <rect x="5" y="4" width="10" height="16" rx="2" />
                  <path d="M15 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
                  <path d="M8 8h2" />
                  <path d="M8 12h2" />
                </svg>
                <svg v-else-if="item.icon === 'gula'" viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-16 w-16">
                  <path d="M5 8c0-2 2-4 5-4 3 0 5 2 5 4 0 3-2 4-5 6-3-2-5-3-5-6Z" />
                  <path d="M6 12c2 1 3 2 4 3" />
                  <path d="M14 12c-1 1-2 2-3 3" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-16 w-16">
                  <path d="M4 8h16" />
                  <path d="M7 8v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8" />
                  <path d="M9 12h6" />
                </svg>
              </div>
              <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg">
                <p class="text-xs font-semibold text-[#003A36]">{{ item.satuan }}</p>
              </div>
            </div>
            <div class="p-4 space-y-2">
              <h4 class="font-semibold text-[#003A36] truncate">{{ item.nama }}</h4>
              <div class="flex items-center gap-1 text-[#0a45e6]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                  <path d="M12 3 14.5 8 20 8l-4.5 3.5 1.5 6-5-3.5-5 3.5 1.5-6L4 8h5.5L12 3Z" />
                </svg>
                <p class="text-lg font-bold">{{ item.poin }}</p>
              </div>
              <button class="w-full bg-[#eef5f2] py-2 rounded-xl text-[#003A36] font-semibold border border-[#e3ece8]">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <div class="max-w-md mx-auto flex justify-around py-2">
        <button @click="keBeranda" class="flex flex-col items-center text-gray-400 hover:text-gray-600 text-xs">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 mb-1">
            <path d="m3 10 9-7 9 7" />
            <path d="M5 10v8a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-8" />
          </svg>
          Beranda
        </button>
        <button class="flex flex-col items-center text-[#003A36] font-medium text-xs">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 mb-1">
            <path d="M4 7h16" />
            <path d="M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
            <path d="M9 11h6" />
            <path d="M9 15h6" />
          </svg>
          Katalog
        </button>
        <button @click="keInformasi" class="flex flex-col items-center text-gray-400 hover:text-gray-600 text-xs">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 mb-1">
            <path d="M4 5h16" />
            <path d="M4 10h16" />
            <path d="M4 15h10" />
            <path d="M16 15l2 2 4-4" />
          </svg>
          Informasi
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')

const catalogItems = ref([
  { id: 1, nama: 'Beras Premium', poin: 150, satuan: '5kg', icon: 'beras' },
  { id: 2, nama: 'Gula Pasir', poin: 160, satuan: '1kg', icon: 'gula' },
  { id: 3, nama: 'Minyak Goreng', poin: 180, satuan: '1L', icon: 'minyak' },
  { id: 4, nama: 'Garam', poin: 50, satuan: '500g', icon: 'garam' },
])

const filteredItems = computed(() => {
  const keyword = search.value.toLowerCase()
  return catalogItems.value.filter((item) => {
    return item.nama.toLowerCase().includes(keyword) || item.satuan.toLowerCase().includes(keyword)
  })
})

function keBeranda() {
  router.push('/warga')
}

function keInformasi() {
  router.push('/informasi')
}
</script>