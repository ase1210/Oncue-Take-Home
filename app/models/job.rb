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

  def has_conflict?(date, s_time, e_time)
    return self.date == date && (
 # does the new job fall completely within the existing job?
             self.start < s_time && self.end > e_time ||
             # does the new job start within the existing job?
             self.end > s_time && self.start <= s_time ||
             # does the new job end within the existing job?
             self.end >= e_time && self.start < e_time)
  end
end
