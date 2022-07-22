<template>
  <div class="error_page">
    <div
      class="hero bg-image"
      :style="{ backgroundImage: 'url(' + image404 + ')' }"
    >
      <div class="content">
        <h1>404!</h1>
        <p>The page you are looking for could not be found.</p>

        <div class="button">
          <router-link to="/">BACK TO HOME</router-link>
        </div>
        <!-- {/* End purchase_button */} -->
      </div>
    </div>
    <!-- {/* End .hero */} -->
  </div>
</template>

<script>
export default {
  setup() {
    return {
      image404: require(`@/assets/images/404.jpg`),
    };
  },
};
</script>

<style lang="scss" scoped></style>
