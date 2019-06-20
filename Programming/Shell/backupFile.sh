function backupFile() {
	if [-f $1] # Checks if param is valid file and it exists
	then
		local BACK="tmp/${basename ${1}}.$(date +%f).$$" # basename removes any leading components from the file name
		echo "Backing up $1 to ${BACK}"			   # so etc/hosts becomes hosts
		cp $1 $BACK								   # $(date +%f) Year-Month-Day
	else										   # $$ represents the PID of the currently running shellscript	
		# The file is not valid or doesn't exists
		return 1 
	fi											  
}

backupFile /etc/hosts

if [$? -eq 0]
then
	echo "Backup succeeded!"
else 
	echo "BAckup failed!"
	exit 1
fi