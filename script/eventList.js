let newPlayerEvent = new GameEvent(
    1,
    "Welcome",
    "Welcome to TO ARMS 1938, history inspired strategic game where you take role of leadership of Czechoslovakian republic, democratic state facing imminent threat from Third Reich. Build up your Economy, Train you Army, Find Allies and Survive. Would you like some tips on how to start?",
    [
        new Choice("Yes please", "Tutorial"),
        new Choice("Sure why not", "Tutorial"),
        new Choice("No thank you"),
        new Choice("No and f* you")
    ]
);

let returningPlayerEvent = new GameEvent(
    1,
    "Welcome Back",
    "Welcome back to TO ARMS 1938. How did you find your previous game? Starting resources will be changed accordingly to make your experience more enjoyable.",
    [
        new Choice("Heheh Almost too easy", "Harder"),
        new Choice("It was fine, no changes neccesary"),
        new Choice("Way too hard, give me some help", "Easier")
    ]
);

let tutorialEventlist = [
new GameEvent(
    2,
    "Economy Tutorial",
    "Okay, here are the basics, to produce anything you need materials. Materials are produced in mines. To build more mines (and any other building) you need factories, these are pretty expensive but you get some at the start. Every building or unit uses some of the population but there is plenty so no need to worry about it. Oil is produced in refineries, use of oil will be explained in next popup.",
    [
        new Choice("Got it"),
        new Choice("I don't get it but lets continue anyway. Nothing bad can happen right?")
    ]
),
new GameEvent(
    3,
    "Army Tutorial",
    "Your army is represented with Military Strength, recruiting foot infantry requires barracks and materials. Tanks are more expensive as they need materials, oil and factories to make but they provide way more power.",
    [
        new Choice("I see"),
        new Choice("Whatever")
    ]
),
new GameEvent(
    5,
    "Ready",
    "Your goal is to gather enough military strength for final battle, pretty easy right? No? Well you'll manage, what's the worst that could happen ... history to repeat? Just remember there are multiple endings so replaying game few times is advised.",
    [
        new Choice("Got it thanks!")
    ]
)
];

let eventList = [
new GameEvent(
    20,
    "National Focus",
    "Our goverment is creating plans for possible threats from our neighbours, most notably Hungary and Germany. Two plans have come up from drawing boards. We can either focus on building our economic power, better infrastructure means faster construction, or we can improve our military training effectivness resulting in faster unit training.",
    [
        new Choice("Put the economy first!", "EconomyFirst"),
        new Choice("We must train more soldiers!", "MilitaryFirst")
    ]
),

new GameEvent(
    50,
    "Rebels",
    "Some fanatical citizens belonging to German minority have been secretly armed by German Reich. They are planning to sabotage our industrial buildings. We need to do something!",
    [
        new Choice("Send our soldiers to deal with them", "Soldiers"),
        new Choice("They are but minor problem", "Sabotage")
    ]
),

new GameEvent(
    80,
    "Anschluss - 12 March 1938",
    "Austria was annexed by German Reich. It looks like national referendum was supressed because of fear of invasion. Unfortunately this puts even more presure on our borders.",
    [
        new Choice("Concerning", "Anschluss")
    ]
),

new GameEvent(
    100,
    "Another group of rebels",
    "More fanatical citizens belonging to German minority have been secretly armed by German Reich. They are planning to sabotage our industrial buildings. We need to do something!",
    [
        new Choice("Send our soldiers to deal with them", "Soldiers"),
        new Choice("They are but minor problem", "Sabotage")
    ]
),

new GameEvent(
    240,
    "Munich Meeting - 29 September 1938",
    "German, Italian, British and French leaders are negotiating about our borders ... without our presence!",
    [
        new Choice("Traitors!")
    ]
),

new GameEvent(
    241,
    "Munich Agreement - 30 September 1938",
    "Both parties agreed on terms. We give up Sudenland or our \"Allies\" won't help us if Germany attacks.",
    [
        new Choice("We won't stand for this! (Germany will attack)", "GermanAttack"),
        new Choice("We will comply this time", "SudetenGiven")
    ]
),

new GameEvent(
    242,
    "Peace for our time - 30 September 1938",
    "British Prime Minister Neville Chamberlain received a rowdy homecoming after signing a peace pact with Nazi Germany. Saying in his speech that he has achieved Peace for our time.",
    [
        new Choice("Let's hope that's true"),
        new Choice("Doubtful")
    ]
),

new GameEvent(
    300,
    "Germany plans to invade",
    "Our recon has reported that large number of German troops are preparing to invade rest of our country. We don't have much time to prepare.",
    [
        new Choice("We knew they couldn't be trusted")
    ]
),

new GameEvent(
    360,
    "Final Decision",
    "Time has come, Germany is ready to invade our lands. We must decide how we will proceed.",
    [
        new Choice("Fools! We are more than ready to handle them. (Germany will attack)", "EndBattle"),
        new Choice("This is our final stand! (Germany will attack)", "EndBattle"),
        new Choice("We can't afford to lose lives. Surrender. (Czechoslovakia surrenders)", "Surrender"),
    ]
)
];

function Tutorial(){
    //alert("tutorial!");
    eventList = eventList.concat(tutorialEventlist);
}

function Harder() {
    playerData.mines.Modify(1);
    playerData.factories.Modify(3);
}

function Easier() {
    playerData.materials.Add(5000);
    playerData.mines.Add(1);
    playerData.factories.Add(3);
    playerData.refineries.Add(1);
}

function EconomyFirst(){
    playerData.factories.Add(5);
}

function MilitaryFirst(){
    playerData.barracks.Add(10);
    playerData.military.Add(200000);
}

function Soldiers(){
    playerData.military.Substract(5000);
}

function Sabotage(){
    playerData.factories.Substract(1);
}

function Anschluss(){
    austria.countryView.setColor("enemy");
}

function GermanAttack() {
    EndBattle();
}

function SudetenGiven(){
    playerData.population.Substract(4000000);
    playerData.factories.Substract(2);
}

function EndBattle() {
    const germanStrength = 1500000;
    localStorage.setItem("played", true);
    alert(playerData.military.Get() + " x " + germanStrength)
    if(playerData.military.Get() >= germanStrength){
        window.location = "battle.html?result=czewin";
    } else {
        window.location = "battle.html?result=gerwin";
    }
}

function Surrender() {
    localStorage.setItem("played", true);
    window.location = "endscreen.html?result=czesur"
}

