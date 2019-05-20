export const getJobs = () =>
  $.ajax({
    method: "GET",
    url: "/api/jobs",
    dataType: "json"
  });

export const postJob = job =>
  $.ajax({
    method: "POST",
    url: "/api/jobs",
    dataType: "json",
    data: { job }
  });
