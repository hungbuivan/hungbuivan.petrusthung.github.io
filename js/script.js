// Thử nghiệm click vào các Tab dưới Slider
const tabs = document.querySelectorAll('.tab-item');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Xóa class active ở tất cả các tab
        tabs.forEach(t => t.classList.remove('active'));
        // Thêm active vào tab vừa click
        tab.classList.add('active');
        
        // Logic đổi ảnh sẽ viết thêm ở đây sau
        console.log("Đã chuyển sang slide mới!");
    });
});