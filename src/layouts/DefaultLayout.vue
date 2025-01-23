<template>
  <div class="flex h-screen w-full bg-bg-index">
    <SidebarComponentVue />
    <div class="flex flex-grow items-center justify-center">
      <div class="w-full max-w-3xl h-full py-12 px-2">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import SidebarComponentVue from "@/layouts/partials/SidebarComponent.vue";
export default {
  name: "DefaultLayout",
  components: {
    SidebarComponentVue,
  },
};
</script>
