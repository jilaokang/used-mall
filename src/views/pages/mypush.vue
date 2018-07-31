<template>
    <div class="mygood">
        <div class="weui-cells" v-for="item in data">
            <div class="weui-cell">
                <div class="weui-cell___hd mygood-img" style="width: 50px"
                     :style="'background-image:url('+item.g_pic +')'">
                </div>
                <div class="content">
                    <p class="title">{{item.g_title}}</p>
                    <div class="money">￥{{item.g_price}}</div>
                    <div class="buttonlist">
                        <router-link :to="'app/push#'+item.id">
                            <a href="#" class="weui-btn weui-btn_mini weui-btn_primary">编辑</a>
                        </router-link>
                        <a href="#" class="weui-btn weui-btn_mini weui-btn_primary" @click="del(item.id)">删除</a>
                    </div>
                </div>
            </div>
        </div>
        <nomore></nomore>
    </div>
</template>

<script>
    import nomore from '../components/nomore'
    import {mypush, delgood} from "../../service/data";


    export default {
        name: "mygood",
        data() {
            return {
                data: {}
            }
        },
        components: {nomore},
        created() {
            this.datainit()
        },
        methods: {
            del(id) {
                delgood(id)
                    .then(res => {
                        this.datainit()
                        weui.alert(res.data.msg)
                    })
            },
            datainit() {
                mypush().then(res => {
                    res.data.list.forEach((value,index)=>{
                        res.data.list[index].g_pic = JSON.parse(res.data.list[index].g_pic)
                    })

                    this.data = res.data.list

                    // 垃圾json解析器
                    // let formdata = res.data.list
                    // let formarr = []
                    // res.data.list.forEach((value, index) => {
                    //     // 清除字符串中的 \
                    //     let str = value.g_pic.replace('', '').replace(/[\\]/g, '');
                    //     // 解析字符串取第一个值
                    //     formarr.push(str.split('"')[1])
                    //     // 值替换
                    //     formdata[index].g_pic = formarr[index]
                    // });
                    // this.data = formdata;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .mygood {
        .mygood-img {
            @include img;
            background: {
                position: center;
                size: cover;
            }
        }
    }

    .content {
        padding: 12px;
        .title {
            position: absolute;
            top: 12px;
        }
        .money {
            position: absolute;
            bottom: 12px;
        }
        .buttonlist {
            position: absolute;
            right: 12px;
            bottom: 0;
            a:first-child {
                margin-right: 12px;
            }
        }
    }

</style>