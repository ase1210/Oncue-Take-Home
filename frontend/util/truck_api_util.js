export const getTrucks = () =>
  $.ajax({
    method: "GET",
    url: "/api/trucks",
    dataType: "json"
  });

export const postTruck = truck =>
  $.ajax({
    method: "POST",
    url: "/api/trucks",
    dataType: "json",
    data: { truck }
  });
