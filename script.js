//api/fruit/all

async function getMobileData(){
    var mobileName = document.getElementById('mobileName').value
   let data = await fetch(`https://api-mobilespecs.azharimm.site/v2/search?query=${mobileName}`)
   alert("please enter mobile name with model to get accurate data")
   let res = await data.json()
   console.log(res)

   var mobileContainer = document.getElementById('mobileContainer')
   mobileContainer.innerHTML = `<div class="row g-0">
   <div class="col-md-4 m-0">
   <img src="${res.data.phones[0].image}" height="250" width="190">
   </div>
   <div class="col-md-8">
     <div class="card-body">
       <b><h5 class="card-title">You Have Entered ${mobileName}</h5></b>
       <b><p class="card-text"><small>Brand Name is: ${res.data.phones[0].brand}</small></p></b>
       <b><p class="card-text"><small>Mobile Name is: ${res.data.phones[0].phone_name}</small></p></b>
       <b><p class="card-text"><small><p class="card-text">Model Name is: ${res.data.phones[0].slug}</p></small></p></b>
       <b><a href="${res.data.phones[0].detail}" class="btn btn-primary">For More Details</a></b><br/>
       <div class="card-footer text-muted">
   Updated just now
 </div>
</div>
       
     </div>
   </div>
   </div>`


}
