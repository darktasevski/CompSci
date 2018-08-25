# Networking

The Internet is not owned by any individual or group. The Internet is a worldwide collection of interconnected networks, cooperating with each other to exchange information using common standards. Through telephone wires, fiber-optic cables, wireless transmissions, and satellite links, Internet users can exchange information in a variety of forms.

---

Local networks come in all sizes. They can range from simple networks consisting of two computers, to networks connecting hundreds of thousands of devices. Networks installed in small offices, or homes and home offices, are referred to as Small Office Home Office (SOHO) networks. SOHO networks enable the sharing of resources, such as printers, documents, pictures and music between a few local users.

In business, large networks can be used to advertise and sell products, order supplies, and communicate with customers. Communication over a network is usually more efficient and less expensive than traditional forms of communication, such as regular mail or long distance phone calls. Networks allow for rapid communication such as email and instant messaging, and provide consolidation and access to information stored on network servers.

Business and SOHO networks usually provide a shared connection to the Internet. The Internet is considered a "network of networks" because it is literally made up of thousands of local networks that are connected to each other.

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
