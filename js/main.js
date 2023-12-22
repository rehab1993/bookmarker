
var bookMarkInput = document.getElementById('bookmark');
var bookMarkURL = document.getElementById('bookmarkUrl');
var visitBtn  = document.getElementById('visit')



if(localStorage.getItem('sites')!= null){
allSites = JSON.parse(localStorage.getItem('sites'));
displaySite(allSites)

}else{
    var allSites = [];
}

function newSite(){
    if(validateSiteName()==true && validateURL()==true){
        var site = {
            name : bookMarkInput.value,
            url : bookMarkURL.value
        }
    
        allSites.push(site)  ;
        localStorage.setItem('sites',JSON.stringify(allSites));
        displaySite(allSites)
        clear()
        swal('Thank You,You write correct site')

    }else{
       swal('Please write correct name and correct site..')
    }
    
    }
 

function clear(){
    bookMarkInput.value = '';
    bookMarkURL.value = ''
}


function displaySite(arr){
var trs = ``;
for(var i=1 ; i<arr.length ; i++){
trs += ` <tr>
<td>${i}</td>
<td>${arr[i].name}</td>
<td> 
<a class="btn btn-success"  id="visit" href="http://${arr[i].url}" target = -blank>
<i class="fa-solid fa-eye pe-2"></i> 
Visit</a>



</td>
<td>
<button class="btn btn-danger" onclick="deleteSite(${i})">
<i class="fa-solid fa-trash-can pe-2"></i>
Delete</button>
</td>
</tr>`
    };
   document.getElementById('tableContent').innerHTML = trs
   

}

function deleteSite(idx){
//    console.log(idx);
    allSites.splice(idx,1);
    localStorage.setItem('sites',JSON.stringify(allSites));
    displaySite(allSites);

}

function validateSiteName(){
    var regx = /^[A-Za-z]{3,10}$/;
    return  regx.test(bookMarkInput.value)
   
}
function validateURL(){
    var regx = /^www\.[a-z]{3,20}\.com$/;
    return regx.test(bookMarkURL.value);

}
 



