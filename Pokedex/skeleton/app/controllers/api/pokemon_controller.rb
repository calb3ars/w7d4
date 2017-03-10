class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      flash[:errors] = @pokemon.errors.full_messages
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense, :moves)
  end
end
