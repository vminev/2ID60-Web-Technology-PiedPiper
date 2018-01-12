from channels import Group
from .auth_token import rest_token_user
from channels.sessions import channel_session
import json

from roomchat.models import RoomChat
from django.contrib.auth.models import User


@channel_session
@rest_token_user
def ws_add(message, room_id):
    try:
        room = RoomChat.objects.get(id=room_id)
    except RoomChat.DoesNotExist:
        room = None

    if room is not None:
        members = room.members.all()

        if message.user is not None and message.user in members:
            message.channel_session['username'] = message.user.username
            message.channel_session['user_id'] = message.user.id
            # TODO: Add user to active users
            # room.active_users.add(message.user)
            Group("room-" + room_id).send({'text': json.dumps({'type': 'join', 'user': message.user.username})})
            message.reply_channel.send({"accept": True})
            Group("room-" + room_id).add(message.reply_channel)
        else:
            message.reply_channel.send({"accept": False, "text": "You are not a member of the room."})
    else:
        message.reply_channel.send({"accept": False, "text": "Room does not exist."})



@channel_session
def ws_message(message, room_id):
    user_id = message.channel_session['user_id']

    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        user = None

    try:
        room = RoomChat.objects.get(id=room_id)
    except RoomChat.DoesNotExist:
        room = None

    if room is not None and user is not None and user in room.active_users.all():
        Group("room-" + room_id).send({
            "text": json.dumps({'type': 'message', 'user': message.channel_session['username'], 'text': message.content['text']}),
        })


@channel_session
def ws_disconnect(message, room_id):
    Group("room-" + room_id).discard(message.reply_channel)
    Group("room-" + room_id).send({'text': json.dumps({'type': 'leave', 'user': message.channel_session['username']})})
