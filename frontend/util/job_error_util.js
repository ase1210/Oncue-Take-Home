const jobErrors = {
  "Name can't be blank": "Name can't be blank",
  "Date can't be blank": "Date can't be blank",
  "Start can't be blank": "Enter a valid start time",
  "End can't be blank": "Enter a valid end time",
  "Truck must exist": "There are no trucks available for your selection"
};

export const jobErrorUtil = errors => {
  let newErrors = [];
  errors.forEach(error => {
    let formattedError = jobErrors[error];
    if (error === "Truck must exist") {
      if (newErrors.length === 0) newErrors.push(formattedError);
    } else {
      newErrors.push(formattedError);
    }
  });
  return newErrors;
};
