# Circuit Workout Generator

## Introduction

Welcome to my Circuit Workout Generator!

### The "why"

![But why?](https://media1.tenor.com/images/0a74922439d02f6426347e15929ff0f4/tenor.gif?itemid=13199396)

Many moons ago, I used an app that generated circuit workouts (a group of exercises that you did as many times as you could within the alloted time). I loved the app, but found it frustrating when it included a move I didn't like. For me, it was sit-ups. They hurt my back and, in my opinion, there are many other, safer alternatives out there. So I'd skip that part of the workout but it was frustrating that the set was static and I couldn't modify it for something else.

Frustrated by this, I built an app that provided the minimum viable product of that offering - a timer, a smidge of inspiration, and a set of workouts that can be shuffled inifintely until you find the perfect group of exercises for you.

## Struggles

I wanted to use a more specific API but was blocked by [CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)/header limitations. As a workaround, I was able to find a random quote generator that allowed me to fetch quotes and then configured the return to only include those tagged as "motivational".

In early iterations, I was using an array of workouts and found that it is very tricky to return more than one item from an array after a single command. I had a separate function for each body part that shuffled the array, returned one item, and appended that result as a p element. As you can imagine, this was a lot of code that didn't do a tremendous amount of work.

Thankfully (in very large part to Fred), I converted this array into an object and was able to refactor my code going from 120 lines to 20 🤯 Shout out to `querySelectorAll` and the `for of` loop to get this done. Refactoring continues to be a huge challenge for me but I've seen the light and now understand it is worth the struggle.

### To be continued...

I'm not quite done and I definitely want to keep working on my app! I hope to build out better mobile friendly options (including a way to start the timer with a 'tap' instead of `window.onkeydown`) 📱

Traditional circuit workouts are also done in sets of 2 or 4 so I hope to build out a counter to keep track of what set you're on. If you have additional ideas, I'd love to hear them!

## Important Links

- [Quotable.io](https://quotable.io/random) - My quote source!
- [Really helpful StackOverflow discussion on vanilla Javascript timers](https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript) - I based my timer off of this and then customized it further to achieve a better user experience.
- [The Sweat app](https://apps.apple.com/us/app/sweat-fitness-app-for-women/id1049234587) - The app I based this off of! Surprised that it is geared towards women because these workouts will be challenging for anybody!

![Workout goals](https://media1.tenor.com/images/ab3233be85ac85807ac4f475704491f6/tenor.gif?itemid=17217622)
