(function() {
  angular.module("officerspreparation").factory("TrainingService", function() {
    // Might use a resource here that returns a JSON array

    var runProgram = {
      difficultyRunlevels: [
        {
          difficulty: "רמה 1",
          weeksList: [
            {
              weekNumber: "שבוע ראשון",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation: "מדידת ריצה 1 ק''מ"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation:
                    "אימון הפוגות: 100 מטר ריצה כפול 10 פעמים בקצב מהיר + 500 מטר הליכת שחרור (דקה וחצי מנוחה בין כל תרגיל)"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation: "ריצת/הליכה – 2.5 קילומטר בקצב קליל"
                }
              ]
            },
            {
              weekNumber: "שבוע שני",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation:
                    "ריצת שינויי קצב- 10 שניות מהיר ו50 שניות לאט - 12 דקות"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "ריצת/הליכה – 3 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: 200 מטר רוצה - 8 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            },
            {
              weekNumber: "שבוע שלישי",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation: "ריצת שינויי קצב - 15 דקות"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "ריצת/הליכה – 3.5 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: 300 מטר ריצה 6 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            },
            {
              weekNumber: "שבוע רביעי",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation: "ריצת/הליכה – 3.5 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "מדידת 3 ק''מ מהיר"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: 400 מטר ריצה 6 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            }
          ]
        },
        {
          difficulty: "רמה 2",
          weeksList: [
            {
              weekNumber: "שבוע ראשון",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation: "מדידת ריצה 1 ק''מ"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation:
                    "אימון הפוגות: 200 מטר ריצה 10 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation: "ריצת/הליכה – 3 קילומטר בקצב קליל"
                }
              ]
            },
            {
              weekNumber: "שבוע שני",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation:
                    "ריצת שינוי קצב - 10 שניות מהיר ו50 שניות לאט - 14 דק'"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "ריצת/הליכה – 3.5 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: 300 מטר ריצה 6 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            },
            {
              weekNumber: "שבוע שלישי",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation:
                    "ריצת שינוי קצב - 10 שניות מהיר ו50 שניות לאט - 18 דק'"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "ריצת/הליכה – 4 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: 500 מטר ריצה 6 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            },
            {
              weekNumber: "שבוע רביעי",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation: "ריצת/הליכה – 4.5 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "מדידת ריצה 3 ק''מ בקצב מהיר"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: 800 מטר ריצה 5 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            }
          ]
        },
        {
          difficulty: "רמה 3",
          weeksList: [
            {
              weekNumber: "שבוע ראשון",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation: "מדידת ריצה 3 ק''מ בקצב מהיר"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation:
                    "אימון הפוגות: 500 מטר ריצה 6 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation: "ריצת/הליכה – 4 קילומטר בקצב קליל"
                }
              ]
            },
            {
              weekNumber: "שבוע שני",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation:
                    "ריצת שינוי קצב - 10 שניות מהיר ו50 שניות לאט - 20 דק"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "ריצת/הליכה – 4.5 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: +600 מטר ריצה 5 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            },
            {
              weekNumber: "שבוע שלישי",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation:
                    "ריצת שינוי קצב - 10 שניות מהיר ו50 שניות לאט - 25 דק"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "ריצת – 4 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: +800 מטר ריצה 5 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            },
            {
              weekNumber: "שבוע רביעי",
              runTrainingList: [
                {
                  trainingNumber: "אימון - 1",
                  explanation: "ריצת – 4.5 קילומטר בקצב קליל"
                },
                {
                  trainingNumber: "אימון - 2",
                  explanation: "מדידת ריצה 3 ק''מ מהיר"
                },
                {
                  trainingNumber: "אימון - 3",
                  explanation:
                    "אימון הפוגות: +1000 מטר ריצה 4 פעמים בקצב מהיר + 500 מטר שחרור בסוף (דקה וחצי מנוחה בין תרגיל לתרגיל)"
                }
              ]
            }
          ]
        }
      ]
    };

    var strengthProgram = {
      difficultylevels: [
        {
          difficulty: "קל",
          trainingList: [
            {
              trainingName: "קל - אימון1",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "20 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "img/sportProgram--gifs/matsavTwo.png",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/knee pushups.gif",
                  repeats: "8X3",
                  explanation:
                    "שלשה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "img/sportProgram--gifs/moutain climber.gif",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "img/sportProgram--gifs/seated squat.png",
                  repeats: "20 שניות",
                  explanation: "סקוואט קיר סטטי"
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "img/sportProgram--gifs/mikra kidmy.gif",
                  repeats: "8X2",
                  explanation: "2 סטים של 8. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "img/sportProgram--gifs/haramot agan.gif",
                  repeats: "8X2",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון2",
              exercises: [
                {
                  exerciseName: "פלאנק ימין",
                  gif: "img/sportProgram--gifs/right plank.png",
                  repeats: "20 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק שמאל",
                  gif: "img/sportProgram--gifs/left plank.png",
                  repeats: "20 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "img/sportProgram--gifs/matsavTwo.png",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/knee pushups.gif",
                  repeats: "8X3",
                  explanation:
                    "שלשה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "img/sportProgram--gifs/moutain climber.gif",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "img/sportProgram--gifs/seated squat.png",
                  repeats: "20 שניות  2X",
                  explanation:
                    "שני סטים של עשרים שניות. \n מנוחה של 30 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "img/sportProgram--gifs/mikra kidmy.gif",
                  repeats: "8X2",
                  explanation: "2 סטים של 8. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "img/sportProgram--gifs/haramot agan.gif",
                  repeats: "8X2",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון3",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "img/sportProgram--gifs/matsavTwo.png",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/knee pushups.gif",
                  repeats: "8X3",
                  explanation:
                    "שלשה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "img/sportProgram--gifs/moutain climber.gif",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "img/sportProgram--gifs/seated squat.png",
                  repeats: "20 שניות  2X",
                  explanation:
                    "שני סטים של עשרים שניות. \n מנוחה של 30 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "img/sportProgram--gifs/mikra kidmy.gif",
                  repeats: "8X2",
                  explanation: "2 סטים של 8. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "img/sportProgram--gifs/haramot agan.gif",
                  repeats: "8X2",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון4",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "20 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "img/sportProgram--gifs/",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/",
                  repeats: "8X3",
                  explanation:
                    "שלשה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "img/sportProgram--gifs/",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט",
                  gif: "img/sportProgram--gifs/",
                  repeats: "8X2",
                  explanation: "2 סטים של 8. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "img/sportProgram--gifs/",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "img/sportProgram--gifs/",
                  repeats: "8X2",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון5",
              exercises: [
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "10X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "8X3",
                  explanation:
                    "שלשה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט",
                  gif: "000000",
                  repeats: "8X2",
                  explanation: "2 סטים של 8. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "8X2",
                  explanation: "2 סטים של 8. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון6",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "8X3",
                  explanation:
                    "שלשה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "8X3",
                  explanation: "3 סטים של 8. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "8X3",
                  explanation: "3 סטים של 8. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון7",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "8X4",
                  explanation:
                    "ארבעה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון8",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "8X4",
                  explanation:
                    "ארבעה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון9",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "8X4",
                  explanation:
                    "ארבעה סטים של שמונה. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון10",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "45 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון11",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "סקוואט",
                  gif: "000000",
                  repeats: "12X3",
                  explanation:
                    "3 סטים של 12 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קל - אימון12",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "סקוואט",
                  gif: "000000",
                  repeats: "12X3",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
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
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "8X3",
                  explanation: "3 סטים של 8. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון2",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "8X3",
                  explanation: "3 סטים של 8. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון3",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות ברכיים",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "8X3",
                  explanation: "3 סטים של 8. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מטפס הרים",
                  gif: "",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 5 סטים של 30 שניות \n45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון4",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון5",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "מצב 2 - סטטי",
                  gif: "sportProgram--gifs/img/GIF",
                  repeats: "30 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט.\n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא "
                },
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "30 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון6",
              exercises: [
                {
                  exerciseName: "פלאנק (בטן סטטית)",
                  gif: "img/sportProgram--gifs/plank.png",
                  repeats: "40 שניות  5X",
                  explanation:
                    " 45 שניות מנוחה בין סט לסט. \n נשארים בתנוחה הסטטית למשך כל זמן העבודה כאשר משקל הגוף נישא על הזרועות, המרפקים, וקצות אצבעות הרגליים. "
                },
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "45 שניות  3X",
                  explanation:
                    "שלשה סטים של שלושים שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון7",
              exercises: [
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "20X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 20 \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "45 שניות  3X",
                  explanation:
                    "3 סטים של 45 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון8",
              exercises: [
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "סקוואט",
                  gif: "000000",
                  repeats: "12X3",
                  explanation: "3 סטים של 12 . \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "20 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "20 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                }
              ]
            },
            {
              trainingName: "בינוני - אימון9",
              exercises: [
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "20X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 25 \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "45 שניות  3X",
                  explanation:
                    "3 סטים של 45 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "20 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "20 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                }
              ]
            },
            {
              trainingName: "בינוני - אימון10",
              exercises: [
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "20X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 20 \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "45 שניות  3X",
                  explanation:
                    "3 סטים של 45 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "10X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון11",
              exercises: [
                {
                  exerciseName: "שכיבות סמיכה",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "20X3",
                  explanation:
                    " 3 סטים של 20 \n שכיבות סמיכה הרמת יד \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "45 שניות  3X",
                  explanation:
                    "3 סטים של 45 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "10X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "בינוני - אימון12",
              exercises: [
                {
                  exerciseName: "מתח",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
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
                  exerciseName: "מתח",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "20 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                }
              ]
            },
            {
              trainingName: "קשה - אימון2",
              exercises: [
                {
                  exerciseName: "עליית חבל",
                  gif: "",
                  repeats: "3.5 מ'",
                  explanation:
                    "ניתן למצוא במגרשים/מגרשים של בוחן מסלול בבסיסים."
                },
                {
                  exerciseName: "עליית כוח",
                  gif: "",
                  repeats: "3 סטים",
                  explanation: ""
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "10X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "60 שניות  3X",
                  explanation:
                    "3 סטים של 60 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "25X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 25 \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קשה - אימון3",
              exercises: [
                {
                  exerciseName: "מתח",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קשה - אימון4",
              exercises: [
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קשה - אימון5",
              exercises: [
                {
                  exerciseName: "עליית חבל",
                  gif: "",
                  repeats: "3.5 מ'",
                  explanation:
                    "ניתן למצוא במגרשים/מגרשים של בוחן מסלול בבסיסים."
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "10X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "60 שניות  3X",
                  explanation:
                    "3 סטים של 60 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "25X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 25 \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                }
              ]
            },
            {
              trainingName: "קשה - אימון6",
              exercises: [
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "45 שניות  3X",
                  explanation:
                    "3 סטים של 45 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "מכרע קדמי",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                }
              ]
            },
            {
              trainingName: "קשה - אימון7",
              exercises: [
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "עליית חבל",
                  gif: "",
                  repeats: "3.5 מ'",
                  explanation:
                    "ניתן למצוא במגרשים/מגרשים של בוחן מסלול בבסיסים."
                },
                {
                  exerciseName: "עליית כוח",
                  gif: "",
                  repeats: "3 סטים",
                  explanation: ""
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "10X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "60 שניות  3X",
                  explanation:
                    "3 סטים של 60 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "25X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 25 \n מנוחה של 45 שניות בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קשה - אימון8",
              exercises: [
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "עליית חבל",
                  gif: "",
                  repeats: "6 מ'",
                  explanation:
                    "ניתן למצוא במגרשים/מגרשים של בוחן מסלול בבסיסים."
                },
                {
                  exerciseName: "עליית כוח",
                  gif: "",
                  repeats: "3 סטים",
                  explanation: ""
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "10X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "10X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "60 שניות  3X",
                  explanation:
                    "3 סטים של 60 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "25X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 25 \n מנוחה של 45 שניות בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קשה - אימון9",
              exercises: [
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "עליית חבל",
                  gif: "",
                  repeats: "6 מ'",
                  explanation:
                    "ניתן למצוא במגרשים/מגרשים של בוחן מסלול בבסיסים."
                },
                {
                  exerciseName: "עליית כוח",
                  gif: "",
                  repeats: "3 סטים",
                  explanation: ""
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "15X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "60 שניות  3X",
                  explanation:
                    "3 סטים של 60 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "30X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 30 \n מנוחה של 45 שניות בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קשה - אימון10",
              exercises: [
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "עליית חבל",
                  gif: "",
                  repeats: "6 מ'",
                  explanation:
                    "ניתן למצוא במגרשים/מגרשים של בוחן מסלול בבסיסים."
                },
                {
                  exerciseName: "עליית כוח",
                  gif: "",
                  repeats: "3 סטים",
                  explanation: ""
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "15X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "60 שניות  3X",
                  explanation:
                    "3 סטים של 60 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "30X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 30 \n מנוחה של 45 שניות בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קשה - אימון11",
              exercises: [
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "עליית חבל",
                  gif: "img/sportProgram--gifs/rope climbing.gif",
                  repeats: "6 מ'",
                  explanation:
                    "ניתן למצוא במגרשים/מגרשים של בוחן מסלול בבסיסים."
                },
                {
                  exerciseName: "עליית כוח",
                  gif: "",
                  repeats: "3 סטים",
                  explanation: ""
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "15X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "60 שניות  3X",
                  explanation:
                    "3 סטים של 60 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "30X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 30 \n מנוחה של 45 שניות בין סט לסט."
                }
              ]
            },
            {
              trainingName: "קשה - אימון12",
              exercises: [
                {
                  exerciseName: "מתח עם ווסט",
                  gif: "",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "מקבילים",
                  gif: "000000",
                  repeats: "4 חלקים",
                  explanation:
                    " 100 אחוז מיכולת , 75 אחוז מיכולת מרבית, 50 אחוז מיכולת מרבית, 100 אחוז מיכולת מרבית."
                },
                {
                  exerciseName: "סקוואט קפיצה",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (ימין)"
                },
                {
                  exerciseName: "פלאנק צידי",
                  gif: "",
                  repeats: "40 שניות",
                  explanation: "פלאנק צידי (שמאל)"
                },
                {
                  exerciseName: "פלאנק",
                  gif: "",
                  repeats: "60 שניות",
                  explanation: ""
                },
                {
                  exerciseName: "הרמת אגן",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "עליית חבל",
                  gif: "",
                  repeats: "6 מ'",
                  explanation:
                    "ניתן למצוא במגרשים/מגרשים של בוחן מסלול בבסיסים."
                },
                {
                  exerciseName: "עליית כוח",
                  gif: "",
                  repeats: "3 סטים",
                  explanation: ""
                },
                {
                  exerciseName: "ג'קסונים",
                  gif: "",
                  repeats: "12X3",
                  explanation: "3 סטים של 12. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "כפיפה צידית",
                  gif: "",
                  repeats: "15X2",
                  explanation: "2 סטים של 10. \n 45 שניות מנוחה בין סט לסט."
                },
                {
                  exerciseName: "סקוואט קיר",
                  gif: "000000",
                  repeats: "60 שניות  3X",
                  explanation:
                    "3 סטים של 60 שניות. \n מנוחה של 45 שניות בין סט לסט."
                },
                {
                  exerciseName: "שכיבות סמיכה - שלילי",
                  gif: "img/sportProgram--gifs/mountaineer.gif",
                  repeats: "30X3",
                  explanation:
                    " בשיפוע שלילי עליך לבצע שכיבות סמיכה, 3 סטים של 30 \n מנוחה של 45 שניות בין סט לסט."
                }
              ]
            }
          ]
        }
      ]
    };
    //strength training
    var currentDifficulty = {};
    var currentExercise = {};
    var currentTraining = {};

    //run training
    var currentRunLevel = {};
    var currentWeek = {};

    return {
      strengthProgram: strengthProgram,
      currentDifficulty: currentDifficulty,
      currentTraining: currentTraining,
      currentExercise: currentExercise,
      runProgram: runProgram,
      currentRunLevel: currentRunLevel,
      currentWeek: currentWeek
    };
  });
})();
