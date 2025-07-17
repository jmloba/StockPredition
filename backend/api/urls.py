
from django.urls import path
from app_accounts import views as Userviews
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from api_Blogs.views import api_BlogView,

app_name = 'api'

urlpatterns = [
  path('register/', Userviews.RegisterView.as_view()),
  # for jwt
  path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  
  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),        
  
  path('protected-view/',Userviews.ProtectedView.as_view()),
    

    
]
