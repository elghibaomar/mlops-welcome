<template>
  <ul class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContent" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      personalInfoContent: [
        { id: 1, meta: "first name", metaInfo: "Omar" },
        { id: 2, meta: "last name", metaInfo: "El Ghiba" },
        { id: 5, meta: "MLOPS", metaInfo: "Available" },
        // { id: 6, meta: "Address", metaInfo: "Tunis" },
        { id: 7, meta: "phone", metaInfo: "+21697856535" },
        { id: 8, meta: "Email", metaInfo: "contact@mlops.ma" },
        // { id: 9, meta: "Skype", metaInfo: " steve.milner" },
        // { id: 10, meta: "langages", metaInfo: "French, English" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
