class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :name, null: false
      t.date :date, null: false
      t.time :start, null: false
      t.time :end, null: false
      t.integer :truck_id, null: false
      t.timestamps
    end
  end
end
