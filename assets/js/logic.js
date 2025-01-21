/* save data to local storage */
function storeLocalStorage (data) {
    localStorage.setItem(`${data}`, JSON.stringify(data))
    }

    /* get data from local storage */
    function readLocalStorage (data) {
    return JSON.parse(localStorage.getItem(`${data}`))
    }
    /* redirect page */
    let redirectURL = '';
    
    const redirectPage = function (url) {
      redirectURL = url;
      location.assign(url);
    };

    



    