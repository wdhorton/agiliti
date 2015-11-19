class Api::ProjectsController < ApplicationController
  def index
    projects = current_user.projects
    render json: projects
  end

  def create
    project = Project.create!(project_params)
    render json: project
  end

  def update
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy!
    render json: project
  end

  private

  def project_params
    params.require(:project).permit(:name, :public, :start_time, :description, :profile_content, :account_id)
  end

end
