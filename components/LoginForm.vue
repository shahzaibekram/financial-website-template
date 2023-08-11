<template>
    <div class="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div class="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-center text-gray-700">Incentive Investment</h1>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <label class="label">
                        <span class="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email Address" class="w-full input input-bordered" v-model="email" />
                </div>
                <div>
                    <label class="label">
                        <span class="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" class="w-full input input-bordered"
                        v-model="password" />
                </div>
                <a href="#" class="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                <div>
                    <button class="btn btn-block" type="submit">Login</button>
                </div>
            </form>
            <div class="mt-4 flex justify-center space-x-4">
                <NuxtLink to="/" class="text-sm text-gray-600 hover:underline">Home</NuxtLink>
                <NuxtLink to="/about" class="text-sm text-gray-600 hover:underline">About Us</NuxtLink>
                <NuxtLink to="/contact-us" class="text-sm text-gray-600 hover:underline">Contact Us</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import { useNuxtApp } from '#app'

export default {
    setup() {
        const { nuxt } = useNuxtApp()
        return { nuxt }
    },
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        handleSubmit() {
            // handle login logic here
            console.log('Email: ' + this.email + ' Password: ' + this.password);
        },
    },
};
</script>
