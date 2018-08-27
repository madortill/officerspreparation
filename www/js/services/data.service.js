(function () {
  angular.module("officerspreparation").factory("DataService", function () {
    // Might use a resource here that returns a JSON array
    var book = {
      topics: [{
          index: 0,
          name: "ישראל : תעודת זהות",
          subjects: [{
              name: "פתיחה: מדינת ישראל כמדינה יהודית ודמוקרטית",
              topicName: "1_1opening"
            },
            {
              name: "יסודות המשטר הדמוקרטי",
              topicName: "1_2basicsDemocracy"
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
              topicName: "2_1CultureAndFaithInIsrael"
            },
            {
              name: "עולם האמונה היהודי: מושגים בסיסיים",
              topicName: "2_2TheWorldOfJewishFaith"
            },
            {
              name: "מיעוטים במדינת ישראל",
              topicName: "2_3MinoritiesInTheStateOfIsrael"
            },
            {
              name: "לוח השנה הישראלי-יהודי: חגים ומועדים",
              topicName: "2_4TheJewish-IsraeliCalendarHolidaysAndFestivals"
            },
            {
              name: "מועדים יהודיים",
              topicName: "2_4_3JewishHolidays"
            },
            {
              name: "מועדים דרוזים",
              topicName: "2_4_4DruzeHolidays"
            },
            {
              name: "מועדים מוסלמיים",
              topicName: "2_4_5MuslimHolidays"
            },
            {
              name: "מועדים נוצריים",
              topicName: "2_4_6ChristianHolidays"
            },
            {
              name: "מועדים אזרחיים",
              topicName: "2_4_7CivilianHolidays"
            },
            {
              name: "סיכום",
              topicName: "2_5Summary"
            }
          ]
        },
        {
          index: 2,
          name: "תולדות עם ישראל",
          subjects: [{
              name: "פתיחה: ''עם שאינו יודע את עברו...''",
              topicName: "3_1opening"
            },
            {
              name: "תקופת התנ''ך - ראשיתו של העם היהודי",
              topicName: "3_2bibleEra"
            },
            {
              name: "ימי הבית הראשון",
              topicName: "3_3firstTempleDays"
            },
            {
              name: "גלות בבל ושיבת ציון",
              topicName: "3_4babylonianCaptivity"
            },
            {
              name: "ימי הבית השני",
              topicName: "3_5secondTempleDays"
            },
            {
              name: "המרד הגדול וחורבן הבית",
              topicName: "3_6templeDestruction"
            },
            {
              name: "המשך החיים ביבודה לאחר החורבן",
              topicName: "3_7judeaLifeAfterDestruction"
            },
            {
              name: "המרכז היהודי בבל: אמוראים,סבוראים וגאונים",
              topicName: "3_8jewishInBabylon"
            },
            {
              name: "תקופת הראשונים",
              topicName: "3_9rishonimEra"
            },
            {
              name: "תור הזהב וגירוש ספרד",
              topicName: "3_10alhambraDecree"
            },
            {
              name: "המרכז היהודי בפולין והתפתחות החסידות",
              topicName: "3_11jewsInPoland"
            },
            {
              name: "אתגר האמנציפציה",
              topicName: "3_12emancipationChallenge"
            },
            {
              name: "היהודי אל מול אתגרי העת החדשה",
              topicName: "3_13jewishInModernDays"
            },
            {
              name: "ראשיתו של הרעיון הלאומי- הדרך אל הציונות",
              topicName: "3_14nationalIdea"
            },
            {
              name: "פרסום האוטואמנציפיציה ותנועת ''חיבת ציון''",
              topicName: "3_15autoEmancipation"
            },
            {
              name: "בנימין זאב הרצל והקמת התנועה הציונית",
              topicName: "3_16startOfZionism"
            },
            {
              name: "זרמים ורעיונות בתנועה הציונית",
              topicName: "3_17ideasZionism"
            },
            {
              name: "סיכום",
              topicName: "3_18summary"
            },
            {
              name: "נספח: תפוצות ישראל",
              topicName: "3_19jewishPupulationByCountry"
            }
          ]
        },
        {
          index: 3,
          name: "בימי השואה",
          subjects: [{
              name: "פתיחה: העם היהודי בגלות בין שגשוג לשקיעה",
              topicName: "4_1opening"
            },
            {
              name: "עלייתו של המשטר הנאצי ורדיפת היהודים בגרמניה",
              topicName: "4_2RiseOfTheNaziRegime"
            },
            {
              name: "היהודים בשלביה הראשונים של מלחמת העולם השניה",
              topicName: "4_3TheJewsInWorldWarII"
            },
            {
              name: "''הפתרון הסופי''",
              topicName: "4_4FinalSolution"
            },
            {
              name: "הצלה והתנגדות",
              topicName: "4_5RescueAndResistance"
            },
            {
              name: "עם תום המלחמה",
              topicName: "4_6AtTheEndOfTheWar"
            },
            {
              name: "השואה ומדינת ישראל",
              topicName: "4_7TheHolocaustAndTheStateOfIsrael"
            },
            {
              name: "סיכום",
              topicName: "4_8Summary"
            }
          ]
        },
        {
          index: 4,
          name: "בדרך למדינה",
          subjects: [{
              name: "פתיחה: יישוב חדש ויישוב ישן",
              topicName: "5_1opening"
            },
            {
              name: "ראשיתו של היישוב החדש: העלייה הראשונה",
              topicName: "5_2TheBeginningOfTheNewSettlement"
            },
            {
              name: "העלייה השנייה",
              topicName: "5_3TheSecondAliyah"
            },
            {
              name: "תחיית השפה העברית",
              topicName: "5_4TheRevivalOfTheHebrewlanguage"
            },
            {
              name: "מלחמת העולם הראשונה:המעבר משלטון עות'מאני לשלטון בריטי",
              topicName: "5_5WorldWarI"
            },
            {
              name: "העליות לארץ בתקופת המנדט הבריטי",
              topicName: "5_6DuringTheBritishMandatePeriod"
            },
            {
              name: "המשולש הארץ-ישראלי: יהודים ערבים ובריטים",
              topicName: "5_7TriangleoftheLandOfIsrael"
            },
            {
              name: "ארץ-ישראל והיישוב היהודי במלחמת העולם השנייה",
              topicName: "5_8EretzIsraelAndTheJewishYishuvDuringWorldWarII"
            },
            {
              name: "לקראת מדינה: הדרך אל הכרזת העצמאות",
              topicName: "5_9TowardsAState"
            },
            {
              name: "סיכום",
              topicName: "5_10Summary"
            }
          ]
        },
        {
          index: 5,
          name: "סיפורה של מדינה",
          subjects: [{
              name: "פתיחה: מיישוב למדינה",
              topicName: "6_1settelmentToCountry"
            },
            {
              name: "עלייה וקליטה",
              topicName: "6_2aliyahAndIntegration"
            },
            {
              name: "נושאי דיון ואירועים מרכזיים בחברה הישראלית",
              topicName: "6_3mainEvents"
            },
            {
              name: "נשיאי המדינה",
              topicName: "6_4presidentsOfIsrael"
            },
            {
              name: "ראשי ממשלה",
              topicName: "6_5primeMinisterOfIsrael"
            },
            {
              name: "ראשי המטה הכללי",
              topicName: "6_6chiefOfGeneralStaff"
            },
            {
              name: "סיכום",
              topicName: "6_7summary"
            }
          ]
        },
        {
          index: 6,
          name: "ביטחון ישראל",
          subjects: [{
              name: "פתיחה",
              topicName: "7_1opening"
            },
            {
              name: "התפתחות כוח המגן העברי",
              topicName: "7_2JewishDefenseForceDevelopment"
            },
            {
              name: "הקמת צה''ל",
              topicName: "7_3TheEstablishmentOfTheIDF"
            },
            {
              name: "מלחמות ומבצעי צה''ל",
              topicName: "7_4WarsAndIDFoperations"
            },
            {
              name: "סיכום",
              topicName: "7_5Summary"
            }
          ]
        }
      ]
    };
    var billionaireGameLife = {
      life: [true, true, true]
    };
    var billionaireGame = [{
        points: 100,
        level: [{
            question: "בשנים האחרונות ראש השנה לאילנות הפך להיות מזוהה עם?",
            answers: [{
                answer: "פעילויות הקשורות לאיכות הסביבה ושמירה על הקיימות",
                type: true
              },
              {
                answer: "טיול בשמורות טבע באמצעות כרטיס קש''ט",
                type: false
              },
              {
                answer: "קיום סדר ט''ו בשבט",
                type: false
              },
              {
                answer: "אכילת פירות יבשים",
                type: false
              }
            ]
          },
          {
            question: "כמה זמן נערך מסע הנדודים של בני ישראל במדבר?",
            answers: [{
                answer: "נערך 40 שנה",
                type: true
              },
              {
                answer: "נערך 400 שנה",
                type: false
              },
              {
                answer: "נערך 290 שנה",
                type: false
              },
              {
                answer: "נערך 17 שנה",
                type: false
              }
            ]
          },
          {
            question: "מהי כשרות?",
            answers: [{
                answer: "חוקים המגדירים אילו סוגי מזון מותרים לאכילה ביהדות",
                type: true
              },
              {
                answer: "מצוות שילוח הקן",
                type: false
              },
              {
                answer: "מערכות חוקים להכשרת כלים",
                type: false
              },
              {
                answer: "חוקים המגדירים מה מותר ומה אסור לאכול בשבת",
                type: false
              }
            ]
          },
          {
            question: "מתי חל ראש השנה לאילנות?",
            answers: [{
                answer: "ט''ו בשבט",
                type: true
              },
              {
                answer: "ט''ו בטבת",
                type: false
              },
              {
                answer: "ט''ו באב",
                type: false
              },
              {
                answer: "ט''ו באלול",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 200,
        level: [{
            question: "מהן ראשי התיבות של סת''ם ?",
            answers: [{
                answer: "ספר תורה, תפילין ומזוזה",
                type: true
              },
              {
                answer: "סופר תורה מקראי",
                type: false
              },
              {
                answer: "ספר תורה ומזוזה",
                type: false
              },
              {
                answer: "ספר תורה ומצוות",
                type: false
              }
            ]
          },
          {
            question: "מי הם חסידי אומות העולם ?",
            answers: [{
                answer: "גויים אשר נטלו חלק בהצלת יהודים תוך סיכון עצמי ללא תמורה",
                type: true
              },
              {
                answer: "יהודים אשר נטלו חלק בהצלת היהודים תוך סיכון עצמי ללא תמורה",
                type: false
              },
              {
                answer: "גרמנים אשר נטלו חלק בהצלת יהודים בגרמניה תמורת סכום כספי ורכוש",
                type: false
              },
              {
                answer: "אוקראינים אשר נטלו חלק בהצלת יהודים תמורת סכום כספי ורכוש",
                type: false
              }
            ]
          },
          {
            question: "מהו מצעד החיים ?",
            answers: [{
                answer: "מצעד הנערך בין אושוויץ לבירקנאו בימנו",
                type: true
              },
              {
                answer: "מצעד הנערך מטקוצ'ין ליער לופחובה בימנו",
                type: false
              },
              {
                answer: "מצעד הניצולים בגמר המלחמה מהמחנות לגרמניה",
                type: false
              },
              {
                answer: "מצעד בהשתתפות ילדיהם ונכדיהם של ניצולי השואה",
                type: false
              }
            ]
          },
          {
            question: "איזה חוק קובע כי לכל יהודי הזכות לעלות ארצה ולקבל אזרחות ישראלית ללא תנאי ?",
            answers: [{
                answer: "חוק השבות",
                type: true
              },
              {
                answer: "חוק יסוד כבוד האדם וחירותו",
                type: false
              },
              {
                answer: "חוק השיבה לארץ ישראל",
                type: false
              },
              {
                answer: "חוק האזרחות",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 300,
        level: [{
            question: ".התפילה __________ פותחת את יום כיהכיפור, _____ היא התפילה המסיימת אותו",
            answers: [{
                answer: "כל נדרי, נעילה",

                type: true
              },
              {
                answer: "שחרית, כל נדרי",
                type: false
              },
              {
                answer: "שחרית, ערבית",
                type: false
              },
              {
                answer: "תשליך, נעילה",
                type: false
              }
            ]
          },
          {
            question: "מתי חל יום העצמאות ?",
            answers: [{
                answer: "ה' באייר",
                type: true
              },
              {
                answer: "ד' באייר",
                type: false
              },
              {
                answer: "ד' באדר",
                type: false
              },
              {
                answer: "ה' באדר",
                type: false
              }
            ]
          },
          {
            question: "מי היה חיים נחמן ביאליק?",
            answers: [{
                answer: "המשורר הלאומי",
                type: true
              },
              {
                answer: "מלחין התקווה",
                type: false
              },
              {
                answer: "חתן פרס ישראל",
                type: false
              },
              {
                answer: "חתן פרס סוקולוב",
                type: false
              }
            ]
          },
          {
            question: "באיזו שנה החל גל העלייה השניה?",
            answers: [{
                answer: "1904",
                type: true
              },
              {
                answer: "1903",
                type: false
              },
              {
                answer: "1905",
                type: false
              },
              {
                answer: "1902",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 500,
        level: [{
            question: "מה מסמלות שניים עשר המשואות?",
            answers: [{
                answer: "שבטי ישראל",

                type: true
              },
              {
                answer: "מרידות בגטאות",
                type: false
              },
              {
                answer: "חטיבות צה''ל",
                type: false
              },
              {
                answer: "חודשי השנה",
                type: false
              }
            ]
          },
          {
            question: "מתי חל ראש השנה לאילנות?",
            answers: [{
                answer: "ט''ו בשבט",
                type: true
              },
              {
                answer: "ט''ו בטבת",
                type: false
              },
              {
                answer: "ט''ו באב",
                type: false
              },
              {
                answer: "ט''ו באלול",
                type: false
              }
            ]
          },
          {
            question: "מי עומד בראש מדינת ישראל- על פי חוק?",
            answers: [{
                answer: "נשיא המדינה",
                type: true
              },
              {
                answer: "ראש הממשלה",
                type: false
              },
              {
                answer: "בית המשפט העליון",
                type: false
              },
              {
                answer: "מבקר המדינה",
                type: false
              }
            ]
          },
          {
            question: "איזה מאורע נקבע כזכר למרד החשמונאים?",
            answers: [{
                answer: "חנוכה",
                type: true
              },
              {
                answer: "שבועות",
                type: false
              },
              {
                answer: "צום גדליה",
                type: false
              },
              {
                answer: "תשעה באב",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 1000,
        level: [{
            question: "למי קדוש קבר הנביא שועייב?",
            answers: [{
                answer: "דרוזים",
                type: true
              },
              {
                answer: "בדואים",
                type: false
              },
              {
                answer: "צ'רקסים",
                type: false
              },
              {
                answer: "ארמנים",
                type: false
              }
            ]
          },
          {
            question: "מי היה מלכה הראשון של ישראל?",
            answers: [{
                answer: "שאול",
                type: true
              },
              {
                answer: "דוד",
                type: false
              },
              {
                answer: "שלמה",
                type: false
              },
              {
                answer: "שמואל",
                type: false
              }
            ]
          },
          {
            question: "כיצד נקרא מחנה ההשמדה הראשון?",
            answers: [{
                answer: "חלמנו",
                type: true
              },
              {
                answer: "דכאו",
                type: false
              },
              {
                answer: "ברגן בלזן",
                type: false
              },
              {
                answer: "בלדץ'",
                type: false
              }
            ]
          },
          {
            question: "מהו יודנראט?",
            answers: [{
                answer: "הגוף האמון על תיווך הציבור היהודי לשלטון הגרמני",
                type: true
              },
              {
                answer: "כינוי לסטריאוטיפ היהודי כעכברוש",
                type: false
              },
              {
                answer: "כינוי ליהודים שעבדו בקרמטוריום",
                type: false
              },
              {
                answer: "כינוי לשוטרים יהודים במחנות ההשמדה",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 2000,
        level: [{
            question: "מי הקים את ההסתדרות הציונית העולמית?",
            answers: [{
                answer: "תיאדור זאב הרצל",

                type: true
              },
              {
                answer: "זאב ז'בוטינסקי",
                type: false
              },
              {
                answer: "דוד בן גוריון",
                type: false
              },
              {
                answer: "גולדה מאיר",
                type: false
              }
            ]
          },
          {
            question: "מי רשאי לפנות לנציב קבילות החיילים?",
            answers: [{
                answer: "כל חייל ומפקד בסדיר ובמילואים",
                type: true
              },
              {
                answer: "כל חייל בסדיר בלבד",
                type: false
              },
              {
                answer: "כל אזרח במדינת ישראל",
                type: false
              },
              {
                answer: "כל גורם ביטחוני",
                type: false
              }
            ]
          },
          {
            question: "על מה מושתת חזון הקמת מדינה יהודית בארץ ישראל?",
            answers: [{
                answer: "חזונם של נביאי ישראל",
                type: true
              },
              {
                answer: "חזונו של מנחם בגין",
                type: false
              },
              {
                answer: "על עקרונות קונסרבטיביים דתיים",
                type: false
              },
              {
                answer: "על עקרונות פלורליסטים חילוניים",
                type: false
              }
            ]
          },
          {
            question: "מהו חג הסיגד?",
            answers: [{
                answer: "צום, טיהרה והתחדשות. החג מכיל טקס שבמהלכו חודשה הברית בין העם לאל.",
                type: true
              },
              {
                answer: "צום, יום אבל",
                type: false
              },
              {
                answer: "חג לעדה הנוצרית הקתולית, שהמהלכו נהוג לעלות להר הבית",
                type: false
              },
              {
                answer: "חג לאדיגים במהלכו מגיעים לאתר הטבילה לטוהרה מחודשת",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 4000,
        level: [{
            question: "כמה חברי כנסת מכהנים בכנסת ישראל?",
            answers: [{
                answer: "120",
                type: true
              },
              {
                answer: "100",
                type: false
              },
              {
                answer: "140",
                type: false
              },
              {
                answer: "80",
                type: false
              }
            ]
          },
          {
            question: "מה מסמל צום י' בטבת?",
            answers: [{
                answer: "תחילת המצור על ירושלים וחורבנה",
                type: true
              },
              {
                answer: "מותו של גדליה בן אחיקם",
                type: false
              },
              {
                answer: "חורבן בית ראשון ושני",
                type: false
              },
              {
                answer: "פריצת חומות ירושלים בידי נבוכדנצר",
                type: false
              }
            ]
          },
          {
            question: "על פי המסורת מה לא קרה בט' באב?",
            answers: [{
                answer: "נרצח גדליה בן אחיקם",
                type: true
              },
              {
                answer: "עם ישראל לא נכנס לארץ ישראל מהמדבר",
                type: false
              },
              {
                answer: "חרב בית המקדש השני",
                type: false
              },
              {
                answer: "חרב בית המקדש הראשון",
                type: false
              }
            ]
          },
          {
            question: "מהי עלילת דמשק?",
            answers: [{
                answer: "יהודים שהואשמו ברצח של נזיר נוצרי ומשרתו המוסלמי",
                type: true
              },
              {
                answer: "יהודים שהכינו מצות מדמם של מוסלמים",
                type: false
              },
              {
                answer: "יהודים שהואשמו בהשחתת מסגד בדמשק",
                type: false
              },
              {
                answer: "יהודי שהואשם בגניבת כספים",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 8000,
        level: [{
            question: "באיזו שנה נוסד בנק ישראל?",
            answers: [{
                answer: "1954",

                type: true
              },
              {
                answer: "1950",
                type: false
              },
              {
                answer: "1956",
                type: false
              },
              {
                answer: "1952",
                type: false
              }
            ]
          },
          {
            question: "מה קובע חוק השבות?",
            answers: [{
                answer: "לכל יהודי זכות לעלות ארצה ולקבל אזרחות ישראלית",
                type: true
              },
              {
                answer: "הגדרה למונח ''יהודי'' על בסיס ההלכה וחוקי הגיור",
                type: false
              },
              {
                answer: "עליה לארץ וקבלת אזרחות ליהודים ניצולי שואה",
                type: false
              },
              {
                answer: "הסדרת חובות השירות הסדיר בצה''ל",
                type: false
              }
            ]
          },
          {
            question: "כיצד השפיעו ''ועד ארבע הארצות'' על יהודי פולין?",
            answers: [{
                answer: "נתן ליישוב היהודי בפולין אוטונומיה ויכולת קיומית עצמאית",
                type: true
              },
              {
                answer: "תרם להברחת יהודים לארה''ב",
                type: false
              },
              {
                answer: "בנה בתי כנסת בשטחי הקהילה היהודית",
                type: false
              },
              {
                answer: "דאג וסייע ליהודי פולין לעלות לארץ ישראל",
                type: false
              }
            ]
          },
          {
            question: "''מהו ''מישילנגה?",
            answers: [{
                answer: "צאצא לנישואי תערובת",
                type: true
              },
              {
                answer: "תנועת הנוער הנאצית",
                type: false
              },
              {
                answer: "חוקים לאיסור קראית ספרים בעלי אופי יהודי",
                type: false
              },
              {
                answer: "תנועת נוער יהודית",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 16000,
        level: [{
            question: "מהם ''סופות בנגב'' בחר בתשובה נכונה",
            answers: [{
                answer: "גל הפרעות בדרום רוסיה",

                type: true
              },
              {
                answer: "מבצע במלחמת העצמאות בו נכבשה עזה",
                type: false
              },
              {
                answer: "הסופות הקשות אשר התמודדו איתם המתיישבים בנגב",
                type: false
              },
              {
                answer: "עלילות בהם נופצו שמשות בתי כנסת ויהודים רבים נהרגו",
                type: false
              }
            ]
          },
          {
            question: "מהו מטרת מסמך הסטטוס קוו?",
            answers: [{
                answer: "דו קיום בין דתיים לחילוניים",
                type: true
              },
              {
                answer: "דו קיום בין יהודים לבני מיעוטים",
                type: false
              },
              {
                answer: "להגדיר את דיני השבת במדינת ישראל",
                type: false
              },
              {
                answer: "להכיר במספר דתות במדינת ישראל",
                type: false
              }
            ]
          },
          {
            question: "כמה חוקי יסוד קיימים במדינת ישראל?",
            answers: [{
                answer: "11",
                type: true
              },
              {
                answer: "10",
                type: false
              },
              {
                answer: "12",
                type: false
              },
              {
                answer: "15",
                type: false
              }
            ]
          },
          {
            question: "מה היה מפעלו המרכזי של רבי יהודה הנשיא?",
            answers: [{
                answer: "חתימת קובץ המשנה",
                type: true
              },
              {
                answer: "מניעת קיבוץ הגלויות בישראל",
                type: false
              },
              {
                answer: "הנחלת התורה בארץ",
                type: false
              },
              {
                answer: "עצירת נישואי התערובת",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 32000,
        level: [{
            question: "מהו ספרו המרכזי של הרמב''ם?",
            answers: [{
                answer: "משנה תורה",

                type: true
              },
              {
                answer: "תלמוד",
                type: false
              },
              {
                answer: "תושב''ע",
                type: false
              },
              {
                answer: "פירוש התלמוד",
                type: false
              }
            ]
          },
          {
            question: "איזו תנועה או מפלגה הנהיג דויד וולפסון?",
            answers: [{
                answer: "התנועה הציונית",
                type: true
              },
              {
                answer: "ההסתדרות הכללית",
                type: false
              },
              {
                answer: "אגודת ישראל",
                type: false
              },
              {
                answer: "מפלגת בית''ר",
                type: false
              }
            ]
          },
          {
            question: "מהו אורך כהונתו של הנשיא?",
            answers: [{
                answer: "שבע שנים",
                type: true
              },
              {
                answer: "שש שנים",
                type: false
              },
              {
                answer: "ארבע שנים",
                type: false
              },
              {
                answer: "חמש שנים",
                type: false
              }
            ]
          },
          {
            question: "מתי נבחר רשמית דגלה של מדינת ישראל?",
            answers: [{
                answer: "ב28 באוקטובר 1948",
                type: true
              },
              {
                answer: "ב22 בנומבר 1948",
                type: false
              },
              {
                answer: "1947 ב28 בנובמבר",
                type: false
              },
              {
                answer: "ב22 באוקטובר",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 64000,
        level: [{
            question: "מתי פורק הפלמ''ח לחלוטין?",
            answers: [{
                answer: "ב5 בנומבר 1948",

                type: true
              },
              {
                answer: "ב5 בדצמבר 1946",
                type: false
              },
              {
                answer: "ב5 באוקטובר 1949",
                type: false
              },
              {
                answer: "ב5 בספטמבר 1947",
                type: false
              }
            ]
          },
          {
            question: "מתי הוקמה המפקדה הארצית?",
            answers: [{
                answer: "1930",
                type: true
              },
              {
                answer: "1950",
                type: false
              },
              {
                answer: "1970",
                type: false
              },
              {
                answer: "1940",
                type: false
              }
            ]
          },
          {
            question: "מהי ממלכת הגדעונים?",
            answers: [{
                answer: "כינוי לקהילה היהודית העצמאית באתיופיה",
                type: true
              },
              {
                answer: "כינוי לקהילה היהודית בארצות האיסלם",
                type: false
              },
              {
                answer: "הקהילה היהודית בארה''ב",
                type: false
              },
              {
                answer: "כינוי לקהילה היהודית בפולין",
                type: false
              }
            ]
          },
          {
            question: "פרשת האונייה ''סנט לואיס'' היא",
            answers: [{
                answer: "אוניית פליטים יהודית, שלמעט אירופה לא הסכימו לקבלה",
                type: true
              },
              {
                answer: "אונייה רפואית שנשלחה לעזור ליהודי אפריקה",
                type: false
              },
              {
                answer: "אוניית מלחמה אמריקאית שהוטבעה ע''י גרמניה והייתה המניע לפרוץ המלחמה",
                type: false
              },
              {
                answer: "אוניית המעפילים האחרונה שיצאה מגרמניה לארץ ישראל",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 125000,
        level: [{
            question: "מי היא מיפ חיס?",
            answers: [{
                answer: "תושבת אמסטרדם אשר עבדה עם אוטו פרנק, אביה של אנה פרנק וסייעה להם להסתתר במחבואם",

                type: true
              },
              {
                answer: "יהודיה מהונגריה שניצלה את היותה בכירה ב''וועד להצלה'' והצילה רבבות יהודים בהברחתם לשוויץ",
                type: false
              },
              {
                answer: "אשת עסקים שפעלה בהונגריה תוך ניצול מעמדה הצילה יהודי הונגריה",
                type: false
              },
              {
                answer: "גרמניה שהצילה את מעמדה החברתי להצלת אלפי יהודים באמצעות מפעל לייצור סירים ופגזים",
                type: false
              }
            ]
          },
          {
            question: "היכן הסתתר אדולף אייכמן לאחר מלחמת העולם השנייה?",
            answers: [{
                answer: "ארגנטינה",
                type: true
              },
              {
                answer: "ברזיל",
                type: false
              },
              {
                answer: "מקסיקו",
                type: false
              },
              {
                answer: "קולומביה",
                type: false
              }
            ]
          },
          {
            question: "באיזו שנה נכתב ההמנון?",
            answers: [{
                answer: "1878",
                type: true
              },
              {
                answer: "1887",
                type: false
              },
              {
                answer: "1887",
                type: false
              },
              {
                answer: "1947",
                type: false
              }
            ]
          },
          {
            question: "(1923)כיצד ניסתה בתחילת דרכה המפלגה הנאצית לעלות לשלטון?",
            answers: [{
                answer: "(ביצוע הפיכה שכשלה (פוטש",
                type: true
              },
              {
                answer: "ליל הסכינים הארוכות",
                type: false
              },
              {
                answer: "בחירות",
                type: false
              },
              {
                answer: "ניצול האנרכיה ששררה בגרמניה",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 250000,
        level: [{
            question: "מי היה אהרון לידסקינד?",
            answers: [{
                answer: "לוחם מחתרת ופרטיזן יהודי, ממקימי המחתרת בקרקוב",

                type: true
              },
              {
                answer: "מפקד מרד גטו וורשה לקראת סוף המלחמה",
                type: false
              },
              {
                answer: "מפקד הבריגדה היהודית בצבא הבריטי",
                type: false
              },
              {
                answer: "מפקד במחנה אושוויץ שהורה על פיצוץ המשרפות",
                type: false
              }
            ]
          },
          {
            question: "מיהו ראול ולנברג?",
            answers: [{
                answer: "איש עסקים ודיפלומט שוודי שהציל רבבות מיהודי הונגריה",
                type: true
              },
              {
                answer: "קונסול פורטוגל שהבריח עשרות אלפי יהודים מצרפת לספרד ומשם לאמריקה",
                type: false
              },
              {
                answer: "עסקן גרמני שהעסיק יהודים במפעליו על מנת להצילם",
                type: false
              },
              {
                answer: "מלך דנמרק שהבריח יהודים לשבדיה",
                type: false
              }
            ]
          },
          {
            question: "מה הוא ההבדל העיקרי בין היהודים ה''קראים'' ליהודים פשוטים?",
            answers: [{
                answer: "הקראים אינם מקבלים את פרשנות חז''ל לתורה שבכתב",
                type: true
              },
              {
                answer: "הקראים אינם מאמינים במשה",
                type: false
              },
              {
                answer: "הקראים הינם קבוצה בדת השומרונית",
                type: false
              },
              {
                answer: "הקראים הינם שלוחה בדת הרפורמית",
                type: false
              }
            ]
          },
          {
            question: "באיזו אמירה נחתם משפטו  של ישראל קסטנר?",
            answers: [{
                answer: "מכר את נשמתו לשטן",
                type: true
              },
              {
                answer: "כל המציל נפש אחת כאילו הציל עולם במלואו",
                type: false
              },
              {
                answer: "אין אני עומד יחידי עמדי ניצבים כאן בשעה זו 6 מליון קטגורים",
                type: false
              },
              {
                answer: "נשמת ילד קטן שעוד לא ברא השטן",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 500000,
        level: [{
            question: "הכנסת אישרה את חוק ''יד ושם'' בשנת",
            answers: [{
                answer: "1953",

                type: true
              },
              {
                answer: "1952",
                type: false
              },
              {
                answer: "1954",
                type: false
              },
              {
                answer: "1955",
                type: false
              }
            ]
          },
          {
            question: ":מהו מבצע ''ענבי זעם'' בחר את ההגדרה הנכונה",
            answers: [{
                answer: "מבצע צבאי של צה''ל בדרום לבנון",
                type: true
              },
              {
                answer: "האינתיפאדה הראשונה",
                type: false
              },
              {
                answer: "מבצע צבאי של צה''ל ברצועת עזה",
                type: false
              },
              {
                answer: "האינתיפאדה השנייה",
                type: false
              }
            ]
          },
          {
            question: "מי היה תמרת עמנואל?",
            answers: [{
                answer: "מנהיג ציבור יהודי באתיופיה, שימש כפרופסור וכרב",
                type: true
              },
              {
                answer: "אחד ממנהיגיה של יהדות אירופה",
                type: false
              },
              {
                answer: "ממקימי הרבנות הצבאית",
                type: false
              },
              {
                answer: "מחנך ואיש ציבור, ממנהיגי הקהילה היהודית",
                type: false
              }
            ]
          },
          {
            question: "מי היו השופטים?",
            answers: [{
                answer: "מנהיגים אזוריים של 12 השבטים, לאחר מות יהושע",
                type: true
              },
              {
                answer: "נביאים שפירשו חלומות ל12 ראשי השבטים",
                type: false
              },
              {
                answer: "השופטים הראשונים ביהדות עליהם מתבססים חוקי המדינה",
                type: false
              },
              {
                answer: "זקני העם שעסקו באיחוד 12 השבטים",
                type: false
              }
            ]
          }
        ]
      },
      {
        points: 1000000,
        level: [{
            question: "כיצד נקרא התשלום החודשי הקבוע מגרמניה למדינת ישראל?",
            answers: [{
                answer: "רנטות",

                type: true
              },
              {
                answer: "רטרו",
                type: false
              },
              {
                answer: "מענק צדק",
                type: false
              },
              {
                answer: "פיצוי הדמים",
                type: false
              }
            ]
          },
          {
            question: ":ארגון ''השומר'' הוקם בשנת",
            answers: [{
                answer: "1909",
                type: true
              },
              {
                answer: "1904",
                type: false
              },
              {
                answer: "1905",
                type: false
              },
              {
                answer: "1900",
                type: false
              }
            ]
          },
          {
            question: "מתי נחתם ההסכם עם ירדן לאחר מלחמת העצמאות?",
            answers: [{
                answer: "ב3 באפריל 1949",
                type: true
              },
              {
                answer: "ב3 באפריל 1951",
                type: false
              },
              {
                answer: "ב3 במאי 1950",
                type: false
              },
              {
                answer: "ב3 במאי 1948",
                type: false
              }
            ]
          },
          {
            question: "מי היה הרמטכ''ל במלחמת ששת הימים?",
            answers: [{
                answer: "יצחק רבין",
                type: true
              },
              {
                answer: "יעקב דורי",
                type: false
              },
              {
                answer: "חיים בר לב",
                type: false
              },
              {
                answer: "חיים לסקוב",
                type: false
              }
            ]
          }
        ]
      }
    ];

    var adjustDateGame = [{
        event: "כתיבת ההמנון קרתה בשנת:",
        dates: [{
            date: "1897",
            type: false
          },
          {
            date: "1947",
            type: false
          },
          {
            date: "1878",
            type: true
          },
          {
            date: "1933",
            type: false
          }
        ]
      },
      {
        event: " - הקונגרס הציוני הראשון",
        dates: [{
            date: "1897",
            type: true
          },
          {
            date: "1921",
            type: false
          },
          {
            date: "1929",
            type: false
          },
          {
            date: "1901",
            type: false
          }
        ]
      },
      {
        event: "מתי נקבע סטטוס קוו-",
        dates: [{
            date: "1947",
            type: true
          },
          {
            date: "1933",
            type: false
          },
          {
            date: "1929",
            type: false
          },
          {
            date: "1901",
            type: false
          }
        ]
      },
      {
        event: "התקווה נקבעה כהמנון רשמי",
        dates: [{
            date: "1933",
            type: true
          },
          {
            date: "1878",
            type: false
          },
          {
            date: "1929",
            type: false
          },
          {
            date: "1949",
            type: false
          }
        ]
      },
      {
        event: "נחקק חוק השבות",
        dates: [{
            date: "1950",
            type: true
          },
          {
            date: "1954",
            type: false
          },
          {
            date: "1949",
            type: false
          },
          {
            date: "1970",
            type: false
          }
        ]
      },
      {
        event: "פרשת הררי ",
        dates: [{
            date: "1970",
            type: true
          },
          {
            date: "1950",
            type: false
          },
          {
            date: "1971",
            type: false
          },
          {
            date: "1954",
            type: false
          }
        ]
      },
      {
        event: "מרד המכבים",
        dates: [{
            date: "מאה ה-4",
            type: false
          },
          {
            date: "220 לפנה''ס",
            type: false
          },
          {
            date: "167 לפנה''ס",
            type: true
          },
          {
            date: "המאה ה-11",
            type: false
          }
        ]
      },
      {
        event: "הקמת הגדס''ר הבדואי",
        dates: [{
            date: "1986",
            type: true
          },
          {
            date: "1958",
            type: false
          },
          {
            date: "1951",
            type: false
          },
          {
            date: "1956",
            type: false
          }
        ]
      },
      {
        event: "יום הזכרון לרחבעם זאבי",
        dates: [{
            date: "ל' בתשרי",
            type: true
          },
          {
            date: "כ''ז בניסן",
            type: false
          },
          {
            date: "י''ב בחשוון",
            type: false
          },
          {
            date: "כ''ט בחשוון",
            type: false
          }
        ]
      },
      {
        event: "חג הסיגד",
        dates: [{
            date: "כ''ט בחשוון",
            type: true
          },
          {
            date: "י''ב בחשוון",
            type: false
          },
          {
            date: "ב27 בינואר",
            type: false
          },
          {
            date: "ד' באייר",
            type: false
          }
        ]
      },
      {
        event: "-יום הזיכרון הבינלאומי לשואה",
        dates: [{
            date: "ב27 בינואר",
            type: true
          },
          {
            date: "ד' באייר",
            type: false
          },
          {
            date: "כ''ט בתמוז",
            type: false
          },
          {
            date: "28/10",
            type: false
          }
        ]
      },
      {
        event: "יום ירושלים",
        dates: [{
            date: "כ''ח באייר",
            type: true
          },
          {
            date: "ה' באייר",
            type: false
          },
          {
            date: "ד' באייר",
            type: false
          },
          {
            date: "י' באייר",
            type: false
          }
        ]
      },
      {
        event: "ראש השנה",
        dates: [{
            date: "א' בתשרי",
            type: true
          },
          {
            date: "י' בתשרי",
            type: false
          },
          {
            date: "ט''ו בתשרי",
            type: false
          },
          {
            date: "כ''ב בתשרי",
            type: false
          }
        ]
      },
      {
        event: "יום כיפור",
        dates: [{
            date: "י' בתשרי",
            type: true
          },
          {
            date: "ט''ו בתשרי",
            type: false
          },
          {
            date: "י' באייר",
            type: false
          },
          {
            date: "י''ד בתשרי",
            type: false
          }
        ]
      },
      {
        event: "שמיני עצרת ושמחת תורה",
        dates: [{
            date: "כ''ב בתשרי",
            type: true
          },
          {
            date: "כ''ה בכסלו",
            type: false
          },
          {
            date: "כ''ב בכסלו",
            type: false
          },
          {
            date: "כ''ח באייר",
            type: false
          }
        ]
      },
      {
        event: "ל''ג בעומר",
        dates: [{
            date: "י''ח באייר",
            type: true
          },
          {
            date: "ו' בסיוון",
            type: false
          },
          {
            date: "כ''ה באייר",
            type: false
          },
          {
            date: "כ''ה בכסלו",
            type: false
          }
        ]
      },
      {
        event: "שושן פורים",
        dates: [{
            date: "ט''ו באדר",
            type: true
          },
          {
            date: "ט''ו בניסן",
            type: false
          },
          {
            date: "י''ד באדר",
            type: false
          },
          {
            date: "י''ג באדר",
            type: false
          }
        ]
      },
      {
        event: "צום גדליה – רצח גדליה בן אחיקם",
        dates: [{
            date: "ג' בתשרי",
            type: true
          },
          {
            date: "ט' באב",
            type: false
          },
          {
            date: "ט''ו בתשרי",
            type: false
          },
          {
            date: "כ''ב בתשרי",
            type: false
          }
        ]
      },
      {
        event: "מצור נבוכדנצר על ירושלים",
        dates: [{
            date: "י' בטבת",
            type: true
          },
          {
            date: "י''ז בתמוז",
            type: false
          },
          {
            date: "ט''ו בניסן",
            type: false
          },
          {
            date: "ו' בסיוון",
            type: false
          }
        ]
      },
      {
        event: "חג הנביא שועייב",
        dates: [{
            date: "24-27/4 ",
            type: true
          },
          {
            date: "10/9",
            type: false
          },
          {
            date: "27/1",
            type: false
          },
          {
            date: "31/12-1/1",
            type: false
          }
        ]
      },
      {
        event: "חג הנביא סבלאן ",
        dates: [{
            date: "ב-12 לחודש ה3",
            type: false
          },
          {
            date: "יום אחד אחרי הופעת הירח",
            type: false
          },
          {
            date: "חודש 9",
            type: false
          },
          {
            date: "5 ימים מסתיים ב10 בחודש האחרון",
            type: true
          }
        ]
      },
      {
        event: "הקרב על מצדה",
        dates: [{
            date: "ב73 לספירה",
            type: true
          },
          {
            date: "ב40 לפנה''ס",
            type: false
          },
          {
            date: "ב167 לפנה''ס",
            type: false
          },
          {
            date: "ב63 לספירה",
            type: false
          }
        ]
      },
      {
        event: "פרוץ המרד הגדול",
        dates: [{
            date: "ב66-73 לספירה",
            type: true
          },
          {
            date: "ב115-117 לספירה",
            type: false
          },
          {
            date: "ב160- 167 לפנה''ס",
            type: false
          },
          {
            date: "132-136",
            type: false
          }
        ]
      },
      {
        event: "מרד בר-כוכבא",
        dates: [{
            date: "136-132",
            type: true
          },
          {
            date: "117-115",
            type: false
          },
          {
            date: "114-120",
            type: false
          },
          {
            date: "124-130",
            type: false
          }
        ]
      },
      {
        event: "הורדוס עולה לשלטון",
        dates: [{
            date: "ב40 לפנה''ס",
            type: true
          },
          {
            date: "ב167 לפנה''ס ",
            type: false
          },
          {
            date: "ב47 לפנה''ס",
            type: false
          },
          {
            date: "ב73 לספירה",
            type: false
          }
        ]
      },
      {
        event: "הצהרת כורש",
        dates: [{
            date: "ב597 לפנה''ס",
            type: true
          },
          {
            date: "ב722 לפנה''ס",
            type: false
          },
          {
            date: "ב539 לפנה''ס",
            type: false
          },
          {
            date: "ב167 לפנה''ס",
            type: false
          }
        ]
      },
      {
        event: "עליה ראשונה",
        dates: [{
            date: "1903-1882",
            type: true
          },
          {
            date: "1947-1952",
            type: false
          },
          {
            date: "1897-1905",
            type: false
          },
          {
            date: "1902-1883ה",
            type: false
          }
        ]
      },
      {
        event: "ועידת קטוביץ' התרחשה ב",
        dates: [{
            date: "1884",
            type: true
          },
          {
            date: "1860",
            type: false
          },
          {
            date: "1895",
            type: false
          },
          {
            date: "1882",
            type: false
          }
        ]
      },
      {
        event: "משפט דרייפוס",
        dates: [{
            date: "1895",
            type: true
          },
          {
            date: "1860",
            type: false
          },
          {
            date: "1897",
            type: false
          },
          {
            date: "1902",
            type: false
          }
        ]
      },
      {
        event: "הרצל נולד",
        dates: [{
            date: "1830",
            type: true
          },
          {
            date: "1860",
            type: false
          },
          {
            date: "1831",
            type: false
          },
          {
            date: "1861",
            type: false
          }
        ]
      },
      {
        event: "הקונגרס הציוני הראשון",
        dates: [{
            date: "1897",
            type: true
          },
          {
            date: "1893",
            type: false
          },
          {
            date: "1902",
            type: false
          },
          {
            date: "1895",
            type: false
          }
        ]
      },
      {
        event: "הרצל נפטר",
        dates: [{
            date: "1904",
            type: true
          },
          {
            date: "1903",
            type: false
          },
          {
            date: "1900",
            type: false
          },
          {
            date: "1901",
            type: false
          }
        ]
      },
      {
        event: "בניית משכנות שאננים",
        dates: [{
            date: "1860",
            type: true
          },
          {
            date: "1830",
            type: false
          },
          {
            date: "1863",
            type: false
          },
          {
            date: "1870",
            type: false
          }
        ]
      },
      {
        event: "הפרעות סופות בנגב",
        dates: [{
            date: "1881-1882",
            type: true
          },
          {
            date: "1887-1888",
            type: false
          },
          {
            date: "1885-1886",
            type: false
          },
          {
            date: "1873-1774",
            type: false
          }
        ]
      },
      {
        event: "העלייה השנייה",
        dates: [{
            date: "1904-1914",
            type: true
          },
          {
            date: "1913-1914",
            type: false
          },
          {
            date: "1919-1923",
            type: false
          },
          {
            date: "1905-1907",
            type: false
          }
        ]
      },
      {
        event: "נוסדה תל אביב",
        dates: [{
            date: "1909",
            type: true
          },
          {
            date: "1917",
            type: false
          },
          {
            date: "1903",
            type: false
          },
          {
            date: "1914",
            type: false
          }
        ]
      },
      {
        event: "הצהרת בלפור",
        dates: [{
            date: "1917",
            type: true
          },
          {
            date: "1919",
            type: false
          },
          {
            date: "1909",
            type: false
          },
          {
            date: "1922",
            type: false
          }
        ]
      },
      {
        event: "עלייה שלישית",
        dates: [{
            date: "1919-1923",
            type: true
          },
          {
            date: "1904-1914",
            type: false
          },
          {
            date: "1913-1914",
            type: false
          },
          {
            date: "1903-1882",
            type: false
          }
        ]
      },
      {
        event: "עלייה רביעית",
        dates: [{
            date: "1924-1929",
            type: true
          },
          {
            date: "1919-1923",
            type: false
          },
          {
            date: "1934-1939",
            type: false
          },
          {
            date: "1931-1936",
            type: false
          }
        ]
      },
      {
        event: "ליל הגשרים",
        dates: [{
            date: "ב17 ביוני 1946",
            type: true
          },
          {
            date: "ב27 בינואר 1946",
            type: false
          },
          {
            date: "ב22 ביוני 1946",
            type: false
          },
          {
            date: "ב23 במאי 1946",
            type: false
          }
        ]
      },
      {
        event: "פיצוץ מלון המלך דוד ",
        dates: [{
            date: "ב22 ביולי 1946",
            type: true
          },
          {
            date: "ב27 בפבואר 1946",
            type: false
          },
          {
            date: "ב22 בינואר 1946",
            type: false
          },
          {
            date: "ב29 ביוני 1946",
            type: false
          }
        ]
      },
      {
        event: "השבת השחורה",
        dates: [{
            date: "ב29 ביוני 1946",
            type: true
          },
          {
            date: "ב22 בפבואר 1946",
            type: false
          },
          {
            date: "ב22 ביוני 1947",
            type: false
          },
          {
            date: "ב17 ביוני 1947",
            type: false
          }
        ]
      },
      {
        event: "עליית היטלר לשלטון",
        dates: [{
            date: "1933",
            type: true
          },
          {
            date: "1934",
            type: false
          },
          {
            date: "1930",
            type: false
          },
          {
            date: "1932",
            type: false
          }
        ]
      },
      {
        event: "ליל הסכינים הארוכות",
        dates: [{
            date: "1934",
            type: true
          },
          {
            date: "1931",
            type: false
          },
          {
            date: "1937",
            type: false
          },
          {
            date: "1935",
            type: false
          }
        ]
      },
      {
        event: "חוקי נירנברג",
        dates: [{
            date: "1935",
            type: true
          },
          {
            date: "1934",
            type: false
          },
          {
            date: "1933",
            type: false
          },
          {
            date: "1937",
            type: false
          }
        ]
      },
      {
        event: "ליל הבדולח",
        dates: [{
            date: "1938",
            type: true
          },
          {
            date: "1936",
            type: false
          },
          {
            date: "1933",
            type: false
          },
          {
            date: "1932",
            type: false
          }
        ]
      },
      {
        event: "פלישת גרמניה לפולין",
        dates: [{
            date: "ב1 בספטמבר 1939",
            type: true
          },
          {
            date: "ב20 בפבואר 1935",
            type: false
          },
          {
            date: "ב1 במרץ 1937",
            type: false
          },
          {
            date: "ב17 בינואר 1938",
            type: false
          }
        ]
      },
      {
        event: "ועידת ואנזה ",
        dates: [{
            date: "ב20 בינואר 1942",
            type: true
          },
          {
            date: "ב23 בפבואר 1943",
            type: false
          },
          {
            date: "ב13 בינואר 1942",
            type: false
          },
          {
            date: "ב5 במאי 1943",
            type: false
          }
        ]
      },
      {
        event: "העלייה ההמונית",
        dates: [{
            date: "1948-1951",
            type: true
          },
          {
            date: "1949-1952",
            type: false
          },
          {
            date: "1953-1956",
            type: false
          },
          {
            date: "1939-1943",
            type: false
          }
        ]
      },
      {
        event: "מבצע יכין",
        dates: [{
            date: "1961-1964",
            type: true
          },
          {
            date: "1965-1967",
            type: false
          },
          {
            date: "1971-1972",
            type: false
          },
          {
            date: "1951-1953",
            type: false
          }
        ]
      },
      {
        event: "הטבח בכפר קאסם",
        dates: [{
            date: "1956",
            type: true
          },
          {
            date: "1967",
            type: false
          },
          {
            date: "1953",
            type: false
          },
          {
            date: "1964",
            type: false
          }
        ]
      },
      {
        event: "מבצע שלמה",
        dates: [{
            date: "1991",
            type: true
          },
          {
            date: "1984",
            type: false
          },
          {
            date: "1993",
            type: false
          },
          {
            date: "1981",
            type: false
          }
        ]
      },
      {
        event: "מבצע אנטבה",
        dates: [{
            date: "1976",
            type: true
          },
          {
            date: "1978",
            type: false
          },
          {
            date: "1985",
            type: false
          },
          {
            date: "1973",
            type: false
          }
        ]
      },
      {
        event: "הסכם אוסלו",
        dates: [{
            date: "1993",
            type: true
          },
          {
            date: "1989",
            type: false
          },
          {
            date: "1996",
            type: false
          },
          {
            date: "1986",
            type: false
          }
        ]
      },
      {
        event: "מלחמת העצמאות",
        dates: [{
            date: "1949-1947",
            type: true
          },
          {
            date: "1947-1952",
            type: false
          },
          {
            date: " 1946–1948",
            type: false
          },
          {
            date: "1947-1950",
            type: false
          }
        ]
      },
      {
        event: "מלחמת יום הכיפורים",
        dates: [{
            date: "1973",
            type: true
          },
          {
            date: "1981",
            type: false
          },
          {
            date: "1978",
            type: false
          },
          {
            date: "1976",
            type: false
          }
        ]
      },
      {
        event: "אינטיפאדה ראשונה",
        dates: [{
            date: "1987-1993",
            type: true
          },
          {
            date: "1984-1988",
            type: false
          },
          {
            date: "1980-1986",
            type: false
          },
          {
            date: "1990-1995",
            type: false
          }
        ]
      },
      {
        event: "חומת מגן (פיגוע מלון נתניה) ב",
        dates: [{
            date: "2002",
            type: true
          },
          {
            date: "2006",
            type: false
          },
          {
            date: "2000",
            type: false
          },
          {
            date: "2003",
            type: false
          }
        ]
      },
      {
        event: "מלחמת לבנון השנייה",
        dates: [{
            date: "2006",
            type: true
          },
          {
            date: "2009",
            type: false
          },
          {
            date: "2003",
            type: false
          },
          {
            date: "2007",
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

    var currentBook = {};
    var currentTopic = {};
    return {
      currentTopic: currentTopic,
      billionaireGameLife: billionaireGameLife,
      currentBook: currentBook,
      book: book,
      adjustDateGame: adjustDateGame,
      billionaireGame: billionaireGame
    };
  });
})();
