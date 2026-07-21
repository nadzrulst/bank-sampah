<template>
  <div class="min-h-screen bg-[#F8F9FB] pb-24 font-sans relative">
    
    <!-- Top Header / App Bar -->
    <header class="px-5 pt-8 pb-4 flex justify-between items-center">
      <div class="flex items-center gap-3">
        <!-- Placeholder Avatar (Ganti dengan foto profil asli jika ada) -->
        <div class="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border border-gray-200 shadow-sm">
          <img src="https://ui-avatars.com/api/?name=Ibu+Siti&background=random" alt="Profile" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-[17px] font-bold text-[#062923]">Bank Sampah</h1>
      </div>
      <button class="p-2 text-gray-800 hover:bg-gray-200 rounded-full transition">
        <!-- Bell Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      </button>
    </header>

    <!-- Greeting Section -->
    <div class="px-5 mt-1">
      <p class="text-sm text-gray-700 font-medium tracking-wide">Selamat pagi,</p>
      <h2 class="text-2xl font-bold text-[#062923] mt-1">
        Halo, {{ warga.nama || 'Ibu Siti' }}!
      </h2>
    </div>

    <!-- Kartu Saldo Poin -->
    <section class="px-5 mt-6">
      <div class="bg-[#0D5C50] rounded-3xl p-6 shadow-md relative overflow-hidden">
        <p class="text-[#8ABFB7] text-sm font-medium">Saldo Poin Anda</p>
        <div class="flex items-baseline gap-2 mt-1">
          <span class="text-[40px] font-bold text-white tracking-tight">
            {{ formatAngka(warga.poin || 1250) }}
          </span>
          <span class="text-lg font-medium text-[#8ABFB7]">Poin</span>
        </div>
        
        <div class="flex gap-3 mt-6">
          <router-link 
            to="/tukar-poin-sembako" 
            class="flex-1 bg-[#1A4BFF] hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 transition shadow-sm text-sm"
          >
            <!-- Cart Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            Tukar Poin
          </router-link>

          <router-link 
          to="/riwayat-warga" 
          class="flex-1 bg-[#166B5E] border border-[#248173] hover:bg-[#125A4F] text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 transition shadow-sm text-sm">
            <!-- History Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Riwayat
          </router-link>
        </div>
      </div>
    </section>

    <!-- Katalog Sembako Populer (Horizontal Scroll) -->
    <section class="mt-8">
      <div class="px-5 flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold text-[#062923]">Katalog Sembako Populer</h3>
        <button @click="lihatSemuaKatalog" class="text-sm font-semibold text-gray-700 hover:text-[#062923]">
          Lihat Semua
        </button>
      </div>
      
      <!-- List Scroll Horizontal -->
      <div class="flex gap-4 overflow-x-auto px-5 pb-4 snap-x hide-scrollbar">
        <div 
          v-for="item in sembako" 
          :key="item.id" 
          class="min-w-[150px] w-[150px] bg-white rounded-[20px] p-3 shadow-sm snap-start shrink-0 cursor-pointer hover:shadow-md transition"
        >
          <!-- Ganti src dengan gambar asli jika ada -->
          <div class="w-full aspect-square bg-[#F3F4F6] rounded-xl mb-3 overflow-hidden flex items-center justify-center">
            <img v-if="item.image" :src="item.image" :alt="item.nama" class="w-full h-full object-cover" />
            <span v-else class="text-4xl">{{ item.icon }}</span>
          </div>
          <p class="text-[13px] font-semibold text-gray-900 leading-tight line-clamp-2 h-[34px]">{{ item.nama }}</p>
          <p class="text-[17px] font-bold text-[#1A4BFF] mt-1">{{ formatAngka(item.poin) }} Poin</p>
        </div>
      </div>
    </section>

    <!-- Informasi & Pengumuman -->
    <section class="px-5 mt-4">
      <h3 class="text-lg font-bold text-[#062923] mb-4">Informasi & Pengumuman</h3>
      
      <div v-if="loadingPengumuman" class="text-center text-gray-500 my-6">
        Memuat pengumuman...
      </div>
      <div v-else-if="pengumuman.length === 0" class="text-center text-gray-400 my-6">
        Tidak ada pengumuman.
      </div>
      
      <div v-else class="space-y-4">
        <div 
          v-for="(item, index) in pengumuman" 
          :key="index" 
          class="bg-white rounded-3xl p-4 shadow-sm flex gap-4 items-start"
        >
          <!-- Ikon Kategori Dinamis -->
          <div 
            class="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" 
            :class="getKategoriStyles(item.jenis).bg"
          >
            <component :is="getKategoriStyles(item.jenis).icon" :class="getKategoriStyles(item.jenis).color" class="w-7 h-7" />
          </div>
          
          <div class="flex-1 pt-1">
            <p class="text-[11px] font-bold uppercase tracking-wider mb-1" :class="getKategoriStyles(item.jenis).textColor">
              {{ item.jenis || 'INFO' }}
            </p>
            <h4 class="text-[14px] font-bold text-gray-900 leading-snug">{{ item.judul }}</h4>
            <p class="text-[13px] text-gray-600 mt-1 leading-snug">{{ item.konten || item.deskripsi }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Action Button (FAB) '+' -->
    <button class="fixed bottom-24 right-5 w-14 h-14 bg-[#01352c] text-white rounded-[20px] shadow-lg flex items-center justify-center hover:bg-[#00241e] transition-transform active:scale-95 z-40">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-7 h-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>

    <!-- Navigation Bawah -->
    <BottomNavWarga />
  </div>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'
import { useRouter } from 'vue-router'
import { getPengumuman } from '../../services/api'
import BottomNavWarga from '../../components/BottomNavWarga.vue'

const router = useRouter()

// Komponen Render SVG Icon untuk Pengumuman
const IconCalendar = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z' })
])
const IconPromo = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.77c1.651.567 3.502-.146 4.306-1.758a4.49 4.49 0 00-5.32-5.318z' })
])
const IconEdu = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '2', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' })
])

// Data warga
const warga = ref({
  nama: 'Ibu Siti', // Default sesuai desain
  username: '',
  poin: 1250,       // Default sesuai desain
  total_setoran_kg: 0,
  total_nilai_rupiah: 0
})

// Data Sembako disesuaikan dengan gambar
const sembako = ref([
  { id: 1, nama: 'Beras Premium 5kg', poin: 650, image: 'https://placehold.co/300x300/E8F0EE/062923?text=Beras' },
  { id: 2, nama: 'Minyak Goreng 2L', poin: 320, image: 'https://placehold.co/300x300/FDF8F0/062923?text=Minyak' },
  { id: 3, nama: 'Gula Pasir 1kg', poin: 150, image: 'https://placehold.co/300x300/F0EDF5/062923?text=Gula' },
])

// Data Pengumuman Mock (Jika API kosong)
const mockPengumuman = [
  { jenis: 'JADWAL', judul: 'Jadwal Penjemputan Rutin Minggu Ini', deskripsi: 'Berlaku mulai 12 - 18 Agustus 2024' },
  { jenis: 'PROMO', judul: 'Promo Tukar Poin Merdeka', deskripsi: 'Diskon 17% tukar poin untuk semua sembako' },
  { jenis: 'EDUKASI', judul: 'Cara Memilah Sampah Plastik Baru', deskripsi: 'Tips agar sampah plastik Anda dihargai lebih tinggi' },
]

const pengumuman = ref([])
const loadingPengumuman = ref(false)

// Formatting Ribuan
const formatAngka = (angka) => {
  return new Intl.NumberFormat('id-ID').format(angka)
}

// Styling Dinamis untuk Kategori Pengumuman
function getKategoriStyles(jenis) {
  const type = jenis ? jenis.toUpperCase() : ''
  if (type === 'JADWAL') {
    return { bg: 'bg-[#9FE1C9]', color: 'text-[#043329]', textColor: 'text-[#1A4BFF]', icon: IconCalendar }
  } else if (type === 'PROMO') {
    return { bg: 'bg-[#E3E8FA]', color: 'text-[#1A4BFF]', textColor: 'text-[#1A4BFF]', icon: IconPromo }
  } else if (type === 'EDUKASI') {
    return { bg: 'bg-[#F2E5D2]', color: 'text-[#4A3B22]', textColor: 'text-[#4A3B22]', icon: IconEdu }
  }
  return { bg: 'bg-gray-200', color: 'text-gray-600', textColor: 'text-gray-700', icon: IconCalendar } // Default
}

async function fetchPengumuman() {
  loadingPengumuman.value = true
  try {
    const response = await getPengumuman()
    if (response && response.data && response.data.length > 0) {
      pengumuman.value = response.data
    } else if (Array.isArray(response) && response.length > 0) {
      pengumuman.value = response
    } else {
      // Fallback ke mock data agar sesuai desain saat testing
      pengumuman.value = mockPengumuman 
    }
  } catch (error) {
    console.error('Gagal memuat pengumuman:', error)
    pengumuman.value = mockPengumuman // Tampilkan mock jika error
  } finally {
    loadingPengumuman.value = false
  }
}

// Navigasi
function tukarPoin() { router.push('/tukar-poin') }
function lihatRiwayat() { router.push('/riwayat-warga') }
function lihatSemuaKatalog() { router.push('/katalog') }

onMounted(() => {
  const stored = localStorage.getItem('warga')
  if (stored) {
    try {
      warga.value = JSON.parse(stored)
    } catch (e) {
      console.warn('Gagal parse data warga')
    }
  }
  fetchPengumuman()
})
</script>

<style scoped>
/* Membatasi teks agar terpotong dengan titik-titik (ellipsis) */
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Menyembunyikan scrollbar untuk daftar produk horizontal */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>