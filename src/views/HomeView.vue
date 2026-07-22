<template>
  <div class="min-h-screen bg-[#f7f8f7] max-w-md mx-auto pb-24 text-slate-900">
    <!-- Header -->
    <header class="bg-white px-6 pt-8 pb-6 border-b border-gray-100">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8">
              <path d="M8 4c2.2 1.4 3.5 3.4 4 6.2" />
              <path d="M12 3c1.2 2.2 1.8 4.3 1.8 6.9" />
              <path d="M7 14c2.1-.2 3.8-.5 5.2-1.4" />
              <path d="M9 18c1.4-.4 2.7-.4 4 0" />
              <path d="M7.5 10c2-.5 3.5-1 5.3-2.4" />
            </svg>
          </div>

          <div>
            <h1 class="text-2xl font-bold text-green-900 leading-tight">Bank Sampah</h1>
            <p class="text-lg font-semibold text-green-700">Bojong Karya 2</p>
          </div>
        </div>

        <button class="w-11 h-11 rounded-full flex items-center justify-center text-gray-700">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <path d="M10 5a2 2 0 0 1 4 0 4 4 0 0 0 3.9 4h.1v1.6c0 .8.2 1.5.6 2.2l1.2 1.7a1 1 0 0 1-.8 1.5H7.9a1 1 0 0 1-.8-1.5L8.3 9.4c.3-.7.5-1.4.5-2.2V9A4 4 0 0 0 10 5Z" />
            <path d="M10 17a2 2 0 0 0 4 0" />
            <circle cx="17.5" cy="6.5" r="2" fill="#147052" stroke="none" />
          </svg>
        </button>
      </div>
    </header>

    <main class="px-6 py-6 pb-28">
      <!-- Greeting -->
      <section class="mb-6">
        <div class="flex items-center gap-2">
          <h2 class="text-2xl font-bold text-slate-900">
            Selamat pagi, Pengelola
          </h2>
          <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
            <path d="M8 4c2.2 1.4 3.5 3.4 4 6.2" />
            <path d="M12 3c1.2 2.2 1.8 4.3 1.8 6.9" />
            <path d="M7 14c2.1-.2 3.8-.5 5.2-1.4" />
            <path d="M9 18c1.4-.4 2.7-.4 4 0" />
            <path d="M7.5 10c2-.5 3.5-1 5.3-2.4" />
          </svg>
        </div>
        <p class="text-base text-gray-600 mt-2">
          Kelola sampah, jaga lingkungan, raih manfaat.
        </p>
      </section>

      <!-- Saldo Poin Hero -->
      <section class="relative overflow-hidden bg-gradient-to-br from-green-800 to-green-950 rounded-[28px] p-6 mb-5 text-white shadow-sm">
        <div class="relative z-10">
          <p class="text-sm uppercase tracking-wide text-white/80 mb-4">Saldo Poin</p>

          <div class="flex items-end gap-2">
            <p class="text-6xl font-bold leading-none">{{ dashboardData.total_poin || 0 }}</p>
            <span class="text-lg font-semibold mb-2">Poin</span>
          </div>

          <div class="inline-flex items-center gap-2 bg-white/10 rounded-2xl px-4 py-3 mt-6 backdrop-blur">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <path d="M5 12c0-3 2-5.5 5-7 1.5 2.5 1.5 4.5 1.5 7" />
              <path d="M10 5c-1 3-2.2 4.8-3.8 7" />
              <path d="M16 6c.5 2.5 0 5-2 7" />
              <path d="M7 17c2.5 0 4.5-1 6-3" />
            </svg>
            <p class="font-semibold">Setara Rp 51.500</p>
          </div>
        </div>

        <div class="absolute right-0 bottom-0 leading-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="h-[150px] w-[150px] opacity-10">
            <path d="M5 15c2-5 6-8 10-8 2 0 3 1 3 3 0 3-2 5-6 8" />
            <path d="M6 19c2-2 4-4 7-5" />
            <path d="M10 4c1 2 2 3 3 4" />
            <path d="M8 11c1 1 2 2 3 3" />
          </svg>
        </div>
      </section>

      <!-- Nilai Saldo -->
      <section class="bg-white rounded-[24px] p-6 mb-5 shadow-sm border border-gray-100">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-sm uppercase tracking-wide text-gray-500 mb-3">Nilai Saldo</p>
            <p class="text-3xl font-bold text-slate-900">Rp {{ formatCurrency(dashboardData.saldo_kas || 0) }}</p>
          </div>

          <div class="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7">
              <path d="M4 8h13a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
              <path d="M4 8V6a2 2 0 0 1 2-2h2" />
              <path d="M17 8V6" />
              <circle cx="9" cy="16" r="1" fill="#147052" stroke="none" />
              <circle cx="15" cy="16" r="1" fill="#147052" stroke="none" />
            </svg>
          </div>
        </div>

        <button class="mt-6 flex items-center gap-2 ml-auto text-sm font-semibold text-green-800">
          Lihat detail
          <span class="text-lg">›</span>
        </button>
      </section>

      <!-- Statistik Kecil -->
      <section class="grid grid-cols-2 gap-4 mb-5">
        <div class="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100">
          <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <path d="M5 18V10" />
              <path d="M12 18V6" />
              <path d="M19 18v-8" />
            </svg>
          </div>

          <p class="text-sm uppercase tracking-wide text-gray-600 leading-relaxed">
            Transaksi<br />Terakhir
          </p>

          <div class="flex items-end justify-between mt-6">
            <div>
              <p class="text-3xl font-bold">{{ dashboardData.total_setoran_kg || 0 }}</p>
              <p class="text-sm text-gray-500 mt-1">
                Setoran & penjualan tercatat
              </p>
            </div>
            <span class="text-3xl text-gray-500">›</span>
          </div>
        </div>

        <div class="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100">
          <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-5">
            <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M4 20a4 4 0 0 1 8 0" />
              <path d="M12 20a4 4 0 0 1 8 0" />
            </svg>
          </div>

          <p class="text-sm uppercase tracking-wide text-gray-600 leading-relaxed">
            Anggota<br />Aktif
          </p>

          <div class="flex items-end justify-between mt-6">
            <div>
              <p class="text-3xl font-bold">{{ dashboardData.total_warga || 0 }}</p>
              <p class="text-sm text-gray-500 mt-1">Warga terdaftar</p>
            </div>
            <span class="text-3xl text-gray-500">›</span>
          </div>
        </div>
      </section>

      <!-- Motivasi -->
      <section class="bg-green-50 rounded-[24px] p-5 mb-6 overflow-hidden relative min-h-[135px]">
        <div class="relative z-10 max-w-[58%]">
          <p class="text-lg font-bold text-green-950 leading-snug">
            Yuk, pilah sampah untuk lingkungan yang lebih baik!
          </p>
          <p class="text-sm text-gray-600 mt-3">
            Sampahmu bernilai, bumi pun tersenyum.
          </p>
        </div>

        <div class="absolute right-4 bottom-2 leading-none">
          <svg viewBox="0 0 24 24" fill="none" stroke="#4a9b5a" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="h-24 w-24 opacity-80">
            <path d="M7 7a4 4 0 0 1 7 1" />
            <path d="M11 6H7v4" />
            <path d="M17 17a4 4 0 0 1-7-1" />
            <path d="M13 18h4v-4" />
          </svg>
        </div>
      </section>

      <!-- Aksi Cepat -->
      <section>
        <h3 class="text-base font-bold text-gray-500 uppercase tracking-wide mb-4">
          Aksi Cepat
        </h3>

        <div class="grid grid-cols-3 gap-4">
          <button class="bg-white rounded-[22px] p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M7 7a4 4 0 0 1 7 1" />
                <path d="M11 6H7v4" />
                <path d="M17 17a4 4 0 0 1-7-1" />
                <path d="M13 18h4v-4" />
              </svg>
            </div>
            <span class="text-sm font-semibold text-center">Setor Sampah</span>
          </button>

          <button class="bg-white rounded-[22px] p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M5 6h14l-1 7H7L5 6Z" />
                <circle cx="10" cy="18" r="1.2" fill="#147052" stroke="none" />
                <circle cx="17" cy="18" r="1.2" fill="#147052" stroke="none" />
              </svg>
            </div>
            <span class="text-sm font-semibold text-center">Riwayat</span>
          </button>

          <button @click="goToCatalogManager" class="bg-white rounded-[22px] p-5 shadow-sm border border-gray-100 flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#147052" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M4 7h16" />
                <path d="M7 7v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7" />
                <path d="M9 11h6" />
                <path d="M9 15h6" />
              </svg>
            </div>
            <span class="text-sm font-semibold text-center">Katalog</span>
          </button>
        </div>
      </section>
      <BottomNav />
    </main>


  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import BottomNav from '../components/BottomNav.vue'
import { getDashboardData } from '../services/api'

export default {
  name: 'BankSampahDashboard',
  components: {
    BottomNav
  },
  setup() {
    const router = useRouter()
    const dashboardData = ref({})

    async function loadDashboard() {
      try {
        const response = await getDashboardData()
        dashboardData.value = response?.data || {}
      } catch (error) {
        console.error('Gagal memuat dashboard', error)
      }
    }

    function formatCurrency(value) {
      return new Intl.NumberFormat('id-ID').format(value)
    }

    function goToCatalogManager() {
      router.push('/katalog-pengelola')
    }

    onMounted(() => {
      loadDashboard()
    })

    return {
      dashboardData,
      formatCurrency,
      goToCatalogManager
    }
  }
}
</script>