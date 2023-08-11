<template>
    <div class="w-screen h-screen bg-center bg-cover relative" :style="`background-image: url('${backgroundImage}')`">
        <div class="absolute inset-0 bg-black opacity-50"></div> <!-- This is the dark overlay -->
        <LoginForm />
    </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import { useLayoutStore } from '~/store/layoutStore'
import LoginForm from '@/components/LoginForm.vue';
import BackgroundImage from '@/assets/images/login/dublin.jpg';

export default {
    components: {
        LoginForm,
    },
    data() {
        return {
            backgroundImage: BackgroundImage,
        };
    },
    setup() {
        const layoutStore = useLayoutStore()

        onMounted(() => {
            layoutStore.hideAll();
        });

        onUnmounted(() => {
            layoutStore.showAll();
        });

        return {
            layoutStore
        }
    },
};
</script>

<style>
/* Your styles */
</style>
