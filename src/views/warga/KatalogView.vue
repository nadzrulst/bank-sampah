<template>
  <div class="min-h-screen bg-[#F8F9FB] pb-28 font-sans relative max-w-md mx-auto">
    <!-- Header -->
    <header class="px-5 pt-8 pb-4 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border border-gray-200 shadow-sm">
          <img src="https://ui-avatars.com/api/?name=Ibu+Siti&background=random" alt="Profile" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-xl font-bold text-[#062923]">Katalog Sembako</h1>
      </div>
      <button class="p-2 text-gray-800 hover:bg-gray-200 rounded-full transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </button>
    </header>

    <!-- Search Bar -->
    <div class="px-5 mt-1">
      <div class="relative flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 absolute left-4 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Cari beras, gula, atau lainnya..." 
          class="w-full pl-12 pr-4 py-3.5 bg-white rounded-full text-sm text-gray-800 placeholder-gray-400 border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#004D40]"
        />
      </div>
    </div>

    <!-- Banner Poin Tersedia -->
    <section class="px-5 mt-5">
      <div class="bg-[#004D40] rounded-2xl p-5 text-white flex justify-between items-center shadow-md relative overflow-hidden">
        <div>
          <p class="text-xs text-[#8ABFB7] font-medium">Poin Tersedia</p>
          <div class="flex items-center gap-2 mt-1">
            <!-- Star Icon -->
            <div class="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center text-xs">
              ★
            </div>
            <span class="text-3xl font-bold tracking-tight">{{ formatAngka(totalPoin) }}</span>
          </div>
        </div>
        <button @click="keRiwayat" class="bg-[#1A4BFF] hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-sm">
          Riwayat
        </button>
      </div>
    </section>

    <!-- Section Pilihan Terbaik -->
    <section class="px-5 mt-7">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold text-[#062923]">Pilihan Terbaik</h2>
        <button @click="lihatSemua" class="text-sm font-semibold text-[#1A4BFF] hover:underline">Lihat Semua</button>
      </div>

      <!-- Grid Produk (2 Kolom) -->
      <div class="grid grid-cols-2 gap-4">
        <div 
          v-for="item in filteredProduk" 
          :key="item.id" 
          class="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col justify-between"
        >
          <div>
            <!-- Gambar Produk + Badge Ukuran -->
            <div class="relative w-full aspect-square bg-[#F3F4F6] rounded-xl overflow-hidden mb-3">
              <span class="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-[11px] font-bold text-gray-800 px-2 py-0.5 rounded-md shadow-xs z-10">
                {{ item.ukuran }}
              </span>
              <img :src="item.image" :alt="item.nama" class="w-full h-full object-cover" />
            </div>

            <!-- Detail Produk -->
            <h3 class="text-sm font-semibold text-gray-800 leading-snug line-clamp-1">{{ item.nama }}</h3>
            <div class="flex items-center gap-1.5 mt-2 mb-3">
              <div class="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center text-[9px] text-gray-700">
                ★
              </div>
              <span class="text-lg font-bold text-gray-900">{{ item.poin }}</span>
            </div>
          </div>

          <!-- Tombol Lihat Detail -->
          <button @click="openDetail(item)" class="w-full bg-[#EEF2FF] hover:bg-indigo-100 text-[#2563EB] text-xs font-semibold py-2.5 rounded-xl transition text-center">
            Lihat Detail
          </button>
        </div>
      </div>
    </section>

    <!-- Section Kategori Populer (Scroll Horizontal) -->
    <section class="mt-8">
      <div class="px-5 mb-3">
        <h2 class="text-lg font-bold text-[#062923]">Kategori Populer</h2>
      </div>

      <div class="flex gap-3 overflow-x-auto px-5 pb-2 hide-scrollbar">
        <button 
          v-for="kat in kategoriList" 
          :key="kat"
          @click="selectedKategori = kat"
          class="px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition"
          :class="selectedKategori === kat ? 'bg-[#E5E7EB] text-gray-800 font-semibold' : 'bg-white text-gray-600 border border-gray-100'"
        >
          {{ kat }}
        </button>
      </div>
    </section>

    <!-- Bottom Navigation Component -->
    <BottomNavWarga />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import BottomNavWarga from '../../components/BottomNavWarga.vue'

const router = useRouter()

const searchQuery = ref('')
const selectedKategori = ref('Semua')
const totalPoin = ref(2450)

const kategoriList = ['Semua', 'Bumbu Dapur', 'Kebutuhan Pokok', 'Minyak & Olahan']

// Data Produk Sembako sesuai UI acuan
const daftarProduk = ref([
  {
    id: 1,
    nama: 'Beras',
    ukuran: '5kg',
    poin: 150,
    kategori: 'Kebutuhan Pokok',
    image: 'https://placehold.co/300x300/E8F0EE/062923?text=Beras+5kg'
  },
  {
    id: 2,
    nama: 'Gula',
    ukuran: '1kg',
    poin: 160,
    kategori: 'Bumbu Dapur',
    image: 'https://placehold.co/300x300/FDF8F0/062923?text=Gula+1kg'
  },
  {
    id: 3,
    nama: 'Minyak Goreng',
    ukuran: '1L',
    poin: 180,
    kategori: 'Minyak & Olahan',
    image: 'https://placehold.co/300x300/FFFBEB/062923?text=Minyak+1L'
  },
  {
    id: 4,
    nama: 'Garam',
    ukuran: '500g',
    poin: 50,
    kategori: 'Bumbu Dapur',
    image: 'https://placehold.co/300x300/F0EDF5/062923?text=Garam+500g'
  }
])

// Filtering berdasarkan Pencarian & Kategori
const filteredProduk = computed(() => {
  return daftarProduk.value.filter(item => {
    const matchSearch = item.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchKategori = selectedKategori.value === 'Semua' || item.kategori === selectedKategori.value
    return matchSearch && matchKategori
  })
})

const formatAngka = (num) => new Intl.NumberFormat('id-ID').format(num)

function keRiwayat() {
  router.push('/riwayat-warga')
}

function openDetail(item) {
  console.log('Detail produk:', item)
  // Implementasi modal detail atau navigasi detail produk
}

function lihatSemua() {
  selectedKategori.value = 'Semua'
  searchQuery.value = ''
}
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.line-clamp-1 {
  display: -webkit-box;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>