<template>
    <div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" type="number" pattern="" placeholder="请填写产品标题（品牌，型号）"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" rows="5" placeholder="请描述产品详情">
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
                    <select class="weui-select" name="select2">
                        <option value="1">请选择分类</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <span>￥</span>
                </div>
                <div class="weui-cell__hd">
                    <input class="weui-input" type="number" pattern="" style="width: 60px;text-align: center"
                           placeholder="00.0"/>
                </div>
                <div class="weui-cell__hd">
                    <span>元</span>
                </div>
            </div>
            <placeholder></placeholder>
        </div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-uploader">
                    <div class="weui-uploader__hd">
                        <p class="weui-uploader__title">图片上传</p>
                    </div>
                    <div class="weui-uploader__bd">
                        <ul class="weui-uploader__files" id="uploaderFiles">
                            <li class="weui-uploader__file weui-uploader__file_status">
                                <div class="weui-uploader__file-content">50%</div>
                            </li>
                            <li class="weui-uploader__file weui-uploader__file_status">
                                <div class="weui-uploader__file-content">50%</div>
                            </li>
                            <li class="weui-uploader__file weui-uploader__file_status">
                                <div class="weui-uploader__file-content">50%</div>
                            </li>
                        </ul>
                        <div class="weui-uploader__input-box">
                            <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*"
                                   multiple/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <placeholder></placeholder>
        <div class="weui-cells">
            <div class="weui-cell">
                <a class="weui-btn weui-btn_primary" style="width: 60%">发布商品</a>
            </div>
        </div>
    </div>
</template>

<script>
    import placeholder from '../components/placeholder'

    export default {
        name: "push",
        components: {placeholder}
    }
</script>

<style lang="scss" scoped>
    #postpic {
        width: 100vh;
        height: 30vh;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
</style>