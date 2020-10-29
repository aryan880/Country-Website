const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

let asc =false;




const list = (array) => {
  document.querySelector("h4").innerHTML = "Total Number Of Countries : " + countries.length;
  let container = document.querySelector(".container");
  container.innerHTML = "";
  for(i=0;i<array.length;i++){
    let div = document.createElement("div");
    div.classList.add("eachCountry");
    div.innerHTML = array[i];
    container.appendChild(div);
  }
}
list(countries);

document.querySelector(".btn1").addEventListener("click",()=>{
  let searchBar = document.querySelector("#searchBar");
  searchBar.addEventListener("keyup",(e) => {
  const searchString = e.target.value.toLowerCase().charAt(0);
  const filtered = countries.filter((country) => {
    return country.toLowerCase().charAt(0).includes(searchString);
  });

  if(searchString.length === 0){
    document.querySelector(".subText").innerHTML = "Countries are <span class = 'numColor'>"+countries.length;
  }
  else{
    document.querySelector(".subText").innerHTML = "Countries containing <span class = 'stringColor'>" + searchString+ "</span> are <span class = 'numColor'>"+filtered.length+"</span>";
  }
  list(filtered);
 
  }); 
});

document.querySelector(".btn2").addEventListener("click",()=>{
  let searchBar = document.querySelector("#searchBar");
  searchBar.addEventListener("keyup",(e) => {
  const searchString = e.target.value.toLowerCase();
  const filtered = countries.filter((country) => {
    return country.toLowerCase().includes(searchString);
  });
  console.log(filtered);
  console.log(searchString)
  if(searchString.length === 0){
    document.querySelector(".subText").innerHTML = "Countries are <span class = 'numColor'>"+countries.length;
  }
  else{
    document.querySelector(".subText").innerHTML = "Countries containing <span class = 'stringColor'>" + searchString+ "</span> are <span class = 'numColor'>"+filtered.length+"</span>";
  }
  list(filtered);
}); 
});

let array = [];

document.querySelector(".btn3").addEventListener("click",()=>{
  array = []
  let div = document.querySelectorAll(".eachCountry");
  for(i=0; i<div.length; i++){
    array.push(div[i].innerHTML);
  }
  if(asc === false){
    document.querySelector(".btn3").innerHTML = "<i class='fa fa-sort-alpha-desc' aria-hidden='true'>"
    array = array.sort().reverse();
    asc = true;
  }
  else{
    document.querySelector(".btn3").innerHTML = "<i class='fa fa-sort-alpha-asc' aria-hidden='true'>"
    array = array.sort();
    asc = false;
  }
  console.log(array)
  let container = document.querySelector(".container");
  container.innerHTML = "";
  for(i=0;i<array.length;i++){
    let div = document.createElement("div");
    div.classList.add("eachCountry");
    div.innerHTML = array[i];
    container.appendChild(div);
  }
});


