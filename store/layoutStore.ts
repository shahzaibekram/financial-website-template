import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        hideNavbarAndFooter: false,
        hideCTA: false,
        hideLegal: false,
        hideCookieConsent: false,
    }),
    actions: {
        hideAll() {
            this.hideNavbarAndFooter = true;
            this.hideCTA = true;
            this.hideLegal = true;
            this.hideCookieConsent = true;
        },
        showAll() {
            this.hideNavbarAndFooter = false;
            this.hideCTA = false;
            this.hideLegal = false;
            this.hideCookieConsent = false;
        },
    },
})
