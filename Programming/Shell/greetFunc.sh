#! /bin/bash

function greet() {
	for NAME in $@
	do
		echo "Nice to meet you $NAME"
	done
}

greet Lara Jonah Eric