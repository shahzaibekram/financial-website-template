<template>
    <div class="relative bg-gray-200 overflow-hidden h-96 max-w-full mx-auto">
        <img :src="backgroundUrl" alt="Our Services" title="Our Services"
            class="w-full h-full object-cover object-center-lower" />
        <div class="absolute inset-0 flex items-end justify-start">
            <div class="max-w-1024 ml-[25%] px-4 py-2 bg-white bg-opacity-50">
                <h1 class="text-4xl font-bold">Our Services</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            backgroundUrl: 'assets/images/our-services/our-serciecs-hero.png',
        }
    }
};
</script>

<style scoped></style>
