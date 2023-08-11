<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><nuxt-link to="/about">About Us</nuxt-link></li>
                    <li><nuxt-link to="/our-services">Our Services</nuxt-link></li>
                    <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                    <li>
                        <a>Resources</a>
                        <ul class="p-2">
                            <li><nuxt-link to="/financial-tools">Financial Tools</nuxt-link></li>
                            <li><nuxt-link to="/investment-guide">Investment Guide</nuxt-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <nuxt-link to="/">
                <a class="btn btn-ghost normal-case text-xl">
                    <img :src="logoImage" alt="Incentive Investment Logo" class="h-20 w-auto" />
                </a>
            </nuxt-link>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li><nuxt-link to="/about">About Us</nuxt-link></li>
                <li><nuxt-link to="/our-services">Services</nuxt-link></li>
                <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                <li tabindex="0">
                    <details>
                        <summary>Resources</summary>
                        <ul class="p-2">
                            <li><nuxt-link to="/financial-tools">Financial Tools</nuxt-link></li>
                            <li><nuxt-link to="/investment-guide">Investment Guide</nuxt-link></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <nuxt-link to="/contact-us" class="btn">More Info</nuxt-link>
            <nuxt-link to="/login" class="btn btn-primary ml-2">Login</nuxt-link>
        </div>

    </div>
</template>

<script>
import LogoImage from '@/assets/images/logo/incentive.png';

export default {
    data() {
        return {
            logoImage: LogoImage,
        };
    },
};
</script>
