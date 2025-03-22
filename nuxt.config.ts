import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['nuxt-icons','@nuxt/image','@nuxt/content'],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  content: {
    markdown: {
      // Este es el soporte correcto para saltos de línea automáticos (doble espacio o enter)
      // aunque TypeScript puede no reconocerlo aún, ¡funciona!
      toc: { depth: 3, searchDepth: 3 },
      highlight: {
        theme: 'github-dark',
      },
      // Aquí agregamos la configuración que te interesa
      remarkPlugins: [],
      rehypePlugins: [],
      // 👇 Esta parte aún no es "oficial" en los tipos pero funciona
      markdownIt: {
        breaks: true,
        html: true,
      }
    }
  }
  
});