let isLoggedIn = false; //global variable initialization for Login display functionality

function toggleLogin() { // function managing my display (in a different way than I have before)
    isLoggedIn = !isLoggedIn;
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signup');
    const h2Tag = document.querySelector('h2')
    
    if (isLoggedIn) {
        loginButton.textContent = 'Logout';
        signupButton.style.display = 'none';
        h2Tag.style.paddingRight = '123px';
    } else {
        loginButton.textContent = 'Login';
        signupButton.style.display = 'inline';
        h2Tag.style.paddingRight = '15px';
    };
};

const fetchArtDetails = async (imgId) => { // function that fetches the data
    const search_url =  `https://api.artic.edu/api/v1/artworks/${imgId}?fields=id,title,artist_display,date_display`;
    try{
        const res = await fetch(search_url);
        const data = await res.json();
        return data
    } catch (error) {
        console.log("Fetching art details failed", error)
    }
};

const clickedEvent = async (imgId) => { // function that manages the clicked event

    let detailsHtml;
    const artDetails = await fetchArtDetails(imgId);
    console.log(artDetails)
    if (artDetails) {
        const [name, rest] = artDetails.data.artist_display.split('\n');
        const [title, year] = [artDetails.data.title, artDetails.data.date_display];

        // Step 2: Use regex to extract nationality and lifespan. Assuming the format is always 'Nationality, Lifespan'
        // You can adjust the regex as needed based on the expected format variations.
        const nationalityRegex = /^(.*?),/;
        const lifespanRegex = /(\d{4}–\d{4})$/;

        const nationalityMatch = rest.match(nationalityRegex);
        const lifespanMatch = rest.match(lifespanRegex);

        // console.log(nationalityMatch)
        // console.log(lifespanMatch)

        const nationality = nationalityMatch ? nationalityMatch[1] : 'Unknown';
        const lifespan = lifespanMatch ? lifespanMatch[1] : 'Unknown';

        // console.log(`Name: ${name}`);
        // console.log(`Nationality: ${nationality}`); 
        // console.log(`Lifespan: ${lifespan}`);

        detailsHtml = `
        <p>Piece: ${title}</p>
        <p>Year Created: ${year}</p>
        <p>Artist: ${name}</p>
        <p>Lifespan: ${lifespan}</p>
        <p>Nationality: ${nationality}</p>`

    } else {
        detailsHtml = "<p>Artwork details could not be loaded.</p>";
    }
    
    document.getElementById('artwork-details').innerHTML = detailsHtml; //inserts HTML from

    document.getElementById('popup').style.display = 'flex' // unhides hidden div
};

// document.querySelectorAll('figure img').forEach(img => {
//     img.addEventListener('click', () => clickedEvent(img.id));
// });


document.querySelector('.close-btn').addEventListener('click', ()=>{ // function to hide the div onceopen
    document.getElementById('popup').style.display = 'none'
});