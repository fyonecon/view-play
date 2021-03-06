/*页面和模块信息配置*/
/*路由注册（白名单）*/

// 所有页面公用js、css文件，全局有效
const page_public_file = {
    "js": [
        "public/js/assist.js",  // 帮助框架可以在多种苛刻条件下正常使用
        "public/js/vue.min.js",  // vue.js框架，实现双向绑定
        "public/js/all.js",
    ],
    "css": [
        "public/css/all.css",
        "public/css/animate.min.css",
    ],
};


// pages模块页面白名单配置
const pages = [
    // 开始-其他页面模块
    { // 页面模块-404
        "route"     : "404",  // url中#route=xxx，便于定位页面
        "file_path" : "404/404.htm", // 实际文件路径+文件名，为了方便起见，文件后缀统一用“htm”
        "title"     : "404-页面没找到",  // 页面title
        "file"      : [  // 本页面需要引入的局部资源文件
            {
                "js": [
                    "pages/404/404.js",  // 模块页面js，模块中有效
                ],
                "css": [
                    "pages/404/404.css?",  // 模块页面css，模块中有效
                ],
            },
        ],
    },
    { // 页面模块-home
        "route"     : "home",
        "file_path" : "home/home.htm",
        "title"     : "主页",
        "file"      : [
            {
                "js": [
                    "pages/home/home.js",
                ],
                "css": [
                    "pages/home/home.css",
                ],
            },
        ],
    },
    { // 页面模块
        "route"     : "ag",
        "file_path" : "ag/ag.htm",
        "title"     : "服务提醒Ag",
        "file"      : [
            {
                "js": [
                    "pages/ag/ag.js",
                    "pages/tts/voice.js",
                ],
                "css": [
                    "pages/ag/ag.css",
                ],
            },
        ],
    },
    { // 页面模块
        "route"     : "au",
        "file_path" : "au/au.htm",
        "title"     : "服务提醒Au",
        "file"      : [
            {
                "js": [
                    "pages/au/au.js",
                    "pages/tts/voice.js",
                ],
                "css": [
                    "pages/au/au.css",
                ],
            },
        ],
    },
    { // 页面模块
        "route"     : "tts",
        "file_path" : "tts/tts.htm",
        "title"     : "服务提醒tts",
        "file"      : [
            {
                "js": [
                    "pages/tts/tts.js",
                    "pages/tts/voice.js",
                ],
                "css": [
                    "pages/tts/tts.css",
                ],
            },
        ],
    },
    // 结束-其他页面模块

    // 开始-模块范本
    { // 页面模块-vue
        "route"     : "vue",
        "file_path" : "vue/vue.htm",
        "title"     : "测试vue.js双向绑定",
        "file"      : [
            {
                "js": [
                    "pages/vue/vue-js.js",
                ],
                "css": [
                    "pages/vue/vue-css.css",
                ],
            },
        ],
    },
    { // 页面模块-test
        "route"     : "test",
        "file_path" : "test/test.htm",
        "title"     : "测试test",
        "file"      : [
            {
                "js": [
                    "pages/test/test.js",
                ],
                "css": [
                    "pages/test/test.css?",
                ],
            },
        ],
    },
    // 结束-模块范本

    { // 页面模块-FM
        "route"     : "fm",
        "file_path" : "fm/fm.htm",
        "title"     : "红杏出墙FM",
        "file"      : [
            {
                "js": [
                    "pages/fm/fm.js",
                ],
                "css": [
                    "pages/fm/fm.css",
                ],
            },
        ],
    },

];

