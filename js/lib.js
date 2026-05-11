const productList = [
    { id: "01", name: "Xúc xích", price: 20, image: "../assets/images/xucxich.jpg", productLink: "product-detail.html" },
    { id: "02", name: "Tokpokki", price: 30, image: "../assets/images/tokpokki.jpg", productLink: "product-detail.html" },
    { id: "03", name: "Mì ý", price: 50, image: "../assets/images/mi_y.jpg", productLink: "product-detail.html" },
    { id: "04", name: "Khoai tây chiên", price: 20, image: "../assets/images/khoaitaychien.jpg", productLink: "product-detail.html" },
    { id: "05", name: "Hamberger", price: 30, image: "../assets/images/hamberger.jpg", productLink: "product-detail.html" },
    { id: "06", name: "Sò điệp", price: 210, image: "../assets/images/sodiep.jpg", productLink: "product-detail.html" },
    { id: "07", name: "Ghẹ xanh", price: 250, image: "../assets/images/ghe_xanh.jpg", productLink: "product-detail.html" },
    { id: "08", name: "Bạch tuộc", price: 150, image: "../assets/images/bach_tuoc.jpg", productLink: "product-detail.html" },
    { id: "09", name: "Cá hồi", price: 150, image: "../assets/images/ca_hoi.jpg", productLink: "product-detail.html" },
    { id: "10", name: "Tôm sú", price: 250, image: "../assets/images/tom_su.jpg", productLink: "product-detail.html" }
];

function addProduct(id, name, price, image, hyperLink) 
{
    // Tạo thẻ div khung chứa 1 sản phẩm - product item
    const productItem = document.createElement("div");

    // Thêm thuộc tính cho thẻ div (Dùng class 'col' của Bootstrap để chia cột)
    productItem.setAttribute("class", "product-item col");

    // Tạo khung số 1 - chứa ảnh - product image
    const productImage = document.createElement("div");

    // Thêm thuộc tính cho thẻ div
    productImage.setAttribute("class", "product-image");

    // Thêm ảnh vào khung chứa kèm các class viền ảnh của Bootstrap
    const myImage = document.createElement("img");
    myImage.setAttribute("src", image);
    myImage.setAttribute("alt", name);
    myImage.setAttribute("class", "img-thumbnail img-fluid");
    myImage.style.height = "250px";
    myImage.style.width = "250px";

    // Gắn hình vào khung chứa product image
    productImage.appendChild(myImage);

    // Tạo khung số 2 - chứa thông tin sản phẩm - product info
    const productInfo = document.createElement("div");

    // Thêm thuộc tính cho thẻ div (Dùng 'text-center' để canh giữa chữ)
    productInfo.setAttribute("class", "product-info text-center");

    // Thêm đối tượng p, a cho khung chứa product info (Tên hoa)
    const productName = document.createElement("p");
    const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

    // Gắn vào khung chứa
    productInfo.appendChild(productName);
// Thêm đối tượng p, a cho khung chứa product info (Giá tiền màu đỏ, in đậm)
    const productPrice = document.createElement("p");
    const productPriceText = document.createTextNode(price + "/phần");
    productPrice.setAttribute("class", "text-danger font-weight-bolder");
    productPrice.appendChild(productPriceText);

    // Gắn vào khung chứa
    productInfo.appendChild(productPrice);

    // Tạo nút bấm 'Xem chi tiết' màu xanh
    const productLink = document.createElement("a");
    const productLinkText = document.createTextNode("Xem chi tiết");
    productLink.setAttribute("href", hyperLink + "?id=" + id);
    productLink.setAttribute("class", "btn btn-info");
    productLink.appendChild(productLinkText);

    // Gắn link cho product Info
    productInfo.appendChild(productLink);

    // Gắn 2 khung chứa image và info vào product item
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Gắn product item vào product list
    document.getElementById("product-list").appendChild(productItem);
}
