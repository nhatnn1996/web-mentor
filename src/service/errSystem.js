const errSystem = (err) => {
    let message = '';
    switch (err) {

        // error LOGIN
        case 'SYS001': message = "Email và mật khẩu không được để trống"; break;
        case 'SYS002': message = "Định dạng email không hợp lệ"; break;
        case 'SYS003': message = "Mật khẩu không đủ mạnh. Bao gồm ký tự viết hoa và số"; break;
        case 'SYS004': message = "Tài khoản chưa được kích hoạt"; break;
        case 'SYS005': message = "Tài khoản hoặt mật khẩu không chính xát"; break;

        case 'SYS006': message = "Vui lòng điền đầy đủ thông tin"; break;
        case 'SYS007': message = "Mật khẩu không khớp"; break;
        case 'SYS008': message = "Email đã tồn tại"; break;

        case 'SYS009': message = "Vui lòng điền mã xát thực"; break;

        // register mentor
        case 'RMEMBER001': message = "Vui lòng điền tên hiển thị"; break;
        case 'RMEMBER002': message = "Vui lòng điền trường đang học"; break;
        case 'RMEMBER003': message = "Vui lòng chọn chuyên ngành "; break;
        case 'RMEMBER004': message = "Vui lòng chọn học kì"; break;
        case 'RMEMBER005': message = "Vui lòng điền mô tả"; break;
        case 'RMEMBER006': message = "Vui lòng điền giá thuê"; break;
        case 'RMEMBER007': message = "Vui lòng điền link skype"; break;
        case 'RMEMBER008': message = "Vui lòng chọn ảnh đại diện"; break;
        case 'RMEMBER009': message = "Chi phí phải là số"; break;

        case "SERVER001": message = "Mã code không chính xát hoặc thời gian đã hết hạn"; break;
        case "SERVER002": message = "Lỗi không xát định"; break;
        default: message = "Lỗi không xát định"; break;
    }
    return message
}

export default errSystem;