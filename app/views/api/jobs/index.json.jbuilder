json.jobs do
  @jobs.each do |job|
    json.partial! "show", job: job
  end
end
