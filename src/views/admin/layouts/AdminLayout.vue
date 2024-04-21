<template>
    <!-- Sidebar -->

    <div class="relative flex min-h-screen ">

    <SideBar/>


      <div class="flex-1">
        <NavBar />
        <div class="p-8 text-cyan-700 bg-gray-200 h-full font-extrabold">This is The Content Section</div>
      </div>
  </div>
</template>

<script>

import SideBar from "@/components/admin/SideBar.vue";
import Header from "@/components/admin/NavBar.vue";
import NavBar from "@/components/admin/NavBar.vue";

export default {
  name: 'AdminLayout',
  components: {NavBar , SideBar},
};
</script>

