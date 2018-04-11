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
              name: "מיעוטים במדינת ישראל"
            },
            {
              name: "לוח השנה הישראלי-יהודי: חגים ומועדים"
            },
            {
              name: "מועדים יהודיים"
            },
            {
              name: "מועדים דרוזים"
            },
            {
              name: "מועדים מוסלמיים"
            },
            {
              name: "מועדים נוצריים"
            },
            {
              name: "מועדים אזרחיים"
            },
            {
              name: "סיכום"
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
              name: "פתיחה: העם היהודי בגלות בין שגשוג לשקיעה"
            },
            {
              name: "עלייתו של המשטר הנאצי ורדיפת היהודים בגרמניה"
            },
            {
              name: "היהודים בשלביה הראשונים של מלחמת העולם השניה"
            },
            {
              name: "''הפתרון הסופי''"
            },
            {
              name: "הצלה והתנגדות"
            },
            {
              name: "עם תום המלחמה"
            },
            {
              name: "השואה ומדינת ישראל"
            },
            {
              name: "סיכום"
            }
          ]
        },
        {
          index: 4,
          name: "בדרך למדינה",
          subjects: [{
              name: "פתיחה: יישוב חדש ויישוב ישן"
            },
            {
              name: "ראשיתו של היישוב החדש: העלייה הראשונה"
            },
            {
              name: "העלייה השנייה"
            },
            {
              name: "תחיית השפה העברית"
            },
            {
              name: "מלחמת העולם הראשונה:המעבר משלטון עות'מאני לשלטון בריטי"
            },
            {
              name: "העליות לארץ בתקופת המנדט הבריטי"
            },
            {
              name: "המשולש הארץ-ישראלי: יהודים ערבים ובריטים"
            },
            {
              name: "ארץ-ישראל והיישוב היהודי במלחמת העולם השנייה"
            },
            {
              name: "לקראת מדינה: הדרך אל הכרזת העצמאות"
            },
            {
              name: "סיכום"
            }
          ]
        },
        {
          index: 5,
          name: "סיפורה של מדינה",
          subjects: [{
              name: "פתיחה: מיישוב למדינה"
            },
            {
              name: "עלייה וקליטה"
            },
            {
              name: "נושאי דיון ואירועים מרכזיים בחברה הישראלית"
            },
            {
              name: "נשיאי המדינה"
            },
            {
              name: "ראשי ממשלה"
            },
            {
              name: "ראשי המטה הכללי"
            },
            {
              name: "סיכום"
            }
          ]
        },
        {
          index: 6,
          name: "ביטחון ישראל",
          subjects: [{
              name: "פתיחה"
            },
            {
              name: "התפתחות כוח המגן העברי"
            },
            {
              name: "הקמת צה''ל"
            },
            {
              name: "מלחמות ומבצעי צה''ל"
            },
            {
              name: "סיכום"
            }
          ]
        }
      ]
    }

    var currentBook = {}
    var currentTopic = {};
    return {
      currentTopic: currentTopic,
      currentBook: currentBook,
      book: book
    };
  });
})();
