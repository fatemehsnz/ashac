<template>
  <div class="services_main dir-rtl">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage">
            <h2>خدمات آشا</h2>
            <span
              >It is a long established fact that a reader will be distracted by
              the readable content
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <ul
            class="nav nav-tabs md-tabs border_none"
            id="myTabMD"
            role="tablist"
          >
            <li class="nav-item lisertab">
              <a
                class="nav-link servi_tab active"
                id="home-tab-md"
                data-toggle="tab"
                href="#home-md"
                role="tab"
                aria-controls="home-md"
                aria-selected="true"
                >پروانه ساخت</a
              >
            </li>
            <li class="nav-item lisertab">
              <a
                class="nav-link servi_tab"
                id="profile-tab-md"
                data-toggle="tab"
                href="#profile-md"
                role="tab"
                aria-controls="profile-md"
                aria-selected="false"
                >ISO</a
              >
            </li>
            <li class="nav-item lisertab">
              <a
                class="nav-link servi_tab"
                id="contact-tab-md"
                data-toggle="tab"
                href="#contact-md"
                role="tab"
                aria-controls="contact-md"
                aria-selected="false"
                >آموزش</a
              >
            </li>
          </ul>
          <div class="tab-content card back_bg" id="myTabContentMD">
            <div
              class="tab-pane fade show active"
              id="home-md"
              role="tabpanel"
              aria-labelledby="home-tab-md"
            >
              <div class="row">
                <div class="col-md-4 col-sm-6" :class="service.style" v-for="(service, index) in services.parvane" :key="index">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img :src="require(`../assets/img/${service.img}`)" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>{{ service.title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 margin_top40">
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile-md"
              role="tabpanel"
              aria-labelledby="profile-tab-md"
            >
              <div class="row">
                <div class="col-md-4 col-sm-6" :class="service.style" v-for="(service, index) in services.iso" :key="index">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img :src="require(`../assets/img/${service.img}`)" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>{{ service.title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 margin_top40">
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact-md"
              role="tabpanel"
              aria-labelledby="contact-tab-md"
            >
              <div class="row">
                <div class="col-md-4 col-sm-6" :class="service.style" v-for="(service, index) in services.amozesh" :key="index">
                  <div class="services">
                    <div class="services_img">
                      <figure>
                        <img :src="require(`../assets/img/${service.img}`)" alt="#" />
                      </figure>
                      <div class="ho_dist">
                        <span>{{ service.title }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 margin_top40">
                  <a class="read_more" href="Javascript:void(0)">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["services"]),
  },
};
</script>

<style>
</style>