class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.boolean :completed, default: false
      t.string :title, null: false

      t.timestamps
    end
  end
end
