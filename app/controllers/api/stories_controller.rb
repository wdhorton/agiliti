class Api::StoriesController < ApplicationController
  def index
    @stories = Story.where(project_id: params[:project_id])
    render json: @stories
  end

  def create
    @story = Story.create!(story_params)
    render json: @story
  end

  private

  def story_params
    params.require(:story).permit(:name, :story_type, :current_state, :project_id, :estimate, :description)
  end
end
