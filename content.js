
window.addEventListener('load', function() {
    const allA = document.querySelectorAll('a');
    allA.forEach(item => {
        if (item.href.startsWith('https://link.juejin.cn/?target=')) {
            item.href = item.title
        }
    })
})