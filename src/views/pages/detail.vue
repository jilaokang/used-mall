<template>
    <div id="footer">
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    {{good.data.g_title}}
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd money">￥{{good.data.g_price}}</div>
                <div class="weui-cell_hd look">浏览：<span>{{good.data.onclick}}</span></div>
            </div>
        </div>
        <div class="weui-cells__title">商品详情</div>
        <div class="weui-cells content">
            <div class="weui-cell">
                {{good.data.g_content}}
            </div>
            <div class="imgcontent weui-cell">
                <img :src="'http://whschoolbbs.tenqent.com' + good.data.g_pic">
            </div>
        </div>

        <div class="weui-cells footer">
            <div class="weui-cell">
                <div class="weui-cell__hd icon">
                    <span class="iconfont icon-person"></span>
                    <p>卖家</p>
                </div>
                <div class="weui-cell__hd" :class="icon?'icon-active':'icon'" @click="addlove">
                    <span class="iconfont icon-shoucang1"></span>
                    <p>收藏</p>
                </div>
                <div class="weui-cell__bd">
                    <router-link :to="'chat#'+good.data.id+'#'+good.data.openid">
                        <a href="javascript:;" class="weui-btn weui-btn_primary">聊一聊</a>
                    </router-link>
                </div>
            </div>
        </div>
        <nomore></nomore>
    </div>
</template>

<script>
    import nomore from '../components/nomore'
    import {gooddetail, deladd} from '../../service/data'

    export default {
        components: {nomore},
        data() {
            return {
                good: {
                    data: {
                        g_title: "",
                    }
                },
                icon: false
            }
        },
        created() {
            let hash = location.hash;
            let goodid = hash.split("#")[2]

            gooddetail(goodid)
                .then(res => {
                        this.good = res.data;
                        console.log(res.data)
                    }
                )
        },
        methods: {
            addlove() {
                let hash = location.hash.split('#')[2]
                this.icon = !this.icon;
                deladd(hash).then(res => console.log(res.data))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    #footer {
        margin-bottom: 166px;
    }

    .imgcontent {
        img {
            border-radius: $boder-radius;
        }
    }

    .weui-cell {
        &:after {
            content: none;
        }
        &:before {
            content: none;
        }
    }

    .content {
        padding-bottom: 40px;
        line-height: 1.55;
    }

    .footer {
        bottom: 0;
        width: 100%;
        position: fixed;
        text-align: center;
        border-top: 1px solid $color-grey;
        background-color: #eee;
        .weui-cell__hd {
            line-height: $line-height;
            padding: 0 $padding;
            .iconfont {
                font-size: $font-size-icon;
            }
            p {
                font-size: $font-size-sm;
            }
        }
        .weui-cell__bd {
            text-align: right;
            a {
                width: 80%;
                margin-right: 0;
            }
        }
    }

    .look {
        font-size: $font-size-sm;
        color: $color-grey__deep;
    }

    .icon {
        color: #888;
    }

    .icon-active, .icon-active p {
        color: $color-orange;
    }
</style>