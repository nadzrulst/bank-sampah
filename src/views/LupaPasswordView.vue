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
          class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#003A36] text-white"
        >
          <span class="material-symbols-outlined text-3xl">
            lock_reset
          </span>
        </div>

        <h1 class="text-2xl font-semibold text-[#003A36]">
          Lupa Password
        </h1>

        <p class="mt-2 text-sm text-slate-600">
          Masukkan Username dan Nomor HP yang terdaftar untuk membuat password baru.
        </p>
      </div>

      <form class="mt-8 space-y-5" @submit.prevent="resetPassword">

        <!-- Username -->
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">
            Username
          </label>

          <input
            v-model="username"
            type="text"
            placeholder="Masukkan Username"
            class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#003A36]"
          />
        </div>

        <!-- Nomor HP -->
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">
            Nomor Handphone
          </label>

          <input
            v-model="phone"
            type="text"
            placeholder="08123456789"
            class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#003A36]"
          />
        </div>

        <!-- Password Baru -->
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">
            Password Baru
          </label>

          <div class="relative">

            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password Baru"
              class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 outline-none transition focus:border-[#003A36]"
            />

            <button
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              @click="showPassword = !showPassword"
            >
              <span class="material-symbols-outlined">
                {{ showPassword ? "visibility_off" : "visibility" }}
              </span>
            </button>

          </div>
        </div>

        <!-- Konfirmasi Password -->
        <div>
          <label class="mb-2 block text-sm font-medium text-slate-700">
            Konfirmasi Password
          </label>

          <input
            v-model="confirmPassword"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Ulangi Password Baru"
            class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#003A36]"
          />
        </div>

        <!-- Tombol -->
        <button
          :disabled="loading"
          class="flex w-full items-center justify-center rounded-xl bg-[#003A36] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          type="submit"
        >
          {{ loading ? "Menyimpan..." : "Simpan Password Baru" }}
        </button>

      </form>

      <!-- Kembali -->
      <div class="mt-6 text-center">

        <router-link
          to="/login"
          class="text-sm font-medium text-[#003A36] underline underline-offset-4 hover:text-[#00584F]"
        >
          ← Kembali ke Login
        </router-link>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const phone = ref("");
const password = ref("");
const confirmPassword = ref("");

const loading = ref(false);
const showPassword = ref(false);

async function resetPassword() {

  if (
    !username.value ||
    !phone.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    alert("Semua data harus diisi.");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert("Konfirmasi password tidak sama.");
    return;
  }

  loading.value = true;

  try {

    // TODO:
    // Panggil API reset password di sini

    await new Promise(resolve => setTimeout(resolve,1000));

    alert("Password berhasil diubah.");

    router.push("/login");

  } catch (error) {

    alert("Gagal mengubah password.");

  } finally {

    loading.value = false;

  }

}
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 1,
    "wght" 500,
    "GRAD" 0,
    "opsz" 24;
}
</style>