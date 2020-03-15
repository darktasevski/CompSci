#! bin/bash

HOST="google.com"
RETURN_CODE=$?

ping -c 1 $HOST

if ["$RETURN_CODE" -eq "0"]
then
    echo "$HOST reachable"
else
    echo "$HOST unreachable"
fi