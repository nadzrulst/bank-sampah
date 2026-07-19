import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import WargaView from "../views/WargaView.vue";
import TransaksiView from "../views/TransaksiView.vue";
import KeuanganView from "../views/KeuanganView.vue";
import RiwayatView from "../views/RiwayatView.vue";
import LaporanView from "../views/LaporanView.vue";
import JualPengepulView from "../views/JualPengepulView.vue";
import TukarPoinView from "../views/TukarPoinView.vue";

const routes = [
  { path: "/", redirect: "/warga" },
  { path: "/login", name: "login", component: LoginView },
  { path: "/dashboard", name: "dashboard", component: HomeView },
  { path: "/warga", name: "warga", component: WargaView },
  { path: "/transaksi", name: "transaksi", component: TransaksiView },
  { path: "/keuangan", name: "keuangan", component: KeuanganView },
  { path: "/jual", name: "jual", component: JualPengepulView },
  { path: "/tukar", name: "tukar", component: TukarPoinView },
  { path: "/riwayat", name: "riwayat", component: RiwayatView },
  { path: "/laporan", name: "laporan", component: LaporanView },
  {
    path: "/uji-api",
    name: "uji-api",
    component: () => import("../views/TestApiView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
