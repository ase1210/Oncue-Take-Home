class Api::JobsController < ApplicationController
  def index
    @jobs = Job.all
  end

  def create
    @job = Job.new
    @job.name = params[:job][:name]
    @job.date = params[:job][:date]
    @job.start = Time.new(2000, 1, 1, params[:job][:s_hour], params[:job][:s_min]) if params[:job][:s_hour] && params[:job][:s_min]
    @job.end = Time.new(2000, 1, 1, params[:job][:e_hour], params[:job][:e_min]) if params[:job][:e_hour] && params[:job][:e_min]

    @job.truck_id = Truck.find_open_truck(@job.date, @job.start, @job.end)

    # if truck
    #   @job.truck_id = truck
    # end

    if @job.save
      render :show
    else
      render json: ["There are no trucks available during that timeframe"], status: 422
    end
  end

  private

  def job_params
    params.require(:job).permit(:name, :date, :s_hour, :s_min, :e_hour, :e_min)
  end
end
