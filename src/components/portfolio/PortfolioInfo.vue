<template>
  <div class="portfolio-main">
    <div class="container">
      <!-- Tab panes -->
      <div class="portfolio-tab-content">
        <ul class="row grid justify-content-center">
          <li v-for="item in portfolios" :key="item.id">
            <figure
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal"
              @click="handleBlogItem(item.id)"
            >
              <img :src="item.img" alt="Portolio" />
              <div class="hover-content-wrapper">
                <span class="content-title">{{ item.title }}</span>
              </div>
            </figure>
          </li>
          <!-- Portfolio Item Ends -->
        </ul>
        <!-- End ul grid -->

        <!-- {/* Start portfolioModal */} -->
        <div
          class="modal fade"
          id="portfolioModal"
          tabindex="-1"
          aria-labelledby="portfolioModal"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable portfolio-modal"
          >
            <div class="modal-content portfolio-modal">
              <button
                class="close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="../../assets/images/cancel.svg" alt="close image" />
              </button>
              <!-- close modal -->
              <div class="modal-body">
                <div class="box_inner portfolio">
                  <div class="slideshow">
                    <figure>
                      <!-- {/* Project Details Starts */} -->
                      <figcaption>
                        <h3>{{ portfolio.title }}</h3>
                        <div class="row open-sans-font">
                          <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-file-text-o pr-2"></i>
                            <span class="project-label">Project </span>:
                            <span class="ft-wt-600 uppercase">
                              {{ portfolio.project }}</span
                            >
                          </div>
                          <!-- {/* End .col */} -->

                          <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-user-o pr-2"></i>
                            <span class="project-label">Client </span>:
                            <span class="ft-wt-600 uppercase">{{
                              portfolio.client
                            }}</span>
                          </div>
                          <!-- {/* End .col */} -->

                          <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-code pr-2"></i>
                            <span class="project-label">Langages </span>:
                            <span class="ft-wt-600 uppercase">{{
                              portfolio.language
                            }}</span>
                          </div>
                          <!-- {/* End .col */} -->

                          <div class="col-12 col-sm-6 mb-2">
                            <i class="fa fa-external-link pr-2"></i>
                            <span class="project-label">Preview </span>:
                            <span class="ft-wt-600 uppercase">
                              <a
                                :href="portfolio.previewLink"
                                target="_blank"
                                rel="noreferrer"
                              >
                                {{ portfolio.preview }}
                              </a>
                            </span>
                          </div>
                          <!-- {/* End .col */} -->
                        </div>
                        <!-- {/* End .row */} -->
                      </figcaption>
                      <!-- {/* Project Details Ends */} -->

                      <!-- {/*  Main Project Content Starts */} -->
                      <img :src="portfolio.img" alt="Portolio" />
                      <!-- {/* Main Project Content Ends */} -->
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- {/* End  portfolioModal */} -->
      </div>
    </div>
  </div>
</template>

<script>
import portfolioMixin from "@/mixin/portfolio-mixin";

export default {
  name: "FancyPortfolio",
  mixins: [portfolioMixin],
  data() {
    return {
      portfolio: {},
    };
  },
  methods: {
    handleBlogItem(id) {
      this.portfolio = this.portfolios.find((item) => item.id == id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
