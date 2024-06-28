const header = document.querySelector("#header");
function headerfun() {
  const headContent = document.createElement("div");
  headContent.innerHTML = `
    <div class="w-full max-w-[1080px] m-auto flex items-center justify-between ">
            <div id="menu-btn" class=" md:hidden flex items-center text-3xl">
                <ion-icon name="menu"></ion-icon>
            </div>
            <a href="../">
                <img id="logo" class="md:w-[90px] w-[65px] transition-all" src="../Image/logo.png" alt="">
            </a>
            <a class="min-w-12" href="https://www.hay88.one/?inviteCode=0290527">
                <img class="w-[200px] md:block hidden" src="../Image/cf68-dangnhap.png" alt="">
            </a>
        </div>
        <div class="flex md:hidden text-slate-50 font-semibold justify-center items-center gap-4 bg-[#598ABE] py-1 text-xs">
        <a class="flex h-8 px-5 items-center bg-green-700 rounded-3xl border-green-900" href="">ĐĂNG KÝ</a>
        <div class="h-8 border-r border-gray-600"></div>
        <a class="flex h-8 px-5 items-center bg-red-800 rounded-3xl border-red-900" href="">ĐĂNG NHẬP</a>
        </div>
        <div id="menu"
            class="w-full transition-all duration-300 md:bg-[#598ABE] md:h-auto md:w-auto h-[100vh] md:bg-opacity-100 bg-opacity-70 bg-black md:static fixed top-0 left-[-105%]">
            <div class="md:max-w-[1080px] md:m-auto max-w-[250px] md:h-auto h-full md:bg-transparent bg-white">
                <nav class="flex md:justify-center md:items-center items-start md:pt-0 pt-9">
                    <ul
                        class="md:text-slate-50 text-zinc-500 flex xl:gap-12 gap-1 md:gap-6 font-bold h-[55px] md:items-center items-start md:flex-row flex-col md:text-sm text-xs md:w-auto w-full">
                        <li class="md:w-auto w-full px-2">
                            <a class="active-btn md:h-[30px] h-[50px] md:w-auto w-full flex hover:border-b-2 md:border-b-0 md:border-[orange] md:hover:text-[orange] border-gray-300 border-b items-center transition"
                                href="../">TRANG
                                CHỦ</a>
                        </li>
                        <li class="md:w-auto w-full px-2">
                            <a class="active-btn md:h-[30px] h-[50px] md:w-auto w-full flex hover:border-b-2 md:border-b-0 md:border-[orange] md:hover:text-[orange] border-gray-300 border-b items-center transition"
                                href="../huong-dan">HƯỚNG
                                DẪN</a>
                        </li>
                        <li class="md:w-auto w-full px-2">
                            <a class="active-btn md:h-[30px] h-[50px] md:w-auto w-full flex hover:border-b-2 md:border-b-0 md:border-[orange] md:hover:text-[orange] border-gray-300 border-b items-center transition"
                                href="../ban-ca">BẮN CÁ</a>
                        </li>
                        <li class="md:w-auto w-full px-2">
                            <a class="active-btn md:h-[30px] h-[50px] md:w-auto w-full flex hover:border-b-2 md:border-b-0 md:border-[orange] md:hover:text-[orange] border-gray-300 border-b items-center transition"
                                href="../casino">CASINO</a>
                        </li>
                        <li class="md:w-auto w-full px-2">
                            <a class="active-btn md:h-[30px] h-[50px] md:w-auto w-full flex hover:border-b-2 md:border-b-0 md:border-[orange] md:hover:text-[orange] border-gray-300 border-b items-center transition"
                                href="../the-thao">THỂ
                                THAO</a>
                        </li>
                        <li class="md:w-auto w-full px-2">
                            <a class="active-btn md:h-[30px] h-[50px] md:w-auto w-full flex hover:border-b-2 md:border-b-0 md:border-[orange] md:hover:text-[orange] border-gray-300 border-b items-center transition"
                                href="../xoso">XỔ SỐ</a>
                        </li>
                        <li class="md:w-auto w-full px-2">
                            <a class="active-btn md:h-[30px] h-[50px] md:w-auto w-full flex hover:border-b-2 md:border-b-0 md:border-[orange] md:hover:text-[orange] border-gray-300 border-b items-center transition"
                                href="../tintuc">TIN TỨC</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="close-btn" class="text-3xl md:hidden flex absolute top-4 right-4">
                <ion-icon name="close"></ion-icon>
            </div>
        </div>
        `;

  if (header) {
    header.appendChild(headContent);
  }
}
headerfun();

var activeBtn = document.querySelectorAll(".active-btn");
if (header) {
  if (header.classList.contains("index")) {
    activeBtn[0].classList.add("active");
  }
  if (header.classList.contains("huong-dan")) {
    activeBtn[1].classList.add("active");
  }
  if (header.classList.contains("ban-ca")) {
    activeBtn[2].classList.add("active");
  }
  if (header.classList.contains("casino")) {
    activeBtn[3].classList.add("active");
  }
  if (header.classList.contains("the-thao")) {
    activeBtn[4].classList.add("active");
  }
  if (header.classList.contains("xoso")) {
    activeBtn[5].classList.add("active");
  }
  if (header.classList.contains("tintuc")) {
    activeBtn[6].classList.add("active");
  }
}

var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");
var closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove("show");
});

//header drop
var logo = document.getElementById("logo");
let allow = true;
window.addEventListener("scroll", function () {
  let y = window.scrollY;
  if (y > 80 && allow) {
    header.style.transition = "0.5s";
    header.style.top = "-180px";
    setTimeout(() => {
      header.classList.add("stick");
    }, 1);
    setTimeout(() => {
      header.style.position = "fixed";
      header.style.top = "0px";
      header.classList.remove("stick");
      logo.classList.add("smaller");
    }, 190);
    allow = false;
  }
  if (y == 0) {
    allow = true;
    header.style.position = "absolute";
    header.style.top = "0px";
    logo.classList.remove("smaller");
  }
});
