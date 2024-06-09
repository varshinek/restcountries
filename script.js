var res = fetch("https://restcountries.com/v3.1/all")
res.then((data) => {
    return data.json()
}).then((data1) => foo(data1)).catch((error) => console.log(error))

var container = document.createElement("div");
container.className = "container";

var h1 = document.createElement("h1");
h1.className = "text-center";
h1.setAttribute("id","title")
h1.innerHTML = "Countries Weather Details";

var row = document.createElement("div");
row.className = "row";

function foo(data1)
{
  console.log(data1);
  for(var i = 0;i<data1.length;i++)
  {
    var col = document.createElement("div");
    col.className = "col-lg-4 col-sm-6 col-md-4 col-xl-4";
    col.innerHTML = 
    `<div class="card h-100">
      <div class="card-header">
        <h5 class="card-title text-center">${data1[i].name.common}
      </div>

      <div class="card-body">

        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <p class="card-text">Capital : ${data1[i].capital}</p>
        <div class="card-text">Region : ${data1[i].region}</div>
        <p class="card-text">Country Code : ${data1[i].cca3}</p>
        <button class ="btn btn-outline-light" data-lat="${data1[i].latlng[0]}">Click For Weather </button>
        <p class="card-text latitude"></p>
      </div>
    </div>`;
    row.append(col);
  }
  container.append(h1);
  container.append(row);
  document.body.append(container);
  
  var buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => {
    button.addEventListener("click", function()
    {
      var latitude = this.getAttribute("data-lat");
      var latitudeText = this.nextElementSibling;
      latitudeText.innerHTML = `Latitude: ${latitude}`;
    });
  });

}