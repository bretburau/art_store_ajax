class ArtistsController < ApplicationController
  before_action :get_artist, only: [:show, :reports, :cp]

  def show
    render json: @artist, status: 200
  end

  def reports
    @cart = Cart.submitted.most_valuable
  end

  def index
    render json: Artist.all
  end

  def cp
    render :show
  end


  private

  def get_artist
    @artist = Artist.find(params[:id])
  end
  
end
