# [FSM] FullStack notes

## Managing servers

```bash

ssh -i .ssh/id_rsa darko@167.99.240.236
# -i stands for identity, we're providing an ssh key here as access token to server
# darko is the name of the user, and ip address is self explanatory.
# here I say that I want to login as user darko to server at this ip address using this ssh key
```

On VPS creation update distro (apt update && apt upgrade, if ubuntu), and create a new user(s):

```shell
apt update && apt upgrade
# ...
# create new user
adduser $USERNAME
# add user to sudo group
usermod -aG sudo $USERNAME
```

You can switch between users by using `su` command:

```shell
su darko
```

```shell
cat .ssh/id_rsa.pub | ssh darko@167.99.240.236 " mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

Simple shellscript to add ssh key from local machine to authorized keys on server. After setting up this (doublecheck!), disable root login and in disable password login `/etc/ssh/sshd_config`. Always use ssh!

If you have a domain you can map domain name to server IP address by adding `A Record`

![Example](https://www.dropbox.com/s/2h8m23kalng62ov/Screenshot%202019-09-20%2021.22.40.png?dl=0)

> The A record maps a name to one or more IP addresses, when the IP are known and stable. The CNAME record maps a name to another name.

## Nginx

> A HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server

```shell
# you can read default nginx config here
sudo less /etc/nginx/sites-available/default
```

Start up nginx service:

```shell
sudo service nginx start
```

We can reroute traffic to particular port by editing `location /`` part of the config to look something like this:

```conf
location / {
    proxy_pass http://127.0.0.1:3001/;
}
```

## Server security

> Disable root login and in disable password login `/etc/ssh/sshd_config`. And always use ssh! Add trusted (public) ssh keys to `.ssh/authorized_keys` for all users with acess to the server. `nmap` is an usefull tool to see what ports are open on your server

We can use `iptables` to configure network rules:

```shell
 sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
 # where:
 # -A append rule
 # -p protocol (tcp, icmp)
 # --dport destination port
 # -j jump (DROP, REJECT, ACCEPT, LOG)
```

Examples:

`iptables` rule to block all outgoing HTTP connections:

```shell
iptables -A OUTPUT -p tcp --dport 80 -j REJECT
```

An `iptables` rule to only allow icmp connections on port 892 from the IP address 192.0.0.1:

```shell
iptables -A INPUT -s 192.0.0.1 -p icmp --dport 892 -j ACCEPT
```

A better way to control ports on server than `iptables` is `ufw`.

ufw rule to block all outgoing HTTP connections:

```shell
ufw reject out http
```

### Automatic Updates

For Ubuntu:

```shell
sudo apt install unattended-upgrades
```

This lib is going to take care of keeping software up to date. To configure it edit this file `/etc/apt/apt.conf.d/20auto-upgrades` (Ubuntu).

This are defaults (1 stands for yes):

```shell
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
```

We can set up what upgrades/updates we want to keep our eye on in this config `/etc/apt/apt.conf.d/50unattended-upgrades`. Usually we want only security updates for servers.

### Fail2ban

Fail2ban scans auth.log file, and have rules that are blocking users from ip addresses that fail to login several times. This is particularly useful against server-farms in China trying to bruteforce break into the servers. For example, if user prom an ip address fails to login 3 times in the row, he'll be blocked from trying again for the next hour, etc.

> If you misconfigure fail2ban, you can lock yourself out of your server!!!

Ubuntu setup:

```shell
sudo apt install fail2ban # Install fail2ban

sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local # Copy jail conf as local configuration. Any changes made to jail.local will override jail.conf.

sudo vi /etc/fail2ban/jail.local # Edit conf if needed
```

## Shellscripting

`find` search file names

```shell
find /bar -name foo.txt

# find all log files inside var/log dir
find /var/log -type f -name *.log

# find all empty files in /etc
find /etc -type f -empty
```

`grep` search file contents

### Redirection operators

![Redirection operators cheatsheet](https://www.dropbox.com/s/xu4kdpdjkjecrdr/Screenshot%202019-09-22%2012.48.01.png)

### NPM scripts

To make a local node script available to whole system just run `npm i -g` inside the directory where the script is. You'll need add first `bin` field to package.json and put your scripts there. (mind blown)

## HTTP Certificates

> The easiest way to make your site secure is through [Certbot](https://github.com/certbot/certbot). A bit complicated walkthrough for setting up certificates can be found [here](https://github.com/diafygi/acme-tiny). In the end, we are using [Let's Encrypt](https://letsencrypt.org/) certificates.

Certbot setup:

```shell
sudo add-apt-repository ppa:certbot/certbot # Add the certbot repository
sudo apt update # Pull in new repository information
sudo apt install python-certbot-nginx # Install certbot with nginx plugin
```

> Make sure that your 80/tcp port is open, otherwise cert challenge is going to fail

```shell
sudo certbot --nginx # Use certbot to get certificate

sudo certbot renew --dry-run # Test auto renew
```

## Cron jobs

> Periodic tasks

![Cron job example](https://www.dropbox.com/s/zlanj02uu8rp24g/Screenshot%202019-09-22%2017.00.18.png)

Useful tool: crontab.guru

```shell
sudo crontab -e # Open crontab for editing

00 12 * * 1 certbot renew # Renew certificate every week at 12pm on Monday
```

## Caching

We can set expires headers for static assets in our nginx config:

```conf
 location /static/ {
                expires 30d;
                proxy_pass http://127.0.0.1:3001/static/;
}
```

Tho, 30d days of cashing is not the best practice, as user is going to see latest changes in 30 days if update happens meanwhile they are in caching period (or do hard refresh, but explain that to a common user). It should be set in hours or eventually days for assets that is known that is not going to change.

We can also use server side caching with nginx (Example: take look at nginx slowfile route caching config at dtasevski.xyz). Take care of long cache values, client can't request new assets even with hard reload when the cache is on the server.
