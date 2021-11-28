<template>
  <div class="about">
    <img alt="komsunubil logo" src="../assets/komsunubil-logo.png" />
    <h1>About page</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
      About
  },
})
export default class About extends Vue {}
</script>
