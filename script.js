// Kim móc len (10 sản phẩm)
const kimMocLenProducts = [
  {
    id: 1,
    name: "Bộ Kim Móc Ví Xám 17 Cây",
    price: 200000,
    desc: "Bộ kim móc đa năng, chất liệu thép không gỉ, phù hợp cho mọi loại len.",
    img: "kimmocvixam.jpg",
    category: "kim-moc-len",
  },
  {
    id: 2,
    name: "Bộ Kim Móc Hamanaka Ví Hoa",
    price: 1400000,
    desc: "Sản phẩm cao cấp từ Nhật Bản, thiết kế sang trọng, bền đẹp.",
    img: "hamanaka.jpg",
    category: "kim-moc-len",
  },
  {
    id: 3,
    name: "Kim Móc Hamanaka Hai Đầu",
    price: 170000,
    desc: "Kim móc hai đầu tiện lợi, dễ sử dụng cho các mẫu đan phức tạp.",
    img: "kimmochakami2dau.jpg",
    category: "kim-moc-len",
  },
  {
    id: 4,
    name: "Bộ Kim Móc Tulip Xám Etimo",
    price: 1600000,
    desc: "Bộ kim móc Tulip nổi tiếng, cầm êm tay, phù hợp làm quà tặng.",
    img: "kimmocxamtulip.jpg",
    category: "kim-moc-len",
  },
  {
    id: 5,
    name: "Kim Móc Tulip Etimo Gold",
    price: 160000,
    desc: "Kim móc Tulip màu vàng gold, nhẹ, bền, dễ thao tác.",
    img: "tulipgold.jpg",
    category: "kim-moc-len",
  },
  {
    id: 6,
    name: "Bộ Kim Móc Sắt Không Cán",
    price: 100000,
    desc: "Bộ kim móc sắt truyền thống, giá rẻ, phù hợp cho người mới bắt đầu.",
    img: "bo0can.jpg",
    category: "kim-moc-len",
  },
  {
    id: 7,
    name: "Kim Móc Sắt Không Cán Màu",
    price: 20000,
    desc: "Kim móc sắt nhiều màu sắc, nhỏ gọn, tiện lợi mang theo.",
    img: "0can.jpg",
    category: "kim-moc-len",
  },
  {
    id: 8,
    name: "Kim Móc Len Cán Tre",
    price: 20000,
    desc: "Kim móc cán tre tự nhiên, thân thiện môi trường, nhẹ tay.",
    img: "cantre.jpg",
    category: "kim-moc-len",
  },
  {
    id: 9,
    name: "Kim Móc Tròn Gỗ",
    price: 20000,
    desc: "Kim móc tròn bằng gỗ, thiết kế cổ điển, bền đẹp.",
    img: "trongo.jpg",
    category: "kim-moc-len",
  },
  {
    id: 10,
    name: "Kim Móc Kegou Loại Tốt",
    price: 90000,
    desc: "Kim móc Kegou chất lượng cao, nhập khẩu chính hãng.",
    img: "inox.jpg",
    category: "kim-moc-len",
  },
];

// Phụ kiện (10 sản phẩm)
const phuKienProducts = [
  {
    id: 11,
    name: "Ví Vải Hoa Đựng Kim",
    price: 95000,
    desc: "Ví vải hoa xinh xắn, đựng kim tiện lợi, nhỏ gọn.",
    img: "vivaihoa.jpg",
    category: "phu-kien",
  },
  {
    id: 12,
    name: "Mút Bikini (cặp 2 cái)",
    price: 12000,
    desc: "Mút bikini mềm mại, dùng cho các sản phẩm handmade.",
    img: "mutdu.jpg",
    category: "phu-kien",
  },
  {
    id: 13,
    name: "Ví Đựng Kim Móc Da Bò",
    price: 120000,
    desc: "Ví đựng kim móc bằng da bò thật, sang trọng và bền đẹp.",
    img: "vidabo.jpg",
    category: "phu-kien",
  },
  {
    id: 14,
    name: "Ví Ghim Định Vị Màu",
    price: 10000,
    desc: "Ví nhỏ đựng ghim định vị, nhiều màu sắc dễ thương.",
    img: "viduma.jpg",
    category: "phu-kien",
  },
  {
    id: 15,
    name: "Bộ Nút Gỗ Trang Trí",
    price: 15000,
    desc: "Bộ 10 nút gỗ nhiều hình dễ thương, dùng trang trí sản phẩm len.",
    img: "nut.jpg",
    category: "phu-kien",
  },
  {
    id: 16,
    name: "Khóa Kéo Mini",
    price: 8000,
    desc: "Khóa kéo mini nhiều màu, phù hợp cho ví, túi len nhỏ.",
    img: "khoakeomini.jpg",
    category: "phu-kien",
  },
  {
    id: 17,
    name: "Móc Gắn Chìa Khóa",
    price: 5000,
    desc: "Móc kim loại dùng làm móc khóa cho thú bông, túi len.",
    img: "mockhoa.jpg",
    category: "phu-kien",
  },
  {
    id: 18,
    name: "Dây Đeo Túi Xách",
    price: 25000,
    desc: "Dây đeo túi xách handmade, chất liệu bền đẹp.",
    img: "daydeotuixach.jpg",
    category: "phu-kien",
  },
  {
    id: 19,
    name: "Khóa Bấm Túi Xách",
    price: 12000,
    desc: "Khóa bấm kim loại cho túi xách len, chắc chắn và đẹp mắt.",
    img: "khoabamtuixach.jpg",
    category: "phu-kien",
  },
  {
    id: 20,
    name: "Móc Gắn Thú Len",
    price: 6000,
    desc: "Móc nhỏ gắn thú len, tiện lợi cho làm móc khóa.",
    img: "mocthulen.jpg",
    category: "phu-kien",
  },
];

// Dụng cụ đan móc (10 sản phẩm)
const dungCuDanMocProducts = [
  {
    id: 21,
    name: "Set 10 Cây Keo Nến",
    price: 18000,
    desc: "Set 10 cây keo nến dùng cho súng bắn keo, tiện lợi cho thủ công.",
    img: "keonen.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 22,
    name: "Dụng Cụ Xỏ Chỉ Bông Hoa",
    price: 5000,
    desc: "Dụng cụ xỏ chỉ hình bông hoa, tiện lợi cho việc khâu vá.",
    img: "xochihoa.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 23,
    name: "Thước Đo Len Mini",
    price: 9000,
    desc: "Thước nhựa mini đo kích thước sản phẩm len.",
    img: "thuocdo.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 24,
    name: "Bộ Đánh Dấu Hàng",
    price: 12000,
    desc: "Bộ 20 đánh dấu hàng nhựa nhiều màu, tiện lợi khi đan móc.",
    img: "danhdau.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 25,
    name: "Kéo Cắt Chỉ Mini",
    price: 15000,
    desc: "Kéo nhỏ sắc bén, chuyên dùng cắt chỉ len.",
    img: "keocatchi.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 26,
    name: "Bộ Kim Đan Nhựa",
    price: 18000,
    desc: "Bộ kim đan bằng nhựa an toàn, nhiều kích cỡ.",
    img: "kimdannhua.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 27,
    name: "Bộ Kim Đan Sắt",
    price: 25000,
    desc: "Bộ kim đan sắt truyền thống, bền chắc.",
    img: "kimdansat.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 28,
    name: "Bộ Đánh Dấu Vòng",
    price: 10000,
    desc: "Bộ đánh dấu vòng cho sản phẩm đan móc.",
    img: "vong.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 29,
    name: "Bộ Kim Khâu Đan",
    price: 12000,
    desc: "Bộ kim khâu chuyên dụng cho sản phẩm đan móc.",
    img: "bokim.jpg",
    category: "dung-cu-dan-moc",
  },
  {
    id: 30,
    name: "Bộ Đếm Hàng Đan",
    price: 20000,
    desc: "Dụng cụ đếm hàng đan tiện lợi, dễ sử dụng.",
    img: "bodem.jpg",
    category: "dung-cu-dan-moc",
  },
];

// Kim đan len (10 sản phẩm)
const kimDanLenProducts = [
  {
    id: 31,
    name: "Kim Khâu Lỗ Nhỏ Nhọn",
    price: 5000,
    desc: "Kim khâu lỗ nhỏ, đầu nhọn, phù hợp cho các chi tiết nhỏ.",
    img: "kimkhaulonhon.jpg",
    category: "kim-dan-len",
  },
  {
    id: 32,
    name: "Kim Khâu Len Nhựa",
    price: 4000,
    desc: "Kim khâu len bằng nhựa, an toàn cho trẻ em.",
    img: "sp9.jpg",
    category: "kim-dan-len",
  },
  {
    id: 33,
    name: "Kim Khâu Len Sắt Lỗ Vàng",
    price: 5000,
    desc: "Kim khâu len bằng sắt, lỗ vàng, bền chắc.",
    img: "sp10.jpg",
    category: "kim-dan-len",
  },
  {
    id: 34,
    name: "Kim Đan Len Tre",
    price: 25000,
    desc: "Kim đan bằng tre tự nhiên, nhẹ và bền.",
    img: "kimdantre.jpg",
    category: "kim-dan-len",
  },
  {
    id: 35,
    name: "Kim Đan Len Nhựa",
    price: 12000,
    desc: "Kim đan nhựa nhiều màu, an toàn cho trẻ em.",
    img: "kimdannhua2.jpg",
    category: "kim-dan-len",
  },
  {
    id: 36,
    name: "Kim Đan Len Sắt",
    price: 15000,
    desc: "Kim đan sắt truyền thống, chắc chắn.",
    img: "kimdansat2.jpg",
    category: "kim-dan-len",
  },
  {
    id: 37,
    name: "Kim Đan Len Inox",
    price: 30000,
    desc: "Kim đan inox cao cấp, không gỉ, bền đẹp.",
    img: "kimdaninox.jpg",
    category: "kim-dan-len",
  },
  {
    id: 38,
    name: "Kim Đan Len Đầu Cong",
    price: 18000,
    desc: "Kim đan đầu cong, dễ thao tác với các mẫu phức tạp.",
    img: "kimdancong.jpg",
    category: "kim-dan-len",
  },
  {
    id: 39,
    name: "Kim Đan Len Đôi",
    price: 22000,
    desc: "Kim đan đôi, phù hợp cho các sản phẩm lớn.",
    img: "kimdandoi.jpg",
    category: "kim-dan-len",
  },
  {
    id: 40,
    name: "Kim Đan Len Gỗ",
    price: 27000,
    desc: "Kim đan bằng gỗ tự nhiên, thân thiện môi trường.",
    img: "kimdangow.jpg",
    category: "kim-dan-len",
  },
];

// Nguyên liệu (10 sản phẩm)
const nguyenLieuProducts = [
  {
    id: 41,
    name: "Bông Gòn Bi Xịn",
    price: 40000,
    desc: "Bông gòn bi cao cấp, mềm mịn, thích hợp nhồi thú bông.",
    img: "bong.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 42,
    name: "Len Cotton Milk",
    price: 35000,
    desc: "Len cotton milk mềm mại, thích hợp cho đồ trẻ em.",
    img: "encottonmil.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 43,
    name: "Len Lông Cừu",
    price: 45000,
    desc: "Len lông cừu tự nhiên, giữ ấm tốt.",
    img: "lenlongcuu.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 44,
    name: "Len Sợi Nhung",
    price: 40000,
    desc: "Len nhung mềm, bóng đẹp, nhiều màu sắc.",
    img: "lensoinhung.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 45,
    name: "Len Sợi Cotton",
    price: 30000,
    desc: "Len cotton sợi nhỏ, phù hợp móc thú bông.",
    img: "lencotton.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 46,
    name: "Len Sợi Poly",
    price: 25000,
    desc: "Len poly bền màu, không xù lông.",
    img: "lenpoly.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 47,
    name: "Len Sợi Lông Thỏ",
    price: 50000,
    desc: "Len lông thỏ siêu mềm, thích hợp cho khăn choàng.",
    img: "lenlongtho.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 48,
    name: "Len Sợi Đan Áo",
    price: 38000,
    desc: "Len chuyên dùng đan áo, màu sắc đa dạng.",
    img: "lendanao.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 49,
    name: "Len Sợi Đan Túi",
    price: 32000,
    desc: "Len sợi chắc chắn, phù hợp đan túi xách.",
    img: "lendantui.jpg",
    category: "nguyen-lieu",
  },
  {
    id: 50,
    name: "Len Sợi Đan Thú",
    price: 34000,
    desc: "Len sợi chuyên dùng đan thú bông, an toàn cho trẻ nhỏ.",
    img: "lendanthu.jpg",
    category: "nguyen-lieu",
  },
];

let cart = [];

function renderProducts(filter = "") {
  const productsEl = document.getElementById("products");
  productsEl.innerHTML = "";
  let searchValue = (
    document.getElementById("search-input")?.value || ""
  ).toLowerCase();
  let categoryValue = document.getElementById("category-filter")?.value || "";

  // Nếu lần đầu vào web (categoryValue rỗng), chỉ hiển thị 10 sản phẩm kim-moc-len
  let products = [];
  if (!categoryValue) {
    products = kimMocLenProducts;
    categoryValue = "kim-moc-len";
  } else {
    switch (categoryValue) {
      case "kim-moc-len":
        products = kimMocLenProducts;
        break;
      case "phu-kien":
        products = phuKienProducts;
        break;
      case "dung-cu-dan-moc":
        products = dungCuDanMocProducts;
        break;
      case "kim-dan-len":
        products = kimDanLenProducts;
        break;
      case "nguyen-lieu":
        products = nguyenLieuProducts;
        break;
      default:
        products = [
          ...kimMocLenProducts,
          ...phuKienProducts,
          ...dungCuDanMocProducts,
          ...kimDanLenProducts,
          ...nguyenLieuProducts,
        ];
    }
  }

  let filtered = products.filter((product) => {
    let matchSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.desc.toLowerCase().includes(searchValue);
    return matchSearch;
  });

  // Luôn giới hạn 10 sản phẩm cho kim-moc-len
  if (categoryValue === "kim-moc-len") {
    filtered = filtered.slice(0, 10);
  }

  if (filtered.length === 0) {
    productsEl.innerHTML =
      "<div style='grid-column:1/-1;text-align:center;color:#e91e63;font-weight:500'>Không tìm thấy sản phẩm phù hợp.</div>";
    return;
  }

  filtered.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <div class="product-img">${
        product.img ? `<img src="${product.img}" alt="${product.name}">` : ""
      }</div>
      <div class="product-info">
        <div class="product-title">${product.name}</div>
        <div class="product-desc">${product.desc}</div>
        <div class="product-price">${product.price.toLocaleString()}đ</div>
        <button class="add-cart-btn" onclick="addToCart(${
          product.id
        })">Thêm vào giỏ</button>
      </div>
    `;
    productsEl.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const found = cart.find((item) => item.id === productId);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  // Sử dụng bảng thay vì danh sách
  const cartItemsTable = document.getElementById("cart-items-table");
  const cartCountEl = document.getElementById("cart-count");
  cartItemsTable.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="padding:8px 4px;display:flex;align-items:center;gap:10px;">
        <img src="${
          item.img || ""
        }" alt="" style="width:60px;height:60px;object-fit:cover;border-radius:8px;border:1px solid #eee;">
        <div>
          <div style="font-weight:500;">${item.name}</div>
          <div style="font-size:0.95em;color:#888;">${item.desc || ""}</div>
          <a href="#" style="color:#e91e63;font-size:0.97em;" onclick="removeFromCart(${
            item.id
          });return false;">Xóa</a>
        </div>
      </td>
      <td style="text-align:center;color:#e91e63;font-weight:500;">${item.price.toLocaleString()}đ</td>
      <td style="text-align:center;">
        <button onclick="changeQty(${
          item.id
        },-1)" style="width:28px;height:28px;border:1px solid #e91e63;background:none;color:#e91e63;border-radius:4px;cursor:pointer;">-</button>
        <span style="margin:0 8px;min-width:24px;display:inline-block;">${
          item.qty
        }</span>
        <button onclick="changeQty(${
          item.id
        },1)" style="width:28px;height:28px;border:1px solid #e91e63;background:none;color:#e91e63;border-radius:4px;cursor:pointer;">+</button>
      </td>
      <td style="text-align:center;font-weight:500;color:#e91e63;">${(
        item.price * item.qty
      ).toLocaleString()}đ</td>
      <td style="text-align:center;">
        <button onclick="removeFromCart(${
          item.id
        })" style="color:#e91e63;background:none;border:none;font-size:1.2em;cursor:pointer;">&times;</button>
      </td>
    `;
    cartItemsTable.appendChild(tr);
    total += item.price * item.qty;
    count += item.qty;
  });

  document.getElementById("total").textContent = total.toLocaleString();
  cartCountEl.textContent = count;
}

// Thay đổi số lượng sản phẩm trong giỏ
function changeQty(productId, delta) {
  const found = cart.find((item) => item.id === productId);
  if (!found) return;
  found.qty += delta;
  if (found.qty < 1) found.qty = 1;
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

function showCart() {
  document.getElementById("cart-modal").classList.add("show");
}

function hideCart() {
  document.getElementById("cart-modal").classList.remove("show");
}

document.getElementById("cart-btn").onclick = function (e) {
  e.preventDefault();
  showCart();
};
document.getElementById("close-cart").onclick = hideCart;
window.onclick = function (event) {
  if (event.target === document.getElementById("cart-modal")) hideCart();
};

document.getElementById("search-btn").onclick = function () {
  renderProducts();
};
document.getElementById("search-input").onkeyup = function (e) {
  if (e.key === "Enter") renderProducts();
};
document.getElementById("category-filter").onchange = function () {
  renderProducts();
};

document.getElementById("checkout-btn").onclick = function () {
  if (cart.length === 0) {
    alert("Giỏ hàng của bạn đang trống!");
    return;
  }
  alert("Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ sớm.");
  cart = [];
  updateCart();
  hideCart();
};

// Đề xuất sản phẩm khi tìm kiếm
const searchInput = document.getElementById("search-input");
const searchSuggest = document.getElementById("search-suggest");
const searchBar = document.querySelector(".search-bar");

searchInput.addEventListener("input", function () {
  const value = this.value.trim().toLowerCase();
  if (!value) {
    searchSuggest.style.display = "none";
    return;
  }
  const suggest = products.filter(
    (p) =>
      p.name.toLowerCase().includes(value) ||
      p.desc.toLowerCase().includes(value)
  );
  if (suggest.length === 0) {
    searchSuggest.innerHTML = "";
    searchSuggest.style.display = "none";
    return;
  }
  searchSuggest.innerHTML =
    "<ul>" +
    suggest
      .slice(0, 6)
      .map(
        (p) =>
          `<li onclick="addToCart(${
            p.id
          });searchSuggest.style.display='none';">${
            p.name
          } <span style='color:#888;font-size:0.95em'>(${p.price.toLocaleString()}đ)</span></li>`
      )
      .join("") +
    "</ul>";
  searchSuggest.style.display = "block";
});

// Ẩn đề xuất khi click ngoài
document.addEventListener("click", function (e) {
  if (!searchBar.contains(e.target)) {
    searchSuggest.style.display = "none";
  }
});

// Cuộn mượt khi click navigation
document.querySelectorAll('.navbar a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    const id = this.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// --- THÊM: Xử lý chuyển danh mục sản phẩm khi bấm nút cat-btn ---
document.querySelectorAll(".cat-btn").forEach((btn, idx, arr) => {
  btn.onclick = function () {
    arr.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // Xác định category tương ứng với từng nút
    let cat = "";
    switch (btn.textContent.trim().toUpperCase()) {
      case "KIM MÓC LEN":
        cat = "kim-moc-len";
        break;
      case "DỤNG CỤ ĐAN MÓC":
        cat = "dung-cu-dan-moc";
        break;
      case "KIM ĐAN LEN":
        cat = "kim-dan-len";
        break;
      case "NGUYÊN LIỆU THÚ BÔNG":
        cat = "nguyen-lieu";
        break;
      case "NÚT TRANG TRÍ":
        cat = "phu-kien";
        break;
      default:
        cat = "";
    }
    // Xóa filter trên select khi chọn tab
    document.getElementById("category-filter").value = cat;
    renderProducts();
  };
});

renderProducts();
updateCart();
