class CartsController < ApplicationController
  def show
    # raise current_user.current_cart.inspect
    redirect_to root_path if !logged_in?
    @cart = Cart.find(params[:id])#current_user.current_cart unless !logged_in?
  end

  def checkout
    @cart = Cart.find(params[:id])
    @cart.status = "submitted"
    @cart.save
    current_user.current_cart = Cart.new ##User won't save if current_cart is nil
    current_user.save
    redirect_to thanks_path
  end

  def thanks
  end
end
