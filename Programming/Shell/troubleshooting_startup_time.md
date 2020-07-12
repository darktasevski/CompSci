# Troubleshooting zsh

```
for i in $(seq 1 10); do /usr/bin/time zsh -i -c exit; done
       1.24 real         0.53 user         0.49 sys
       0.95 real         0.50 user         0.43 sys
       0.97 real         0.51 user         0.44 sys
       0.97 real         0.51 user         0.43 sys
       0.94 real         0.50 user         0.41 sys
       0.95 real         0.50 user         0.42 sys
       0.95 real         0.50 user         0.42 sys
       0.94 real         0.50 user         0.41 sys
       0.97 real         0.51 user         0.43 sys
       0.95 real         0.51 user         0.42 sys
```

[Zsh/Bash startup files loading order (.bashrc, .zshrc etc.)](https://shreevatsa.wordpress.com/2008/03/30/zshbash-startup-files-loading-order-bashrc-zshrc-etc/):

-   /etc/zshenv
-   ~/.zshenv
-   /etc/zprofile
-   ~/.zprofile
-   /etc/zshrc
-   ~/.zshrc
-   /etc/zlogin
-   ~/.zlogin
