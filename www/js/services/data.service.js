(function () {
  angular.module('officerspreparation').factory('DataService', function () {
    // Might use a resource here that returns a JSON array
    var book = {
      topics: [{
          index: 0,
          name: "ישראל : תעודת זהות",
          subjects: [{
              name: "פתיחה: מדינת ישראל כמדינה יהודית ודמוקרטית",
              topicName: '1_1opening'
            },
            {
              name: "יסודות המשטר הדמוקרטי",
              topicName: '1_2basicsDemocracy'
            },
            {
              name: "סמלים לאומיים",
              topicName: "1_3nationalSymbols"
            },
            {
              name: "סיכום",
              topicName: "1_4summary"
            }
          ]
        },
        {
          index: 1,
          name: "הפסיפס הישראלי",
          subjects: [{
              name: "פתיחה: תרבות ואמונה בישראל",
              topicName: '2_1CultureAndFaithInIsrael'
            },
            {
              name: "עולם האמונה היהודי: מושגים בסיסיים",
              topicName: '2_2TheWorldOfJewishFaith'
            },
            {
              name: "מיעוטים במדינת ישראל",
              topicName: '2_3MinoritiesInTheStateOfIsrael'
            },
            {
              name: "לוח השנה הישראלי-יהודי: חגים ומועדים",
              topicName: '2_4TheJewish-IsraeliCalendarHolidaysAndFestivals'
            },
            {
              name: "מועדים יהודיים",
              topicName: '2_4_3JewishHolidays'
            },
            {
              name: "מועדים דרוזים",
              topicName: '2_4_4DruzeHolidays'
            },
            {
              name: "מועדים מוסלמיים",
              topicName: '2_4_5MuslimHolidays'
            },
            {
              name: "מועדים נוצריים",
              topicName: '2_4_6ChristianHolidays'
            },
            {
              name: "מועדים אזרחיים",
              topicName: '2_4_7CivilianHolidays'
            },
            {
              name: "סיכום",
              topicName: '2_5Summary'
            }
          ]
        },
        {
          index: 2,
          name: "תולדות עם ישראל",
          subjects: [{
              name: "''...פתיחה: ''עם שאינו יודע את עברו",
              topicName: '3_1opening'
            },
            {
              name: "תקופת התנ''ך - ראשיתו של העם היהודי",
              topicName: '3_2bibleEra'
            },
            {
              name: "ימי הבית הראשון",
              topicName: '3_3firstTempleDays'
            },
            {
              name: "גלות בבל ושיבת ציון",
              topicName: '3_4babylonianCaptivity'
            },
            {
              name: "ימי הבית השני",
              topicName: '3_5secondTempleDays'
            },
            {
              name: "המרד הגדול וחורבן הבית",
              topicName: '3_6templeDestruction'
            },
            {
              name: "המשך החיים ביבודה לאחר החורבן",
              topicName: '3_7judeaLifeAfterDestruction'
            },
            {
              name: "המרכז היהודי בבל: אמוראים,סבוראים וגאונים",
              topicName: '3_8jewishInBabylon'
            },
            {
              name: "תקופת הראשונים",
              topicName: '3_9rishonimEra'
            },
            {
              name: "תור הזהב וגירוש ספרד",
              topicName: '3_10alhambraDecree'
            },
            {
              name: "המרכז היהודי בפולין והתפתחות החסידות",
              topicName: '3_11jewsInPoland'
            },
            {
              name: "אתגר האמנציפציה",
              topicName: '3_12emancipationChallenge'
            },
            {
              name: "היהודי אל מול אתגרי העת החדשה",
              topicName: '3_13jewishInModernDays'
            },
            {
              name: "ראשיתו של הרעיון הלאומי- הדרך אל הציונות",
              topicName: '3_14nationalIdea'
            },
            {
              name: "''פרסום האוטואמנציפיציה ותנועת ''חיבת ציון",
              topicName: '3_15autoEmancipation'
            },
            {
              name: "בנימין זאב הרצל והקמת התנועה הציונית",
              topicName: '3_16startOfZionism'
            }, {
              name: "זרמים ורעיונות בתנועה הציונית",
              topicName: '3_17ideasZionism'
            },
            {
              name: "סיכום",
              topicName: '3_18summary'
            },
            {
              name: "נספח: תפוצות ישראל",
              topicName: '3_19jewishPupulationByCountry'
            }
          ]
        },
        {
          index: 3,
          name: "בימי השואה",
          subjects: [{
              name: "פתיחה: העם היהודי בגלות בין שגשוג לשקיעה",
              topicName: '4_1opening'
            },
            {
              name: "עלייתו של המשטר הנאצי ורדיפת היהודים בגרמניה",
              topicName: '4_2RiseOfTheNaziRegime'
            },
            {
              name: "היהודים בשלביה הראשונים של מלחמת העולם השניה",
              topicName: '4_3TheJewsInWorldWarII'
            },
            {
              name: "''הפתרון הסופי''",
              topicName: '4_4FinalSolution'
            },
            {
              name: "הצלה והתנגדות",
              topicName: '4_5RescueAndResistance'
            },
            {
              name: "עם תום המלחמה",
              topicName: '4_6AtTheEndOfTheWar'
            },
            {
              name: "השואה ומדינת ישראל",
              topicName: '4_7TheHolocaustAndTheStateOfIsrael'
            },
            {
              name: "סיכום",
              topicName: '4_8Summary'
            }
          ]
        },
        {
          index: 4,
          name: "בדרך למדינה",
          subjects: [{
              name: "פתיחה: יישוב חדש ויישוב ישן",
              topicName: '5_1opening'
            },
            {
              name: "ראשיתו של היישוב החדש: העלייה הראשונה",
              topicName: '5_2TheBeginningOfTheNewSettlement'
            },
            {
              name: "העלייה השנייה",
              topicName: '5_3TheSecondAliyah'
            },
            {
              name: "תחיית השפה העברית",
              topicName: '5_4TheRevivalOfTheHebrewlanguage'
            },
            {
              name: "מלחמת העולם הראשונה:המעבר משלטון עות'מאני לשלטון בריטי",
              topicName: '5_5WorldWarI'
            },
            {
              name: "העליות לארץ בתקופת המנדט הבריטי",
              topicName: '5_6DuringTheBritishMandatePeriod'
            },
            {
              name: "המשולש הארץ-ישראלי: יהודים ערבים ובריטים",
              topicName: '5_7TriangleoftheLandOfIsrael'
            },
            {
              name: "ארץ-ישראל והיישוב היהודי במלחמת העולם השנייה",
              topicName: '5_8EretzIsraelAndTheJewishYishuvDuringWorldWarII'
            },
            {
              name: "לקראת מדינה: הדרך אל הכרזת העצמאות",
              topicName: '5_9TowardsAState'
            },
            {
              name: "סיכום",
              topicName: '5_10Summary'
            }
          ]
        },
        {
          index: 5,
          name: "סיפורה של מדינה",
          subjects: [{
              name: "פתיחה: מיישוב למדינה",
              topicName: '6_1settelmentToCountry'

            },
            {
              name: "עלייה וקליטה",
              topicName: '6_2aliyahAndIntegration'
            },
            {
              name: "נושאי דיון ואירועים מרכזיים בחברה הישראלית",
              topicName: '6_3mainEvents'
            },
            {
              name: "נשיאי המדינה",
              topicName: '6_4presidentsOfIsrael'
            },
            {
              name: "ראשי ממשלה",
              topicName: '6_5primeMinisterOfIsrael'
            },
            {
              name: "ראשי המטה הכללי",
              topicName: '6_6chiefOfGeneralStaff'
            }
          ]
        },
        {
          index: 6,
          name: "ביטחון ישראל",
          subjects: [{
              name: "פתיחה",
              topicName: '7_1opening'
            },
            {
              name: "התפתחות כוח המגן העברי",
              topicName: '7_2JewishDefenseForceDevelopment'
            },
            {
              name: "הקמת צה''ל",
              topicName: '7_3TheEstablishmentOfTheIDF'
            },
            {
              name: "מלחמות ומבצעי צה''ל",
              topicName: '7_4WarsAndIDFoperations'
            },
            {
              name: "סיכום",
              topicName: '7_5Summary'
            }
          ]
        }
      ]
    }
    var billionaireGameLife = {
      life: [true, true, true]
    }
    var billionaireGame = [{
        points: 100,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "שלישית",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "רביעית",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]
      },
      {
        points: 200,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 300,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 500,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 1000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 2000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 4000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 8000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 16000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 32000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 64000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 125000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 250000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 500000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      },
      {
        points: 1000000,
        "level": [{
          question: "first question",
          answers: [{
            answer: "fgfgfgfg",

            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }, {
          question: "secondquestion",
          answers: [{
            answer: "fgfgfgfg",
            type: true
          }, {
            answer: "fgghghghhjjjjjjjfgfgfg",
            type: false
          }, {
            answer: "fghggjdsystryrtfg",
            type: false
          }, {
            answer: "gdhjghjgdhjdhjdhgj",
            type: false
          }]
        }]



      }
    ]

    var test = [{
      question: "first question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "second question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "third question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }, {
      question: "fourth question",
      answers: [{
        answer: "first answer",
        type: true
      }, {
        answer: "second answer",
        type: false
      }, {
        answer: "third answer",
        type: false
      }, {
        answer: "fourth answer",
        type: false
      }]
    }];

    var adjustDateGame = [{
        event: "1פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.",
        dates: [{
            date: "date1.1",
            type: true
          },
          {
            date: "date1.2",
            type: false
          },
          {
            date: "date1.3",
            type: false
          },
          {
            date: "date1.4",
            type: false
          }
        ]
      },
      {
        event: "פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.2",
        dates: [{
            date: "date2.1",
            type: true
          },
          {
            date: "date2.2",
            type: false
          },
          {
            date: "date2.3",
            type: false
          },
          {
            date: "date2.4",
            type: false
          }
        ]
      },
      {
        event: "פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.3",
        dates: [{
            date: "date3.1",
            type: true
          },
          {
            date: "date3.2",
            type: false
          },
          {
            date: "date3.3",
            type: false
          },
          {
            date: "date3.4",
            type: false
          }
        ]
      },
      {
        event: "פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.4",
        dates: [{
            date: "date4.1",
            type: true
          },
          {
            date: "date4.2",
            type: false
          },
          {
            date: "date4.3",
            type: false
          },
          {
            date: "date4.4",
            type: false
          }
        ]
      },
      {
        event: "פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.5",
        dates: [{
            date: "date5.1",
            type: true
          },
          {
            date: "date5.2",
            type: false
          },
          {
            date: "date5.3",
            type: false
          },
          {
            date: "date5.4",
            type: false
          }
        ]
      },
      {
        event: "פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.6",
        dates: [{
            date: "date6.1",
            type: true
          },
          {
            date: "date6.2",
            type: false
          },
          {
            date: "date6.3",
            type: false
          },
          {
            date: "date6.4",
            type: false
          }
        ]
      },
      {
        event: "פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.7",
        dates: [{
            date: "date7.1",
            type: true
          },
          {
            date: "date7.2",
            type: false
          },
          {
            date: "date7.3",
            type: false
          },
          {
            date: "date7.4",
            type: false
          }
        ]
      },
      {
        event: "פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.8",
        dates: [{
            date: "date8.1",
            type: true
          },
          {
            date: "date8.2",
            type: false
          },
          {
            date: "date8.3",
            type: false
          },
          {
            date: "date8.4",
            type: false
          }
        ]
      },
      {
        event: "פסקה ארוכה מדי עשויה להכביד על הקורא, ולכן יש לשקול את פיצולה. את הפיצול יש לבצע בצורה שלא תראה מלאכותית. פיצול הפסקה אין פירושו חצייה שרירותית של פסקה גדולה. יש להבחין כיצד לפצל את הנושא הנידון בפסקה לשני נושאי משנה, וליצור מהפסקה הגדולה שתי פסקאות שכל אחת מהן עומדת בפני עצמה.9",
        dates: [{
            date: "date9.1",
            type: true
          },
          {
            date: "date9.2",
            type: false
          },
          {
            date: "date9.3",
            type: false
          },
          {
            date: "date9.4",
            type: false
          }
        ]
      }
    ];

    // function shuffle(array) {
    //   var m = array.length,
    //     t, i;
    //   while (m) {
    //     i = Math.floor(Math.random() * m--);
    //     t = array[m];
    //     array[m] = array[i];
    //     array[i] = t;
    //   }
    //   return array;
    // }

    // function gameInit(subject) {
    //   // billionaireGame[0].level1[0] = shuffle(subject.cards.terms);
    //   // data.cards.definitions = shuffle(subject.cards.definitions);
    //   // console.log(billionaireGame.length);
    // }

    var currentBook = {}
    var currentTopic = {};
    return {
      currentTopic: currentTopic,
      billionaireGameLife: billionaireGameLife,
      currentBook: currentBook,
      book: book,
      adjustDateGame: adjustDateGame,
      test: test,
      billionaireGame: billionaireGame
    };
  });
})();
