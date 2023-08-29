// 检测屏幕宽度并动态设置 meta 标签
function checkScreenWidth() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 768) {
        // 在屏幕宽度小于等于 768px 时，设置移动端的 meta 标签
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no');
    } else {
        // 在屏幕宽度大于 768px 时，设置 PC 端的 meta 标签
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=1200');
    }
}

// 页面加载完成后检测屏幕宽度，并在窗口大小改变时重新检测
window.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);