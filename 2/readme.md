swiggy : next Js -> server side render.

Main Screen choose food :
https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1

Chinese food : fetch

https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=603438&submitAction=ENTER

pizza : fetch
https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=55473&submitAction=ENTER

https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.54948031836021&lng=73.81723254919052&restaurantId=141352&submitAction=ENTER


* Course issuse : 
    Origin same so browser will permit the request & accept it : swiggy can access swiggy server 
    Swiggy Clone , browser will not. 
    * In Header section ! All permission is given or not given !
    * How to get permission ?
      Browser is blocking So, 3rd party server who will recive the request and we access it from there cause, In that Header will give permision.  
    * proxyUrl : https://cors-anywhere.herokuapp.com/corsdemo


** API request while searching :
searched : ta 
https://www.swiggy.com/dapi/restaurants/search/suggest?lat=28.7040592&lng=77.10249019999999&str=ta&trackingId=undefined&includeIMItem=true