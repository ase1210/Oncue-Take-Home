class Api::TrucksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @trucks = Truck.all.includes(:jobs)
  end

  def create
    @truck = Truck.new(name: params[:truck][:name])
    @truck.start_time = Time.new(1, 1, 1, params[:truck][:start_time])
    @truck.end_time = Time.new(1, 1, 1, params[:truck][:end_time])

    if @truck.save
      render :show
    else
      render json: @truck.errors.full_messages, status: 422
    end
  end

  private

  def truck_params
    params.require(:truck).permit(:name, :start_time, :end_time)
  end
end
