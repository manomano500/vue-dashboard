<template>
    <!-- Sidebar -->

    <div class="relative flex min-h-screen ">

    <SideBar/>


      <div class="flex-1">
        <Header />
        <div class="p-8 text-cyan-700 bg-gray-200 h-full font-extrabold">This is The Content Section</div>
      </div>
  </div>
</template>

<script>

import SideBar from "@/components/admin/SideBar.vue";
import Header from "@/components/admin/Header.vue";

export default {
  name: 'AdminLayout',
  components: {Header, SideBar},
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
