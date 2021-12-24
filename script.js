function reverse(str) {
    var reverseStr = str.split("").reverse().join();
    return reverseStr;
}

function isPalindrome(str) {
    var reek = reverse(str);
    if (reek === str)
        console.log("yes");
    else
        console.log("No")
}
// isPalindrome("jayesh")

function convertDateToStr(date) {

    var dateStr = {
        day: "",
        month: "",
        year: ""
    };

    if (date.day < 10) {
        dateStr.day = "0" + date.day;
    } else {
        dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateStr.month = "0" + date.month;
    } else {
        dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();

    return dateStr;



}
date = {
    day:  2,
    month: 23,
    year: 2020

}
console.log(convertDateToStr(date));