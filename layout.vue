<template>
    <div id="app">
        <Navbar />
        <Nuxt />
        <CTA />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import CTA from '@/components/CTA.vue';

export default {
    components: {
        Navbar,
        CTA,
        Footer,
    },
};
</script>
