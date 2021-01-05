from rest_framework.renderers import JSONRenderer
class Utf8JsonRenderer(JSONRenderer):
    charset = 'utf-8'