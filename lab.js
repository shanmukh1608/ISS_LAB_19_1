var showGithubProfile = function() {
    var elem = document.getElementById('gH');
    var name = elem.value;
    if(!name)
    {
        window.alert("Enter a github handle!");
    }
    else{
        var link = 'http://github.com/'+name; 
        window.open(link);
    }    
}