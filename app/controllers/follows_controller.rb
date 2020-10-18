class FollowsController < ApplicationController
  before_action :authenticate_user!

  def show
    # binding.pry
    user = User.find(params[:account_id])
    follow_status = current_user.has_followed?(user)
  
    render json: { hasfollowed: follow_status }
  end

  def create
    current_user.follow!(params[:account_id])

    render json: { status: 'ok' }
    # redirect_to account_path(params[:account_id])
  end
end