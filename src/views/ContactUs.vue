<template>
  <div class="container-fluid bg-gray px-0">
    <div class="row g-0">
      <div class="col-lg-6 py-6 px-5">
        <h5 class="display-5 mb-4">لطفا برای دریافت مشاوره رایگان، قسمت های زیر را تکمیل و نیاز خود را اعلام فرمایید.</h5>
        <p class="mb-4">
          Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr sea
          kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit nonumy vero
          lorem amet stet diam at. Ea at lorem sed et, lorem et rebum ut eirmod
          gubergren, dolor ea duo diam justo dolor diam ipsum dolore stet stet
          elitr ut. Ipsum amet labore lorem lorem diam magna sea, eos sed dolore
          elitr.
        </p>
        <form>
          <div class="row gx-3">
            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="form-floating-1"
                  placeholder="John Doe"
                />
                <label for="form-floating-1">نام شما *</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="form-floating-2"
                  placeholder="name@example.com"
                />
                <label for="form-floating-2">ایمیل شما *</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="form-floating-2"
                  placeholder="name@example.com"
                />
                <label for="form-floating-2">شماره تماس شما *</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="form-floating-2"
                  placeholder="name@example.com"
                />
                <label for="form-floating-2">نام شرکت شما *</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating mb-3">
                <textarea
                  type="email"
                  class="form-control"
                  id="form-floating-2"
                  placeholder="name@example.com"
                  row="5"
                  style="height: 100px;"
                ></textarea>
                <label for="form-floating-2">پیام</label>
              </div>
            </div>
            <!-- <div class="col-6">
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Financial Consultancy"
                >
                  <option selected>Financial Consultancy</option>
                  <option value="1">Strategy Consultancy</option>
                  <option value="2">Tax Consultancy</option>
                </select>
                <label for="floatingSelect">Select A Service</label>
              </div>
            </div> -->
            <div class="col-12">
              <button class="btn btn-primary w-100 h-100" type="submit">
                Request A Quote
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-6" style="min-height: 400px">
        <div class="position-relative h-100">
          <img
            class="position-absolute w-100 h-100"
            src="@/assets/img/quote.jpg"
            style="object-fit: cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="css" scoped src="@/assets/css/bootstrap.v5.0.0.min.css"></style>
<style lang="scss" scoped src="@/assets/scss/consultancy.scss"></style>
