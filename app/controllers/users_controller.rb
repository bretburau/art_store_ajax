class UsersController < ApplicationController
  before_action :get_user, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource
  def new
    redirect_to root_path if logged_in?
    @user = User.new
  end

  def create
    redirect_to root_path if logged_in?
    @user = User.new(user_params)
    @user.name = "%{@user.first_name} %{@user.last_name}" if @user.name.nil?
    @user.current_cart ||= Cart.new
    if @user.save
      session[:user_id] = @user.id
      if params[:type] == "artist"
        @user.permissions = 10
        redirect_to artist_path(@user)
      else
        redirect_to user_path(@user)
      end
    else
      render new_user_path
    end
  end

  def index
  end
  
  def edit
  end

  def update  
    @user.update(user_params)
    if params[:user][:type] == "artist"
      @user.permissions = 10
    elsif params[:user][:type] == "user"
      @user.permissions = 100
    end
    @user.current_cart ||= Cart.new #Nil protection
    @user.save
    redirect_to user_path(@user)
  end

  def show
    redirect_to artist_cp_path(@user) if @user.is_artist?
  end

  def destroy
    @user.destroy
    redirect_to users_path
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name)
  end

  def get_user
    @user = User.find(params[:id])
  end
end
