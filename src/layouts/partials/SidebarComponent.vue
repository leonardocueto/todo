<template>
  <nav
    class="flex flex-col w-16 md:w-48 bg-bg-sidebar items-center justify-start"
  >
    <h1 class="font-medium text-gray-300 text-xl p-4 w-full hidden md:block">
      Collections
    </h1>
    <router-link
      to="/"
      class="flex md:gap-4 items-center justify-center md:justify-start hover:bg-bg-hover p-4 w-full cursor-pointer"
    >
      <div class="p-1 bg-blue-300 rounded-lg">
        <BookIcon />
      </div>
      <p class="text-white hidden md:block">School</p>
    </router-link>
  </nav>
</template>

<script>
import BookIcon from "@/desingSistem/components/BookIcon.vue";

export default {
  name: "SidebarComponent",
  components: {
    BookIcon,
  },
};
</script>
