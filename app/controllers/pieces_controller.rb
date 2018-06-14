class PiecesController < ApplicationController
  before_action :get_piece, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource

  def new
    @piece = Piece.new
  end

  def index
    if params[:artist_id]
      @pieces = Artist.find(params[:artist_id]).pieces
    else
      @pieces = Piece.all
      render json: @pieces
    end
  end

  def show
    # render json: @piece.to_json(only: [:name, :prints_available, :original_available, :price], include:[artist: {only: [:id, :name]}])
    render json: @piece
  end

  def create
    @artist = current_artist
    @piece = @artist.pieces.build(piece_params)
    if @piece.save
      redirect_to piece_path(@piece)
    else
      render new_piece_path
    end
  end

  def edit
  end

  def update
    @piece.update(piece_params)
    redirect_to piece_path(@piece)
  end

  def destroy
    @piece.destroy
    redirect_to pieces_path
  end

  private

  def get_piece
    @piece = Piece.find(params[:id])
  end

  def piece_params
    params.require(:piece).permit(:name, :price, :prints_available, :original_available, category_ids:[], categories:[:name])
  end
end
