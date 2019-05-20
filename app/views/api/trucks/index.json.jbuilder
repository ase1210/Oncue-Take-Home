json.trucks do
  @trucks.each do |truck|
    json.partial! "show", truck: truck
  end
end

json.jobs do
  @trucks.each do |truck|
    truck.jobs.each do |job|
      json.partial! "/api/jobs/show", job: job
    end
  end
end
