import os
from message_helper import message_helper
from create_twilio_message import create_twilio_message

to_number =  os.getenv('TO_NUMBER')
from_number = os.getenv('FROM_NUMBER')

def main(request_data):
    global from_number, to_number
    custom = False

    # Handle the input and configure the message
    try:
        print(request_data)

        name = request_data['name']
        input_text = request_data['message']
        sender_number = request_data['number']
        body_message = message_helper(name, input_text, sender_number)
        custom = True

    except Exception:
        body_message = "Someone sent an SMS, but there was no custom message."

     # Send the message
    try:
        message = create_twilio_message(body_message, to_number, from_number)

        print(message.sid)

        return {
            "body": {
                "status": ("Custom message sent %s." if custom else "Default message sent %s.") % os.getenv('REACT_APP_MY_NAME')
            }
        }

    except Exception as e:
        return {
            "statusCode": 400,
            "body": {
                "error": str(e)
            }
        }
