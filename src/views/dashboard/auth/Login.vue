<template>
  <!-- login -->
  <div class="flex flex-col items-center justify-center h-screen" :style="{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary-text)' }">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <router-link to="/">
home      </router-link>
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="login">
        <div v-if="errMsg" class="flex items-center justify-between p-3 my-2 rounded" :style="{ backgroundColor: 'var(--accent-color)', color: 'var(--primary-bg)' }">
          {{ errMsg }}
          <span @click="errMsg=''" class="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:bg-[rgba(0,0,0,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </span>
        </div>

        <div v-if="scMsg" class="flex items-center justify-between p-3 my-2 rounded" :style="{ backgroundColor: 'var(--hover-color)', color: 'var(--primary-bg)' }">
          {{ scMsg }}
          <span @click="scMsg=''" class="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:bg-[rgba(0,0,0,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </span>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6" :style="{ color: 'var(--primary-text)' }">Email address</label>
          <div class="mt-2">
            <input v-model="user.email" id="email" name="email" type="email" autocomplete="email" required class="block w-full pl-4 rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6" :style="{ color: 'var(--primary-text)' }">Password</label>
            <div class="text-sm">
              <button @click="forgetPassword" :disabled="isLoading" class="font-semibold hover:text-gray-700" :style="{ color: 'var(--accent-color)' }">
                Forgot Password?
              </button>
              {{ isLoading ? 'Loading...' : '' }}
            </div>
          </div>
          <div class="mt-2">
            <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-lg pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div class="mt-2">
            <input id="remember" name="remember" type="checkbox" class="text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <label for="remember" class="text-sm font-medium mx-1 leading-6" :style="{ color: 'var(--primary-text)' }">Remember me</label>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600" :style="{ backgroundColor: 'var(--accent-color)' }">
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm" :style="{ color: 'var(--secondary-text)' }">
        Not a member?
        <router-link :to="{ name: 'Signup' }" class="font-semibold leading-6 hover:text-gray-700" :style="{ color: 'var(--accent-color)' }">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>
<script setup>
// const router = useRouter()
import {ref} from "vue";
import store from "@/store";
import axiosClient from "@/axios";

const user =ref( {
  email: '',
  password: '',
  // remember: false
})

const errMsg = ref('')
const scMsg = ref('')
const login = async (ev) => {
  ev.preventDefault()
  await store.dispatch("auth/login", user.value).catch((err) => {
    errMsg.value = err.response.data.message;
    console.log(user.value.email)
    console.log('errMsg',errMsg.value)
  })
}

const isLoading = ref(false);
// Forget Password method
const forgetPassword = async () => {
  try {
    isLoading.value = true;
    console.log(user.value.email)
    const response = await axiosClient.post(`/forgot-password?email=${user.value.email}`);
    // Handle success, e.g., showing a success message
    console.log(response.data);
    scMsg.value = response.data.status;
  } catch (error) {
    // Handle error, e.g., showing an error message
    console.log(error.response.data);
    errMsg.value = error.response.data.errors.email;
  }finally {
    isLoading.value = false; // Reset loading state whether the request succeeds or fails
  }
};
</script>
