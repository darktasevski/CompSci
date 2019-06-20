#! bin/bash

USER=$1 # the first parameter should be user

echo "Executing script: $0"
echo "Archiving user: $USER"

# Lock the account
passwd -l $USER

# Create an archive of the user's home directory
tar cf /archives/${USER}.tar.gz /home/$USER