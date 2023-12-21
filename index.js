"use strict";

document.getElementById('dice_roll').addEventListener('click', function(event) {
    event.preventDefault();
    let roll = Math.floor(Math.random() * 20) + 1;
    let rollShow = document.getElementById('roll_result');
    rollShow.textContent = 'You rolled: ' + roll;
    let diceResults = document.getElementById('dice_results');
    diceResults.style.display = 'block';
    setTimeout(function() {
        diceResults.classList.add('show');
    }, 20);
});

document.getElementById('x').addEventListener('click', function(event) {
    let diceResults = document.getElementById('dice_results');
    diceResults.classList.remove('show');
    diceResults.addEventListener('transitionend', function() {
        diceResults.style.display = 'none';
    }, { once: true });
});

document.getElementById('about_creator').addEventListener('click', function(event) {
    let name = prompt("Hang on, what's your name?", 'Mary the Destroyer');
    alert (`Alright, ${name}, I'll show you what you seek.`);
});

document.getElementById('drop_lowest_button').addEventListener('click', function(event) {
    let rollA1 = Math.floor(Math.random() * 6) +1;
    let rollA2 = Math.floor(Math.random() * 6) +1;
    let rollA3 = Math.floor(Math.random() * 6) +1;
    let rollA4 = Math.floor(Math.random() * 6) +1;
    let rollsA = [rollA1, rollA2, rollA3, rollA4];
    let smallestA = Math.min(...rollsA);
    let resultA = rollA1 + rollA2 + rollA3 + rollA4 - smallestA; 

    let rollB1 = Math.floor(Math.random() * 6) +1;
    let rollB2 = Math.floor(Math.random() * 6) +1;
    let rollB3 = Math.floor(Math.random() * 6) +1;
    let rollB4 = Math.floor(Math.random() * 6) +1;
    let rollsB = [rollB1, rollB2, rollB3, rollB4];
    let smallestB = Math.min(...rollsB);
    let resultB = rollB1 + rollA2 + rollB3 + rollB4 - smallestB; 

    let rollC1 = Math.floor(Math.random() * 6) +1;
    let rollC2 = Math.floor(Math.random() * 6) +1;
    let rollC3 = Math.floor(Math.random() * 6) +1;
    let rollC4 = Math.floor(Math.random() * 6) +1;
    let rollsC = [rollC1, rollC2, rollC3, rollC4];
    let smallestC = Math.min(...rollsC);
    let resultC = rollC1 + rollC2 + rollC3 + rollC4 - smallestC; 

    let rollD1 = Math.floor(Math.random() * 6) +1;
    let rollD2 = Math.floor(Math.random() * 6) +1;
    let rollD3 = Math.floor(Math.random() * 6) +1;
    let rollD4 = Math.floor(Math.random() * 6) +1;
    let rollsD = [rollD1, rollD2, rollD3, rollD4];
    let smallestD = Math.min(...rollsD);
    let resultD = rollD1 + rollD2 + rollD3 + rollD4 - smallestD; 

    let rollE1 = Math.floor(Math.random() * 6) +1;
    let rollE2 = Math.floor(Math.random() * 6) +1;
    let rollE3 = Math.floor(Math.random() * 6) +1;
    let rollE4 = Math.floor(Math.random() * 6) +1;
    let rollsE = [rollE1, rollE2, rollE3, rollE4];
    let smallestE = Math.min(...rollsE);
    let resultE = rollE1 + rollE2 + rollE3 + rollE4 - smallestE; 

    let rollF1 = Math.floor(Math.random() * 6) +1;
    let rollF2 = Math.floor(Math.random() * 6) +1;
    let rollF3 = Math.floor(Math.random() * 6) +1;
    let rollF4 = Math.floor(Math.random() * 6) +1;
    let rollsF = [rollF1, rollF2, rollF3, rollF4];
    let smallestF = Math.min(...rollsF);
    let resultF = rollF1 + rollF2 + rollF3 + rollF4 - smallestF; 

    let rollShow = document.getElementById('roll_result');
    
    let sum = resultA + resultB + resultC + resultD + resultE + resultF;
    rollShow.textContent = `${resultA}, ${resultB}, ${resultC}, ${resultD}, ${resultE}, ${resultF}. Total = ${sum};`
    
    let diceResults = document.getElementById('dice_results');
    
    diceResults.style.display = 'block';
    
    setTimeout(function() {
        diceResults.classList.add('show');
    }, 20);
});

document.getElementById('random_song').addEventListener('click', function(event) {
    const clientId = '537588358050-l48eblvul4cmu7g1af01aq3mulenpndv.apps.googleusercontent.com';
    const redirectUri = 'https://asseternity.github.io';
    const authorizationEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
    const responseType = 'token';
    const scope = 'https://www.googleapis.com/auth/youtube.readonly';
    const authUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scope)}&state=${encodeURIComponent(playlistId)}`;
    const playlistRoster = [
        'PLI_TwOrHUsI8MQNW0BvBAwwHYKgyiiiDB', 
        'PLWUuMxUJvnuKDF9DncRGZPKssW0G7uyLi', 
        'PLxA687tYuMWhkqYjvAGtW_heiEL4Hk_Lx', 
        'PLgBObi1IkjwnnAq3bNURPS0fj1YiD1TwD', 
        'PL3AbtVm53r6uBDdoC1nulDg55UOQ8AaUJ', 
        'PL94HV6uNsrcaCxQeNXtNHsk5iKwRLDxfM', 
        'PLhy5Z9Wy4gtnuepb2CFU4sVTc9_NEXwoi'
    ];
    const randomIndex = Math.floor(Math.random() * playlistRoster.length);
    const playlistId = playlistRoster[randomIndex];
    const maxResults = 1000;
    const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${clientId}`;

    window.location.href = authUrl;

    fetch(apiUrl, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
            let videoCount = data.items.length;
            let randomizer = Math.floor(Math.random() * videoCount);
            const videoTitle = data.items[randomizer].snippet.title;
            const videoId = data.items[randomizer].snippet.resourceId.videoId;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

            document.getElementById('roll_result').innerHTML = `Theme song: <a href="${videoUrl}" target="_blank">${videoTitle}</a>`;
        });
    
    let diceResults = document.getElementById('dice_results');
    diceResults.style.display = 'block';
    setTimeout(function() {
        diceResults.classList.add('show');
    }, 20);

});