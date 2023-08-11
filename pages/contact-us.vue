<template>
    <div class="p-8">
        <div class="custom-width mx-auto lg:px-20">
            <h1 class="text-4xl font-bold mb-4 mt-16">Contact Us</h1>
            <p class="mb-8 text-lg text-gray-700">
                Have a question for us? Want to learn more about our services? Feel free to leave a message below.
            </p>
        </div>

        <div class="flex flex-col w-full lg:flex-row custom-width mx-auto lg:px-20">
            <div class="flex-2 card bg-base-300 rounded-box p-6">
                <h2 class="text-lg font-bold mb-4">Incentive Investment Funds ICAV</h2>
                <p class="mb-2">32 Molesworth Street, Ireland</p>
                <p class="mb-2">Customer Service: +353 (0)1 905 8300</p>
                <p class="mb-2">Trading: +353 (0)1 905 8300</p>
                <p class="mb-2">info@incentiveinvestment.com</p>
                <p class="mt-6 text-lg text-gray-700">Company Registration Number: IE545816</p>
                <p class="mb-4 text-lg text-gray-700">Incorporation Date: June 20, 2014</p>
            </div>
            <div class="lg:mx-6"></div> <!-- divider for large screens -->
            <ContactForm class="flex-1" />
        </div>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {
        ContactForm,
    },
};
</script>

<style scoped>
.custom-width {
    max-width: 1200px;
}
</style>
