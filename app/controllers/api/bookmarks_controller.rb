class Api::BookmarksController < ApplicationController
  def index
    @bookmarks = current_user.bookmarks
    render "api/bookmarks/index"
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.user_id = current_user.id

    if @bookmark.save
      @event = @bookmark.event
      render "api/events/show"
    else
      render json: @bookmark.errors.full_messages, status: 422
    end
  end

  def destroy
    current_user_id = current_user.id
    event_id = params[:id].to_i
    @bookmark = Bookmark.where("event_id = ? and user_id = ?", "#{event_id}", "#{current_user_id}").first
    @event = @bookmark.event
    @bookmark.destroy
    render "api/events/show"
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:event_id)
  end
end
