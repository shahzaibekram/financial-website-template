<template>
    <IpoHero class="w-full h-24 md:h-28 lg:h-32" :ipos="ipos" />

    <div class="m-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section class="my-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Discover your next opportunity</h2>
            <p class="text-base text-gray-600 mb-6">Explore news, financing, and cap table details. Choose valuation inputs
                to monitor company value over time.</p>

            <h3 class="text-xl font-semibold text-gray-800 mb-6">Top viewed companies as of June 21, 2023</h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-4 px-4">
                <IpoCard v-for="ipo in ipos.slice(0, 8)" :key="ipo.name" :ipo="ipo" />
            </div>

            <div class="mt-8 mb-4 flex">
                <button class="btn btn-primary">Begin Trading</button>
                <a href="/companies" class="btn btn-ghost font-bold no-underline ml-auto">Browse All Companies</a>
            </div>
        </section>

        <section class="my-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Why choose Incentive Investment for IPO investments?
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card bg-base-300 rounded-box p-6">
                    <h3 class="text-lg font-semibold mb-4">Affordable</h3>
                    <p class="text-base mb-4">No fees for IPO applications through our service. An annual fee may be
                        applicable for holding shares.</p>
                </div>

                <div class="card bg-base-300 rounded-box p-6">
                    <h3 class="text-lg font-semibold mb-4">Flexible</h3>
                    <p class="text-base mb-4">Apply for an IPO through different account types. Note that some IPOs might be
                        limited to a single account type.</p>
                </div>

                <div class="card bg-base-300 rounded-box p-6">
                    <h3 class="text-lg font-semibold mb-4">Experienced</h3>
                    <p class="text-base mb-4">We've participated in numerous major IPOs and share offerings available to
                        private investors.</p>
                </div>

                <div class="card bg-base-300 rounded-box p-6">
                    <h3 class="text-lg font-semibold mb-4">Wide Selection of IPOs</h3>
                    <p class="text-base mb-4">Get access to various share offers and IPOs. If an IPO isn't visible online,
                        reach out
                        and we'll help you.</p>
                </div>
            </div>
        </section>

        <section class="my-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Our IPO Service Commitment</h2>
            <p class="text-base text-gray-600 mb-6">Incentive Investment endeavors to present every IPO and share
                offer available to retail investors. However, the scale and specialized nature of some IPOs may prevent
                comprehensive coverage. For IPOs not listed on our online service, we may still be able to facilitate
                applications on a case-by-case basis, potentially involving additional costs. If an IPO is not available to
                private investors, we won't be able to facilitate participation.</p>
            <p class="text-base text-gray-600 mb-6">For any IPOs not outlined on our platform which you are interested in,
                please contact our dealing desk and we'll investigate whether participation is possible.</p>
            <a href="/learn" class="underline text-blue-500">Learn More About IPOs and Share Offers</a>
        </section>
    </div>
</template>

<script>
import IpoHero from '@/components/IpoHero.vue';
import IpoCard from '@/components/IpoCard.vue';
import ipos from '@/data/ipoData.js';

export default {
    components: {
        IpoHero,
        IpoCard
    },
    data() {
        return {
            ipos: ipos
        };
    }
};
</script>
