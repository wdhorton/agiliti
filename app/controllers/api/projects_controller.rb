class Api::ProjectsController < ApplicationController
  def index
    projects = current_user.projects
    render json: projects
  end

  def create
    account = Account.where(id: project_params[:account_id])[0]

    if !account
      account = current_user.accounts.create(name: params[:project][:account_name])
    end

    project = Project.create!(project_params.merge({ start_time: Time.now, account_id: account.id }))
    render json: project
  end

  def show
    project = Project.includes(:stories).find(params[:id])
    render json: project
  end

  def update
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy! if current_user.projects.include?(project)
    render json: project
  end

  private

  def project_params
    params.require(:project).permit(:name, :public, :start_time, :description, :profile_content, :account_id)
  end

end
