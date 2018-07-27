<template class="message">
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__hd">
                <img class="avator" src="../../assets/img/avator.jpg">
            </div>
            <div class="weui-cell__bd content">
                <h5 class="user">蔡豪杰</h5>
                <p class="mes">你的快递到了</p>
                <p class="time">1小时前</p>
            </div>
            <div class="weui-cell__hd goodimg">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message"
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .avator {
        @include img-avator
    }

    .content {
        padding: 0 10px;
        line-height: $line-height-font;
        .user{
            font-size: $font-size;
        }
        .mes {
            color: $color-grey__deep;
            font-size: $font-size-sm;
        }
        .time {
            color: $color-grey__deep;
            font-size: $font-size-xs;
        }
    }

    .goodimg {
        @include img;
        background: {
            position: center;
            repeat: no-repeat;
            size: cover;
            image: url("../../assets/img/6E6F1DB90378F60CFAE0F9DE2C00B79B.jpg");
        }
    }


</style>