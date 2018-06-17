const getAverage = (data, isForEachDay) => {

  if(!isForEachDay) {
    let total = data.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.visits;
    }, 0);
  
    const numberDays = data.length;
    const averageVisits = total / numberDays;
    return { averageVisits };
  }
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const averageWeekDay = {
    Monday:{
      averageVisits: 0
    },
    Tuesday:{
      averageVisits: 0
    },
    Wednesday:{
      averageVisits: 0
    },
    Thursday:{
      averageVisits: 0
    },
    Friday:{
      averageVisits: 0
    },
    Saturday:{
      averageVisits: 0
    },
    Sunday:{
      averageVisits: 0
    }
  };

  data.forEach(element => {
    averageWeekDay[weekday[element.date.getDay()]] .averageVisits += element.visits;
  });

  return averageWeekDay;
};

module.exports = getAverage;
