from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from .models import Post
from .serializers import PostSerializer

# ViewSet은 CRUD 가 모두 들어간 API를 자체적으로 만들어 줌
class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
    # common.py 의 REST_FRAMEWORK 에 인증 필요를 정의 하였지만, 
    # 아래와 같이 적용하여 임시적으로 인증을 풀어줌
    # FIXME: 임시적으로 인증 제약을 해제....인증 적용이 필요함
    permission_classes = [AllowAny] 







