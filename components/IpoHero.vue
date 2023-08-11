<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row space-x-0 lg:space-x-8 items-center">
            <img :src="selectedIpo.logo" class="max-w-[200px] max-h-[200px] rounded-lg shadow-2xl" />
            <div>
                <h1 class="text-5xl font-bold">Initial Public Offerings (IPOs)</h1>
                <p class="pt-6 pb-4">
                    Be one of the first to own shares in a brand you know and trust.
                    Access exclusive pre-IPO tech companies and explore alternative investment opportunities in proven
                    startups.
                </p>
                <button class="btn btn-primary flex justify-between items-center" @click="navigateToIPOAlertsRegistration">
                    Register for Email Alerts
                    <Icon class="ml-2" name="jam:arrow-right" />
                </button>
                <p class="pt-4 pb-6 text-sm text-gray-500">
                    <span class="font-bold">Important information</span> - We do not offer advice on the suitability of any
                    IPOs for you. Like any
                    investment, there are risks and it is vital that you have all the information you need to make an
                    informed decision. Any decision to invest in an IPO should be made solely on the basis of the
                    information contained in the Prospectus, and any supplement thereto. If you have any doubts about its
                    suitability, please seek expert advice. The value of all investments can fall as well as rise, so you
                    may get back less than you invested.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '#components' // Import the Icon component

export default {
    name: 'IpoHero',
    components: {
        Icon  // Register the Icon component
    },
    props: {
        ipos: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedIpo: this.ipos[0] || {}, // Initialize with the first IPO, or an empty object if there are no IPOs
        };
    },
    mounted() {
        this.selectRandomIpo();
        setInterval(() => {
            this.selectRandomIpo();
        }, 3000); // Change the image every 3 seconds
    },
    methods: {
        selectRandomIpo() {
            const randomIndex = Math.floor(Math.random() * this.ipos.length);
            this.selectedIpo = this.ipos[randomIndex];
        },
        navigateToIPOAlertsRegistration() {
            // navigation logic goes here
        },
    },
};
</script>

<style scoped>
/* Any specific styles for IpoHero.vue */
</style>
x