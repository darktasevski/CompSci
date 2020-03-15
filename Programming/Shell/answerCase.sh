#! /bin/bash

read -p "Enter y or n: " ANSWER

case "$ANSWER" in
	[yY] | [yY] [eE] [sS])
		echo "You've answered yes."
		;;
	[nN] | [nN] [oO])
		echo "You've answered no."
		;;
	*)
		echo "Invalid answer"
		;;
esac