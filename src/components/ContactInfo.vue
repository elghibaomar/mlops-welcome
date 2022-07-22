<template>
  <form ref="form" class="contactform" @submit.prevent="sendEmail">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="text"
            name="name"
            placeholder="YOUR NAME"
            v-model="name"
            required
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="email"
            name="user_email"
            placeholder="YOUR EMAIL"
            required
            v-model="email"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12 col-md-12">
        <div class="form-group">
          <input
            type="text"
            name="subject"
            placeholder="YOUR SUBJECT"
            required
            v-model="subject"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <div class="form-group">
          <textarea
            name="message"
            placeholder="YOUR MESSAGE"
            required
            v-model="message"
          ></textarea>
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <button type="submit" class="button">
          <span class="button-text">Send Message</span>
          <span class="button-icon fa fa-send"></span>
        </button>
      </div>
      <!-- {/* End .col */} -->
    </div>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_n4mkhz9",
          "template_ugoztxr",
          this.$refs.form,
          "user_vYmDSd9PwIuRXUQEDjYwN",
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            alert("Message sent!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            alert("Message not sent", error);
          }
        );
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>
