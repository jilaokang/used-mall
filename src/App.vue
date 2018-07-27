<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "views/scss/var";

    #app {
        color: #2c3e50;
    }

    .weui-cells {
        &:after, &:before {
            content: none !important;
        }
    }

    .weui-cell__bd {
        padding: 0 8px;
    }

    body {
        background: $color-grey;
    }

    .weui-btn_primary {
        background: $color-orange !important;
        &:after {
            content: none !important;
            border: none !important;
        }
    }

    .weui-cells {
        margin-top: 0 !important;
    }
</style>
