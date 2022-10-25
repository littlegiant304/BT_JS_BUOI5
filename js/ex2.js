const dien_0_50 = 500;
const dien_50_100 = 650;
const dien_100_200 = 850;
const dien_200_350 = 1100;
const dien_tren_350 = 1300;

function tinhTienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var soKW = Number(document.getElementById("soKW").value);
    var tongTienDien = 0;
    if (soKW < 0) {
        alert("Số KW điện không hợp lệ!");
    }
    else if (soKW <= 50) {
        tongTienDien = soKW*dien_0_50;
    }
    else if (soKW <= 100) {
        tongTienDien = 50*dien_0_50 + (soKW-50)*dien_50_100;
    }
    else if (soKW <=200) {
        tongTienDien = 50*dien_0_50 + 50*dien_50_100 + (soKW-100)*dien_100_200;
    }
    else if (soKW <=350) {
        tongTienDien = 50*dien_0_50 + 50*dien_50_100 + 100*dien_100_200 + (soKW-200)*dien_200_350;
    }
    else if (soKW>350) {
        tongTienDien = 50*dien_0_50 + 50*dien_50_100 + 100*dien_100_200 + 150*dien_200_350 + (soKW-350)*dien_tren_350;
    }
    document.getElementById("thanhTien").value = "Họ tên: "+hoTen+" ; Thành tiền: "+tongTienDien.toLocaleString()+" VNĐ";
}
document.getElementById("btnTinhTienDien").onclick = function () {
    tinhTienDien();
}