import axios from 'axios'

let openid = "6C283EC8738F4CA70E64FFC46DFAF51E";

// let openID = axios.get('http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/get_openid')
//     .then(res => {
//         console.log(res.data)
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


function _axios(method, url, data, needTransform) {
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
export const home = _axios('get', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Shouye/index')

// 2，首页更多
export const homemore = (type, page) => _axios('get', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/index', {
    type,
    page
});

// 3，商品详情
export const gooddetail = (id) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/goodxq', {id: id});

// 4，商品的分类
export const goodclass = () => _axios('get', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/fenlei');

// 5，发布商品
export const goodpush = (obj) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/add_good', {
    openid: obj.openid,
    g_title: obj.g_title,
    g_price: obj.g_price,
    g_content: obj.g_content,
    cate_id: obj.cate_id,
    g_pic: obj.g_pic
});

// 6，消息列表
export const messagelist = () => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/zxlist', {openid: openid});

// 7，聊天咨询窗口的信息显示
export const messagechat = (id, fa_openid) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/zixun', {
    openid:openid,
    id:id,
    fa_openid
});

// 8，提交聊天内容
export const messagepush = (fa_openid, art_id, message) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Good/add_zixun', {
    openid: openid,
    fa_openid,
    art_id,
    message
});

// 9，个人中心
export const personcenter = () => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/userinfo', {openid: openid});

// 10，我的发布
export const mypush = () => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/mygood', {openid});

// 11，编辑商品页面信息
export const mygood = (id) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/goodxqs', {id});

// 12，编辑提交商品
export const pushgood = (id, g_title, g_pic, cate_id, g_price, g_content) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/good_edit', {
    id,
    g_title,
    g_pic,
    cate_id,
    g_price,
    g_content
});

// 13，删除我发布的商品
export const delgood = (id) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/dels', {id});

// 14，我的收藏
export const lovegood = () => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/scang', {openid});

// 15，添加和删除收藏
export const deladd = (art_id) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/UserInfo/add_collect', {
    openid,
    art_id: art_id
});

// 16，产品搜索
export const Search = (keyword) => _axios('post', 'http://whschoolbbs.tenqent.com/index.php?s=/Api/Search/search', {keyword});


