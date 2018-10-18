class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.boolean :completed, default: true
      t.string :task, null: false

      t.timestamps
    end
  end
end
