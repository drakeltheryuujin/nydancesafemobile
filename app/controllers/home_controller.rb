class HomeController < ApplicationController

  def index

    @contact = Contact.new(params[:index])
    @contact.request = request
    if @contact.deliver
      flash.now[:notice] = 'Thank you for your message. We will contact you soon!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :index
    end
  end  

end
