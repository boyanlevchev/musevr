# class CustomFailure < Devise::FailureApp
#   def redirect_url
#     request.headers["HTTP_REFERER"]
#   end

#   def respond
#     if http_auth?
#       http_auth
#     else
#       redirect
#     end
#   end
# end
