<template>
  <div class="flex h-screen" :class="{ 'dark-theme': isDarkTheme }">
    <transition name="slide">
      <div v-if="!collapsed || !isMobile" class="overflow-y-auto no-scroll-bar"
           :class="{'fixed inset-0 z-50': isMobile}"
           :style="{ width: sidebarWidth, backgroundColor: 'var(--secondary-bg)' }">
        <SideBar />
      </div>
    </transition>

    <div class="flex flex-col flex-1" :style="{ backgroundColor: 'var(--primary-bg)' }">
      <NavBar @toggle-sidebar="toggleSidebar" @toggle-theme="toggleTheme" />
      <div class="flex-1 p-2 overflow-y-auto" :style="{ backgroundColor: 'var(--secondary-bg)' }">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/admin/SideBar.vue";
import NavBar from "@/components/admin/NavBar.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "@/views/admin/layouts/state";
import { onMounted, ref, computed } from "vue";

export default {
  name: 'AdminLayout',
  components: { NavBar, SideBar },
  setup() {
    const isMobile = ref(window.innerWidth < 640);
    const isDarkTheme = ref(false);

    const handleResize = () => {
      isMobile.value = window.innerWidth < 640;
    };

    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
      isMobile,
      isDarkTheme,
      toggleTheme
    };
  }
};
</script>

<style scoped>

</style>