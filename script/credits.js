let creditsArray = [
    "Game by Stanislav Zdych",
    "----------------",
    "Music:",
    "----------------",
    "The Ice Giants Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 4.0 License http://creativecommons.org/licenses/by/4.0/",
    "Strength of the Titans Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 4.0 License http://creativecommons.org/licenses/by/4.0/",
    "Gothamlicious Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 4.0 License http://creativecommons.org/licenses/by/4.0/",
    "Five Armies Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 4.0 License http://creativecommons.org/licenses/by/4.0/",
    "----------------",
    "All materials were used for study purposes only."
];

function FillCredits(container){
    creditsArray.forEach(license => {
        let title = $N("h4");
        title.innerHTML = license;
        container.append(title);
    });
}