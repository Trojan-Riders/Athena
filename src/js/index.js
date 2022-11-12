function search()
{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'faaf235513msh73cd090780fbee3p11b255jsnc38e3cb87bfe',
            'X-RapidAPI-Host': 'g-search.p.rapidapi.com'
        }
    };
    var q=document.getElementById("search_bar").value;
    var url=`https://g-search.p.rapidapi.com/search?q=${q}&location_name=Mumbai%2CKolkata&location_parameters_auto=true`;
    fetch(url, options)
        .then(response => response.json())
        .then(response =>{
            console.log(response);
            document.getElementById("answers").style.display="block";
            
            document.getElementById('one').setAttribute('href',response.data.organic_results[0].url);
            document.getElementById('one_t').innerHTML=response.data.organic_results[0].title;
            document.getElementById('one_d').innerHTML=response.data.organic_results[0].desc;

            document.getElementById('two').setAttribute('href',response.data.organic_results[1].url);
            document.getElementById('two_t').innerHTML=response.data.organic_results[1].title;
            document.getElementById('two_d').innerHTML=response.data.organic_results[1].desc;

            document.getElementById('three').setAttribute('href',response.data.organic_results[2].url);
            document.getElementById('three_t').innerHTML=response.data.organic_results[2].title;
            document.getElementById('three_d').innerHTML=response.data.organic_results[2].desc;

            document.getElementById('four').setAttribute('href',response.data.organic_results[3].url);
            document.getElementById('four_t').innerHTML=response.data.organic_results[3].title;
            document.getElementById('four_d').innerHTML=response.data.organic_results[3].desc;
        });
}