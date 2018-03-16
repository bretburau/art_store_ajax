class SessionsController < ApplicationController
  def new
    redirect_to user_path(current_user) if logged_in?
  end

  def create
    @user = User.find_by(email: params[:user][:email])
    return head(:forbidden) unless @user.authenticate(params[:user][:password])
    session[:user_id] = @user.id
    raise session.inspect
    redirect_to user_path(@user)
  end

  def destroy
    session.delete :email
    redirect_to login_path
  end
end
