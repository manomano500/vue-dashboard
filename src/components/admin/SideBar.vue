<template>
  <div class="h-full" :style="{ backgroundColor: 'var(--secondary-bg)' }">
    <div class="flex flex-col px-2 space-y-6 overflow-y-auto h-screen no-scroll-bar transition-all duration-300 ease-in-out"
         :class="{'w-16': collapsed, 'w-64': !collapsed}">
      <div v-if="!collapsed" class="mt-4 text-center">
        <span class="text-xl font-extrabold text-center" :style="{ color: 'var(--primary-text)' }">Dashboard</span>
      </div>

      <nav class="flex flex-col items-center">
        <router-link v-for="(item, index) in menuItems" :key="index"
                     :to="item.route"
                     class="side-bar-button w-full"
                     :class="{'justify-center': collapsed}"
                     active-class="active-link">
          <component :is="item.icon" class="side-bar-button-icon" />
          <span v-if="!collapsed" class="side-bar-button-text">{{ item.text }}</span>
          <span v-else class="sr-only">{{ item.text }}</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { collapsed } from "@/views/admin/layouts/state";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
  setup() {
    const menuItems = [
      { text: 'Dashboard', route: '/admin/dashboard', icon: 'DashboardIcon' },
      { text: 'Products', route: '/admin/products', icon: 'ProductIcon' },
      { text: 'Vendors', route: '/admin/vendors', icon: 'VendorIcon' },
      { text: 'Shipment Centers', route: '/admin/shipment-centers', icon: 'ShipmentIcon' },
      { text: 'Orders', route: '/admin/orders', icon: 'OrderIcon' },
    ];

    return { collapsed, menuItems };
  },
});
</script>

<style scoped>
.side-bar-button {
  @apply flex items-center py-3 px-4 space-x-2 rounded transition duration-200;
  color: var(--secondary-text);
}

.side-bar-button:hover {
  background-color: var(--accent-color);
  color: var(--primary-bg);
}

.side-bar-button-icon {
  @apply w-5 h-5;
}

.active-link {
  background-color: var(--accent-color);
  color: var(--primary-bg);
  @apply border-l-4 border-white;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>