class Api::EventsController < ApplicationController

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    @event.organizer_id = @current_user.id

    if @event.save
      render "api/events/show"
    else
      render json: @event.errors.full_messages, status: 422 # unprocessable entity
    end
  end

  def update
    @event = Event.find(params[:id])

    if @event.organizer_id == current_user.id
      if @event.update(event_params)
        render "api/events/show"
      else
        render json: @event.errors.full_messages, status: 422 #unprocessable entity
      end
    else
      render json: ["Oops, looks like this event does not belong to you."], status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])

    if @event.organizer_id == current_user.id
      @event.destroy
      render "/"
    else
      render json: ["Oops, this event does not belong to you."], status: 422
    end
  end

  private
  def event_params
    params.require(:event)
      .permit(:title, :location, :date, :time, :description,
              :image, :ticket_price, :ticket_quantity)
  end
end
