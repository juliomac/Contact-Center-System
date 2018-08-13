

export const formatPhoneNumber =(phone_number)=> {
    phone_number = captureNumber(phone_number)
    let phone = phone_number[0] === "0" ? "" : phone_number[0]
    for (var i = 1; i < phone_number.length; i++) {
            phone = phone + phone_number[i];
        if (phone.length === 3 || phone.length === 7)
            phone += " "

    }
    return phone

}
const captureNumber = (phone_number)=>{
    var numb = phone_number.match(/\d/g);
    numb = numb.join("");
    return numb
}
