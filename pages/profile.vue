<script setup lang="ts">
useHead({ title: 'Profile | Beverly Nicole S' })

const info = [
  { label: 'Name', value: 'Beverly Nicole S. Siton' },
  { label: 'Email', value: 'beverlynicole.siton@carsu.edu.ph' },
  { label: 'Location', value: 'Butuan City, Philippines' },
]

const education = [
  {
    school: 'Caraga State University – Main Campus',
    detail: 'BS Information Technology · College of Computing and Information Sciences',
    period: '2024 – Present',
  },
  {
    school: 'Taligaman National High School',
    detail: 'TVL Track · Home Economics',
    period: '2022 – 2024',
  },
]

const skills = [
  'HTML & CSS',
  'JavaScript',
  'Vue / Nuxt',
  'Tailwind CSS',
  'Node.js & Express',
  'MySQL & PostgreSQL',
  'Git & GitHub',
  'Figma',
]

const interests = ['Software development', 'Web development', 'UI/UX design']

const hobbies = ['Drawing', 'Listening to music', 'Reading']
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row items-center gap-6 mb-10">
      <img
        src="/avatar.png"
        alt="Avatar of Beverly Nicole S. Siton"
        class="w-32 h-32 rounded-full object-cover object-top border-4 border-white shadow-md bg-white"
      />
      <div class="text-center sm:text-left">
        <h1 class="text-3xl font-extrabold text-plum-700">My Profile</h1>
        <p class="text-plum-900/70">A little more about me.</p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <ProfileSection title="Personal Information">
        <dl class="space-y-2">
          <div v-for="item in info" :key="item.label" class="flex gap-3">
            <dt class="w-24 shrink-0 font-medium text-plum-600">{{ item.label }}</dt>
            <dd class="min-w-0 break-words">{{ item.value }}</dd>
          </div>
        </dl>
      </ProfileSection>

      <ProfileSection title="Educational Background">
        <ul class="space-y-4">
          <li v-for="e in education" :key="e.school">
            <p class="font-semibold">{{ e.school }}</p>
            <p class="text-sm text-plum-900/70">{{ e.detail }}</p>
            <p class="text-xs text-coral-600">{{ e.period }}</p>
          </li>
        </ul>
      </ProfileSection>

      <ProfileSection title="Skills & Interests">
        <p class="text-sm font-medium text-plum-600 mb-2">Skills</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="s in skills" :key="s" class="px-3 py-1 rounded-full bg-plum-100 text-plum-700 text-sm">{{ s }}</span>
        </div>
        <p class="text-sm font-medium text-plum-600 mb-2">Interests</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="i in interests" :key="i" class="px-3 py-1 rounded-full bg-coral-400/20 text-coral-600 text-sm">{{ i }}</span>
        </div>
      </ProfileSection>

      <ProfileSection title="Hobbies">
        <ul class="list-disc list-inside space-y-1">
          <li v-for="h in hobbies" :key="h">{{ h }}</li>
        </ul>
      </ProfileSection>
    </div>
  </div>
</template>