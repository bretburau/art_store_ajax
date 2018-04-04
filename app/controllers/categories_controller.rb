class CategoriesController < ApplicationController
  before_action :get_category, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource
  def index
    @categories = Category.all
  end

  def show
  end
  
  def new
    @category = Category.new
  end

  def create
    @category = Category.new(category_params)
    @category.save
    redirect_to category_path(@category)
  end

  def edit
  end

  def update
    @category.update(category_params)
    @category.save
    redirect_to category_path(@category)
  end

  def destroy
    @category.destroy
    redirect_to categories_path
  end

  private

  def get_category
    @category = Category.find(params[:id])
  end

  def category_params
    params.require(:category).permit(:name)
  end
end
