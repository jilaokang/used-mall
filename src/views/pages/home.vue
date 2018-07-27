<template>
    <div>
        <router-view style="margin-bottom: 166px"></router-view>
        <menufooter></menufooter>
    </div>
</template>

<script>
    import menufooter from '../components/footer'

    export default {
        name: "home",
        components: {menufooter}
    };
</script>

<style lang="scss">
    @import url("http://at.alicdn.com/t/font_764875_t9a25w9ik2.css");
    @import "../scss/var";

    p {
        color: #222;
    }

    img {
        width: 100%;
        height: 100%;
    }

    .topimg {
        height: 20vh;
    }

    .list-title {
        line-height: $line-height-title;
        .list-title-more {
            color: $color-orange;
        }
        .list-title__title {
            font-weight: 800;
        }
    }

    hr {
        border-top: 0;
        margin: {
            bottom: 16px;
        }
    }

    .money {
        color: $color-orange;
    }

</style>
