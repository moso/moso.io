<template>
    <div class="profile-picture">
        <img src="/images/profile.png" alt="Morten Sørensen" />

        <div class="name">Morten S&oslash;rensen</div>
        <div class="position">Front-End Developer at TV MIDTVEST</div>
    </div>

    <h1 class="hidden">Profile</h1>

    <h1 id="hi">👋🏻 Hi,</h1>

    <p>I'm Morten, a Danish Front-End Engineer, currently making my skillset useful at <a href="https://tvmidtvest.dk" target="_blank" rel="noopener" title="TV MIDTVEST">TV MIDTVEST</a>.</p>

    <p>With 15+ years of experience with making websites, I see myself as a veteran. I often tell people that I'm from the generation who designed websites for IE6 in XHTML Strict, which, for the unfamiliar, was utterly horrible.</p>

    <p>Today I'm using <a href="https://jamstack.org/#what" target="_blank" rel="noopener" title="JAMstack">JAMstack</a> and make websites for modern browsers. I love the possibilities JavaScript gives me, and how I can program my styling with Sass. My natural curiosity have also driven me into more DevOps-oriented tasks such as running my own servers, setting up CI/CD's and CDN's, and handling backend.</p>

    <p>When not coding at work, I maintain my open-source projects. Being a project owner of an open-source project takes a lot of time, but I'm enjoying every moment of it. The idea that my knowledge is used by someone else, and most importantly that it's all available for free, is very rewarding for me. I also try to improve other projects by contributing, where the most profilic project is perhaps <a href="https://getbootstrap.com" target="_blank" rel="noopener" title="Bootstrap">Bootstrap</a>.</p>

    <p>When I'm not building webexperiences, I love spending time with my family. I also have a hobby where I activate small, credit card-sized computers. <span class="no-print">And I regularly stream my <a href="https://guildwars2.com" target="_blank" rel="noopener" title="Guild Wars 2">Guild Wars 2</a>-adventures on <a href="https://twitch.com/arkyfinity" target="_blank" rel="noopener" title="Twitch">Twitch</a> where I go by the nickname <a href="https://arky.gg" target="_blank" rel="noopener" title="Arky">Arky</a>.</span></p>
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
        width: 150px;
        height: 150px;
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
