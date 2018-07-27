<template>
    <div>
        <placeholder></placeholder>
        <div class="news weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd news-title">
                    <i>最新快报</i>
                </div>
                <div class="weui-cell__bd news-content">
                    <p>李易峰出售自己的机车外套</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import placeholder from './placeholder'

    export default {
        name: "news",
        components: {
            placeholder
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .news {
        background: white;
        .news-title {
            color: transparent;
            background: -webkit-linear-gradient(120deg, #f6d365 0%, #fda085 100%);
            -webkit-background-clip: text;
            font-size: $font-size;
            width: 5rem;
            font-weight: 800;
        }
        .news-content {
            height: 1.2rem;
            line-height: 1.2rem;
            p {
                color: $color-grey__deep;
                font-size: $font-size-sm;
            }
        }
    }
</style>