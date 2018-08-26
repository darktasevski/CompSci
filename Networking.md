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

> **P**lease **D**o **N**ot **T**hrow **S**ausage **P**izza **A**way

### OSI Model Layer 1 Physical

This first layer consists of everything from cables and bits, to electrical impulses and wireless data travelling back and forth. This is the layer where data is converted to signals and vice versa. Also included in the physical layer are pinouts, network interface cards, voltages and cable specifications.

### OSI Model Layer 2 Data Link

Essentially, this layer is about access to a computer, access to a device. This is the layer that packages bits and data into frames. Frames are segments of data that we are pushing over layer 2 connectivity. It is a transfer from point to point and MAC (media access control) addresses.

### OSI Model Layer 3 Network

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

Session layer of the OSI model is the traffic control layer. This is where traffic between computers is controlled and where connections are established, managed and terminated. This layer decides who can send when, and who can send what, what type of protocol will be used. Basically, this layer controls whole conversation happening with layers 1 through 4.

### OSI Model Layer 6 Presentation

This layer translates applications into data so it can be understood and displayed by the application layer. This layer also formats the data for sending (encryption) so it can be decrypted once it is received.

### OSI Model Layer 7 Application

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

> **N**ever **I**ngest **T**oxic **A**vocados
