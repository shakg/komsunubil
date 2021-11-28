<template>
  <div class="searchPage">
    <img alt="komsunubil logo" src="../assets/komsunubil-logo.png" />
    <h1>Search Page</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
      Search
  },
})
export default class Search extends Vue {}
</script>
