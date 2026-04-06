// Dữ liệu ảnh và tiêu đề giả định
const slideData = [
    {
        img: "https://picsum.photos/800/450?random=11",
        title: "THƯ MỜI: ĐÊM THÁNH CA VÀ HỘI THẢO THÁNH NHẠC"
    },
    {
        img: "https://picsum.photos/800/450?random=12",
        title: "TAM NHẬT THÁNH 2026 TẠI CÁC GIÁO PHẬN"
    },
    {
        img: "https://picsum.photos/800/450?random=13",
        title: "SỨ ĐIỆP PHỤC SINH URBI ET ORBI CỦA ĐỨC THÁNH CHA"
    }
];

let currentIndex = 0;

const slideImg = document.querySelector('.slide-item img');
const slideTitle = document.querySelector('.slide-caption h2');
const tabs = document.querySelectorAll('.tab-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Hàm cập nhật Slide
function updateSlide(index) {
    currentIndex = index;
    // Cập nhật nội dung
    slideImg.src = slideData[currentIndex].img;
    slideTitle.innerText = slideData[currentIndex].title;

    // Cập nhật trạng thái Tab
    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === currentIndex);
    });
}

// Sự kiện nút Next/Prev
nextBtn.addEventListener('click', () => {
    let nextIndex = (currentIndex + 1) % slideData.length;
    updateSlide(nextIndex);
});

prevBtn.addEventListener('click', () => {
    let prevIndex = (currentIndex - 1 + slideData.length) % slideData.length;
    updateSlide(prevIndex);
});

// Sự kiện click vào Tab
tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => updateSlide(i));
});

// Tự động chuyển slide sau 5 giây
setInterval(() => {
    let nextIndex = (currentIndex + 1) % slideData.length;
    updateSlide(nextIndex);
}, 5000);