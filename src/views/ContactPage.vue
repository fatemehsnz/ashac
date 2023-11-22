<template>
  <!-- ***** Contact Area Start ***** -->
  <section class="uza-contact-area section-padding-80">
    <div class="container">
      <div class="row justify-content-between">
        <!-- Contact Form -->
        <div class="col-12 col-lg-8">
          <div class="uza-contact-form mb-80">
            <div class="contact-heading mb-50">
              <h4 class="dir-rtl">
                لطفا برای دریافت مشاوره رایگان، قسمت های زیر را تکمیل و نیاز خود
                را اعلام فرمایید.
              </h4>
            </div>
            <form
              ref="form"
              @submit.prevent="sendMail(name, organization, email, phone, message)"
            >
              <div class="row dir-rtl">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-30"
                      name="full-name"
                      placeholder="نام شما"
                      v-model="name"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control mb-30"
                      name="email"
                      placeholder="ایمیل شما"
                      v-model="email"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-30"
                      name="phone"
                      placeholder="شماره تماس شما"
                      v-model="phone"
                      required
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control mb-30"
                      name="organization"
                      placeholder="نام شرکت شما"
                      v-model="organization"
                      required
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <textarea
                      class="form-control mb-30"
                      name="message"
                      rows="8"
                      cols="80"
                      placeholder="پیام شما"
                      v-model="message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn uza-btn btn-3 mt-15">ارسال</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Single Contact Card -->
        <div class="col-12 col-lg-3">
          <div class="contact-sidebar-area mb-80 dir-rtl">
            <!-- Single Sidebar Area -->
            <div class="single-contact-card mb-50">
              <h4>مشهد</h4>
              <h3 class="dir-ltr text-right">051 3603 9420</h3>
              <h3 class="dir-ltr text-right">0900 720 2530</h3>
              <h6>
                دفتر مرکزی: معلم 11، پلاک 50، واحد 4
                <br />
                دفتر کارگزاری: پارک علم و فناوری خراسان، ساختمان مرکزی
                <br />
                ashagroup.c@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </div>
      <!-- <br />
      <div class="row">
        // Google Maps
        <div class="col-12">
          <div class="google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3840.6617569218997!2d59.42015248325114!3d36.44195462998561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3f6cf59e707bc0e5%3A0xa815c139ec43b39d!2sKhorasan%20Science%20And%20Technology%20Park%2C%20CCRF%2BJHJ%2C%20Mashhad%2C%20Razavi%20Khorasan%20Province%2C%20Iran!3m2!1d36.4415845!2d59.423883999999994!5e0!3m2!1sen!2s!4v1677246984564!5m2!1sen!2s"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import emailjs from "@emailjs/browser";
function sendMail(name, organization, email, phone, message) {
  var templateParams = {
    name: name,
    to_name: "Nafas",
    message: message,
    from: email,
    phone: phone,
    organization: organization,
    reply_to: "",
  };

  emailjs
    .send(
      "service_axc6d0j",
      "template_abn1vqo",
      templateParams,
      "xz3l05OFCqemZ7HsZ"
    )
    .then(
      (result) => {
        console.info("SUCCESS! sending mail", result.text);
        alert("SUCCESS!", result.text);
      },
      (error) => {
        console.error("FAILED...", error.text);
        alert("FAILED...", error.text);
      }
    );
}
</script>

<style lang="css" scoped src="@/assets/css/bootstrap.v4.1.3.min.css"></style>
<style lang="scss" scoped src="@/assets/scss/style.uza.scss"></style>
