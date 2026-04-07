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

const topBtn = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
const menuBtn = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
const dateSpan = document.getElementById('current-date');
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateSpan.innerText = now.toLocaleDateString('vi-VN', options);

// ==========================================
// 1. XỬ LÝ SLIDER (BANNER CHẠY)
// ==========================================

// Tìm các phần tử trong HTML
const mainSlider = document.querySelector('.main-slider');
// Tìm TẤT CẢ các slide-item
const slides = mainSlider.querySelectorAll('.slide-item'); 


// Biến lưu vị trí slide hiện tại (bắt đầu từ 0)


// HÀM HIỂN THỊ SLIDE THEO CHỈ SỐ (INDEX)
function showSlide(index) {
  // Nếu index vượt quá số lượng slide, quay về 0
  if (index >= slides.length) {
    currentIndex = 0;
  } 
  // Nếu index nhỏ hơn 0, quay về slide cuối cùng
  else if (index < 0) {
    currentIndex = slides.length - 1;
  } 
  // Nếu nằm trong khoảng, gán lạicurrentIndex
  else {
    currentIndex = index;
  }

  // DI CHUYỂN SLIDE: Sử dụng thuộc tính transform: translateX
  // Mỗi slide chiếm 100% chiều rộng, nên ta dịch chuyển một khoảng là -currentIndex * 100
  slides[0].parentNode.style.transform = `translateX(${-currentIndex * 100}%)`;
  // Chú ý: Cần thêm CSS cho slides[0].parentNode để hiệu ứng mượt mà
}

// SỰ KIỆN KHI BẤM NÚT NEXT
nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// SỰ KIỆN KHI BẤM NÚT PREV
prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// TỰ ĐỘNG CHUYỂN SLIDE SAU 5 GIÂY (5000 mili giây)
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

// ==========================================
// 2. XỬ LÝ NÚT QUAY LẠI ĐẦU TRANG (BACK TO TOP)
// ==========================================

// Tìm nút Back to Top trong HTML
const backToTopBtn = document.getElementById('backToTop');

// SỰ KIỆN KHI NGƯỜI DÙNG CUỘN TRANG (WINDOW SCROLL)
window.addEventListener('scroll', () => {
  // Nếu cuộn xuống dưới 300px (document.documentElement.scrollTop hoặc document.body.scrollTop)
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    // Hiện nút bằng cách thêm class 'show' (hoặc dùng display: block)
    backToTopBtn.classList.add('show');
  } else {
    // Ẩn nút bằng cách xóa class 'show'
    backToTopBtn.classList.remove('show');
  }
});

// SỰ KIỆN KHI BẤM VÀO NÚT
backToTopBtn.addEventListener('click', () => {
  // Cuộn lên đầu trang một cách mượt mà (smooth scrolling)
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});