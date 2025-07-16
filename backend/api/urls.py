
from django.urls import path
from app_accounts import views as Userviews

# from api_Blogs.views import api_BlogView,

app_name = 'api'

urlpatterns = [
  path('register/', Userviews.RegisterView.as_view())
  
  

    
]
