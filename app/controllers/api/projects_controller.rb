class Api::ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: projects
  end

  def create
    project = Project.create!(project_params)
    render json: project
  end

  def update
  end

  def destroy
  end

  private

  def project_params
    params.require(:project).permit(:name, :public, :start_time, :description, :profile_content, :account_id)
  end

end
