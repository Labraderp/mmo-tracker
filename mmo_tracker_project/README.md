!!! Set up your secret key in this directory with a .env file !!!

To maintain security, this project requires your secretkey to be located
in an untracked .env file. Before launching, ensure you install dotenv
python library using the following command:

pip install python-dotenv

Create a file named ".env" within your project directory. This is where
django will look for your environment variable.

Open .env and insert the following code:

env=prod
secretkey='yoursecretkeyhere'

Obviously, replace yoursecretkeyhere with your secret key. Leave the single
quotes around the key.

Check your settings.py file to make sure lines 27 and 28 (or if modified,
underneath the #SECURITY WARNING section) reflect the following:

load_dotenv()
SECRET_KEY = os.environ('secretkey')

Check your imports at the top of the file. You should see:

from dotenv import load_dotenv
import os

Enjoy the application :)
