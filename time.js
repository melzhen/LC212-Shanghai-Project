function getShanghaiTime() {
  getTimeHelper("Asia/Shanghai", "上海时间");
}

function getTimeHelper(timeZoneInput, location) {
  let options = {
    timeZone: timeZoneInput,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  formatter = new Intl.DateTimeFormat([], options);
  document.getElementById("clock").innerHTML = `${location}: ${formatter.format(
    new Date()
  )}`;
}
