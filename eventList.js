let eventList = [
new GameEvent(
    1,
    "Welcome",
    "Welcome to TO ARMS 1938, history inspired strategic game where you take role of leadership of Czechoslovakian republic, democratic state facing imminent threat from Third Reich. Build up your Economy, Train you Army, Find Allies and Survive.",
    [
        new Choice("WHAT?!"),
        new Choice("Heheh Almost too easy."),
        new Choice("Ah shit, here we go again.")
    ]
),

new GameEvent(
    10,
    "National Focus",
    "Our goverment is creating plans for possible threats from our neighbours, most notably Hungary and Germany. Two plans have come up from drawing boards. We can either focus on building our economic power, better infrastructure means faster construction, or we can improve our military training effectivness resulting in faster unit training.",
    [
        new Choice("Put the economy first!", "EconomyFirst"),
        new Choice("We must train more soldiers!", "MilitaryFirst")
    ]
),

new GameEvent(
    20,
    "Anschluss - 12 March 1938",
    "Austria was annexed by German Reich. It looks like national referendum was supressed because of fear of invasion. Unfortunately this puts even more presure on our borders.",
    [
        new Choice("Concerning", "Anschluss"),
        new Choice("Cowards!", "Anschluss")
    ]
),

new GameEvent(
    30,
    "Munich Meeting - 29 September 1938",
    "German, Italian, British and French leaders are negotiating about our borders ... without our presence!",
    [
        new Choice("Traitors!")
    ]
),

new GameEvent(
    31,
    "Munich Agreement - 30 September 1938",
    "Both parties agreed on terms. We give up Sudenland or our \"Allies\" won't help us if Germany attacks.",
    [
        new Choice("We won't stand for this! (Germany might attack)"),
        new Choice("We will comply this time.")
    ]
)
];

function EconomyFirst(){
    playerData.factories.Add(5);
}
function MilitaryFirst(){
    playerData.infantry.Add(10000);
}

function Anschluss(){
    austria.countryView.setColor("enemy");
}


