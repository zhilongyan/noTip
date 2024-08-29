
// 创建一个回调函数，当被观察的节点发生变化时，这个函数将会被调用
const callback = function() {
    // 每次改变都重新获取所有a标签 解决动态增加的评论等的链接没有被替换的问题
    const allA = document.querySelectorAll('a');
    allA.forEach(item => {
        if (item.href.startsWith('https://link.juejin.cn/?target=')) {
            item.href = item.title
        }
    })
};

// 创建一个新的 MutationObserver 实例，并传入回调函数
const observer = new MutationObserver(callback);

// 选择要观察的节点
const targetNode = document.body;

// 配置观察选项
const config = {
    attributes: true,  // 监听属性变化
    childList: true,   // 监听子节点变化
    subtree: true,     // 监听整个子树
    characterData: true // 监听文本节点变化
};

// 开始观察
observer.observe(targetNode, config);
