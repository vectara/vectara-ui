export const formatDate = (date: Date, hasTime = false) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  if (hasTime) {
    options.hour = "numeric";
    options.minute = "2-digit";
    options.second = "2-digit";
  }

  return Intl.DateTimeFormat(navigator.language, options).format(date);
};
