import * as DateFns from "date-fns";

export function formattedTime(seconds) {
  var helperDate = DateFns.addMilliseconds(new Date(0), seconds);
  return DateFns.format(helperDate, "mm:ss");
}
