<template>
  <div class="row">
    <div
      class="col-6"
      v-for="achievement in achievementsContent"
      :key="achievement.id"
    >
      <div class="box-stats with-margin">
        <h3 class="poppins-font position-relative">
          {{ achievement.title }}
        </h3>
        <p class="open-sans-font m-0 position-relative text-uppercase">
          {{ achievement.subTitle1 }}
          <span class="d-block">{{ achievement.subTitle2 }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievementsContent: [
        { id: 1, title: "", subTitle1: "Web Devlopment", subTitle2: "" },
        { id: 2, title: "", subTitle1: "Operation", subTitle2: "" },
        { id: 3, title: "", subTitle1: "Data Science", subTitle2: "" },
        { id: 4, title: "", subTitle1: "MLOPS", subTitle2: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
