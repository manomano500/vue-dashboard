<template>
    <!-- Sidebar -->

    <div class="no-scroll  flex">


<!--      sid-->
<div class="overflow-y-scroll h-screen">

  <SideBar/>
</div>


<!--      rigth-->
      <div class=" ">

        <div class=" " >
          <NavBar />
        </div>

          <div class="h-screen overflow-y-scroll ">

            <router-view/>
          </div>


      </div>



  </div>
</template>

<script>

import SideBar from "@/components/admin/SideBar.vue";
import NavBar from "@/components/admin/NavBar.vue";

export default {
  name: 'AdminLayout',
  components: {NavBar , SideBar},
};
</script>

<style>

.no-scroll {
  scrollbar-width: none;
}
</style>