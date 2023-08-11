<template>
    <div class="card bg-base-100 shadow-lg flex flex-col justify-start items-start p-4 rounded-lg" :key="ipo.name">
        <div class="flex justify-between items-start w-full">
            <div class="card-body">
                <h2 class="card-title text-lg font-semibold text-primary">
                    <a :href="`/${ipo.name.toLowerCase()}_stock/`" class="hover:underline text-primary">{{ ipo.name }}</a>
                </h2>
                <div class="flex flex-col mt-2">
                    <div class="label text-neutral text-xs font-light">Sector</div>
                    <div class="value text-accent text-sm font-semibold">{{ ipo.sector }}</div>
                </div>
                <div class="flex flex-col mt-4" v-if="ipo.valuation && ipo.valuation !== 'Not provided'">
                    <div class="label text-neutral text-xs font-light">Last Round Est. Valuation</div>
                    <div class="value text-neutral text-sm font-semibold">{{ ipo.valuation }}</div>
                </div>
            </div>
            <img class="w-16 h-16 object-cover ml-4" :src="ipo.logo" :alt="ipo.name + ' Logo'" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ipo: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
/* Add any specific styles for IpoCard.vue here */
</style>
