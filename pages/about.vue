<template>
    <div class="p-8">
        <div class="mx-auto max-w-7xl lg:px-8">
            <h1 class="text-4xl font-bold mb-4 mt-16">About Us</h1>

            <section class="mb-8 text-lg text-gray-700">
                <p class="mb-4">Incentive Investment is a global financial service provider and an esteemed division of
                    Incentive Group.
                    Since our establishment in 2014, we have expanded into a leading force in international financial
                    services and wealth management.</p>

                <p class="mb-4">We believe in the transformative power of high-quality financial advice and work diligently
                    daily to
                    guide numerous individuals and households toward financial security and prosperity. Our experienced team
                    of Financial Advisers provides clients with the confidence and knowledge to navigate their financial
                    journey.</p>

                <p class="mb-4">Guided by integrity, trust, and client-centric care principles, we offer access to a broad
                    spectrum of
                    financial markets, including fixed income, foreign exchange, equities, commodities, and listed
                    derivatives. Our comprehensive services cover trade processing, financing, clearing, execution, market
                    making, and electronic and voice brokerage services.</p>

                <p class="mb-4">With a solid global presence across vital financial hubs, we operate under the rigorous
                    regulations of
                    the world's leading monetary authorities. We provide access to over 50 exchanges through our
                    international network of partners and take pride in our membership with prestigious exchanges such as
                    the London Stock Exchange and the London Metals Exchange.</p>

                <p class="mb-4">Whether preparing for retirement, saving for a particular life event, or aiming to manage
                    your finances
                    better, our expert advisors are ready to assist you. Today, Embark on your financial independence
                    journey with Incentive Investment.</p>
            </section>
            <section class="mb-8">
                <h2 class="text-2xl font-bold mb-4">Senior Management</h2>
                <p class="mb-8 text-lg text-gray-700">
                    At the heart of Incentive Investment is our invaluable team, notably our Senior Management. Their wealth
                    of experience, diverse expertise, and unwavering commitment to financial excellence constitute the
                    backbone of our thriving operations.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                    <!-- Each person could be a separate component with name and title props -->
                    <TeamMember v-for="member in teamMembers" :key="member.name" :member="member" @viewBio="showMoreInfo" />
                </div>

                <p class="mt-8 text-lg text-gray-700">
                    Accomplishing your monetary aspirations could be simpler than you may believe...and it all begins with a
                    conversation. Get in touch
                </p>
            </section>

            <section class="mb-8">
                <h2 class="text-2xl font-bold mb-4">Our Journey</h2>
                <p class="mb-4 text-lg text-gray-700">
                    In June 2014, a small team of committed finance professionals founded Incentive Investment Funds Public
                    Limited Company. They aimed to leverage the dynamic shifts in the financial world, which led to the
                    inception of a future economic powerhouse on 32 Molesworth Street, Ireland.
                </p>
                <p class="mb-4 text-lg text-gray-700">
                    Our initial operations centred around local needs, gradually expanding our reach beyond Irish borders.
                    The challenging economic conditions of the mid-2010s tested us, but Incentive Investment emerged
                    resilient and more determined.
                </p>
                <p class="mb-4 text-lg text-gray-700">
                    Today, as we approach our 10th anniversary, we stand as a testament to financial excellence, thriving on
                    our client-centric approach and diverse portfolio of services. We also look forward to a future filled
                    with possibilities as we celebrate our past. Join us as we continue to shape the landscape of global
                    finance.
                </p>
            </section>
        </div>

        <!-- Modal Dialog -->
        <dialog v-if="showModal" class="modal modal-open">
            <div class="modal-box rounded-lg bg-base-100 shadow-lg mx-auto max-w-lg p-6 space-y-4">
                <div class="flex items-start space-x-4">
                    <div class="avatar">
                        <div class="w-24 h-24 rounded-full">
                            <img :src="selectedMember.imageUrl" />
                        </div>
                    </div>
                    <div>
                        <h2 class="font-bold text-xl">{{ selectedMember.name }}</h2>
                        <p class="text-sm text-gray-600 font-bold">{{ selectedMember.title }}</p>
                        <p class="text-sm text-gray-600"><span class="font-bold">Nationality:</span> {{
                            selectedMember.nationality }}</p>
                        <p class="text-sm text-gray-600"><span class="font-bold">Year of Birth:</span> {{
                            selectedMember.yearOfBirth }}</p>
                    </div>
                </div>
                <p class="text-sm">{{ selectedMember.bio }}</p>
                <div class="modal-action text-right">
                    <button class="btn bg-base-200 text-base-900" @click="closeModal">Close</button>
                </div>
            </div>
        </dialog>
    </div>
</template>

<script>
import { teamMembers } from '@/data/teamData.js';
import TeamMember from '@/components/TeamMember.vue';

export default {
    components: {
        TeamMember,
    },
    data() {
        return {
            teamMembers,
            showModal: false,
            selectedMember: null,
        };
    },
    methods: {
        showMoreInfo(member) {
            this.selectedMember = member;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>
