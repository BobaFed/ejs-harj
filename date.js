exports.getDay = function () {  // export function 
    const today = new Date();
    const myWeekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return myWeekDay[today.getDay()];
 };