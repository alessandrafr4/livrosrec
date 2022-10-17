import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosView from "../views/LivrosView.vue";
import AutorView from "../views/AutorView.vue";
import EditoraView from "../views/EditoraView.vue";
import CategoriaView from "../views/CategoriaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditoraView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutorView,
    },

    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
  ],
});

export default router;
