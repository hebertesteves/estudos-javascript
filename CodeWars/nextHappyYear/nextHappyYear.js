function nextHappyYear(year) {
   year += 1; 
   while (new Set(String(year)).size < 4) {
       year += 1; 
   }
   return year;  
}


