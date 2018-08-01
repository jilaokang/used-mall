<template>
    <div>
        <div id="carmer">
            <div class="iconfont icon-scarmera"></div>
            <input id="file" type="file" @change="changeImg"
                   style="opacity: 0;float: left;right: 10rem;width: 100vw;margin-top: -60px;height: 10vh">
        </div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-uploader">
                    <div class="weui-uploader__bd">
                        <ul class="weui-uploader__files" id="uploaderFiles">
                            <li class="weui-uploader__file" v-for="item in data.g_pic"
                                :style="'background-image:url('+item+')'"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input v-model="data.g_title" class="weui-input"
                           placeholder="请填写产品标题（品牌，型号）"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea v-model="data.g_content" class="weui-textarea" rows="5" placeholder="请描述产品详情">
                    </textarea>
                    <div class="weui-textarea-counter"><span>0</span>/200</div>
                </div>
            </div>
        </div>
        <placeholder></placeholder>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_select weui-cell_select-after">
                <div class="weui-cell__hd">
                    <label class="weui-label">分类</label>
                </div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="select2" @change="getsort">
                        <option v-for="item in list" :value="item.sort">{{item.cate_name}}</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <span>￥</span>
                </div>
                <div class="weui-cell__hd">
                    <input v-model="data.g_price" class="weui-input" type="number" pattern=""
                           style="width: 60px;text-align: center"
                           placeholder="00.0"/>
                </div>
                <div class="weui-cell__hd">
                    <span>元</span>
                </div>
            </div>
            <placeholder></placeholder>
        </div>
        <placeholder></placeholder>
        <div class="weui-cells">
            <div class="weui-cell">
                <a class="weui-btn weui-btn_primary" @click="pushgood" style="width: 60%">发布商品</a>
            </div>
        </div>
    </div>
</template>

<script>
    import placeholder from '../components/placeholder'
    import {goodclass, goodpush, mypush} from '../../service/data'

    export default {
        name: "push",
        components: {placeholder},
        data() {
            return {
                data: {
                    id: "",
                    openid: "6C283EC8738F4CA70E64FFC46DFAF51E",
                    g_title: "",
                    g_price: "",
                    g_content: "",
                    cate_id: 1,
                    g_pic: []
                },
                list: [],
                listimg: []
            }
        },
        created() {
            goodclass()
                .then(res => {
                    this.list = res.data.list;
                    this.data.cate_id = res.data.list[0].cate_id
                })

            let hash = location.hash.split("#")[2];

            if (hash) {
                mypush(hash).then(res => {
                    console.log(this.data)

                    for (let item of res.data.list) {
                        item.id === hash ? this.data = item : null;
                    }
                    this.data.g_pic = JSON.parse(this.data.g_pic)
                })
            }

        },
        methods: {
            changeImg(e) {
                for (const file of e.target.files) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (f) => {
                        let arr = [];
                        arr[0] = f.target.result.toString();
                        this.data.g_pic = this.data.g_pic.concat(...arr);
                        weui.alert(`第${this.data.g_pic.length}图片上传成功`)
                    };
                }
                console.log(this.data.g_pic)

            },
            getsort() {
                let dom = document.querySelector('.weui-select')
                this.data.cate_id = dom.value
            },
            pushgood() {
                console.log(this.data)
                goodpush(this.data).then(res => {
                    weui.alert(res.data.msg)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    #postpic {
        width: 100vh;
        height: 30vh;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .weui-btn {
        line-height: 2.5;
        font-size: 1rem;
    }

    #carmer {
        width: 100vh;
        height: 20vh;
        display: table-cell;
        vertical-align: middle;
        background-color: white;
        border-bottom: 1px solid $color-grey__bg;
        .iconfont {
            width: 100%;
            font-size: 2rem;
            text-align: center;
        }
    }
</style>