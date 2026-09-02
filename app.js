const DAYS = [
  {
    "day": 1,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is your current energy level, without judging it as good or bad?",
    "optional": "What kind of rest would actually feel restful today?"
  },
  {
    "day": 2,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is your current energy level, without judging it as good or bad?",
    "optional": "What is one thing around you that helps you feel oriented to the present?"
  },
  {
    "day": 3,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one small choice that would give you a little more room today?",
    "optional": ""
  },
  {
    "day": 4,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What do you notice in your body right now, without needing to change it?",
    "optional": "What does your nervous system seem to be asking for: less, more, slower, or simply different?"
  },
  {
    "day": 5,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What have you already done today that took effort?",
    "optional": "What tells your body that you are here, now, rather than somewhere else?"
  },
  {
    "day": 6,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What does your nervous system seem to be asking for: less, more, slower, or simply different?",
    "optional": ""
  },
  {
    "day": 7,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What kind of rest would actually feel restful today?",
    "optional": "What are you carrying today that does not need to be solved right now?"
  },
  {
    "day": 8,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "If you could make the next hour 5% gentler, what would you change?",
    "optional": "What does your nervous system seem to be asking for: less, more, slower, or simply different?"
  },
  {
    "day": 9,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What do you notice in your body right now, without needing to change it?",
    "optional": ""
  },
  {
    "day": 10,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one thing around you that helps you feel oriented to the present?",
    "optional": "What do you notice in your body right now, without needing to change it?"
  },
  {
    "day": 11,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What kind of rest would actually feel restful today?",
    "optional": "What is one thing around you that helps you feel oriented to the present?"
  },
  {
    "day": 12,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What does your nervous system seem to be asking for: less, more, slower, or simply different?",
    "optional": ""
  },
  {
    "day": 13,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What feels even a little easier in this moment?",
    "optional": "Where do you notice tension, and can you meet it with curiosity rather than correction?"
  },
  {
    "day": 14,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What are you carrying today that does not need to be solved right now?",
    "optional": "If you could make the next hour 5% gentler, what would you change?"
  },
  {
    "day": 15,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one thing around you that helps you feel oriented to the present?",
    "optional": ""
  },
  {
    "day": 16,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What have you already done today that took effort?",
    "optional": "What are you carrying today that does not need to be solved right now?"
  },
  {
    "day": 17,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What kind of rest would actually feel restful today?",
    "optional": "What do you notice in your body right now, without needing to change it?"
  },
  {
    "day": 18,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What tells your body that you are here, now, rather than somewhere else?",
    "optional": ""
  },
  {
    "day": 19,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where in your body feels most neutral or ordinary today?",
    "optional": "What does your nervous system seem to be asking for: less, more, slower, or simply different?"
  },
  {
    "day": 20,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What feels even a little easier in this moment?",
    "optional": "What are you carrying today that does not need to be solved right now?"
  },
  {
    "day": 21,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one thing around you that helps you feel oriented to the present?",
    "optional": ""
  },
  {
    "day": 22,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one small choice that would give you a little more room today?",
    "optional": "What does your nervous system seem to be asking for: less, more, slower, or simply different?"
  },
  {
    "day": 23,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What have you already done today that took effort?",
    "optional": "What kind of rest would actually feel restful today?"
  },
  {
    "day": 24,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What feels even a little easier in this moment?",
    "optional": ""
  },
  {
    "day": 25,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one small choice that would give you a little more room today?",
    "optional": "What does your nervous system seem to be asking for: less, more, slower, or simply different?"
  },
  {
    "day": 26,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one small choice that would give you a little more room today?",
    "optional": "What are you carrying today that does not need to be solved right now?"
  },
  {
    "day": 27,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where in your body feels most neutral or ordinary today?",
    "optional": ""
  },
  {
    "day": 28,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What feels safe enough to notice, even if it is very small?",
    "optional": "What feels even a little easier in this moment?"
  },
  {
    "day": 29,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one thing around you that helps you feel oriented to the present?",
    "optional": "What does your nervous system seem to be asking for: less, more, slower, or simply different?"
  },
  {
    "day": 30,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "If you could make the next hour 5% gentler, what would you change?",
    "optional": ""
  },
  {
    "day": 31,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where do you notice tension, and can you meet it with curiosity rather than correction?",
    "optional": "What are you carrying today that does not need to be solved right now?"
  },
  {
    "day": 32,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "If your body could choose the pace today, what pace would it choose?",
    "optional": "What is your current energy level, without judging it as good or bad?"
  },
  {
    "day": 33,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What have you already done today that took effort?",
    "optional": ""
  },
  {
    "day": 34,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where in your body feels most neutral or ordinary today?",
    "optional": "What feels even a little easier in this moment?"
  },
  {
    "day": 35,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What are you carrying today that does not need to be solved right now?",
    "optional": "If your body could choose the pace today, what pace would it choose?"
  },
  {
    "day": 36,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What feels safe enough to notice, even if it is very small?",
    "optional": ""
  },
  {
    "day": 37,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where do you notice tension, and can you meet it with curiosity rather than correction?",
    "optional": "What is one small choice that would give you a little more room today?"
  },
  {
    "day": 38,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What tells your body that you are here, now, rather than somewhere else?",
    "optional": "What are you carrying today that does not need to be solved right now?"
  },
  {
    "day": 39,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where do you notice tension, and can you meet it with curiosity rather than correction?",
    "optional": ""
  },
  {
    "day": 40,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "If your body could choose the pace today, what pace would it choose?",
    "optional": "If you could make the next hour 5% gentler, what would you change?"
  },
  {
    "day": 41,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What feels safe enough to notice, even if it is very small?",
    "optional": "What is one small choice that would give you a little more room today?"
  },
  {
    "day": 42,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What do you notice in your body right now, without needing to change it?",
    "optional": ""
  },
  {
    "day": 43,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What are you carrying today that does not need to be solved right now?",
    "optional": "What does your nervous system seem to be asking for: less, more, slower, or simply different?"
  },
  {
    "day": 44,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What kind of rest would actually feel restful today?",
    "optional": "What is one thing around you that helps you feel oriented to the present?"
  },
  {
    "day": 45,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What feels even a little easier in this moment?",
    "optional": ""
  },
  {
    "day": 46,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you tolerating that you do not actually have to tolerate today?",
    "optional": "Where are you saying yes when your body is saying maybe or no?"
  },
  {
    "day": 47,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you noticing yourself wanting to move toward or away from?",
    "optional": "What makes you feel more like yourself?"
  },
  {
    "day": 48,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would a compassionate interpretation of your reaction be?",
    "optional": ""
  },
  {
    "day": 49,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you noticing yourself wanting to move toward or away from?",
    "optional": "Where are you saying yes when your body is saying maybe or no?"
  },
  {
    "day": 50,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes you feel more like yourself?",
    "optional": "What are you tolerating that you do not actually have to tolerate today?"
  },
  {
    "day": 51,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would you like to understand about yourself today?",
    "optional": ""
  },
  {
    "day": 52,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What need might be underneath that emotion?",
    "optional": "What does 'enough' look like for you today?"
  },
  {
    "day": 53,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would you like to understand about yourself today?",
    "optional": "What is one desire you can acknowledge without acting on it?"
  },
  {
    "day": 54,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Where are you saying yes when your body is saying maybe or no?",
    "optional": ""
  },
  {
    "day": 55,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes you feel smaller, quieter, or less free?",
    "optional": "What would support look like if it did not require you to explain everything?"
  },
  {
    "day": 56,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would a compassionate interpretation of your reaction be?",
    "optional": "What are you noticing yourself wanting to move toward or away from?"
  },
  {
    "day": 57,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would you like someone else to understand about your experience today?",
    "optional": ""
  },
  {
    "day": 58,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Where are you saying yes when your body is saying maybe or no?",
    "optional": "What need might be underneath that emotion?"
  },
  {
    "day": 59,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What boundary might your body already be trying to communicate?",
    "optional": "What makes you feel smaller, quieter, or less free?"
  },
  {
    "day": 60,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would support look like if it did not require you to explain everything?",
    "optional": ""
  },
  {
    "day": 61,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would support look like if it did not require you to explain everything?",
    "optional": "What boundary might your body already be trying to communicate?"
  },
  {
    "day": 62,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would a compassionate interpretation of your reaction be?",
    "optional": "What need might be underneath that emotion?"
  },
  {
    "day": 63,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you tolerating that you do not actually have to tolerate today?",
    "optional": ""
  },
  {
    "day": 64,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What boundary might your body already be trying to communicate?",
    "optional": "What would you like to understand about yourself today?"
  },
  {
    "day": 65,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would a compassionate interpretation of your reaction be?",
    "optional": "What boundary might your body already be trying to communicate?"
  },
  {
    "day": 66,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Where are you saying yes when your body is saying maybe or no?",
    "optional": ""
  },
  {
    "day": 67,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What does 'enough' look like for you today?",
    "optional": "Where are you saying yes when your body is saying maybe or no?"
  },
  {
    "day": 68,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What does 'enough' look like for you today?",
    "optional": "What makes you feel smaller, quieter, or less free?"
  },
  {
    "day": 69,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would you like someone else to understand about your experience today?",
    "optional": ""
  },
  {
    "day": 70,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would you like to understand about yourself today?",
    "optional": "What feeling have you been tempted to talk yourself out of?"
  },
  {
    "day": 71,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Where are you saying yes when your body is saying maybe or no?",
    "optional": "What does 'enough' look like for you today?"
  },
  {
    "day": 72,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes you feel smaller, quieter, or less free?",
    "optional": ""
  },
  {
    "day": 73,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What need might be underneath that emotion?",
    "optional": "What would support look like if it did not require you to explain everything?"
  },
  {
    "day": 74,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What boundary might your body already be trying to communicate?",
    "optional": "What is one desire you can acknowledge without acting on it?"
  },
  {
    "day": 75,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What emotion is closest to the surface today?",
    "optional": ""
  },
  {
    "day": 76,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What is one desire you can acknowledge without acting on it?",
    "optional": "Where are you saying yes when your body is saying maybe or no?"
  },
  {
    "day": 77,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes you feel more like yourself?",
    "optional": "What would support look like if it did not require you to explain everything?"
  },
  {
    "day": 78,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What emotion is closest to the surface today?",
    "optional": ""
  },
  {
    "day": 79,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes you feel smaller, quieter, or less free?",
    "optional": "What would you like to understand about yourself today?"
  },
  {
    "day": 80,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you tolerating that you do not actually have to tolerate today?",
    "optional": "What boundary might your body already be trying to communicate?"
  },
  {
    "day": 81,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling have you been tempted to talk yourself out of?",
    "optional": ""
  },
  {
    "day": 82,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes you feel more like yourself?",
    "optional": "What would support look like if it did not require you to explain everything?"
  },
  {
    "day": 83,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What need might be underneath that emotion?",
    "optional": "Where are you saying yes when your body is saying maybe or no?"
  },
  {
    "day": 84,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What emotion is closest to the surface today?",
    "optional": ""
  },
  {
    "day": 85,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Where are you saying yes when your body is saying maybe or no?",
    "optional": "What would you like someone else to understand about your experience today?"
  },
  {
    "day": 86,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would you like someone else to understand about your experience today?",
    "optional": "What makes you feel more like yourself?"
  },
  {
    "day": 87,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes you feel more like yourself?",
    "optional": ""
  },
  {
    "day": 88,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What is one desire you can acknowledge without acting on it?",
    "optional": "What would support look like if it did not require you to explain everything?"
  },
  {
    "day": 89,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you tolerating that you do not actually have to tolerate today?",
    "optional": "What need might be underneath that emotion?"
  },
  {
    "day": 90,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would support look like if it did not require you to explain everything?",
    "optional": ""
  },
  {
    "day": 91,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you tolerating that you do not actually have to tolerate today?",
    "optional": "What would you like someone else to understand about your experience today?"
  },
  {
    "day": 92,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What does 'enough' look like for you today?",
    "optional": "What is one desire you can acknowledge without acting on it?"
  },
  {
    "day": 93,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What is one desire you can acknowledge without acting on it?",
    "optional": ""
  },
  {
    "day": 94,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you noticing yourself wanting to move toward or away from?",
    "optional": "What would you like to understand about yourself today?"
  },
  {
    "day": 95,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes you feel more like yourself?",
    "optional": "What are you tolerating that you do not actually have to tolerate today?"
  },
  {
    "day": 96,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling have you been tempted to talk yourself out of?",
    "optional": ""
  },
  {
    "day": 97,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would you like someone else to understand about your experience today?",
    "optional": "What are you tolerating that you do not actually have to tolerate today?"
  },
  {
    "day": 98,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would you like to understand about yourself today?",
    "optional": "What are you tolerating that you do not actually have to tolerate today?"
  },
  {
    "day": 99,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What emotion is closest to the surface today?",
    "optional": ""
  },
  {
    "day": 100,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would a compassionate interpretation of your reaction be?",
    "optional": "What are you noticing yourself wanting to move toward or away from?"
  },
  {
    "day": 101,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would support look like if it did not require you to explain everything?",
    "optional": "What boundary might your body already be trying to communicate?"
  },
  {
    "day": 102,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling have you been tempted to talk yourself out of?",
    "optional": ""
  },
  {
    "day": 103,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you noticing yourself wanting to move toward or away from?",
    "optional": "What emotion is closest to the surface today?"
  },
  {
    "day": 104,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What emotion is closest to the surface today?",
    "optional": "What would you like someone else to understand about your experience today?"
  },
  {
    "day": 105,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling have you been tempted to talk yourself out of?",
    "optional": ""
  },
  {
    "day": 106,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you over-explain, what are you hoping will happen?",
    "optional": "What pattern showed up recently that you can observe without blaming yourself?"
  },
  {
    "day": 107,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your body do just before you override your own needs?",
    "optional": "Which part of you is tired today?"
  },
  {
    "day": 108,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What old rule are you noticing yourself living by?",
    "optional": ""
  },
  {
    "day": 109,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would happen if you did not force clarity today?",
    "optional": "Which part of you is working very hard to keep things okay?"
  },
  {
    "day": 110,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern showed up recently that you can observe without blaming yourself?",
    "optional": "What does your protective side fear would happen if you slowed down?"
  },
  {
    "day": 111,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you over-explain, what are you hoping will happen?",
    "optional": ""
  },
  {
    "day": 112,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would you say to the part of you that feels it must get everything right?",
    "optional": "What would happen if you did not force clarity today?"
  },
  {
    "day": 113,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your protective side fear would happen if you slowed down?",
    "optional": "When you over-explain, what are you hoping will happen?"
  },
  {
    "day": 114,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your protective side fear would happen if you slowed down?",
    "optional": ""
  },
  {
    "day": 115,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your body do just before you override your own needs?",
    "optional": "When you become responsible for everyone else's feelings, what happens inside you?"
  },
  {
    "day": 116,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which rule still serves you, and which one feels outdated?",
    "optional": "Which part of you is tired today?"
  },
  {
    "day": 117,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your body do just before you override your own needs?",
    "optional": ""
  },
  {
    "day": 118,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What old rule are you noticing yourself living by?",
    "optional": "When you become responsible for everyone else's feelings, what happens inside you?"
  },
  {
    "day": 119,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What are you allowed to not know yet?",
    "optional": "When you over-explain, what are you hoping will happen?"
  },
  {
    "day": 120,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern showed up recently that you can observe without blaming yourself?",
    "optional": ""
  },
  {
    "day": 121,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would happen if you did not force clarity today?",
    "optional": "What old rule are you noticing yourself living by?"
  },
  {
    "day": 122,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is tired today?",
    "optional": "What old rule are you noticing yourself living by?"
  },
  {
    "day": 123,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you over-explain, what are you hoping will happen?",
    "optional": ""
  },
  {
    "day": 124,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is working very hard to keep things okay?",
    "optional": "When you become responsible for everyone else's feelings, what happens inside you?"
  },
  {
    "day": 125,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you become responsible for everyone else's feelings, what happens inside you?",
    "optional": "When you over-explain, what are you hoping will happen?"
  },
  {
    "day": 126,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is tired today?",
    "optional": ""
  },
  {
    "day": 127,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would happen if you did not force clarity today?",
    "optional": "When you over-explain, what are you hoping will happen?"
  },
  {
    "day": 128,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you become responsible for everyone else's feelings, what happens inside you?",
    "optional": "Which rule still serves you, and which one feels outdated?"
  },
  {
    "day": 129,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What might this pattern have once been trying to protect you from?",
    "optional": ""
  },
  {
    "day": 130,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you shut down, what might you be protecting?",
    "optional": "What are you allowed to not know yet?"
  },
  {
    "day": 131,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would you say to the part of you that feels it must get everything right?",
    "optional": "When you shut down, what might you be protecting?"
  },
  {
    "day": 132,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is working very hard to keep things okay?",
    "optional": ""
  },
  {
    "day": 133,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What old rule are you noticing yourself living by?",
    "optional": "What would you say to the part of you that feels it must get everything right?"
  },
  {
    "day": 134,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would it mean to take your own discomfort seriously?",
    "optional": "When you become responsible for everyone else's feelings, what happens inside you?"
  },
  {
    "day": 135,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you become responsible for everyone else's feelings, what happens inside you?",
    "optional": ""
  },
  {
    "day": 136,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern showed up recently that you can observe without blaming yourself?",
    "optional": "What would it mean to take your own discomfort seriously?"
  },
  {
    "day": 137,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your protective side fear would happen if you slowed down?",
    "optional": "When you over-explain, what are you hoping will happen?"
  },
  {
    "day": 138,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your protective side fear would happen if you slowed down?",
    "optional": ""
  },
  {
    "day": 139,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is tired today?",
    "optional": "What might this pattern have once been trying to protect you from?"
  },
  {
    "day": 140,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What are you allowed to not know yet?",
    "optional": "Which rule still serves you, and which one feels outdated?"
  },
  {
    "day": 141,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your body do just before you override your own needs?",
    "optional": ""
  },
  {
    "day": 142,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What are you allowed to not know yet?",
    "optional": "What might this pattern have once been trying to protect you from?"
  },
  {
    "day": 143,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you shut down, what might you be protecting?",
    "optional": "When you over-explain, what are you hoping will happen?"
  },
  {
    "day": 144,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern showed up recently that you can observe without blaming yourself?",
    "optional": ""
  },
  {
    "day": 145,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you shut down, what might you be protecting?",
    "optional": "Which rule still serves you, and which one feels outdated?"
  },
  {
    "day": 146,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is working very hard to keep things okay?",
    "optional": "When you become responsible for everyone else's feelings, what happens inside you?"
  },
  {
    "day": 147,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is working very hard to keep things okay?",
    "optional": ""
  },
  {
    "day": 148,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you shut down, what might you be protecting?",
    "optional": "What does your body do just before you override your own needs?"
  },
  {
    "day": 149,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you over-explain, what are you hoping will happen?",
    "optional": "What old rule are you noticing yourself living by?"
  },
  {
    "day": 150,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What old rule are you noticing yourself living by?",
    "optional": ""
  },
  {
    "day": 151,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What might this pattern have once been trying to protect you from?",
    "optional": "When you over-explain, what are you hoping will happen?"
  },
  {
    "day": 152,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would you say to the part of you that feels it must get everything right?",
    "optional": "What are you allowed to not know yet?"
  },
  {
    "day": 153,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern showed up recently that you can observe without blaming yourself?",
    "optional": ""
  },
  {
    "day": 154,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which rule still serves you, and which one feels outdated?",
    "optional": "What would happen if you did not force clarity today?"
  },
  {
    "day": 155,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern showed up recently that you can observe without blaming yourself?",
    "optional": "What would you say to the part of you that feels it must get everything right?"
  },
  {
    "day": 156,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would happen if you did not force clarity today?",
    "optional": ""
  },
  {
    "day": 157,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would you say to the part of you that feels it must get everything right?",
    "optional": "What would it mean to take your own discomfort seriously?"
  },
  {
    "day": 158,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is working very hard to keep things okay?",
    "optional": "When you over-explain, what are you hoping will happen?"
  },
  {
    "day": 159,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your protective side fear would happen if you slowed down?",
    "optional": ""
  },
  {
    "day": 160,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you over-explain, what are you hoping will happen?",
    "optional": "Which part of you is working very hard to keep things okay?"
  },
  {
    "day": 161,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is tired today?",
    "optional": "What old rule are you noticing yourself living by?"
  },
  {
    "day": 162,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What might this pattern have once been trying to protect you from?",
    "optional": ""
  },
  {
    "day": 163,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What might this pattern have once been trying to protect you from?",
    "optional": "What are you allowed to not know yet?"
  },
  {
    "day": 164,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would you say to the part of you that feels it must get everything right?",
    "optional": "What would happen if you did not force clarity today?"
  },
  {
    "day": 165,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What are you allowed to not know yet?",
    "optional": ""
  },
  {
    "day": 166,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your body do just before you override your own needs?",
    "optional": "What would you say to the part of you that feels it must get everything right?"
  },
  {
    "day": 167,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which rule still serves you, and which one feels outdated?",
    "optional": "Which part of you is tired today?"
  },
  {
    "day": 168,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you over-explain, what are you hoping will happen?",
    "optional": ""
  },
  {
    "day": 169,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would happen if you did not force clarity today?",
    "optional": "What does your body do just before you override your own needs?"
  },
  {
    "day": 170,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you become responsible for everyone else's feelings, what happens inside you?",
    "optional": "Which part of you is working very hard to keep things okay?"
  },
  {
    "day": 171,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would you say to the part of you that feels it must get everything right?",
    "optional": ""
  },
  {
    "day": 172,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would it mean to take your own discomfort seriously?",
    "optional": "What pattern showed up recently that you can observe without blaming yourself?"
  },
  {
    "day": 173,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you is tired today?",
    "optional": "Which part of you is working very hard to keep things okay?"
  },
  {
    "day": 174,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you become responsible for everyone else's feelings, what happens inside you?",
    "optional": ""
  },
  {
    "day": 175,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which rule still serves you, and which one feels outdated?",
    "optional": "What does your protective side fear would happen if you slowed down?"
  },
  {
    "day": 176,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would it mean to take your own discomfort seriously?",
    "optional": "What would you say to the part of you that feels it must get everything right?"
  },
  {
    "day": 177,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you shut down, what might you be protecting?",
    "optional": ""
  },
  {
    "day": 178,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What are you allowed to not know yet?",
    "optional": "Which rule still serves you, and which one feels outdated?"
  },
  {
    "day": 179,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What might this pattern have once been trying to protect you from?",
    "optional": "What pattern showed up recently that you can observe without blaming yourself?"
  },
  {
    "day": 180,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which rule still serves you, and which one feels outdated?",
    "optional": ""
  },
  {
    "day": 181,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would self-respect look like in one ordinary interaction?",
    "optional": "What would it look like to make a decision from steadiness rather than urgency?"
  },
  {
    "day": 182,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you choose if you did not need anyone to approve of the choice?",
    "optional": "Where could you practice a smaller, kinder boundary?"
  },
  {
    "day": 183,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you know about yourself now that you did not know before?",
    "optional": ""
  },
  {
    "day": 184,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would it look like to make a decision from steadiness rather than urgency?",
    "optional": "What are you beginning to trust about your own judgment?"
  },
  {
    "day": 185,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where could you practice a smaller, kinder boundary?",
    "optional": "What would saying 'I need time to think' make possible?"
  },
  {
    "day": 186,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your yes feel like in your body?",
    "optional": ""
  },
  {
    "day": 187,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your yes feel like in your body?",
    "optional": "What is the difference between discomfort and danger for you today?"
  },
  {
    "day": 188,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you know about yourself now that you did not know before?",
    "optional": "What would saying 'I need time to think' make possible?"
  },
  {
    "day": 189,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where could you practice a smaller, kinder boundary?",
    "optional": ""
  },
  {
    "day": 190,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would it look like to make a decision from steadiness rather than urgency?",
    "optional": "What does your yes feel like in your body?"
  },
  {
    "day": 191,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What helps you stay connected to yourself while staying connected to someone else?",
    "optional": "What does your no feel like in your body?"
  },
  {
    "day": 192,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would saying 'I need time to think' make possible?",
    "optional": ""
  },
  {
    "day": 193,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would saying 'I need time to think' make possible?",
    "optional": "Where could you practice a smaller, kinder boundary?"
  },
  {
    "day": 194,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you want more room for in your life?",
    "optional": "What would self-respect look like in one ordinary interaction?"
  },
  {
    "day": 195,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What are you beginning to trust about your own judgment?",
    "optional": ""
  },
  {
    "day": 196,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What helps you stay connected to yourself while staying connected to someone else?",
    "optional": "What choice feels most aligned with you, even if it is not the easiest choice?"
  },
  {
    "day": 197,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What are you beginning to trust about your own judgment?",
    "optional": "What would saying 'I need time to think' make possible?"
  },
  {
    "day": 198,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where could you practice a smaller, kinder boundary?",
    "optional": ""
  },
  {
    "day": 199,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What are you beginning to trust about your own judgment?",
    "optional": "What does your yes feel like in your body?"
  },
  {
    "day": 200,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would saying 'I need time to think' make possible?",
    "optional": "What would it look like to make a decision from steadiness rather than urgency?"
  },
  {
    "day": 201,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What are you beginning to trust about your own judgment?",
    "optional": ""
  },
  {
    "day": 202,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you choose if you did not need anyone to approve of the choice?",
    "optional": "Where could you practice a smaller, kinder boundary?"
  },
  {
    "day": 203,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you want more room for in your life?",
    "optional": "What are you beginning to trust about your own judgment?"
  },
  {
    "day": 204,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your no feel like in your body?",
    "optional": ""
  },
  {
    "day": 205,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you choose if you did not need anyone to approve of the choice?",
    "optional": "What choice feels most aligned with you, even if it is not the easiest choice?"
  },
  {
    "day": 206,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice feels most aligned with you, even if it is not the easiest choice?",
    "optional": "What helps you stay connected to yourself while staying connected to someone else?"
  },
  {
    "day": 207,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your yes feel like in your body?",
    "optional": ""
  },
  {
    "day": 208,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you want more room for in your life?",
    "optional": "What does freedom mean to you in a practical, everyday sense?"
  },
  {
    "day": 209,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your yes feel like in your body?",
    "optional": "What would you choose if you did not need anyone to approve of the choice?"
  },
  {
    "day": 210,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is the difference between discomfort and danger for you today?",
    "optional": ""
  },
  {
    "day": 211,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice feels most aligned with you, even if it is not the easiest choice?",
    "optional": "Where are you asking yourself to be certain when 'not yet' is enough?"
  },
  {
    "day": 212,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would self-respect look like in one ordinary interaction?",
    "optional": "What would it look like to make a decision from steadiness rather than urgency?"
  },
  {
    "day": 213,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would it look like to make a decision from steadiness rather than urgency?",
    "optional": ""
  },
  {
    "day": 214,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you asking yourself to be certain when 'not yet' is enough?",
    "optional": "What does your no feel like in your body?"
  },
  {
    "day": 215,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you want more room for in your life?",
    "optional": "What do you know about yourself now that you did not know before?"
  },
  {
    "day": 216,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would self-respect look like in one ordinary interaction?",
    "optional": ""
  },
  {
    "day": 217,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you asking yourself to be certain when 'not yet' is enough?",
    "optional": "What helps you stay connected to yourself while staying connected to someone else?"
  },
  {
    "day": 218,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you choose if you did not need anyone to approve of the choice?",
    "optional": "Where could you practice a smaller, kinder boundary?"
  },
  {
    "day": 219,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you want more room for in your life?",
    "optional": ""
  },
  {
    "day": 220,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would self-respect look like in one ordinary interaction?",
    "optional": "What does your yes feel like in your body?"
  },
  {
    "day": 221,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you want more room for in your life?",
    "optional": "What does your yes feel like in your body?"
  },
  {
    "day": 222,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is the difference between discomfort and danger for you today?",
    "optional": ""
  },
  {
    "day": 223,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice feels most aligned with you, even if it is not the easiest choice?",
    "optional": "What is the difference between discomfort and danger for you today?"
  },
  {
    "day": 224,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you choose if you did not need anyone to approve of the choice?",
    "optional": "What does your yes feel like in your body?"
  },
  {
    "day": 225,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you asking yourself to be certain when 'not yet' is enough?",
    "optional": ""
  },
  {
    "day": 226,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you know about yourself now that you did not know before?",
    "optional": "What is the difference between discomfort and danger for you today?"
  },
  {
    "day": 227,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you choose if you did not need anyone to approve of the choice?",
    "optional": "What are you beginning to trust about your own judgment?"
  },
  {
    "day": 228,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does freedom mean to you in a practical, everyday sense?",
    "optional": ""
  },
  {
    "day": 229,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you know about yourself now that you did not know before?",
    "optional": "What does your yes feel like in your body?"
  },
  {
    "day": 230,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would it look like to make a decision from steadiness rather than urgency?",
    "optional": "What would self-respect look like in one ordinary interaction?"
  },
  {
    "day": 231,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What helps you stay connected to yourself while staying connected to someone else?",
    "optional": ""
  },
  {
    "day": 232,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is the difference between discomfort and danger for you today?",
    "optional": "What choice feels most aligned with you, even if it is not the easiest choice?"
  },
  {
    "day": 233,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would self-respect look like in one ordinary interaction?",
    "optional": "What do you know about yourself now that you did not know before?"
  },
  {
    "day": 234,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice feels most aligned with you, even if it is not the easiest choice?",
    "optional": ""
  },
  {
    "day": 235,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does freedom mean to you in a practical, everyday sense?",
    "optional": "What are you beginning to trust about your own judgment?"
  },
  {
    "day": 236,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you asking yourself to be certain when 'not yet' is enough?",
    "optional": "What are you beginning to trust about your own judgment?"
  },
  {
    "day": 237,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you asking yourself to be certain when 'not yet' is enough?",
    "optional": ""
  },
  {
    "day": 238,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice feels most aligned with you, even if it is not the easiest choice?",
    "optional": "What is the difference between discomfort and danger for you today?"
  },
  {
    "day": 239,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where could you practice a smaller, kinder boundary?",
    "optional": "What would saying 'I need time to think' make possible?"
  },
  {
    "day": 240,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice feels most aligned with you, even if it is not the easiest choice?",
    "optional": ""
  },
  {
    "day": 241,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would it look like to make a decision from steadiness rather than urgency?",
    "optional": "What does your no feel like in your body?"
  },
  {
    "day": 242,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your no feel like in your body?",
    "optional": "Where could you practice a smaller, kinder boundary?"
  },
  {
    "day": 243,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you know about yourself now that you did not know before?",
    "optional": ""
  },
  {
    "day": 244,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What helps you stay connected to yourself while staying connected to someone else?",
    "optional": "What would saying 'I need time to think' make possible?"
  },
  {
    "day": 245,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does freedom mean to you in a practical, everyday sense?",
    "optional": "What does your yes feel like in your body?"
  },
  {
    "day": 246,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your no feel like in your body?",
    "optional": ""
  },
  {
    "day": 247,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your no feel like in your body?",
    "optional": "Where could you practice a smaller, kinder boundary?"
  },
  {
    "day": 248,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does freedom mean to you in a practical, everyday sense?",
    "optional": "What helps you stay connected to yourself while staying connected to someone else?"
  },
  {
    "day": 249,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is the difference between discomfort and danger for you today?",
    "optional": ""
  },
  {
    "day": 250,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is the difference between discomfort and danger for you today?",
    "optional": "What do you know about yourself now that you did not know before?"
  },
  {
    "day": 251,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What helps you stay connected to yourself while staying connected to someone else?",
    "optional": "Where could you practice a smaller, kinder boundary?"
  },
  {
    "day": 252,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you asking yourself to be certain when 'not yet' is enough?",
    "optional": ""
  },
  {
    "day": 253,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your no feel like in your body?",
    "optional": "Where are you asking yourself to be certain when 'not yet' is enough?"
  },
  {
    "day": 254,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you know about yourself now that you did not know before?",
    "optional": "What would saying 'I need time to think' make possible?"
  },
  {
    "day": 255,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your yes feel like in your body?",
    "optional": ""
  },
  {
    "day": 256,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does play look like for you at this stage of life?",
    "optional": "What part of yourself have you missed?"
  },
  {
    "day": 257,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What are you curious about again?",
    "optional": "What part of yourself have you missed?"
  },
  {
    "day": 258,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What makes you feel quietly alive?",
    "optional": ""
  },
  {
    "day": 259,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of connection feels nourishing rather than draining?",
    "optional": "What would a life with more spaciousness contain?"
  },
  {
    "day": 260,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of person do you feel yourself becoming?",
    "optional": "What relationship qualities help your body soften?"
  },
  {
    "day": 261,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "Where does your voice want a little more room?",
    "optional": ""
  },
  {
    "day": 262,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of connection feels nourishing rather than draining?",
    "optional": "What did you enjoy before you started measuring whether it was useful?"
  },
  {
    "day": 263,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does being known without being managed feel like?",
    "optional": "Where does your voice want a little more room?"
  },
  {
    "day": 264,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of connection feels nourishing rather than draining?",
    "optional": ""
  },
  {
    "day": 265,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What did you enjoy before you started measuring whether it was useful?",
    "optional": "What kind of adventure feels appealing right now?"
  },
  {
    "day": 266,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want to experience more often?",
    "optional": "What is something you want simply because you want it?"
  },
  {
    "day": 267,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of person do you feel yourself becoming?",
    "optional": ""
  },
  {
    "day": 268,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does being known without being managed feel like?",
    "optional": "What would a life with more spaciousness contain?"
  },
  {
    "day": 269,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What values do you want your daily life to reflect?",
    "optional": "What is something you want simply because you want it?"
  },
  {
    "day": 270,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does being known without being managed feel like?",
    "optional": ""
  },
  {
    "day": 271,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What are you curious about again?",
    "optional": "What would a life with more spaciousness contain?"
  },
  {
    "day": 272,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What values do you want your daily life to reflect?",
    "optional": "What makes you feel quietly alive?"
  },
  {
    "day": 273,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What relationship qualities help your body soften?",
    "optional": ""
  },
  {
    "day": 274,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What makes you feel quietly alive?",
    "optional": "What relationship qualities help your body soften?"
  },
  {
    "day": 275,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself have you missed?",
    "optional": "What are you curious about again?"
  },
  {
    "day": 276,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What is something you want simply because you want it?",
    "optional": ""
  },
  {
    "day": 277,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What relationship qualities help your body soften?",
    "optional": "What are you curious about again?"
  },
  {
    "day": 278,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of adventure feels appealing right now?",
    "optional": "What did you enjoy before you started measuring whether it was useful?"
  },
  {
    "day": 279,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "Where does your voice want a little more room?",
    "optional": ""
  },
  {
    "day": 280,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want to experience more often?",
    "optional": "What kind of person do you feel yourself becoming?"
  },
  {
    "day": 281,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What did you enjoy before you started measuring whether it was useful?",
    "optional": "What is something you want simply because you want it?"
  },
  {
    "day": 282,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of person do you feel yourself becoming?",
    "optional": ""
  },
  {
    "day": 283,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What values do you want your daily life to reflect?",
    "optional": "What are you curious about again?"
  },
  {
    "day": 284,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What did you enjoy before you started measuring whether it was useful?",
    "optional": "What do you want to experience more often?"
  },
  {
    "day": 285,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does being known without being managed feel like?",
    "optional": ""
  },
  {
    "day": 286,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of person do you feel yourself becoming?",
    "optional": "What does play look like for you at this stage of life?"
  },
  {
    "day": 287,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What relationship qualities help your body soften?",
    "optional": "What would a life with more spaciousness contain?"
  },
  {
    "day": 288,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would a life with more spaciousness contain?",
    "optional": ""
  },
  {
    "day": 289,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What is something you want simply because you want it?",
    "optional": "What kind of adventure feels appealing right now?"
  },
  {
    "day": 290,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would a life with more spaciousness contain?",
    "optional": "What is something you want simply because you want it?"
  },
  {
    "day": 291,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does play look like for you at this stage of life?",
    "optional": ""
  },
  {
    "day": 292,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of person do you feel yourself becoming?",
    "optional": "What kind of adventure feels appealing right now?"
  },
  {
    "day": 293,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does being known without being managed feel like?",
    "optional": "What does play look like for you at this stage of life?"
  },
  {
    "day": 294,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of connection feels nourishing rather than draining?",
    "optional": ""
  },
  {
    "day": 295,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does play look like for you at this stage of life?",
    "optional": "What makes you feel quietly alive?"
  },
  {
    "day": 296,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want to experience more often?",
    "optional": "What does being known without being managed feel like?"
  },
  {
    "day": 297,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of adventure feels appealing right now?",
    "optional": ""
  },
  {
    "day": 298,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What did you enjoy before you started measuring whether it was useful?",
    "optional": "What does being known without being managed feel like?"
  },
  {
    "day": 299,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What are you curious about again?",
    "optional": "What does being known without being managed feel like?"
  },
  {
    "day": 300,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want to experience more often?",
    "optional": ""
  },
  {
    "day": 301,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of adventure feels appealing right now?",
    "optional": "What part of yourself have you missed?"
  },
  {
    "day": 302,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What relationship qualities help your body soften?",
    "optional": "What do you want to experience more often?"
  },
  {
    "day": 303,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would a life with more spaciousness contain?",
    "optional": ""
  },
  {
    "day": 304,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What relationship qualities help your body soften?",
    "optional": "What do you want to experience more often?"
  },
  {
    "day": 305,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of adventure feels appealing right now?",
    "optional": "What does play look like for you at this stage of life?"
  },
  {
    "day": 306,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself have you missed?",
    "optional": ""
  },
  {
    "day": 307,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What is something you want simply because you want it?",
    "optional": "What do you want to experience more often?"
  },
  {
    "day": 308,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "Where does your voice want a little more room?",
    "optional": "What kind of connection feels nourishing rather than draining?"
  },
  {
    "day": 309,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself have you missed?",
    "optional": ""
  },
  {
    "day": 310,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would a life with more spaciousness contain?",
    "optional": "What are you curious about again?"
  },
  {
    "day": 311,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What makes you feel quietly alive?",
    "optional": "What does being known without being managed feel like?"
  },
  {
    "day": 312,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What is something you want simply because you want it?",
    "optional": ""
  },
  {
    "day": 313,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself have you missed?",
    "optional": "What makes you feel quietly alive?"
  },
  {
    "day": 314,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would a life with more spaciousness contain?",
    "optional": "What kind of person do you feel yourself becoming?"
  },
  {
    "day": 315,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does play look like for you at this stage of life?",
    "optional": ""
  },
  {
    "day": 316,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does play look like for you at this stage of life?",
    "optional": "What kind of connection feels nourishing rather than draining?"
  },
  {
    "day": 317,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "Where does your voice want a little more room?",
    "optional": "What kind of connection feels nourishing rather than draining?"
  },
  {
    "day": 318,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What values do you want your daily life to reflect?",
    "optional": ""
  },
  {
    "day": 319,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What values do you want your daily life to reflect?",
    "optional": "What kind of person do you feel yourself becoming?"
  },
  {
    "day": 320,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself have you missed?",
    "optional": "What would a life with more spaciousness contain?"
  },
  {
    "day": 321,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What helps you return to yourself when you lose your footing?",
    "optional": ""
  },
  {
    "day": 322,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What boundaries have become clearer?",
    "optional": "What does 'coming back to yourself' mean to you now?"
  },
  {
    "day": 323,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you want to carry forward from this year of reflection?",
    "optional": "What kind of care do you want to make ordinary?"
  },
  {
    "day": 324,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you no longer willing to abandon in yourself?",
    "optional": ""
  },
  {
    "day": 325,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does enoughness mean when you remove performance from the equation?",
    "optional": "What has become less frightening simply because you have practiced staying present with it?"
  },
  {
    "day": 326,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does enoughness mean when you remove performance from the equation?",
    "optional": "What has become less frightening simply because you have practiced staying present with it?"
  },
  {
    "day": 327,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would you like the next chapter to feel like, rather than simply accomplish?",
    "optional": ""
  },
  {
    "day": 328,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would trusting yourself one step more look like?",
    "optional": "What parts of your life feel genuinely yours?"
  },
  {
    "day": 329,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you no longer willing to abandon in yourself?",
    "optional": "What would trusting yourself one step more look like?"
  },
  {
    "day": 330,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would you like the next chapter to feel like, rather than simply accomplish?",
    "optional": ""
  },
  {
    "day": 331,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you want to leave behind?",
    "optional": "What does 'coming back to yourself' mean to you now?"
  },
  {
    "day": 332,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you want to carry forward from this year of reflection?",
    "optional": "What are you proud of that does not look impressive from the outside?"
  },
  {
    "day": 333,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What boundaries have become clearer?",
    "optional": ""
  },
  {
    "day": 334,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What helps you return to yourself when you lose your footing?",
    "optional": "What does 'coming back to yourself' mean to you now?"
  },
  {
    "day": 335,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would trusting yourself one step more look like?",
    "optional": "What would you like the next chapter to feel like, rather than simply accomplish?"
  },
  {
    "day": 336,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would trusting yourself one step more look like?",
    "optional": ""
  },
  {
    "day": 337,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What helps you return to yourself when you lose your footing?",
    "optional": "What do you want to carry forward from this year of reflection?"
  },
  {
    "day": 338,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "Which signals from your body do you trust more now?",
    "optional": "What are you proud of that does not look impressive from the outside?"
  },
  {
    "day": 339,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does 'coming back to yourself' mean to you now?",
    "optional": ""
  },
  {
    "day": 340,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What boundaries have become clearer?",
    "optional": "What are you no longer willing to abandon in yourself?"
  },
  {
    "day": 341,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "Which signals from your body do you trust more now?",
    "optional": "What do you want to carry forward from this year of reflection?"
  },
  {
    "day": 342,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What parts of your life feel genuinely yours?",
    "optional": ""
  },
  {
    "day": 343,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you want to carry forward from this year of reflection?",
    "optional": "What has become less frightening simply because you have practiced staying present with it?"
  },
  {
    "day": 344,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What kind of care do you want to make ordinary?",
    "optional": "Which signals from your body do you trust more now?"
  },
  {
    "day": 345,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does enoughness mean when you remove performance from the equation?",
    "optional": ""
  },
  {
    "day": 346,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What helps you return to yourself when you lose your footing?",
    "optional": "What parts of your life feel genuinely yours?"
  },
  {
    "day": 347,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would you like the next chapter to feel like, rather than simply accomplish?",
    "optional": "What helps you return to yourself when you lose your footing?"
  },
  {
    "day": 348,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What kind of care do you want to make ordinary?",
    "optional": ""
  },
  {
    "day": 349,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What parts of your life feel genuinely yours?",
    "optional": "What kind of care do you want to make ordinary?"
  },
  {
    "day": 350,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does 'coming back to yourself' mean to you now?",
    "optional": "What parts of your life feel genuinely yours?"
  },
  {
    "day": 351,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you proud of that does not look impressive from the outside?",
    "optional": ""
  },
  {
    "day": 352,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What kind of care do you want to make ordinary?",
    "optional": "What has become less frightening simply because you have practiced staying present with it?"
  },
  {
    "day": 353,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "Which signals from your body do you trust more now?",
    "optional": "What are you no longer willing to abandon in yourself?"
  },
  {
    "day": 354,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does 'coming back to yourself' mean to you now?",
    "optional": ""
  },
  {
    "day": 355,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would trusting yourself one step more look like?",
    "optional": "What does 'coming back to yourself' mean to you now?"
  },
  {
    "day": 356,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about listening to yourself?",
    "optional": "What does 'coming back to yourself' mean to you now?"
  },
  {
    "day": 357,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What kind of care do you want to make ordinary?",
    "optional": ""
  },
  {
    "day": 358,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What parts of your life feel genuinely yours?",
    "optional": "What has become less frightening simply because you have practiced staying present with it?"
  },
  {
    "day": 359,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does 'coming back to yourself' mean to you now?",
    "optional": "What helps you return to yourself when you lose your footing?"
  },
  {
    "day": 360,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What has become less frightening simply because you have practiced staying present with it?",
    "optional": ""
  },
  {
    "day": 361,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you want to leave behind?",
    "optional": "What would you like the next chapter to feel like, rather than simply accomplish?"
  },
  {
    "day": 362,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about listening to yourself?",
    "optional": "What would you like the next chapter to feel like, rather than simply accomplish?"
  },
  {
    "day": 363,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you proud of that does not look impressive from the outside?",
    "optional": ""
  },
  {
    "day": 364,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does enoughness mean when you remove performance from the equation?",
    "optional": "What would you like the next chapter to feel like, rather than simply accomplish?"
  },
  {
    "day": 365,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you no longer willing to abandon in yourself?",
    "optional": "What do you want to leave behind?"
  }
];
const KEY = "bty-entries-v1";
let entries = JSON.parse(localStorage.getItem(KEY) || "{}");
let currentDay = Number(localStorage.getItem("bty-current-day") || 1);
let currentView = "home";
let currentTool = null;
let saveTimer = null;

const PHASES = [
  {start:1,end:45,name:"ARRIVING",title:"Arriving",description:"Safety, noticing, and gentle orientation"},
  {start:46,end:105,name:"LISTENING",title:"Listening",description:"Needs, emotions, and inner signals"},
  {start:106,end:180,name:"MAKING ROOM",title:"Making Room",description:"Patterns, protection, and permission"},
  {start:181,end:255,name:"TURNING TOWARD",title:"Turning Toward",description:"Self-trust, boundaries, and authentic choice"},
  {start:256,end:320,name:"RECONNECTING",title:"Reconnecting",description:"Desire, values, relationships, and aliveness"},
  {start:321,end:365,name:"BACK TO YOURSELF",title:"Back To You",description:"Integration, choice, and continuing"}
];

const TOOLS = [
  {id:"54321",section:"Ground Me",sectionIcon:"",sectionDesc:"I'm overwhelmed. Help me come back to the present.",title:"5–4–3–2–1",desc:"A gentle sensory exercise for returning your attention to the here and now."},
  {id:"feet",section:"Ground Me",sectionIcon:"",sectionDesc:"I'm overwhelmed. Help me come back to the present.",title:"Feet on the Floor",desc:"A simple grounding practice that brings you into contact with the surface beneath you."},
  {id:"feeling",section:"Help Me Listen",sectionIcon:"",sectionDesc:"Something is happening inside me. Help me understand it.",title:"What Am I Feeling?",desc:"Name what may be present without needing to explain or fix it."},
  {id:"body",section:"Help Me Listen",sectionIcon:"",sectionDesc:"Something is happening inside me. Help me understand it.",title:"What Is My Body Telling Me?",desc:"Slow down and notice sensations, signals, and possible messages from your body."},
  {id:"box",section:"Help Me Move Through It",sectionIcon:"",sectionDesc:"I'm activated or stuck. Help me shift what's happening.",title:"Box Breathing",desc:"A paced breathing exercise using equal counts to create a little more steadiness."},
  {id:"orient",section:"Help Me Move Through It",sectionIcon:"",sectionDesc:"I'm activated or stuck. Help me shift what's happening.",title:"Orienting",desc:"Use your eyes and attention to notice that you are here, now, in your actual surroundings."},
  {id:"pause",section:"Bring Me Back to Myself",sectionIcon:"",sectionDesc:"I've lost touch with myself in this moment. Help me reconnect with me.",title:"Pause Before Responding",desc:"Create a little space between what happened and what you choose to do next."},
  {id:"mine",section:"Bring Me Back to Myself",sectionIcon:"",sectionDesc:"I've lost touch with myself in this moment. Help me reconnect with me.",title:"What Is Mine to Carry?",desc:"Separate what belongs to you from what belongs to someone else."},
  {id:"want",section:"Bring Me Back to Myself",sectionIcon:"",sectionDesc:"I've lost touch with myself in this moment. Help me reconnect with me.",title:"What Do I Want?",desc:"Notice your own preferences before they get crowded out by expectations or explanations."}
];

const app = document.getElementById("app");
const toast = document.getElementById("toast");

function saveEntries(){ localStorage.setItem(KEY,JSON.stringify(entries)); }
function showToast(msg){ toast.textContent=msg;toast.classList.add("show");clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove("show"),1800); }
function day(n){return DAYS[n-1];}
function phaseForDay(n){return PHASES.find(p=>n>=p.start&&n<=p.end)||PHASES[0];}
function escapeHtml(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function completedCount(){return Object.values(entries).filter(e=>e&&((e.response||"").trim()||(e.optionalResponse||"").trim())).length;}
function nextIncomplete(){for(const d of DAYS){const e=entries[d.day];if(!e||(!(e.response||"").trim()&&!(e.optionalResponse||"").trim()))return d.day;}return 1;}
function formatEntryDate(value){if(!value)return "";const parts=String(value).split("-").map(Number);if(parts.length!==3||parts.some(Number.isNaN))return "";const [year,month,dayNum]=parts;const dt=new Date(year,month-1,dayNum);if(dt.getFullYear()!==year||dt.getMonth()!==month-1||dt.getDate()!==dayNum)return "";return new Intl.DateTimeFormat(undefined,{year:"numeric",month:"long",day:"numeric"}).format(dt);}
function icon(name){
  const common='viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const paths={
    home:`<svg ${common}><path d="M3.5 10.5 12 3.8l8.5 6.7"/><path d="M5.5 9.8v9.2h13V9.8"/><path d="M9.5 19v-5.2h5V19"/></svg>`,
    bookmark:`<svg ${common}><path d="M6.5 4.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16l-5.5-3.5-5.5 3.5z"/></svg>`,
    heart:`<svg ${common}><path d="M12 20.2S4.2 15.7 3.7 9.7C3.4 6.1 5.8 3.7 9 3.7c1.6 0 2.5.7 3 1.7.5-1 1.4-1.7 3-1.7 3.2 0 5.6 2.4 5.3 6-.5 6-8.3 10.5-8.3 10.5z"/></svg>`,
    more:`<svg ${common}><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>`,
    arrow:`<svg ${common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
    back:`<svg ${common}><path d="M19 12H5"/><path d="m11 6-6 6 6 6"/></svg>`
  };return paths[name]||"";
}
function updatePageBack(){
  const el=document.getElementById('pageBack');
  if(!el)return;
  let label='', action='';
  if(currentView==='journal'){label='Back to Today';action="currentView='home';render()";}
  else if(currentView==='tools'){label='Back to Today';action="currentView='home';render()";}
  else if(currentView==='more'){label='Back to Today';action="currentView='home';render()";}
  else if(currentView==='day'){label='Back to Journal';action="currentView='journal';render()";}
  else if(currentView==='tool'){label='Back to Tools';action="currentTool=null;currentView='tools';render()";}
  if(label){el.innerHTML=`${icon('back')}<span>${label}</span>`;el.setAttribute('aria-label',label);el.setAttribute('onclick',action);el.classList.add('show');}
  else{el.innerHTML='';el.classList.remove('show');el.removeAttribute('onclick');}
}
function render(){
  window.scrollTo({top:0,behavior:'auto'});
  document.querySelectorAll(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.view===currentView));
  updatePageBack();
  if(currentView==="home")renderHome();
  else if(currentView==="journal")renderJournal();
  else if(currentView==="tools")renderTools();
  else if(currentView==="more")renderMore();
  else if(currentView==="day")renderDay();
  else if(currentView==="tool")renderTool(currentTool);
}
function renderHome(){
  const d=day(nextIncomplete());
  app.innerHTML=`
    <section class="hero home-hero">
      <h1>Back To Yourself</h1>
      <p class="quote">This journal does not ask you to be positive. It does not ask you to heal on schedule. It only asks you to meet yourself where you are.</p>
      <p class="closing-line">Nothing to fix. Nothing to prove. Just notice.</p>
    </section>
    <section class="card phase-card">
      <div class="phase-meta">${escapeHtml(d.phase)} · Day ${d.day}</div>
      <h2>Today’s invitation</h2>
      <p class="prompt">${escapeHtml(d.prompt)}</p>
      <div class="row"><button class="btn" onclick="openDay(${d.day})">Open Day ${d.day}</button><button class="btn secondary" onclick="currentView='journal';render()">Choose a day</button></div>
    </section>
    <section class="card soft-card">
      <h3>Your journal</h3>
      <p class="small">${completedCount()} of 365 days have writing saved. There is no requirement to finish every day.</p>
      <div class="progress"><div style="width:${Math.round(completedCount()/365*100)}%"></div></div>
    </section>`;
}
function renderJournal(){
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">365 undated days</div><h2>Journal</h2><p class="small">Choose any day. Your writing is saved on this device.</p></section><input class="search" id="search" placeholder="Search prompts or your entries…" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" oninput="filterDays(this.value)"><div id="phaseList"></div>`;
  renderPhaseList(DAYS);
}
function renderPhaseList(list){
  const root=document.getElementById("phaseList");if(!root)return;
  root.innerHTML=PHASES.map(p=>{
    const days=list.filter(d=>d.day>=p.start&&d.day<=p.end);if(!days.length)return "";
    return `<section class="phase-section"><div class="phase-heading"><div><div class="phase-number">${p.start}–${p.end}</div><h3>${p.title}</h3><p>${p.description}</p></div></div><div class="day-grid">${days.map(d=>{const e=entries[d.day]||{};const done=!!((e.response||"").trim()||(e.optionalResponse||"").trim());return `<button class="day-cell ${done?"done":""}" onclick="openDay(${d.day})"><span>${d.day}</span><small>${done?"saved":""}</small></button>`}).join("")}</div></section>`;
  }).join("");
}
function filterDays(q){
  q=(q||'').trim().toLowerCase();
  if(!q){ renderPhaseList(DAYS); return; }
  renderPhaseList(DAYS.filter(d=>(d.prompt+" "+d.optional+" "+d.phase).toLowerCase().includes(q)||JSON.stringify(entries[d.day]||{}).toLowerCase().includes(q)));
}
function renderTools(){
  const sections=[...new Set(TOOLS.map(t=>t.section))];
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">Small practices for real moments</div><h2>Tools</h2><p class="small">You don't have to journal every time. Sometimes a few minutes of noticing, breathing, or sorting is enough.</p></section>${sections.map(section=>{const first=TOOLS.find(t=>t.section===section);return `<section class="tool-section"><div class="tool-section-title"><h3>${section}</h3><p>${first.sectionDesc}</p></div><div class="tool-grid">${TOOLS.filter(t=>t.section===section).map(t=>`<button class="tool-card" onclick="openTool('${t.id}')"><span class="tool-card-title">${t.title}</span><span class="tool-card-desc">${t.desc}</span><span class="tool-arrow">${icon("arrow")}</span></button>`).join("")}</div></section>`}).join("")}`;
}
function openTool(id){currentTool=id;currentView='tool';render();}
function renderTool(id){
  const t=TOOLS.find(x=>x.id===id);if(!t)return renderTools();
  const bodies={
    "54321":`<p class="exercise-intro">Look around slowly and notice what is already here. You do not need to write anything down.</p><div class="practice-sequence"><div><strong>5</strong><span>Name five things you can see.</span></div><div><strong>4</strong><span>Notice four things you can feel—contact, texture, temperature, or pressure.</span></div><div><strong>3</strong><span>Notice three things you can hear.</span></div><div><strong>2</strong><span>Notice two things you can smell, or simply notice the air.</span></div><div><strong>1</strong><span>Notice one thing you can taste.</span></div></div><button class="btn" onclick="finishTool('You are here. You noticed what is around you.')">Done</button>`,
    feet:`<p class="exercise-intro">Let your attention come down toward your feet and the surface beneath you.</p><div class="instruction-list"><p>Feel the surface beneath both feet.</p><p>Notice the weight of your body settling downward.</p><p>Press your feet gently into the floor for three breaths.</p><p>Look around and notice where you are.</p></div><button class="btn" onclick="finishTool('You gave your body a moment of contact and orientation.')">Done</button>`,
    feeling:`<p class="small">Tap anything that fits. There may be more than one, and you can change your mind.</p><div class="chip-grid">${['calm','sad','angry','anxious','overwhelmed','lonely','numb','relieved','frustrated','tender','uncertain','content'].map(x=>`<button class="chip" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div><p class="small center tool-note">No need to explain it. Naming it is enough.</p><button class="btn" onclick="finishTool('You noticed what is present without needing to fix it.')">Done</button>`,
    body:`<p class="exercise-intro">Bring your attention gently to your body. See what you notice without needing to make it mean anything.</p><div class="chip-grid">${['chest','throat','jaw','shoulders','belly','hands','head','back','everywhere','nowhere'].map(x=>`<button class="chip" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div><div class="choice-row"><button class="choice-btn" onclick="selectChoice(this)">tight</button><button class="choice-btn" onclick="selectChoice(this)">heavy</button><button class="choice-btn" onclick="selectChoice(this)">warm</button><button class="choice-btn" onclick="selectChoice(this)">restless</button><button class="choice-btn" onclick="selectChoice(this)">numb</button><button class="choice-btn" onclick="selectChoice(this)">open</button></div><p class="small center tool-note">If your body could ask for one thing, what comes to mind: less, more, slower, space, movement, comfort?</p><button class="btn" onclick="finishTool('You listened without demanding an answer.')">Done</button>`,
    box:`<div class="breath-box"><div id="breathPhase">Ready</div><div class="breath-count" id="breathCount">4</div><p id="breathHint">Inhale for 4 · hold 4 · exhale 4 · hold 4</p></div><button class="btn" id="breathBtn" onclick="startBoxBreathing()">Start</button><p class="small center" id="breathRounds">No need to force your breath. Stop if this feels uncomfortable.</p>`,
    orient:`<p class="exercise-intro">Let your eyes move slowly. You are not searching for anything special—just allowing your brain to take in the room.</p><div class="instruction-list"><p>Find one color that catches your attention.</p><p>Notice the nearest doorway, window, or exit.</p><p>Find one object that is completely still.</p><p>Look farther away, then closer again.</p><p>Notice one thing that tells you you are safe enough in this moment.</p></div><button class="btn" onclick="finishTool('You oriented to the present moment.')">Done</button>`,
    pause:`<div class="stepper clean-stepper"><div class="step active"><span>1</span><div><strong>Pause</strong><p>Do you need to respond right now, or can this wait?</p></div></div><div class="step"><span>2</span><div><strong>Name it</strong><p>What are you feeling? Just name it.</p></div></div><div class="step"><span>3</span><div><strong>Separate event from story</strong><p>What actually happened? What meaning are you adding?</p></div></div><div class="step"><span>4</span><div><strong>Choose</strong><p>If you respond, what would be honest without defending, explaining, fixing, or pleasing?</p></div></div></div><button class="btn" onclick="finishTool('You made room between the moment and your response.')">Done</button>`,
    mine:`<p class="exercise-intro">Tap each item that belongs to you. Then notice what does not.</p><div class="sort-grid"><div class="sort-col"><h3>Mine</h3>${['My feelings','My choices','My boundaries','How I communicate'].map(x=>`<button class="choice-btn wide" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div><div class="sort-col"><h3>Theirs / not mine</h3>${['Their feelings','Their choices','Their reaction to my boundary','What I cannot control'].map(x=>`<button class="choice-btn wide" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div></div><p class="small center tool-note">What can you put down for now? You do not have to solve it.</p><button class="btn" onclick="finishTool('You do not have to carry what is not yours.')">Done</button>`,
    want:`<p class="exercise-intro">Hold the situation or decision in your mind. You do not need to explain it or decide anything yet.</p><p class="small">Now ask yourself: <strong>What do I want?</strong></p><div class="want-grid"><button onclick="chooseWant(this,'want')">I want this</button><button onclick="chooseWant(this,'dont')">I don't want this</button><button onclick="chooseWant(this,'unsure')">I don't know yet</button></div><p class="small center tool-note" id="wantHint">There is no wrong answer. Notice which response feels most like yours right now.</p><button class="btn" onclick="finishTool('You listened for your own preference without forcing a decision.')">Done</button>`
  };
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">${t.section}</div><h2>${t.title}</h2><p class="small">${t.desc}</p></section><section class="card exercise-card">${bodies[id]||''}</section>`;
}
function chooseWant(btn,value){document.querySelectorAll('.want-grid button').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');const hint=document.getElementById('wantHint');if(hint){hint.textContent=value==='want'?'Notice what it feels like to acknowledge that want.':value==='dont'?'Notice what it feels like to acknowledge that you do not want this.':'Not knowing yet is information too. You do not have to force an answer.';}}
function selectChoice(btn){btn.classList.toggle('selected');}
function finishTool(msg){showToast(msg,3000);clearTimeout(finishTool.t);finishTool.t=setTimeout(()=>{currentTool=null;currentView='tools';render();},3000);}
let breathTimer=null;
function startBoxBreathing(){
  const btn=document.getElementById('breathBtn');if(!btn)return;
  if(breathTimer){clearInterval(breathTimer);breathTimer=null;btn.textContent='Start';document.getElementById('breathPhase').textContent='Ready';document.getElementById('breathCount').textContent='4';return;}
  const phases=[['Inhale',4],['Hold',4],['Exhale',4],['Hold',4]];let phase=0,count=4,round=0;
  btn.textContent='Stop';
  const tick=()=>{document.getElementById('breathPhase').textContent=phases[phase][0];document.getElementById('breathCount').textContent=count;count--;if(count<1){phase++;if(phase>=4){phase=0;round++;document.getElementById('breathRounds').textContent=`Round ${round}. Keep going only if it feels comfortable.`;}count=4;}};
  tick();breathTimer=setInterval(tick,1000);
}
function renderMore(){
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">Your space</div><h2>More</h2></section><section class="card"><h3>Privacy</h3><p class="small">Your journal entries are stored in this browser on this device. They are not sent to a server by this app.</p><p class="small">For safety, export a backup before clearing browser data or changing devices.</p></section><section class="card"><h3>Backup your journal</h3><p class="small">Export creates a JSON file containing your entries. Keep it somewhere private.</p><div class="row"><button class="btn" onclick="exportData()">Export entries</button><button class="btn secondary" onclick="document.getElementById('importFile').click()">Import backup</button></div><input id="importFile" type="file" accept=".json,application/json" style="display:none" onchange="importData(event)"></section><section class="card"><h3>Reset</h3><p class="small">This permanently removes the entries saved in this browser. Export first if you want a backup.</p><button class="btn secondary" onclick="resetEntries()">Delete all entries</button></section><section class="card"><h3>About</h3><p class="small">Back To Yourself is an undated 365-day guided journal. No streaks. No forced positivity. No healing schedule.</p></section>`;
}
function openDay(n){currentDay=Math.min(365,Math.max(1,n));localStorage.setItem('bty-current-day',currentDay);currentView='day';renderDay();}
function renderDay(){
  const d=day(currentDay),e=entries[currentDay]||{},savedDate=formatEntryDate(e.date),dayLabel=savedDate?`Day ${d.day} · ${savedDate}`:`Day ${d.day}`;
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">${escapeHtml(d.phase)} · ${escapeHtml(d.phaseDescription)}</div><div class="day-number">${escapeHtml(dayLabel)}</div><p class="small">Take this at your own pace.</p></section><section class="card"><h3>Today’s invitation</h3><p class="prompt">${escapeHtml(d.prompt)}</p><label for="response">What would you like to write?</label><textarea id="response" placeholder="Write what feels useful. You don't have to make sense of it.">${escapeHtml(e.response||'')}</textarea>${d.optional?`<div class="optional-card"><h3>If you have room</h3><p class="optional">${escapeHtml(d.optional)}</p><label for="optionalResponse">Optional reflection</label><textarea id="optionalResponse" placeholder="Only if you have room…">${escapeHtml(e.optionalResponse||'')}</textarea></div>`:''}<label for="date">Date (optional)</label><input id="date" type="date" value="${escapeHtml(e.date||'')}"><div class="save-status" id="saveStatus"></div><div class="navrow"><button class="btn secondary" onclick="openDay(${currentDay-1})" ${currentDay===1?'disabled':''}>← Previous</button><button class="btn" onclick="openDay(${currentDay+1})" ${currentDay===365?'disabled':''}>Next →</button></div></section>`;
  ['response','optionalResponse','date'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('input',queueSave);});
}
function queueSave(){const status=document.getElementById('saveStatus');if(status)status.textContent='Saving…';clearTimeout(saveTimer);saveTimer=setTimeout(()=>{const r=document.getElementById('response')?.value||'',o=document.getElementById('optionalResponse')?.value||'',date=document.getElementById('date')?.value||'';entries[currentDay]={response:r,optionalResponse:o,date,updatedAt:new Date().toISOString()};saveEntries();if(status)status.textContent='Saved on this device.';},350);}
function exportData(){const payload={app:'Back To Yourself',version:1,exportedAt:new Date().toISOString(),entries};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='back-to-yourself-journal-backup.json';a.click();URL.revokeObjectURL(a.href);showToast('Backup exported');}
function importData(event){const file=event.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const p=JSON.parse(reader.result);if(!p.entries)throw new Error('Invalid backup');entries=p.entries;saveEntries();render();showToast('Backup imported');}catch(e){alert("That file doesn't look like a Back To Yourself backup.");}};reader.readAsText(file);}
function resetEntries(){if(confirm('Delete all saved journal entries from this device? This cannot be undone unless you have an export backup.')){entries={};saveEntries();render();showToast('Entries deleted');}}

document.querySelectorAll('.bottom-nav button').forEach(b=>b.addEventListener('click',()=>{currentView=b.dataset.view;currentTool=null;render();}));
document.querySelector('.brand').addEventListener('click',()=>{currentView='home';render();});
if('serviceWorker' in navigator)navigator.serviceWorker.register('service-worker.js').catch(()=>{});
render();
