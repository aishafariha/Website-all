const username=document.querySelector("#username");
const dob=document.querySelector("#dob");
const btn=document.querySelector(".btn");
const showtime=document.querySelector(".u-time");
const month=[31,28,31,30,31,30,31,31,30,31,30,31];
btn.addEventListener("click",calculateAge);//here we add buttoon and if e click button then it call the calculateAge function
function calculateAge(e) {
    e.preventDefault()
    let today = new Date();
    let dobInput = new Date(dob.value);
    let birthMonth,birthDate,birthyear;
    let birthDetails=
    {
date:dobInput.getDate(),
month:dobInput.getMonth() + 1,
year:dobInput.getFullYear(),

    };
    let currentYear= today.getFullYear();
    let currentMonth=today.getMonth() + 1;
    let currentDate= today.getDate();
    if(
        birthDetails.year>currentYear ||
        (birthDetails.month>currentMonth && birthDetails.year==currentYear)||
         (birthDetails.date>currentDate && birthDetails.month==currentMonth && birthDetails.year==currentYear)
    )
    {
        alert("Invalid date");
        return;
    }
   
    birthyear= currentYear-birthDetails.year;//here if we subtract currentyear from birthyear than we find our peresnt birth year
    //giving condition to find my birthmonth
    if(currentMonth>=birthDetails.month){
        birthMonth=currentMonth-birthDetails.month;
    }
    else
    {
        birthYear--; //here i decrease 1 year means it decrease 1 value
        birthMonth= 12 + currentMonth-birthDetails.month;// here e decrease the birthyear thats why i add 12 because 1year =12 month 
    }
    if(currentDate>=birthDetails.date)
    {
        birthDate=currentDate-birthDetails.date;
    }
    else
    {
        birthMonth--;//here i decrease 1 month means it decrease 1 value
        let days = months[currentMonth -2];// the all month days are not same lie 31,30,28 thats reason we suntract currecmt month from 2 and i mae days function
        birthDate= days + currentDate-birthDetails.date;
    }
    if (birthMonth<0)
    {
birthMonth=11;// if the birthdate given into negative that means it is the last year birthday and it is december
//  but i give 11 because index is count from 0
birthYear--;
    }
    displayResult(birthDate,birthMonth,birthYear);

function displayResult(bDate,bMonth,bYear)
{
    showName.textContent= username.value;
    document.querySelector("age-year").textContent =bYear + "Years";
    document.querySelector("age-month").textContent =bMonth + "Months";
    document.querySelector("age-day").textContent =bDate + "Day";
}
}