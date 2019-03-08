# Interesting concepts

-   [Principle of least privilege](bear://x-callback-url/open-note?id=ACE8680D-7057-49D5-A6C1-585DA341BD33-521-00003F500D1F4800&header=Principle%20of%20least%20privilege)

## Principle of least privilege

The principle means giving a user account or process only those privileges which are essential to perform its intended function. For example, a user account for the sole purpose of creating backups does not need to install software: hence, it has rights only to run backup and backup-related applications. Any other privileges, such as installing new software, are blocked. The principle applies also to a personal computer user who usually does work in a normal user account, and opens a privileged, password protected account (that is, a superuser) only when the situation absolutely demands it.

When applied to users, the terms least user access or least-privileged user account (LUA) are also used, referring to the concept that all user accounts at all times should run with as few privileges as possible, and also launch applications with as few privileges as possible.

The principle of least privilege is widely recognized as an important design consideration in enhancing the protection of data and functionality from faults (fault tolerance) and malicious behavior (computer security).

Benefits of the principle include:

    * Better system stability. When code is limited in the scope of changes it can make to a system, it is easier to test its possible actions and interactions with other applications. In practice for example, applications running with restricted rights will not have access to perform operations that could crash a machine, or adversely affect other applications running on the same system.
    * Better system security. When code is limited in the system-wide actions it may perform, vulnerabilities in one application cannot be used to exploit the rest of the machine. For example, Microsoft states “Running in standard user mode gives customers increased protection against inadvertent system-level damage caused by "shatter attacks" and malware, such as root kits, spyware, and undetectable viruses”.
    * Ease of deployment. In general, the fewer privileges an application requires the easier it is to deploy within a larger environment. This usually results from the first two benefits, applications that install device drivers or require elevated security privileges typically have additional steps involved in their deployment. For example, on Windows a solution with no device drivers can be run directly with no installation, while device drivers must be installed separately using the Windows installer service in order to grant the driver elevated privileges.
