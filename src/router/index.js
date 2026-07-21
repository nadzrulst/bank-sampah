import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

import TransaksiView from "../views/TransaksiView.vue";
import KeuanganView from "../views/KeuanganView.vue";
import RiwayatView from "../views/RiwayatView.vue";
import LaporanView from "../views/LaporanView.vue";
import JualPengepulView from "../views/JualPengepulView.vue";
import TukarPoinView from "../views/TukarPoinView.vue";
import LupaPasswordView from "../views/LupaPasswordView.vue";
import InformasiView from "../views/InformasiView.vue";

import LoginWarga from "../views/LoginWarga.vue";
import DashboardWarga from "../views/warga/DashboardWarga.vue";
import Katalog from "../views/warga/KatalogView.vue";
import TukarPoinSembako from "../views/warga/TukarPoinSembakoView.vue";
import SuksesTukarPoinView from "../views/warga/SuksesTukarPoinView.vue";
import RiwayatWarga from "../views/warga/RiwayatWargaView.vue";

const routes = [
    { path: "/", redirect: "/login-warga" },
    { path: "/login", name: "login", component: LoginView },
    { path: "/dashboard", name: "dashboard", component: HomeView },

    { path: "/transaksi", name: "transaksi", component: TransaksiView },
    { path: "/keuangan", name: "keuangan", component: KeuanganView },
    { path: "/jual", name: "jual", component: JualPengepulView },
    { path: "/tukar", name: "tukar", component: TukarPoinView },
    { path: "/riwayat", name: "riwayat", component: RiwayatView },
    { path: "/laporan", name: "laporan", component: LaporanView },
    { path: "/password", name: "LupaPassword", component: LupaPasswordView },
    { path: "/informasi", name: "Informasi", component: InformasiView },

    // Portal Warga
    { path: "/login-warga", name: "login-warga", component: LoginWarga },
    { path: "/warga", name: "warga", component: DashboardWarga },
    { path: "/katalog", name: "katalog", component: Katalog },
    { path: "/tukar-poin-sembako", name: "Tukar-Poin-Sembako", component: TukarPoinSembako },
    { path: "/riwayat-warga", name: "Riwayat-poin", component: RiwayatWarga },

    {
        path: "/uji-api",
        name: "uji-api",
        component: () =>
            import ("../views/TestApiView.vue"),
    },
    {
        path: "/tukar-poin-sembako",
        name: "tukar-poin-sembako",
        component: () =>
            import ("../views/warga/TukarPoinSembakoView.vue")
    },
    {
        path: "/sukses-tukar-poin",
        name: "sukses-tukar-poin",
        component: SuksesTukarPoinView
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;