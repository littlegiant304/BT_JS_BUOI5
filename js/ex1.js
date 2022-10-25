// const uuTien_KV_A = 2;
// const uuTien_KV_B = 1;
// const uuTien_KV_C = 0.5;
// const uuTien_DT_1 = 2.5;
// const uuTien_DT_2 = 1.5;
// const uuTien_DT_3 = 1;

function checkDiem(mark) {
    if (mark > 0 && mark <=10) {
        return true;
    }
    else return false;
}
function tinhDiemUuTien() {
    var uuTienKV = document.getElementById("diemKV").value;
    var uuTienDT = document.getElementById("diemDT").value;
    var diemKV = 0;
    var diemDT = 0;
    var diemUuTien = 0;
    switch (uuTienKV) {
        case "A":
            diemKV = 2;
            break;
        case "B":
            diemKV = 1;
            break;
        case "C":
            diemKV = 0.5;
            break;
        default:
            diemKV = 0;
            break;
    }
    switch (uuTienDT) {
        case "1":
            diemDT = 2.5;
            break;
        case "2":
            diemDT = 1.5;
            break;
        case "3":
            diemDT = 1;
            break;
        default:
            diemDT = 0;
            break;
    }
    diemUuTien = diemKV + diemDT;
    console.log(diemUuTien);
    return diemUuTien;
}

function kiemTraKQ() {
    var ketQua = "";
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var diemUuTien = tinhDiemUuTien();
    var mon1 = Number(document.getElementById("mon1").value);
    var mon2 = Number(document.getElementById("mon2").value);
    var mon3 = Number(document.getElementById("mon3").value);
    if (mon1==0 || mon2==0 || mon3==0){
        document.getElementById("ketQua").value = "Bạn đã rớt do có điểm bằng 0";
    }
    else if (checkDiem(mon1) && checkDiem(mon2) && checkDiem(mon3)) {
        var tongDiem = mon1 + mon2 + mon3 + diemUuTien;
        if (tongDiem < diemChuan) {
            ketQua = "rớt";
        }
        else ketQua = "đậu";
        document.getElementById("ketQua").value = "Bạn đã " + ketQua;
    }
    else {
        alert("Điểm mỗi môn không được nhỏ hơn 0 và lớn hơn 10!")
    }
}
document.getElementById("btnKetQua").onclick = function() {
    kiemTraKQ();
}