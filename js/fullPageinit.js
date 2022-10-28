pageEngine.init(".box",[])
.addSection("toutiao")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/zjtdbj.png)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/zjtplogo.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "今日头条",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "今日头条是一款个性化资讯推荐引擎产品，致力于连接人与信息，让优质、丰富的信息得到高效、精准的分发，为用户创造价值。"
    },
    p2text : {
        text : "今日头条目前拥有科技、体育、健康、美食、教育、三农、国风、NBA 等超过 100 个垂直领域，覆盖了图文、图集、小视频、短视频、短内容、直播、小程序等多种信息体裁。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("douyin")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/dybj.jpg)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/dylogo.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "抖音",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "抖音是一个帮助用户表达自我，记录美好生活的短视频平台。截至 2020 年 8 月，抖音日活跃用户超过 6 亿，并继续保持高速增长。"
    },
   
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})


.addSection("douyinfire")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/dyfirebj.jpg)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/dyfirelogo.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "抖音火山小视频",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "抖音火山版即品牌升级后的火山小视频，在抖音火山版，交到更多的朋友，看见更大的世界。海量用户在抖音火山版分享千行万业，交流兴趣技能，分享真实生活。"
    },
    p3text : {
        text : "更多信息，请访问：https://www.huoshan.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("xigua")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/xiguabj.jpg)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/xigualogo.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "西瓜视频",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "西瓜视频是一个开眼界、涨知识的视频 App（Informative Video Platform），作为国内领先的中视频平台，它源源不断地为不同人群提供优质内容，让人们看到更丰富和有深度的世界，收获轻松的获得感，点亮对生活的好奇心。"
    },
    p2text : {
        text : "目前平台月活跃用户数超过 1.8 亿，日均播放量超过 40 亿，用户平均使用时长超过 100 分钟。"
    },
    p3text : {
        text : "更多信息，请访问：https://www.ixigua.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("feishu")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/fwbj.jpg)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/fslogo.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "飞书",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "飞书是新一代企业办公套件，整合即时沟通、日历、音视频会议、在线文档、云盘、工作台等功能于一体，为企业提供全方位协作解决方案，成就组织和个人，更高效、更愉悦。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("dongchedi")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/dongche-bg2.jpg)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/dongchedi_square.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "懂车帝",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "懂车帝是“看车、选车、买车”一站式汽车媒体和服务平台，产品基于个性化推荐引擎帮助用户发现感兴趣的汽车内容，同时配有车型库、360 度全景看车等选车工具，首创短视频社区“车友圈”，为用户打造内容 + 社区 + 工具的多元生态。目前，懂车帝已经成长为增长最快的汽车类手机应用。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("xingfuli")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/xfl-new.png)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/9a6ad9eed93feef4_1628660969800.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "幸福里",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "幸福里 APP 是集内容、社区、工具于一体的房产信息综合平台。产品基于个性化推荐引擎向用户推荐优质的房产内容和全面、真实的房源信息，致力于为用户提供全面、专业、可靠的购房决策支持。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("fanqie")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/fanqie_bg_5071431.jpeg)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/fanqie_square_logo_507144428.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "番茄小说",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "番茄小说是一个面向网文热爱者的免费阅读平台，拥有海量正版小说，涵盖青春、言情、玄幻、校园、仙侠、都市、悬疑等全部主流网文类型，致力于为读者提供畅快不花钱的极致阅读体验。目前用户规模超过1亿，是小说类产品中的新兴国民级产品。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("xiaohe")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/xiaohejiankang_3x.png)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/472f614124dcc718_1628661517268.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "小荷健康",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "小荷是字节跳动旗下的医疗健康业务品牌，借助互联网技术的力量和平台优势，持续积极探索为用户提供更好的医疗健康内容和服务。小荷健康的使命是帮助每一个人更好地认知健康、获取健康，愿景是成为最值得信赖的医疗健康平台。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("pipixia")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/pipi_new.png)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/pipixia_square_logo_1577262251826.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "皮皮虾",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "今日头条官方爆笑社区，一个只要打开就能让你笑到停不下来的 App。"
    },
    p2text : {
        text : "皮皮虾一直坚持「传播快乐，分享生活」的目标，以特有的「神评」玩法形成了独特的社区氛围。之后，皮皮虾将不断提供更多有趣的功能，帮助用户创造出更多优质的内容。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("Faceu")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/jimeng.jpeg)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/jimeng_square_logo_1577262253557.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "Faceu激萌",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "Faceu激萌，4 亿年轻人都爱用的卖萌自拍神器"
    },
    p2text : {
        text : "一款能社交的 AR 相机，海量酷炫贴纸、 激萌表情包 、实时美颜、 趣味特效让聊天姿势更丰富更有趣，满足全方位拍摄需求。累计用户量超过 4 亿， 平均每天为用户提供 1.7 亿次拍摄服务。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("qingyan")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/qingyan-bg2.jpg)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/qingyan_square_logo_1577262252373.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "轻言相机",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "轻颜相机是一款主打高级感的质感自拍相机，连续霸榜应用商店。拥有时下最流行的滤镜、美颜效果、和海量拍照“姿势”模板，一键就能 get 潮流自拍。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("zhuxiaobang")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/zxb_min_final.png)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/zxb_circle (1).png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "住小帮",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "住小帮 APP，真实可靠的一站式家装服务平台。整合海量真实家装案例，实用易懂的家装知识，严选把关的家装服务，陪伴装修全流程，让你轻松实现理想的家。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addSection("jianying")
.addComponent({
    type : "rongqi",
    width : "100%",
    height : "100%",
    css : {
        backgroundImage : "url(images/fullpage/jianyingbc718923sadkfh.png)",
        backgroundSize : (window.innerHeight, window.innerWidth)
    }
})
.addComponent({
    type : "contJs",
    width: "500px",
    height: "400px",
    position: "absolute",
    css : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    animateIn : {
        bottom: "220px",
        left: "130px",
        opacity : 1
    },
    animateOut : {
        bottom: "50px",
        left: "130px",
        opacity : 0
    },
    delay : 100,
})
.addComponent({
    type : "contJstext",
    logo :{
        width:  " 80px",
        height:" 80px",
        borderRadius: "5px",
        backgroundImage: "url(images/fullpage/hjuiqwersdflogo.png)",
        backgroundSize: "100% 100%",
    },
    textBt :{
        width : " 100%",
        fontSize: "28px",
        text : "剪映",
        opacity : 0,
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "80px",
            opacity : 0,
        },
        delay : 300,
    },
    logotext : {
        width : "100%",
        animateIn : {
            marginTop: "30px",
            opacity : 1,
        },
        animateOut : {
            marginTop: "200px",
            opacity : 0,
        },
        delay : 300,
    },
    p1text : {
        text : "剪映，抖音官方剪辑神器，一个全能好用的视频编辑工具，帮你轻松剪出美好生活。2020年3月，剪映已是国内最大的移动视频编辑工具。"
    },
    p3text : {
        text : "https://www.toutiao.com/",
        href : "https://www.toutiao.com/",
    },
    p : {
        marginTop:" 20px",
        color:" #1f2329",
        fontSize: "14px"
    }
})
.addComponent({
    type : "indexCure",
    css : {
        position : "fixed",
        right : "130px",
        top : 0,
        bottom : 0,
        margin : "auto 0",
        width : "40px",
        height : "70%",
    },
    logocontbox : {
        margin : "0 auto",
        width : "33px",
        height : "33px",
        borderRadius : "50%",
        marginBottom : "20px",
        backgroundColor : "blue",
        cursor:"pointer",
        backgroundSize : "100% 100%",
        transition:" 0.2s"
    },
    logoimg : {
        "0" : {
            backgroundImage : "url(images/fullpage/zjtdon.png",
        },
        "1" : {
            backgroundImage : "url(images/fullpage/dyon.png",
        },
        "2" : {
            backgroundImage : "url(images/fullpage/dyfireon.png",
        },
        "3" : {
            backgroundImage : "url(images/fullpage/xiguaon.png",
        },
        "4" : {
            backgroundImage : "url(images/fullpage/fwon.png",
        },
        "5" : {
            backgroundImage : "url(images/fullpage/dongchedi_circle.png",
        },
        "6" : {
            backgroundImage : "url(images/fullpage/xfl_circlex4png.png",
        },
        "7" : {
            backgroundImage : "url(images/fullpage/fanqie_circle_logo_507144230.png",
        },
        "8" : {
            backgroundImage : "url(images/fullpage/1e6b8f0155853625_1628662822076.png",
        },
        "9" : {
            backgroundImage : "url(images/fullpage/pipixia_1577264424783.png",
        },
        "10" : {
            backgroundImage : "url(images/fullpage/jimeng_1577264424818.png",
        },
        "11" : {
            backgroundImage : "url(images/fullpage/qingyan_1577264424771.png",
        },
        "12" : {
            backgroundImage : "url(images/fullpage/zxb_circle.png",
        },
        "13" : {
            backgroundImage : "url(images/fullpage/1243214123.png",
        }
    },
    event : {
        "mouseover" : function (){
        $(this).css({
            transform: "scale(1.4)",
            boxadShow : "0 9px 18px 0 rgb(0 0 0 / 15%)"
        })
        },
        "mouseout" : function (){
            var indexof = $(this).index();
            if($($(".section")[indexof]).hasClass("active")){
            }else{
                $(this).css({ transform:"scale(1)"})
            }
        },
    }
})
.load()
