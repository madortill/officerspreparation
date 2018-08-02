(function() {
  angular.module("officerspreparation").factory("TrainingService", function() {
    // Might use a resource here that returns a JSON array

    var strengthProgram = {
      difficultylevels: [
        {
          difficulty: "קל",
          trainingList: [
            {
              trainingName: "קל - אימון1",
              exercises: [
                {
                  exerciseName: "קל - אימון1 -- תרגיל1",
                  gif: "img/GIF2",
                  explanation:
                    "מדינת ישראל תהא פתוחה לעלייה יהודית ולקיבוץ גלויות, תשקוד על פיתוח הארץ לטובת כל יושביה, תהא מושתתת על יסודות החירות, הצדק והשלום לאור חזונם של נביאי ישראל.</br>תקיים שוויון זכויות חברתי ומדיני גמור לכל אזרחיה בלי הבדל דת, גזע ומין, תבטיח חופש דת, מצפון, לשון, חינוך ותרבות.</br> קל - אימון1 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל2",
                  gif: "img/GIF",
                  explanation: "קל - אימון1 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל3",
                  gif: "img/mountaineer",
                  explanation: "קל - אימון1 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל4",
                  gif: "",
                  explanation: "קל - אימון1 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל5",
                  gif: "",
                  explanation: "קל - אימון1 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל6",
                  gif: "",
                  explanation: "קל - אימון1 -- תרגיל6 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל1",
                  gif: "img/GIF2",
                  explanation:
                    "מדינת ישראל תהא פתוחה לעלייה יהודית ולקיבוץ גלויות, תשקוד על פיתוח הארץ לטובת כל יושביה, תהא מושתתת על יסודות החירות, הצדק והשלום לאור חזונם של נביאי ישראל.</br>תקיים שוויון זכויות חברתי ומדיני גמור לכל אזרחיה בלי הבדל דת, גזע ומין, תבטיח חופש דת, מצפון, לשון, חינוך ותרבות.</br> קל - אימון1 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל2",
                  gif: "img/GIF",
                  explanation: "קל - אימון1 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל3",
                  gif: "img/mountaineer",
                  explanation: "קל - אימון1 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל4",
                  gif: "",
                  explanation: "קל - אימון1 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל5",
                  gif: "",
                  explanation: "קל - אימון1 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון1 -- תרגיל6",
                  gif: "",
                  explanation: "קל - אימון1 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קל - אימון2",
              exercises: [
                {
                  exerciseName: "קל - אימון2 -- תרגיל1",
                  gif: "",
                  explanation: "קל - אימון2 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון2 -- תרגיל2",
                  gif: "",
                  explanation: "קל - אימון2 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון2 -- תרגיל3",
                  gif: "",
                  explanation: "קל - אימון2 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון2 -- תרגיל4",
                  gif: "",
                  explanation: "קל - אימון2 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון2 -- תרגיל5",
                  gif: "",
                  explanation: "קל - אימון2 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון2 -- תרגיל6",
                  gif: "",
                  explanation: "קל - אימון2 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קל - אימון3",
              exercises: [
                {
                  exerciseName: "קל - אימון3 -- תרגיל1",
                  gif: "",
                  explanation: "קל - אימון3 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון3 -- תרגיל2",
                  gif: "",
                  explanation: "קל - אימון3 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון3 -- תרגיל3",
                  gif: "",
                  explanation: "קל - אימון3 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון3 -- תרגיל4",
                  gif: "",
                  explanation: "קל - אימון3 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון3 -- תרגיל5",
                  gif: "",
                  explanation: "קל - אימון3 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון3 -- תרגיל6",
                  gif: "",
                  explanation: "קל - אימון3 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קל - אימון4",
              exercises: [
                {
                  exerciseName: "קל - אימון4 -- תרגיל1",
                  gif: "47",
                  explanation: "קל - אימון4 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון4 -- תרגיל2",
                  gif: "",
                  explanation: "קל - אימון4 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון4 -- תרגיל3",
                  gif: "",
                  explanation: "קל - אימון4 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון4 -- תרגיל4",
                  gif: "",
                  explanation: "קל - אימון4 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון4 -- תרגיל5",
                  gif: "",
                  explanation: "קל - אימון4 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון4 -- תרגיל6",
                  gif: "",
                  explanation: "קל - אימון4 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קל - אימון5",
              exercises: [
                {
                  exerciseName: "קל - אימון5 -- תרגיל1",
                  gif: "",
                  explanation: "קל - אימון5 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון5 -- תרגיל2",
                  gif: "",
                  explanation: "קל - אימון5 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון5 -- תרגיל3",
                  gif: "",
                  explanation: "קל - אימון5 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון5 -- תרגיל4",
                  gif: "",
                  explanation: "קל - אימון5 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון5 -- תרגיל5",
                  gif: "",
                  explanation: "קל - אימון5 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון5 -- תרגיל6",
                  gif: "",
                  explanation: "קל - אימון5 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קל - אימון6",
              exercises: [
                {
                  exerciseName: "קל - אימון6 -- תרגיל1",
                  gif: "",
                  explanation: "קל - אימון6 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון6 -- תרגיל2",
                  gif: "",
                  explanation: "קל - אימון6 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון6 -- תרגיל3",
                  gif: "",
                  explanation: "קל - אימון6 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון6 -- תרגיל4",
                  gif: "",
                  explanation: "קל - אימון6 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון6 -- תרגיל5",
                  gif: "",
                  explanation: "קל - אימון6 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קל - אימון6 -- תרגיל6",
                  gif: "",
                  explanation: "קל - אימון6 -- תרגיל6 - הסבר קצר"
                }
              ]
            }
          ]
        },
        {
          difficulty: "בינוני",
          trainingList: [
            {
              trainingName: "בינוני - אימון1",
              exercises: [
                {
                  exerciseName: "בינוני - אימון1 -- תרגיל1",
                  gif: "",
                  explanation: "בינוני - אימון1 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון1 -- תרגיל2",
                  gif: "",
                  explanation: "בינוני - אימון1 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון1 -- תרגיל3",
                  gif: "",
                  explanation: "בינוני - אימון1 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון1 -- תרגיל4",
                  gif: "",
                  explanation: "בינוני - אימון1 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון1 -- תרגיל5",
                  gif: "",
                  explanation: "בינוני - אימון1 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון1 -- תרגיל6",
                  gif: "",
                  explanation: "בינוני - אימון1 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "בינוני - אימון2",
              exercises: [
                {
                  exerciseName: "בינוני - אימון2 -- תרגיל1",
                  gif: "",
                  explanation: "בינוני - אימון2 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון2 -- תרגיל2",
                  gif: "",
                  explanation: "בינוני - אימון2 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון2 -- תרגיל3",
                  gif: "",
                  explanation: "בינוני - אימון2 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון2 -- תרגיל4",
                  gif: "",
                  explanation: "בינוני - אימון2 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון2 -- תרגיל5",
                  gif: "",
                  explanation: "בינוני - אימון2 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון2 -- תרגיל6",
                  gif: "",
                  explanation: "בינוני - אימון2 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "בינוני - אימון3",
              exercises: [
                {
                  exerciseName: "בינוני - אימון3 -- תרגיל1",
                  gif: "",
                  explanation: "בינוני - אימון3 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון3 -- תרגיל2",
                  gif: "",
                  explanation: "בינוני - אימון3 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון3 -- תרגיל3",
                  gif: "",
                  explanation: "בינוני - אימון3 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון3 -- תרגיל4",
                  gif: "",
                  explanation: "בינוני - אימון3 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון3 -- תרגיל5",
                  gif: "",
                  explanation: "בינוני - אימון3 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון3 -- תרגיל6",
                  gif: "",
                  explanation: "בינוני - אימון3 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "בינוני - אימון4",
              exercises: [
                {
                  exerciseName: "בינוני - אימון4 -- תרגיל1",
                  gif: "",
                  explanation: "בינוני - אימון4 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון4 -- תרגיל2",
                  gif: "",
                  explanation: "בינוני - אימון4 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון4 -- תרגיל3",
                  gif: "",
                  explanation: "בינוני - אימון4 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון4 -- תרגיל4",
                  gif: "",
                  explanation: "בינוני - אימון4 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון4 -- תרגיל5",
                  gif: "",
                  explanation: "בינוני - אימון4 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון4 -- תרגיל6",
                  gif: "",
                  explanation: "בינוני - אימון4 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "בינוני - אימון5",
              exercises: [
                {
                  exerciseName: "בינוני - אימון5 -- תרגיל1",
                  gif: "",
                  explanation: "בינוני - אימון5 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון5 -- תרגיל2",
                  gif: "",
                  explanation: "בינוני - אימון5 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון5 -- תרגיל3",
                  gif: "",
                  explanation: "בינוני - אימון5 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון5 -- תרגיל4",
                  gif: "",
                  explanation: "בינוני - אימון5 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון5 -- תרגיל5",
                  gif: "",
                  explanation: "בינוני - אימון5 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון5 -- תרגיל6",
                  gif: "",
                  explanation: "בינוני - אימון5 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "בינוני - אימון6",
              exercises: [
                {
                  exerciseName: "בינוני - אימון6 -- תרגיל1",
                  gif: "",
                  explanation: "בינוני - אימון6 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון6 -- תרגיל2",
                  gif: "",
                  explanation: "בינוני - אימון6 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון6 -- תרגיל3",
                  gif: "",
                  explanation: "בינוני - אימון6 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון6 -- תרגיל4",
                  gif: "",
                  explanation: "בינוני - אימון6 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון6 -- תרגיל5",
                  gif: "",
                  explanation: "בינוני - אימון6 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "בינוני - אימון6 -- תרגיל6",
                  gif: "",
                  explanation: "בינוני - אימון6 -- תרגיל6 - הסבר קצר"
                }
              ]
            }
          ]
        },
        {
          difficulty: "קשה",
          trainingList: [
            {
              trainingName: "קשה - אימון1",
              exercises: [
                {
                  exerciseName: "קשה - אימון1 -- תרגיל1",
                  gif: "",
                  explanation: "קשה - אימון1 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון1 -- תרגיל2",
                  gif: "",
                  explanation: "קשה - אימון1 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון1 -- תרגיל3",
                  gif: "",
                  explanation: "קשה - אימון1 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון1 -- תרגיל4",
                  gif: "",
                  explanation: "קשה - אימון1 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון1 -- תרגיל5",
                  gif: "",
                  explanation: "קשה - אימון1 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון1 -- תרגיל6",
                  gif: "",
                  explanation: "קשה - אימון1 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קשה - אימון2",
              exercises: [
                {
                  exerciseName: "קשה - אימון2 -- תרגיל1",
                  gif: "",
                  explanation: "קשה - אימון2 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון2 -- תרגיל2",
                  gif: "",
                  explanation: "קשה - אימון2 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון2 -- תרגיל3",
                  gif: "",
                  explanation: "קשה - אימון2 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון2 -- תרגיל4",
                  gif: "",
                  explanation: "קשה - אימון2 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון2 -- תרגיל5",
                  gif: "",
                  explanation: "קשה - אימון2 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון2 -- תרגיל6",
                  gif: "",
                  explanation: "קשה - אימון2 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קשה - אימון3",
              exercises: [
                {
                  exerciseName: "קשה - אימון3 -- תרגיל1",
                  gif: "",
                  explanation: "קשה - אימון3 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון3 -- תרגיל2",
                  gif: "",
                  explanation: "קשה - אימון3 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון3 -- תרגיל3",
                  gif: "",
                  explanation: "קשה - אימון3 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון3 -- תרגיל4",
                  gif: "",
                  explanation: "קשה - אימון3 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון3 -- תרגיל5",
                  gif: "",
                  explanation: "קשה - אימון3 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון3 -- תרגיל6",
                  gif: "",
                  explanation: "קשה - אימון3 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קשה - אימון4",
              exercises: [
                {
                  exerciseName: "קשה - אימון4 -- תרגיל1",
                  gif: "",
                  explanation: "קשה - אימון4 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון4 -- תרגיל2",
                  gif: "",
                  explanation: "קשה - אימון4 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון4 -- תרגיל3",
                  gif: "",
                  explanation: "קשה - אימון4 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון4 -- תרגיל4",
                  gif: "",
                  explanation: "קשה - אימון4 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון4 -- תרגיל5",
                  gif: "",
                  explanation: "קשה - אימון4 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון4 -- תרגיל6",
                  gif: "",
                  explanation: "קשה - אימון4 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קשה - אימון5",
              exercises: [
                {
                  exerciseName: "קשה - אימון5 -- תרגיל1",
                  gif: "",
                  explanation: "קשה - אימון5 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון5 -- תרגיל2",
                  gif: "",
                  explanation: "קשה - אימון5 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון5 -- תרגיל3",
                  gif: "",
                  explanation: "קשה - אימון5 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון5 -- תרגיל4",
                  gif: "",
                  explanation: "קשה - אימון5 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון5 -- תרגיל5",
                  gif: "",
                  explanation: "קשה - אימון5 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון5 -- תרגיל6",
                  gif: "",
                  explanation: "קשה - אימון5 -- תרגיל6 - הסבר קצר"
                }
              ]
            },
            {
              trainingName: "קשה - אימון6",
              exercises: [
                {
                  exerciseName: "קשה - אימון6 -- תרגיל1",
                  gif: "",
                  explanation: "קשה - אימון6 -- תרגיל1 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון6 -- תרגיל2",
                  gif: "",
                  explanation: "קשה - אימון6 -- תרגיל2 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון6 -- תרגיל3",
                  gif: "",
                  explanation: "קשה - אימון6 -- תרגיל3 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון6 -- תרגיל4",
                  gif: "",
                  explanation: "קשה - אימון6 -- תרגיל4 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון6 -- תרגיל5",
                  gif: "",
                  explanation: "קשה - אימון6 -- תרגיל5 - הסבר קצר"
                },
                {
                  exerciseName: "קשה - אימון6 -- תרגיל6",
                  gif: "",
                  explanation: "קשה - אימון6 -- תרגיל6 - הסבר קצר"
                }
              ]
            }
          ]
        }
      ]
    };
    var currentDifficulty = {};
    var currentExercise = {};
    var currentTraining = {};

    return {
      strengthProgram: strengthProgram,
      currentDifficulty: currentDifficulty,
      currentTraining: currentTraining,
      currentExercise: currentExercise
    };
  });
})();
