class Api::JobsController < ApplicationController
  def index
    @jobs = Job.all
  end

  def create
    j_params = params[:job]
    @job = Job.new(name: j_params[:name], date: j_params[:date])
    @job.start = Time.new(2000, 1, 1, j_params[:s_hour], j_params[:s_min]) if j_params[:s_hour] && j_params[:s_min]
    @job.end = Time.new(2000, 1, 1, j_params[:e_hour], j_params[:e_min]) if j_params[:e_hour] && j_params[:e_min]

    @job.truck_id = Truck.find_open_truck(@job.date, @job.start, @job.end)

    if @job.save
      render :show
    else
      render json: @job.errors.full_messages, status: 422
    end
  end

  private

  def job_params
    params.require(:job).permit(:name, :date, :s_hour, :s_min, :e_hour, :e_min)
  end
end
