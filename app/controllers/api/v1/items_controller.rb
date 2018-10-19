module Api::V1
  class ItemsController < ApplicationController

    def index
      @items = Item.order('created_at DESC')
      render json: @items
    end

    def create
      @item = Item.create(item_params)
      render json: @user
    end

    private

    def item_params
      params.require(:item).permit(:completed, :title)
    end
  end
end
