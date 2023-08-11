<template>
    <div>
        <!-- ServicesHero component -->
        <ServicesHero />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 class="text-3xl font-bold text-center mb-8">Our Services</h1>

            <!-- Replace this section with details of your services -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Service 1</h2>
                    <p>Details about service 1...</p>
                </div>

                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Service 2</h2>
                    <p>Details about service 2...</p>
                </div>

                <!-- Add more services as needed... -->
            </div>
        </div>
    </div>
</template>
  
<script>
// Import the ServicesHero component
import ServicesHero from '@/components/ServicesHero.vue';

export default {
    // Register the ServicesHero component
    components: {
        ServicesHero,
    },
    head() {
        return {
            title: 'Our Services - Your Company Name',
        }
    }
};
</script>
  
<style scoped></style>
