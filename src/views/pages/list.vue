<template>
    <div>
        <div class="weui-flex">
            <div class="weui-flex__item" @click="basetime">
                时间 <span>{{time?'&#9660;':'&#9650;'}}</span>
            </div>
            <div class="weui-flex__item" @click="basemoney">
                价格 <span>️{{money?'&#9660;':'&#9650;'}}</span>
            </div>
        </div>
        <good :data="goodarr.data" class="why"></good>
        <nomore></nomore>
    </div>
</template>

<script>
    import good from '../components/good'
    import nomore from '../components/nomore'
    import {home, goodsort} from "../../service/data"

    export default {
        name: "list",
        data() {
            return {
                goodarr: {
                    data: []
                },
                money: true,
                time: true
            }
        },
        components: {good, nomore},
        created() {
            home.then(res => {
                switch (location.hash) {
                    case '#/list#tui': {
                        this.goodarr.data = res.data.tui;
                        break;
                    }
                    case '#/list#look': {
                        this.goodarr.data = res.data.look;
                        break;
                    }
                    default: {
                        let hash = location.hash.split('#')[2];
                        goodsort(hash)
                            .then(res=>{
                                this.goodarr.data = res.data.data
                                console.log(res.data)
                            })
                    }

                }
                console.log(res.data)
            })
        },
        methods: {
            basetime() {
                this.time = !this.time;
                this.goodarr.data = this.goodarr.data.sort((a, b) => {
                    return a.g_time - b.g_time ? 1 : -1;
                })
            },
            basemoney() {
                this.money = !this.money;
                this.goodarr.data = this.goodarr.data.sort((a, b) => {
                    return b.g_price - a.g_price ? 1 : -1;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .weui-flex {
        text-align: center;
        background: white;
        border-bottom: 1px solid $color-grey;
        line-height: 3;
        .weui-flex__item {
            span {
                font-size: 0.8rem;
            }
            &:hover {
                color: $color-orange;
            }
        }
    }
</style>