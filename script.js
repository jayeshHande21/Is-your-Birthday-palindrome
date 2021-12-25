

function reverse(str) {

    var reverseStr = str.split("").reverse().join("");
    return reverseStr;
}


function isPalindrome(str) {
    var reek = reverse(str);
    if (reek === str)
        return true;
    else
        return false;
}



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



function getAllDateFormat(date) {

    var dateStr = convertDateToStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}



function checkPalindromeForAllDateFormat(date) {

    var ListOfPalindrome = getAllDateFormat(date);


    var flag = false;
    for (var i = 0; i < ListOfPalindrome.length; i++) {

        if (isPalindrome(ListOfPalindrome[i])) {
            flag = true;
            break;
        }
    }

    return flag;

}


function isleapYear(year) {
    if (year % 400 == 0) {
        return true;
    } else {
        if (year % 4 == 0) {
            return true;
        } else if (year % 100 != 0) {
            return false;
        }
    }
    return false;

}



function getNextDate(date) {

    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isleapYear(year)) {
            if (day > 29) {
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }

    } else {
        if (day > daysInMonth[month - 1]){
            day = 1;
           month++
        }
    }
    if (month > 12) {
        month = 1;
        year++;
    }


    return {
        day: day,
        month: month,
        year: year
    }

}


function checkNextPalindromeDate(date){
     var nextDate = getNextDate(date);
     var ctr = 0;

     while(1){
         ctr ++;
         var isPalindrome  = checkPalindromeForAllDateFormat(nextDate);
         if(isPalindrome){
             break;
         }
         else{
             nextDate = getNextDate(nextDate);
         }

     }
      return [ctr , nextDate];

}

function clickHandler(){
    var birdyStr = inputDate.value;
    if(birdyStr !== ""){
        var birdyList = birdyStr.split("-")
    }
    var date = {
        year :Number( birdyList[0]),
        month :Number( birdyList[1]),
        day :Number( birdyList[2])
    };
    var isPalindrome = checkPalindromeForAllDateFormat(date);
    if(isPalindrome){
        output.innerText = `Yup!!!! Your Birthday is PALINDROME 🥳🥳`
    }
    else{
        var [ctr , nextday] = checkNextPalindromeDate(date);

        output.innerText = `NO!! Your Birthday is Not Palindrome.Next palindrome date is ${nextday.day}-${nextday.month}-${nextday.year}. You missed it by just ${ctr} days 😔😔`
    }
    // console.log(date);

}



var inputDate = document.querySelector("#dateInput")
var button = document.querySelector("#button");
var output   = document.querySelector("#output");

button.addEventListener("click", clickHandler)

// console.log(NextDate(date));

// console.log(checkPalindromeForAllDateFormat(date));