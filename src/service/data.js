import axios from 'axios'

let openid = "6C283EC8738F4CA70E64FFC46DFAF51E";
// let openid = '';
// axios.get('http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/get_openid')
//     .then(res => {
//         openid = res.data.openid;
//     })
//     .catch(err => {
//         console.log(err)
//
//         window.location = 'http://whschoolbbs.tenqent.com/index.php?s=/Wechat/Deng/deng'
//
//     })


const transFormer = (data) => {
    let str = '';
    if (data) {
        Object.keys(data).forEach(v => {
            str += `${v}=${data[v]}&`
        });
    }
    return str
};


function getData(method, url, data, needTransform) {
    return axios({
        url: url,
        method: method,
        data: data,
        transformRequest: needTransform ? undefined : transFormer,
        headers: {
            'Content-Type': needTransform ? 'application/json' : 'application/x-www-form-urlencoded'
        }
    })
}

// 1，首页
export const home = getData('get', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Shouye/index')

// 2，首页更多
export const homemore = (type, page) => getData('get', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/index', {
    type,
    page
});

// 3，商品详情
export const gooddetail = (id) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/goodxq', {id: id});

// 4，商品的分类
export const goodclass = () => getData('get', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/fenlei');

// 5，发布商品
export const goodpush = (obj) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/add_good', {
    openid: obj.openid,
    g_title: obj.g_title,
    g_price: obj.g_price,
    g_content: obj.g_content,
    cate_id: obj.cate_id,
    g_pic: obj.g_pic
});

// 6，消息列表
export const messagelist = () => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/zxlist', {openid: openid});

// 7，聊天咨询窗口的信息显示
export const messagechat = (id, fa_openid) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/zixun', {
    openid,
    id,
    fa_openid
});

// 8，提交聊天内容
export const messagepush = (fa_openid, art_id, message) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/add_zixun', {
    openid,
    fa_openid,
    art_id,
    message
});

// 9，个人中心
export const personcenter = () => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/userinfo', {openid});

// 10，我的发布
export const mypush = () => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/mygood', {openid});

// 11，编辑商品页面信息
export const mygood = (id) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/goodxqs', {id});

// 12，编辑提交商品
export const pushgood = (id, g_title, g_pic, cate_id, g_price, g_content) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/good_edit', {
    id,
    g_title,
    g_pic,
    cate_id,
    g_price,
    g_content
});

// 13，删除我发布的商品
export const delgood = (id) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/dels', {id});

// 14，我的收藏
export const lovegood = () => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/scang', {openid});

// 15，添加和删除收藏
export const deladd = (art_id) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/add_collect', {
    openid,
    art_id
});

// 16，产品搜索
export const Search = (keyword) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Search/search', {keyword});

// 17，商品搜索
export const Searchlist = () => getData('get', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Search/keyword')

// 18，商品分类
export const goodsort = (cate_id) => getData('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/goodlist', {cate_id: cate_id})