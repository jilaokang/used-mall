<template>
    <div>
        <div class="weui-search-bar" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索"
                           @input="search"/>
                    <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
                </div>
                <label for="search_input" class="weui-search-bar__label" id="search_text">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
        </div>
        <div class="weui-cells weui-cells_access search_show" id="search_show">
            <div class="weui-cell" style="padding: 0">
                <div class="weui-cell__bd weui-cell_primary">
                    <good :data="resultarr.data"></good>
                </div>
            </div>
        </div>
        <div class="weui-cells__title">热门搜索</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <span class="label" v-for="(item,index) in searchspan"
                      @click="searchSpan(index)">{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {Search} from "../../service/data";
    import good from '../components/good'

    export default {
        props: ['searchdata', 'searchspan'],
        components: {good},
        data() {
            return {
                resultarr: {
                    data: []
                }
            }
        },
        methods: {
            searchinit() {
                let dom = document.getElementsByClassName('weui-search-bar__input')[0]
                Search(dom.value).then(res => {
                    this.resultarr = []
                    if (res.data.error != -1) {
                        this.resultarr.data = res.data.data || [];
                    }
                })
            },
            search() {
                this.searchinit()
            },
            searchSpan(index) {
                let dom = document.getElementsByClassName('weui-search-bar__input')[0]
                dom.value = this.searchspan[index];
                this.searchinit();
            },

        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";

    .label {
        color: $color-grey__deep;
        background: $color-grey;
        border-radius: $boder-radius;
        padding: 4px $padding;
        font-size: $font-size-sm;
        margin-left: 16px;
        &:first-child {
            margin-left: 0;
        }
    }

    .weui-search-bar__cancel-btn {
        color: $color-orange !important;
    }

    .weui-cell__bd {
        padding: 0;
    }

    #search_show {
        width: 100%;
        position: absolute;
        z-index: 999;
    }
</style>