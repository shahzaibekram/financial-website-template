<template>
    <div class="hero min-h-screen" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-xl mx-auto">
                <h1 class="mb-8 text-5xl font-bold drop-shadow-lg">Achieve Financial Freedom with Our Personalized Wealth
                    Management Plan
                </h1>
                <p class="mb-5 drop-shadow-lg">Contact us today to learn more about our personalized wealth management plan.
                </p>
                <button class="btn btn-primary" @click="navigateToContactUs">Schedule Your Free Consultation</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            backgroundUrl: '/assets/images/background-images/0_2.png',
        }
    },
    methods: {
        navigateToContactUs() {
            this.$router.push('/contact-us');
        }
    }
}
</script>
