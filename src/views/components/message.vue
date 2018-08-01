<template class="message">
    <div>
        <div class="weui-cells" v-for="item of data.mess">
            <router-link :to="'/chat#' + item.good_id +'#'+item.openid">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img class="avator" :src="item.headimgurl">
                    </div>
                    <div class="weui-cell__bd content">
                        <h5 class="user">{{item.nickname}}</h5>
                        <p class="mes">{{item.contents}}</p>
                        <p class="time">{{item.now_time}}</p>
                    </div>
                    <div class="weui-cell__hd goodimg"
                         :style="'background-image:url('+JSON.parse(item.g_pic)+')'">
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message",
        props: ['data']
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
        .user {
            color: #333;
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
        }
    }


</style>