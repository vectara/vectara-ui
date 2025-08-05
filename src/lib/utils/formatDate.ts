export const formatDate = (date: Date, hasTime = false, showSeconds = true) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  if (hasTime) {
    options.hour = "numeric";
    options.minute = "2-digit";

    if (showSeconds) {
      options.second = "2-digit";
    }
  }

  return Intl.DateTimeFormat(navigator.language, options).format(date);
};
