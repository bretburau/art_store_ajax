class SessionsController < ApplicationController
  def new
    redirect_to user_path(current_user) if logged_in?
  end

  def create
    if request.env["omniauth.auth"]
      @user = User.from_omniauth(request.env["omniauth.auth"])
    else
      @user = User.find_by(email: params[:user][:email])
      return head(:forbidden) unless !@user.nil? && @user.authenticate(params[:user][:password])
    end
    session[:user_id] = @user.id
    @user.current_cart ||= @user.carts.build #left in for nil protection
    redirect_to root_path
  end

  def destroy
    session.clear
    redirect_to login_path
  end
end
