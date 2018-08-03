<template>
    <div>
        <div class="weui-cells good" v-for="item in data">
            <router-link :to="'/detail#'+item.id">
                <div class="weui-cell">
                    <div class="weui-cell__hd good__img" :style="'background-image:url('+JSON.parse(item.g_pic)[0]+')'">
                    </div>
                    <div class="weui-cell__bd good—list">
                        <div class="good-list__title">
                            {{item.g_title}}
                        </div>
                        <div class="good-list ">
                            <p style="float: left">￥{{item.g_price}}</p>
                            <p style="float: right">{{item.cate_name}}</p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .good {
        .good__img {
            @include img;
            background: {
                /*image: url("../../assets/img/6E6F1DB90378F60CFAE0F9DE2C00B79B.jpg");*/
                position: center;
                repeat: no-repeat;
                size: cover;
            }
        }
    }

    .good—list {
        height: 4.75rem;
        padding-left: $font-size-sm;
        .good-list__title {
            font-size: $font-size;
            height: 3rem;
            color: #555;
        }
        .good-list {
            p:first-child {
                color: $color-orange;
            }
            p:last-child {
                color: $color-grey__deep;
                font-size: $font-size-sm;
            }
        }
    }

    .weui-cell {
        box-shadow: 0 0 6px #ccc;
        border-radius: 5px;
        margin:8px 16px;
    }
</style>