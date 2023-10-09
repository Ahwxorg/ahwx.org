---
layout: ../../layouts/blogPost.astro
title: 'Instant messaging services; the problem and the solution'
pubDate: 2023-08-14
description: "A little dive into IM services"
author: "Ahwx"
---

---
title: instant messaging services
date: 2023-02-06
---

# instant messaging services

## the problem

### centralized

most of the services are ~~made to steal data~~ made to deliver messages instantly. since most services are centralized (centralized means that you have one or multiple physical and/or virtual servers all being used to host the service), you don't have control over your own data.

### decentralized

let's take the example of email. you mail someone using `username@hosting.tld`, this means that the user has an account at said `hosting.tld`, and thus they can read all emails, which is a problem... except for when you use encryption, encryption makes sure only you, and the recipient can read the message. someone else just sees some random gibberish, since they're not intended to read the message. this is fine and all, but what if you take it a step further: use both encryption and your own server? for email that's absolutely possible if you dedicate your entire life to it. for chatting as well, but the problem is that that requires a decentralized chat application. those are not very widely available, but a few are:

* [Matrix](https://matrix.org), most people use [Element](https://element.io)
* irc, which is outdated
* xmpp, which is harder to set up and use

## "the solution"

Matrix is very easy to [selfhost](https://blog.ahwx.org/selfhosting), and for that, they have [amazing documentation](https://matrix.org/docs/guides/installing-synapse).

once you have a [Matrix Synapse (home)server](https://matrix.org/docs/guides/installing-synapse) (Synapse is the name of their selfhosted server) set up, you can install [Element](https://element.io) and log into your own "homeserver" (homeserver is their naming for your instance of Synapse). Then you can join groups, chat with people, and even voice/video call with them, using Jitsi.

## does everyone need their own server?

no, you can also just register at [matrix.org](httpps://matrix.org), or any other alternative homeserver, but doing it yourself is way better for your privacy and you have the nice bonus of a fun experience and you learn a ton.

