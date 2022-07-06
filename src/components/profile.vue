<template>
    <div class="profile-picture">
        <img src="/images/profile.jpg" alt="Morten Sørensen" />

        <div class="name">Morten S&oslash;rensen</div>
        <div class="position">Interface Consultant at Netcompany</div>
    </div>

    <h1 class="hidden">Profile</h1>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.profile-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 2rem;
    padding: 0 0 2rem;
    color: $light;
    border-bottom: 2px dashed rgba($light, .15);

    > p {
        margin: 0;
    }

    img {
        width: 125px;
        height: 125px;
        border-radius: 50%;
        border: 2px solid $gray;
    }

    .name {
        margin: .625rem 0 0;
        font-size: 1.125rem;
        font-weight: 500;
    }

    .position {
        font-size: .8125rem;
        color: $text-color;
    }
}
</style>
