<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:px-8">
        <div v-for="service in services" :key="service.title"
            class="card min-w-0 w-full lg:w-96 bg-base-100 shadow-xl card-normal">
            <figure class="image-full">
                <img :src="service.image" :alt="service.title" class="w-full" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{ service.title }}</h2>
                <p>{{ service.description }}</p>
                <div class="card-actions justify-end">
                    <nuxt-link :to="service.path" class="btn btn-primary">Learn More</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FixedIncomeImage from '@/assets/images/services_cards/fixed_income.png';
import EquitiesImage from '@/assets/images/services_cards/equities.png';
import CommoditiesImage from '@/assets/images/services_cards/commodities.png';
import ForeignExchangeImage from '@/assets/images/services_cards/foreign_exchange.png';
import FuturesAndOptionsImage from '@/assets/images/services_cards/futures_and_options.png';
import IpoImage from '@/assets/images/services_cards/ipo.png';

export default {
    data() {
        return {
            services: [
                {
                    title: 'Fixed Income',
                    description: 'Servicing the needs of traditional asset managers...',
                    image: FixedIncomeImage,
                    path: '/path-to-fixed-income', // update path
                },
                {
                    title: 'Equities',
                    description: 'Incentive Investment is a specialised Equity broker...',
                    image: EquitiesImage,
                    path: '/path-to-equities', // update path
                },
                {
                    title: 'Commodities',
                    description: 'Metals, Ags and Softs, Energy & Emissions...',
                    image: CommoditiesImage,
                    path: '/path-to-commodities', // update path
                },
                {
                    title: 'Foreign Exchange',
                    description: 'Incentive Investment offers its customers 24-hour global Foreign Exchange coverage...',
                    image: ForeignExchangeImage,
                    path: '/path-to-foreign-exchange', // update path
                },
                {
                    title: 'Futures and Options',
                    description: 'Our global futures and options product offering...',
                    image: FuturesAndOptionsImage,
                    path: '/path-to-futures-and-options', // update path
                },
                {
                    title: 'IPOs and Pre-IPO investments',
                    description: 'Expert consultation and opportunities in IPOs and Pre-IPO investments...',
                    image: IpoImage,
                    path: '/services/IPOs',
                },
            ],
        }
    }
}
</script>
