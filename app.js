const DAYS = [
  {
    "day": 1,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Notice your energy today without deciding whether it is enough.",
    "optional": "What would help you stay curious about your energy instead of turning it into a problem?"
  },
  {
    "day": 2,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What feels most noticeable in your body right now?",
    "optional": "What changes when you stay with that sensation without trying to change it?"
  },
  {
    "day": 3,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What do you see, hear, or feel that reminds you you are here?",
    "optional": ""
  },
  {
    "day": 4,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What part of today feels settled, even if only slightly?",
    "optional": "What seems to help that sense of settling grow?"
  },
  {
    "day": 5,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What has already taken effort today that you might normally overlook?",
    "optional": "What would it be like to acknowledge that effort instead of moving past it?"
  },
  {
    "day": 6,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What kind of rest would actually restore you today?",
    "optional": ""
  },
  {
    "day": 7,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where in your body can you find even a small sense of ease?",
    "optional": ""
  },
  {
    "day": 8,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What happens inside you when you give yourself permission to slow down?",
    "optional": "What becomes easier to notice when you stop rushing?"
  },
  {
    "day": 9,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one thing around you that helps you feel oriented to the present?",
    "optional": ""
  },
  {
    "day": 10,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "If the next hour could be 5% gentler, what would you change?",
    "optional": "What would make that small change feel supportive rather than like another task?"
  },
  {
    "day": 11,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What does your body seem to be asking for today: less, more, slower, or different?",
    "optional": "What changes when you give yourself permission to need something different today?"
  },
  {
    "day": 12,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What are you carrying right now that does not need to be solved today?",
    "optional": ""
  },
  {
    "day": 13,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "When do you notice yourself rushing, even when nothing requires it?",
    "optional": "What does your body seem to be asking you to notice beneath the urge to rush?"
  },
  {
    "day": 14,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What happens when you pause long enough to notice your surroundings before moving on?",
    "optional": "What helps you stay present with what you notice before moving on?"
  },
  {
    "day": 15,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What helps your body recognize that this moment is different from another difficult moment?",
    "optional": ""
  },
  {
    "day": 16,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where do you feel tension today, and can you notice it without trying to make it disappear?",
    "optional": "What happens when you make room for the tension without needing it to leave?"
  },
  {
    "day": 17,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What does your breathing feel like when you first pay attention to it?",
    "optional": "What do you notice after giving your breathing a little attention?"
  },
  {
    "day": 18,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What changes in your body when you feel even a little more comfortable?",
    "optional": ""
  },
  {
    "day": 19,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one ordinary thing today that your senses seem to enjoy?",
    "optional": "Which part of that sensory experience draws you in most?"
  },
  {
    "day": 20,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What tells you that you have reached your limit before your mind admits it?",
    "optional": "What is the earliest sign that you are nearing that limit?"
  },
  {
    "day": 21,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What happens when you let yourself move at the pace your body prefers?",
    "optional": ""
  },
  {
    "day": 22,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Which part of your day feels most spacious, and what makes it that way?",
    "optional": ""
  },
  {
    "day": 23,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Which part of your day feels most demanding, and what do you notice in yourself there?",
    "optional": "What would help you feel a little more supported in that part of the day?"
  },
  {
    "day": 24,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What does “enough for today” feel like in your body?",
    "optional": ""
  },
  {
    "day": 25,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What helps you settle after a moment of stimulation or stress?",
    "optional": ""
  },
  {
    "day": 26,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "When you notice yourself bracing, what happens if you simply acknowledge it?",
    "optional": "What do you imagine your body is preparing for when it braces?"
  },
  {
    "day": 27,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What physical sensation lets you know you are becoming more present?",
    "optional": ""
  },
  {
    "day": 28,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What does your body do when you feel safe enough to exhale?",
    "optional": ""
  },
  {
    "day": 29,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one small comfort you can receive without earning it first?",
    "optional": ""
  },
  {
    "day": 30,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What happens when you notice a pleasant sensation without needing to hold onto it?",
    "optional": ""
  },
  {
    "day": 31,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Where does your attention naturally go when you are not trying to control it?",
    "optional": ""
  },
  {
    "day": 32,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What does your body seem to know about your pace today?",
    "optional": "What happens when you let your body set the pace without turning it into a rule?"
  },
  {
    "day": 33,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What is one sound, texture, temperature, or color that brings you into the present?",
    "optional": ""
  },
  {
    "day": 34,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What happens when you let a neutral moment simply be neutral?",
    "optional": ""
  },
  {
    "day": 35,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "When something feels uncomfortable today, can you notice the difference between discomfort and danger?",
    "optional": "What helps you remember that uncomfortable does not automatically mean unsafe?"
  },
  {
    "day": 36,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What does your body do when you anticipate something before it happens?",
    "optional": ""
  },
  {
    "day": 37,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What helps you come back after your attention has wandered?",
    "optional": ""
  },
  {
    "day": 38,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What would it feel like to meet your current state with curiosity instead of evaluation?",
    "optional": "What changes when you approach yourself with curiosity instead of evaluation?"
  },
  {
    "day": 39,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What small signal from your body have you been noticing more often lately?",
    "optional": ""
  },
  {
    "day": 40,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What helps you feel more settled after being around other people?",
    "optional": ""
  },
  {
    "day": 41,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What happens inside you when you stop trying to predict what comes next?",
    "optional": "What do you notice when you let the future remain unknown for a moment?"
  },
  {
    "day": 42,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What part of your day could hold a little more quiet?",
    "optional": ""
  },
  {
    "day": 43,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What have you learned about what helps you regulate from the first weeks of paying attention?",
    "optional": "Which practice from these first weeks feels most worth keeping?"
  },
  {
    "day": 44,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "Which signals from your body are becoming easier to recognize?",
    "optional": "What has changed about the way you respond to these signals?"
  },
  {
    "day": 45,
    "phase": "ARRIVING",
    "phaseDescription": "Safety, orientation, and noticing",
    "prompt": "What would you like to keep practicing as you move into listening more deeply?",
    "optional": "What would you like to carry with you as you begin listening more closely?"
  },
  {
    "day": 46,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling is closest to the surface for you today?",
    "optional": "What might that feeling be helping you notice, without requiring you to act on it?"
  },
  {
    "day": 47,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "If you could name three feelings present right now, what would they be?",
    "optional": "Which feeling seems to need the most attention right now?"
  },
  {
    "day": 48,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Where do you notice your feelings in your body?",
    "optional": ""
  },
  {
    "day": 49,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What emotion tends to arrive first when something feels uncertain?",
    "optional": "What do you notice underneath or alongside that emotion?"
  },
  {
    "day": 50,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What happens when you name a feeling without explaining why it is there?",
    "optional": "What becomes possible when you let the feeling be true without needing to justify it?"
  },
  {
    "day": 51,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Which feeling is easiest for you to acknowledge, and which is harder?",
    "optional": ""
  },
  {
    "day": 52,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling have you been tempted to talk yourself out of?",
    "optional": ""
  },
  {
    "day": 53,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What does sadness feel like in your body when you let it be there?",
    "optional": "What does your body need while that sadness is present?"
  },
  {
    "day": 54,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What does anxiety feel like before your mind gives it a story?",
    "optional": ""
  },
  {
    "day": 55,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What does anger feel like before you decide what it means?",
    "optional": "What might the anger be protecting or pointing toward?"
  },
  {
    "day": 56,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What does relief feel like when you allow yourself to actually receive it?",
    "optional": "What helps you let yourself receive that relief?"
  },
  {
    "day": 57,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What emotion might be underneath a reaction that surprised you?",
    "optional": ""
  },
  {
    "day": 58,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What need might be living underneath something you are feeling today?",
    "optional": "What does the feeling tell you about the need beneath it?"
  },
  {
    "day": 59,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What do you wish someone understood about what you are feeling?",
    "optional": ""
  },
  {
    "day": 60,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you wanting right now, even if the answer feels inconvenient?",
    "optional": ""
  },
  {
    "day": 61,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What are you needing that you have been reluctant to name?",
    "optional": "What becomes clearer when you give that need some room?"
  },
  {
    "day": 62,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What happens in your body when a need is met, even in a small way?",
    "optional": ""
  },
  {
    "day": 63,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Which needs do you tend to dismiss as unnecessary?",
    "optional": ""
  },
  {
    "day": 64,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What makes it difficult for you to recognize your own needs?",
    "optional": "What makes it harder to give your own needs the same legitimacy you give other people’s?"
  },
  {
    "day": 65,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What do you notice when you ask yourself, “What do I need?” and wait?",
    "optional": "What might help you hear the answer before you start negotiating with it?"
  },
  {
    "day": 66,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What desire have you been minimizing because it seems impractical?",
    "optional": ""
  },
  {
    "day": 67,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What do you notice when you distinguish wanting something from needing it?",
    "optional": "What do you notice in your body when you name what you want?"
  },
  {
    "day": 68,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling comes up when you imagine asking directly for what you need?",
    "optional": ""
  },
  {
    "day": 69,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What do you fear might happen if you let someone know what you really need?",
    "optional": ""
  },
  {
    "day": 70,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What is your body saying before your mind starts negotiating with it?",
    "optional": "What happens when you give that signal a moment of attention before deciding what it means?"
  },
  {
    "day": 71,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "When your body says no, what thoughts tend to argue with it?",
    "optional": "What would it take to hear a no without immediately arguing with it?"
  },
  {
    "day": 72,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "When your body says yes, what helps you trust that signal?",
    "optional": ""
  },
  {
    "day": 73,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What sensations tell you that you are approaching overwhelm?",
    "optional": "What is one small thing you can do when you notice that early sign?"
  },
  {
    "day": 74,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What sensations tell you that you are moving toward ease?",
    "optional": "What helps you recognize ease without needing to hold onto it?"
  },
  {
    "day": 75,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What happens when you stay with a feeling for one minute without fixing it?",
    "optional": "What do you learn about the feeling when you stay with it instead of fixing it?"
  },
  {
    "day": 76,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Which emotions do you tend to turn into thoughts instead of allowing yourself to feel?",
    "optional": ""
  },
  {
    "day": 77,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Which emotions do you tend to act on before understanding them?",
    "optional": ""
  },
  {
    "day": 78,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What is the difference between feeling something strongly and needing to act on it?",
    "optional": ""
  },
  {
    "day": 79,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling has been asking for your attention lately?",
    "optional": ""
  },
  {
    "day": 80,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What might that feeling want you to notice rather than do?",
    "optional": ""
  },
  {
    "day": 81,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What happens when you allow two seemingly opposite feelings to exist together?",
    "optional": ""
  },
  {
    "day": 82,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Can you feel both care and frustration toward the same person or situation?",
    "optional": "What does each feeling seem to need from you?"
  },
  {
    "day": 83,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What does uncertainty feel like when you do not immediately resolve it?",
    "optional": "What helps you stay present when you do not have an answer yet?"
  },
  {
    "day": 84,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What do you notice when you separate a feeling from the story attached to it?",
    "optional": "What becomes clearer when you separate the feeling from the meaning you have attached to it?"
  },
  {
    "day": 85,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What is the story your mind tells when you feel rejected or overlooked?",
    "optional": "What part of that story feels familiar from other experiences?"
  },
  {
    "day": 86,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What else might be true alongside that story?",
    "optional": "What else could be true without requiring you to dismiss the original story?"
  },
  {
    "day": 87,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What changes when you ask, “What do I know, and what am I assuming?”",
    "optional": ""
  },
  {
    "day": 88,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling becomes clearer when you stop judging it?",
    "optional": "What becomes easier to hear when you stop deciding whether the feeling is acceptable?"
  },
  {
    "day": 89,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What happens when you let yourself say, “Of course I feel this,” without deciding it is justified?",
    "optional": "What would it be like to trust that the feeling does not need to be justified to be real?"
  },
  {
    "day": 90,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What emotion do you most often hide from other people?",
    "optional": ""
  },
  {
    "day": 91,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What happens inside you when you consider letting that emotion be known?",
    "optional": ""
  },
  {
    "day": 92,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What need have you learned to meet by yourself because asking felt unsafe or disappointing?",
    "optional": ""
  },
  {
    "day": 93,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What would it be like to acknowledge that need without criticizing yourself for having it?",
    "optional": ""
  },
  {
    "day": 94,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What do you notice about your needs when you are rested compared with when you are depleted?",
    "optional": "What changes in your awareness of your needs when you have enough energy?"
  },
  {
    "day": 95,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Which signals are easiest to hear when you are calm?",
    "optional": "What helps you notice an inner signal before you have to act on it?"
  },
  {
    "day": 96,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "Which signals become harder to hear when you are activated?",
    "optional": ""
  },
  {
    "day": 97,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What helps you tell the difference between an old alarm and a present need?",
    "optional": "What helps you recognize when an old alarm is speaking?"
  },
  {
    "day": 98,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "When you feel an urge to withdraw, what might you actually be needing?",
    "optional": "What might you be hoping to find or protect when you pull away?"
  },
  {
    "day": 99,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "When you feel an urge to pursue or fix, what might you actually be needing?",
    "optional": ""
  },
  {
    "day": 100,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What happens when you pause between the feeling and the response?",
    "optional": "What do you notice in the small space between feeling and response?"
  },
  {
    "day": 101,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What is one inner signal you want to practice listening to more consistently?",
    "optional": "What would make it easier to remember this signal in an ordinary moment?"
  },
  {
    "day": 102,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What do you notice when you make space for a feeling instead of explaining it away?",
    "optional": ""
  },
  {
    "day": 103,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What becomes possible when you stop treating every discomfort as a problem to solve?",
    "optional": "What might you learn by allowing discomfort to be present without immediately solving it?"
  },
  {
    "day": 104,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What feeling becomes easier to hear when you are not trying to make it go away?",
    "optional": ""
  },
  {
    "day": 105,
    "phase": "LISTENING",
    "phaseDescription": "Needs, emotions, and inner signals",
    "prompt": "What need becomes clearer when you give yourself time instead of answering immediately?",
    "optional": ""
  },
  {
    "day": 106,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern do you notice yourself repeating when you feel stressed?",
    "optional": "What might this pattern have once helped you manage?"
  },
  {
    "day": 107,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When you over-explain, what are you hoping will happen?",
    "optional": "What are you hoping the other person will understand or do when you explain more?"
  },
  {
    "day": 108,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What do you tend to do when you fear someone is disappointed with you?",
    "optional": ""
  },
  {
    "day": 109,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What do you tend to do when you feel misunderstood?",
    "optional": "What feels most important for you to have understood?"
  },
  {
    "day": 110,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens inside you when someone is upset with you?",
    "optional": "What becomes possible when you make room for this without judging it?"
  },
  {
    "day": 111,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What old rule seems to appear when you are afraid of conflict?",
    "optional": ""
  },
  {
    "day": 112,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What have you learned you must do to keep other people comfortable?",
    "optional": ""
  },
  {
    "day": 113,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What have you learned you must not do if you want to be accepted?",
    "optional": ""
  },
  {
    "day": 114,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which of those rules still makes sense for your life now?",
    "optional": ""
  },
  {
    "day": 115,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern once helped you get through something difficult?",
    "optional": "What happens just before the old pattern begins?"
  },
  {
    "day": 116,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What did that pattern protect you from noticing or feeling?",
    "optional": "What seems to trigger this pattern most often?"
  },
  {
    "day": 117,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your protective response help you avoid today?",
    "optional": ""
  },
  {
    "day": 118,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does it cost you when you use that protection automatically?",
    "optional": "What do you notice about the cost without judging yourself for having needed the protection?"
  },
  {
    "day": 119,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens in your body just before an old pattern takes over?",
    "optional": ""
  },
  {
    "day": 120,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What thought usually arrives just before you abandon your own preference?",
    "optional": ""
  },
  {
    "day": 121,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens inside you when someone else is uncomfortable with your choice?",
    "optional": "What do you imagine would happen if you let their discomfort belong to them?"
  },
  {
    "day": 122,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens inside you when you say what you actually mean?",
    "optional": "What helps you stay connected to yourself while saying it?"
  },
  {
    "day": 123,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens inside you when you allow someone to be disappointed?",
    "optional": ""
  },
  {
    "day": 124,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens when you stop explaining something that is already clear to you?",
    "optional": "What would the part that keeps explaining need to know in order to stand down?"
  },
  {
    "day": 125,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens when you let yourself ask for more?",
    "optional": "What would asking for more make possible if you did not have to justify the request?"
  },
  {
    "day": 126,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which part of you feels responsible for keeping the peace?",
    "optional": ""
  },
  {
    "day": 127,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does that part seem to believe would happen if it stopped?",
    "optional": "Where did you first learn to believe that about yourself?"
  },
  {
    "day": 128,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What might that protective part need from you now?",
    "optional": "What might this protective part need that is different from what it needed then?"
  },
  {
    "day": 129,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Can you appreciate what an old coping strategy was trying to accomplish?",
    "optional": "What can you appreciate about the way this strategy tried to help you?"
  },
  {
    "day": 130,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What is something you no longer need to punish yourself for?",
    "optional": "What becomes possible when you can understand your past response without condemning yourself for it?"
  },
  {
    "day": 131,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What reaction of yours makes more sense when you consider what you have lived through?",
    "optional": "What helps you understand the reaction without defining yourself by it?"
  },
  {
    "day": 132,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Where do you notice shame trying to turn a behavior into an identity?",
    "optional": ""
  },
  {
    "day": 133,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would change if you could say, “I learned this for a reason,” instead of “Something is wrong with me”?",
    "optional": "What old rule becomes easier to question when you remember why you learned it?"
  },
  {
    "day": 134,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What old belief about yourself feels less convincing than it once did?",
    "optional": ""
  },
  {
    "day": 135,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What belief about yourself still feels automatic even though you question it?",
    "optional": ""
  },
  {
    "day": 136,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Whose voice does that belief sound like?",
    "optional": "What do you notice about the belief when you hear whose voice it carries?"
  },
  {
    "day": 137,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What did you once have to believe about yourself in order to belong or feel safe?",
    "optional": "What does your younger self deserve to know about what is different now?"
  },
  {
    "day": 138,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would you like to believe about yourself instead?",
    "optional": ""
  },
  {
    "day": 139,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens inside you when you imagine releasing an old rule?",
    "optional": "What feels different when you imagine that the old rule no longer has to run the show?"
  },
  {
    "day": 140,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which old rule creates the most tension in your body?",
    "optional": "Where do you notice this rule showing up in your life now?"
  },
  {
    "day": 141,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which old rule feels surprisingly easy to loosen?",
    "optional": ""
  },
  {
    "day": 142,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What are you tolerating because an old pattern tells you that you should?",
    "optional": "What would you choose if you did not believe you were supposed to tolerate this?"
  },
  {
    "day": 143,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What are you doing out of obligation that you might actually be choosing?",
    "optional": "What part of this is truly a choice, and what part feels like an old obligation?"
  },
  {
    "day": 144,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Where do you confuse being needed with being valued?",
    "optional": ""
  },
  {
    "day": 145,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When do you find yourself equating being agreeable with being safe?",
    "optional": "What would safety look like if it did not depend on being agreeable?"
  },
  {
    "day": 146,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "When does discomfort start to feel like danger to you?",
    "optional": "What helps you stay with discomfort without treating it as a warning to retreat?"
  },
  {
    "day": 147,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Where do you confuse guilt with wrongdoing?",
    "optional": ""
  },
  {
    "day": 148,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Where do you confuse responsibility with control?",
    "optional": "What would become lighter if you stopped trying to control what is not yours?"
  },
  {
    "day": 149,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens when you let someone else own their reaction?",
    "optional": ""
  },
  {
    "day": 150,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What part of a difficult situation is actually yours to respond to?",
    "optional": ""
  },
  {
    "day": 151,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What part belongs to another person, even if you care deeply about it?",
    "optional": "What becomes clearer when you separate caring from taking responsibility?"
  },
  {
    "day": 152,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens when you resist the urge to fix something that is not yours to fix?",
    "optional": "What happens when you let the urge to fix something pass without following it?"
  },
  {
    "day": 153,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does your body seem to expect will happen if you disappoint someone?",
    "optional": "What in your present life helps challenge that expectation?"
  },
  {
    "day": 154,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What evidence from your present life challenges that expectation?",
    "optional": ""
  },
  {
    "day": 155,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What evidence supports it, and what evidence does not?",
    "optional": "What evidence would you want to remember the next time this fear shows up?"
  },
  {
    "day": 156,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What is different about you now than when an old coping strategy first became necessary?",
    "optional": "What is available to you now that was not available then?"
  },
  {
    "day": 157,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What choices are available to you now that were not available to you then?",
    "optional": "Which of those choices feels most available to you now?"
  },
  {
    "day": 158,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would your younger self need to know about the life you have now?",
    "optional": "What would help your younger self feel reassured by the life you have now?"
  },
  {
    "day": 159,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What do you wish you had been allowed to feel when you were younger?",
    "optional": ""
  },
  {
    "day": 160,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What do you wish you had been allowed to want?",
    "optional": "What would you have wanted permission to want back then?"
  },
  {
    "day": 161,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What do you wish you had been allowed to say no to?",
    "optional": "What might saying no protect that younger version of you from now?"
  },
  {
    "day": 162,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What does permission look like for you today?",
    "optional": ""
  },
  {
    "day": 163,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would it mean to let yourself have a need without defending it?",
    "optional": "What would help you let that need exist without defending it?"
  },
  {
    "day": 164,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would it mean to let yourself be imperfect without correcting yourself?",
    "optional": "What would kindness look like when you make a mistake?"
  },
  {
    "day": 165,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would it mean to let yourself take up appropriate space?",
    "optional": ""
  },
  {
    "day": 166,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would it mean to let someone misunderstand you without rushing to repair it?",
    "optional": "What helps you let another person have their own interpretation without making it yours?"
  },
  {
    "day": 167,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What pattern are you beginning to recognize sooner than you used to?",
    "optional": "What helps you recognize the pattern early enough to choose differently?"
  },
  {
    "day": 168,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens in the moment you recognize an old pattern before acting from it?",
    "optional": ""
  },
  {
    "day": 169,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What helps create enough space between activation and action?",
    "optional": "What helps you notice the pause before the old response takes over?"
  },
  {
    "day": 170,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which protective response would you like to thank and then choose differently?",
    "optional": "What did you learn from giving yourself another option?"
  },
  {
    "day": 171,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What new response would feel more aligned with who you are now?",
    "optional": ""
  },
  {
    "day": 172,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What small experiment could let you practice that new response safely?",
    "optional": "What would make this new response feel safe enough to practice?"
  },
  {
    "day": 173,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What did you learn from trying something different?",
    "optional": "What did trying something different teach you about what is possible now?"
  },
  {
    "day": 174,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "Which old rule still serves you, and which one feels outdated?",
    "optional": ""
  },
  {
    "day": 175,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What are you ready to stop carrying as a requirement for being worthy?",
    "optional": "What would feel lighter if you no longer treated worthiness as something to earn?"
  },
  {
    "day": 176,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What part of yourself have you been asking to change when it may actually need understanding?",
    "optional": "What does this part need from you before it can soften its grip?"
  },
  {
    "day": 177,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would self-compassion look like toward a pattern you are not ready to change yet?",
    "optional": ""
  },
  {
    "day": 178,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What can you make room for now that you could not tolerate noticing earlier this year?",
    "optional": "What can you notice now that you once had to avoid?"
  },
  {
    "day": 179,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What happens when you let yourself change your mind without treating the change as failure?",
    "optional": "What did changing your mind teach you about flexibility?"
  },
  {
    "day": 180,
    "phase": "MAKING ROOM",
    "phaseDescription": "Patterns, protection, and permission",
    "prompt": "What would it look like to make a choice and stay curious about the outcome rather than judging it immediately?",
    "optional": "What could you learn from the outcome without using it to judge the choice?"
  },
  {
    "day": 181,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would self-respect look like in one ordinary interaction today?",
    "optional": "What would honoring yourself look like without needing the interaction to go perfectly?"
  },
  {
    "day": 182,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is one small choice you can make that reflects what matters to you?",
    "optional": "What would choosing from what matters to you feel like in your body?"
  },
  {
    "day": 183,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where in your life do you already know what you want, even if you have not acted on it?",
    "optional": ""
  },
  {
    "day": 184,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What makes it difficult to trust your own preferences?",
    "optional": "What helps you trust a yes when it is genuinely yours?"
  },
  {
    "day": 185,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens in your body when you imagine choosing for yourself?",
    "optional": "What would help you honor what you are noticing here?"
  },
  {
    "day": 186,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens in your body when you imagine overriding yourself?",
    "optional": "What would make a no feel clear enough to honor?"
  },
  {
    "day": 187,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does a genuine yes feel like for you?",
    "optional": "What helps a yes feel genuine rather than automatic?"
  },
  {
    "day": 188,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does a genuine no feel like for you?",
    "optional": "What makes this boundary feel necessary now?"
  },
  {
    "day": 189,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does an uncertain “not yet” feel like?",
    "optional": ""
  },
  {
    "day": 190,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you saying yes when you mean maybe or no?",
    "optional": "What happens inside you when you imagine someone being unhappy with your boundary?"
  },
  {
    "day": 191,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you saying no because you are afraid rather than because you do not want something?",
    "optional": "What would make a genuine no easier to trust?"
  },
  {
    "day": 192,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "How can you tell the difference between a boundary and a wall?",
    "optional": "What would enough clarity look like if certainty never arrived?"
  },
  {
    "day": 193,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What boundary would create more steadiness in your life right now?",
    "optional": "What helps you tell the difference between a boundary and a wall?"
  },
  {
    "day": 194,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What boundary have you been afraid to communicate?",
    "optional": "What helps you stay grounded after making a difficult choice?"
  },
  {
    "day": 195,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would it sound like to state that boundary simply, without over-explaining?",
    "optional": ""
  },
  {
    "day": 196,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens inside you when you imagine someone being unhappy with your boundary?",
    "optional": "What do you notice when you give yourself permission to keep a decision for a while?"
  },
  {
    "day": 197,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Can you allow another person's disappointment without making it proof that you did something wrong?",
    "optional": "What helps you trust a no when you hear it?"
  },
  {
    "day": 198,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is yours to communicate, and what is theirs to decide?",
    "optional": "What becomes lighter when you stop taking responsibility for what belongs to someone else?"
  },
  {
    "day": 199,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where are you waiting for permission to make a choice you already know is yours?",
    "optional": "What would make this choice feel more like yours?"
  },
  {
    "day": 200,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What decision have you been postponing because you want certainty first?",
    "optional": "What becomes easier when you treat the pause as part of the response?"
  },
  {
    "day": 201,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What if the goal were not certainty, but enough clarity for the next step?",
    "optional": ""
  },
  {
    "day": 202,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is one choice you can make without knowing how everything will turn out?",
    "optional": "What do you notice when you let a mistake become information instead of a verdict?"
  },
  {
    "day": 203,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What helps you remain grounded after making a difficult choice?",
    "optional": ""
  },
  {
    "day": 204,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you do when you second-guess yourself?",
    "optional": "What helps you stay with a decision while you give yourself time to think?"
  },
  {
    "day": 205,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would it look like to question a decision without immediately reversing it?",
    "optional": ""
  },
  {
    "day": 206,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What evidence helps you trust yourself?",
    "optional": ""
  },
  {
    "day": 207,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What evidence have you been ignoring because it conflicts with what you hoped would happen?",
    "optional": "What evidence deserves your attention even if it is not what you hoped for?"
  },
  {
    "day": 208,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does self-trust require from you after you make a mistake?",
    "optional": "What would repair look like if the goal were learning rather than punishment?"
  },
  {
    "day": 209,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "How would you speak to yourself if a mistake did not threaten your sense of worth?",
    "optional": "What can this mistake teach you without becoming a judgment about you?"
  },
  {
    "day": 210,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens when you let yourself learn instead of judge?",
    "optional": ""
  },
  {
    "day": 211,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is one area where you have become more capable of choosing for yourself?",
    "optional": "What part of choosing for yourself feels strongest now?"
  },
  {
    "day": 212,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is one area where you still give your authority away?",
    "optional": "What would it feel like to keep your own authority in this area?"
  },
  {
    "day": 213,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What are you afraid might change if you became more honest about what you want?",
    "optional": ""
  },
  {
    "day": 214,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What are you afraid might stay the same if you do not?",
    "optional": "What would staying honest with yourself make possible, even if the situation stayed difficult?"
  },
  {
    "day": 215,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What do you want your choices to communicate about what you value?",
    "optional": "Which value would you most want this choice to express?"
  },
  {
    "day": 216,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Which values are easiest for you to live by?",
    "optional": ""
  },
  {
    "day": 217,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Which values are hardest to honor when you are under pressure?",
    "optional": "What support would help you honor this value when pressure rises?"
  },
  {
    "day": 218,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does integrity feel like in your body?",
    "optional": "What does alignment between your values and actions feel like in your body?"
  },
  {
    "day": 219,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does it feel like when your actions and values are out of alignment?",
    "optional": ""
  },
  {
    "day": 220,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is one small repair you could make when your actions do not match your values?",
    "optional": "What would a small repair look like in practice?"
  },
  {
    "day": 221,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "Where do you need more courage, and where do you actually need more gentleness?",
    "optional": "What would gentleness make possible alongside courage?"
  },
  {
    "day": 222,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does courage look like when it is not the same thing as pushing yourself?",
    "optional": ""
  },
  {
    "day": 223,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does rest have to do with making wise choices for you?",
    "optional": "What becomes clearer when you make decisions from a rested state?"
  },
  {
    "day": 224,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens to your decision-making when you are depleted?",
    "optional": "What helps you notice when depletion is shaping the choice?"
  },
  {
    "day": 225,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What helps you distinguish urgency from importance?",
    "optional": "What would still matter if you gave yourself more time?"
  },
  {
    "day": 226,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens when you wait before responding to something emotionally charged?",
    "optional": "What changes when you give yourself time before responding?"
  },
  {
    "day": 227,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What becomes clearer when you give yourself time?",
    "optional": "What is enough clarity for the next step?"
  },
  {
    "day": 228,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you like to practice saying without apology?",
    "optional": ""
  },
  {
    "day": 229,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you like to practice asking for directly?",
    "optional": "What would asking directly sound like if you did not need to soften it first?"
  },
  {
    "day": 230,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you like to practice declining without a long explanation?",
    "optional": "What helps you say no without turning it into a defense of your character?"
  },
  {
    "day": 231,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would you like to practice receiving without minimizing it?",
    "optional": ""
  },
  {
    "day": 232,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens when you let yourself be seen as you actually are?",
    "optional": "What helps you stay visible without performing?"
  },
  {
    "day": 233,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What part of being fully yourself still feels risky?",
    "optional": "What would make being fully yourself feel safer?"
  },
  {
    "day": 234,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would make that risk feel more manageable?",
    "optional": ""
  },
  {
    "day": 235,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would trusting yourself one step more look like this week?",
    "optional": "What is one small way you could practice trusting yourself this week?"
  },
  {
    "day": 236,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What small promise to yourself could you realistically keep?",
    "optional": "What would help you keep this promise to yourself realistically?"
  },
  {
    "day": 237,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens to self-trust when you keep a promise to yourself?",
    "optional": ""
  },
  {
    "day": 238,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What happens when you do not keep one?",
    "optional": "What would it look like to respond to the broken promise with curiosity?"
  },
  {
    "day": 239,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "How can you respond to yourself after a broken promise without turning it into a character judgment?",
    "optional": "What would repair look like here rather than punishment?"
  },
  {
    "day": 240,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does it mean to repair trust with yourself?",
    "optional": ""
  },
  {
    "day": 241,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice would you make if you did not need anyone to approve of it?",
    "optional": "What would you choose if approval were not part of the equation?"
  },
  {
    "day": 242,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice would you make if you did not need to avoid all discomfort?",
    "optional": "What discomfort are you willing to tolerate in order to stay aligned with yourself?"
  },
  {
    "day": 243,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What choice would honor both your needs and the reality of the situation?",
    "optional": ""
  },
  {
    "day": 244,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would help you stay grounded before responding?",
    "optional": "What do you want to remember in the moment before you respond?"
  },
  {
    "day": 245,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What helps you stay connected to yourself during disagreement?",
    "optional": "What helps you stay connected to yourself when disagreement activates you?"
  },
  {
    "day": 246,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "How can you remain open without abandoning your own position?",
    "optional": "What helps you stay open without giving up your own position?"
  },
  {
    "day": 247,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "How can you remain firm without needing the other person to agree?",
    "optional": "What would firmness look like if you did not need to win the other person over?"
  },
  {
    "day": 248,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What have you learned about the difference between connection and self-abandonment?",
    "optional": "What helps you stay connected to yourself while remaining connected to someone else?"
  },
  {
    "day": 249,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What have you learned about the difference between independence and isolation?",
    "optional": "What does healthy connection look like when you remain your own person?"
  },
  {
    "day": 250,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What kind of relationship with yourself makes healthy relationships with others more possible?",
    "optional": "What becomes possible in other relationships when you are more connected to yourself?"
  },
  {
    "day": 251,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your yes feel like in your body now compared with earlier in the year?",
    "optional": "What feels different about your yes now?"
  },
  {
    "day": 252,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What does your no feel like now?",
    "optional": ""
  },
  {
    "day": 253,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What are you choosing more deliberately than you once did?",
    "optional": "What has become easier to choose deliberately?"
  },
  {
    "day": 254,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What is one decision you can make today from self-trust rather than fear?",
    "optional": "What helps you tell self-trust from simply getting the outcome you wanted?"
  },
  {
    "day": 255,
    "phase": "TURNING TOWARD",
    "phaseDescription": "Self-trust, boundaries, and authentic choice",
    "prompt": "What would it mean to honor a choice you made even if it did not produce the outcome you hoped for?",
    "optional": "What would help you honor the choice even while making room for disappointment?"
  },
  {
    "day": 256,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does play look like for you at this stage of life?",
    "optional": "What helps you give yourself permission to play without needing a reason?"
  },
  {
    "day": 257,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What have you missed doing simply because you enjoyed it?",
    "optional": "What would make room for more enjoyment without turning it into a task?"
  },
  {
    "day": 258,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What makes you curious lately?",
    "optional": ""
  },
  {
    "day": 259,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What activity makes time feel a little different for you?",
    "optional": "What helps you protect time for curiosity?"
  },
  {
    "day": 260,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself becomes more visible when you are having fun?",
    "optional": "What would it be like to make a little more room for that part of you?"
  },
  {
    "day": 261,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What makes you feel most alive in an ordinary week?",
    "optional": ""
  },
  {
    "day": 262,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kinds of places help you feel like yourself?",
    "optional": "What is it about those places that lets your shoulders drop or your attention open?"
  },
  {
    "day": 263,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kinds of people help you feel more fully yourself?",
    "optional": "What qualities in those people help you feel less like you have to perform?"
  },
  {
    "day": 264,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kinds of interactions leave you feeling smaller or less connected to yourself?",
    "optional": ""
  },
  {
    "day": 265,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What relationship qualities help you feel more at ease in your body?",
    "optional": "What relationship qualities help you feel both connected and still yourself?"
  },
  {
    "day": 266,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does being known feel like to you?",
    "optional": "What does being known without performing feel like in your body?"
  },
  {
    "day": 267,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does being accepted feel like when you are not performing?",
    "optional": ""
  },
  {
    "day": 268,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself do you tend to hide in relationships?",
    "optional": "What would make it feel more possible to let that hidden part be seen?"
  },
  {
    "day": 269,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would become possible if you showed a little more of that part?",
    "optional": "What small way could you let that part of yourself show up?"
  },
  {
    "day": 270,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you genuinely enjoy that you have been treating as unimportant?",
    "optional": ""
  },
  {
    "day": 271,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What desire keeps returning even after you set it aside?",
    "optional": "What would it be like to let that desire have a place in your life without turning it into a project?"
  },
  {
    "day": 272,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What are you curious enough about to explore without needing a goal?",
    "optional": "What would you explore simply because you are curious?"
  },
  {
    "day": 273,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would you try if you were allowed to be a beginner?",
    "optional": ""
  },
  {
    "day": 274,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would you do if you did not have to be good at it?",
    "optional": "What becomes possible when being good at something is not the point?"
  },
  {
    "day": 275,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of beauty catches your attention?",
    "optional": "What about that beauty draws your attention?"
  },
  {
    "day": 276,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What sensory experiences make you feel most present and alive?",
    "optional": ""
  },
  {
    "day": 277,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What is something your body enjoys that your mind sometimes overlooks?",
    "optional": "What does your body seem to enjoy before your mind evaluates it?"
  },
  {
    "day": 278,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does spaciousness mean to you?",
    "optional": "What would more spaciousness give you room to experience?"
  },
  {
    "day": 279,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "Where could you create a little more spaciousness in your life?",
    "optional": ""
  },
  {
    "day": 280,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of your life feels like it belongs to you rather than to expectation?",
    "optional": "What makes that part of your life feel genuinely yours?"
  },
  {
    "day": 281,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part still feels organized around someone else's expectations?",
    "optional": "What expectation would you like to loosen so that more of your own life can emerge?"
  },
  {
    "day": 282,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What values feel increasingly important to you now?",
    "optional": ""
  },
  {
    "day": 283,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "Which values have become clearer through everything you have experienced this year?",
    "optional": "Which value feels most alive in you right now?"
  },
  {
    "day": 284,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of life feels meaningful to you beyond achievement?",
    "optional": "What part of a meaningful life cannot be measured by achievement?"
  },
  {
    "day": 285,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does enough freedom look like for you?",
    "optional": ""
  },
  {
    "day": 286,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does enough connection look like?",
    "optional": "What tells you that a relationship has enough room for you to stay yourself?"
  },
  {
    "day": 287,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does enough solitude look like?",
    "optional": "What does nourishing solitude give you?"
  },
  {
    "day": 288,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does enough challenge look like?",
    "optional": ""
  },
  {
    "day": 289,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want more of in your everyday life?",
    "optional": "Which of the things you want more of feels most nourishing?"
  },
  {
    "day": 290,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want less of?",
    "optional": "What would you gladly have less of if you did not need to justify it?"
  },
  {
    "day": 291,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want to protect because it helps you feel like yourself?",
    "optional": ""
  },
  {
    "day": 292,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want to make more room for because it brings you alive?",
    "optional": "What would making room for this look like in a normal week?"
  },
  {
    "day": 293,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What have you learned about what drains you?",
    "optional": "What is one early sign that something is draining you?"
  },
  {
    "day": 294,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What have you learned about what restores you?",
    "optional": ""
  },
  {
    "day": 295,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of environment helps you think clearly and feel grounded?",
    "optional": "What quality of an environment helps you feel most grounded?"
  },
  {
    "day": 296,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of environment invites more of your natural personality to emerge?",
    "optional": "What conditions help your natural personality come forward?"
  },
  {
    "day": 297,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself have you missed?",
    "optional": ""
  },
  {
    "day": 298,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What part of yourself have you recently met again?",
    "optional": "What makes reconnecting with that part of yourself feel meaningful?"
  },
  {
    "day": 299,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What old interest or quality would you like to welcome back?",
    "optional": "What would welcoming that interest back look like without making it a project?"
  },
  {
    "day": 300,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What have you discovered you like that you did not expect?",
    "optional": ""
  },
  {
    "day": 301,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What makes you laugh in a way that feels unguarded?",
    "optional": "What helps you feel unguarded enough to laugh that way?"
  },
  {
    "day": 302,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "When do you feel most playful?",
    "optional": "What gets in the way of letting yourself be playful?"
  },
  {
    "day": 303,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "When do you feel most creative?",
    "optional": ""
  },
  {
    "day": 304,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "When do you feel most connected to your own voice?",
    "optional": "What helps you hear your own voice when other people’s expectations get loud?"
  },
  {
    "day": 305,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does your own voice sound like when you are not trying to please anyone?",
    "optional": "What helps you hear your own voice when you are not trying to please anyone?"
  },
  {
    "day": 306,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What do you want your days to contain that cannot be measured by productivity?",
    "optional": ""
  },
  {
    "day": 307,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would a satisfying ordinary day look like?",
    "optional": "Which part of that ordinary day feels most important to you?"
  },
  {
    "day": 308,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would you like to experience more often in your relationships?",
    "optional": "What kind of connection would you like to experience more often?"
  },
  {
    "day": 309,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of reciprocity feels nourishing to you?",
    "optional": ""
  },
  {
    "day": 310,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does mutuality mean in a relationship?",
    "optional": "What tells you that a relationship has room for both people?"
  },
  {
    "day": 311,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What relationships allow you to both give and receive?",
    "optional": "What makes giving and receiving feel balanced in that relationship?"
  },
  {
    "day": 312,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "Where are you learning that receiving can be as important as giving?",
    "optional": ""
  },
  {
    "day": 313,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What happens when you let someone care for you without immediately returning the favor?",
    "optional": "What makes receiving care easier or harder for you?"
  },
  {
    "day": 314,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does healthy closeness feel like in your body?",
    "optional": "What helps closeness feel safe, mutual, and still like yourself?"
  },
  {
    "day": 315,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What does healthy distance feel like?",
    "optional": ""
  },
  {
    "day": 316,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What have you learned about the difference between loneliness and solitude?",
    "optional": "What does solitude give you that loneliness does not?"
  },
  {
    "day": 317,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What kind of connection helps you remain connected to yourself?",
    "optional": "What does that kind of connection give you room to be?"
  },
  {
    "day": 318,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What are you beginning to want simply because it is yours to want?",
    "optional": "What makes that desire feel like yours rather than something you should want?"
  },
  {
    "day": 319,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What would you like your life to feel like, not just look like?",
    "optional": "What quality would you most like to feel more often in your life?"
  },
  {
    "day": 320,
    "phase": "RECONNECTING",
    "phaseDescription": "Desire, values, relationships, and aliveness",
    "prompt": "What is one small way you can move toward that feeling this week?",
    "optional": "What is one small way to move toward that feeling without turning it into another goal?"
  },
  {
    "day": 321,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about the conditions that help you feel grounded?",
    "optional": "Which conditions matter most to you when you want to feel grounded?"
  },
  {
    "day": 322,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "Which signals from your body do you trust more now?",
    "optional": "Which body signals have become easier to trust because of what you have experienced?"
  },
  {
    "day": 323,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What feelings can you allow yourself to experience more fully than you once could?",
    "optional": "What helps you allow a difficult feeling now that you might once have pushed away?"
  },
  {
    "day": 324,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you understand about your needs that you did not understand a year ago?",
    "optional": ""
  },
  {
    "day": 325,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "Which old pattern can you recognize sooner now?",
    "optional": "What helps you recognize this pattern before it has much momentum?"
  },
  {
    "day": 326,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What protective response do you understand with more compassion?",
    "optional": "What changed when you began understanding the protection instead of fighting it?"
  },
  {
    "day": 327,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What old rule no longer deserves automatic authority in your life?",
    "optional": ""
  },
  {
    "day": 328,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What new belief about yourself feels more believable because you have lived it?",
    "optional": "What experience from this year gives you reason to trust that new belief?"
  },
  {
    "day": 329,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about the difference between safety and familiarity?",
    "optional": "What would you want to remember when something familiar feels safer simply because it is familiar?"
  },
  {
    "day": 330,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about the difference between discomfort and danger?",
    "optional": "What helps you remember that discomfort does not automatically mean danger?"
  },
  {
    "day": 331,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about the difference between guilt and responsibility?",
    "optional": "What has changed in the way you respond to guilt now?"
  },
  {
    "day": 332,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about staying connected to yourself while remaining open to other people?",
    "optional": "What part of staying connected to yourself while staying open to others feels most important to carry forward?"
  },
  {
    "day": 333,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about the difference between rest and avoidance?",
    "optional": "What helps you tell rest from avoidance in your own life?"
  },
  {
    "day": 334,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned about telling the difference between intuition, fear, and the need for more information?",
    "optional": "What helps you slow down when a strong inner signal arrives?"
  },
  {
    "day": 335,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What choices feel more authentically yours now?",
    "optional": "What choice feels more authentically yours now, even if it is small?"
  },
  {
    "day": 336,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What boundary feels more natural to you now?",
    "optional": ""
  },
  {
    "day": 337,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does self-trust mean to you after practicing it?",
    "optional": "What has practicing self-trust taught you about yourself?"
  },
  {
    "day": 338,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "How do you want to respond when you get activated again?",
    "optional": "What helps you come back without judging yourself for being activated?"
  },
  {
    "day": 339,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would you like to remember when an old pattern returns?",
    "optional": ""
  },
  {
    "day": 340,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What helps you create a pause before reacting?",
    "optional": "What helps you create enough space to choose your response?"
  },
  {
    "day": 341,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What helps you come back to yourself after a difficult interaction?",
    "optional": "What is the earliest sign that tells you it is time to come back to yourself?"
  },
  {
    "day": 342,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you want to practice rather than merely understand?",
    "optional": ""
  },
  {
    "day": 343,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What parts of yourself do you want to keep listening to?",
    "optional": "Which part of yourself has become easier to hear this year?"
  },
  {
    "day": 344,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What parts of yourself do you want to stop silencing?",
    "optional": "What would it look like to keep listening to the parts you once silenced?"
  },
  {
    "day": 345,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you no longer willing to abandon in yourself?",
    "optional": ""
  },
  {
    "day": 346,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you willing to let remain unfinished?",
    "optional": "What are you willing to leave unfinished without making it mean something about you?"
  },
  {
    "day": 347,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you willing to let someone else misunderstand?",
    "optional": "What helps you tolerate being misunderstood without abandoning yourself?"
  },
  {
    "day": 348,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you willing to stop proving?",
    "optional": ""
  },
  {
    "day": 349,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you willing to stop earning?",
    "optional": "What would become lighter if you stopped proving your worth?"
  },
  {
    "day": 350,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you want to receive more freely?",
    "optional": "What makes receiving feel easier when you do not have to earn it?"
  },
  {
    "day": 351,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What do you want to give more freely?",
    "optional": ""
  },
  {
    "day": 352,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What kind of life would feel like a continuation of yourself rather than a performance of yourself?",
    "optional": "What would make that kind of life feel lived rather than performed?"
  },
  {
    "day": 353,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What values do you want your future choices to reflect?",
    "optional": "Which value do you most want your future choices to reflect?"
  },
  {
    "day": 354,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What relationships do you want to nurture from a more grounded version of yourself?",
    "optional": "What would nurturing those relationships look like from a grounded place?"
  },
  {
    "day": 355,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does “coming back to yourself” mean to you now?",
    "optional": "What does coming back to yourself look like in an ordinary day now?"
  },
  {
    "day": 356,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned that you want to carry into the next year?",
    "optional": "What is one practice or understanding you most want to carry forward?"
  },
  {
    "day": 357,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What have you learned that you do not need to carry anymore?",
    "optional": "What feels lighter when you realize you do not need to carry it anymore?"
  },
  {
    "day": 358,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What is one practice that reliably helps you reconnect with yourself?",
    "optional": "What helps you return to this practice when life gets busy?"
  },
  {
    "day": 359,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What is one early warning sign that tells you you are becoming disconnected from yourself?",
    "optional": "What is the earliest point at which you could respond differently?"
  },
  {
    "day": 360,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What is one thing you can do when you notice that sign?",
    "optional": ""
  },
  {
    "day": 361,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would you like your future self to remember about this year?",
    "optional": "What would you want your future self to remember on a difficult day?"
  },
  {
    "day": 362,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would you tell yourself on a difficult day when you forget how far you have come?",
    "optional": "What would you say to yourself that is both honest and kind?"
  },
  {
    "day": 363,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What does enoughness mean when you remove performance from the equation?",
    "optional": "What remains true about your worth when nothing needs to be proved?"
  },
  {
    "day": 364,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What would you like the next chapter to feel like, rather than simply accomplish?",
    "optional": "What small choice could move you toward the feeling you want more of?"
  },
  {
    "day": 365,
    "phase": "BACK TO YOURSELF",
    "phaseDescription": "Integration, choice, and continuing",
    "prompt": "What are you choosing to trust in yourself as you continue?",
    "optional": "What would help you remember this trust when life gets noisy again?"
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
  {id:"want",section:"Bring Me Back to Myself",sectionIcon:"",sectionDesc:"I've lost touch with myself in this moment. Help me reconnect with me.",title:"What Do I Want?",desc:"Notice your own preferences before they get crowded out by expectations or explanations."}
];

const app = document.getElementById("app");
const toast = document.getElementById("toast");

function saveEntries(){ localStorage.setItem(KEY,JSON.stringify(entries)); }
function showToast(msg,duration=1800){ toast.textContent=msg;toast.classList.add("show");clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove("show"),duration); }
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
  if(currentView!=='tool' && breathTimer){clearInterval(breathTimer);breathTimer=null;}
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
      <div class="home-logo-wrap"><img src="brand-logo.png" alt="" class="home-logo"></div>
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
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">365 undated days</div><h2>Journal</h2><p class="small">Choose any day. Your writing is saved on this device. Move forward, repeat an earlier day, or skip around—there is no required pace.</p></section><input class="search" id="search" placeholder="Search prompts or your entries…" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" oninput="filterDays(this.value)"><div id="phaseList"></div>`;
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
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">Small practices for real moments</div><h2>Tools</h2><p class="small">You don't have to journal every time. Sometimes a few minutes of noticing, breathing, or sorting is enough. Use what helps; if a practice doesn't make you feel better, stop or choose another tool.</p></section>${sections.map(section=>{const first=TOOLS.find(t=>t.section===section);return `<section class="tool-section"><div class="tool-section-title"><h3>${section}</h3><p>${first.sectionDesc}</p></div><div class="tool-grid">${TOOLS.filter(t=>t.section===section).map(t=>`<button class="tool-card" onclick="openTool('${t.id}')"><span class="tool-card-title">${t.title}</span><span class="tool-card-desc">${t.desc}</span><span class="tool-arrow">${icon("arrow")}</span></button>`).join("")}</div></section>`}).join("")}`;
}
function openTool(id){currentTool=id;currentView='tool';render();}
function renderTool(id){
  const t=TOOLS.find(x=>x.id===id);if(!t)return renderTools();
  const bodies={
    "54321":`<p class="exercise-intro">Look around slowly and notice what is already here. You do not need to write anything down.</p><div class="practice-sequence circle-sequence"><div><strong>5</strong><span>Name five things you can see.</span></div><div><strong>4</strong><span>Notice four things you can feel—contact, texture, temperature, or pressure.</span></div><div><strong>3</strong><span>Notice three things you can hear.</span></div><div><strong>2</strong><span>Notice two things you can smell, or simply notice the air.</span></div><div><strong>1</strong><span>Notice one thing you can taste.</span></div></div><button class="btn" onclick="finishTool('You are here. You noticed what is around you.')">Done</button>`,
    feet:`<p class="exercise-intro">Let your attention come down toward your feet and the surface beneath you.</p><div class="instruction-list"><p>Feel the surface beneath both feet.</p><p>Notice the weight of your body settling downward.</p><p>Press your feet gently into the floor for three breaths.</p><p>Look around and notice where you are.</p></div><button class="btn" onclick="finishTool('You gave your body a moment of contact and orientation.')">Done</button>`,
    feeling:`<h3>Which feelings are present right now?</h3><p class="tool-subcopy">Tap any that fit. There may be more than one, and you can change your mind.</p><div class="chip-grid feeling-chips">${['sad','anxious','angry','scared','overwhelmed','lonely','numb','guilty','shame','frustrated','disappointed','hopeful','calm','content','grateful','confused','tired','resentful','relieved','tender','uncertain','other'].map(x=>`<button class="chip" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div><h3 class="tool-subheading">How strong does it feel?</h3><p class="tool-subcopy">Tap one that feels closest right now.</p><div class="chip-grid intensity-chips">${['mild','moderate','strong','overwhelming'].map(x=>`<button class="chip" onclick="selectChoice(this)">${x}</button>`).join('')}</div><p class="small center tool-note">You do not have to explain it. Naming it is enough.</p><button class="btn" onclick="finishTool('You noticed what is present without needing to fix it.')">Done</button>`,
    body:`<h3>Where do you notice something in your body?</h3><p class="tool-subcopy">Tap any areas that feel activated, tense, uncomfortable, or different right now.</p><div class="chip-grid body-area-chips">${['chest','throat','jaw','shoulders','belly','hands','head','back','legs','everywhere','nowhere'].map(x=>`<button class="chip" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div><h3 class="tool-subheading">What sensations do you notice?</h3><p class="tool-subcopy">Tap any that fit. There may be more than one.</p><div class="chip-grid sensation-chips">${['tight','heavy','restless','tingling','warm','cold','numb','ache','pressure','fluttery','sore','other'].map(x=>`<button class="chip" onclick="this.classList.toggle('selected')">${x}</button>`).join('')}</div><button class="btn" onclick="finishTool('You listened without demanding an answer.')">Done</button>`,
    box:`<div class="breath-box"><div id="breathPhase">Ready</div><div class="breath-count" id="breathCount">4</div><p id="breathHint">Inhale for 4 · hold 4 · exhale 4 · hold 4</p></div><button class="btn" id="breathBtn" onclick="startBoxBreathing()">Start</button><p class="small center" id="breathRounds">No need to force your breath. If the holds feel uncomfortable, let them go and breathe normally.</p>`,
    orient:`<p class="exercise-intro">Let your eyes move slowly. You are not searching for anything special—just allowing your brain to take in the room.</p><div class="instruction-list"><p>Find one color that catches your attention.</p><p>Notice the nearest doorway, window, or exit.</p><p>Find one object that is completely still.</p><p>Look farther away, then closer again.</p><p>Notice one thing that helps you know where you are right now.</p></div><button class="btn" onclick="finishTool('You oriented to the present moment.')">Done</button>`,
    pause:`<div class="stepper clean-stepper"><div class="step active"><span>1</span><div><strong>Pause</strong><p>Do you need to respond right now, or can this wait?</p></div></div><div class="step"><span>2</span><div><strong>Name it</strong><p>What are you feeling? Just name it.</p></div></div><div class="step"><span>3</span><div><strong class="step-label-story">Separate event from story</strong><p>What actually happened? What meaning are you adding?</p></div></div><div class="step"><span>4</span><div><strong>Choose</strong><p>If you respond, what would be honest without defending, explaining, fixing, or pleasing?</p></div></div></div><button class="btn" onclick="finishTool('You made room between the moment and your response.')">Done</button>`,
    want:`<p class="exercise-intro">Hold the situation or decision in your mind. You do not need to explain it or decide anything yet.</p><p class="small">Now ask yourself: <strong>What do I want?</strong></p><div class="want-grid"><button onclick="chooseWant(this,'want')">I want to move toward this</button><button onclick="chooseWant(this,'dont')">I want to move away from this</button><button onclick="chooseWant(this,'unsure')">I'm not sure yet</button></div><p class="small center tool-note" id="wantHint">You don't have to explain your answer. Notice which one feels closest to what you want right now.</p><button class="btn" onclick="finishTool('You listened for your own preference without forcing a decision.')">Done</button>`
  };
  const detailClass=(id==='body'||id==='feeling')?' listening-tool-detail':'';
  app.innerHTML=`<section class="hero compact-hero tool-detail-hero${detailClass}"><div class="eyebrow">${t.section}</div><h2>${t.title}</h2><p class="small">${t.desc}</p></section><section class="card exercise-card${detailClass}">${bodies[id]||''}</section>`;
}
function chooseWant(btn,value){document.querySelectorAll('.want-grid button').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected');const hint=document.getElementById('wantHint');if(hint){hint.textContent=value==='want'?'Notice what it feels like to move toward this.':value==='dont'?'Notice what it feels like to move away from this.':'You do not have to decide before you are ready.';}}
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
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">Your space</div><h2>More</h2></section><section class="card"><h3>Privacy</h3><p class="small">Your journal entries are stored in this browser on this device. They are not sent to a server by this app.</p><p class="small">For safety, export a backup before clearing browser data or changing devices.</p></section><section class="card"><h3>Backup your journal</h3><p class="small">Export creates a JSON file containing your entries. Keep it somewhere private.</p><div class="row"><button class="btn" onclick="exportData()">Export entries</button><button class="btn secondary" onclick="document.getElementById('importFile').click()">Import backup</button></div><input id="importFile" type="file" accept=".json,application/json" style="display:none" onchange="importData(event)"></section><section class="card"><h3>Reset</h3><p class="small">This permanently removes the entries saved in this browser. Export first if you want a backup.</p><button class="btn secondary" onclick="resetEntries()">Delete all entries</button></section><section class="card"><h3>About</h3><p class="small">Back To Yourself is an undated 365-day guided journal. No streaks. No forced positivity. No healing schedule.</p><p class="small">This journal is a companion for reflection and self-connection. It is not a substitute for therapy or other care when you need more support.</p></section>`;
}
function openDay(n){currentDay=Math.min(365,Math.max(1,n));localStorage.setItem('bty-current-day',currentDay);currentView='day';render();}
function renderDay(){
  const d=day(currentDay),e=entries[currentDay]||{},savedDate=formatEntryDate(e.date),dayLabel=savedDate?`Day ${d.day} · ${savedDate}`:`Day ${d.day}`;
  app.innerHTML=`<section class="hero compact-hero"><div class="eyebrow">${escapeHtml(d.phase)} · ${escapeHtml(d.phaseDescription)}</div><div class="day-number">${escapeHtml(dayLabel)}</div></section><p class="small day-choice-note">Skip, repeat, or stop whenever you need to.</p><section class="card"><h3>Today’s invitation</h3><p class="prompt">${escapeHtml(d.prompt)}</p><label for="response">What would you like to write?</label><textarea id="response" placeholder="Write what feels useful. You don't have to make sense of it.">${escapeHtml(e.response||'')}</textarea>${d.optional?`<div class="optional-card"><h3>If you have room</h3><p class="optional">${escapeHtml(d.optional)}</p><label for="optionalResponse">Optional reflection</label><textarea id="optionalResponse" placeholder="Only if you have room…">${escapeHtml(e.optionalResponse||'')}</textarea></div>`:''}<label for="date">Date (optional)</label><input id="date" type="date" value="${escapeHtml(e.date||'')}"><div class="save-status" id="saveStatus"></div><div class="navrow"><button class="btn secondary" onclick="openDay(${currentDay-1})" ${currentDay===1?'disabled':''}>← Previous</button><button class="btn" onclick="openDay(${currentDay+1})" ${currentDay===365?'disabled':''}>Next →</button></div></section>`;
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
