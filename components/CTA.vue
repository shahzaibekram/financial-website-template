<template>
    <div class="cta bg-blue-100 flex flex-col items-center justify-center py-12 px-8 rounded">
        <h2 class="text-3xl font-bold mb-4">{{ cta.title }}</h2>
        <p class="text-lg mb-8">{{ cta.description }}</p>
        <button class="btn btn-primary" @click="navigateToContact">{{ cta.buttonText }}</button>
    </div>
</template>

<script>
import { ctas } from "~/data/ctaData";

export default {
    data() {
        return {
            cta: ctas[Math.floor(Math.random() * ctas.length)],
        }
    },
    watch: {
        $route() {
            this.cta = ctas[Math.floor(Math.random() * ctas.length)];
        }
    },
    methods: {
        navigateToContact() {
            this.$router.push('/contact-us');
        }
    },
};
</script>
