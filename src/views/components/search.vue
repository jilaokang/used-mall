<template>
    <div>
        <div class="weui-search-bar" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索"/>
                    <a href="javascript:" class="weui-icon-clear" id="search_clear"></a>
                </div>
                <label for="search_input" class="weui-search-bar__label" id="search_text">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
        </div>
        <div class="weui-cells__title">热门搜索</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <span class="label">巧克力</span>
                <span class="label">冰淇淋</span>
                <span class="label">巧克力</span>
                <span class="label">冰淇淋</span>
            </div>
        </div>
        <!--<div class="weui-cells weui-cells_access search_show" id="search_show">-->
        <!--<div class="weui-cell">-->
        <!--<div class="weui-cell__bd weui-cell_primary">-->
        <!--<p>实时搜索文本</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="weui-cell">-->
        <!--<div class="weui-cell__bd weui-cell_primary">-->
        <!--<p>实时搜索文本</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="weui-cell">-->
        <!--<div class="weui-cell__bd weui-cell_primary">-->
        <!--<p>实时搜索文本</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="weui-cell">-->
        <!--<div class="weui-cell__bd weui-cell_primary">-->
        <!--<p>实时搜索文本</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "search",
        mounted() {
            weui.searchBar('#searchBar');
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
        &:first-child{
            margin-left: 0;
        }
    }
</style>