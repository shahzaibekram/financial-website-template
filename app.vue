<template>
  <div id="app">
    <Navbar v-if="!layoutStore.hideNavbarAndFooter" />
    <router-view />
    <CTA v-if="!layoutStore.hideCTA" />
    <Footer v-if="!layoutStore.hideNavbarAndFooter" />
    <Legal v-if="!layoutStore.hideLegal" />
    <CookieConsent v-if="!layoutStore.hideCookieConsent" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useLayoutStore } from '~/store/layoutStore'
import Navbar from '@/components/NavBar.vue';
import CTA from '@/components/CTA.vue';
import Footer from '@/components/Footer.vue';
import CookieConsent from '@/components/CookieConsent.vue';
import Legal from '@/components/Legal.vue';

export default {
  components: {
    Navbar,
    CTA,
    Footer,
    CookieConsent,
    Legal,
  },
  setup() {
    const layoutStore = useLayoutStore()

    return {
      layoutStore
    }
  }
};
</script>
