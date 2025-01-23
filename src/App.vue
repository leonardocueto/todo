<template>
  <div id="app">
    <component :is="DefaultLayout">
      <router-view />
    </component>
  </div>
</template>
<script>
const DefaultLayout = () => import("@/layouts/DefaultLayout.vue");
export default {
  name: "app",
  data() {
    return {
      DefaultLayout,
    };
  },
};
</script>
<style></style>
