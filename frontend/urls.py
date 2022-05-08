from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index),
    path('techOp/<int:pk>', views.index),
    # path('shift/', views.index),
    path('cause/', views.index),
    path('login/', views.index)
]
