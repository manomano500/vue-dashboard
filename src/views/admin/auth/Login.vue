
<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
  </div>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form @submit.prevent="handleLogin">

      <div v-if="errMsg" class=" flex items-center justify-between p-3 my-2 bg-red-500 text-white rounded">
        {{errMsg}}
        <span @click="errMsg=''" class="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors hover:bg-[rgba(0,0,0,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                </span>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">

          <input v-model="form.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <div class="mt-2">
          <input id="remember" name="remember" type="checkbox"   class=" text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          <label for="remember" class=" text-sm font-medium mx-1 leading-6 text-gray-900">remember me</label>

        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member?

      <router-link :to="{name:'Signup'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">SignUp</router-link>
    </p>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import store from "@/store";
import {ref} from "vue";
import axiosClient from "@/axios";
import login from "@/views/admin/auth/Login.vue";
import router from "@/router";
// import router from "@/router/index.js";
// const router = useRouter()
const form =ref( {
  email: '',
  password: '',
  // remember: false
})

let errMsg=ref('')
const handleLogin = async ()=>{
  await axiosClient.post('/login',{
    email: form.value.email,
    password: form.value.password,
    // remember: form.value.remember
  }).then((res)=>{
    console.log(res)
    // store.commit('setUser', res.data.user)
    // router.push('/admin')
  }).catch((err)=>{
    errMsg.value = err.response.data.message
  })
}

</script>
