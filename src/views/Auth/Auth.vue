<template>
  <div class="login">
    <!-- Particles -->
    <particles-bg type="cobweb" :num="70" color="#3998BC" :bg="true" />
    <b-container class="h-100">
      <b-row class="justify-content-center align-items-center h-100">
        <b-col cols="12" sm="8" lg="4">
          <!-- Logo -->
          <div class="text-center mb-5">
            <img
              class="login__logo"
              src="/media/logo/matamantra-blue-square.png"
              alt=""
            />
            <h5 class="mt-2">Please sign in to continue</h5>
          </div>
          <br />
          <b-alert :show="auth" variant="danger">Login Failed</b-alert>
          <ValidationObserver v-slot="{ handleSubmit }">
            <b-form
              class="mt-5"
              novalidate
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <!-- Email -->
              <b-form-group id="email" label-for="input-email">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="input-email"
                    v-model="email"
                    size="lg"
                    :class="classes"
                    type="email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>

              <!-- Password -->
              <b-form-group id="password" label-for="input-password">
                <ValidationProvider
                  v-slot="{ errors, classes }"
                  name="Password"
                  rules="required"
                >
                  <b-form-input
                    id="input-password"
                    v-model="password"
                    size="lg"
                    :class="classes"
                    required
                    type="password"
                    placeholder="Enter password"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </b-form-group>

              <!-- Submit -->
              <b-form-group
                id="input-group-2"
                class="text-center"
                label-for="input-2"
              >
                <b-button block size="lg" type="submit" variant="primary"
                  >Sign in</b-button
                >
              </b-form-group>
            </b-form>
          </ValidationObserver>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ParticlesBg } from "particles-bg-vue";
import { extend } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";

extend("email", email);
extend("required", required);
@Component({
  components: {
    ParticlesBg
  }
})
export default class Auth extends Vue {
  email = "";
  password = "";
  auth = false;

  created(): void {
    const auth = this.$store.getters["user/userDetail"];
    if (auth) {
      this.$router.push("/summary");
    }
  }

  onSubmit(): void {
    this.$store
      .dispatch("user/LOGIN", { username: this.email, password: this.password })
      .then(() => {
        return false;
      })
      .catch(() => {
        this.auth = true;
      });
  }
}
</script>
