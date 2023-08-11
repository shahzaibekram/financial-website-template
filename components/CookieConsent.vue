<template>
    <div v-if="show" class="fixed bottom-0 w-full p-4 bg-white border-t shadow-lg" id="cookie-consent">
        <div class="max-w-screen-lg mx-auto flex items-center justify-between">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="stroke-info shrink-0 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="ml-2">We use cookies to improve your experience on our site. <a href="/cookie-policy"
                        class="text-blue-500 underline">Learn more</a></span>
            </div>
            <div>
                <button class="btn btn-sm" @click="deny">Deny</button>
                <button class="btn btn-sm btn-primary" @click="accept">Accept</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const show = ref(false);

        onMounted(() => {
            if (process.client) {
                show.value = !localStorage.getItem('cookie-consent');
            }
        });

        const accept = () => {
            if (process.client) {
                localStorage.setItem('cookie-consent', 'accepted');
            }
            show.value = false;
        };

        const deny = () => {
            if (process.client) {
                localStorage.setItem('cookie-consent', 'denied');
            }
            show.value = false;
        };

        return { show, accept, deny };
    },
};
</script>

<style>
#cookie-consent {
    z-index: 1000;
}
</style>
