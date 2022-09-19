
function parseAndCreatePage(rsp) {
    let s = "";
   
    s = "total number is: " + rsp.photos.photo.length + "<br/>";

    // http://farm{farm-id}.static.flickr.com/{server-id}/{id}_{secret}_[mstb].jpg
    // http://www.flickr.com/photos/{user-id}/{photo-id}

    for (let i=0; i < XXXX; i++) {
        photo = XXXX;
        t_url = "http://farm" + XXXX + ".static.flickr.com/" + XXXX + "/" + XXXX + "_" + XXXX + "_" + "t.jpg";
        p_url = "http://www.flickr.com/photos/" + XXXX + "/" + XXXX;
        s +=  '<a href="' + XXXX + '">' + '<img alt="'+ XXXX + '"src="' + XXXX + '"/>' + '</a>';
    }
    
    const appDiv = document.getElementById("app"); 
    appDiv.innerHTML = s; 
} 

const base = "https://api.flickr.com/services/rest/?";
const query = "&method=flickr.photos.search&api_key=e7f00e0ee4c50131a077ab181fca35a9&tags=golden-retriever&per-page=50&format=json&nojsoncallback=1";
const url = base + query; 

fetch(url) 
    .then( (response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Network response was not ok.");
    })
    .then( (rsp) => parseAndCreatePage(rsp))
    .catch(function(error) {
        console.log("There has been a problem with your fetch operation: ",error.message);
    });
