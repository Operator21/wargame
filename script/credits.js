let creditsArray = [
    "Game by Stanislav Zdych",
    "----------------",
    "Music used from:",
    "----------------",
    "Codename Panzers: Phase One",
    "Codename Panzers: Phase Two",
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