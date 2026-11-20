<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <section class="bg-white rounded-2xl shadow-sm border border-plum-100 p-6">
    <h2 class="text-xl font-semibold text-plum-700 mb-4 flex items-center gap-2">
      <span class="inline-block w-1.5 h-6 rounded bg-coral-500"></span>
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
