class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])

    if @user
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 404 #not found
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422 #unprocessable entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
