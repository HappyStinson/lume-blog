---
title: "Flag Frenzy Development Update: Improvements and Future Plans"
tags:
  - Game Development
  - Unity
---

I share what has changed since the last update of my Unity game *Flag Frenzy*.

<!--more-->

*This post was originally posted on [happy kodar](https://happykodar.blogspot.com/2014/07/nytt-rekord-coolt.html)*.

## New High-Score

Greetings Gamers.

Perhaps you would like a refresher on the Flag Frenzy [Announcement](gg) before reading this post.

Initially, I want to say awesome work to Dalibor who set a new record on my game and thank you for playing. 🙂 Felt I could not be worse and now I have managed to get 31! Should I raise the limit to 30? It should offer a challenge and make the player spend a day or two before getting there.

## Change Log Flag Frenzy v0.4

- New update loop. Switch case statement with game state instead of if-else structure. To be able to handle Game Over in a nicer way
- Hold down space to hoist the flag. Now you do not have to smash it (unlike the buttons on YouTube)
- A clock that counts down before the game starts. Ready, Set, Go!
- The timer is a separate entity that talks to GameController and runs like a coroutine
- Added the text "Time left" in front of the time which is now printed in full seconds

## Beta Testing

Before you go, I have some questions for you who played:

- Is the speed when hoisting the flag good?
- Is it better to hold down a button compared to before (press many times)?
- What was your spontaneous reaction when you played? Both praise and neighs are desired.

I do not know if I will have time to fix everything this time, but if it is successful and if it is appreciated, I can always take the time to make more levels for version "two point zero".

## Future Updates

I'm a little behind in my planning but it still feels good because what I have now is still playable. Missing just a few menus, graphic elements, and sound.

I built this game with Unity in 2014 and it used to run in computer web browsers using the Unity Web Player[^1]. It's no longer possible to play the game unfortunately and I intend to remedy this in 2024 with a newer build.

[^1]: With the advent of HTML5, browsers began to remove support for plug-ins, and Unity’s web player was deprecated in 2015.

I want all of you to try to beat my record of 31 flags. 😉

Good luck!

/ Rasmus
