<template>
  <div class="flex items-center justify-between  px-4 py-4" :style="{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary-text)' }">
    <h1 class="m-2">Welcome Ramadan</h1>
    <div class="flex items-center ml-auto space-x-4">
      <button @click="$emit('toggle-sidebar')" class="text-current hover:text-gray-700 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <button @click="$emit('toggle-theme')" class="text-current hover:text-gray-700 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  emits: ['toggle-sidebar', 'toggle-theme']
}
</script>