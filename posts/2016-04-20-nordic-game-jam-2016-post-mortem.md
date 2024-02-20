---
title: Nordic Game Jam 2016 Post-mortem
tags:
  - Game Development
---

*This post was originally posted on my Swedish dev blog, happy kodar*.

Earlier this month I spent a few days in Copenhagen and attended the [Nordic Game Jam](https://www.nordicgamejam.com/)'s 10th anniversary.<!--more-->

It was a fun and exciting experience. I stayed at a hostel together with other jammers and I managed to find some new friends, although many of them were Danes.

Prior to the jam there was a pre-party where you could drink beers and play some games together (go check out [Stikbold!](http://www.stikbold.com/)). Friday offered some good talks and I especially enjoyed the ones from Blizzard, [Ojiro Fumoto](https://twitter.com/moppin_) and [Adriel Wallick](https://msminotaur.com/) which got me inspired to do Game a Week. [Butt](https://butt.holdings/fionna-butts.gif) I'm putting it on hold for now.

The theme for the jam was *"Leak"* so a lot of jammers ended up adding leeks to their games.

## Champions Leek

Team: Me and three Danish guys. 3/4 programmers and 1/4 producer/artist.

Idea: From about seven different ideas during brainstorming we settled for "Rocket Leeks" (later changed to Champions Leek for some odd reason). A local multiplayer racing game for the Google Chromecast where the player controls a leek with their smartphone. The goal is to be the last leek standing in this crazy party game.
What went well: Found a great team and almost completed a game. Unity was stable enough on Linux (yay).

What went wrong: Too much hassle with [Unity Remote](https://docs.unity3d.com/Manual/UnityRemote5.html) on Linux.
Hard to implement accelerometer input when you can't test with a phone.
Didn't have time to implement multiplayer due to the Unity [Photon plugin](https://assetstore.unity.com/packages/tools/network/photon-unity-networking-classic-free-1786) not playing nice.
Unity is hard to get right with git and we basically destroyed our repo after a few hours ☹️.
What I learned: That Denmark is quite cool and that precaution must be used when putting a Unity project under version control, yikes!

<figure>

  ![Flying Leek](/img/gamedev/champions-leek-regular.webp)
  <figcaption>Mr. Leek is happy to be flying in the game</figcaption>
</figure>

**What's next?**

Now I'm off to play some of the [jam games](https://itch.io/jam/ngj16/entries) and do some more coding.

/ Rasmus
