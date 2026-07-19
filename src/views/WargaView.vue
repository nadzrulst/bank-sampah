<template>
  <div
    class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(172,239,230,0.35),_transparent_40%),linear-gradient(135deg,_#f8fbff_0%,_#f5f7ff_100%)] flex items-center justify-center px-4 py-8"
  >
    <div
      class="w-full max-w-md rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_50px_rgba(0,58,54,0.12)] backdrop-blur"
    >
      <!-- Logo -->
      <div class="flex flex-col items-center text-center">
        <div
          class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#003A36] text-3xl text-white"
        >
          <span class="material-symbols-outlined">
            account_balance_wallet
          </span>
        </div>

        <h1 class="text-2xl font-semibold text-[#003A36]">
          Cek Data Warga
        </h1>

        <p class="mt-2 text-sm text-slate-600">
          Masukkan Username dan Nomor HP untuk melihat informasi poin dan
          riwayat setoran.
        </p>
      </div>

      <!-- Form -->
      <div class="mt-8">

        <!-- Username -->
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">
            Username
          </label>

          <div class="relative">

            <UserIcon
              class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#003A36]"
            />

            <input
              v-model="username"
              type="text"
              placeholder="Masukkan Username"
              class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pl-11 outline-none transition focus:border-[#003A36]"
            />

          </div>
        </div>

        <!-- Nomor HP -->
        <div class="mt-4">
          <label class="mb-2 block text-sm font-medium text-slate-700">
            Nomor HP
          </label>

          <div class="relative">

            <PhoneIcon
              class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#003A36]"
            />

            <input
              v-model="nomorHp"
              type="text"
              placeholder="08123456789"
              class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pl-11 outline-none transition focus:border-[#003A36]"
            />

          </div>
        </div>

        <!-- Tombol -->
        <button
          @click="loadWargaData"
          :disabled="loading"
          class="mt-6 flex w-full items-center justify-center rounded-xl bg-[#003A36] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
        >
          {{ loading ? "Memuat..." : "Lihat Informasi" }}
        </button>

        <!-- Login -->
        <div class="mt-5 text-center">

          <router-link
            to="/login"
            class="text-sm font-medium text-[#003A36] underline underline-offset-2 transition hover:text-[#00584F]"
          >
            Login
          </router-link>

        </div>

        <!-- Data -->
        <div
          v-if="warga"
          class="mt-6 rounded-2xl border border-[#003A36]/20 bg-[#003A36]/5 p-4"
        >
          <h3 class="mb-3 text-lg font-semibold text-[#003A36]">
            Data Warga
          </h3>

          <div class="space-y-3 text-sm">

            <div class="flex justify-between">
              <span class="text-slate-500">Nama</span>
              <span class="font-medium">{{ warga.nama }}</span>
            </div>

            <div class="flex justify-between">
              <span class="text-slate-500">Total Poin</span>
              <span class="font-medium">{{ warga.total_poin }}</span>
            </div>

            <div class="flex justify-between">
              <span class="text-slate-500">Total Tabungan</span>
              <span class="font-medium">
                Rp {{ warga.total_tabungan }}
              </span>
            </div>

            <div class="flex justify-between">
              <span class="text-slate-500">Status</span>

              <span
                class="rounded-full bg-[#003A36] px-3 py-1 text-xs font-medium text-white"
              >
                Aktif
              </span>
            </div>

          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="mt-6 border-t border-slate-200 pt-4 text-center text-sm text-slate-500">
        © 2026 KKN Universitas Buana Perjuangan Karawang
      </div>

    </div>
    <BottomNav />
  </div>
</template>

<script setup>
import BottomNav from '../components/BottomNav.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserIcon, PhoneIcon } from "@heroicons/vue/24/solid";
const router = useRouter()
const phone = ref('')
const password = ref('')

function handleLogin() {
  if (!phone.value || !password.value) {
    alert('Isi nomor handphone dan password terlebih dahulu.')
    return
  }

  router.push('/dashboard')
}
</script>
