<template>
    <div>
        <Hero />
        <section class="px-6 py-12 text-center">
            <h1 class="text-3xl font-bold mb-4">Our Services</h1>
            <p class="text-lg mb-8">
                We offer a comprehensive, flexible range of products and services in various asset classes. Discover more
                about each service below.
            </p>
        </section>
        <ServicesCard />
        <AboutUs />
        <!-- Other components specific to the Home page go here -->
    </div>
</template>
  
<script>
import Hero from '@/components/Hero.vue';
import ServicesCard from '@/components/ServicesCard.vue';
import AboutUs from '@/components/AboutUs.vue';

export default {
    components: {
        Hero,
        ServicesCard,
        AboutUs
    },
};
</script>
