/* save data to local storage */
function storeLocalStorage (dataName, data) {
    localStorage.setItem(dataName, JSON.stringify(data))
    }

    /* get data from local storage */
    function readLocalStorage (data) {
    return JSON.parse(localStorage.getItem(data))
    }
    /* redirect page */
    let redirectURL = '';
    
    const redirectPage = function (url) {
      redirectURL = url;
      location.assign(url);
    };

  
    

   
    