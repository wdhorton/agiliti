class Api::StoriesController < ApplicationController
  def index
    stories = Story.where(project_id: params[:project_id])
    render json: stories
  end
end
