json.set! truck.id do
  json.extract! truck, :id, :name, :start_time, :end_time
end
