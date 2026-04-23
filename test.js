// 测试资质情况模块
console.log('测试资质情况模块开始');

// 检查DOM元素是否存在
var qualificationPanel = document.querySelector('.qualification');
console.log('qualificationPanel:', qualificationPanel);

if (qualificationPanel) {
    var tabs = qualificationPanel.querySelectorAll('.tabs a');
    var contents = qualificationPanel.querySelectorAll('.content');
    
    console.log('tabs数量:', tabs.length);
    console.log('contents数量:', contents.length);
    
    // 测试switchTab函数
    function switchTab(index) {
        console.log('切换到索引:', index);
        tabs.forEach(function(tab, i) {
            if (i === index) {
                tab.classList.add('active');
                contents[i].style.display = 'block';
                console.log('激活tab:', i, tab.textContent);
            } else {
                tab.classList.remove('active');
                contents[i].style.display = 'none';
                console.log('取消激活tab:', i, tab.textContent);
            }
        });
    }
    
    // 测试点击事件
    tabs.forEach(function(tab, index) {
        tab.addEventListener('click', function() {
            console.log('点击了tab:', index, tab.textContent);
            switchTab(index);
        });
    });
    
    // 测试自动循环
    var currentIndex = 0;
    setInterval(function() {
        var nextIndex = (currentIndex + 1) % tabs.length;
        console.log('自动切换到:', nextIndex, tabs[nextIndex].textContent);
        switchTab(nextIndex);
        currentIndex = nextIndex;
    }, 3000);
    
    console.log('测试资质情况模块结束');
} else {
    console.log('未找到qualificationPanel元素');
}