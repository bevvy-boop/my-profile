<template>
  <div class="min-h-screen flex flex-col bg-plum-50 text-plum-900">
    <AppNav />
    <main class="flex-1 mx-auto w-full max-w-5xl px-6 py-10">
      <slot />
    </main>
    <footer class="border-t border-plum-200 py-6 text-center text-sm text-plum-700">
      © {{ new Date().getFullYear() }} Beverly Nicole. Built with Nuxt 3 and Tailwind CSS.
    </footer>
  </div>
</template>
