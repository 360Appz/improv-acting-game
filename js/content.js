/* =============================================================
   IMPROV QUEST — All Content Data
   Source: "Improvisation & Acting for Everyday Life"
   NOTE: All text is word-for-word from the original content.
   ============================================================= */

const C = (() => {
  /* ── CORE ANSWER ─────────────────────────────────────────── */
  const coreAnswer = {
    main: `Improvisation and acting are not just "stage skills." They are life skills for uncertainty, communication, confidence, empathy, emotional control, creativity, and social presence. The best way to understand them is this:`,
    keyInsight: `Acting trains truthful expression. Improvisation trains adaptive response. Everyday life requires both.`,
    evidence: `The evidence is promising but not magical: studies and reviews suggest improv and drama training can improve communication, empathy, tolerance of uncertainty, teamwork, and socio-emotional skills, but many studies are small, context-specific, or educational rather than clinical. So the strongest claim is not "improv will transform your life overnight," but rather: regular, well-guided practice gives you repeated reps in exactly the social-emotional situations most people avoid.`
  };

  /* ── SECTION 1: LIFE IS MOSTLY UNSCRIPTED ─────────────────── */
  const section1 = {
    id: 1,
    icon: '🎭',
    color: 'red',
    title: `The Big Idea: Life is Mostly Unscripted`,
    intro: `Most people try to live as if they can prepare the perfect script:`,
    scripts: [
      `"What should I say?"`,
      `"How do I not look awkward?"`,
      `"What if they reject me?"`,
      `"What if I get asked something unexpected?"`,
      `"What if the conversation dies?"`,
      `"What if I embarrass myself?"`
    ],
    body: `But real life rarely follows a script. A boss changes direction. A date becomes awkward. A client objects. A friend gets offended. A family member says something emotional. A presentation gets interrupted. A plan collapses.`,
    keyLine: `Improvisation teaches you to respond. Acting teaches you to express.`,
    contrastBody: `That combination is powerful because many people have one without the other:`,
    table: [
      { person: "Overthinker",    strength: "Plans well",          weakness: "Freezes when things change" },
      { person: "Charmer",        strength: "Responds quickly",    weakness: "May lack depth or sincerity" },
      { person: "Intellectual",   strength: "Explains well",       weakness: "May sound emotionally flat" },
      { person: "Emotional person", strength: "Feels deeply",      weakness: "May overreact" },
      { person: "People-pleaser", strength: "Reads people",        weakness: "Loses their own voice" },
      { person: "Performer",      strength: "Expresses well",      weakness: "May become fake or attention-seeking" }
    ],
    goal: `The goal is not to become a "theatre person." The goal is to become more alive, responsive, grounded, and socially capable.`
  };

  /* ── SECTION 2: CORE SKILLS ───────────────────────────────── */
  const skills = [
    {
      id: "presence",
      num: "2.1",
      icon: "🌊",
      color: "blue",
      title: "Presence",
      body: `Presence means you are actually here, not stuck in your head.`,
      lifeProblems: [
        `rehearsing your next sentence while someone is talking`,
        `checking your phone while pretending to listen`,
        `panicking about how you are perceived`,
        `forcing a conversation instead of noticing where it wants to go`,
        `missing emotional cues`
      ],
      training: `Acting and improv train presence because you cannot perform well while mentally absent. You must notice tone, body language, timing, emotional shifts, silence, tension, and opportunity.`,
      uses: [
        "dating","networking","interviews","teaching","sales","leadership",
        "public speaking","conflict resolution","parenting","ministry or pastoral care",
        "counselling-style conversations","customer service"
      ],
      drill: {
        title: "The 10-Second Arrival",
        body: `Before entering a conversation, meeting, call, or date:`,
        steps: [
          "Feel your feet.",
          "Relax your jaw.",
          "Exhale slowly.",
          "Look at the person properly.",
          `Ask yourself: "What is happening here, right now?"`
        ],
        note: "This sounds simple, but it pulls you out of self-consciousness and into the room."
      }
    },
    {
      id: "listening",
      num: "2.2",
      icon: "👂",
      color: "green",
      title: "Listening",
      body: `Improv is often misunderstood as being quick or funny. Actually, good improv is mostly listening.`,
      keyPrinciple: `Listen to what is given, not what you wish had been given.`,
      lifeProblems: [
        "you answer the wrong question",
        "you defend yourself too early",
        "you miss the emotional point",
        "you interrupt",
        "you give advice when someone wants empathy",
        "you assume motives",
        "you respond to words but miss tone"
      ],
      evidence: `Medical educators have used "medical improv" to train clinicians in listening, communication, teamwork, and empathy because healthcare conversations often require in-the-moment response to unexpected patient concerns.`,
      drill: {
        title: "Last-Word Response",
        body: `In a conversation, respond using one important word or idea the other person just said.`,
        example: {
          personA: `"I just feel like nobody really notices how much I'm carrying."`,
          weak: `"Yeah, everyone is busy."`,
          better: `"Carrying a lot — what feels heaviest right now?"`
        },
        note: "This proves you heard them."
      }
    },
    {
      id: "adaptability",
      num: "2.3",
      icon: "🌀",
      color: "purple",
      title: "Adaptability",
      body: `Improvisation trains the skill of staying useful when the plan changes.`,
      lifeProblems: [
        "someone disagrees",
        "the schedule changes",
        "a joke fails",
        "a meeting turns tense",
        "someone says \"no\"",
        "they are challenged publicly",
        "they lose control of the situation"
      ],
      evidence: `Research on improv with adolescents has found associations with reduced intolerance of uncertainty and social anxiety, especially through becoming more comfortable with uncertain situations. This does not mean improv is a cure-all, but it supports the idea that improv gives people safe practice with uncertainty.`,
      drill: {
        title: "Change One Variable",
        body: `Once a day, deliberately change one small routine:`,
        steps: [
          "take a different route",
          "start a conversation with a cashier",
          "ask one extra question",
          "give a different type of compliment",
          "try a new food",
          "speak first in a meeting",
          "let someone else choose the plan"
        ],
        note: "The goal is not chaos. The goal is to teach your nervous system: change is survivable."
      }
    },
    {
      id: "emotional-expression",
      num: "2.4",
      icon: "🔥",
      color: "orange",
      title: "Emotional Expression",
      body: `Acting trains you to make inner life visible.`,
      lifeProblems: [
        `You say "I'm fine" but look resentful.`,
        `You say "I'm confident" but speak apologetically.`,
        `You want connection but act cold.`,
        `You want respect but sound aggressive.`,
        `You want to apologize but sound defensive.`,
        `You care deeply but appear indifferent.`
      ],
      keyLine: `Acting helps align inner intention and outer expression.`,
      drill: {
        title: "Same Sentence, Different Intention",
        sentence: `"I need to talk to you."`,
        body: `Say this sentence five different ways:`,
        tones: ["comfort", "confrontation", "fear", "romance", "authority"],
        note: "You will notice that the same words can create totally different meanings depending on tone, pace, posture, eye contact, and emotional intention."
      }
    },
    {
      id: "empathy",
      num: "2.5",
      icon: "🫂",
      color: "pink",
      title: "Empathy & Perspective-Taking",
      question: `Acting asks: Who is this person, what do they want, what are they afraid of, and why do they behave this way?`,
      body: `That is empathy training.`,
      evidence: `Studies on acting and drama education have reported improvements in empathy, theory of mind, and collaborative behavior, especially through role-play and perspective-taking. The evidence is not uniform across all contexts, but it is strong enough to say drama-based work can be a serious tool for socio-emotional development.`,
      drill: {
        title: "Three Motives",
        body: `When someone annoys you, list three possible motives besides "they are bad":`,
        example: `Someone replies late.`,
        motives: [
          "They are overwhelmed.",
          "They are avoiding conflict.",
          "They do not understand the urgency."
        ],
        note: "This does not excuse bad behavior. It prevents lazy interpretation."
      }
    },
    {
      id: "confidence",
      num: "2.6",
      icon: "⚡",
      color: "yellow",
      title: "Confidence",
      body: `Improvisation builds confidence differently from motivational advice.`,
      normalAdvice: `"Believe in yourself."`,
      improvAdvice: `"Practice surviving awkwardness."`,
      why: `That is more useful.`,
      experiences: [
        "I can speak without perfect preparation.",
        "I can recover from mistakes.",
        "I can be seen.",
        "I can fail and still belong.",
        "I can make offers.",
        "I can respond to rejection.",
        "I can be spontaneous without losing myself."
      ],
      drill: {
        title: "Low-Stakes Boldness",
        body: `Do one low-stakes socially brave act daily:`,
        steps: [
          "ask someone's name",
          "compliment a stranger respectfully",
          "ask a question in a group",
          "suggest a plan",
          `say "I disagree slightly"`,
          `say "I don't know"`,
          "make a harmless joke",
          "ask for clarification"
        ],
        note: "The aim is not to impress. The aim is to reduce fear of being visible."
      }
    }
  ];

  /* ── SECTION 3: YES AND ────────────────────────────────────── */
  const yesAnd = {
    id: 3,
    icon: "✅",
    color: "green",
    title: `The "Yes, And" Principle — Properly Understood`,
    misconceptions: `Most people misunderstand "Yes, and."`,
    itDoesNotMean: [
      "agree with everything",
      "be passive",
      "become a people-pleaser",
      "accept disrespect",
      "avoid boundaries",
      "say yes to bad ideas"
    ],
    itMeans: `Accept the reality of what has been offered, then add constructively.`,
    note: `In life, "No, but" often kills momentum.`,
    examples: [
      {
        label: "Friend",
        blocking: `"No, that place is probably overrated."`,
        yesAnd: `"Could be fun. Let's check if it's quiet enough to talk."`,
        context: `Friend: "Maybe we should try that new cafe."`
      },
      {
        label: "Work",
        blocking: `"That won't work."`,
        yesAnd: `"The angle is interesting. Let's test it against what the client actually wants."`,
        context: `Colleague: "Maybe we should pitch this idea differently."`
      },
      {
        label: "Conflict",
        blocking: `"That's not true."`,
        yesAnd: `"I hear that you feel unheard. I also want to explain what was happening for me."`,
        context: `Partner: "I feel like you don't listen."`
      }
    ],
    advanced: {
      title: "Advanced Version: Yes, And, But, Therefore",
      intro: `A mature adult does not only say yes. Use this structure:`,
      steps: [
        { key: "Yes", desc: "acknowledge reality." },
        { key: "And", desc: "add useful information." },
        { key: "But", desc: "introduce boundary or complication." },
        { key: "Therefore", desc: "propose next step." }
      ],
      example: `"Yes, I understand this is urgent, and I want to help. But I cannot finish it by tonight without dropping another commitment. Therefore, I can either send a rough version tonight or a polished version tomorrow."`,
      note: "That is improv plus adulthood."
    }
  };

  /* ── SECTION 4: ACTING TOOLS ──────────────────────────────── */
  const actingTools = [
    {
      id: "objective",
      num: "4.1",
      icon: "🎯",
      color: "blue",
      title: "Objective",
      body: `In acting, every character wants something. In life, every person in a conversation usually wants something too:`,
      wants: [
        "respect","safety","attention","control","affection","clarity",
        "reassurance","status","freedom","forgiveness","validation",
        "information","cooperation"
      ],
      question: `Before responding, ask: "What does this person want from me right now?"`,
      table: [
        { situation: "Friend complains",    surface: `"Nobody cares."`,            objective: "Wants comfort" },
        { situation: "Boss criticizes",     surface: `"This is not good enough."`, objective: "Wants standards met" },
        { situation: "Partner gets quiet",  surface: `"Nothing."`,                 objective: "Wants safety before honesty" },
        { situation: "Client pushes back",  surface: `"Too expensive."`,           objective: "Wants justification or reassurance" },
        { situation: "Parent nags",         surface: `"You should do this."`,      objective: "Wants influence or protection" },
        { situation: "Child acts out",      surface: `"I hate this!"`,             objective: "Wants attention, autonomy, or containment" }
      ],
      note: "This one skill can dramatically improve your social intelligence."
    },
    {
      id: "stakes",
      num: "4.2",
      icon: "⚖️",
      color: "red",
      title: "Stakes",
      question: `Stakes answer: "Why does this matter?"`,
      body: `People become emotional when stakes are high. In acting, a boring line becomes powerful when the actor knows what is at stake. In life, many arguments are really about hidden stakes.`,
      examples: [
        { argument: `"Why didn't you reply?"`,          surface: "text message",          real: `"Do I matter to you?"` },
        { argument: `"Why are you late?"`,              surface: "timing",                real: `"Can I trust you?"` },
        { argument: `"Why did you decide without me?"`, surface: "decision",              real: `"Am I respected?"` }
      ],
      drill: {
        title: "Find the Hidden Stake",
        body: `When a conflict happens, ask: "What feels threatened here?"`,
        options: [
          "dignity","belonging","trust","identity","time",
          "money","safety","future","fairness","autonomy"
        ],
        note: "This moves you from arguing about symptoms to addressing the root."
      }
    },
    {
      id: "subtext",
      num: "4.3",
      icon: "💬",
      color: "purple",
      title: "Subtext",
      body: `Subtext is what is meant but not said. Everyday life is full of subtext.`,
      table: [
        { words: `"It's fine."`,                   subtext: `"It is not fine, but I do not feel safe saying so."` },
        { words: `"Do whatever you want."`,        subtext: `"I feel powerless or resentful."` },
        { words: `"Interesting."`,                 subtext: `"I disagree but am being polite."` },
        { words: `"I'm busy."`,                    subtext: `"This is not a priority."` },
        { words: `"We should catch up sometime."`, subtext: `"I like the idea but may not commit."` },
        { words: `"I don't care."`,                subtext: `"I care but do not want to be vulnerable."` }
      ],
      warning: `Acting makes you more sensitive to subtext. But be careful: subtext reading is not mind-reading. Treat it as a hypothesis, not certainty.`,
      betterResponse: `"I might be reading this wrong, but it feels like something is bothering you. Is that true?"`
    },
    {
      id: "status",
      num: "4.4",
      icon: "👑",
      color: "yellow",
      title: "Status",
      body: `Status in theatre does not only mean wealth or job title. It means the invisible power dynamic in a moment.`,
      high: [
        "calm pace","taking space","fewer unnecessary words",
        "relaxed eye contact","grounded posture",
        "not rushing to fill silence","giving clear direction"
      ],
      low: [
        "over-apologizing","nervous laughter","shrinking posture",
        "rushing speech","seeking approval constantly",
        "explaining too much","avoiding eye contact"
      ],
      note: `Neither is always good or bad. Healthy social skill means you can raise or lower status intentionally.`,
      contexts: [
        { context: "In leadership",    use: "raise status to provide direction." },
        { context: "With a shy person", use: "lower status slightly to make them comfortable." },
        { context: "In conflict",      use: "maintain calm status without domination." },
        { context: "In romance",       use: "use playful status shifts." },
        { context: "In service roles", use: "show respect without becoming servile." }
      ],
      drill: {
        title: "Status Slider",
        body: `In daily interactions, notice your status from 1 to 10. Then experiment:`,
        options: [
          { dir: "Too Low → Raise", actions: ["slow down","reduce apologizing","stand grounded"] },
          { dir: "Too High → Lower", actions: ["ask more questions","soften tone","share space"] }
        ]
      }
    },
    {
      id: "given-circumstances",
      num: "4.5",
      icon: "🗺️",
      color: "green",
      title: "Given Circumstances",
      body: `Actors ask: where am I, who am I with, what just happened, what do I want, what is the relationship? Use this in real life before reacting.`,
      questions: [
        "What is the context?",
        "What just happened?",
        "What does this person believe happened?",
        "What is our relationship?",
        "What emotional state are they in?",
        "What do I want?",
        "What would make this worse?",
        "What would make this better?"
      ],
      note: "This is especially useful in conflict, leadership, negotiation, and emotionally charged conversations."
    }
  ];

  /* ── SECTION 5: IMPROV TOOLS ──────────────────────────────── */
  const improvTools = [
    {
      id: "make-partner-look-good",
      num: "5.1",
      icon: "🤝",
      color: "pink",
      title: "Make Your Partner Look Good",
      body: `In improv, scenes work better when actors support each other. In life, many people try to win interactions instead of making the interaction work.`,
      ways: [
        "do not humiliate people unnecessarily",
        "give people something to respond to",
        "ask questions that help them open up",
        "do not dominate the conversation",
        "remember details",
        "support their good ideas",
        "help them recover from mistakes"
      ],
      uses: [
        "meetings","dates","friendships","family gatherings",
        "team projects","leadership","hosting events"
      ],
      danger: "Do not use this to become a doormat. Support does not mean self-erasure."
    },
    {
      id: "offer-dont-force",
      num: "5.2",
      icon: "🎁",
      color: "blue",
      title: "Offer, Don't Force",
      body: `An "offer" in improv is anything you contribute to the scene. In life, an offer can be:`,
      offers: [
        "a question","a joke","an invitation","an idea",
        "a compliment","a vulnerability","a boundary",
        "a suggestion","a plan"
      ],
      principle: `Offer clearly. Let the other person respond. Build from there.`,
      examples: [
        {
          context: "Dating",
          weak: `"I don't know, whatever you want."`,
          force: `"We are going here. Be ready."`,
          good: `"I thought we could try this cafe Saturday afternoon. Does that sound good?"`
        },
        {
          context: "Work",
          weak: `"Maybe, I don't know, this might be stupid..."`,
          force: `"This is obviously the best idea."`,
          good: `"One possible direction is this. The advantage is X, but the risk is Y."`
        }
      ]
    },
    {
      id: "accept-reality",
      num: "5.3",
      icon: "🌊",
      color: "purple",
      title: "Accept Reality Fast",
      body: `A bad improviser denies what is happening. A bad real-life responder does the same.`,
      denials: [
        `"This cannot be happening."`,
        `"They should not feel that way."`,
        `"This meeting should have gone differently."`,
        `"I should not be nervous."`,
        `"They should already know what I mean."`
      ],
      clarification: `Acceptance does not mean approval. It means you stop wasting energy arguing with reality.`,
      better: `"This is what is happening. What is the next useful move?"`,
      note: "This is one of the most powerful life skills improv teaches."
    },
    {
      id: "mistakes-as-information",
      num: "5.4",
      icon: "💡",
      color: "yellow",
      title: "Use Mistakes as Information",
      body: `In improv, mistakes often become gifts. In life, mistakes can become data.`,
      reframe: {
        bad: `"I failed, therefore I am bad."`,
        good: `"That reaction gave me information."`
      },
      table: [
        { mistake: "Joke failed",               info: "Wrong timing, wrong audience, or unclear delivery" },
        { mistake: "Presentation lost attention", info: "Need stronger structure or story" },
        { mistake: "Conflict escalated",         info: "You may have led with defense instead of curiosity" },
        { mistake: "Date felt awkward",          info: "You may have overperformed or under-engaged" },
        { mistake: "Boundary was ignored",       info: "You may need clearer consequences" },
        { mistake: "Interview answer rambled",   info: "You need tighter storytelling" }
      ],
      note: "This mindset reduces shame and increases learning."
    }
  ];

  /* ── SECTION 6: EVERYDAY SCENARIOS ───────────────────────── */
  const scenarios = [
    {
      id: "conversations",
      num: "6.1",
      icon: "💬",
      color: "blue",
      title: "Conversations",
      problem: "You run out of things to say",
      insight: `Most people panic because they think conversation is about producing impressive content. It is not. Conversation is about attention, curiosity, and rhythm.`,
      oar: {
        title: "The OAR Method",
        steps: [
          { key: "Observe", desc: "notice something real." },
          { key: "Ask",     desc: "invite expansion." },
          { key: "Relate",  desc: "connect with your own experience." }
        ],
        example: `"You mentioned you moved recently. What made you choose that area? I've noticed moving changes your routine more than people expect."`
      },
      drill: {
        title: "Three Follow-Up Questions",
        body: `Whenever someone says something, ask three possible follow-up questions in your head.`,
        example: {
          statement: `"I just started a new job."`,
          followUps: [
            `"How has the transition been?"`,
            `"What surprised you about the role?"`,
            `"Is it energizing or stressful so far?"`
          ]
        },
        note: "This trains conversational depth."
      }
    },
    {
      id: "dating",
      num: "6.2",
      icon: "💘",
      color: "pink",
      title: "Dating",
      body: `Improvisation helps dating because dating is uncertain, emotional, playful, and unscripted.`,
      skills: [
        "playful banter","emotional presence","reading comfort levels",
        "recovering from awkwardness","asking better questions",
        "not over-controlling the interaction",
        "expressing interest without desperation",
        "handling rejection with dignity"
      ],
      badPerformance: {
        title: "Bad Dating Performance",
        signs: [
          "too polished","too agreeable","too rehearsed",
          "too status-conscious","too focused on being liked"
        ]
      },
      betterApproach: `Use acting truthfully: Do not pretend to be someone else. Express the best honest version of yourself.`,
      drill: {
        title: "Playful Callback",
        body: `Notice something earlier in the date and refer back to it later.`,
        example: {
          earlier: "They say they are serious about coffee.",
          later: `"I'm now slightly nervous about your professional coffee judgment."`
        },
        note: "Callbacks create intimacy because they show attention."
      }
    },
    {
      id: "work",
      num: "6.3",
      icon: "💼",
      color: "yellow",
      title: "Work & Meetings",
      body: `Improv helps at work because workplaces are full of ambiguity, politics, changing priorities, and unsaid concerns.`,
      meetingSkills: [
        "concise offers","active listening","status awareness",
        "summarizing","building on ideas","redirecting tension",
        "asking clarifying questions"
      ],
      phrases: [
        `"Let me build on that."`,
        `"The useful part of that idea is…"`,
        `"Can I test an assumption?"`,
        `"What problem are we actually solving?"`,
        `"I hear two priorities: speed and quality. Which one wins here?"`,
        `"Before we decide, what are we not seeing?"`
      ],
      executivePresence: {
        title: "Acting Skill: Executive Presence",
        body: `Executive presence is not pretending to be powerful. It is controlled communication under pressure.`,
        train: [
          "slower pace","fewer filler words","grounded posture",
          "clear intention","calm facial expression",
          "direct but respectful eye contact",
          "ending sentences cleanly instead of trailing off"
        ]
      }
    },
    {
      id: "public-speaking",
      num: "6.4",
      icon: "🎤",
      color: "red",
      title: "Public Speaking",
      body: `Acting helps with delivery. Improv helps with live adaptation.`,
      requires: [
        "voice","body","pacing","emotional clarity",
        "audience awareness","story","recovery from mistakes",
        "comfort with silence"
      ],
      drill: {
        title: "Same Content, Three Energies",
        body: `Take one short message and deliver it as:`,
        energies: ["inspiring","serious","conversational"],
        note: "You will learn that communication is not just words. It is energy plus structure."
      },
      qAndA: {
        title: "Q&A Improv Method",
        body: `When asked a difficult question:`,
        steps: [
          "Breathe.",
          "Acknowledge the question.",
          "Clarify if needed.",
          "Answer the core.",
          "Bridge to what matters."
        ],
        example: `"That's a fair question. The short answer is no, not under current conditions. The reason is…"`
      }
    },
    {
      id: "conflict",
      num: "6.5",
      icon: "⚡",
      color: "purple",
      title: "Conflict",
      body: `Conflict is where acting and improv become especially useful.`,
      how: [
        "Acting helps you understand motives.",
        "Improv helps you avoid blocking.",
        "Emotional regulation helps you not escalate."
      ],
      formula: {
        title: "The Conflict Formula",
        intro: "When someone confronts you:",
        steps: [
          { key: "Receive",  desc: "do not interrupt." },
          { key: "Name",     desc: "identify the concern." },
          { key: "Validate", desc: "acknowledge the emotional logic." },
          { key: "Clarify",  desc: "ask what specifically happened." },
          { key: "Own",      desc: "take responsibility where appropriate." },
          { key: "Boundary", desc: "state limits if needed." },
          { key: "Repair",   desc: "propose next action." }
        ],
        example: `"I hear that you felt dismissed when I interrupted you. I can understand why that would bother you. I did not intend to shut you down, but I can see the impact. Next time I'll let you finish before responding."`
      },
      donts: [
        "instantly defend","cross-examine","mock","exaggerate",
        `use "always" and "never"`,
        "fake calm while being passive-aggressive",
        "apologize just to end the conversation"
      ]
    },
    {
      id: "leadership",
      num: "6.6",
      icon: "🦁",
      color: "orange",
      title: "Leadership",
      body: `Leadership is partly directing the "scene" of a group.`,
      senses: [
        "the emotional temperature","who has power","who is silent",
        "who is confused","who is performing agreement",
        "where the real conflict is","when to speed up",
        "when to slow down","when the group needs clarity"
      ],
      principle: `A good leader does not control every line. A good leader creates the conditions for useful contributions.`,
      moves: [
        "summarize often","invite quieter voices",
        "name tension respectfully","make clear offers",
        "clarify stakes","distinguish idea conflict from personal conflict",
        "keep the group oriented toward the objective"
      ],
      example: `"I'm noticing we're circling. I think there are two unresolved questions: budget and timeline. Let's handle those separately."`
    },
    {
      id: "sales",
      num: "6.7",
      icon: "🤝",
      color: "green",
      title: "Sales, Persuasion & Negotiation",
      body: `Improvisation helps because persuasion is not a monologue. It is responsive.`,
      bad: [
        "talks too much","ignores objections","over-scripts",
        "pushes features instead of needs","treats resistance as stupidity"
      ],
      good: [
        "listens for the real concern","adapts language","uses stories",
        "reads emotional readiness","handles objections without defensiveness",
        "makes the other person feel respected"
      ],
      drill: {
        title: "Objection Building",
        body: `When someone objects, do not crush the objection. Build on it.`,
        examples: [
          {
            objection: `Customer: "This is expensive."`,
            weak: `"No, it's actually cheap."`,
            better: `"Yes, it is a serious investment. The question is whether the cost of not solving this is higher."`
          },
          {
            objection: `Customer: "I need to think about it."`,
            weak: `"What is there to think about?"`,
            better: `"Of course. What part needs the most thought — price, timing, trust, or fit?"`
          }
        ]
      }
    }
  ];

  /* ── SECTION 7: PSYCHOLOGICAL BENEFITS ───────────────────── */
  const psychBenefits = [
    {
      id: "uncertainty",
      num: "7.1",
      icon: "🌊",
      color: "blue",
      title: "Tolerance of Uncertainty",
      body: `Many anxious people are not afraid only of bad outcomes. They are afraid of not knowing.`,
      how: `Improv repeatedly exposes you to not knowing in a structured, playful environment. That can train flexibility. Research on adolescent improv programs found reductions in social anxiety and intolerance of uncertainty, suggesting improv may help people practice uncertainty in a low-stigma way. This is promising but should not be treated as a replacement for clinical therapy where therapy is needed.`,
      benefit: "You become less dependent on perfect certainty before acting."
    },
    {
      id: "shame",
      num: "7.2",
      icon: "💪",
      color: "red",
      title: "Shame Resilience",
      lessons: [
        "mistakes are survivable",
        "awkwardness passes",
        "people forget faster than you think",
        "failure can become connection",
        "being seen is not death"
      ],
      avoidances: [
        "dancing","dating","networking","asking questions",
        "public speaking","trying new careers","apologizing",
        "setting boundaries","creating content","expressing love"
      ],
      reason: "Not because they are incapable, but because they fear humiliation.",
      how: "Improv gives controlled exposure to small embarrassment."
    },
    {
      id: "identity",
      num: "7.3",
      icon: "🎭",
      color: "purple",
      title: "Identity Flexibility",
      body: `Acting lets you explore different parts of yourself:`,
      parts: [
        "assertive self","playful self","tender self","authoritative self",
        "grieving self","romantic self","angry self","disciplined self",
        "foolish self","wise self"
      ],
      traps: [
        `"I'm the serious one."`,`"I'm the nice one."`,`"I'm the quiet one."`,
        `"I'm the responsible one."`,`"I'm the funny one."`,
        `"I'm the successful one."`,`"I'm the spiritual one."`,`"I'm the chill one."`
      ],
      note: "Acting expands your range. The goal is not fakery. It is integration."
    }
  ];

  /* ── SECTION 8: WARNINGS ──────────────────────────────────── */
  const warnings = [
    {
      id: "performative",
      num: "8.1",
      icon: "⚠️",
      color: "red",
      title: "Becoming Performative",
      body: `The biggest danger is using acting to manage impressions instead of express truth.`,
      signs: [
        "you always monitor how you appear",
        "you perform vulnerability but avoid real vulnerability",
        "you charm instead of connect",
        "you use emotional expression to manipulate",
        "you become addicted to applause",
        "you cannot be ordinary",
        "you feel empty when not watched"
      ],
      correction: "Acting should make you more truthful, not more fake."
    },
    {
      id: "spontaneity",
      num: "8.2",
      icon: "⚠️",
      color: "yellow",
      title: "Mistaking Spontaneity for Wisdom",
      body: `Improv values quick response. But in real life, not every quick response is wise.`,
      sometimes: [
        "pause","think","pray","sleep on it",
        "consult someone","gather facts","say nothing yet"
      ],
      note: "Spontaneity is useful. Impulsiveness is dangerous."
    },
    {
      id: "overusing-yes-and",
      num: "8.3",
      icon: "⚠️",
      color: "orange",
      title: `Overusing "Yes, And"`,
      body: `Some people use "Yes, and" to avoid boundaries.`,
      bad: `"Yes, and I'll take on more work even though I'm burned out."`,
      mature: `"Yes, I understand the need, and I can help within these limits."`,
      note: "Improv should increase flexibility, not erase self-respect."
    },
    {
      id: "life-as-stage",
      num: "8.4",
      icon: "⚠️",
      color: "pink",
      title: "Turning Life Into a Stage",
      body: `Not every moment needs charisma. Sometimes people need quiet presence, not performance.`,
      mistakes: [
        "making jokes when someone needs empathy",
        "storytelling when someone needs listening",
        "being dramatic when simplicity is better",
        "trying to be interesting instead of interested"
      ],
      rule: "Use performance skill in service of the moment, not your ego."
    },
    {
      id: "unsafe-groups",
      num: "8.5",
      icon: "⚠️",
      color: "purple",
      title: "Unsafe Groups or Bad Teachers",
      body: `Improv and acting classes vary widely.`,
      badEnvironments: [
        "humiliation disguised as training",
        "pressure to disclose trauma",
        "inappropriate physical boundaries",
        "cult-like group dynamics",
        "teacher ego",
        `"anything goes" culture`,
        "emotional intensity without care"
      ],
      goodEnvironment: [
        "consent","psychological safety","clear boundaries",
        "progressive difficulty","respect for beginners",
        "no forced vulnerability","feedback without cruelty"
      ]
    }
  ];

  /* ── SECTION 9: PRACTICE SYSTEM ──────────────────────────── */
  const practiceSystem = {
    levels: [
      {
        level: 1,
        title: "Personal Foundation",
        goal: "Become more present, expressive, and comfortable being seen.",
        drills: [
          {
            title: "Voice Warm-Up — 3 minutes",
            body: "Read a paragraph aloud.",
            steps: ["slower","clearer","warmer","more authoritative","more playful"]
          },
          {
            title: "Emotion Naming — 2 minutes",
            body: `Ask: "What am I feeling right now?"`,
            steps: [
              "irritated","embarrassed","hopeful","tense","disappointed",
              "grateful","restless","insecure","curious","defensive"
            ],
            note: "Emotional precision improves emotional control."
          },
          {
            title: "One Bold Offer",
            body: "Make one small social offer daily:",
            steps: [
              "invite someone","ask a question","make a suggestion",
              "share an opinion","tell a short story","give a compliment","request help"
            ]
          }
        ]
      },
      {
        level: 2,
        title: "Social Skill",
        goal: "Become better in conversations, groups, and relationships.",
        drills: [
          {
            title: "Conversation Replay",
            body: "After an important conversation, ask:",
            steps: [
              "What did they want?","What did I want?",
              "What was the emotional tone?","Where did I block?",
              "Where did I build?","What did I miss?","What would I try next time?"
            ]
          },
          {
            title: "Curiosity Reps",
            body: "In three conversations per week, ask one deeper question.",
            example: { instead: `"How was work?"`, ask: `"What part of work has been taking the most energy lately?"` }
          },
          {
            title: "Status Experiment",
            body: "Once per week, practice raising or lowering your social status intentionally.",
            raise: ["speak slower","reduce qualifiers","hold posture","make clear requests"],
            lower: ["ask for input","admit uncertainty","use warmth","share credit"]
          }
        ]
      },
      {
        level: 3,
        title: "Communication Mastery",
        goal: "Speak with clarity, emotional range, and influence.",
        drills: [
          {
            title: "One-Minute Story",
            body: "Tell a one-minute story with this structure:",
            steps: ["Situation","Tension","Choice","Result","Meaning"],
            example: `"I used to avoid speaking up in meetings. One day I had an idea but almost kept quiet. I forced myself to say it simply. The team used part of it. I learned that confidence often comes after action, not before."`
          },
          {
            title: "Objection Practice",
            body: "Practice responding to objections:",
            objections: [
              `"That's too expensive."`,`"I disagree."`,`"I'm not ready."`,
              `"Why should I trust you?"`,`"That won't work."`,
              `"You're wrong."`,`"I need more time."`
            ],
            response: `"I hear you. The concern seems to be ____. Is that right?"`
          },
          {
            title: "Emotional Range Practice",
            sentence: `"I understand what you mean."`,
            tones: ["sincere","defensive","romantic","tired","angry","amused","authoritative","compassionate"],
            note: "This builds expressive control."
          }
        ]
      },
      {
        level: 4,
        title: "Real-World Performance",
        goal: "Apply acting and improv in high-stakes life moments.",
        contexts: [
          "interviews","speeches","dates","difficult conversations",
          "negotiations","leadership meetings","sales calls","family conflict"
        ],
        checklist: [
          "What is my objective?",
          "What does the other person likely want?",
          "What are the stakes?",
          "What emotional tone is appropriate?",
          "What is my first offer?",
          "What boundary do I need?",
          `What would "success" look like?`,
          "How do I want people to feel after interacting with me?"
        ]
      }
    ]
  };

  /* ── SECTION 10: SCENARIO PLAYBOOK ───────────────────────── */
  const scenarioPlaybook = [
    {
      id: "awkward-silence",
      num: "Scenario 1",
      icon: "🤫",
      color: "blue",
      title: "Awkward Silence",
      bad: "Panic. Fill space with nervous rambling.",
      better: "Smile, breathe, make an observation, or ask a real question.",
      scripts: [
        `"I'm thinking about what you said."`,
        `"That's a good question; give me a second."`,
        `"Actually, I'm curious — how did you get into that?"`,
        `"I like that we don't have to rush the conversation."`
      ],
      note: "Silence is not always failure. Sometimes it is depth arriving."
    },
    {
      id: "public-challenge",
      num: "Scenario 2",
      icon: "🎯",
      color: "red",
      title: "Someone Challenges You Publicly",
      bad: "Defend, attack, over-explain, or freeze.",
      better: "Stay grounded. Clarify. Respond to the core.",
      scripts: [
        `"That's a fair challenge. Let me separate two things: what I meant, and what may have come across."`,
        `"I may not have explained that clearly. The main point is…"`
      ],
      note: "This is acting skill: calm under attention."
    },
    {
      id: "social-anxiety",
      num: "Scenario 3",
      icon: "😰",
      color: "purple",
      title: "You Feel Socially Anxious",
      bad: "Try to eliminate anxiety before acting.",
      better: "Act with anxiety present.",
      selfScript: `"I do not need to feel confident to make an offer."`,
      actions: [
        "ask one question","make eye contact",
        "comment on something present","introduce yourself","breathe slower"
      ],
      note: "Confidence follows reps."
    },
    {
      id: "someone-emotional",
      num: "Scenario 4",
      icon: "😢",
      color: "pink",
      title: "Someone is Emotional",
      bad: "Fix too quickly.",
      better: "Receive first, solve later.",
      scripts: [
        `"That sounds heavy."`,
        `"I can see why that affected you."`,
        `"Do you want advice, comfort, or just someone to listen?"`,
        `"What part hurts the most?"`
      ],
      note: "This is acting empathy plus improv listening."
    },
    {
      id: "set-boundary",
      num: "Scenario 5",
      icon: "🛡️",
      color: "yellow",
      title: "You Need to Set a Boundary",
      bad: "Apologize excessively or become aggressive.",
      better: "Clear, calm, respectful.",
      scripts: [
        `"I understand this matters. I'm not able to do that."`,
        `"I can help with X, but not Y."`,
        `"I'm open to discussing it, but not if I'm being insulted."`,
        `"That does not work for me. Here is what I can offer."`
      ],
      note: "Boundaries are not anti-improv. They are strong offers."
    },
    {
      id: "charisma",
      num: "Scenario 6",
      icon: "✨",
      color: "orange",
      title: "You Want to Be More Charismatic",
      body: "Charisma is not just being loud or funny.",
      elements: [
        "presence","warmth","conviction","responsiveness",
        "emotional clarity","timing","confidence","playfulness"
      ],
      practice: [
        "Speak slightly slower.",
        "Make people feel seen.",
        "Tell shorter stories.",
        "Use names.",
        "Ask better questions.",
        "React genuinely.",
        "Do not try to impress everyone.",
        "Let silence work.",
        "Use humor lightly.",
        "Have a clear point."
      ],
      note: "Charisma without character becomes manipulation. Character without expression can become invisible. You want both."
    }
  ];

  /* ── SECTION 11: 30-DAY PLAN ──────────────────────────────── */
  const thirtyDayPlan = [
    {
      week: 1,
      title: "Presence & Awareness",
      daily: [
        "3 minutes voice reading",
        "1 conversation where you listen without interrupting",
        "1 moment of noticing body language",
        "1 emotion label"
      ],
      focus: `"What is happening right now?"`
    },
    {
      week: 2,
      title: "Offers & Adaptability",
      daily: [
        "make one small social offer",
        `use "Yes, and" once`,
        "change one small routine",
        "practice one-minute storytelling"
      ],
      focus: `"What can I add constructively?"`
    },
    {
      week: 3,
      title: "Expression & Confidence",
      daily: [
        "practice one sentence in five emotional tones",
        "speak up once where you normally stay quiet",
        "tell one short story",
        "practice slower speech"
      ],
      focus: `"Does my outside match my inside?"`
    },
    {
      week: 4,
      title: "Advanced Life Application",
      daily: [
        "identify someone's objective",
        "notice hidden stakes in a conversation",
        "practice one boundary",
        "review one interaction",
        "attempt one low-stakes brave action"
      ],
      focus: `"What is the next truthful and useful move?"`
    }
  ];

  /* ── SECTION 12: EXERCISES ────────────────────────────────── */
  const exercises = {
    solo: [
      {
        num: 1, icon: "🪞", title: "Mirror Neutrality",
        body: "Stand in front of a mirror. Relax your face. Say:",
        script: `"I am allowed to be seen."`,
        purpose: "reduce discomfort. Do not perform. Just stay.",
        goal: "Reduce discomfort with being seen."
      },
      {
        num: 2, icon: "🗣️", title: "Gibberish Speech",
        body: "Speak nonsense for one minute with confidence.",
        purpose: "reduce dependence on perfect words.",
        goal: "Reduce dependence on perfect words."
      },
      {
        num: 3, icon: "📦", title: "Object Monologue",
        body: "Pick an object and talk about it for one minute as if it matters deeply.",
        purpose: "train imagination and commitment.",
        goal: "Train imagination and commitment."
      },
      {
        num: 4, icon: "😤", title: "Emotional Scale",
        body: `Say "hello" at emotional intensity levels 1 to 10.`,
        purpose: "develop emotional modulation.",
        goal: "Develop emotional modulation."
      },
      {
        num: 5, icon: "🚶", title: "Character Walk",
        characters: ["a king","a tired nurse","a nervous intern","a child at a theme park","a spy","a teacher","a person with a secret"],
        purpose: "expand physical range and status awareness.",
        goal: "Expand physical range and status awareness."
      }
    ],
    partner: [
      {
        num: 1, icon: "📖", title: "Yes, And Story",
        instructions: [
          "Person A starts a story with one sentence.",
          `Person B continues with "Yes, and…"`,
          "Continue for 3 minutes."
        ],
        purpose: "build acceptance and collaboration."
      },
      {
        num: 2, icon: "🔤", title: "Word-at-a-Time Story",
        body: "Each person says one word at a time to create a story.",
        purpose: "reduce control and increase listening."
      },
      {
        num: 3, icon: "👑", title: "Status Switch",
        body: "Have a normal conversation. Secretly choose high or low status. Then switch.",
        purpose: "understand power dynamics."
      },
      {
        num: 4, icon: "💭", title: "Emotional Translation",
        body: "One person says a neutral sentence. The other guesses the emotion.",
        purpose: "sharpen emotional reading."
      },
      {
        num: 5, icon: "🎭", title: "Objective Scene",
        body: "Each person secretly chooses an objective:",
        objectives: [
          "get reassurance","avoid blame","receive praise",
          "end the conversation","get invited","gain control","be forgiven"
        ],
        instructions: "Then have a conversation.",
        purpose: "see how hidden motives shape interaction."
      }
    ]
  };

  /* ── SECTION 13: PERSONALITY TYPES ───────────────────────── */
  const personalityTypes = [
    {
      id: "shy",
      icon: "🌸",
      color: "pink",
      title: "For Shy People",
      benefits: [
        "speaking up","tolerating attention",
        "starting conversations","reducing fear of awkwardness"
      ],
      risk: "forcing yourself too hard too soon",
      drill: "One small offer per day."
    },
    {
      id: "overthinker",
      icon: "🧠",
      color: "blue",
      title: "For Overthinkers",
      benefits: [
        "acting before perfect certainty",
        "reducing mental rehearsal",
        "trusting response","accepting mistakes"
      ],
      risk: "analyzing improv instead of doing it",
      drill: "30-second spontaneous answer practice."
    },
    {
      id: "pleaser",
      icon: "🤗",
      color: "yellow",
      title: "For People-Pleasers",
      benefits: [
        "clearer boundaries","stronger voice","less approval-seeking"
      ],
      risk: `misusing "Yes, and" to over-agree`,
      drill: `"Yes, and here is my limit."`
    },
    {
      id: "leader",
      icon: "🦁",
      color: "orange",
      title: "For Leaders",
      benefits: [
        "room reading","presence","storytelling",
        "conflict navigation","adaptive communication"
      ],
      risk: "performing authority instead of embodying responsibility",
      drill: "Summarize tension calmly in meetings."
    },
    {
      id: "intense",
      icon: "🌊",
      color: "purple",
      title: "For Emotionally Intense People",
      benefits: [
        "modulation","pacing","expression without overwhelm","conflict control"
      ],
      risk: "becoming more dramatic instead of more regulated",
      drill: "Say the same emotional truth at intensity levels 3, 5, and 7."
    },
    {
      id: "confident",
      icon: "⚡",
      color: "green",
      title: "For Socially Confident but Shallow People",
      benefits: [
        "deeper listening","emotional truth","empathy","less performative charm"
      ],
      risk: "using improv to become more entertaining but not more connected",
      drill: "Ask three follow-up questions before sharing your own story."
    }
  ];

  /* ── SECTION 14: AUTHENTICITY VS ACTING ──────────────────── */
  const authenticityGuide = {
    acting: {
      def: "Acting is truthful expression under chosen circumstances.",
      examples: [
        "expressing confidence when nervous but prepared",
        "speaking warmly even when tired",
        "staying calm during conflict",
        "telling a story with structure",
        "choosing tone intentionally"
      ]
    },
    lying: {
      def: "Lying is creating false reality to mislead.",
      examples: [
        "pretending to care when you plan to exploit",
        "faking credentials","manipulating someone's feelings",
        "inventing stories for status"
      ]
    },
    masking: {
      def: "Masking is hiding your real self for safety, approval, or survival.",
      note: "Sometimes masking is necessary in hostile environments. But long-term masking can become exhausting."
    },
    authenticity: {
      def: `Authenticity is not "saying whatever you feel." It is acting in alignment with truth, values, and context.`,
      question: `"What is true, useful, kind, and appropriate here?"`
    }
  };

  /* ── SECTION 15: STUDY GUIDE ──────────────────────────────── */
  const studyGuide = {
    improv: [
      { name: "Viola Spolin",    focus: "games, spontaneity, play" },
      { name: "Keith Johnstone", focus: "status, spontaneity, narrative" },
      { name: "Del Close",       focus: "long-form improv, group mind" }
    ],
    acting: [
      { name: "Stanislavski",          focus: "objectives, given circumstances, truthful action" },
      { name: "Meisner",               focus: "repetition, listening, instinctive response" },
      { name: "Uta Hagen",             focus: "substitution, realism, identity" },
      { name: "Practical Aesthetics",  focus: "action-based acting" }
    ],
    adjacent: [
      "communication studies","emotional intelligence","negotiation",
      "social psychology","rhetoric","storytelling","somatic awareness",
      "leadership development","therapy-informed communication"
    ]
  };

  /* ── SECTION 16: BOOKS ────────────────────────────────────── */
  const books = {
    acting: [
      { title: "An Actor Prepares",                     author: "Konstantin Stanislavski" },
      { title: "Respect for Acting",                    author: "Uta Hagen" },
      { title: "A Practical Handbook for the Actor",    author: "Bruder, Cohn, Olnek, Pollack, Previto, Zigler" },
      { title: "The Intent to Live",                    author: "Larry Moss" },
      { title: "Sanford Meisner on Acting",             author: "Sanford Meisner and Dennis Longwell" }
    ],
    improv: [
      { title: "Impro",                       author: "Keith Johnstone" },
      { title: "Impro for Storytellers",      author: "Keith Johnstone" },
      { title: "Improvisation for the Theater", author: "Viola Spolin" },
      { title: "Truth in Comedy",             author: "Charna Halpern, Del Close, Kim Johnson" },
      { title: "Improv Wisdom",               author: "Patricia Ryan Madson" }
    ],
    communication: [
      { title: "Crucial Conversations",       author: "Patterson, Grenny, McMillan, Switzler" },
      { title: "Nonviolent Communication",    author: "Marshall Rosenberg" },
      { title: "Difficult Conversations",     author: "Stone, Patton, Heen" },
      { title: "The Charisma Myth",           author: "Olivia Fox Cabane" },
      { title: "Made to Stick",               author: "Chip Heath and Dan Heath" }
    ]
  };

  /* ── SECTION 18: PRINCIPLES ───────────────────────────────── */
  const principles = [
    { num: 1, icon: "👂", title: "Receive Before Responding",  body: "Most people respond too early. Listen first." },
    { num: 2, icon: "🔨", title: "Build, Do Not Block",        body: "Do not kill every idea reflexively. Find the useful part." },
    { num: 3, icon: "🎁", title: "Make Offers",                body: "A life with no offers becomes passive. Speak, suggest, invite, ask, create." },
    { num: 4, icon: "⚡", title: "Recover Quickly",            body: "Mistakes matter less than recovery." },
    { num: 5, icon: "🎯", title: "Read Objectives",            body: "People are always wanting something. Learn to identify what." },
    { num: 6, icon: "🔊", title: "Match Expression to Intention", body: "Say what you mean in a way people can actually feel." },
    { num: 7, icon: "✅", title: "Stay Truthful",              body: "Do not use performance skills to become fake. Use them to become clearer." }
  ];

  /* ── SECTION 19: WEEKLY TEMPLATE ─────────────────────────── */
  const weeklyTemplate = [
    { day: "Monday",    icon: "👂", title: "Listening Day",   focus: "Focus on not interrupting. Ask better follow-up questions." },
    { day: "Tuesday",   icon: "🗣️", title: "Voice Day",       focus: "Practice speaking slower, clearer, and warmer." },
    { day: "Wednesday", icon: "🎁", title: "Offer Day",       focus: "Make one suggestion, invitation, or contribution you would normally withhold." },
    { day: "Thursday",  icon: "👑", title: "Status Day",      focus: "Notice power dynamics. Practice calm confidence." },
    { day: "Friday",    icon: "📖", title: "Story Day",       focus: "Tell one short story with a beginning, tension, and point." },
    { day: "Saturday",  icon: "🎲", title: "Play Day",        focus: "Do something spontaneous, creative, or socially playful." },
    { day: "Sunday",    icon: "🪞", title: "Reflection Day",  focus: "Review: Where did I build? Where did I block? Where was I fake? Where was I brave? What did I learn about people? What will I practice next week?" }
  ];

  /* ── SECTION 20: BOTTOM LINE ──────────────────────────────── */
  const bottomLine = `Improvisation teaches you to handle the unscripted. Acting teaches you to express truth with clarity. Together, they make you more present, adaptable, empathetic, confident, emotionally expressive, and socially effective — as long as you use them for truth and connection, not performance and manipulation.`;

  /* ── QUOTES (from content) ───────────────────────────────── */
  const quotes = [
    { text: "Acting trains truthful expression. Improvisation trains adaptive response. Everyday life requires both.", source: "Core Answer" },
    { text: "Listen to what is given, not what you wish had been given.", source: "Skill 2.2: Listening" },
    { text: "Practice surviving awkwardness.", source: "Skill 2.6: Confidence" },
    { text: "Change is survivable.", source: "Skill 2.3: Adaptability" },
    { text: "I do not need to feel confident to make an offer.", source: "Scenario 3" },
    { text: "This is what is happening. What is the next useful move?", source: "Tool 5.3: Accept Reality" },
    { text: "A good leader does not control every line. A good leader creates the conditions for useful contributions.", source: "Section 6.6: Leadership" },
    { text: "Silence is not always failure. Sometimes it is depth arriving.", source: "Scenario 1: Awkward Silence" },
    { text: "Confidence often comes after action, not before.", source: "Level 3 Drill" },
    { text: "Charisma without character becomes manipulation. Character without expression can become invisible. You want both.", source: "Scenario 6: Charisma" },
    { text: "What is true, useful, kind, and appropriate here?", source: "Section 14: Authenticity" },
    { text: "Mistakes are survivable. Awkwardness passes. People forget faster than you think.", source: "Section 7.2: Shame Resilience" },
    { text: "A life with no offers becomes passive. Speak, suggest, invite, ask, create.", source: "Principle 3" },
    { text: "Do not pretend to be someone else. Express the best honest version of yourself.", source: "Section 6.2: Dating" },
    { text: "Most people respond too early. Listen first.", source: "Principle 1" },
    { text: "Use performance skill in service of the moment, not your ego.", source: "Warning 8.4" },
    { text: "Authenticity is not saying whatever you feel. It is acting in alignment with truth, values, and context.", source: "Section 14" },
    { text: "Real life rarely follows a script.", source: "Section 1" },
    { text: "Many arguments are really about hidden stakes.", source: "Tool 4.2: Stakes" },
    { text: "The goal is not to become a theatre person. The goal is to become more alive, responsive, grounded, and socially capable.", source: "Section 1" },
    { text: "Improv is not about being quick or funny. Good improv is mostly listening.", source: "Skill 2.2" },
    { text: "People avoid things not because they are incapable, but because they fear humiliation.", source: "Section 7.2" },
    { text: "Improv should increase flexibility, not erase self-respect.", source: "Warning 8.3" },
    { text: "Subtext reading is not mind-reading. Treat it as a hypothesis, not certainty.", source: "Tool 4.3: Subtext" },
    { text: "You can raise or lower status intentionally. That is healthy social skill.", source: "Tool 4.4: Status" }
  ];

  /* ── RAPID FIRE QUESTIONS ─────────────────────────────────── */
  const rapidFireQuestions = [
    { q: `Does "Yes, And" mean you agree with everything?`,         a: "No", type: "true-false", category: "Basics" },
    { q: "What is the first step in the Conflict Formula?",          a: "Receive", type: "fill", category: "Conflict" },
    { q: "Improv primarily trains what kind of response?",           a: "Adaptive response", type: "fill", category: "Basics" },
    { q: "Name one high-status behavior.",                           a: "e.g. calm pace / taking space / fewer unnecessary words", type: "open", category: "Status" },
    { q: "What does OAR stand for?",                                 a: "Observe, Ask, Relate", type: "fill", category: "Conversations" },
    { q: "Subtext is what is _____ but not said.",                   a: "meant", type: "fill", category: "Tools" },
    { q: "True or false: Acting builds confidence by telling you to believe in yourself.", a: "False — it says practice surviving awkwardness", type: "true-false", category: "Confidence" },
    { q: "Name the 4-part advanced Yes-And structure.",              a: "Yes, And, But, Therefore", type: "fill", category: "Yes-And" },
    { q: "What does the 10-second arrival drill start with?",        a: "Feel your feet", type: "fill", category: "Presence" },
    { q: "Name one thing improv teaches about mistakes.",            a: "e.g. mistakes are survivable / mistakes become data", type: "open", category: "Mindset" },
    { q: "Is nervous laughter a high-status or low-status behavior?", a: "Low-status", type: "fill", category: "Status" },
    { q: "The OAR method: O stands for?",                            a: "Observe", type: "fill", category: "Conversations" },
    { q: "What does 'given circumstances' mean for an actor?",       a: "where am I, who am I with, what just happened, what do I want, what is the relationship", type: "open", category: "Tools" },
    { q: `What's the key principle of improv listening?`,            a: "Listen to what is given, not what you wish had been given", type: "fill", category: "Listening" },
    { q: "True or false: Spontaneity is always wise.",               a: "False — spontaneity is useful, impulsiveness is dangerous", type: "true-false", category: "Mindset" },
    { q: "Which week of the 30-day plan focuses on Presence?",       a: "Week 1", type: "fill", category: "Practice" },
    { q: "Name one thing you should NOT do when someone is emotional.", a: "Fix too quickly", type: "fill", category: "Empathy" },
    { q: "What does 'executive presence' actually train?",           a: "controlled communication under pressure", type: "fill", category: "Work" },
    { q: "Name one of the 7 core principles.",                       a: "e.g. Receive before responding / Build, do not block / Make offers", type: "open", category: "Principles" },
    { q: `True or false: "It's fine" often has hidden subtext.`,     a: "True", type: "true-false", category: "Tools" },
    { q: "Which personality type risks analyzing improv instead of doing it?", a: "Overthinker", type: "fill", category: "Types" },
    { q: "What is the 'Last-Word Response' drill?",                  a: "Respond using one important word or idea the other person just said", type: "fill", category: "Listening" },
    { q: "Name the 3 energies in the Public Speaking drill.",        a: "inspiring, serious, conversational", type: "fill", category: "Speaking" },
    { q: "What is identity flexibility in acting?",                  a: "exploring different parts of yourself — assertive, playful, tender, etc.", type: "open", category: "Identity" },
    { q: "What is the biggest danger of using acting skills?",       a: "Becoming performative — managing impressions instead of expressing truth", type: "fill", category: "Warnings" }
  ];

  /* ── QUESTION OF THE DAY DECK ────────────────────────────── */
  const questionOfDay = [
    { q: "What situation in your life are you trying to 'script' instead of respond to?",         icon: "🎭", category: "Presence" },
    { q: "When did you last listen without planning your response?",                               icon: "👂", category: "Listening" },
    { q: "Where in your life are you blocking instead of building?",                              icon: "🔨", category: "Yes-And" },
    { q: "What low-stakes bold act could you do today?",                                          icon: "⚡", category: "Confidence" },
    { q: "What emotion are you carrying right now that you haven't named?",                       icon: "💭", category: "Expression" },
    { q: "Where is your 'outside' not matching your 'inside' lately?",                           icon: "🪞", category: "Authenticity" },
    { q: "What hidden stake is underneath your last argument?",                                   icon: "⚖️", category: "Stakes" },
    { q: "Who in your life could benefit from you 'making them look good' today?",               icon: "🌟", category: "Improv" },
    { q: "What conversation are you avoiding right now?",                                         icon: "💬", category: "Courage" },
    { q: "When did you last recover from a mistake with grace?",                                  icon: "⚡", category: "Resilience" },
    { q: "What role do you play that you're tired of?",                                           icon: "🎭", category: "Identity" },
    { q: "In which area do you need to raise your status? In which do you need to lower it?",    icon: "👑", category: "Status" },
    { q: "What offer have you been holding back from making?",                                    icon: "🎁", category: "Offers" },
    { q: "Where are you using 'Yes, And' to avoid setting a boundary?",                          icon: "🛡️", category: "Boundaries" },
    { q: "What would you do differently if you truly accepted the current reality?",              icon: "🌊", category: "Adaptability" },
    { q: "Which personality type do you relate to most today — and how does improv apply?",      icon: "🧩", category: "Self-Awareness" },
    { q: "What situation needs more curiosity and less judgment from you right now?",             icon: "🔍", category: "Empathy" },
    { q: "When was the last time silence felt comfortable rather than awkward?",                  icon: "🤫", category: "Presence" },
    { q: "What are you performing that isn't actually you?",                                      icon: "🎭", category: "Authenticity" },
    { q: "What motive are you assuming about someone that might be wrong?",                       icon: "💭", category: "Empathy" },
    { q: "If you could replay one conversation from this week, what would you do differently?",   icon: "⏪", category: "Learning" },
    { q: "What part of your life needs more 'Yes, and' right now?",                              icon: "✅", category: "Yes-And" },
    { q: "Where do you interrupt or talk over people most often?",                                icon: "🛑", category: "Listening" },
    { q: "What would speaking with 10% more emotional honesty look like for you today?",         icon: "🔊", category: "Expression" },
    { q: "What is one way you can make someone else look good today?",                            icon: "🌟", category: "Generosity" },
    { q: "Where in your life are you confusing 'I should feel confident' with 'I should act'?", icon: "⚡", category: "Action" },
    { q: "What story are you telling yourself about a difficult person that might be unfair?",    icon: "📖", category: "Empathy" },
    { q: "What would your most grounded, present, expressive self do differently today?",        icon: "🌊", category: "Presence" },
    { q: "Name three emotions you've felt today — precisely, not just 'fine' or 'stressed'.",    icon: "🎨", category: "Emotional Precision" },
    { q: "What boundary do you need to set this week — and how will you say it clearly?",        icon: "🛡️", category: "Boundaries" }
  ];

  /* ── QUIZ QUESTIONS ───────────────────────────────────────── */
  const quizQuestions = [
    {
      q: `What does "Yes, And" in improv primarily mean?`,
      options: [
        `Always agree with people`,
        `Accept reality offered and add constructively`,
        `Be spontaneous at all costs`,
        `Say yes to every request`
      ],
      correct: 1,
      explanation: `"Yes, And" means: accept the reality of what has been offered, then add constructively. It is not about blind agreement.`
    },
    {
      q: "According to the content, improv builds confidence by:",
      options: [
        "Telling you to believe in yourself",
        "Memorizing scripts",
        "Practicing surviving awkwardness",
        "Performing well on stage"
      ],
      correct: 2,
      explanation: `Normal advice says "believe in yourself." Improv says "practice surviving awkwardness." That is more useful.`
    },
    {
      q: "What is 'subtext'?",
      options: [
        "The main message of a sentence",
        "A type of stage direction",
        "Background music in a scene",
        "What is meant but not said"
      ],
      correct: 3,
      explanation: `Subtext is what is meant but not said. For example, "I'm fine" can mean "It is not fine, but I do not feel safe saying so."`
    },
    {
      q: "In the OAR conversation method, what does 'A' stand for?",
      options: ["Act", "Assert", "Ask", "Acknowledge"],
      correct: 2,
      explanation: `OAR = Observe (notice something real), Ask (invite expansion), Relate (connect with your own experience).`
    },
    {
      q: "Which of these is a high-status behavior?",
      options: [
        "Over-apologizing",
        "Nervous laughter",
        "Rushing speech",
        "Calm pace"
      ],
      correct: 3,
      explanation: `High-status: calm pace, taking space, fewer unnecessary words, relaxed eye contact, grounded posture.`
    },
    {
      q: "The Conflict Formula begins with:",
      options: ["Validate", "Clarify", "Receive", "Boundary"],
      correct: 2,
      explanation: `The full formula: Receive → Name → Validate → Clarify → Own → Boundary → Repair. Receiving (not interrupting) comes first.`
    },
    {
      q: "What is the most dangerous misuse of acting skills?",
      options: [
        "Practicing too much",
        "Learning too many techniques",
        "Being too spontaneous",
        "Becoming performative instead of truthful"
      ],
      correct: 3,
      explanation: `The biggest danger: using acting to manage impressions instead of express truth. Acting should make you more truthful, not more fake.`
    },
    {
      q: `Which principle says "Do not kill every idea reflexively"?`,
      options: ["Stay Truthful", "Make Offers", "Build, Do Not Block", "Read Objectives"],
      correct: 2,
      explanation: `Principle 2: Build, do not block — Do not kill every idea reflexively. Find the useful part.`
    },
    {
      q: "The '10-second arrival' drill is designed to:",
      options: [
        "Arrive 10 seconds early",
        "Ground yourself before a conversation",
        "Make 10 small talk points",
        "Speak for 10 seconds straight"
      ],
      correct: 1,
      explanation: `The 10-second arrival: feel feet → relax jaw → exhale → look at person → ask "What is happening here, right now?" It pulls you out of self-consciousness.`
    },
    {
      q: "Acting primarily trains:",
      options: [
        "Adaptive response",
        "Memorization",
        "Physical movement",
        "Truthful expression"
      ],
      correct: 3,
      explanation: `Acting trains truthful expression. Improvisation trains adaptive response. Everyday life requires both.`
    },
    {
      q: "What is 'identity flexibility' in acting?",
      options: [
        "Playing multiple characters in one show",
        "Changing your personality for others",
        "Exploring different authentic parts of yourself",
        "Acting differently in different jobs"
      ],
      correct: 2,
      explanation: `Acting lets you explore different parts of yourself: assertive, playful, tender, authoritative, etc. The goal is integration, not fakery.`
    },
    {
      q: "When someone is emotional, the content says to:",
      options: [
        "Fix the problem quickly",
        "Give them advice immediately",
        "Change the subject",
        "Receive first, solve later"
      ],
      correct: 3,
      explanation: `Receive first, solve later. Scripts: "That sounds heavy." / "Do you want advice, comfort, or just someone to listen?"`
    },
    {
      q: "Which personality type risks 'analyzing improv instead of doing it'?",
      options: ["Shy person", "People-pleaser", "Overthinker", "Leader"],
      correct: 2,
      explanation: `Overthinkers' main risk: analyzing improv instead of doing it. Their drill: 30-second spontaneous answer practice.`
    },
    {
      q: "Charisma, according to the content, combines:",
      options: [
        "Loudness and humor",
        "Height and appearance",
        "Money and status",
        "Presence, warmth, conviction, responsiveness, clarity, timing, confidence, and playfulness"
      ],
      correct: 3,
      explanation: `Charisma without character becomes manipulation. Character without expression can become invisible. You want both.`
    },
    {
      q: "What does 'Accept Reality Fast' mean in improv?",
      options: [
        "Agree with everything that happens",
        "Stop arguing with what is happening and ask what the next useful move is",
        "React immediately without thinking",
        "Accept all feedback without question"
      ],
      correct: 1,
      explanation: `Acceptance does not mean approval. It means you stop wasting energy arguing with reality. "This is what is happening. What is the next useful move?"`
    }
  ];

  /* ── PUBLIC API ───────────────────────────────────────────── */
  return {
    coreAnswer,
    section1,
    skills,
    yesAnd,
    actingTools,
    improvTools,
    scenarios,
    psychBenefits,
    warnings,
    practiceSystem,
    scenarioPlaybook,
    thirtyDayPlan,
    exercises,
    personalityTypes,
    authenticityGuide,
    studyGuide,
    books,
    principles,
    weeklyTemplate,
    bottomLine,
    quotes,
    rapidFireQuestions,
    questionOfDay,
    quizQuestions
  };
})();

// Expose globally
window.C = C;
