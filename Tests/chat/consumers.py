from channels import Group
from .auth_token import rest_token_user
from channels.sessions import channel_session


@channel_session
@rest_token_user
def ws_add(message):
    message.channel_session["username"] = message.user.username
    message.reply_channel.send({"accept": True})
    Group("chat").add(message.reply_channel)


@channel_session
def ws_message(message):
    Group("chat").send({
        "text": "[%s] %s" % (message.channel_session["username"], message.content['text']),
    })


@channel_session
def ws_disconnect(message):
    Group("chat").discard(message.reply_channel)
