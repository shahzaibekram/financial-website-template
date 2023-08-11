<template>
    <footer class="footer p-10 bg-base-200 text-base-content">
        <div>
            <nuxt-link to="/">
                <img :src="logoImage" alt="Incentive Investment Funds ICAV Logo" class="w-auto h-24 object-cover" />
            </nuxt-link>
            <p>Incentive Investment Funds ICAV<br />Providing reliable financial services since 2014</p>
        </div>
        <div>
            <span class="footer-title">Services</span>
            <nuxt-link to="/fixed-income" class="link link-hover">Fixed Income</nuxt-link>
            <nuxt-link to="/equities" class="link link-hover">Equities</nuxt-link>
            <nuxt-link to="/commodities" class="link link-hover">Commodities</nuxt-link>
            <nuxt-link to="/foreign-exchange" class="link link-hover">Foreign Exchange</nuxt-link>
            <nuxt-link to="/futures-options" class="link link-hover">Futures and Options</nuxt-link>
        </div>
        <div>
            <span class="footer-title">Company</span>
            <nuxt-link to="/about" class="link link-hover">About us</nuxt-link>
            <nuxt-link to="/contact-us" class="link link-hover">Contact</nuxt-link>
            <nuxt-link to="/jobs" class="link link-hover">Jobs</nuxt-link>
            <nuxt-link to="/press-kit" class="link link-hover">Press kit</nuxt-link>
        </div>
        <div>
            <span class="footer-title">Legal</span>
            <nuxt-link to="/terms" class="link link-hover">Terms of use</nuxt-link>
            <nuxt-link to="/privacy-policy" class="link link-hover">Privacy policy</nuxt-link>
            <nuxt-link to="/cookie-policy" class="link link-hover">Cookie policy</nuxt-link>
        </div>
    </footer>
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
