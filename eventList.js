let welcome = new GameEvent(
    5,
    "Welcome",
    "Welcome to TO ARMS 1938, history inspired strategic game where you take role of leadership of Czechoslovakian republic, democratic state facing imminent threat from Third Reich. Build up your Economy, Train you Army, Find Allies and Survive.",
    [
        new Choice("WHAT?!"),
        new Choice("Heheh Almost too easy."),
        new Choice("Ah shit, here we go again.")
    ]
)

let focus = new GameEvent(
    10,
    "National Focus",
    "Our goverment is creating plans for possible threats from our neighbours, most notably Hungary and Germany. Two plans have come up from drawing boards. We can either focus on building our economic power, better infrastructure means faster construction, or we can improve our military training effectivness resulting in faster unit training.",
    [
        new Choice("Put the economy first!", "EconomyFirst"),
        new Choice("We must train more soldiers!", "MilitaryFirst")
    ]
)

function EconomyFirst(){
    playerData.factories.Add(5);
}
function MilitaryFirst(){
    playerData.infantry.Add(10000);
}