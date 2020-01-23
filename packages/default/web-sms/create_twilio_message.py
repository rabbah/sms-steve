import os
from twilio.rest import Client

# Create auth and configure numbers
account_sid = os.getenv('ACCOUNT_SID')
auth_token = os.getenv('AUTH_TOKEN')
client = Client(account_sid, auth_token)

def create_twilio_message(body_message, to_number, from_number):
    message = client.messages \
                        .create(
                            body = body_message,
                            from_ = from_number,
                            to = to_number
                        ) 
    return(message)
