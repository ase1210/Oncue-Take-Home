export const selectTruckJobs = state => {
  const truckJobs = {};
  Object.values(state.entities.jobs).forEach(job => {
    truckJobs[job.truck_id] = truckJobs[job.truck_id] || [];
    truckJobs[job.truck_id].push(job);
  });
  return truckJobs;
};

export const selectTrucks = state => {
  return Object.values(state.entities.trucks).map(truck => {
    return { id: truck.id, name: truck.name };
  });
};
