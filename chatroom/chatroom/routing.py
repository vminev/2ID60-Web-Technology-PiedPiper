from channels.routing import route
from .connections import ws_add, ws_message, ws_disconnect

channel_routing = [
    route("websocket.connect", ws_add, path=r"^/roomchat/(?P<room_id>\d+)$"),
    route("websocket.receive", ws_message, path=r"^/roomchat/(?P<room_id>\d+)$"),
    route("websocket.disconnect", ws_disconnect, path=r"^/roomchat/(?P<room_id>\d+)$"),
]