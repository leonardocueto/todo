<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="white"
    class="icon icon-tabler icons-tabler-filled icon-tabler-user"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
    <path
      d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"
    />
  </svg>
</template>
<script>
export default {
  name: "BookIcon",
  props: {
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
    },
  },
};
</script>
