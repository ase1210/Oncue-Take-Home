# == Schema Information
#
# Table name: jobs
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  date       :date             not null
#  start      :time             not null
#  end        :time             not null
#  truck_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Job < ApplicationRecord
  validates :name, :date, :start, :end, presence: true
  validates :start, :end, overlap: {
                            exclude_edges: [:start, :end],
                            scope: [:truck_id, :date],
                          }

  belongs_to :truck,
    primary_key: :id,
    foreign_key: :truck_id,
    class_name: :Truck
end
