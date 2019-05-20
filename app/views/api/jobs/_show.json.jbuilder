json.set! job.id do
  json.extract! job, :id, :name, :date, :start, :end, :truck_id
end
