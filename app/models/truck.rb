# == Schema Information
#
# Table name: trucks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  start_time :time             not null
#  end_time   :time             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Truck < ApplicationRecord
  validates :name, :start_time, :end_time, presence: true

  has_many :jobs,
    primary_key: :id,
    foreign_key: :truck_id,
    class_name: :Job

  def self.find_open_truck(date, s_time, e_time)
    open_trucks = Truck.where("start_time <= ? AND end_time >= ?", s_time, e_time).includes(:jobs)
    trucks = []
    open_trucks.each do |truck|
      trucks << truck.id if truck.jobs.none? { |job| job.has_conflict?(date, s_time, e_time) }
    end
    trucks.sample
  end
end
