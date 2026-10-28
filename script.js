function upDate(previewPic) {
  // 3a & 3b. In thông tin ra console để kiểm tra sự kiện và thuộc tính alt, src[cite: 2]
  console.log("Sự kiện onmouseover đã kích hoạt!");
  console.log("Thẻ Alt:", previewPic.alt);
  console.log("Đường dẫn ảnh (Src):", previewPic.src);

  // Lấy phần tử khung hiển thị có id="image"
  const imageDiv = document.getElementById("image");

  // 3c. Thay đổi văn bản của phần tử id="image" thành mô tả alt của ảnh đang di chuột qua[cite: 2]
  imageDiv.innerHTML = previewPic.alt;

  // 3e. Thay đổi hình nền của phần tử id="image" thành đường dẫn src của ảnh[cite: 2]
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  console.log("Sự kiện onmouseout đã kích hoạt!");

  // Lấy phần tử khung hiển thị có id="image"
  const imageDiv = document.getElementById("image");

  // 4a. Đưa hình nền của div #image trở lại giá trị ban đầu (rỗng)[cite: 3]
  imageDiv.style.backgroundImage = "url('')";

  // 4b. Đưa văn bản về lại dòng thông báo mặc định[cite: 3]
  imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
