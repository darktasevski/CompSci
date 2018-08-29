# Networking

The Internet is not owned by any individual or group. The Internet is a worldwide collection of interconnected networks, cooperating with each other to exchange information using common standards. Through telephone wires, fiber-optic cables, wireless transmissions, and satellite links, Internet users can exchange information in a variety of forms.

---

Local networks come in all sizes. They can range from simple networks consisting of two computers, to networks connecting hundreds of thousands of devices. Networks installed in small offices, or homes and home offices, are referred to as Small Office Home Office (SOHO) networks. SOHO networks enable the sharing of resources, such as printers, documents, pictures and music between a few local users.

In business, large networks can be used to advertise and sell products, order supplies, and communicate with customers. Communication over a network is usually more efficient and less expensive than traditional forms of communication, such as regular mail or long distance phone calls. Networks allow for rapid communication such as email and instant messaging, and provide consolidation and access to information stored on network servers.

Business and SOHO networks usually provide a shared connection to the Internet. The Internet is considered a "network of networks" because it is literally made up of thousands of local networks that are connected to each other.

## Terms

### MAC Addresses

MAC stands for Media Access Control. MAC addresses are unique addresses that are encoded by the manufacturer onto network interface card (NIC). Each NIC has a globally unique MAC address but we typically don't route using MAC addresses, they're used just for OSI layer 2 - Data link layer. While we can't route using MAc addresses we can point information to specific devices and specific NICs using their MAC addresses. MAC address is what we can consider as our physical address of the NIC on our machine.

### IP Addresses

In contrast to MAC addresses we have IP addresses. They are able to be routed over networks around the world. They are level 3 in OSI model - Network layer. They aren't physical addresses, they're actually logical addresses that are mapped to a single physical address on a NIC.

### EUI-64

EUI-64 is another name for IPv6 global unicast. IPv6 is a much larger set of binary digits that can be used to create IP addresses than our current IPv4. Global unicast is an address that is specific for a single network interface across the world. So we can send information to an IPv6 address and it will routable around the world to a specific device. Because of this IPv6 is not a logical address mapped to a physical device or single MAC address, it is an address that is specific for a single device because we don't have to translate/transform this address to a MAC address in order to acquire a data link, our IPv6 would automatically do that for us, so it's considered as a layer 2 data link.

### Frames

Frames are layer 2 protocol delivery unit. Segments of data with a beginning and and end.

### Packets

Packet is layer 3 protocol delivery unit. Segments of data with a beginning and and end.

### Switches

Switches are devices on our network which allows us to connect to multiple devices that are on the same subnet.
Switch is Layer 2 device, as the map to MAC addresses.

### Routers

Routers are referred to as a layer level 3 switch. They allow us to route addresses, IP addresses and send data across these multiple different networks because we're working with Ip addresses.

### Multi Layer Switches

Multi Layer Switches are devices that can operate both on layer 2 and layer 3. They are usually a devices that are performing switching functions, but they can also perform routing functions if needed.

### Hub

Hub is sort of like a dumb switch. A Hub just takes all incoming data that is receiving and then just sends it out to everybody that is connected to it. It allows us to pass data onto multiple computers in the network but it isn't going to do mapping of any MAC or IP addresses. They are layer 2 data link.

### Encryption devices

Encryption devices may be physical devices on our network that perform encryptions at one point and then decryption at another point. There are going to be layer 6 devices. Layer 6 is formatting our data, doing encryption and decryption among other things.

### Cable

Cable is layer 1 physical device, something we can plug in and connect.

### Network Interface Card

NIC is also layer 1 physical device.

### Bridge

Bridge is layer 2 dat link device, because it provides point to point connectivity.

## OSI Model

OSI model is the way of thinking about networks, that allows us to divide it into layers. The OSI model consists of seven different layers:

    - Layer 1 - Physical layer
    - Layer 2 - Data Link layer
    - Layer 3 - Network layer
    - Layer 4 - Transportation layer
    - Layer 5 - Session layer
    - Layer 6 - Presentation layer
    - Layer 7 - Application layer

> Mnemonic: **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way

### OSI Model Layer 1 Physical

> Anything that can be touched, measured and seen.

This first layer consists of everything from cables and bits, to electrical impulses and wireless data travelling back and forth. This is the layer where data is converted to signals and vice versa. Also included in the physical layer are pinouts, network interface cards, voltages and cable specifications.

### OSI Model Layer 2 Data Link

> Provides point to point connectivity

Essentially, this layer is about access to a computer, access to a device. This is the layer that packages bits and data into frames. Frames are segments of data that we are pushing over layer 2 connectivity. It is a transfer from point to point and MAC (media access control) addresses.

### OSI Model Layer 3 Network

> IP/routing

It is commonly referred to as the IP layer, because this is where we're going to use IP addresses . This is where logical addresses are translated into physical and network routing, re-assembly and fragmentation are performed.

This layer is a functional means of transferring data through one or more networks, and this is a layer where we're transfering data into another network.

Here we're going to perform network functions, and this is where fragmentation and reassembling of data into different packets is going to happen. As we have routers on the level 3, they are going to be performing this network functions, they're be going to take our packets, looking at the IP addresses, and sending them to the particular destination, or will know from where they've came from.

IP addresses are logical addresses, they're not physical addresses hard-coded into our network interface cards (NIC). We can use same address for another computer if we want, and contrary to MAC addresses which are unique, IPs doesn't have to be unique. Our NIC have both MAC and IP addresses.

Transferring data through MAC addresses over global scale is currently infeasible with way we currently have our network setup. We need to be able to take a computer's MAC address, to assign a particular IP address to that MAC address and then route a data through MAC addresses through networks.
Also, we can't transfer data to other computer by it's MAC address, we need to use an IP address, because between us and the computer on other network we have to go through a router, and router needs to have an IP address, that it can use in order to transmit information.

```
                             packets
Computer A |<-------router------------router-------------| Computer B
NIC MAC IP |--------router------------router------------>| NIC MAC IP
                      IP     packets    IP
```

### OSI Model Layer 4 Transport

> TCP/UDP for management and session data

This layer provides us with management and control and also helps us to transfer data that we send and receive. It helps splits communications into different packages using either Transmission Control Protocol (TCP) or User Data Protocol (UDP). These protocols provide for either verification or no verification of delivery, also this protocols are base for all other protocols.

TCP:

-   provides verification of delivery
-   provides ability to make sure that the sent packets are ordered in proper way
-   allows retransmissions of packets if they are bad

UDP:

-   does not provide verification of delivery
-   is going to just stream packages
-   is mostly used for:
    -   video or music streaming
    -   VOIP call (Skype)
    -   because verifying that package is delivered is going to take time, and in this situations we want the fastest response time possible. So our PC will just push new packages without verifying before sending another package, like TCP does.

### OSI Model Layer 5 Session

> Connection management

Session layer of the OSI model is the traffic control layer. This is where traffic between computers is controlled and where connections are established, managed and terminated. This layer decides who can send when, and who can send what, what type of protocol will be used. Basically, this layer controls whole conversation happening with layers 1 through 4.

### OSI Model Layer 6 Presentation

> Formatting data

This layer translates applications into data so it can be understood and displayed by the application layer. This layer also formats the data for sending (encryption) so it can be decrypted once it is received.

### OSI Model Layer 7 Application

> Manages how application are able to send and receive over a network

This is the layer which enables applications to access the network and helps to synchronize communications. It includes several protocols like:

-   SMTP - for sending emails
-   HTTP - for resolving web pages and browsing the internet
-   FTP - File Transfer Protocol
-   SSL - Secure Socket Layer
-   SSH - Secure Shell
-   ...

## TCP/IP Model

This model has four layers which are working together to perform network communications

-   Network Interface (layers 1 and 2 of OSI Model)
-   Internet Layer (layers 3 of OSI Model)
-   Transport Layer (layer 4 of OSI Model)
-   Application Layer (layers 4, 6 and 7 of OSI Model)

> Mnemonic: **N**ever **I**ngest **T**oxic **A**vocados

## IP Addresses

IP addresses are logically mapped addresses that map to a physical address. IP addresses aren’t mapped to a computer and can be mapped to any MAC we want, they can change and move. They are not hard encoded and are set statically. An IP address is a 32-bit binary address and is divided into four sections called octets, this is because each section has eight numbers.

128 | 64 | 32 | 16 | 8 | 4| 2 | 1

10110000.11111111.00000000.11110000 = 176.255.0.240
192.168.1.1 = 11000000.10101000.00000001.00000001

### IP Address Classes

IP address classes allow us to divide up a host of IP addresses between a network and a host segment. The network segment of the IP address tells us the number of the network we are on. There are four classes of IP addresses:

-   Class A
-   Class B
-   Class C
-   Class D

For example 192.168.1.1 is class C address.

```
           Network ID | Host ID
Class A    192.       | 168.1.1
Ranges from 1.0.0.0 to 126.0.0.0  Subnet mask: 255.0.0.0

           Network ID | Host ID
Class B    192.168.   | 1.1
127 is going to be local host - our own NIC (127.0.0.1)
Ranges from 128.0.0.0 to 191.255.0.0  Subnet mask: 255.255.0.0

           Network ID | Host ID
Class C    192.168.1. | 1
Ranges from 192.0.0.0 to 223.255.255.0  Subnet mask: 255.255.255.0

           Network ID | Host ID
Class D    192.168.1. | 1
Ranges from 224.0.0.0 to 239.0.0.0  Subnet mask: N/A
Class D is used for multicasting
```

> Multicasting addresses are sending data to multiple different addresses.

We don't need gigantic range of IP addresses we have if we are using Class A IP address, unless we re Internet service provider.

Each class separates our network id from our host id at a different point
Subnet mask is what let us know what portion of the a IP address is a host portion and what portion is a network portion.

### APIPA

> APIPA stands for Automatic Private Internet Protocol Addressing.

APIPA is an address which is automatically assigned to our IP address when no DHCP is received. When an APIPA address is received, it means something is wrong and the DHCP server needs to be checked to see any issues with connectivity. An APIPA address is unable to connect to the Internet and is unable to communicate with other computers.

> APIPA will automatically assign us address in range: 169.254.x.x, id DHCP is unavailable

A public IP address is a singularly unique address for a computer that could be located anywhere in the world and is globally routable, whereas a private IP address is an address that is not routable. There are four classes of private IP addresses:

-   Class A
-   Class B
-   Class C

Our home devices usualy have only private IP addresses, while router which is connecting us to the internet have a public IP address, by which anyone in the world can reach us.

### CIDR

Classless Inter Domain Routing (CIDR). CIDR allows us to have variable-length subnet masks. Subnet masks within CIDR are not within the standard classes of A,B or C and CIDR notation is used when standard subnet masks do not work and allows us to break up subnet masks and work with IP addresses.

We display CIDR as `/n`, `n` can be anything from 1 to 31. This number is a prefix; when we break our subnet mask into individual bits, this number is going to be the number of those bits, starting from left to right that are all ones.

```
233.233.0.0 = /16 = 11111111.11111111.00000000.00000000
255.240.0.0 = /12 = 11111111.11110000.00000000.00000000
```
