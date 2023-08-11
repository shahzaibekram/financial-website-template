<template>
    <div class="card bg-base-100 shadow-xl m-4 w-full">
        <figure>
            <img :src="member.imageUrl" :alt="member.name" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{ member.name }}</h2>
            <p class="font-bold">{{ member.title }}</p>
            <div class="card-actions">
                <button class="btn btn-primary" @click="$emit('viewBio', member)">View Bio</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ['member'],
};
</script>
