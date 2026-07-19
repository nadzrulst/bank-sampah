<template>
  <div class="min-h-screen bg-background px-4 text-on-surface md:px-0 pb-24">
    <div class="mx-auto max-w-md">
      <header class="flex items-center justify-between py-4">
        <div class="flex items-center gap-3">
          <div
            class="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center soft-float"
          >
            BK
          </div>
          <div>
            <h1 class="font-headline-md text-headline-md text-primary">
              Laporan
            </h1>
          </div>
        </div>
        <button class="text-on-surface-variant">
          <span class="material-symbols-outlined">settings</span>
        </button>
      </header>

      <section class="px-2">
        <div class="rounded-2xl bg-white p-4 soft-float">
          <p class="text-sm text-on-surface-variant">Saldo Kas</p>
          <p class="mt-3 text-2xl font-bold text-primary">Rp515.000</p>
        </div>

        <div class="mt-4 grid grid-cols-2 gap-3">
          <div class="rounded-2xl bg-white p-4 soft-float">
            <p class="text-sm text-on-surface-variant">Sampah Terkumpul</p>
            <p class="mt-2 font-semibold">73 kg</p>
          </div>
          <div class="rounded-2xl bg-white p-4 soft-float">
            <p class="text-sm text-on-surface-variant">Surplus Kegiatan</p>
            <p class="mt-2 font-semibold">Rp15.000</p>
          </div>
        </div>

        <div class="mt-4 rounded-2xl bg-white p-4 soft-float">
          <div class="flex items-center justify-between">
            <h3 class="font-medium">Arus Kas</h3>
            <button class="text-sm text-on-surface-variant">Bulan Ini</button>
          </div>
          <div class="mt-3 space-y-3">
            <div
              class="flex items-center justify-between bg-surface-container rounded-xl p-3"
            >
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary"
                  >south_east</span
                >
                <div>
                  <p class="text-sm">Dana masuk</p>
                  <p class="text-sm text-on-surface-variant">Dari Pusat</p>
                </div>
              </div>
              <p class="text-emerald-600 font-semibold">+ Rp200.000</p>
            </div>
            <div
              class="flex items-center justify-between bg-surface-container rounded-xl p-3"
            >
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary"
                  >account_balance_wallet</span
                >
                <div>
                  <p class="text-sm">Pembayaran warga</p>
                  <p class="text-sm text-on-surface-variant">Setoran tunai</p>
                </div>
              </div>
              <p class="text-emerald-600 font-semibold">+ Rp80.000</p>
            </div>
            <div
              class="flex items-center justify-between bg-surface-container rounded-xl p-3"
            >
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary"
                  >local_mall</span
                >
                <div>
                  <p class="text-sm">Penjualan</p>
                  <p class="text-sm text-on-surface-variant">Pengepul</p>
                </div>
              </div>
              <p class="text-emerald-600 font-semibold">+ Rp100.000</p>
            </div>
            <div
              class="flex items-center justify-between bg-surface-container rounded-xl p-3"
            >
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary"
                  >receipt_long</span
                >
                <div>
                  <p class="text-sm">Biaya</p>
                  <p class="text-sm text-on-surface-variant">Operasional</p>
                </div>
              </div>
              <p class="text-red-500 font-semibold">- Rp5.000</p>
            </div>
          </div>
        </div>
      </section>

      <nav
        class="fixed bottom-0 left-0 w-full bg-surface z-40 py-3 border-t border-slate-100"
      >
        <div class="max-w-md mx-auto flex items-center justify-between px-6">
          <router-link
            to="/transaksi"
            class="flex flex-col items-center gap-1 text-sm text-on-surface-variant"
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
            class="flex flex-col items-center gap-1 text-sm text-primary"
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
// static demo view for laporan
</script>
