const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'faaf235513msh73cd090780fbee3p11b255jsnc38e3cb87bfe',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
};

fetch('https://free-news.p.rapidapi.com/v1/search?q=Women%20Relationships&lang=en', options)
    .then(response => response.json())
    .then(response => {

        document.getElementById('main').setAttribute('href', response.articles[0].link);
        document.getElementById('a0').setAttribute('src', response.articles[0].media);
        document.getElementById('a0_heading').innerHTML = response.articles[0].title;
        if (response.articles[0].title.length > 50) {
            document.getElementById('a0_heading').innerHTML = response.articles[0].title.substring(0, 50) + '...';
        }

        document.getElementById('a1').setAttribute('href', response["articles"][1]["link"]);
        document.getElementById('a1_img').setAttribute('src', response["articles"][1]["media"]);
        document.getElementById('a1_heading').innerHTML = response["articles"][1]["title"];
        if (response["articles"][1]["title"].length > 50) {
            document.getElementById('a1_heading').innerHTML = response["articles"][1]["title"].substring(0, 50) + '...';
        }

        document.getElementById('a2').setAttribute('href', response["articles"][7]["link"]);
        document.getElementById('a2_img').setAttribute('src', response["articles"][7]["media"]);
        document.getElementById('a2_heading').innerHTML = response["articles"][7]["title"];
        if (response["articles"][7]["title"].length > 50) {
            document.getElementById('a2_heading').innerHTML = response["articles"][7]["title"].substring(0, 50) + '...';
        }

        document.getElementById('b1').setAttribute('href', response["articles"][2]["link"]);
        document.getElementById('b1_img').setAttribute('src', response["articles"][2]["media"]);
        document.getElementById('b1_heading').innerHTML = response["articles"][2]["title"];
        if (response["articles"][2]["title"].length > 50) {
            document.getElementById('b1_heading').innerHTML = response["articles"][2]["title"].substring(0, 50) + '...';
        }

        document.getElementById('b2').setAttribute('href', response["articles"][3]["link"]);
        document.getElementById('b2_img').setAttribute('src', response["articles"][3]["media"]);
        document.getElementById('b2_heading').innerHTML = response["articles"][3]["title"];
        if (response["articles"][3]["title"].length > 50) {
            document.getElementById('b2_heading').innerHTML = response["articles"][3]["title"].substring(0, 50) + '...';
        }

        document.getElementById('c1').setAttribute('href', response["articles"][4]["link"]);
        document.getElementById('c1_img').setAttribute('src', response["articles"][4]["media"]);
        document.getElementById('c1_heading').innerHTML = response["articles"][4]["title"];
        if (response["articles"][4]["title"].length > 50) {
            document.getElementById('c1_heading').innerHTML = response["articles"][4]["title"].substring(0, 50) + '...';
        }

        document.getElementById('c2').setAttribute('href', response["articles"][5]["link"]);
        document.getElementById('c2_img').setAttribute('src', response["articles"][5]["media"]);
        document.getElementById('c2_heading').innerHTML = response["articles"][5]["title"];
        if (response["articles"][5]["title"].length > 50) {
            document.getElementById('c2_heading').innerHTML = response["articles"][5]["title"].substring(0, 50) + '...';
        }

        document.getElementById('c3').setAttribute('href', response["articles"][6]["link"]);
        document.getElementById('c3_img').setAttribute('src', response["articles"][6]["media"]);
        document.getElementById('c3_heading').innerHTML = response["articles"][6]["title"];
        if (response["articles"][6]["title"].length > 50) {
            document.getElementById('c3_heading').innerHTML = response["articles"][6]["title"].substring(0, 50) + '...';
        }

        document.getElementById('c4').setAttribute('href', response["articles"][9]["link"]);
        document.getElementById('c4_img').setAttribute('src', response["articles"][9]["media"]);
        document.getElementById('c4_heading').innerHTML = response["articles"][9]["title"];
        if (response["articles"][9]["title"].length > 50) {
            document.getElementById('c4_heading').innerHTML = response["articles"][9]["title"].substring(0, 50) + '...';
        }
    });
var x = 0;

function change() {
    if (x == 0) {
        document.getElementById('hamburger').setAttribute('src', '../src/img/open.png');
        document.getElementById('linkers').style.display = 'flex';
        x = 1;
    } else {
        document.getElementById('hamburger').setAttribute('src', '../src/img/closed.png');
        document.getElementById('linkers').style.display = 'none';
        x = 0;
    }
}