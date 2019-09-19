var databackup;
var link;
var titlebox;
if(navigator.onLine) { 
    var content = document.getElementById('content');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (xhr.readyState==4 && xhr.status==200)
    {
        var data = JSON.parse(xhr.responseText);
        var itemsContainer = document.createElement('DIV');

        if(data.status == 'ok') {
            // for( var i=0,t = data.items.length ; i < t ; ++i ){
                item = data.items[Math.floor((Math.random() * 10))];
                link = item.enclosure.link;
                //alert(link);
                //alert(link.substring(0,link.length-11));
                
                link=link.substring(0,link.length-11)+"630_420f_wn.jpg";
                //alert(link);
                // var itemEnclosureElement = document.querySelector('body').style.backgroundImage="url("+ link +")";
                titlebox=item.title.substring(11);  
                         
            }
            else {
                
            }
        }
    };
    
    xhr.open(
        'GET',
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.westfalen-blatt.de%2Frss%2Ffeed%2Fwb_owl_lokales_kreis_paderborn_paderborn',
        true
    );
    xhr.send();
} else {
    
}

