<template>
  <div class="flex flex-col items-center justify-center h-screen" :style="{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary-text)' }">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <router-link to="/">
home      </router-link>
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight" :style="{ color: 'var(--primary-text)' }">Sign Up</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="register">
        <div v-if="errMsg" class="flex items-center justify-between p-3 my-2 rounded" :style="{ backgroundColor: 'var(--accent-color)', color: 'var(--primary-bg)' }">
          <div>
            <div v-for="(errors, field) in errMsg" :key="field" class="text-sm">
              <strong>{{ field }}:</strong>
              <ul>
                <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
              </ul>
            </div>
          </div>
          <span @click="errMsg=''" class="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:bg-[rgba(0,0,0,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </span>
        </div>

        <div>
          <label for="name" class="block text-sm font-medium leading-6" :style="{ color: 'var(--primary-text)' }">Name</label>
          <div class="mt-2">
            <input v-model="user.name" id="name" name="name" type="text" autocomplete="name" required class="block pl-4 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6" :style="{ color: 'var(--primary-text)' }">Email address</label>
          <div class="mt-2">
            <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required class="block pl-4 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6" :style="{ color: 'var(--primary-text)' }">Password</label>
          <div class="mt-2">
            <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" required class="block pl-4 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="password_confirmation" class="block text-sm font-medium leading-6" :style="{ color: 'var(--primary-text)' }">Password Confirmation</label>
          <div class="mt-2">
            <input v-model="user.password_confirmation" id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password_confirmation" required class="block pl-4 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" :style="{ backgroundColor: 'var(--accent-color)' }">
            Sign up
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm" :style="{ color: 'var(--secondary-text)' }">
        Already have an Account?
        <router-link :to="{ name: 'Login' }" class="font-semibold leading-6" :style="{ color: 'var(--accent-color)' }">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import store from "@/store/index.js";
import { ref } from "vue";

const errMsg = ref('');
const user = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
});

const register = async (ev) => {
  ev.preventDefault();
  await store.dispatch("auth/register", user.value).catch((err) => {
    console.log(err);
    errMsg.value = err.response.data.errors;
  });
};
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
