<template>
  <div class="card bg-base-100 shadow-xl w-full">
    <div class="card-body">
      <h2 class="card-title text-center">Contact Us</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-control">
          <label class="label"><span class="label-text">Your Name</span></label>
          <input type="text" placeholder="John Doe" class="input input-bordered w-full" v-model="name" />
        </div>
        <div class="form-control">
          <label class="label"><span class="label-text">Your Email</span></label>
          <input type="email" placeholder="john@example.com" class="input input-bordered w-full" v-model="email" />
        </div>
        <div class="form-control">
          <label class="label"><span class="label-text">Message</span></label>
          <textarea class="textarea textarea-bordered w-full" placeholder="Your message" v-model="message"></textarea>
        </div>
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary w-full">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    onSubmit() {
      alert(`Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
    },
  },
};
</script>
