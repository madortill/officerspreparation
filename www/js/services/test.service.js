(function () {
  angular.module('officerspreparation').factory('TestService', function () {
    // Might use a resource here that returns a JSON array

    var test = [{
      question: "מה תפקיד הקואליציה",
      answers: [{
        answer: "לגבות בכנסת את צעדי הממשלה ולהגן על חקיקותיה",
        type: true
      }, {
        answer: "להוות איזון ובלימה לממשלה",
        type: false
      }, {
        answer: "להציע לציבור אלטרנטיבה שלטונית ולבקר את פעילות הממשלה",
        type: false
      }, {
        answer: "לספק סעד לאזרח או לגופים הנדרשים לו	",
        type: false
      }]
    }, {
      question: "איזה חוק קובע כי לכל יהודי הזכות לעלות ארצה ולקבל אזרחות ישראלית ללא תנאי",
      answers: [{
        answer: "חוק השבות",
        type: true
      }, {
        answer: "חוק יסוד כבוד האדם וחירותו",
        type: false
      }, {
        answer: "חוק השיבה לארץ ישראל",
        type: false
      }, {
        answer: "חוק האזרחות",
        type: false
      }]
    }, {
      question: "איזו אוכלוסיה צורפה לחוק השבות לאחר תיקופו",
      answers: [{
        answer: "ילדיהם ונכדיהם של יהודים",
        type: true
      }, {
        answer: "בני מיעוטים המעוניינים לחיות בשטחי הארץ",
        type: false
      }, {
        answer: "גויים המעוניינים להתגייר ולעלות ארצה",
        type: false
      }, {
        answer: "יהודים מהעליה הראשונה והשניה",
        type: false
      }]
    }, {
      question: "איזו מילה לא נמצאת בתוך מגילת העצמאות",
      answers: [{
        answer: "דמוקרטית",
        type: true
      }, {
        answer: "יהודית",
        type: false
      }, {
        answer: "ציונית",
        type: false
      }, {
        answer: "שואה",
        type: false
      }]
    }, {
      question: "איזו תנועה או מפלגה הנהיג דויד וולפסון",
      answers: [{
        answer: "התנועה הציונית",
        type: true
      }, {
        answer: "מפלגת בית''ר",
        type: false
      }, {
        answer: "אגודת ישראל",
        type: false
      }, {
        answer: "ההסתדרות הכללית",
        type: false
      }]
    }, {
      question: "אילו 2 מערכות ניתן למצוא באופייה הדמוקרטי של כל מדינה",
      answers: [{
        answer: "מערכת פורמלית- מוסדית, מערכת תרבותית- ערכית",
        type: true
      }, {
        answer: "מערכת חינוך- ערכית, מערכת משפטית- מוסדית",
        type: false
      }, {
        answer: "מערכת חינוך- מוסדית, מערכת משפטית- ערכית",
        type: false
      }, {
        answer: "מערכת פורמאלית- ערכית, מערכת תרבותית- מוסדית",
        type: false
      }]
    }, {
      question: "''אילו אירועים התרחשו בעקבות חקיקת חוק יסוד ''ירושלים בירת ישראל",
      answers: [{
        answer: "שגריריות העבירו את מקום מושבן מירושלים לתל אביב",
        type: true
      }, {
        answer: "פותחו מוסדות כלכליים, חינוכיים ומסחריים רבים בירושלים",
        type: false
      }, {
        answer: "פותחו מוסדות כלכליים, חינוכיים ודתיים רבים בירושלים",
        type: false
      }, {
        answer: "שגריריות העבירו את מקום מושבן מתל אביב לירושלים",
        type: false
      }]
    }, {
      question: "אילו מקצועות מוגדים ''לימוד חובה'' עפ''י הגדרת הסוכנות היהודית במסמך הסטטוס קוו",
      answers: [{
        answer: "עברית, היסטוריה ומדעים",
        type: true
      }, {
        answer: "היסטוריה, שיטת מחקר, עברית",
        type: false
      }, {
        answer: "מורשת, עברית, היסטוריה",
        type: false
      }, {
        answer: "גיאוגרפיה, היסטוריה ועברית",
        type: false
      }]
    }, {
      question: "באיזו שנה החל מבקר המדינה לשמש כנציב תלונות הציבור",
      answers: [{
        answer: "1971",
        type: true
      }, {
        answer: "1972",
        type: false
      }, {
        answer: "1976",
        type: false
      }, {
        answer: "1974",
        type: false
      }]
    }, {
      question: "באיזו שנה נוסד בנק ישראל",
      answers: [{
        answer: "1954",
        type: true
      }, {
        answer: "1952",
        type: false
      }, {
        answer: "1956",
        type: false
      }, {
        answer: "1950",
        type: false
      }]
    }, {
      question: "באיזה שנה נכתב ההמנון",
      answers: [{
        answer: "1878",
        type: true
      }, {
        answer: "1887",
        type: false
      }, {
        answer: "1933",
        type: false
      }, {
        answer: "1947",
        type: false
      }]
    }, {
      question: "באילו מקרים מחוייב החייל לסרב פקודה",
      answers: [{
        answer: "כאשר הפקודה עשויה לפגוע בחייו של אדם במישירין",
        type: true
      }, {
        answer: "כאשר הפקודה ניתנה לא ממפקדו הישיר",
        type: false
      }, {
        answer: "כאשר הפקודה קשה לביצוע ונאלצים לערב גורם בכיר",
        type: false
      }, {
        answer: "כאשר הפקודה בלתי חוקית",
        type: false
      }]
    }, {
      question: "באילו ערים ישנה תחבורה ציבורית בשבת",
      answers: [{
        answer: "חיפה ואילת",
        type: true
      }, {
        answer: "ירושלים וחיפה",
        type: false
      }, {
        answer: "תל אביב וירושלים",
        type: false
      }, {
        answer: "נהריה ואילת",
        type: false
      }]
    }, {
      question: "בעקבות איזה אירוע הוגדר המושג ''פקודה בלתי חוקית בעליל''",
      answers: [{
        answer: "טבח בכפר קסם",
        type: true
      }, {
        answer: "מלחמת העצמאות",
        type: false
      }, {
        answer: "מלחמת ששת הימים",
        type: false
      }, {
        answer: "אירועי יום האדמה",
        type: false
      }]
    }, {
      question: "האם הדמוקרטיה משפיעה על צה''ל וחייליו",
      answers: [{
        answer: "כן, פקודותיו של צה''ל כפופות לעקרונות הדמוקרטיה ומחוייבות להיות שוויוניות",
        type: true
      }, {
        answer: "כן, חיילי צה''ל זכאים לקבל את כל הזכויות המגיעות לאזרחים במדינת ישראל",
        type: false
      }, {
        answer: "לא, צה''ל הוא מסגרת היררכית הפועלת על פי עקורונות שאינם כפופים לעקרונות הדמוקרטיה",
        type: false
      }, {
        answer: "לא, צה''ל הוא מסגרת נפרדת שלא כפופה לשום גורם ולכן חוקי הדמוקרטיה המדיניים אינם חלים בו",
        type: false
      }]
    }, {
      question: "''האם חוק השבות יכול להכריע בשאלה ''מיהו יהודי",
      answers: [{
        answer: "לא, החוק בנוסח המקורי לא יכול להכריע בשאלה זו",
        type: true
      }, {
        answer: "כן, פרט ליהודים המגדירים עצמם אתאיסטים, או ליהודים ניצולי שואה",
        type: false
      }, {
        answer: "לא, פרט ליהודים המגדירים עצמם אתאיסטים, או ליהודים ניצולי שואה",
        type: false
      }, {
        answer: "כן, החוק בנוסח המקורי יכול להכריע בשאלה זו",
        type: false
      }]
    }, {
      question: " כיצד נבחר מבקר המדינה",
      answers: [{
        answer: "בחירות חשאיות בכנסת",
        type: true
      }, {
        answer: "משעל עם",
        type: false
      }, {
        answer: "החלטת ראש הממשלה",
        type: false
      }, {
        answer: "החלטת נשיא המדינה",
        type: false
      }]
    }, {
      question: "כמה חברי כנסת מכהנים בכנסת ישראל",
      answers: [{
        answer: "120",
        type: true
      }, {
        answer: "80",
        type: false
      }, {
        answer: "100",
        type: false
      }, {
        answer: "140  ",
        type: false
      }]
    }, {
      question: "כמה חוקי יסוד קיימים במדינת ישראל",
      answers: [{
        answer: "11",
        type: true
      }, {
        answer: "10",
        type: false
      }, {
        answer: "12",
        type: false
      }, {
        answer: "15",
        type: false
      }]
    }, {
      question: "למושג יהדות שלוש פנים, מה הם",
      answers: [{
        answer: "דת, לאום ותרבות",
        type: true
      }, {
        answer: "דת, תרבות ומורשת	",
        type: false
      }, {
        answer: "דת, לאום ומורשת",
        type: false
      }, {
        answer: "מורשת, תרבות ולאום",
        type: false
      }]
    }, {
      question: "מבין האפשרויות הבאות, מה נחשבת לסוגיה מרכזית בדמוקרטיה הישראלית",
      answers: [{
        answer: "עיקרון הייצוגיות ועיקרון המשילות",
        type: true
      }, {
        answer: "חילול שבת",
        type: false
      }, {
        answer: "גיוס בנות למערך הלוחם",
        type: false
      }, {
        answer: "גיוס חובה לצה''ל",
        type: false
      }]
    }, {
      question: "''מה מהבאים מכונה ''מגילת זכויות האדם",
      answers: [{
        answer: "חוק יסוד כבוד האדם וחירותו",
        type: true
      }, {
        answer: "מסמך הסטטוס קוו",
        type: false
      }, {
        answer: "פשרת הררי",
        type: false
      }, {
        answer: "מגילת העצמאות",
        type: false
      }]
    }, {
      question: "מה מהבאים עיצב מקסים שמיר",
      answers: [{
        answer: "סמלה של מדינת ישראל",
        type: true
      }, {
        answer: "דגל ישראל",
        type: false
      }, {
        answer: "פסל המנורה המוצב מול הכנסת",
        type: false
      }, {
        answer: "סמל צה''ל",
        type: false
      }]
    }, {
      question: "מה ניתן למצוא בתוכן חוק שירות וביטחון",
      answers: [{
        answer: "גיל הגיוס, משך השירות, פטור אזרחי משירות",
        type: true
      }, {
        answer: "פקודות מטכ''ל, גיל הגיוס, פטור אזרחי משירות",
        type: false
      }, {
        answer: "משך השירות, הכשרות יסוד, פקודות מטכ''ל",
        type: false
      }, {
        answer: "הכשרות יסוד, משך השירות, גיל הגיוס",
        type: false
      }]
    }, {
      question: "מה קובע חוק השבות",
      answers: [{
        answer: "לכל יהודי זכות לעלות ארצה ולקבל אזרחות ישראלית",
        type: true
      }, {
        answer: "הגדרה למונח ''יהודי'' על בסיס ההלכה וחוקי הגיור",
        type: false
      }, {
        answer: "עליה לארץ וקבלת אזרחות ליהודים ניצולי שואה",
        type: false
      }, {
        answer: "הסדרת חובות השירות הסדיר בצה''ל",
        type: false
      }]
    }, {
      question: "מה תפקיד האופוזיציה",
      answers: [{
        answer: "להציע לציבור אלטרנטיבה שלטונית ולבקר את הממשלה",
        type: true
      }, {
        answer: "לגבות בכנסת את צעדי הממשלה ולהגן על החלטותיה",
        type: false
      }, {
        answer: "לייצג את הציבור בממשלה ולחוקק חוקים",
        type: false
      }, {
        answer: "להוביל את הכנסת ולבקר את הממשלה",
        type: false
      }]
    }, {
      question: "מה תפקידו השני של מבקר המדינה",
      answers: [{
        answer: "נציב תלונות הציבור",
        type: true
      }, {
        answer: "ממלא מקום נשיא המדינה",
        type: false
      }, {
        answer: "נגיד בנק ישראל",
        type: false
      }, {
        answer: "ח''כ באופוזיציה",
        type: false
      }]
    }, {
      question: "מהו אורך כהונתו של הנשיא",
      answers: [{
        answer: "שבע שנים",
        type: true
      }, {
        answer: "שש שנים",
        type: false
      }, {
        answer: "ארבע שנים",
        type: false
      }, {
        answer: "חמש שנים",
        type: false
      }]
    }, {
      question: "מהו אחד מתפקידי נשיא המדינה",
      answers: [{
        answer: "מקבל את כתבי האמנה של שגרירים זרים",
        type: true
      }, {
        answer: "נשיא המדינה יחליף את ראש הממשלה בהיעדרו",
        type: false
      }, {
        answer: "מסמיך שגרירים זרים בישראל",
        type: false
      }, {
        answer: "לקבוע את עונשם של אסירי מדינה בלבד",
        type: false
      }]
    }, {
      question: "מהו הגורם האחראי לבקרה ופיקוח על גופים ציבוריים",
      answers: [{
        answer: "משרד מבקר המדינה",
        type: true
      }, {
        answer: "הכנסת",
        type: false
      }, {
        answer: "בית הנשיא",
        type: false
      }, {
        answer: "בית המשפט העליון",
        type: false
      }]
    }, {
      question: "?מהו העקרון החשוב ביותר המנחה את מערכת בתי המשפט",
      answers: [{
        answer: "ניטרליות, עצמאית ונטולת פניות",
        type: true
      }, {
        answer: "שיוויוניות והימנעות מקבלת שוחד",
        type: false
      }, {
        answer: "גובה משכורת המונע קבלת שוחד",
        type: false
      }, {
        answer: "זכות הנאשם לייצוג עורך דין הולם",
        type: false
      }]
    }, {
      question: "מהו מטרת מסמך הסטטוס קוו",
      answers: [{
        answer: "דו קיום בין דתיים לחילוניים",
        type: true
      }, {
        answer: "דו קיום בין יהודים לבני מיעוטים",
        type: false
      }, {
        answer: "להגדיר את דיני השבת במדינת ישראל",
        type: false
      }, {
        answer: "להכיר במספר דתות במדינת ישראל",
        type: false
      }]
    }, {
      question: "?מהו מעמדו של חוק כבוד האדם וחירותו ביחס לחוקים אחרים",
      answers: [{
        answer: "עליון מעל כל חוקי המדינה",
        type: true
      }, {
        answer: "שווה ערך לחוקי היסוד",
        type: false
      }, {
        answer: "שווה ערך לחוקי היסוד",
        type: false
      }, {
        answer: "עליון מעל כל חוקי היסוד",
        type: false
      }]
    }, {
      question: "?מהו מקום מושבו של בנק ישראל",
      answers: [{
        answer: "ירושלים",
        type: true
      }, {
        answer: "חיפה",
        type: false
      }, {
        answer: "תל אביב",
        type: false
      }, {
        answer: "באר שבע",
        type: false
      }]
    }, {
      question: "?.'' מהו מקור השם ''כנסת",
      answers: [{
        answer: "הכנסת הגדולה שהתכנסה בי-ם בימי בית שני",
        type: true
      }, {
        answer: "בית הכנסת הגדול בעיירת טיקוצ'ין שבפולין",
        type: false
      }, {
        answer: "נלקח מהמילה כינוסייה, מהשפה הלטינית",
        type: false
      }, {
        answer: "מקום משכן זקני העיר בתקופת השופטים",
        type: false
      }]
    }, {
      question: "?מהו נציב תלונות הציבור",
      answers: [{
        answer: "גוף שמרכז את תלונות האזרחים שנפגעו מגוף ציבורי",
        type: true
      }, {
        answer: "גוף המגן על זכויות התושבים במסגרת עירונית",
        type: false
      }, {
        answer: "גוף העוטר לבג''צ לטובת זכויותיהם של אזרחים",
        type: false
      }, {
        answer: "גוף ממשלתי המרכז את עבירות הציבור על החוק",
        type: false
      }]
    }, {
      question: "?מהו עיקרה של היהדות כדת",
      answers: [{
        answer: "מצוות ההלכה והמסורת",
        type: true
      }, {
        answer: "גורל וייעוד המשותפים לכל יהודי הארץ",
        type: false
      }, {
        answer: "רעיונות וסמלים לאומיים",
        type: false
      }, {
        answer: "הזיקה למדינת ישראל",
        type: false
      }]
    }, {
      question: "?מהו שמו של הגוף המצומצם הנדרש לקבלת החלטות מיידיות בממשלה",
      answers: [{
        answer: "המטבחון",
        type: true
      }, {
        answer: "הדרג המדיני",
        type: false
      }, {
        answer: "האופוזציה",
        type: false
      }, {
        answer: "הקואליציה",
        type: false
      }]
    }, {
      question: "?מהו תפקידה של הסוכנות היהודית לאחר קום המדינה",
      answers: [{
        answer: "קידום העלייה והקליטה בארץ",
        type: true
      }, {
        answer: "ייצוג הישוב היהודי אל מול השלטונות הבריטים",
        type: false
      }, {
        answer: "מכירת קרקעות ליהודים לצורך הקמת יישובי חומה ומגדל",
        type: false
      }, {
        answer: "תמיכה כלכלית בצה''ל",
        type: false
      }]
    }, {
      question: "מהו תפקידה של קק''ל",
      answers: [{
        answer: "איסוף כספים עבור רכישת קרקעות בארץ",
        type: true
      }, {
        answer: "פיתוח ישובים יהודים חדשים בארץ",
        type: false
      }, {
        answer: "הפשרת קרקעות לבנייה ופיתוח",
        type: false
      }, {
        answer: "מכירת קרקעות לבעלי הון לצורך פיתוח",
        type: false
      }]
    }, {
      question: "?מהו תפקידו של נגיד בנק ישראל",
      answers: [{
        answer: "היועץ הכלכלי לממשלה",
        type: true
      }, {
        answer: "מנכ''ל הבנקים הישראלי",
        type: false
      }, {
        answer: "נציב תלונות הציבור",
        type: false
      }, {
        answer: "היועץ הכלכלי של שר האוצר",
        type: false
      }]
    }, {
      question: "?מהי הצורה בה מתכנסת כנסת ישראל",
      answers: [{
        answer: "מליאה",
        type: true
      }, {
        answer: "מפלגות",
        type: false
      }, {
        answer: "ועדות",
        type: false
      }, {
        answer: "רשויות",
        type: false
      }]
    }, {
      question: "?מהי חשיבותו של עיקרון הפרדת הרשויות",
      answers: [{
        answer: "הרשויות מאזנות ובולמות האחת את השניה",
        type: true
      }, {
        answer: "איזונה של הרשות המחוקקת",
        type: false
      }, {
        answer: "הרשות המבצעת נתמכת ברשות השופטת",
        type: false
      }, {
        answer: "יצירת סדר וארגון בתחומי האחרויות בין הרשויות",
        type: false
      }]
    }, {
      question: "?מהי משמעות חוק השבות לגבי אופייה של מדינת ישראל",
      answers: [{
        answer: "המדינה הינה מדינה יהודית ובית פוטנציאלי לכל יהודי התפוצות",
        type: true
      }, {
        answer: "המדינה תהיה מושתת על יסודות החירות השיוויון והחופש",
        type: false
      }, {
        answer: "מדינת ישראל תהיה מושתת על עקרונות היהדות הדתית",
        type: false
      }, {
        answer: "מדינת ישראל תהווה כור היתוך לכלל הדתות השמיות בה",
        type: false
      }]
    }, {
      question: "מהי פקודה בלתי חוקית בעליל",
      answers: [{
        answer: "פקודה בלתי חוקית שעלולה לפגוע בחיי אדם",
        type: true
      }, {
        answer: "פקודה שחובה לבצע ללא עוררין",
        type: false
      }, {
        answer: "פקודה בלתי חוקית שחובה לבצע",
        type: false
      }, {
        answer: "פקודה אשר מעליה מתנוסס דגל אדום",
        type: false
      }]
    }, {
      question: "?מהי פשרת הררי",
      answers: [{
        answer: "חקיקת חוקי יסוד במקום חוקה סדורה",
        type: true
      }, {
        answer: "תיקון לחוק השבות",
        type: false
      }, {
        answer: "הסכם דו קיום בין חילונים לדתיים",
        type: false
      }, {
        answer: "הסכם דו קיום בין יהודים לבני מיעוטים",
        type: false
      }]
    }, {
      question: "מהי שיטת הבחירות הנהוגה בישראל",
      answers: [{
        answer: "פרלמנטרית",
        type: true
      }, {
        answer: "גלויה",
        type: false
      }, {
        answer: "ישירה",
        type: false
      }, {
        answer: "נשיאותית",
        type: false
      }]
    }, {
      question: "?מהם עקרונות היסוד שעל פיהם פועלת מערכת המשפט",
      answers: [{
        answer: "שיוויון בפני החוק, פומביות, הזכות להליך הוגן ושקיפות המשפט",
        type: true
      }, {
        answer: "שיוויון בפני החוק, הזכות להליך הוגן ושקיפות המשפט, ערך חיי אדם",
        type: false
      }, {
        answer: "פומביות, ערך חיי אדם, הזכות להליך הוגן ושקיפות המשפט",
        type: false
      }, {
        answer: "ערך חיי אדם, פומביות, שווין בפני החוק",
        type: false
      }]
    }, {
      question: "מהם ראשי התיבות קק''ל",
      answers: [{
        answer: "קרן קיימת לישראל",
        type: true
      }, {
        answer: "קרן קיומית לישראל",
        type: false
      }, {
        answer: "קניין קרקעות לישראל",
        type: false
      }, {
        answer: "קרן קרקעות לישראל",
        type: false
      }]
    }, {
      question: "?מהם שני התפקידים העיקריים של כנסת ישראל",
      answers: [{
        answer: "חקיקת חוקים, בקרה על עבודת הממשלה",
        type: true
      }, {
        answer: "הכרעות בנושאי חוץ וכלכלה, חקיקת חוקים",
        type: false
      }, {
        answer: "שיפוט, אכיפת חוקים",
        type: false
      }, {
        answer: "הכרעות בנושאי חוץ וביטחון, אכיפת חוקים",
        type: false
      }]
    }, {
      question: "מהם שני סוגי הדמוקרטיה",
      answers: [{
        answer: "ישירה ועקיפה",
        type: true
      }, {
        answer: "ישירה ונשיאותית",
        type: false
      }, {
        answer: "פרטנית וכללית",
        type: false
      }, {
        answer: "סמויה וחשאית",
        type: false
      }]
    }, {
      question: "?מהן שלוש הרשויות המצויות בדמוקרטיה",
      answers: [{
        answer: "מחוקקת, מבצעת ושופטת",
        type: true
      }, {
        answer: "מחוקקת, צבאית וחינוכית",
        type: false
      }, {
        answer: "מחוקקת, צבאית ושופטת",
        type: false
      }, {
        answer: "מחוקקת, מבצעת וצבאית",
        type: false
      }]
    }, {
      question: "מהן שתי דרכי פעולתה של כנסת ישראל",
      answers: [{
        answer: "מליאה וועדות",
        type: true
      }, {
        answer: "אופוזיציה וקואליציה",
        type: false
      }, {
        answer: "אמון ואי אמון",
        type: false
      }, {
        answer: "משאל עם והצבעה תוך ממשלתית",
        type: false
      }]
    }, {
      question: "מי הקים את ההסתדרות הציונית העולמית",
      answers: [{
        answer: "תיאדור זאב הרצל",
        type: true
      }, {
        answer: "זאב ז'בוטינסקי",
        type: false
      }, {
        answer: "דוד בן גוריון",
        type: false
      }, {
        answer: "גולדה מאיר",
        type: false
      }]
    }, {
      question: "?מי ייסד את הרבנות הראשית",
      answers: [{
        answer: "הרב אברהם הכהן יצחק קוק",
        type: true
      }, {
        answer: "הרב עובדיה יוסף",
        type: false
      }, {
        answer: "הרב מאיר לאו",
        type: false
      }, {
        answer: "הרב בינימין הלוי",
        type: false
      }]
    }, {
      question: "?מי ממונה על מערכת הנישואין והגירושין בישראל",
      answers: [{
        answer: "בתי הדין הרבניים",
        type: true
      }, {
        answer: "בית הדין לנישואין וגירושין",
        type: false
      }, {
        answer: "בתי המשפט המחוזיים",
        type: false
      }, {
        answer: "המוסד לנישואין אזרחיים",
        type: false
      }]
    }, {
      question: "?מי עומד בראש מדינת ישראל- על פי חוק",
      answers: [{
        answer: "נשיא המדינה",
        type: true
      }, {
        answer: "ראש הממשלה",
        type: false
      }, {
        answer: "בית המשפט העליון",
        type: false
      }, {
        answer: "מבקר המדינה",
        type: false
      }]
    }, {
      question: "?מי רשאי לפנות לנציב קבילות החיילים",
      answers: [{
        answer: "כל חייל ומפקד בסדיר ובמילואים",
        type: true
      }, {
        answer: "כל חייל בסדיר בלבד",
        type: false
      }, {
        answer: "כל אזרח במדינת ישראל",
        type: false
      }, {
        answer: "כל גורם ביטחוני",
        type: false
      }]
    }, {
      question: "?ממה מורכבת ממשלת ישראל",
      answers: [{
        answer: "מסך כל השרים בממשלה",
        type: true
      }, {
        answer: "מהאופוזיציה",
        type: false
      }, {
        answer: "120 ח''כים",
        type: false
      }, {
        answer: " הנשיא, ראש הממשלה ושופטים",
        type: false
      }]
    }, {
      question: "?מתי הוגדרה בחוק מדינת ישראל כמדינה יהודית דמוקרטית",
      answers: [{
        answer: "1992",
        type: true
      }, {
        answer: "1948",
        type: false
      }, {
        answer: "1967",
        type: false
      }, {
        answer: " 1994",
        type: false
      }]
    }, {
      question: "?מתי הוקמה קק''ל",
      answers: [{
        answer: "1901",
        type: true
      }, {
        answer: "1907",
        type: false
      }, {
        answer: "1922",
        type: false
      }, {
        answer: "1918",
        type: false
      }]
    }, {
      question: "''מתי התקבל בכנסת ''חוק יסוד: ירושלים בירת ישראל",
      answers: [{
        answer: "1980",
        type: true
      }, {
        answer: "1956",
        type: false
      }, {
        answer: "1967",
        type: false
      }, {
        answer: "1986",
        type: false
      }]
    }, {
      question: "?מתי התקבל בכנסת חוק השבות",
      answers: [{
        answer: "1950",
        type: true
      }, {
        answer: "1947",
        type: false
      }, {
        answer: "1949",
        type: false
      }, {
        answer: "1970",
        type: false
      }]
    }, {
      question: "?מתי התקבל בכנסת חוק כבוד האדם וחירותו",
      answers: [{
        answer: "1992",
        type: true
      }, {
        answer: "1990",
        type: false
      }, {
        answer: "1995",
        type: false
      }, {
        answer: " 2000",
        type: false
      }]
    }, {
      question: "?מתי התקבל בכנסת חוק שירות הביטחון",
      answers: [{
        answer: "1949",
        type: true
      }, {
        answer: "1947",
        type: false
      }, {
        answer: "1948",
        type: false
      }, {
        answer: "1950",
        type: false
      }]
    }, {
      question: "?מתי נבחר רשמית דגלה של מדינת ישראל",
      answers: [{
        answer: "28.10.1948 ",
        type: true
      }, {
        answer: "22.11.1948",
        type: false
      }, {
        answer: "28.11.1947",
        type: false
      }, {
        answer: "22.10.1947",
        type: false
      }]
    }, {
      question: "?מתי נוסד ארגון אגודת ישראל",
      answers: [{
        answer: "1912",
        type: true
      }, {
        answer: "1918 ",
        type: false
      }, {
        answer: "1924",
        type: false
      }, {
        answer: "1927",
        type: false
      }]
    }, {
      question: "?מתי נוסדה הסוכנות היהודית",
      answers: [{
        answer: "1929",
        type: true
      }, {
        answer: "1921",
        type: false
      }, {
        answer: "1925",
        type: false
      }, {
        answer: "1939",
        type: false
      }]
    }, {
      question: "?מתי נוסדה הרבנות הראשית",
      answers: [{
        answer: "(תרפ''א (1921",
        type: true
      }, {
        answer: "(תרפ''א (1925",
        type: false
      }, {
        answer: "(תרפ''א (1928",
        type: false
      }, {
        answer: "(תרפ''א (1929",
        type: false
      }]
    }, {
      question: "?מתי נקבע ''התקווה'' כהמנון הרשמי של התנועה הציונית",
      answers: [{
        answer: "1933",
        type: true
      }, {
        answer: "בקונגרס ה16",
        type: false
      }, {
        answer: "בקונגרס ה19",
        type: false
      }, {
        answer: "1903",
        type: false
      }]
    }, {
      question: "?מתי תוקף חוק השבות",
      answers: [{
        answer: "1970",
        type: true
      }, {
        answer: "1948",
        type: false
      }, {
        answer: "1950",
        type: false
      }, {
        answer: "1989",
        type: false
      }]
    }, {
      question: "?על ידי מי נבחר מבקר המדינה",
      answers: [{
        answer: "הכנסת",
        type: true
      }, {
        answer: "הממשלה",
        type: false
      }, {
        answer: "הנשיא",
        type: false
      }, {
        answer: "הציבור",
        type: false
      }]
    }, {
      question: "?על מה מושתת המהפכה החוקתית",
      answers: [{
        answer: "העצמת חוק כבוד האדם וחירותו על פני חוקים אחרים",
        type: true
      }, {
        answer: "חקיקת חוקי יסוד",
        type: false
      }, {
        answer: "פשרת הררי",
        type: false
      }, {
        answer: "האירוע בו הוגדרה ישראל כמדינה יהודית דמוקרטית",
        type: false
      }]
    }, {
      question: "?על מה מושתת חזון הקמת מדינה יהודית בארץ ישראל",
      answers: [{
        answer: "חזונם של נביאי ישראל",
        type: true
      }, {
        answer: "חזונו של מנחם בגין",
        type: false
      }, {
        answer: "על עקרונות קונסרבטיביים דתיים",
        type: false
      }, {
        answer: "על עקרונות פלורליסטים חילוניים",
        type: false
      }]
    }, {
      question: "?על מה ממונה הרבנות הראשית",
      answers: [{
        answer: "מערכת הנישואין והגירושין, ניהול מערכת הכשרות ותחזוק מתקנים דתיים",
        type: true
      }, {
        answer: "ניהול מערכת הכשרות, שיפוט על פי עקרונות ההלכה ומערכת הנישואין והגירושין",
        type: false
      }, {
        answer: "שיפוט על פי עקרונות ההלכה, ניהול מערכת הכשרות ותחזוק מתקנים דתיים",
        type: false
      }, {
        answer: "תחזוק מתקנים דתיים, שיפוט על פי עקרונות ההלכה ומערכת הנישואין והגירושין",
        type: false
      }]
    }, {
      question: "?עם מה מחוייב החייל להזדהות בעת שהוטלה עליו משימה",
      answers: [{
        answer: "חובת ביצוע המשימה",
        type: true
      }, {
        answer: "חובת קבלת המשימה",
        type: false
      }, {
        answer: "חובת העברת המשימה",
        type: false
      }, {
        answer: "המשימה עצמה",
        type: false
      }]
    }, {
      question: "היא התפילה הפותחת את יום הכיפור, _____ היא התפילה המסיימת אותו,____",
      answers: [{
        answer: "כל נדרי, נעילה",
        type: true
      }, {
        answer: "תשליך, נעילה",
        type: false
      }, {
        answer: "שחרית, ערבית",
        type: false
      }, {
        answer: "שחרית, כל נדרי",
        type: false
      }]
    }, {
      question: "?איזו מצווה היא אינה מצוות יסוד באסלאם",
      answers: [{
        answer: "פקידת בתי קברות",
        type: true
      }, {
        answer: "הצהרה על דבקות בעיקרי האמונה",
        type: false
      }, {
        answer: "חובה לתת צדקה",
        type: false
      }, {
        answer: "צום הרמאדן",
        type: false
      }]
    }, {
      question: "?איזו פרשה כתובה על הקלף הנמצא במזוזה",
      answers: [{
        answer: "פרשת שמע",
        type: true
      }, {
        answer: "פרשת ויצא",
        type: false
      }, {
        answer: "פרשת ויבוא",
        type: false
      }, {
        answer: "פרשת לך לך",
        type: false
      }]
    }, {
      question: "?אילו תפילות הסידור מכיל",
      answers: [{
        answer: "כלל התפילות והברכות היומיומיות",
        type: true
      }, {
        answer: "תפילות לחגים",
        type: false
      }, {
        answer: "תפילות לשבתות",
        type: false
      }, {
        answer: "תפילת הקדיש",
        type: false
      }]
    }, {
      question: "",
      answers: [{
        answer: "",
        type: true
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }]
    }, {
      question: "....אם ארצה להתפלל בתקופת החגים איעזר ב",
      answers: [{
        answer: "מחזור",
        type: true
      }, {
        answer: "משנה",
        type: false
      }, {
        answer: "תלמוד",
        type: false
      }, {
        answer: "תוספתא",
        type: false
      }]
    }, {
      question: "?באיזו שנה נקבע בחוק שיום הזיכרון לחללי מערכות ישראל יחול סמוך ליום העצמאות",
      answers: [{
        answer: "1963",
        type: true
      }, {
        answer: "1946",
        type: false
      }, {
        answer: "1953",
        type: false
      }, {
        answer: "1966",
        type: false
      }]
    }, {
      question: "?..בשנים האחרונות ראש השנה לאילנות הפך להיות מזוהה עם",
      answers: [{
        answer: "פעילויות הקשורות לאיכות הסביבה ושמירה על הקיימות",
        type: true
      }, {
        answer: "אכילת פירות יבשים",
        type: false
      }, {
        answer: "טיול בשמורות טבע באמצעות כרטיס קש''ט",
        type: false
      }, {
        answer: "קיום סדר ט''ו בשבט",
        type: false
      }]
    }, {
      question: "?היכן נקבר יצחק רבין ז''ל",
      answers: [{
        answer: "הר הרצל",
        type: true
      }, {
        answer: "בכיכר מלכי ישראל",
        type: false
      }, {
        answer: "הר הזיתים",
        type: false
      }, {
        answer: "שדה בוקר",
        type: false
      }]
    }, {
      question: " _____חג הסוכות חל בתאריך ______ ,ונמשך",
      answers: [{
        answer: "ט''ו בתשרי, 7 ימים",
        type: true
      }, {
        answer: "י' בתשרי, 7 ימים",
        type: false
      }, {
        answer: "ט''ו בתשרי, 4 ימים",
        type: false
      }, {
        answer: "י' בתשרי, 4 ימים",
        type: false
      }]
    }, {
      question: "חוגגים את חג הפסחא ביום בו",
      answers: [{
        answer: "ישו קם לתחייה",
        type: true
      }, {
        answer: "טבלו את ישו",
        type: false
      }, {
        answer: "ישו הלך על המים",
        type: false
      }, {
        answer: "צלבו את ישו",
        type: false
      }]
    }, {
      question: " _____יום הזיכרון הממלכתי לבנימין זאב הרצל ז''ל חל בתאריך ____, ביום זה מציינים את ",
      answers: [{
        answer: "י' באייר, יום הולדתו",
        type: true
      }, {
        answer: "ה' באייר, יום מותו",
        type: false
      }, {
        answer: "י' בחשוון, יום הקמתה של התנועה הציונית",
        type: false
      }, {
        answer: "ה' בחשוון , חזונו ופועלו בבית הספר ובמחנות צה''ל",
        type: false
      }]
    }, {
      question: " __________ יום השואה הבינלואמי חל בתאריך ______ מכיוון שביום זה",
      answers: [{
        answer: "עשרים ושבע לינואר, שוחרר מחנה ההשמדה אושוויץ",
        type: true
      }, {
        answer: "עשרים ושבע לינואר, חל גטו וורשה",
        type: false
      }, {
        answer: "עשרים ושש לינואר, החל מרד גטו קרקוב",
        type: false
      }, {
        answer: "עשרים ושש לינואר, נגמרה מלחמת העולם השניה",
        type: false
      }]
    }, {
      question: "?כיצד מכונה תפילת העמידה",
      answers: [{
        answer: "תפילת השמונה עשרה",
        type: true
      }, {
        answer: "תפילת כל נדרי",
        type: false
      }, {
        answer: "תפילת הערבית",
        type: false
      }, {
        answer: "תפילת השחרית",
        type: false
      }]
    }, {
      question: "?כיצד נהרג רחבעם זאבי ז''ל ",
      answers: [{
        answer: "נרצח, ע''י מתנקשים פלסטינים במלון בירושלים",
        type: true
      }, {
        answer: "בתאונת דרכים",
        type: false
      }, {
        answer: "במהלך האינתיפאדה השניה",
        type: false
      }, {
        answer: "נרצח, בגין קבלת שוחד",
        type: false
      }]
    }, {
      question: "_____כל יום במהלך צום הרמדאן מתחיל בארוחת ה-____ ומסתיים בארוחת ה",
      answers: [{
        answer: "צחור, אפטאר",
        type: true
      }, {
        answer: "מפסקת, עיד אל פיטר",
        type: false
      }, {
        answer: "אפטאר, עיד אל פיטר",
        type: false
      }, {
        answer: "אפטאר, צחור",
        type: false
      }]
    }, {
      question: "?. כמה פעמים בשבוע יהודי מאמין מניח תפילין ",
      answers: [{
        answer: "שש - מלבד שבת",
        type: true
      }, {
        answer: "חמש - פעם אחת ביום לא כולל שישי שבת",
        type: false
      }, {
        answer: "שבע - בכל ימות השבות, כולל שישי שבת",
        type: false
      }, {
        answer: "שמונה עשרה - שלוש פעמים ביום",
        type: false
      }]
    }, {
      question: "?לאיזה כיוון מתפללים המוסלמים",
      answers: [{
        answer: "''העיר מכה ''אלחראם",
        type: true
      }, {
        answer: "הר הבית",
        type: false
      }, {
        answer: "מסגד אל אקצא",
        type: false
      }, {
        answer: "אל-קודס",
        type: false
      }]
    }, {
      question: "?לאילו שני סוגי מצוות מתחלקת התורה",
      answers: [{
        answer: "בין אדם למקום ובין אדם לחברו",
        type: true
      }, {
        answer: "בין אדם לאלוהים ובין אדם להוריו",
        type: false
      }, {
        answer: "מצוות מעשיות ומצוות רוחניות",
        type: false
      }, {
        answer: "מצוות לטובת הפרט ומצוות לטובת הכלל",
        type: false
      }]
    }, {
      question: "?לאן עולים לרגל לחג הנביא אליהו ",
      answers: [{
        answer: "קבר הנביא אלח'אדר",
        type: true
      }, {
        answer: "הר הבית",
        type: false
      }, {
        answer: "מכה",
        type: false
      }, {
        answer: "מסגד אל-אקצה",
        type: false
      }]
    }, {
      question: "?למי קדוש קבר הנביא שועייב",
      answers: [{
        answer: "דרוזים",
        type: true
      }, {
        answer: "ארמנים",
        type: false
      }, {
        answer: "צ'רקסים",
        type: false
      }, {
        answer: "בדואים",
        type: false
      }]
    }, {
      question: "?מדוע ארץ ישראל קדושה לנצרות",
      answers: [{
        answer: "מכיוון שלפי האמונה ישו חי בה כל חייו",
        type: true
      }, {
        answer: "בגלל מיקום הר הבית",
        type: false
      }, {
        answer: "בשל ריבוי הכנסיות",
        type: false
      }, {
        answer: "כי מקור הנצרות הוא היהדות",
        type: false
      }]
    }, {
      question: "?מדוע חל צום י''ז בתמוז ",
      answers: [{
        answer: "פריצת חומות ירושלים בידי נבוכדנצר",
        type: true
      }, {
        answer: "חורבן בית ראשון ושני",
        type: false
      }, {
        answer: "מותו של גדליה בן אחיקם",
        type: false
      }, {
        answer: "תחילת המצור על ירושלים",
        type: false
      }]
    }, {
      question: "?מדוע ישנה שנה מעוברת ",
      answers: [{
        answer: "כדי לסנכרן בין מחזור הירח והשמש",
        type: true
      }, {
        answer: "כדי לייחד את לוח השנה העברי",
        type: false
      }, {
        answer: "כדי שהירח יעבור מעל פני השמש",
        type: false
      }, {
        answer: "כדי לייחד את לוח השנה העברי",
        type: false
      }]
    }, {
      question: "?מדוע שוברים כוס בטקס הנישואים",
      answers: [{
        answer: "לזכר חורבן בית המקדש והיציאה לגלות",
        type: true
      }, {
        answer: "לברכה ולשלום הבית",
        type: false
      }, {
        answer: "לזכר מרד המכבים",
        type: false
      }, {
        answer: "אמונה עתיקה",
        type: false
      }]
    }, {
      question: "?מה הוא ההבדל העיקרי בין היהודים ה''קראים'' ליהודים פשוטים",
      answers: [{
        answer: "הקראים אינם מקבלים את פרשנות חז''ל לתורה שבכתב",
        type: true
      }, {
        answer: "הקראים אינם מאמינים במשה",
        type: false
      }, {
        answer: "הקראים הינם קבוצה בדת השומרונית",
        type: false
      }, {
        answer: "הקראים הינם שלוחה בדת הרפורמית",
        type: false
      }]
    }, {
      question: "?מה היה כינויו של הרצל ",
      answers: [{
        answer: "חוזה המדינה",
        type: true
      }, {
        answer: "אחד העם",
        type: false
      }, {
        answer: "הראשון לציון",
        type: false
      }, {
        answer: "הנדבן הידוע",
        type: false
      }]
    }, {
      question: "?מה מבדיל בין דרוזים למוסלמים",
      answers: [{
        answer: "הדרוזים מאמינים ש''אלחכם'' היה נביא אמת ואילו המוסלמים מאמינים שמוחמד היה הנביא האחרון, ומתקופתו האמונה בנביא הייתה כפירה",
        type: true
      }, {
        answer: "הדרוזים מאמינים במספר אלים בעוד שהמוסלמים מאמינים באל אחד",
        type: false
      }, {
        answer: "הדרוזים מאמינים בדתם וחיים לפי תרבותם בעוד שהמוסלמים נאמנים לאדמתם ולמדינה בה הם חיים",
        type: false
      }, {
        answer: "''הדרוזים מאמינים בפרקים מסוימים בקוראן שנכתבו ב''אל מדינה'' לעומת המוסלמים שמאמינים בכול פרקי הקוראן- אלו שנכתבו ב''אל מדינה'' ואילו שנכתבו ב''מכה",
        type: false
      }]
    }, {
      question: "?מה מסמל חג הקורבן ",
      answers: [{
        answer: "מועד העלייה לרגל למכה",
        type: true
      }, {
        answer: "הקרבת מזבח לאללה",
        type: false
      }, {
        answer: "טיהור הגוף והנפש",
        type: false
      }, {
        answer: "תחילת לוח השנה ההג'רי",
        type: false
      }]
    }, {
      question: "?מה מסמל צום הרמאדן",
      answers: [{
        answer: "טיהור הגוף והנפש ממחשבות מעשים רעים",
        type: true
      }, {
        answer: "טקס התבגרות בדת המוסלמית",
        type: false
      }, {
        answer: "כפרה וסליחה על השנה שעברה",
        type: false
      }, {
        answer: "חיזוק הגוף והנפש בעזרת הרעבה",
        type: false
      }]
    }, {
      question: "?מה מסמל צום י' בטבת",
      answers: [{
        answer: "תחילת המצור על ירושלים וחורבנה",
        type: true
      }, {
        answer: "חורבן בית ראשון ושני",
        type: false
      }, {
        answer: "מותו של גדליה בן אחיקם",
        type: false
      }, {
        answer: "פריצת חומות ירושלים בידי נבוכדנצר",
        type: false
      }]
    }, {
      question: "?מה מסמלות שניים עשר המשואות",
      answers: [{
        answer: "שבטי ישראל",
        type: true
      }, {
        answer: "מרידות בגטאות",
        type: false
      }, {
        answer: "חטיבות צה''ל",
        type: false
      }, {
        answer: "חודשי השנה",
        type: false
      }]
    }, {
      question: "?מה מסמלת ביצת הפסחא",
      answers: [{
        answer: "פריון והיווצרותם של חיים חדשים",
        type: true
      }, {
        answer: "אור השמש",
        type: false
      }, {
        answer: "טבע",
        type: false
      }, {
        answer: "טוהרת הגוף והנפש",
        type: false
      }]
    }, {
      question: "?מה מסמלת ברית המילה",
      answers: [{
        answer: "את הקשר בין עם ישראל לאלוהים",
        type: true
      }, {
        answer: "את הכאב והיגון שעבר העם היהודי מיציאת מצרים",
        type: false
      }, {
        answer: "את הזיקה למצוות פרו ורבו",
        type: false
      }, {
        answer: "את הזכר של בניית הפסל במעמד הר סיני",
        type: false
      }]
    }, {
      question: "?מה מסמלת התקיעה בשופר",
      answers: [{
        answer: "הצורך להתעורר לתשובה ואזכור סיפור עקדת יצחק",
        type: true
      }, {
        answer: "יציאת מצרים",
        type: false
      }, {
        answer: "צליל השנה החדשה",
        type: false
      }, {
        answer: "בריאת העולם",
        type: false
      }]
    }, {
      question: "?מה מציין צום גדליה",
      answers: [{
        answer: "רציחתו של גדליה בן אחיקם בידי מתנקש",
        type: true
      }, {
        answer: "מותו של גדליה, מנהיג הקרב מול הפלישתים",
        type: false
      }, {
        answer: "'עונשו של הנביא גדליה בידי ה",
        type: false
      }, {
        answer: "סקילתו באבנים של גדליה בידי העם",
        type: false
      }]
    }, {
      question: "?מה מציינים בתאריך כ''ב בתשרי ",
      answers: [{
        answer: "את יום שמיני עצרת ושמחת תורה",
        type: true
      }, {
        answer: "את יום כיפורים",
        type: false
      }, {
        answer: "את תחילת חג סוכות",
        type: false
      }, {
        answer: "תחילת תענית אסתר",
        type: false
      }]
    }, {
      question: "?מה מתארת מגילת רות",
      answers: [{
        answer: "גיורה של רות המואבייה",
        type: true
      }, {
        answer: "הולדתה של רות, אמו של רחבעם",
        type: false
      }, {
        answer: "לידתו של רחבעם, מאמו העקרה רות",
        type: false
      }, {
        answer: "רות הנביאה הראשונה בתנ''ך",
        type: false
      }]
    }, {
      question: "?''מהו ''שולחן ערוך",
      answers: [{
        answer: "ספר ההלכה המרכזי",
        type: true
      }, {
        answer: "השולחן בקבלת שבת",
        type: false
      }, {
        answer: "תפילה בתחילת סעודה",
        type: false
      }, {
        answer: "התפילה הנהוגה בערב ליל הסדר",
        type: false
      }]
    }, {
      question: "?מהו ההבדל המהותי בין התורה שבכתב לתורה שבעל פה",
      answers: [{
        answer: "התורה שבכתב מתארת באופן תמציתי, ואילו התורה שבעל פה מפרטת מתארת ומרחיבה",
        type: true
      }, {
        answer: "התורה שבכתב עוברת בכתב ואילו התורה שבעל פה עוברת מדור לדור מפה לאוזן",
        type: false
      }, {
        answer: "התורה שבכתב מכילה את כלל התנ''ך ואילו התורה שבעל פה מכילה פרטים כלליים, חוקים, מצוות והלכות",
        type: false
      }, {
        answer: "התורה שבכב הועברה מה' במעמד הר סיני למשה ועמו, ואילו התורה שבעל פה הועברה בתקופה מוקדמת יותר",
        type: false
      }]
    }, {
      question: "?מהו חג הנובי גוד",
      answers: [{
        answer: "ערב השנה החדשה מצוין ברוסיה ובחבר העמים",
        type: true
      }, {
        answer: "חג המציין את הולדת ישו",
        type: false
      }, {
        answer: "חג המציין את הולדתו של הנביא גוד",
        type: false
      }, {
        answer: "ערב ראש השנה החדשה ליהודי צ'כיה",
        type: false
      }]
    }, {
      question: "מהו חג הסיגד",
      answers: [{
        answer: "צום, טיהרה והתחדשות. החג מכיל טקס שבמהלכו חודשה הברית בין העם לאל",
        type: true
      }, {
        answer: "צום, יום אבל",
        type: false
      }, {
        answer: "חג לעדה הנוצרית הקתולית, שהמהלכו נהוג לעלות להר הבית",
        type: false
      }, {
        answer: "חג לאדיגים במהלכו מגיעים לאתר הטבילה לטוהרה מחודשת",
        type: false
      }]
    }, {
      question: "?מהו מצעד החיים",
      answers: [{
        answer: "מצעד הנערך בין אושוויץ לבירקנאו בימנו",
        type: true
      }, {
        answer: "מצעד הנערך מטקוצ'ין ליער לופחובה בימנו",
        type: false
      }, {
        answer: "מצעד הניצולים בגמר המלחמה מהמחנות לגרמניה",
        type: false
      }, {
        answer: "מצעד בהשתתפות ילדיהם ונכדיהם של ניצולי השואה",
        type: false
      }]
    }, {
      question: "?מהו נביא",
      answers: [{
        answer: "אדם שחווה התגלות על-אנושית",
        type: true
      }, {
        answer: "מגד עתידות",
        type: false
      }, {
        answer: "שליח המלך",
        type: false
      }, {
        answer: "אדם המפיץ את דתו",
        type: false
      }]
    }, {
      question: "''מהי ''תוספתא",
      answers: [{
        answer: "מסמך המכיל את ה''משניות'' (ברייתות) שלא נכללו בתוך המשנה",
        type: true
      }, {
        answer: "קובץ הלכתי שנערך ונחתם ע''י רבי יהודה הנשיא",
        type: false
      }, {
        answer: "לקט דרשות, סיפורים והדרכות המסודרים בזיקה לפסוקי המקרא",
        type: false
      }, {
        answer: "דיונים ביחס לפסיקת ההלכה",
        type: false
      }]
    }, {
      question: "?מהי הלכה",
      answers: [{
        answer: "שם כולל לחוקים, דינים ומצוות של היהדות",
        type: true
      }, {
        answer: "חוקים בסיסיים שנועדו להטמיע מוסר בעם ישראל",
        type: false
      }, {
        answer: "חוקים לשמירת שבת",
        type: false
      }, {
        answer: "'קובץ מצוות בין אדם לה",
        type: false
      }]
    }, {
      question: "?מהי התורה שבעל פה",
      answers: [{
        answer: "התורה המפרשת, מבריאה ומסבירה את התורה שבכתב",
        type: true
      }, {
        answer: "חמשת חומשי התורה וסדרי המשנה",
        type: false
      }, {
        answer: "תורה העוברת מדור לדור בעל פה, ואינה כתובה כלל בשום מקום",
        type: false
      }, {
        answer: "התורה שמעביר אברהם לעמו במעמד הר סיני",
        type: false
      }]
    }, {
      question: "?מהי כשרות",
      answers: [{
        answer: "חוקים המגדירים אילו סוגי מזון מותרים לאכילה ביהדות",
        type: true
      }, {
        answer: "מערכות חוקים להכשרת כלים",
        type: false
      }, {
        answer: "מצוות שילוח הקן",
        type: false
      }, {
        answer: "חוקים המגדירים מה מותר ומה אסור לאכול בשבת",
        type: false
      }]
    }, {
      question: "?מהי מטרת התלמוד",
      answers: [{
        answer: "לפרש את המשנה",
        type: true
      }, {
        answer: "לפרש את התוספתא",
        type: false
      }, {
        answer: "לפרש את התנ''ך",
        type: false
      }, {
        answer: "לפרש את הגמרא",
        type: false
      }]
    }, {
      question: "?מהי פרשת השבוע",
      answers: [{
        answer: "פרשה מן התורה הנקראת בשבת",
        type: true
      }, {
        answer: "פרשה מן המשנה הנקראת בימי ראשון",
        type: false
      }, {
        answer: "פרשה מספר בראשית המתארת את בריאת העולם",
        type: false
      }, {
        answer: "פרשה הנקראת בערב שבת, ולקוחה מתוך ספר התהילים",
        type: false
      }]
    }, {
      question: "?מהי שמחת בית השואבה",
      answers: [{
        answer: "שמחה לזכר טקס ניסוך המים בימי חול המועד מתקופת בית המקדש",
        type: true
      }, {
        answer: "תפילה לשנה רווית גשמים הנאמרת בחג הפסחא",
        type: false
      }, {
        answer: "תפילת תודה ל-ה' עבור שנת הגשמים שעברה",
        type: false
      }, {
        answer: "שמחת בני ישראל בתחילת דרכם בעבודתם החקלאית",
        type: false
      }]
    }, {
      question: "?מהי תפילת התשליך",
      answers: [{
        answer: "תפילת יום הראשון בראש השנה, מבטאת את הרצון להשלכת החטאים לנהר וחזרה בתשובה",
        type: true
      }, {
        answer: "תפילת יום כיפור במהלכה מבצעים תשליך כל חטאינו על תרנגול",
        type: false
      }, {
        answer: "תפילת השנה החדשה, לשנה פורייה ומוצלחת כמו הקודמת לה",
        type: false
      }, {
        answer: "תפילה הנאמרת על שפת נהר או מקווה מים, מהווה ביטוי לרצון לשנת גשמים ושגשוג",
        type: false
      }]
    }, {
      question: "?מהם ל''ט אבות מלאכה",
      answers: [{
        answer: "שלושים ותשע מלאכות עקרונית האסורות בשבת",
        type: true
      }, {
        answer: "שלושים ותשע מצוות בין אדם לחברו",
        type: false
      }, {
        answer: "שלושים ותשע דגשים לעבודת כפיים",
        type: false
      }, {
        answer: "שלושים ותשע איסורים בענייני כשרות",
        type: false
      }]
    }, {
      question: "?מהם שלושת הרגלים",
      answers: [{
        answer: "חגים בהם עולי הרגל היו עולים אל בית המקדש בירושלים",
        type: true
      }, {
        answer: "חגים בהם מתפללים לסליחה ואהבת האל",
        type: false
      }, {
        answer: "פורים, שבועות וסוכות",
        type: false
      }, {
        answer: "ראש השנה, פסח ושבועות",
        type: false
      }]
    }, {
      question: "''מהן ה''ברייתות",
      answers: [{
        answer: "משניות'' חיצוניות למשנה שמכילה התוספת''",
        type: true
      }, {
        answer: "דרשות מהתלמוד",
        type: false
      }, {
        answer: "ציטוטים מהמקרא שנכתבו בגמרא",
        type: false
      }, {
        answer: "(מגילות אשר צורפו לתנ''ך בתקופה מאוחרת(רות, אסתר",
        type: false
      }]
    }, {
      question: "מהן ראשי התיבות סת''ם",
      answers: [{
        answer: "ספר תורה, תפילין ומזוזה",
        type: true
      }, {
        answer: "סופר תורה מקראי",
        type: false
      }, {
        answer: "ספר תורה ומזוזה",
        type: false
      }, {
        answer: "ספר תורה ומצוות",
        type: false
      }]
    }, {
      question: "''מי הם ''ג'והאל",
      answers: [{
        answer: "דרוזים שאינם מכירים את הדת על בורייה",
        type: true
      }, {
        answer: "כינוי לדרוזי גרוש",
        type: false
      }, {
        answer: "הדרוזים שמתגייסים לצבא",
        type: false
      }, {
        answer: "כינוי לדרוזי מאורס",
        type: false
      }]
    }, {
      question: "מי הם אדיגים",
      answers: [{
        answer: "מוסלמי צ'רקסי",
        type: true
      }, {
        answer: "מוסלמים",
        type: false
      }, {
        answer: "בדואים",
        type: false
      }, {
        answer: "האחמדים",
        type: false
      }]
    }, {
      question: "?''מי הם ה''תנאים",
      answers: [{
        answer: "חכמי המשנה",
        type: true
      }, {
        answer: "חז''ל",
        type: false
      }, {
        answer: "זקני העם",
        type: false
      }, {
        answer: "כותבי התנ''ך",
        type: false
      }]
    }, {
      question: "?מי הנביא הקדוש ביותר לדרוזים",
      answers: [{
        answer: "שועייב",
        type: true
      }, {
        answer: "אליהו",
        type: false
      }, {
        answer: "סבלאן",
        type: false
      }, {
        answer: "מוחמד",
        type: false
      }]
    }, {
      question: "''מי חיבר את ''התפילה לשלום המדינה",
      answers: [{
        answer: "ש''י עגנון",
        type: true
      }, {
        answer: "רבי הכהן קוק",
        type: false
      }, {
        answer: "רבי יוסף קארו",
        type: false
      }, {
        answer: "חיים נחמן ביאליק",
        type: false
      }]
    }, {
      question: "?''מי כתב את ''מגש הכסף",
      answers: [{
        answer: "נתן אלתרמן",
        type: true
      }, {
        answer: "נתן יהונתן",
        type: false
      }, {
        answer: "חיים גורי",
        type: false
      }, {
        answer: "חיים חפר",
        type: false
      }]
    }, {
      question: "?מי ערך את המשנה",
      answers: [{
        answer: "רבי יהודה הנשיא",
        type: true
      }, {
        answer: "רבי יהודה הנביא",
        type: false
      }, {
        answer: "רבי יהודה הלוי",
        type: false
      }, {
        answer: "רבי יהודה מתתיהו",
        type: false
      }]
    }, {
      question: "מצוות ארבעת המינים היא",
      answers: [{
        answer: "החזקת אתרוג, לולב, הדס וערבה בעת תפילה בחג הסוכות",
        type: true
      }, {
        answer: "החזקת תאנה, תמר, רימון וזית בעת תפילה בחג השבועות",
        type: false
      }, {
        answer: "אכילת ארבעת המינים בעת ישיבה בסוכה",
        type: false
      }, {
        answer: "אכילת פירות יבשים בחג הסוכות",
        type: false
      }]
    }, {
      question: "?מתי חל חג הנביא סבלאן",
      answers: [{
        answer: "עשירי בספטמבר",
        type: true
      }, {
        answer: "אחד עשר בספטבר",
        type: false
      }, {
        answer: "עשרים וארבע עד עשרים ושבע באפריל",
        type: false
      }, {
        answer: "עשרים וחמש לינואר",
        type: false
      }]
    }, {
      question: "?מתי חל חג הקורבן לפי העדה המוסלמית",
      answers: [{
        answer: "נמשך 5 ימים ומסתיים ב 10 לחודש האחרון של לוח השנה ההג'רי",
        type: true
      }, {
        answer: "נמשך 15 ימים בחודש הראשון של לוח השנה ההג'רי",
        type: false
      }, {
        answer: "בסוף החודש האחרון בלוח השנה ההג'רי",
        type: false
      }, {
        answer: "בחודש הרמדאן, החודש ה9 בלוח השנה ההג'רי",
        type: false
      }]
    }, {
      question: "?מתי חל חנוכה",
      answers: [{
        answer: "כ''ה בכסלו",
        type: true
      }, {
        answer: "כ''ב בכסלו",
        type: false
      }, {
        answer: "כ''ו בכסלו",
        type: false
      }, {
        answer: "כ''ח בכסלו",
        type: false
      }]
    }, {
      question: "?מתי חל יום הולדתו של הנביא מוחמד בלוח השנה ההג'רי",
      answers: [{
        answer: "שתים עשרה בחודש השלישי ",
        type: true
      }, {
        answer: "חמש עשרה בחודש האחרון",
        type: false
      }, {
        answer: "שלוש עשרה בחודש התשיעי",
        type: false
      }, {
        answer: "עשירי בחודש הרביעי",
        type: false
      }]
    }, {
      question: "?מתי חל יום הזיכרון הממלכתי לזאב ז'בוטינסקי ז''ל ",
      answers: [{
        answer: "כ''ט בתמוז",
        type: true
      }, {
        answer: "כ''ח בתמוז",
        type: false
      }, {
        answer: "ט' בתמוז",
        type: false
      }, {
        answer: "ח' בתמוז",
        type: false
      }]
    }, {
      question: "?מתי חל יום הזיכרון לחללי מערכות ישראל ולנפגעי פעולות האיבה",
      answers: [{
        answer: "ד' באייר",
        type: true
      }, {
        answer: "ה' באייר",
        type: false
      }, {
        answer: "ד' באדר",
        type: false
      }, {
        answer: "ה' באדר",
        type: false
      }]
    }, {
      question: "?מתי חל יום הזיכרון לשואה ולגבורה",
      answers: [{
        answer: "כ''ז בניסן",
        type: true
      }, {
        answer: "כ''ז בסיוון",
        type: false
      }, {
        answer: "א' בסיוון",
        type: false
      }, {
        answer: "כ''ב בניסן",
        type: false
      }]
    }, {
      question: "",
      answers: [{
        answer: "",
        type: true
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }]
    }, {
      question: "מתי חל יום הזכרון הממלכתי לרחבעם זאבי (גנדי) ז''ל",
      answers: [{
        answer: "ל' בתשרי",
        type: true
      }, {
        answer: "י' בתשרי",
        type: false
      }, {
        answer: "עשרים ושלושה באפריל",
        type: false
      }, {
        answer: "עשרים ושלושה במרץ",
        type: false
      }]
    }, {
      question: "?מתי חל יום הכיפורים",
      answers: [{
        answer: "י' בתשרי",
        type: true
      }, {
        answer: "א' בתשרי",
        type: false
      }, {
        answer: "ב' בתשרי",
        type: false
      }, {
        answer: "ה' בתשרי",
        type: false
      }]
    }, {
      question: "?מתי חל יום העצמאות",
      answers: [{
        answer: "ה' באייר",
        type: true
      }, {
        answer: "ד' באייר",
        type: false
      }, {
        answer: "ד' באדר",
        type: false
      }, {
        answer: "ה' באדר",
        type: false
      }]
    }, {
      question: "?מתי חל יום ירושלים",
      answers: [{
        answer: "כ''ח באייר",
        type: true
      }, {
        answer: "כ''ז באייר",
        type: false
      }, {
        answer: "כ''ט באייר",
        type: false
      }, {
        answer: "י''ח באייר",
        type: false
      }]
    }, {
      question: "מתי חל ל''ג בעומר",
      answers: [{
        answer: "שלושים ושלושה ימים מחג הפסח",
        type: true
      }, {
        answer: "ארבעים ותשעה ימים מחג הפסח",
        type: false
      }, {
        answer: "שלושים ושלושה ימים מחג פורים",
        type: false
      }, {
        answer: "ארבעים ותשעה ימים לספירת העומר",
        type: false
      }]
    }, {
      question: "?מתי חל פורים",
      answers: [{
        answer: "בירושלים בט''ו באדר, וברחבי העולם בי''ד באדר",
        type: true
      }, {
        answer: "בירושלים י''ד באדר, יהודי העולם בט''ו באדר",
        type: false
      }, {
        answer: "בישראל י''ד באדר, יהודי אירופה בט''ו באדר",
        type: false
      }, {
        answer: "בישראל י''ד באדר, יהודי אמריקה בט''ו באדר",
        type: false
      }]
    }, {
      question: "?מתי חל ראש השנה לאילנות",
      answers: [{
        answer: "ט''ו בשבט",
        type: true
      }, {
        answer: "ט''ו בטבת",
        type: false
      }, {
        answer: "ט''ו באב",
        type: false
      }, {
        answer: "ט''ו באלול",
        type: false
      }]
    }, {
      question: "?מתי חל ראש השנה",
      answers: [{
        answer: "א' בתשרי",
        type: true
      }, {
        answer: "ו' בניסן",
        type: false
      }, {
        answer: "ה' בניסן",
        type: false
      }, {
        answer: "ב' בתשרי",
        type: false
      }]
    }, {
      question: "?מתי מקיימים את תפילת המנחה",
      answers: [{
        answer: "בין חצות היום ועד סיומו",
        type: true
      }, {
        answer: "בבוקר, עם שחר",
        type: false
      }, {
        answer: "בין חצות הלילה ועד תחילת היום",
        type: false
      }, {
        answer: "בצאת שבת ובתחילת יום חול",
        type: false
      }]
    }, {
      question: "מתי נרצח יצחק רבין ז''ל",
      answers: [{
        answer: "רביעי בנובמבר 1995",
        type: true
      }, {
        answer: "ארבע עשרה בנובמבר 1995",
        type: false
      }, {
        answer: "רביעי בנובמבר 1993",
        type: false
      }, {
        answer: "רבע עשרה בנובמבר 1993",
        type: false
      }]
    }, {
      question: "?''איזה איסור אינו נגזר ממצוות ''ועיניתם את נפשותיכם",
      answers: [{
        answer: "לבישת בגדים לבנים בלבד",
        type: true
      }, {
        answer: "מלאכה, שתייה ואכילה",
        type: false
      }, {
        answer: "נעילת הסנדל ושימוש במוצרים קוסמטיים",
        type: false
      }, {
        answer: "רחיצה וקיום יחסי מין",
        type: false
      }]
    }, {
      question: "?על פי המסורת מה לא קרה בט' באב",
      answers: [{
        answer: "נרצח גדליה בן אחיקם",
        type: true
      }, {
        answer: "עם ישראל לא נכנס לארץ ישראל מהמדבר",
        type: false
      }, {
        answer: "חרב בית המקדש השני",
        type: false
      }, {
        answer: "חרב בית המקדש הראשון",
        type: false
      }]
    }, {
      question: "?איזה אולטימטום ניתן ליהודי ספרד לפני גירוש ספרד",
      answers: [{
        answer: "להתנצר או לעזוב את ספרד",
        type: true
      }, {
        answer: "להפסיק לדבר ביידיש או שיגרשו אותם",
        type: false
      }, {
        answer: "לעזוב את ספרד או שיהרגו אותם.",
        type: false
      }, {
        answer: "לשלם יותר מיסים או שיגרשו אותם",
        type: false
      }]
    }, {
      question: "?איזה מאורע נקבע כזכר למרד החשמונאים ",
      answers: [{
        answer: "חנוכה",
        type: true
      }, {
        answer: "שבועות",
        type: false
      }, {
        answer: "צום גדליה",
        type: false
      }, {
        answer: "תשעה באב",
        type: false
      }]
    }, {
      question: "?''איזו גלות מכונה גם גלות ''החרש והמסגר",
      answers: [{
        answer: "גלות יהויכין",
        type: true
      }, {
        answer: "גלות צדקיהו",
        type: false
      }, {
        answer: "גלות כורש",
        type: false
      }, {
        answer: "גלות ירמיהו",
        type: false
      }]
    }, {
      question: "?איזו משפחה הנהיגה את המרד שפרץ נגד השלטון ההלניסטי בשנת 167 לפנה''ס",
      answers: [{
        answer: "חשמונאי",
        type: true
      }, {
        answer: "יהודה",
        type: false
      }, {
        answer: "המכבים",
        type: false
      }, {
        answer: "רומנוס",
        type: false
      }]
    }, {
      question: "איליה קפיטולינה היא",
      answers: [{
        answer: "שמה של העיר שנבנתה על חורבות ירושלים",
        type: true
      }, {
        answer: "עיר הבירה של רומא הקדומה",
        type: false
      }, {
        answer: "אשתו של אדריאנוס הקיסר הרומאי",
        type: false
      }, {
        answer: "הקיסר הרומי שאימץ את הנצרות",
        type: false
      }]
    }, {
      question: "?באיזה גלות הוגלו ''בני האליטה'' שבממלכת יהודה",
      answers: [{
        answer: "גלות יהויכין",
        type: true
      }, {
        answer: "גלות רומי",
        type: false
      }, {
        answer: "גלות עזרא ונחמיה",
        type: false
      }, {
        answer: "גלות עשרת השבטים",
        type: false
      }]
    }, {
      question: "''איזו מדינה דיברה הקהילה היהודית את שפת ה''לדינו",
      answers: [{
        answer: "ספרד",
        type: true
      }, {
        answer: "צרפת",
        type: false
      }, {
        answer: "אתיופיה",
        type: false
      }, {
        answer: "פולין",
        type: false
      }]
    }, {
      question: "''באיזו שנה התרחשה ''גלות החרש והמסגר",
      answers: [{
        answer: "ב597 לפני הספירה",
        type: true
      }, {
        answer: "ב70 לספירה",
        type: false
      }, {
        answer: "ב586 לפני הספירה",
        type: false
      }, {
        answer: "ב557 לספירה",
        type: false
      }]
    }, {
      question: "?באיזו שנה חלה המהפכה הצרפתית",
      answers: [{
        answer: "1789",
        type: true
      }, {
        answer: "1798",
        type: false
      }, {
        answer: "1879",
        type: false
      }, {
        answer: "1799",
        type: false
      }]
    }, {
      question: "?באיזו שנה כבש פומפיוס את ירושלים ",
      answers: [{
        answer: "ב63 לפנה''ס",
        type: true
      }, {
        answer: "ב93 לפנה''ס",
        type: false
      }, {
        answer: "ב53 לספירה",
        type: false
      }, {
        answer: "ב33 לספירה",
        type: false
      }]
    }, {
      question: "?באיזו שנה עלה אלכסנדר הגדול לכס המלוכה",
      answers: [{
        answer: "ב336 לפנה''ס",
        type: true
      }, {
        answer: "ב554 לפנה''ס",
        type: false
      }, {
        answer: "ב397 לפנה''ס",
        type: false
      }, {
        answer: "ב583 לפנה''ס",
        type: false
      }]
    }, {
      question: "?במה ביקש להילחם עזרא הסופר עם הגעתו לארץ ",
      answers: [{
        answer: "בנישואי תערובת",
        type: true
      }, {
        answer: "בשלטון הבריטי בארץ",
        type: false
      }, {
        answer: "בהקמת המושבות הראשונות",
        type: false
      }, {
        answer: "בהתנצרות היהודים",
        type: false
      }]
    }, {
      question: "?''במה עסקו ה''סבוראים",
      answers: [{
        answer: "בהסברה של התלמוד והנחלתו לציבור הלומדים",
        type: true
      }, {
        answer: "יצירת התלמוד והדיונים המובאים בו",
        type: false
      }, {
        answer: "חידוש התכנים הנמצאים בתלמוד",
        type: false
      }, {
        answer: "חילוק ספרי תלמוד בערים הדתיות והמסורתיות",
        type: false
      }]
    }, {
      question: ":האנוסים היו יהודים שהמירו את דתם לדת ה",
      answers: [{
        answer: "נוצרית",
        type: true
      }, {
        answer: "מוסלמית",
        type: false
      }, {
        answer: "דרוזית",
        type: false
      }, {
        answer: "שיעית",
        type: false
      }]
    }, {
      question: "?היכן ביקש רבי יוחנן בן זכאי לייסד מרכז רוחני חלופי ",
      answers: [{
        answer: "יבנה",
        type: true
      }, {
        answer: "צפת",
        type: false
      }, {
        answer: "טבריה",
        type: false
      }, {
        answer: "חיפה",
        type: false
      }]
    }, {
      question: "?היכן גדל האר''י הקדוש ",
      answers: [{
        answer: "מצרים",
        type: true
      }, {
        answer: "לבנון",
        type: false
      }, {
        answer: "ישראל",
        type: false
      }, {
        answer: "סוריה",
        type: false
      }]
    }, {
      question: "?היכן מתקיימת הקהילה היהודית השנייה בגודלה כיום",
      answers: [{
        answer: "ארה''ב",
        type: true
      }, {
        answer: "רוסיה",
        type: false
      }, {
        answer: "ישראל",
        type: false
      }, {
        answer: "צרפת",
        type: false
      }]
    }, {
      question: "?....יעקב ועשיו הם בניו של",
      answers: [{
        answer: "יצחק ורבקה.",
        type: true
      }, {
        answer: "אברהם ולאה",
        type: false
      }, {
        answer: "אברהם ורבקה ",
        type: false
      }, {
        answer: "יצחק ולאה",
        type: false
      }]
    }, {
      question: "...יצחק הוא בנה של",
      answers: [{
        answer: "שרה",
        type: true
      }, {
        answer: "רחל",
        type: false
      }, {
        answer: "הגר",
        type: false
      }, {
        answer: "רבקה",
        type: false
      }]
    }, {
      question: "?כיצד היהודים קרואים בהיסטוריה של אתיופיה",
      answers: [{
        answer: "פלאשים",
        type: true
      }, {
        answer: "כנענים",
        type: false
      }, {
        answer: "עבריים",
        type: false
      }, {
        answer: "כושים",
        type: false
      }]
    }, {
      question: "?כיצד השפיעו ''ועד ארבע הארצות'' על יהודי פולין",
      answers: [{
        answer: "נתן ליישוב היהודי בפולין אוטונומיה ויכולת קיומית עצמאית",
        type: true
      }, {
        answer: "דאג וסייע ליהודי פולין לעלות לארץ ישראל",
        type: false
      }, {
        answer: " בנה בתי כנסת בשטחי הקהילה היהודית",
        type: false
      }, {
        answer: "תרם להברחת יהודים לארה''ב",
        type: false
      }]
    }, {
      question: "?כיצד חלוקת פולין השפיעה על יהדות פולין",
      answers: [{
        answer: "האוטונומיה ליהודים נפגעה וכך גם פרנסתם",
        type: true
      }, {
        answer: "יהודים החלו להגר לישראל בגלל יחסיהם של המדינות הכובשות",
        type: false
      }, {
        answer: " הפילוג היהודי עודד תחרות ועלייה במשק ובכלכלה היהודית",
        type: false
      }, {
        answer: "הקהילה היהודית החלה למרוד בעקבות יחס המדינות הכובשות",
        type: false
      }]
    }, {
      question: "?כיצד כונה רבי יהודה הנשיא בספרות חז''ל",
      answers: [{
        answer: "רבי",
        type: true
      }, {
        answer: "גיבור ישראל",
        type: false
      }, {
        answer: "גדול בתורה",
        type: false
      }, {
        answer: "צדיק",
        type: false
      }]
    }, {
      question: "?כיצד כונתה הממלכה של דוד ושלמה",
      answers: [{
        answer: "ממלכת ישראל המאוחדת",
        type: true
      }, {
        answer: "ממלכת יהודה המאוחדת ",
        type: false
      }, {
        answer: "ממלכת קדם",
        type: false
      }, {
        answer: "הממלכה היהודית",
        type: false
      }]
    }, {
      question: "?כיצד מכונים חכמי התלמוד ",
      answers: [{
        answer: "אמוראים",
        type: true
      }, {
        answer: "סבוראים",
        type: false
      }, {
        answer: "משוראים",
        type: false
      }, {
        answer: "מפוארים",
        type: false
      }]
    }, {
      question: "?כיצד נקראו המתנגדים לתנועת החסידות ",
      answers: [{
        answer: "ליטאים",
        type: true
      }, {
        answer: "אנוסים",
        type: false
      }, {
        answer: "מתנצרים",
        type: false
      }, {
        answer: "בוגדים",
        type: false
      }]
    }, {
      question: "?כמה זמן נערך מסע הנדודים של בני ישראל במדבר",
      answers: [{
        answer: "כ40 שנה",
        type: true
      }, {
        answer: "כ400 שנה",
        type: false
      }, {
        answer: "כ290 שנה",
        type: false
      }, {
        answer: "כ17 שנים",
        type: false
      }]
    }, {
      question: "?למען מה פעלה תנועת החסידות",
      answers: [{
        answer: "קירוב כלל היהודים, חסרי ההשכלה וקשי היום במזרח אירופה לדת",
        type: true
      }, {
        answer: "הטמעת המצוות שבין האדם למקום בחברה היהודית",
        type: false
      }, {
        answer: "חזרה בתשובה של גויים במזרח אירופה",
        type: false
      }, {
        answer: "סיוע ליהודים קשיי יום כלכלית, חלוקת מזון ומציאת מקומות עבודה",
        type: false
      }]
    }, {
      question: "?..לפי העלילת הדם האנטישמית המוכרת, היהודים משתמשים בדם ילדים נוצרים על מנת",
      answers: [{
        answer: "אפיית מצות בפסח",
        type: true
      }, {
        answer: "מריחה על עקיצות",
        type: false
      }, {
        answer: "רחצה ושתיה",
        type: false
      }, {
        answer: "בישול מאכלי שבת",
        type: false
      }]
    }, {
      question: "?לפי צוואתו של הורדוס, למי חולקה הארץ בקצו של שלטונו",
      answers: [{
        answer: "לבני משפחתו",
        type: true
      }, {
        answer: "ליהודה וישראל",
        type: false
      }, {
        answer: "לשליטי הארץ הקודמים",
        type: false
      }, {
        answer: "לנושא כליו של הורדוס",
        type: false
      }]
    }, {
      question: "?מדוע היה ליהודים קל להשתלב ולהשתרש בחברה האמריקאית",
      answers: [{
        answer: "לאמריקה מאפיינים ייחודיים, בדגש על הפרדת דת ממדינה",
        type: true
      }, {
        answer: "הציבור האמריקאי התחבר לדת ולתרבות היהודיים",
        type: false
      }, {
        answer: "היהודים פיתחו את כלכלת המדינה וכן קיבלו אותם ביד רחבה",
        type: false
      }, {
        answer: "האמריקאים האמינו בעידוד עלייה בדגש על היהודים",
        type: false
      }]
    }, {
      question: "?מה אמרה הצהרת כורש",
      answers: [{
        answer: "מתן רשות ליהודים לשוב אל ירושלים ולכונן את בית המקדש",
        type: true
      }, {
        answer: "מתן רשות לשוב לארץ ישראל ממצרים ולהקים את בית המקדש",
        type: false
      }, {
        answer: "מתן רשות לערבים לשוב אל ארץ ישראל כחלק מהסכם החזרת האדמות",
        type: false
      }, {
        answer: "מתן רשות לתחבורה ציבורית בשבת באיזורים חילוניים",
        type: false
      }]
    }, {
      question: "?מה היה מפעלו המרכזי של רבי יהודה הנשיא ",
      answers: [{
        answer: "חתימת קובץ המשנה",
        type: true
      }, {
        answer: "מניעת קיבוץ הגלויות בישראל",
        type: false
      }, {
        answer: "הנחלת התורה בארץ",
        type: false
      }, {
        answer: "עצירת נישואי התערובת",
        type: false
      }]
    }, {
      question: "?מה היה סופו של שבתאי צבי",
      answers: [{
        answer: "התאסלם",
        type: true
      }, {
        answer: "נתלה ע''י האימפריה העות'מאנית",
        type: false
      }, {
        answer: "גאל את ישראל",
        type: false
      }, {
        answer: "עלה לישראל והקים מושבה משיחית",
        type: false
      }]
    }, {
      question: "''מה משמעות המושג ''ריש גלותא",
      answers: [{
        answer: "ראש הגלות",
        type: true
      }, {
        answer: "ראש ישיבה",
        type: false
      }, {
        answer: "עניים בגלות",
        type: false
      }, {
        answer: "שר בממלכת רומי",
        type: false
      }]
    }, {
      question: "?מה נאלצו יהודי תימן לעשות בעקבות רדיפה דתית בשנים 1678-1679",
      answers: [{
        answer: "להתאסלם,או לעזוב את ביתיהם",
        type: true
      }, {
        answer: "למצוא עבודה חדשה",
        type: false
      }, {
        answer: "למכור את עצמם כעבדים",
        type: false
      }, {
        answer: "לשלם מיסים כפול משאר התושבים",
        type: false
      }]
    }, {
      question: "?מהו גירוש ספרד",
      answers: [{
        answer: "הצבת אולטימטום ליהודים, ע''י המלך פרדיננד, במטרה לגרשם",
        type: true
      }, {
        answer: "עליית היהודים לארץ ישראל לאחר עלילות הדם של זקני ציון בספרד",
        type: false
      }, {
        answer: "בחירתו של כריסטופר קולומבוס להתגרש מספרד ולהגיע לאמריקה",
        type: false
      }, {
        answer: "הרחקת בע''ח מהארץ",
        type: false
      }]
    }, {
      question: "מהו מתיוון",
      answers: [{
        answer: "יהודי אשר המיר את דתו לדת היוונית",
        type: true
      }, {
        answer: "לוחם בצבא היווני בתקופת בית החשמונאים",
        type: false
      }, {
        answer: "חייל חשמונאי שנהג להתחפש לחייל היווני",
        type: false
      }, {
        answer: "כינוי לאיש רוח ודת יווני",
        type: false
      }]
    }, {
      question: "?מהו ספרו המרכזי של הרמב''ם",
      answers: [{
        answer: "משנה תורה",
        type: true
      }, {
        answer: "תושב''ע",
        type: false
      }, {
        answer: "תלמוד",
        type: false
      }, {
        answer: "פירוש התלמוד",
        type: false
      }]
    }, {
      question: "?מהו שמו המלא של הרמב''ם",
      answers: [{
        answer: "רבי משה בן מיימון",
        type: true
      }, {
        answer: "רבי מנחם בר מיימון",
        type: false
      }, {
        answer: "רבי מיימון בן משה",
        type: false
      }, {
        answer: "רבי מנחם בן משה",
        type: false
      }]
    }, {
      question: "?מהו שמו המלא של רש''י",
      answers: [{
        answer: "רבי שלמה יצחקי",
        type: true
      }, {
        answer: "רבי שמעון יוחאי",
        type: false
      }, {
        answer: "רבי שמעון יצחקי",
        type: false
      }, {
        answer: "רבי שלמה יוחאי",
        type: false
      }]
    }, {
      question: "?מהו שמו השני של יעקב",
      answers: [{
        answer: "ישראל",
        type: true
      }, {
        answer: "יהודה",
        type: false
      }, {
        answer: "נפתלי",
        type: false
      }, {
        answer: "דן",
        type: false
      }]
    }, {
      question: "?מהו תחום המושב",
      answers: [{
        answer: "שטחי המגורים של יהודי רוסיה הוגבלו לתחומי מחיה מסורתיים",
        type: true
      }, {
        answer: "כינוי למושב היהודי הראשון בשטחי ארץ ישראל",
        type: false
      }, {
        answer: "הכינוי לשטחים בהם הותר לערבי ישראל לשהות בארץ",
        type: false
      }, {
        answer: "הקהילה היהודית בפולין טרם הכיבוש",
        type: false
      }]
    }, {
      question: "?מהי ממלכת הגדעונים",
      answers: [{
        answer: "כינוי לקהילה היהודית העצמאית באתיופיה",
        type: true
      }, {
        answer: "כינוי לקהילה היהודית בארצות האיסלאם",
        type: false
      }, {
        answer: "הקהילה היהודית בארה''ב",
        type: false
      }, {
        answer: "כינוי לקהילה היהודית בפולין",
        type: false
      }]
    }, {
      question: "?מהי עלילת דם",
      answers: [{
        answer: "כינוי המתייחס אל סיפור שקרי בעל מאפיינים אנטישמים",
        type: true
      }, {
        answer: "פוגרום בקישינב, בו נרצחו יהודי ודמם נשפך לנהל כסמל לרדיפת יהודים",
        type: false
      }, {
        answer: "שבועון אנטישמי, בעל אופי קומי, שהופץ לגרמנים במטרה לשעשעם",
        type: false
      }, {
        answer: "הוצאת דיבה נגד יהודי אתיופיה אשר היגרו לארץ",
        type: false
      }]
    }, {
      question: "?מהי עלילת דמשק",
      answers: [{
        answer: "יהודים שהואשמו ברצח של נזיר נוצרי ומשרתו המוסלמי",
        type: true
      }, {
        answer: "יהודים שהכינו מצות מדמם של מוסלמים",
        type: false
      }, {
        answer: "יהודים שהואשמו בהשחתת מסגד בדמשק",
        type: false
      }, {
        answer: "יהודי שהואשם בגניבת כספים",
        type: false
      }]
    }, {
      question: "''מהי תקופת ''הימים הרעים",
      answers: [{
        answer: "תקופת הקרב בין צבא אתיופיה לצבאות מצרים, סודן ואיטליה",
        type: true
      }, {
        answer: "תקופת הרעב בקהילה היהודית באתיופיה",
        type: false
      }, {
        answer: "הימים בהם יהדות צפון אפריקה נספתה בשואה",
        type: false
      }, {
        answer: "הימים בהם נרדפו יהודים בגין כפיית הדת לעדה האתיופית",
        type: false
      }]
    }, {
      question: "''מהי/מהו ה''אורית",
      answers: [{
        answer: "ספר התורה של יהודי אתיופיה",
        type: true
      }, {
        answer: "השפה המדוברת בין יהודי אתיופיה",
        type: false
      }, {
        answer: "כינוי לתרבות היהודית",
        type: false
      }, {
        answer: "כינוי ליהודיה באתיופיה",
        type: false
      }]
    }, {
      question: "?''מהם ''משפטי פראג",
      answers: [{
        answer: "משפט בו הואשמו 14 פעילים בניהם יהודים בריגול לטובת ישראל וארה''ב",
        type: true
      }, {
        answer: "משפט בו הואשמו 14 יהודים בהתקוממות כנגד שלטונות רוסיה",
        type: false
      }, {
        answer: "משפטים כנגד יהודים שסירבו להתגייס לצבא הרוסי",
        type: false
      }, {
        answer: "משפטים כנגד יהודים אשר קיימו אורח חיים דתי במהלך שירותם הצבאי",
        type: false
      }]
    }, {
      question: "?''מהם ''סופות בנגב",
      answers: [{
        answer: "גל הפרעות בדרום רוסיה",
        type: true
      }, {
        answer: "עלילות בהם נופצו שמשות בתי כנסת ויהודים רבים נהרגו",
        type: false
      }, {
        answer: "הסופות הקשות אשר התמודדו איתם המתיישבים בנגב",
        type: false
      }, {
        answer: "מבצע במלחמת העצמאות בו נכבשה עזה",
        type: false
      }]
    }, {
      question: "?מי בנה את בית המקדש",
      answers: [{
        answer: "שלמה בנו של דוד",
        type: true
      }, {
        answer: "שאול אביו של דוד",
        type: false
      }, {
        answer: "דוד בנו של שאול",
        type: false
      }, {
        answer: "שלמה בנו של שאול",
        type: false
      }]
    }, {
      question: "?מי בנה את הנמל, אמת המים של קיסריה ומתחם הארמונות במצדה",
      answers: [{
        answer: "הורדוס",
        type: true
      }, {
        answer: "דוד המלך",
        type: false
      }, {
        answer: "כורש",
        type: false
      }, {
        answer: "מתיתיהו",
        type: false
      }]
    }, {
      question: "?מי הוביל את אנשיו לבחור ב''חירות על פני החיים'' ",
      answers: [{
        answer: "יהודה המכבי",
        type: true
      }, {
        answer: "יוסף בן מתיתיהו",
        type: false
      }, {
        answer: "יאיר שטרן",
        type: false
      }, {
        answer: "אלעזר בן יאיר",
        type: false
      }]
    }, {
      question: "?מי היה הרב עובדיה יוסף",
      answers: [{
        answer: "אחד ממנהיגיה של היהדות החרדית הספרדית",
        type: true
      }, {
        answer: "ממקימי הרבנות הצבאית",
        type: false
      }, {
        answer: "מחנך ואיש ציבור, מנהיג הקהילה היהודית בספרד",
        type: false
      }, {
        answer: "מנהיג ציבור יהודי באירופה, שימש כפרופסור וכרב",
        type: false
      }]
    }, {
      question: "?מי היה הרב שלמה גורן",
      answers: [{
        answer: "הרב הראשי האשכנזי לישראל",
        type: true
      }, {
        answer: "אחד ממנהיגיה של יהדות אירופה",
        type: false
      }, {
        answer: "מחנך ואיש ציבור, מההיג הקהילה היהודית בספרד",
        type: false
      }, {
        answer: "מנהיג ציבור יהודי ברוסיה, שימש כפרופסור וכרב",
        type: false
      }]
    }, {
      question: "?מי היה חיים נחמן ביאליק",
      answers: [{
        answer: "המשורר הלאומי",
        type: true
      }, {
        answer: "מלחין התקווה",
        type: false
      }, {
        answer: "חתן פרס ישראל",
        type: false
      }, {
        answer: "חתן פרס סוקולוב",
        type: false
      }]
    }, {
      question: "?מי היה טיטוס",
      answers: [{
        answer: "קיסר רומאי שהחריב את בית המקדש השני",
        type: true
      }, {
        answer: "אחד ממנהיגי המרד בכיבוש מצדה",
        type: false
      }, {
        answer: "לוחם רומאי ידוע שהנהיג את קרבות הר הבית",
        type: false
      }, {
        answer: "''הלוחם שעודד את המתבצרים במצדה לבחור ''בחירות על פני חיים''",
        type: false
      }]
    }, {
      question: "?מי היה כורש",
      answers: [{
        answer: "מלכה הראשון של הממלכה הפרסית",
        type: true
      }, {
        answer: "המלך השלישי של הממלכה הבבלית",
        type: false
      }, {
        answer: "מלך צידון שהצהיר את נאמנותו למלך רחבעם",
        type: false
      }, {
        answer: "המלך השני של ממלכת אדום",
        type: false
      }]
    }, {
      question: "?מי היה מלכה הראשון של ישראל",
      answers: [{
        answer: "שאול",
        type: true
      }, {
        answer: "דוד",
        type: false
      }, {
        answer: "שלמה",
        type: false
      }, {
        answer: "שמואל",
        type: false
      }]
    }, {
      question: "?מי היה תמרת עמנואל",
      answers: [{
        answer: "?מנהיג ציבור יהודי באתיופיה, שימש כפרופסור וכרב",
        type: true
      }, {
        answer: "אחד ממנהיגיה של יהדות אירופה",
        type: false
      }, {
        answer: "ממקימי הרבנות הצבאית",
        type: false
      }, {
        answer: "מחנך ואיש ציבור, ממנהיגי הקהילה היהודית",
        type: false
      }]
    }, {
      question: "?מי היו אסירי ציון",
      answers: [{
        answer: "פעילים ציוניים שנאסרו בברית המועצות",
        type: true
      }, {
        answer: "יהודים שלא הורשו להיכנס לארץ",
        type: false
      }, {
        answer: "יהודים שנאלצו לחיות בתוך הקהילה הסגורה בברית המועצות",
        type: false
      }, {
        answer: "כינוי ליהודים שעלו לארץ ישראל ונכשלו",
        type: false
      }]
    }, {
      question: "?מי היו בניו של אבי העם היהודי",
      answers: [{
        answer: "פעילים ציוניים שנאסרו בברית המועצות",
        type: true
      }, {
        answer: "יהודים שלא הורשו להיכנס לארץ",
        type: false
      }, {
        answer: "יהודים שנאלצו לחיות בתוך הקהילה הסגורה בברית המועצות",
        type: false
      }, {
        answer: "כינוי ליהודים שעלו לארץ ישראל ונכשלו",
        type: false
      }]
    }, {
      question: "?מי היו בניו של אבי העם היהודי",
      answers: [{
        answer: "ישמעאל ויצחק",
        type: true
      }, {
        answer: "יצחק ויעקב",
        type: false
      }, {
        answer: "יעקב ועשו",
        type: false
      }, {
        answer: "קין והבל",
        type: false
      }]
    }, {
      question: "?מי היו השופטים",
      answers: [{
        answer: "מנהיגים אזוריים של 12 השבטים, לאחר מות יהושע",
        type: true
      }, {
        answer: "נביאים שפירשו חלומות ל12 ראשי השבטים",
        type: false
      }, {
        answer: "השופטים הראשונים ביהדות עליהם מתבססים חוקי המדינה",
        type: false
      }, {
        answer: "זקני העם שעסקו באיחוד 12 השבטים",
        type: false
      }]
    }, {
      question: "?מי הם המוסתערבים",
      answers: [{
        answer: "יהודים אשר השתלבו בתרבות ובחברה הסובבת ודברו ערבית, לפני המהאה ה15",
        type: true
      }, {
        answer: "יחידה סמויה בצה''ל שהוקמה ב1967",
        type: false
      }, {
        answer: "מוסלמים שחזרו בתשובה",
        type: false
      }, {
        answer: "יהודים שהתחבאו מהשלטון המוסלמי",
        type: false
      }]
    }, {
      question: "''מי מונה למלוך על יהודה לאחר ''גלות החרש והמסגר",
      answers: [{
        answer: "צדקיהו",
        type: true
      }, {
        answer: "יהויכין",
        type: false
      }, {
        answer: "שלמה",
        type: false
      }, {
        answer: "יהואחז",
        type: false
      }]
    }, {
      question: "?מי ניסה להקים יחד עם קבוצת העולים מזבח ולחדש את בית המקדש",
      answers: [{
        answer: "עזרא הסופר",
        type: true
      }, {
        answer: "ששבצר",
        type: false
      }, {
        answer: "זרובבל",
        type: false
      }, {
        answer: "שלמה",
        type: false
      }]
    }, {
      question: "?מי עמד בראש מרד בר כוכבא",
      answers: [{
        answer: "שמעון בן כוסבא",
        type: true
      }, {
        answer: "משה בר כוכבא",
        type: false
      }, {
        answer: "משה בר יוחאי",
        type: false
      }, {
        answer: "שמעון בר יונה",
        type: false
      }]
    }, {
      question: "?מיהם המלכים שהחליפו את שלמה המלך",
      answers: [{
        answer: "רחבעם וירבעם",
        type: true
      }, {
        answer: "מפיבושת ויהויכין",
        type: false
      }, {
        answer: "יהויכין וירבעם",
        type: false
      }, {
        answer: "רחל ופרעה",
        type: false
      }]
    }, {
      question: "?נאמר על רש''י: ''פיזר את אוצרות רוחו... כנהר הנותן מימיו לכל, בלי לדעת שאין עולם בלעדיהם''. מדוע",
      answers: [{
        answer: "חיבר פירוש מקיף על התורה והתלמול והוא בשימוש עד היום",
        type: true
      }, {
        answer: "פעל למען הדת היהודית אך לבסוף גורלו היה מר",
        type: false
      }, {
        answer: "פירש חלומות תנכיים שפירושם תקף גם כיום על ימינו",
        type: false
      }, {
        answer: "חיבר מגילות כתובות המתארות את התקופה הקדומה",
        type: false
      }]
    }, {
      question: "?על צאצאיו של מי מבוססים שבטי ישראל",
      answers: [{
        answer: "יעקב",
        type: true
      }, {
        answer: "עשיו",
        type: false
      }, {
        answer: "אברהם",
        type: false
      }, {
        answer: "שרה",
        type: false
      }]
    }, {
      question: "?רבי יהודה הנשיא, מנהיג בקהילה היהודית, עסק בתחומים רבים. מה היה עיסוקו המרכזי",
      answers: [{
        answer: "חיבור משנה",
        type: true
      }, {
        answer: "מנהיג רוחני",
        type: false
      }, {
        answer: "מנהיג פוליטי",
        type: false
      }, {
        answer: "קיום קשר עם הקיסרות הרומית",
        type: false
      }]
    }, {
      question: "?איזה הסכם הופר עם תחילת מבצע ברברוסה",
      answers: [{
        answer: "ריבנטרופ-מולוטוב",
        type: true
      }, {
        answer: "האמנה האנטלטית",
        type: false
      }, {
        answer: "האנשלוס",
        type: false
      }, {
        answer: "הסכמי וועדת אוויאן",
        type: false
      }]
    }, {
      question: "?איזו וועדה התכנסה בברלין ב-20 בינואר 1942",
      answers: [{
        answer: "ואנזה",
        type: true
      }, {
        answer: "ריבנטרופ-מולוטוב",
        type: false
      }, {
        answer: "ריינהארד היידריך",
        type: false
      }, {
        answer: "אוויאן",
        type: false
      }]
    }, {
      question: "?אילו מדינות הכריזו מלחמה על גרמניה בתגובה לכיבוש פולין ",
      answers: [{
        answer: "בריטניה, צרפת",
        type: true
      }, {
        answer: "צרפת, ברית המועצות",
        type: false
      }, {
        answer: "בריטניה וארצות הברית",
        type: false
      }, {
        answer: "ארצות הברית וברית המועצות",
        type: false
      }]
    }, {
      question: "?אילו מחנות השמדה הופעלו לראשונה במסגרת מבצע ריינהארד",
      answers: [{
        answer: "בלזץ', סוביבור, טרבלניקה",
        type: true
      }, {
        answer: "דכאו, טרזינשטאט, ברגן בלזן",
        type: false
      }, {
        answer: "אושוויץ, מאטהאוזן, דארסי",
        type: false
      }, {
        answer: "חלמנו, סיימשטה, יאנסובאץ'",
        type: false
      }]
    }, {
      question: "?באיזו אמירה נחתם משפטו  של ישראל קסטנר",
      answers: [{
        answer: "מכר את נשמתו לשטן",
        type: true
      }, {
        answer: "נשמת ילד קטן שעוד לא ברא השטן",
        type: false
      }, {
        answer: "אין אני עומד יחידי עמדי ניצבים כאן בשעה זו 6 מליון קטגורים",
        type: false
      }, {
        answer: "כל המציל נפש אחת כאילו הציל עולם במלואו",
        type: false
      }]
    }, {
      question: "?באיזו דרך הציל קסטנר את היהודים",
      answers: [{
        answer: "משא ומתן עם קציני אס אס בכירים",
        type: true
      }, {
        answer: "הנפקת ויזות ודרכונים מזוייפים",
        type: false
      }, {
        answer: "הברחתם באמצעות ''רכבות רפאים'' לשוויץ",
        type: false
      }, {
        answer: "העסקתם במפעלים גרמנים",
        type: false
      }]
    }, {
      question: "?באיזו שיטה התבצעה השמדת היהודים במחנה ההשמדה הראשון ",
      answers: [{
        answer: "משאיות גז",
        type: true
      }, {
        answer: "תאי גזים",
        type: false
      }, {
        answer: "בורות ירי",
        type: false
      }, {
        answer: "תלייה",
        type: false
      }]
    }, {
      question: "?''באיזו שנה אישרה הכנסת את חוק ''יד ושם",
      answers: [{
        answer: "1953",
        type: true
      }, {
        answer: "1952",
        type: false
      }, {
        answer: "1954",
        type: false
      }, {
        answer: "1955",
        type: false
      }]
    }, {
      question: "?במה הואשם קסטנר במשפטו",
      answers: [{
        answer: "הכשרת הקרקע לרצח יהודי הונגריה",
        type: true
      }, {
        answer: "הלשנה על רבבות יהודים בתמורה לביטחונו האישי",
        type: false
      }, {
        answer: "העברת מידע מודיעיני גרמני לצבא בעלות הברית",
        type: false
      }, {
        answer: "ביצוע תיאום ה''משלוחים'' למזרח",
        type: false
      }]
    }, {
      question: "?''במה הואשמו היהודים במגפת ''המוות השחור",
      answers: [{
        answer: "הרעלת הבארות",
        type: true
      }, {
        answer: "הפצת הדיזנטריה",
        type: false
      }, {
        answer: "רצח ילד בלונדון",
        type: false
      }, {
        answer: "יצירת המשבר הכלכלי הגדול",
        type: false
      }]
    }, {
      question: "?במה לא הואשם אדולף אייכמן",
      answers: [{
        answer: "פשעי מלחמה לא קונבנציונאלית",
        type: true
      }, {
        answer: "פשעי מלחמה קונבנציונאלית",
        type: false
      }, {
        answer: "פשעים נגד האנושות",
        type: false
      }, {
        answer: "פשעים נגד העם היהודי",
        type: false
      }]
    }, {
      question: "?במה עסקה ודנה ועידת וואנזה",
      answers: [{
        answer: "ייעול תוכנית הנאצים- הפתרון הסופי",
        type: true
      }, {
        answer: "החלטה על התחלת השמדת יהודי אירופה",
        type: false
      }, {
        answer: "ריכוז היהודים בגטאות",
        type: false
      }, {
        answer: "שינוי מטרת מבצע ברברוסה",
        type: false
      }]
    }, {
      question: "?בשנת 1938, אילו שמות אולצו היהודים להוסיף לתעודת הזהות שלהם",
      answers: [{
        answer: "בנים- ישראל, בנות-שרה",
        type: true
      }, {
        answer: "בנים-אברהם, בנות-לאה",
        type: false
      }, {
        answer: "בנים-ישראל, בנות- מריים",
        type: false
      }, {
        answer: "בנים- אברהם, בנות-רבקה",
        type: false
      }]
    }, {
      question: "?היכן הסתתר אדולף אייכמן לאחר מלחמת העולם השנייה",
      answers: [{
        answer: "ארגנטינה",
        type: true
      }, {
        answer: "ברזיל",
        type: false
      }, {
        answer: "מקסיקו",
        type: false
      }, {
        answer: "קולומביה",
        type: false
      }]
    }, {
      question: "?היכן התרחש המרד הגדול ביותר בגטאות",
      answers: [{
        answer: "וורשה",
        type: true
      }, {
        answer: "ביאליסטוק",
        type: false
      }, {
        answer: "'לודג",
        type: false
      }, {
        answer: "וילנה",
        type: false
      }]
    }, {
      question: "...המושג ''שארית הפליטה'' פירושו",
      answers: [{
        answer: "רבבות היהודים שניצלו מהתופת והפכו לעקורים",
        type: true
      }, {
        answer: "שם קוד גרמני לניצולי משאיות הגז בחלמנו",
        type: false
      }, {
        answer: "גרמנים שנלקחו בשבי הסובייטי בסוף המלחמה",
        type: false
      }, {
        answer: "כינוי לניצולים יהודים מתאי הגזים",
        type: false
      }]
    }, {
      question: "וועדת אוויאן דנה בנושא",
      answers: [{
        answer: "מתן פיתרון לבעיית הפליטים היהודים",
        type: true
      }, {
        answer: "הענקת סיוע ליהודים בפולין",
        type: false
      }, {
        answer: "תיאום מהלך הפתרון הסופי",
        type: false
      }, {
        answer: "הצלת יהודי הונגריה",
        type: false
      }]
    }, {
      question: "?כיצד החלה מלחמת העולם השניה",
      answers: [{
        answer: "בפלישה לפולין",
        type: true
      }, {
        answer: "בסיפוח אוסטריה לגרמניה",
        type: false
      }, {
        answer: "בפלישה לברית המועצות",
        type: false
      }, {
        answer: "בפלישה לצרפת",
        type: false
      }]
    }, {
      question: "?כיצד הסתיימה פרשת קסטנר",
      answers: [{
        answer: "זוכה ונרצח ע''י יהודי ",
        type: true
      }, {
        answer: "יצא אשם וקיבל מאסר עולם",
        type: false
      }, {
        answer: "יצא אשם והוצא להורג",
        type: false
      }, {
        answer: "זוכה והיגר לארה''ב",
        type: false
      }]
    }, {
      question: "?כיצד טופלו הפליטים היהודים מיד לאחר מלחמת העולם השנייה  ע''י בעלות הברית",
      answers: [{
        answer: "רוכזו למחנות העקורים",
        type: true
      }, {
        answer: "הועלו לארץ ישראל",
        type: false
      }, {
        answer: "הועברו לבתים נטושים בפולין",
        type: false
      }, {
        answer: "הוכנסו לבתים של קצינים גרמנים",
        type: false
      }]
    }, {
      question: "?כיצד מכונה התקופה שלאחר מלחמת העולם הראשונה בהיסטוריה הגרמנית",
      answers: [{
        answer: "רפובליקת ויימאר",
        type: true
      }, {
        answer: "אנשלוס",
        type: false
      }, {
        answer: "המשבר הגדול",
        type: false
      }, {
        answer: "התקופה השחורה",
        type: false
      }]
    }, {
      question: "?כיצד נגמרה סופית מלחמת העולם השנייה בכלל החזיתות ",
      answers: [{
        answer: "הפלת 2 פצצות האטום של הירושימה ונגאסקי",
        type: true
      }, {
        answer: "כיבוש ברלין ע''י ברית המועצות לבעלות הברית",
        type: false
      }, {
        answer: "התאבדותו של אדולף היטלר, מנהיג המפלגה הנאצית",
        type: false
      }, {
        answer: "היכנעותה הרשמית של גרמניה",
        type: false
      }]
    }, {
      question: "?כיצד ניסה אדולף אייכמן להקל על עונשו במשפטו",
      answers: [{
        answer: "טען שהיה בורג קטן במערכת שרק מילא פקודות",
        type: true
      }, {
        answer: "טען שאינו קשור כלל ליישום הפיתרון הסופי",
        type: false
      }, {
        answer: "טען שהיה לא שפוי כתוצאה ממלחמת העולם ה-1",
        type: false
      }, {
        answer: "טען כי עסק בתיעוד וכתיבה ולא ביישום וביצוע",
        type: false
      }]
    }, {
      question: "(כיצד ניסתה בתחילת דרכה המפלגה הנאצית לעלות לשלטון? (1923",
      answers: [{
        answer: "(ביצוע הפיכה שכשלה (פוטש",
        type: true
      }, {
        answer: "ליל הסכינים הארוכות",
        type: false
      }, {
        answer: "בחירות",
        type: false
      }, {
        answer: "ניצול האנרכיה ששררה בגרמניה",
        type: false
      }]
    }, {
      question: "?כיצד נקרא התשלום החודשי הקבוע מגרמניה למדינת ישראל",
      answers: [{
        answer: "רנטות",
        type: true
      }, {
        answer: "רטרו",
        type: false
      }, {
        answer: "מענק צדק",
        type: false
      }, {
        answer: "פיצוי הדמים",
        type: false
      }]
    }, {
      question: "?כיצד נקרא מחנה ההשמדה הראשון",
      answers: [{
        answer: "חלמנו",
        type: true
      }, {
        answer: "בלדץ'",
        type: false
      }, {
        answer: "ברגן בלזן",
        type: false
      }, {
        answer: "דכאו",
        type: false
      }]
    }, {
      question: "כיצד נקראו היחידות אשר היו אמונות על טיהור הגזע במהלך הקרבות בברית המועצות",
      answers: [{
        answer: "אייזנצגרופן",
        type: true
      }, {
        answer: "אומשלגפלאץ",
        type: false
      }, {
        answer: "לופטוואפה",
        type: false
      }, {
        answer: "הוורמאכט",
        type: false
      }]
    }, {
      question: "?לאחר איזה אירוע, חל שינוי ביחס אשר קיבלו ניצולי השואה בארץ",
      answers: [{
        answer: "משפטו של אדולף אייכמן",
        type: true
      }, {
        answer: "הטבח באולימפיאדת מינכן",
        type: false
      }, {
        answer: "תפיסתו של דוקטור מנגלה",
        type: false
      }, {
        answer: "יציאתו של הסרט רשימת שינדלר",
        type: false
      }]
    }, {
      question: "?לאיזו אמירה משפטי נירנברג שימשו כבסיס",
      answers: [{
        answer: "מניעת רצח עם",
        type: true
      }, {
        answer: "אטלנטיס",
        type: false
      }, {
        answer: "שוויון זכויות",
        type: false
      }, {
        answer: "כבוד האדם וחירותו",
        type: false
      }]
    }, {
      question: "?מה היה המניע לפרוץ מהומות ליל הבדולח ב-1938",
      answers: [{
        answer: "רצח המזכיר בשגרירות גרמניה בצרפת",
        type: true
      }, {
        answer: "מהומות ונסיון התנגדותם של היהודים בפרוץ המלחמה",
        type: false
      }, {
        answer: "בעיקבות אונס וגניבת רכוש מאישה גרמניה",
        type: false
      }, {
        answer: "אמצעי התראה, ניסיון לגרום ליהודים לברוח מגרמניה",
        type: false
      }]
    }, {
      question: "?''מה מטרתו של הסכם ''ריבנטרופ- מולטוב'' ",
      answers: [{
        answer: "אי תקיפת ברית המועצות על ידי גרמניה",
        type: true
      }, {
        answer: "סיפוח אוסטריה לגרמניה טרם המלחמה",
        type: false
      }, {
        answer: "החזרת הדיפלומטים הגרמניים מפולין",
        type: false
      }, {
        answer: "חלוקת צ'כיה בין אוסטריה לגרמניה",
        type: false
      }]
    }, {
      question: "?מה מקור השם גטו ",
      answers: [{
        answer: "רובע נפרד של העיר בו התגוררו יהודים בימי הביינים",
        type: true
      }, {
        answer: "כינוי לבור השופכין של הערים באירופה",
        type: false
      }, {
        answer: "משמעו באיטלקית גועל/חלחלה",
        type: false
      }, {
        answer: "כינוי לשכונת עוני ",
        type: false
      }]
    }, {
      question: "?מה נוצר בקרב העם הגרמני לאחר מלחמת העולם הראשונה",
      answers: [{
        answer: "תחושת השפלה ומשבר כלכלי חברתי חמור",
        type: true
      }, {
        answer: "תחושת ניצחון ושאננות",
        type: false
      }, {
        answer: "פחד וחשש מכיבוש",
        type: false
      }, {
        answer: "שגשוג כלכלי ופיתוח תעשייתי",
        type: false
      }]
    }, {
      question: "?''מהו ''הסכם השילומים",
      answers: [{
        answer: "הסכם שנחתם בין ממשלת מערב גרמניה לממשלת ישראל הכולל 3 מיליארד מארק ",
        type: true
      }, {
        answer: "הסכם לפיו מדינת ישראל צריכה לסייע כלכלית לניצולי שואה עד יום מותם מכספי המדינה",
        type: false
      }, {
        answer: "הסכם לפיו הצלב האדום שילם מיליארד מארק לשלטון הנאצי עבור הצלתם של 3,000 יהודים",
        type: false
      }, {
        answer: "הסכם בין האו''ם למדינת ישראל לפיו ישראל תקבל מליון דולר כפיצוי לפשעי הנאצים וחטאיהם",
        type: false
      }]
    }, {
      question: "?''מהו ''ליל הסכינים הארוכות'",
      answers: [{
        answer: "חיסול חברי המפלגה הנאצית שהיו חשודים כמתנגדייה",
        type: true
      }, {
        answer: "נסיון הפיכת המפלגה הנאצית לעלייתה לשלטון",
        type: false
      }, {
        answer: "שריפת הספרים היהודיים",
        type: false
      }, {
        answer: "הרס חורבן בתי הכנסת והחנויות היהודיות",
        type: false
      }]
    }, {
      question: "?''מהו ''מישילנגה",
      answers: [{
        answer: "צאצא לנישואי תערובת",
        type: true
      }, {
        answer: "חוקים לאיסור קראית ספרים בעלי אופי יהודי",
        type: false
      }, {
        answer: "תנועת הנוער הנאצית",
        type: false
      }, {
        answer: "תנועת נוער יהודית",
        type: false
      }]
    }, {
      question: "?מהו האומשלגפלאץ",
      answers: [{
        answer: "כיכר השילוחין בגטו",
        type: true
      }, {
        answer: "הכוחות המיוחדים לטיהור העם הגרמני",
        type: false
      }, {
        answer: "אסיר האחראי על השלטת סדר במחנה",
        type: false
      }, {
        answer: "כינוי לעובדים במשרפות",
        type: false
      }]
    }, {
      question: "?מהו הדר-שטירמר",
      answers: [{
        answer: "שבועון שהיווה חלק מהתעמולה הנאצית",
        type: true
      }, {
        answer: "מועצת זקנים- הגוף המתווך בין הגרמנים לציבור היהודי",
        type: false
      }, {
        answer: "חיבור שכתב משורר שנולד בגטו וילנה",
        type: false
      }, {
        answer: "הפלישה לברית המועצות",
        type: false
      }]
    }, {
      question: "?מהו החוק בדבר החזרת הפקידות המקצועית על כנה",
      answers: [{
        answer: "סילוק גורמים הנתפסים כלא נאמנים למוסדות השלטון",
        type: true
      }, {
        answer: "חוק המטיל מיסים כבדים על פקידים יהודים",
        type: false
      }, {
        answer: "סילוק היהודים מתפקידי הפקידות",
        type: false
      }, {
        answer: "חוק מתוך חוקי נירנברג",
        type: false
      }]
    }, {
      question: "''מהו המושג ''גרמניה האחרת",
      answers: [{
        answer: "מושג אותו תבע בן גוריון שמשמעו, כי גרמניה של היום איננה גרמניה הנאצית",
        type: true
      }, {
        answer: "גרמניה הנאצית הינה גרמניה שהעולם עוד לא הכיר ולא חווה",
        type: false
      }, {
        answer: "דימוי גרמניה לפלנטה אחרת ולעולם הזוי ואכזרי",
        type: false
      }, {
        answer: "מושג ממערב גרמניה המדבר על מזרח גרמניה כעולם נפרד",
        type: false
      }]
    }, {
      question: "?מהו חוק אזרחות הרייך לפי חוקי נירנברג",
      answers: [{
        answer: "אזרחי המדינה חייבים להיות בעלי דם גרמני",
        type: true
      }, {
        answer: "אזרחי המדינה חייבים להיות נאמנים לה",
        type: false
      }, {
        answer: "היהודים מחויבים לשרת את אזרחי המדינה",
        type: false
      }, {
        answer: "גרמנים שחיים באזור חבל ה''סודטים'' יחשבו לאזרחי גרמניה",
        type: false
      }]
    }, {
      question: "?מהו יודנראט",
      answers: [{
        answer: "הגוף האמון על תיווך הציבור היהודי לשלטון הגרמני",
        type: true
      }, {
        answer: "כינוי לסטריאוטיפ היהודי כעכברוש",
        type: false
      }, {
        answer: "כינוי ליהודים שעבדו בקרמטוריום",
        type: false
      }, {
        answer: "כינוי לשוטרים יהודים במחנות ההשמדה",
        type: false
      }]
    }, {
      question: "(מהו מבצע ברברוסה? (1941",
      answers: [{
        answer: "כיבוש ברית המועצות",
        type: true
      }, {
        answer: "ניסיון כיבוש בריטניה",
        type: false
      }, {
        answer: "כיבוש צרפת",
        type: false
      }, {
        answer: "פלישת בעלות הברית לאיטליה",
        type: false
      }]
    }, {
      question: "?''מהי ''אריזציה",
      answers: [{
        answer: "השתלטות אלימה על בתי עסק ונכסים יהודים",
        type: true
      }, {
        answer: "הרחקת העובדים היהודים ממפעלי התעשייה",
        type: false
      }, {
        answer: "כינוי למבצע ''ישוב מחדש'' שמטרתו השמדת היהודים",
        type: false
      }, {
        answer: "?''אריזת כול ספרי התורה ושריפתם ב''ליל הבדולח",
        type: false
      }]
    }, {
      question: "?מהי אקציה",
      answers: [{
        answer: "שילוח היהודים למחנות",
        type: true
      }, {
        answer: "כינוי לניסויי מנגלה באסירי אשוויץ",
        type: false
      }, {
        answer: "בריחת היהודים מהגטאות ליערות",
        type: false
      }, {
        answer: "ריכוז היהודים בגטאות",
        type: false
      }]
    }, {
      question: "?מהי סלקציה",
      answers: [{
        answer: "מיון בין עבודת פרך להשמדה",
        type: true
      }, {
        answer: "תהליך הכנסת היהודים לרכבות",
        type: false
      }, {
        answer: "תהליך קליטת האסירים במחנות העבודה",
        type: false
      }, {
        answer: "מיון בין גברים לנשים במחנות",
        type: false
      }]
    }, {
      question: "?מהי עמדתם של מתנגדי הסכם השילומים ומנחם בגין שעמד בראשם",
      answers: [{
        answer: "הסכם זה מהווה מחילה רשמית לנאצים עבור פשעיהם",
        type: true
      }, {
        answer: "ישראל לא תקיים משא ומתן עם מדינה אשר ניסתה להשמיד את עמה",
        type: false
      }, {
        answer: "הסכום שנקבע בהסכם אינו מספק והוא ''סמלי'' ביותר",
        type: false
      }, {
        answer: "  כ3 מיליאד המארק מגואלים בדם אחינו, איננו מוכנים לגעת בהם ",
        type: false
      }]
    }, {
      question: "?''מהי פרשת האונייה ''סנט לואיס''",
      answers: [{
        answer: "אוניית פליטים יהודית, שלמעט אירופה לא הסכימו לקבלה",
        type: true
      }, {
        answer: "אוניית מלחמה אמריקאית שהוטבעה ע''י גרמניה והייתה המניע לפרוץ המלחמה",
        type: false
      }, {
        answer: "אונייה רפואית שנשלחה לעזור ליהודי אפריקה",
        type: false
      }, {
        answer: "אוניית המעפילים האחרונה שיצאה מגרמניה לארץ ישראל",
        type: false
      }]
    }, {
      question: "?מהי פרשת האונייה סנט לואיז? ובאיזו שנה התרחשה",
      answers: [{
        answer: "אוניית מעפילים שיצאה מגרמנייה אל עבר קובה אך הממשלה שם סירבה לקבל אותה, בשנת 1939",
        type: true
      }, {
        answer: "אוניית מעפילים שטבעה בדרכה לישראל בשנת 1946",
        type: false
      }, {
        answer: "אוניית נשק שהובאה אל ישראל והופצצה ע''י צה''ל בשנת 1948",
        type: false
      }, {
        answer: "אוניית נופש שיצאה מחופשי ישראל אל עבר בורגס, בשנת 1980",
        type: false
      }]
    }, {
      question: "?''מהם משפטי נירנברג",
      answers: [{
        answer: "העמדה לדין והענשת פושעי מלחמה נאצים",
        type: true
      }, {
        answer: "משפטים האוכפים את תורת הגזע וחוקי הרייך",
        type: false
      }, {
        answer: "משפטיהם של סרבנים גרמנים שהתנגדו להשמדה",
        type: false
      }, {
        answer: "משפטם של חסידי אומות העולם שנתפסו ע''י הנאצים",
        type: false
      }]
    }, {
      question: "?מי היא מיפ חיס",
      answers: [{
        answer: "תושבת אמסטרדם אשר עבדה עם אוטו פרנק, אביה של אנה פרנק וסייעה להם להסתתר במחבואם",
        type: true
      }, {
        answer: "יהודיה מהונגריה שניצלה את היותה בכירה ב''וועד להצלה'' והצילה רבבות יהודים בהברחתם לשוויץ",
        type: false
      }, {
        answer: "אשת עסקים שפעלה בהונגריה תוך ניצול מעמדה הצילה יהודי הונגריה",
        type: false
      }, {
        answer: "גרמניה שהצילה את מעמדה החברתי להצלת אלפי יהודים באמצעות מפעל לייצור סירים ופגזים",
        type: false
      }]
    }, {
      question: "?מי היה אדולף אייכמן",
      answers: [{
        answer: "מבכירי המנגנון הנאצי והאחראיים ליישום הפיתרון הסופי",
        type: true
      }, {
        answer: "מנהיג התעמולה הנאצית",
        type: false
      }, {
        answer: "מפקד מחנה אשוויץ בירקנאו",
        type: false
      }, {
        answer: "השר לענייני בעיית היהודים ותורת הגזע",
        type: false
      }]
    }, {
      question: "?מי היה אהרון לידסקינד",
      answers: [{
        answer: "לוחם מחתרת ופרטיזן יהודי, ממקימי המחתרת בקרקוב",
        type: true
      }, {
        answer: "מפקד מרד גטו וורשה לקראת סוף המלחמה",
        type: false
      }, {
        answer: "מפקד הבריגדה היהודית בצבא הבריטי",
        type: false
      }, {
        answer: "מפקד במחנה אושוויץ שהורה על פיצוץ המשרפות",
        type: false
      }]
    }, {
      question: "?מי היה אוסקר שינדלר",
      answers: [{
        answer: "עסקן גרמני שניצל את מעמדו החברתי להצלת אלפי יהודים באמצעות מפעל לייצור סירים ופגזים",
        type: true
      }, {
        answer: "יהודי גרמני שניצל את היותו בכיר ב''וועד להצלה'' והציל רבבות יהודים בהברחתם לשוויץ",
        type: false
      }, {
        answer: "איש עסקים לדיפלומט שוודי שפעל בהונגריה תוך שימוש במעמדו להצלת יהודי הונגריה",
        type: false
      }, {
        answer: "תושב אמסטרדם אשר הסתיר יהודים, בין היתר הסתיר את אנה פרנק ומשפחתה",
        type: false
      }]
    }, {
      question: "?מי היה האנס פרנק",
      answers: [{
        answer: "המושל הנאצי לפולין",
        type: true
      }, {
        answer: "אביה של אנה פרנק",
        type: false
      }, {
        answer: "ממקימי האומשלגפלץ",
        type: false
      }, {
        answer: "מראשי הגסטפו",
        type: false
      }]
    }, {
      question: "?מי היה יואכים-פון ריבנטרופ",
      answers: [{
        answer: "שר החוץ הגרמני",
        type: true
      }, {
        answer: "שר החוץ הרוסי",
        type: false
      }, {
        answer: "ראש הצבא הסדיר הגרמני",
        type: false
      }, {
        answer: "ראש הצבא האדום",
        type: false
      }]
    }, {
      question: "?מי היה ישראל רז'ו קסטנר",
      answers: [{
        answer: "עורך דין ועיתונאי שפעל להצלת יהודי הונגריה",
        type: true
      }, {
        answer: "חבר כנסת שהוביל וקידם את הסכם השילומים",
        type: false
      }, {
        answer: "התובע הראשי במשפט אייכמן",
        type: false
      }, {
        answer: "מנהיג יהודי ממייסדי הקונגרס הציוני העולמי",
        type: false
      }]
    }, {
      question: "?מי היה פרדריך ברברוסה",
      answers: [{
        answer: "אחד ממלכי גרמניה שנערץ ע''י היטלר",
        type: true
      }, {
        answer: "מפקד הגסטפו וחיל האוויר הגרמני",
        type: false
      }, {
        answer: "שר התעמולה הנאצית בתקופתו של היטלר",
        type: false
      }, {
        answer: "הקיסר הגרמני אותו החליף היטלר בשלטון",
        type: false
      }]
    }, {
      question: "?מי היה ראש ה''ועד לעזרה והצלה'' בהונגריה בתקופת המלחמה",
      answers: [{
        answer: "דב יוסף",
        type: true
      }, {
        answer: "דוב הוז",
        type: false
      }, {
        answer: "נחום גולדמן",
        type: false
      }, {
        answer: "גדעון האוזנר",
        type: false
      }]
    }, {
      question: "?מי היה ריינהארד היידריך",
      answers: [{
        answer: "ראש משטרת הביטחון הגרמנית בשטחי פולין",
        type: true
      }, {
        answer: "מפקד המטה הכללי של פולין",
        type: false
      }, {
        answer: "מפקד כוחות האייזנצגרופן במבצע ברברוסה",
        type: false
      }, {
        answer: "ראש מטה המודיעין למתנגדי המשטר הנאצי",
        type: false
      }]
    }, {
      question: "?''מי הם ה''פרטיזנים",
      answers: [{
        answer: "כוחות המורדים שניסו לפגוע בעורף הגרמני בלחימתם ביערות",
        type: true
      }, {
        answer: "כינוי למורדים יהודים בגטאות אשר לחמו במחתרת",
        type: false
      }, {
        answer: "המחתרת הצרפתית אשר נלחמה בכיבוש הגרמני",
        type: false
      }, {
        answer: "יחידות הגרילה של הצבא האדום שנלחמו בגרמנים",
        type: false
      }]
    }, {
      question: "?מי הם חסידי אומות העולם",
      answers: [{
        answer: "גויים אשר נטלו חלק בהצלת יהודים תוך סיכון עצמי ללא תמורה",
        type: true
      }, {
        answer: "יהודים אשר נטלו חלק בהצלת היהודים תוך סיכון עצמי ללא תמורה",
        type: false
      }, {
        answer: "גרמנים אשר נטלו חלק בהצלת יהודים בגרמניה תמורת סכום כספי ורכוש",
        type: false
      }, {
        answer: "אוקראינים אשר נטלו חלק בהצלת יהודים תמורת סכום כספי ורכוש",
        type: false
      }]
    }, {
      question: "?מי טבע את האנטישמיות בשנת 1897",
      answers: [{
        answer: "ויליהם מאר",
        type: true
      }, {
        answer: "קייזר הינדנבורג",
        type: false
      }, {
        answer: "פון רוהאם",
        type: false
      }, {
        answer: "אדולף היטלר",
        type: false
      }]
    }, {
      question: "?מיהו בנימין הלוי",
      answers: [{
        answer: "שופט אשר ניהל את משפט קסטנר, אייכמן והשתתף במשפט כפר קאסם",
        type: true
      }, {
        answer: "''התובע הכללי במשפט אייכמן שתבע את השמפט ''6 מליון קטגוריות",
        type: false
      }, {
        answer: "סגן ראש ה''ועד לעזרה והצלה'' בהונגריה בתקופת המלחמה",
        type: false
      }, {
        answer: "הרב הראשי בקהילת לובלין אשר צעד בראש האקציה למחנה מיידנק",
        type: false
      }]
    }, {
      question: "?מיהו פרימו לוי",
      answers: [{
        answer: "סופר וכימאי יהודי שנכלא באושוויץ",
        type: true
      }, {
        answer: "ראש כל מועצות היהודנרט",
        type: false
      }, {
        answer: "מנהיג מרד גטו וורשה",
        type: false
      }, {
        answer: "הוגה דעות ופילוסוף יהודי מיגוסלביה",
        type: false
      }]
    }, {
      question: "?מיהו צ'יונה סוגיארה",
      answers: [{
        answer: "קונסול יפני שניצל את מעמדו להבריח רבבות יהודים מהעיר קובנה שבליטא",
        type: true
      }, {
        answer: "קונסול סין שניפק אשרות ליהודי אוסטריה וע''י כך הבריח אותם מאירופה",
        type: false
      }, {
        answer: "(מפקד חיל האוויר היפני שפיקד על מבצע פרל הארבור (הפצצת חיל הים האמריקאי",
        type: false
      }, {
        answer: "שר החוץ הסיני אשר חתם על הסכמי הברית בין גרמניה הנאצית לקיסרות סין",
        type: false
      }]
    }, {
      question: "?מיהו ראול ולנברג",
      answers: [{
        answer: "איש עסקים ודיפלומט שוודי שהציל רבבות מיהודי הונגריה",
        type: true
      }, {
        answer: "קונסול פורטוגל שהבריח עשרות אלפי יהודים מצרפת לספרד ומשם לאמריקה",
        type: false
      }, {
        answer: "עסקן גרמני שהעסיק יהודים במפעליו על מנת להצילם",
        type: false
      }, {
        answer: "מלך דנמרק שהבריח יהודים לשבדיה",
        type: false
      }]
    }, {
      question: "?מיהו/מהו ג'נרל גוברנמן ",
      answers: [{
        answer: "שטחי פולין שאינם עתידים להיות מסופחים לגרמניה",
        type: true
      }, {
        answer: "מפקד הכוחות הגרמנים בקרבות סטלינגרד",
        type: false
      }, {
        answer: "מפקד כוחות הגרמנים במבצע אוברלורד",
        type: false
      }, {
        answer: "כינוי לאזור מוסדות השלטון ברייך השלישי באירופה המערבית",
        type: false
      }]
    }, {
      question: "?מתי החלה רדיפת יהודי פולין",
      answers: [{
        answer: "ב1939 עם הפלישה לפולין",
        type: true
      }, {
        answer: "ב1940 עם הפלישה לרומניה",
        type: false
      }, {
        answer: "ב1941 עם תחילת המבצע ריבנטרוב-מולוטוב",
        type: false
      }, {
        answer: "ב1938 מערב ליל הבדולח",
        type: false
      }]
    }, {
      question: "?מתי לראשונה נשלחו יהודים למחנות הריכוז",
      answers: [{
        answer: "לאחר ליל הבדולח",
        type: true
      }, {
        answer: "עם סיפוח חבל הסודטים בצ'כיה",
        type: false
      }, {
        answer: "עם כיבוש גרמניה",
        type: false
      }, {
        answer: "עם סיפוח אוסטריה לגרמניה",
        type: false
      }]
    }, {
      question: "?מתי נכנעה גרמניה בפני בעלות הברית ",
      answers: [{
        answer: "1945",
        type: true
      }, {
        answer: "1944",
        type: false
      }, {
        answer: "1946",
        type: false
      }, {
        answer: "1947",
        type: false
      }]
    }, {
      question: "?מתי נפתרה סופית בעיית הפליטים",
      answers: [{
        answer: "בהקמת מדינת ישראל",
        type: true
      }, {
        answer: "עם סיום המלחמה",
        type: false
      }, {
        answer: "עם שחרור מחנות הריכוז וההשמדה",
        type: false
      }, {
        answer: "''עם סיום תהליך ''הפיתרון הסופי",
        type: false
      }]
    }, {
      question: "?מתי פרצה מלחמת העולם השניה",
      answers: [{
        answer: "הראשון לספטמבר 1939",
        type: true
      }, {
        answer: "החמישי לספטמבר 1936",
        type: false
      }, {
        answer: "השישי ליוני 1939",
        type: false
      }, {
        answer: "ה-22 ליוני 1939",
        type: false
      }]
    }, {
      question: "?על איזה גוף הוטלה המשימה להנציח את קורבנות השואה",
      answers: [{
        answer: "הועד הלאומי",
        type: true
      }, {
        answer: "התנועה הלאומית",
        type: false
      }, {
        answer: "הועד הממשלתי",
        type: false
      }, {
        answer: "התנועה הממשלתית",
        type: false
      }]
    }, {
      question: "?על מה התבססו המחתרות בגטאות",
      answers: [{
        answer: "תנועות הנוער היהודיות",
        type: true
      }, {
        answer: "מוזלמנים",
        type: false
      }, {
        answer: "קאפו",
        type: false
      }, {
        answer: "יהודנרט",
        type: false
      }]
    }, {
      question: "?..'השבת השחורה'' הייתה פעולה של'",
      answers: [{
        answer: "הבריטים",
        type: true
      }, {
        answer: "הלח''י",
        type: false
      }, {
        answer: "האצ''ל",
        type: false
      }, {
        answer: "המרי העברי",
        type: false
      }]
    }, {
      question: "?איזה ארגון עובדים הוקם בשנת 1920",
      answers: [{
        answer: "ההסתדרות הכללית של העובדים",
        type: true
      }, {
        answer: "אגודת ישראל",
        type: false
      }, {
        answer: "חלוצי העלייה השנייה",
        type: false
      }, {
        answer: "ההסתדרות החקלאית של העובדים",
        type: false
      }]
    }, {
      question: "?איזה גל עלייה נמשך עד לפרוץ מלחמת העולם הראשונה",
      answers: [{
        answer: "עלייה שנייה",
        type: true
      }, {
        answer: "עלייה ראשונה",
        type: false
      }, {
        answer: "עלייה שלישית",
        type: false
      }, {
        answer: "עלייה רביעית",
        type: false
      }]
    }, {
      question: "?איזו מהחברות הבאות היא חברה צודקת ושוויונית המתבססת על עקרונות סוציאליסטיים",
      answers: [{
        answer: "קיבוץ",
        type: true
      }, {
        answer: "מושבה",
        type: false
      }, {
        answer: "כפר",
        type: false
      }, {
        answer: "עיר  ",
        type: false
      }]
    }, {
      question: "?איזו מושבה הוקמה במקביל לראש פינה",
      answers: [{
        answer: "פתח תקווה",
        type: true
      }, {
        answer: "זכרון יעקב",
        type: false
      }, {
        answer: "דגניה",
        type: false
      }, {
        answer: "משכנות שאננים",
        type: false
      }]
    }, {
      question: "?איזו עיר שימשה כמוקד להפצה ולחידוש העברית כשפה מודרנית",
      answers: [{
        answer: "יפו",
        type: true
      }, {
        answer: "ירושלים",
        type: false
      }, {
        answer: "רמת גן",
        type: false
      }, {
        answer: "חיפה",
        type: false
      }]
    }, {
      question: "?איזו עליות / עלייה התרחשה בתקופת המנדט הבריטי",
      answers: [{
        answer: "עלייה שלישית",
        type: true
      }, {
        answer: "עלייה שנייה ושלישית",
        type: false
      }, {
        answer: "עלייה ראשונה ושלישית",
        type: false
      }, {
        answer: "עלייה ראשונה ורביעית",
        type: false
      }]
    }, {
      question: "? איזו קבוצה הוקמה ב1909",
      answers: [{
        answer: "דגניה",
        type: true
      }, {
        answer: "אם המושבות",
        type: false
      }, {
        answer: "משכנות שאננים",
        type: false
      }, {
        answer: "ראש פינה",
        type: false
      }]
    }, {
      question: "?איזו תנועה התנגדה לפקידי הברון רוטשילד",
      answers: [{
        answer: "ביל''ו",
        type: true
      }, {
        answer: "הציונות הכללית",
        type: false
      }, {
        answer: "אגודת ישראל",
        type: false
      }, {
        answer: "בית''ר",
        type: false
      }]
    }, {
      question: "?אילו אגודות הקים אליעזר בן יהודה",
      answers: [{
        answer: "ללימוד השפה העברית",
        type: true
      }, {
        answer: "כלכליות",
        type: false
      }, {
        answer: "חקלאיות",
        type: false
      }, {
        answer: "ללימוד הדת",
        type: false
      }]
    }, {
      question: "?אילו אנשים פעלו בירושלים לשם תחיית השפה העברית",
      answers: [{
        answer: "קבוצת מחנכים ואינטלקטואלים",
        type: true
      }, {
        answer: "קבוצת רבנים ותלמידיהם",
        type: false
      }, {
        answer: "אליעזר בן יהודה וחותנו",
        type: false
      }, {
        answer: "מחנכים",
        type: false
      }]
    }, {
      question: "?באיזה ספר לבן נקבע כי במדינת ישראל תקום מדינה דו-לאומית",
      answers: [{
        answer: "הספר הלבן השלישי",
        type: true
      }, {
        answer: "הספר הלבן הראשון",
        type: false
      }, {
        answer: "הספר הלבן השני",
        type: false
      }, {
        answer: "הספר הלבן הרביעי",
        type: false
      }]
    }, {
      question: "?''באיזה ערי קודש התרכז ''היישוב היהודי",
      answers: [{
        answer: "חברון, ירושלים, טבריה, צפת",
        type: true
      }, {
        answer: "צפת, עכו, ירושלים, חברון",
        type: false
      }, {
        answer: "ירושלים, טבריה, חברון, באר שבע",
        type: false
      }, {
        answer: "באר שבע, חברון, עכו, ירושלים",
        type: false
      }]
    }, {
      question: "?באיזה שנה הוקמה הקבוצה הראשונה דגניה",
      answers: [{
        answer: "1909",
        type: true
      }, {
        answer: "1905",
        type: false
      }, {
        answer: "1915",
        type: false
      }, {
        answer: "1902",
        type: false
      }]
    }, {
      question: "?באיזו שנה גירשו הטורקים את תושבי יפו והסביבה",
      answers: [{
        answer: "1917",
        type: true
      }, {
        answer: "1918",
        type: false
      }, {
        answer: "1916",
        type: false
      }, {
        answer: "1919",
        type: false
      }]
    }, {
      question: "?באיזו שנה החל גל העלייה השניה",
      answers: [{
        answer: "1904",
        type: true
      }, {
        answer: "1903",
        type: false
      }, {
        answer: "1905",
        type: false
      }, {
        answer: "1902",
        type: false
      }]
    }, {
      question: "?''באיזו שנה החלה ''תקופת המאבק",
      answers: [{
        answer: "1945",
        type: true
      }, {
        answer: "1941",
        type: false
      }, {
        answer: "1942",
        type: false
      }, {
        answer: "1947",
        type: false
      }]
    }, {
      question: "?''באיזו שנה נוסדה תנועת ''החלוץ",
      answers: [{
        answer: "1880",
        type: true
      }, {
        answer: "1915",
        type: false
      }, {
        answer: "1890",
        type: false
      }, {
        answer: "1870",
        type: false
      }]
    }, {
      question: "?באיזו שפה דרשה חברת ''עזרה'' שבעזרתה ילמדו בטכניון",
      answers: [{
        answer: "גרמנית",
        type: true
      }, {
        answer: "עברית",
        type: false
      }, {
        answer: "פולנית",
        type: false
      }, {
        answer: "אנגלית",
        type: false
      }]
    }, {
      question: "?''בין איזה שנים חל האירוע המכונה ''מלחמת השפות",
      answers: [{
        answer: "1913-1914",
        type: true
      }, {
        answer: "1914-1915",
        type: false
      }, {
        answer: "1913-1915",
        type: false
      }, {
        answer: "1912-1913",
        type: false
      }]
    }, {
      question: "?בין אילו שנים חלה העלייה הראשונה",
      answers: [{
        answer: "1882-1903",
        type: true
      }, {
        answer: "1882-1904",
        type: false
      }, {
        answer: "1883-1903",
        type: false
      }, {
        answer: "1883-1904",
        type: false
      }]
    }, {
      question: "?בין מי למי נחתם הסכמי הקפיטולציות",
      answers: [{
        answer: "האימפריה העות'מנית למעצמות השונות",
        type: true
      }, {
        answer: "האימפריה הבריטית עם האימפריה העות'מנית",
        type: false
      }, {
        answer: "המעצמות האירופיות עם האימפריה הבריטית",
        type: false
      }, {
        answer: "מעצמות שונות לאימפריה הבריטית",
        type: false
      }]
    }, {
      question: "?''במה עסקו חברי ''גדוד העבודה",
      answers: [{
        answer: "סלילת כבישים והקמת ישובים",
        type: true
      }, {
        answer: "סלילת כבישים ולימוד עבודה חקלאית",
        type: false
      }, {
        answer: "לימוד תורה",
        type: false
      }, {
        answer: "שילוב תורה ועבודה",
        type: false
      }]
    }, {
      question: "?''היכן ישבו אנשי ''הישוב הישן",
      answers: [{
        answer: "ירושלים, צפת, טבריה וחברון",
        type: true
      }, {
        answer: "ירושלים, צפת, טבריה וחיפה",
        type: false
      }, {
        answer: "ירושלים, טבריה, עתלית וחברון",
        type: false
      }, {
        answer: "ירושלים, צפת, חיפה ועתלית",
        type: false
      }]
    }, {
      question: "?כיצד באה לידי ביטוי עזרתו של הברון רוטשילד למושבות",
      answers: [{
        answer: "הברון רוטשילד השקעי המושבות סכומים גדולים ושלח צוותים של מומחים ופקידים שיסייעו בניהולם הכלכלי",
        type: true
      }, {
        answer: "הברון רוטשילד שלח צוותים של פקידים שסייעו בניהול הכלכלי של המשק החקלאי",
        type: false
      }, {
        answer: "הברון רוטשילד שלח צוותים של מומחים בחקלאות כדי לפתח שיטות גידול חדשות",
        type: false
      }, {
        answer: "הברון רוטשילד השקיע אך ורק בתחום הכספי של היישוב בעזרת תרומות",
        type: false
      }]
    }, {
      question: "?כיצד נקראה השכונה היהודית הראשונה שהוקמה מחוץ לחומות ירושלים",
      answers: [{
        answer: "משכנות שאננים",
        type: true
      }, {
        answer: "מחנה ישראל",
        type: false
      }, {
        answer: "גילה",
        type: false
      }, {
        answer: "המושבה הגרמנית",
        type: false
      }]
    }, {
      question: "?כמה יהודים היו בארץ בראשיתה של המאה ה- 19",
      answers: [{
        answer: "6,000",
        type: true
      }, {
        answer: "30,000",
        type: false
      }, {
        answer: "60,000",
        type: false
      }, {
        answer: "300,000",
        type: false
      }]
    }, {
      question: "?כמה עולים בעליה הראשונה דגלו בעבודת אדמה והקימו מושבות חדשות",
      answers: [{
        answer: "5000",
        type: true
      }, {
        answer: "500",
        type: false
      }, {
        answer: "20,000",
        type: false
      }, {
        answer: "50,000",
        type: false
      }]
    }, {
      question: "?לאחר איזו עליה חודשה ההתיישבות בפתח תקווה",
      answers: [{
        answer: "עליה ראשונה",
        type: true
      }, {
        answer: "עליה שניה",
        type: false
      }, {
        answer: "עליה שלישית",
        type: false
      }, {
        answer: "עליה רביעית",
        type: false
      }]
    }, {
      question: "?למה גרמה שיטת הפקידות",
      answers: [{
        answer: "תלות של החקלאים במימון חיצוני",
        type: true
      }, {
        answer: "פיתוח של בנקים בהתיישבות שעזרו לחקלאים בניהול כלכלי",
        type: false
      }, {
        answer: "תלות של החקלאים בעובדים רבים",
        type: false
      }, {
        answer: "פיתוח של התשתיות הכלכליות במושבות",
        type: false
      }]
    }, {
      question: "?''למה הוביל הדגשת העקרון האידיאולוגי ''כיבוש האדמה",
      answers: [{
        answer: "הקמת קיבוצים על קרקעות לאומיות",
        type: true
      }, {
        answer: "הקמת עיירות פיתוח",
        type: false
      }, {
        answer: "הקמת כפרי אירוח",
        type: false
      }, {
        answer: "הקמת המושבות",
        type: false
      }]
    }, {
      question: "?''מאיזו עליה החל להתקיים ''הישוב החדש",
      answers: [{
        answer: "עליה ראשונה",
        type: true
      }, {
        answer: "עליה שניה",
        type: false
      }, {
        answer: "עליה שלישית",
        type: false
      }, {
        answer: "עליה רביעית",
        type: false
      }]
    }, {
      question: "?מה אפיין את העלייה החמישית",
      answers: [{
        answer: "החרדה מפני המשטרים הפשיסטיים",
        type: true
      }, {
        answer: "הברון רוטשילד שהשקיע במושבות סכומים גדולים בשיטה שנקראה שיטת הפקידות",
        type: false
      }, {
        answer: "הגעתה לארץ של האונייה ''רוסלן'' שעל סיפונה היו מעל 600 עולים",
        type: false
      }, {
        answer: "החשיבות שבעבודת האדמה ועבודת הכפיים",
        type: false
      }]
    }, {
      question: "?''מה היה ''ליל הגשרים",
      answers: [{
        answer: "פעולה שנקטה תנועת המרי העברית שבמהלכה פוצצו 11 גשרים ברחבי הארץ",
        type: true
      }, {
        answer: "פעולה בה היישוב היהודי הקים 11 גשרים המסגרת חומה ומגדל",
        type: false
      }, {
        answer: "פעולה של הפרטיזנים ביוגוסלביה שמטרתה הייתה לעצור את תנועת הרכבות לכיוון מזרח",
        type: false
      }, {
        answer: "מבצע שהתרחש במסגרת מבצע נחשון בו חטיבת הראל פרצה באמצעות גשרים מאולתרים את דרכה במרחב לטרון",
        type: false
      }]
    }, {
      question: "?מה היה בסיס רעיון הקבוצה שהתגלגל והפך לימים לרעיון הקיבוץ",
      answers: [{
        answer: "התיישבות משותפת ועיבוד משותף של חלקות האדמה",
        type: true
      }, {
        answer: "כיבוש האדמה והפיכתה לאדמה חקלאית",
        type: false
      }, {
        answer: "התיישבות משותפת וחלוקת האדמה לחלקות",
        type: false
      }, {
        answer: "כיבוש האדמה ובניית מבני מגורים בה",
        type: false
      }]
    }, {
      question: "?מה היה הקיבוץ הראשון ומתי הוקם",
      answers: [{
        answer: "דגניה, 1909",
        type: true
      }, {
        answer: "נהלל, 1906",
        type: false
      }, {
        answer: "דגניה, 1907",
        type: false
      }, {
        answer: "כינרת, 1908",
        type: false
      }]
    }, {
      question: "?מה היה כינוייה של פתח תקווה",
      answers: [{
        answer: "אם המושבות",
        type: true
      }, {
        answer: "משכנות שאננים",
        type: false
      }, {
        answer: "המושבה הראשונה",
        type: false
      }, {
        answer: "אחוזת בית",
        type: false
      }]
    }, {
      question: "?מה היה פועלה של וועדת אונסקו''פ",
      answers: [{
        answer: "המליצה על תכנית החלוקה",
        type: true
      }, {
        answer: "החליטה למסור למדינה היהודית את מרבית שטחי הנגב",
        type: false
      }, {
        answer: "הוועדה המיוחדת של האו''ם לענייני כלכלה במזרח התיכון",
        type: false
      }, {
        answer: "דנה בבעיית הפליטים היהודים",
        type: false
      }]
    }, {
      question: "?מה הייתה השכונה היהודית הראשונה שהוקמה מחוץ לחומות",
      answers: [{
        answer: "משכנות שאננים",
        type: true
      }, {
        answer: "נווה שאנן",
        type: false
      }, {
        answer: "פתח תקווה",
        type: false
      }, {
        answer: "אחוזת בית",
        type: false
      }]
    }, {
      question: "?''מה הייתה מטרתה של ''ועדת פיל''",
      answers: [{
        answer: "הצעת פתרון לסכסוך הערבי-יהודי המתהווה",
        type: true
      }, {
        answer: "הוועדה אשר גיבשה את הסכמי ההפוגה הראשונה במלחמת העצמאות",
        type: false
      }, {
        answer: "בדיקת סיבות פריצתה של מלחמת העולם הראשונה",
        type: false
      }, {
        answer: "קביעת קריטריונים לעלייה בתקופת העלייה השנייה",
        type: false
      }]
    }, {
      question: "?מה היתה התוצאה של מאורעות תרפ''ט",
      answers: [{
        answer: "הצעת פתרון לסכסוך הערבי-יהודי המתהווה",
        type: true
      }, {
        answer: "הוועדה אשר גיבשה את הסכמי ההפוגה הראשונה במלחמת העצמאות",
        type: false
      }, {
        answer: "בדיקת סיבות פריצתה של מלחמת העולם הראשונה",
        type: false
      }, {
        answer: "קביעת קריטריונים לעלייה בתקופת העלייה השנייה",
        type: false
      }]
    }, {
      question: "?מה השפיע על הריבוי של האוכלוסיה בארץ",
      answers: [{
        answer: "עליות קדם ציוניות",
        type: true
      }, {
        answer: "תמותה באחוז נמוך",
        type: false
      }, {
        answer: "ריבוי טבעי",
        type: false
      }, {
        answer: "אימוץ",
        type: false
      }]
    }, {
      question: "?מה יזם משה מונטיפיורי בשנת 1860",
      answers: [{
        answer: "הקמתה של השכונה היהודית הראשונה מחוץ לחומות",
        type: true
      }, {
        answer: "הקמתה של שכונה יהודית בירושלים",
        type: false
      }, {
        answer: "פרויקט למימון המפעל הציוני",
        type: false
      }, {
        answer: "פרויקט למימון ההתיישבות בארץ ישראל",
        type: false
      }]
    }, {
      question: "?''מה מהווה ''הצהרת בלפור",
      answers: [{
        answer: "הישג דיפלומטי חשוב בדרך להקמת המדינה",
        type: true
      }, {
        answer: "מכתב שכתב בלפור שנלקח בחשבון בזמן המנדט הבריטי",
        type: false
      }, {
        answer: "מכתב שנכתב לברון רוטשילד",
        type: false
      }, {
        answer: "הישג דיפלומטי חשוב העוסק בחיבור עם מדינות העולם",
        type: false
      }]
    }, {
      question: "?מה נקבע בספר הלבן השלישי",
      answers: [{
        answer: "כי בפלסטינה תקום מדינה דו לאומית",
        type: true
      }, {
        answer: "כי בפלסטינה תקום מדינה יהודית",
        type: false
      }, {
        answer: "כי בפלסטינה תקום מדינה יהודית לצד מדינה ערבית",
        type: false
      }, {
        answer: "כי בפלסטינה תקום מדינה ערבית",
        type: false
      }]
    }, {
      question: "?''מה קיימו היהודים הספרדים בתקופת ''הישוב הישן'",
      answers: [{
        answer: "מערכת של קשרים כלכלים עם אוכלוסית הרוב המוסלמית ורבים מהם עבדו לפרנסתם",
        type: true
      }, {
        answer: "מערכת של קשרים חברתיים עם אוכלוסית הרוב המוסלמית ורבים מהם עבדו לפרנסתם",
        type: false
      }, {
        answer: "מערכת של קשרים כלכליים עם אוכלוסית הרוב הערבית ורבים מהם עבדו בפיתוח מיומנויות לחימה",
        type: false
      }, {
        answer: "מערכת של קשרים חברתיים עם אוכלסית הרוב הנוצרית ורבים מהם עסקו בחקלאות",
        type: false
      }]
    }, {
      question: "?''מהו ''ריב הלשונות",
      answers: [{
        answer: "וויכוח שפרץ לגביי שפת הלימוד בטכניון",
        type: true
      }, {
        answer: "וויכוח שפרץ בין הטכניון לבין הגימנסיה הרצליה",
        type: false
      }, {
        answer: "וויכוח שפרץ לגביי שפת הלימוד במוסדות הלימוד בארץ",
        type: false
      }, {
        answer: "וויכוח שפרץ בין הטכניון לבין האוניברסיטה העברית",
        type: false
      }]
    }, {
      question: "?מהו הספר הלבן הראשון",
      answers: [{
        answer: "מסמך רשמי שהוצא לאור ע''י ממשלת בריטניה, המציג את מדיניות הממשלה כלפי היישוב היהודי",
        type: true
      }, {
        answer: "מסמך המסכם את ''הצהרת בלפור'' אשר נכתב ע''י הלורד ריצ'מונד דהלאנור רמינגטון",
        type: false
      }, {
        answer: "מסמך המתאר את הקשיים שגרמו למתחים בין ראשי היישוב היהודי והציונות לבין בריטניה",
        type: false
      }, {
        answer: "מסמך המבטא את הנסיגה מהמחויבות להקמתו של הבית הלאומי וקובע קריטריונים חדשים לעלייה ורכישת קרקעות",
        type: false
      }]
    }, {
      question: "?מהו הספר הלבן",
      answers: [{
        answer: "שינויים במדיניות הבריטית שהוגדרו רשמית בסדרה של מסמכים",
        type: true
      }, {
        answer: "שינויים במדיניות הבריטית שהוגדרו רשמית בסדרה של צווים",
        type: false
      }, {
        answer: "אוסף מסמכים שביניהם גם הצהרת בלפור",
        type: false
      }, {
        answer: "אוסף פקודות ושינויים במדיניות הגרמנית שהוגדרו רשמית בסדרה של מסמכים",
        type: false
      }]
    }, {
      question: "?מהו שמה של השכונה, שהפכה לימים לעיר העברית הראשונה",
      answers: [{
        answer: "אחוזת בית",
        type: true
      }, {
        answer: "מחנה ישראל",
        type: false
      }, {
        answer: "הגימנסיה",
        type: false
      }, {
        answer: "אום רשרש",
        type: false
      }]
    }, {
      question: "?''מהי ''ההסתדרות הכללית של העובדים העבריים בארץ ישראל",
      answers: [{
        answer: "ארגון עובדים שאיגד את כל העובדים היהודים בארץ",
        type: true
      }, {
        answer: "ארגון עובדים שאיגד את כל העובדים בארץ",
        type: false
      }, {
        answer: "ארגון עובדים שהוקם על ידי הבריטים למען המושבה היהודית בארץ",
        type: false
      }, {
        answer: "ארגון עובדים שהוקם על ידי גדוד העבודה",
        type: false
      }]
    }, {
      question: "?מהי גיא אוני",
      answers: [{
        answer: "ראש פינה",
        type: true
      }, {
        answer: "פתח תקווה",
        type: false
      }, {
        answer: "חברון",
        type: false
      }, {
        answer: "צפת",
        type: false
      }]
    }, {
      question: "?מהי הצהרת בלפור",
      answers: [{
        answer: "הכרה רשמית בתביעותיה של התנועה הציונית על ארץ ישראל",
        type: true
      }, {
        answer: "הכרה רשמית בתביעותיה של תנועת ההסתדרות הכללית על ארץ ישראל",
        type: false
      }, {
        answer: "שיתוף פעולה עם הבריטים באזור",
        type: false
      }, {
        answer: "הכרה רשמית בקשיים בין ראשי היישוב היהודי לבין הבריטים",
        type: false
      }]
    }, {
      question: "?''מהי השיטה בה נקט הברון רוטשילד שהפכה את העולים ל''מנהלי עבודה",
      answers: [{
        answer: "הפקידות",
        type: true
      }, {
        answer: "היישוב הקטן",
        type: false
      }, {
        answer: "המנהלים",
        type: false
      }, {
        answer: "החקלאות",
        type: false
      }]
    }, {
      question: "?מהיכן הגיעו רוב עולי העליה הראשונה",
      answers: [{
        answer: "רוסיה, רומניה ופולין",
        type: true
      }, {
        answer: "רוסיה, גרמניה ורומניה",
        type: false
      }, {
        answer: "רוסיה, רומניה והונגריה",
        type: false
      }, {
        answer: "פולין, רוסיה וגרמניה",
        type: false
      }]
    }, {
      question: "?מהיכן הגיעו רוב עולי העלייה החמישית",
      answers: [{
        answer: "גרמניה",
        type: true
      }, {
        answer: "פולין",
        type: false
      }, {
        answer: "רומניה",
        type: false
      }, {
        answer: "תימן",
        type: false
      }]
    }, {
      question: "?מהם הסכמי קפיטוליציות",
      answers: [{
        answer: "הסכמים שהקנו זכויות יתר לנתיני המעצמות",
        type: true
      }, {
        answer: "הסכמים שהקנו זכויות יתר לתושבי מדינת ישראל",
        type: false
      }, {
        answer: "הסכמים שחייבו את נתיני המעצמות בביצוע גזירות רבות",
        type: false
      }, {
        answer: "הסכמים של שלום בין המעצמות",
        type: false
      }]
    }, {
      question: "?מהן תוכניות ההצלה ומהי מטרתן",
      answers: [{
        answer: "תוכניות אשר מטרתן הייתה להציל יהודים בזמן מלחמת העולם השנייה",
        type: true
      }, {
        answer: "תוכניות אשר מטרתן הייתה להעלות עולים בצורה בלתי לגאלית בזמן מלחמת העולם השנייה",
        type: false
      }, {
        answer: "תוכנית אשר מטרתן הייתה רקימת קשר עם ארה''ב בזמן מלחמת העולם השנייה",
        type: false
      }, {
        answer: "תוכניות אשר מטרתן הייתה להציל יהודים מרוסיה ואתיופיה בזמן מלחמת העולם השנייה",
        type: false
      }]
    }, {
      question: "?מי היה אברהם משה (א''מ) לונץ",
      answers: [{
        answer: "מראשוני החוקרים של ארץ ישראל",
        type: true
      }, {
        answer: "נחשב לאחד התומכים לטובת המפעל הציוני",
        type: false
      }, {
        answer: "איש ציבור שהשתייך אל היישוב הישן",
        type: false
      }, {
        answer: "מחלוצי העלייה השנייה",
        type: false
      }]
    }, {
      question: "?מי היה משה מונטיפיורי",
      answers: [{
        answer: "יהודי עשיר אשר סייע לתושבים היהודים להתיישב מחוץ לחומות",
        type: true
      }, {
        answer: "יהודי אשר סייע לתושבים הערביים להגר מחוץ לא''י",
        type: false
      }, {
        answer: "יהודי עשיר אשר סייע לתושבים הערביים להתיישב מחוץ לחומות",
        type: false
      }, {
        answer: "יהודי אשר הוביל את פרוייקט חומה ומגדל",
        type: false
      }]
    }, {
      question: "?מי היו מדינות ההסכמה במלחמת העולם הראשונה",
      answers: [{
        answer: "איטליה, בריטניה, יפן, ארה''ב, רוסיה, צרפת",
        type: true
      }, {
        answer: "איטליה, גרמניה, יפן, סין, ארה''ב, צרפת",
        type: false
      }, {
        answer: "איטליה, גרמניה, רוסיה, בריטניה, אירלנד, סין",
        type: false
      }, {
        answer: "איטליה, בריטניה, בולגריה, רוסיה, צרפת",
        type: false
      }]
    }, {
      question: "?מי הקים את ועדת אונסקו''פ",
      answers: [{
        answer: "האו''ם",
        type: true
      }, {
        answer: "האיחוד האירופאי",
        type: false
      }, {
        answer: "הממשל הבריטי",
        type: false
      }, {
        answer: "נאט''ו",
        type: false
      }]
    }, {
      question: "?מי מהבאים נתמך בכספי החלוקה",
      answers: [{
        answer: "האשכנזים, ביישוב הישן",
        type: true
      }, {
        answer: "הספרדים, ביישוב הישן",
        type: false
      }, {
        answer: "האשכנזים, בעלייה השנייה",
        type: false
      }, {
        answer: "הספרדים, בעלייה השנייה",
        type: false
      }]
    }, {
      question: "?ממה הורכבה העלייה הרביעית בעיקרה",
      answers: [{
        answer: "ממשפחות בנות המעמד הבינוני שעזבו את פולין",
        type: true
      }, {
        answer: "ממשפחות בנות המעמד הבינוני שעזבו את רומניה",
        type: false
      }, {
        answer: "ממשפחות בנות המעמד הגבוה שעזבו את בריטניה",
        type: false
      }, {
        answer: "ממשפחות בנות המעמד הגבוה שעזבו את גרמניה",
        type: false
      }]
    }, {
      question: "?מתי היה גירוש תל אביב",
      answers: [{
        answer: "במרץ 1917 גירשו הטורקים את תושבי המקום",
        type: true
      }, {
        answer: "ביולי 1918 גירשו הטורקים את תושבי המקום",
        type: false
      }, {
        answer: "במרץ 1917 גירשו הבריטים את תושבי המקום",
        type: false
      }, {
        answer: "ביולי 1918 גירשו הבריטים את תושבי המקום",
        type: false
      }]
    }, {
      question: "?ע''י מי פורסם הספר הלבן",
      answers: [{
        answer: "שר המושבות הבריטי",
        type: true
      }, {
        answer: "שר החוץ הבריטי",
        type: false
      }, {
        answer: "התנועה הציונית",
        type: false
      }, {
        answer: "תנועת המחתרת ניל''י",
        type: false
      }]
    }, {
      question: "?על ידי מי פורסם הספר הלבן הראשון",
      answers: [{
        answer: "ווינסטון צ'רצ'יל",
        type: true
      }, {
        answer: "ג'יימס בלפור",
        type: false
      }, {
        answer: "הברון רוטשילד",
        type: false
      }, {
        answer: "אדמונס ג'יימס",
        type: false
      }]
    }, {
      question: "?על מה נאבקו בעלי תודעה לאומית סוציאליסטית מהעלייה השנייה",
      answers: [{
        answer: "כיבוש העבודה",
        type: true
      }, {
        answer: "כיבוש השמירה",
        type: false
      }, {
        answer: "השפה העברית",
        type: false
      }, {
        answer: "צביון דתי בארץ",
        type: false
      }]
    }, {
      question: "?על שמו של איזה רמטכ''ל נקרא בסיס מטה מפקדת זרוע היבשה בקרית מלאכי",
      answers: [{
        answer: "חיים בר לב ",
        type: true
      }, {
        answer: "דוד אלעזר ",
        type: false
      }, {
        answer: "יצחק רבין ",
        type: false
      }, {
        answer: "צבי צור",
        type: false
      }]
    }, {
      question: "?''איזה נשיא הקים את מפלגת ''יחד",
      answers: [{
        answer: "עזר ויצמן",
        type: true
      }, {
        answer: "שמעון פרס ",
        type: false
      }, {
        answer: "אפרים קציר",
        type: false
      }, {
        answer: "חיים ויצמן",
        type: false
      }]
    }, {
      question: "?איזה נשיא מונה למנכ''ל משרד הביטחון",
      answers: [{
        answer: "שמעון פרס",
        type: true
      }, {
        answer: "זלמן שזר",
        type: false
      }, {
        answer: "יצחק בן צבי",
        type: false
      }, {
        answer: "יצחק נבון",
        type: false
      }]
    }, {
      question: "?איזה נשיא נולד בשנת 1884 בפולטובה שברוסיה ונקבר בהר המנוחות בירושלים",
      answers: [{
        answer: "יצחק בן צבי",
        type: true
      }, {
        answer: "אפריים קציר",
        type: false
      }, {
        answer: "לוי אשכול",
        type: false
      }, {
        answer: "יצחק רבין",
        type: false
      }]
    }, {
      question: "?איזה נשיא פעל להשגתה של הצהרת בלפור",
      answers: [{
        answer: "חיים ויצמן",
        type: true
      }, {
        answer: "משה קצב",
        type: false
      }, {
        answer: "עזר ויצמן",
        type: false
      }, {
        answer: "חיים הרצוג",
        type: false
      }]
    }, {
      question: "?''איזה פיקוד היה אחראי על הלחימה בעזה במבצע ''צוק איתן",
      answers: [{
        answer: "פיקוד דרום",
        type: true
      }, {
        answer: "פיקוד צפון",
        type: false
      }, {
        answer: "פיקוד מרכז",
        type: false
      }, {
        answer: "מז''י",
        type: false
      }]
    }, {
      question: "?איזה רמטכ''ל התמנה לנציב קבילות החיילים הראשון בצה''ל",
      answers: [{
        answer: "חיים לסקוב",
        type: true
      }, {
        answer: "משה דיין",
        type: false
      }, {
        answer: "מרדכי מקלף",
        type: false
      }, {
        answer: "צבי צור",
        type: false
      }]
    }, {
      question: "?איזה שר שימש שמיר בממשלה שבה ניצח פרס בבחירות",
      answers: [{
        answer: "שר חוץ",
        type: true
      }, {
        answer: "שר פנים",
        type: false
      }, {
        answer: "שר האוצר",
        type: false
      }, {
        answer: "שר החינוך",
        type: false
      }]
    }, {
      question: "?איזו בעיה העצימה העלייה ההמונית במדינה",
      answers: [{
        answer: "בעיות כלכליות",
        type: true
      }, {
        answer: "בעיה מדינית",
        type: false
      }, {
        answer: "בעיה ביטחונית",
        type: false
      }, {
        answer: "בעיות בינלאומיות",
        type: false
      }]
    }, {
      question: "?איך נקרא גל המחאה שפקד את מדינת ישראל בין השנים 1971-1970",
      answers: [{
        answer: "הפנתרים השחורים",
        type: true
      }, {
        answer: "הסכסוך הפלסטינאי",
        type: false
      }, {
        answer: "ואדי סאליב",
        type: false
      }, {
        answer: "הציבורי",
        type: false
      }]
    }, {
      question: "?ב-1940 נעצר מנחם בגין בברית המועצות, מתי הוא שוחרר",
      answers: [{
        answer: "בעת מבצע ברברוסה",
        type: true
      }, {
        answer: "בזמן האינטיפאדה",
        type: false
      }, {
        answer: "בעת מבצע יונתן",
        type: false
      }, {
        answer: "בעת הסכמי אוסלו",
        type: false
      }]
    }, {
      question: "?ב1967 התגייס בנימין נתניהו. לאיזו יחידה",
      answers: [{
        answer: "סיירת מטכ''ל",
        type: true
      }, {
        answer: "פלס''ר גולני",
        type: false
      }, {
        answer: "דובדבן",
        type: false
      }, {
        answer: "חיל החימוש",
        type: false
      }]
    }, {
      question: "",
      answers: [{
        answer: "",
        type: true
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }]
    }, {
      question: "",
      answers: [{
        answer: "",
        type: true
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }]
    }, {
      question: "",
      answers: [{
        answer: "",
        type: true
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }, {
        answer: "",
        type: false
      }]
    }]

    return {
      test: test

    };
  });
})();
