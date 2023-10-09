---
layout: ../../layouts/blogPost.astro
title: 'Silence HPE G8 servers, for good(ish).'
pubDate: 2022-09-09
description: "Make HPE G8 servers as silent as a normal desktop"
---

# Silencing HPE servers

Hey there!

Some of you might be running a DL380p G8 (or any other G8 server from HP with iLO 4, which is supported by this tweak), and want it to be nearly silent. I've found a way to do it, which doesn't involve (almost) any physical work! Let's get into it! (I've gotten the fans at a constant 10% (I configured 10% since I get less whine and next-to-nothing ramp ups that way) and am perfectly able to sleep ~3m away from it).

So before we begin, just a quick note:

* I am NOT responsible for any possible damage you may do to your OWN server.
* You should not run any script without checking what it does, especially for random scripts from Reddit.
* You should have physical access to the machine.
* You should have quite some time, ear protection and some GNU/Linux knowledge.
* You have to be root user for this.
* You have to run some sort of Debian GNU/Linux baremetal.
* Make sure to not set a max value, as the server could potentially overheat and harm your components due to i.e. extensive workloads.
* Make sure to save your fan commands somewhere, as the current iLO firmware resets every time on boot.

### Note from their GitHub:
> Please note: At this time, v4.77 is the most recent iLO that has a working patch. After this version, HP has removed many of the control utilities that make patching v2.78 and v2.79 useful. While this may change in the future, bringing useful tools to v2.79 (the current latest) will take an extremely large amount of work. The patching works fine here, it just does not provide access to useful functions

# Installing/prepairing

```sh
sudo apt-add-repository universe
sudo apt update
sudo apt-get install python2-minimal git curl
```

# Install Pip
```sh
curl https://bootstrap.pypa.io/pip/2.7/get-pip.py --output get-pip.py && sudo python2 get-pip.py
```

```sh
python2 -m pip install virtualenv
git clone --recurse-submodules https://github.com/kendallgoto/ilo4_unlock
cd ilo4_unlock
python2 -m virtualenv venv source venv/bin/activate
pip install -r requirements.txt
```

# Building

```sh
./build.sh init
This will build iLO version 2.77

./build.sh 277
```

# Patching

Note: this will make the server scream for ~5 minutes. To patch, you need to have iLO Security Override set to enabled. On a DL380p G8 I had to flip the first DIP switch on the motherboard, just under the PSU's. Obviously do this whilst the server is powered down.

Make sure any HP libraries are unloaded and let's go

```sh
sudo modprobe -r hpilo
mkdir -p flash
cp binaries/flash_ilo4 binaries/CP027911.xml flash/
cp build/ilo4_277.bin.patched flash/ilo4_250.bin
cd flash
```

## Flash iLO 4. This will make the server SCREAM!!!

```sh
sudo ./flash_ilo4 --direct
```

Once the command has finished and the fans are back to normal, remove power and disable iLO Security Override.

## Silencing the fans

You can ssh into your iLO and type `fan info g`. Lower the fans with these commands:

```sh
fan pid x lo 1000
```

Here, x is the pid with an astherisk( * ) next to it.


## Scripting

Since iLO fan settings will reset on reboot, we can easily script this.

```sh
#!/bin/sh

PASSWORD="iLO_PASSWORD"
USERNAME="Administrator"
ILOIP="10.0.0.115"

sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan p 00 min 30'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan p 01 min 30'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan p 02 min 30'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan p 03 min 30'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan p 04 min 30'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan p 05 min 30'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan p 06 min 30'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 01 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 02 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 03 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 04 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 05 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 06 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 07 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 08 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 09 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 10 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 11 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 12 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 13 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 14 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 15 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 16 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 17 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 18 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 19 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 20 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 21 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 22 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 23 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 24 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 25 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 26 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 27 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 28 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 29 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 30 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 31 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 32 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 33 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 34 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 35 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 36 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 37 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 38 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 39 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 40 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 41 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 42 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 43 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 44 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 45 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 46 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 47 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 48 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 49 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 50 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 51 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 52 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 53 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 54 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 55 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 56 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 57 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 58 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 59 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 60 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 61 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 62 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 63 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 64 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 65 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 66 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 67 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 68 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 69 lo 1000'
sshpass -p $PASSWORD ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 -oHostKeyAlgorithms=+ssh-rsa $USERNAME@$ILOIP 'fan pid 70 lo 1000'

```
