<template>
  <div class="min-h-screen bg-gray-50 pb-20">
    <!-- Header -->
    <header class="bg-white px-4 pt-6 pb-4 shadow-sm">
      <div class="max-w-md mx-auto">
        <p class="text-sm text-gray-500">Bank Sampah</p>
        <h1 class="text-xl font-semibold text-gray-800 mt-1">
          Selamat pagi, <br />
          <span class="text-2xl font-bold text-[#003A36]">
            Halo, {{ warga.nama || 'Warga' }}!
          </span>
        </h1>
      </div>
    </header>

    <!-- Kartu Saldo Poin -->
    <section class="max-w-md mx-auto px-4 mt-4">
      <div class="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
        <p class="text-sm text-gray-500">Saldo Poin Anda</p>
        <p class="text-3xl font-bold text-[#003A36] mt-1">
          {{ warga.poin || 0 }} Poin
        </p>
        <div class="flex gap-3 mt-4">
          <button
            @click="tukarPoin"
            class="flex-1 bg-[#003A36] text-white font-medium py-2.5 rounded-xl hover:bg-[#00584F] transition"
          >
            Tukar Poin
          </button>
          <button
            @click="lihatRiwayat"
            class="flex-1 bg-gray-100 text-gray-700 font-medium py-2.5 rounded-xl hover:bg-gray-200 transition"
          >
            Riwayat
          </button>
        </div>
      </div>
    </section>

    <!-- Katalog Sembako Populer -->
    <section class="max-w-md mx-auto px-4 mt-6">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-800">Katalog Sembako Populer</h2>
        <button @click="lihatSemuaKatalog" class="text-sm text-[#003A36] font-medium">
          Lihat Semua
        </button>
      </div>
      <div class="grid grid-cols-3 gap-3 mt-3">
        <div
          v-for="item in sembako"
          :key="item.id"
          class="bg-white rounded-xl shadow-sm p-3 border border-gray-100 text-center"
        >
          <div class="w-full h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
            {{ item.icon }}
          </div>
          <p class="text-sm font-medium text-gray-800 mt-2 line-clamp-1">{{ item.nama }}</p>
          <p class="text-xs font-bold text-[#003A36] mt-1">{{ item.poin }} Poin</p>
        </div>
      </div>
    </section>

    <!-- Informasi & Pengumuman -->
    <section class="max-w-md mx-auto px-4 mt-6">
      <h2 class="text-lg font-semibold text-gray-800">Informasi & Pengumuman</h2>
      <div v-if="loadingPengumuman" class="mt-3 text-center text-gray-500">
        Memuat pengumuman...
      </div>
      <div v-else-if="pengumuman.length === 0" class="mt-3 text-center text-gray-400">
        Tidak ada pengumuman.
      </div>
      <div v-else class="space-y-3 mt-3">
        <div
          v-for="(item, index) in pengumuman"
          :key="index"
          class="bg-white rounded-xl shadow-sm p-4 border border-gray-100 flex items-start gap-3"
        >
          <div class="text-2xl">{{ getIcon(item.judul) }}</div>
          <div class="flex-1">
            <p class="text-xs font-bold text-[#003A36] uppercase tracking-wide">
              {{ item.jenis || 'INFO' }}
            </p>
            <h3 class="text-sm font-semibold text-gray-800">{{ item.judul }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ item.konten || item.deskripsi }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigasi Bawah -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <div class="max-w-md mx-auto flex justify-around py-2">
        <button
          class="flex flex-col items-center text-[#003A36] font-medium text-xs"
        >
          <span class="text-2xl">🏠</span>
          Beranda
        </button>
        <button
          @click="keKatalog"
          class="flex flex-col items-center text-gray-400 hover:text-gray-600 text-xs"
        >
          <span class="text-2xl">📦</span>
          Katalog
        </button>
        <button
          @click="keInformasi"
          class="flex flex-col items-center text-gray-400 hover:text-gray-600 text-xs"
        >
          <span class="text-2xl">📢</span>
          Informasi
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getPengumuman } from '../../services/api'

const router = useRouter()

// Data warga dari localStorage
const warga = ref({
  nama: '',
  username: '',
  poin: 0,
  total_setoran_kg: 0,
  total_nilai_rupiah: 0
})

// Data sembako (statis)
const sembako = ref([
  { id: 1, nama: 'Beras Premium 5kg', poin: 650, icon: '🍚' },
  { id: 2, nama: 'Minyak Goreng 2L', poin: 320, icon: '🛢️' },
  { id: 3, nama: 'Gula Pasir 1kg', poin: 150, icon: '🍬' },
])

const pengumuman = ref([])
const loadingPengumuman = ref(false)

async function fetchPengumuman() {
  loadingPengumuman.value = true
  try {
    const response = await getPengumuman()
    if (response && response.data) {
      pengumuman.value = response.data
    } else if (Array.isArray(response)) {
      pengumuman.value = response
    } else {
      pengumuman.value = []
    }
  } catch (error) {
    console.error('Gagal memuat pengumuman:', error)
    pengumuman.value = []
  } finally {
    loadingPengumuman.value = false
  }
}

function getIcon(judul) {
  const kata = judul.toLowerCase()
  if (kata.includes('jadwal') || kata.includes('penjemputan')) return '📅'
  if (kata.includes('promo') || kata.includes('diskon')) return '🎉'
  if (kata.includes('edukasi') || kata.includes('tips')) return '♻️'
  return '📢'
}

// Navigasi
function tukarPoin() {
  router.push('/tukar-poin')
}
function lihatRiwayat() {
  router.push('/riwayat-warga')
}
function lihatSemuaKatalog() {
  router.push('/katalog')
}
function keKatalog() {
  router.push('/katalog')
}
function keInformasi() {
  router.push('/informasi')
}

// Cek autentikasi saat mount
onMounted(() => {
  const stored = localStorage.getItem('warga')
  if (stored) {
    try {
      warga.value = JSON.parse(stored)
    } catch (e) {
      console.warn('Gagal parse data warga')
      router.push('/login-warga')
    }
  } else {
    // Jika tidak ada data warga, arahkan ke login
    router.push('/login-warga')
  }

  fetchPengumuman()
})
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>