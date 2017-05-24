class Api::TicketsController < ApplicationController
  def index
    @tickets = current_user.tickets
    render "api/tickets/index"
  end

  def create
    @ticket = Ticket.new(ticket_params)

    if @ticket.save
      render "api/tickets/show"
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def destroy
    @ticket = Ticket.find(params[:id])
    @ticket.destroy
    render "api/tickets/show"
  end

  private
  def ticket_params
    params.require(:ticket).permit(:event_id, :quantity)
  end
end
