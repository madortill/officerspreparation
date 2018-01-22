(function () {
  angular.module('starter').factory('DataService', function () {
    // Might use a resource here that returns a JSON array

    var data = {
      book: [{
          value: "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text "
        },
        {
          value: "שטח כינוס"
        },
        {
          value: "חמ''ל פר''ח"
        },
        {
          value: "דף מפקד"
        },
        {
          value: "פעילות הכנה מנטאלית ערכית"
        },
        {
          value: "ק.חינוך קולטת"
        },
        {
          value: "יחידה חוברת"
        },
        {
          value: "קצינים משוחחים"
        },
        {
          value: "מעודכנים לשטח"
        }

      ]
    }


    return {
      data: data
    };
  });
})();
