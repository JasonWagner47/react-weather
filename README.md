# Simple React App Using OpenWeather API

## Instalation

```
npm install
```

```
npm start
```

# Thought Process

I wanted to keep this as simple and clean as possible. As a user, I would want to see the weather and not be distracted with animation or transitions. I was tempted to use conditional logic and toggle classes based on the temperature and/or conditions. But then I started thinking ... isn't a rainy day gloomy enough? Would I really want to start my day with a color that evoke the dismal? Would a user in Seatle want to see MORE reminders of the rain? Would a user in Seatle with kids screaming want to pull up an app and see grey and lightening when they just want to know the temperature? So I kept the colors neutral. Plus if this were a real product, I would want to stay within a project's style guide. And then I was thinking about making the application "Shakespeare Reacts to the Weather" and pull quotes with a cartoon depending on conditions. But what about mobile? Is that "really" want a user would want? Me thinks not. And what would Shakespeare think? After all the quote "Never anything can be amiss, when simpleness and duty tender it" IS attributed to him. As far as preprocessing and Redux ... those tools would be bloat for something so simple.

# Upcoming Features

- Local Storage to save previous searches and display them in the a fly out menu
- Geolocation for pre-propped data of the user
- International Support
- Higher Order Component to reduce "divitis"

# Frameworks Used

- React
- Bootstrap
