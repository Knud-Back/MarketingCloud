<script runat="server">
  Platform.Load("Core","1.1.1");

function dateAdd(date, interval, units) {

  //Backfill of Array.includes
  Array.includes = function(val,arr) {
    for(i=0;i<arr.length;i++){
      if (!r || r == false){r = val == arr[i] ? true: false;}
    }
    return r;
  }

  // Verify if date is a date
  if(!(typeof date.getMonth === 'function'))  
    return 'Not a valid Date';
 
  var ret = new Date(date); //don't change original date

  // Verify if units are positive integers
  // if (units < 1) { return 'Unit needs to be an integer of 1 or higher'; }

  // Verify if correct interval || case insensitive
  var arr = ["y","q","m","w","d","h","mi","s","year","quarter","month","week","day","hour","minute","second"]
  if (!(Array.includes(interval.toLowerCase(),arr))) { return 'Incorrect interval passed'; }

  var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
  switch(String(interval).toLowerCase()) {
    case 'y'      :  ret = new Date(date.getFullYear() + units, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()); checkRollover();  break;
    case 'year'   :  ret = new Date(date.getFullYear() + units, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()); checkRollover();  break;
    case 'q'      :  ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
    case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
    case 'm'      :  ret.setMonth(ret.getMonth() + (units+1)); checkRollover();  break;
    case 'month'  :  ret.setMonth(ret.getMonth() + (units+1)); checkRollover();  break;
    case 'w'      :  ret.setDate(ret.getDate() + 7*units);  break;
    case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
    case 'd'      :  ret.setDate(ret.getDate() + units);  break;
    case 'day'    :  ret.setDate(ret.getDate() + units);  break;
    case 'h'      :  ret.setTime(ret.getTime() + units*3600000);  break;
    case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
    case 'mi'     :  ret.setTime(ret.getTime() + units*60000);  break;
    case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
    case 's'      :  ret.setTime(ret.getTime() + units*1000);  break;
    case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
  }

  return ret;
}

var date = new Date(),
    interval = 'Q',
    units = 3;
var newDate = dateAdd(date,interval,units);
Write('date: ' + date + '<br>');
Write('interval: ' + interval + '<br>');
Write('units: ' + units + '<br>');
Write('newDate: ' + newDate + '<br>');  
  
  
</script>
