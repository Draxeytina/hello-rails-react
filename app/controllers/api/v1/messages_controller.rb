class Api::V1::MessagesController < ApplicationController
  def index
    message = Message.order('RANDOM()').last
    render json: { message: message.content }
  end
end
