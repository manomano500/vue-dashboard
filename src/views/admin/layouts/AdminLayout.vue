<template>
  <div class="flex h-screen">
    <!-- Sidebar -->

    <div class=" overflow-y-auto hidden sm:block " :style="{width :sidebarWidth}" >
      <SideBar />
    </div>

    <div class="flex flex-col flex-1 shadow-2xl">
      <!-- Navbar -->
      <NavBar  />

      <!-- Content Section -->
      <div class="flex-1 p-4 overflow-y-auto bg-gray-200 shadow-2xl ">
        <router-view />
      </div>
    </div>
  </div>
</template>






<script>
import SideBar from "@/components/admin/SideBar.vue";
import NavBar from "@/components/admin/NavBar.vue";
import {sidebarWidth, toggleSidebar} from "@/views/admin/state";

export default {
  name: 'AdminLayout',
  methods: {toggleSidebar},
  computed: {
    sidebarWidth() {
      return sidebarWidth
    }
  },
  components: {NavBar, SideBar},
};
</script>

<style scoped>

</style>
