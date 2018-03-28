(function () {
  angular.module('officerspreparation').factory('DataService', function () {
    // Might use a resource here that returns a JSON array

    var book = {
      topics: [{
          index: 0,
          name: "ישראל : תעודת זהות",
          subjects: [{
              name: "פתיחה: מדינת ישראל כמדינה יהודית ודמוקרטית"
            },
            {
              name: "יסודות המשטר הדמוקרטי"
            },
            {
              name: "סמלים לאומיים"
            },
            {
              name: "סיכום"
            }
          ]
        },
        {
          index: 1,
          name: "הפסיפס הישראלי",
          subjects: [{
              name: "פתיחה: תרבות ואמונה בישראל"
            },
            {
              name: "עולם האמונה היהודי: מושגים בסיסיים"
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
              name: "''...פתיחה: ''עם שאינו יודע את עברו"
            },
            {
              name: "תקופת התנ''ך - ראשיתו של העם היהודי"
            },
            {
              name: "ימי הבית הראשון"
            },
            {
              name: "גלות בבל ושיבת ציון"
            },
            {
              name: "ימי הבית השני"
            },
            {
              name: "המרד הגדול וחורבן הבית"
            },
            {
              name: "המשך החיים ביבודה לאחר החורבן"
            },
            {
              name: "המרכז היהודי בבל: אמוראים,סבוראים וגאונים"
            },
            {
              name: "תקופת הראשונים"
            },
            {
              name: "תור הזהב וגירוש ספרד"
            },
            {
              name: "המרכז היהודי בפולין והתפתחות החסידות"
            },
            {
              name: "אתגר האמנציפציה"
            },
            {
              name: "היהודי אל מול אתגרי העת החדשה"
            },
            {
              name: "ראשיתו של הרעיון הלאומי- הדרך אל הציונות"
            },
            {
              name: "''פרסום האוטואמנציפיציה ותנועת ''חיבת ציון"
            },
            {
              name: "בנימין זאב הרצל והקמת התנועה הציונית"
            },
            {
              name: "סיכום"
            },
            {
              name: "נספח: תפוצות ישראל"
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

    return {
      currentBook: currentBook,
      book: book
    };
  });
})();
