<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({ title: 'Home | My Profile' })

const name = 'Beverly Nicole'
const intro = 'Student, learner, and aspiring web developer.'
</script>

<template>
  <div class="grid md:grid-cols-2 gap-10 items-center py-6">
    <div class="order-2 md:order-1">
      <p class="text-coral-600 font-medium mb-2">Hello, I'm</p>
      <h1 class="text-4xl md:text-5xl font-extrabold text-plum-700 mb-4">{{ name }}</h1>
      <p class="text-lg mb-4">{{ intro }}</p>
      <p class="text-plum-900/80 mb-8">
        Welcome to my website! Here you can learn a little about my background,
        what I'm studying, and the things I enjoy doing.
      </p>
      <NuxtLink
        to="/profile"
        class="inline-block px-6 py-3 rounded-full bg-coral-500 hover:bg-coral-600 text-white font-semibold shadow transition"
      >
        View my profile →
      </NuxtLink>
    </div>

    <div class="order-1 md:order-2 flex justify-center">
      <div class="rounded-3xl p-2 bg-gradient-to-br from-plum-200 to-coral-400 shadow-lg">
        <img
          src="/avatar.png"
          alt="Avatar of Beverly Nicole"
          class="w-64 h-80 md:w-72 md:h-96 object-cover object-top rounded-2xl bg-white"
        />
      </div>
    </div>
  </div>
</template>
