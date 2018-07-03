(function () {
  angular.module('officerspreparation').factory('TestService', function () {
    // Might use a resource here that returns a JSON array

    var test = [{
      question: "?מה תפקיד הקואליציה",
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
      question: "?איזה חוק קובע כי לכל יהודי הזכות לעלות ארצה ולקבל אזרחות ישראלית ללא תנאי",
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
      question: "?איזו אוכלוסיה צורפה לחוק השבות לאחר תיקופו",
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
      question: "?איזו מילה לא נמצאת בתוך מגילת העצמאות",
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
      question: "?איזו תנועה או מפלגה הנהיג דויד וולפסון",
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
      question: "?''אילו אירועים התרחשו בעקבות חקיקת חוק יסוד ''ירושלים בירת ישראל",
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
      question: "?אילו מקצועות מוגדים ''לימוד חובה'' עפ''י הגדרת הסוכנות היהודית במסמך הסטטוס קוו",
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
      question: "?באיזו שנה החל מבקר המדינה לשמש כנציב תלונות הציבור",
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
      question: "?באיזו שנה נוסד בנק ישראל",
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
      question: "?באיזה שנה נכתב ההמנון",
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
      question: "?באילו ערים ישנה תחבורה ציבורית בשבת",
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
      question: "?בעקבות איזה אירוע הוגדר המושג ''פקודה בלתי חוקית בעליל''",
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
      question: "?האם הדמוקרטיה משפיעה על צה''ל וחייליו",
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
      question: "?''האם חוק השבות יכול להכריע בשאלה ''מיהו יהודי",
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
      question: "? כיצד נבחר מבקר המדינה",
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
      question: "?כמה חברי כנסת מכהנים בכנסת ישראל",
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
      question: "?כמה חוקי יסוד קיימים במדינת ישראל",
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
      question: "?למושג יהדות שלוש פנים, מה הם",
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
      question: "?מבין האפשרויות הבאות, מה נחשבת לסוגיה מרכזית בדמוקרטיה הישראלית",
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
      question: "?''מה מהבאים מכונה ''מגילת זכויות האדם",
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
      question: "?מה ניתן למצוא בתוכן חוק שירות וביטחון",
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
      question: "?מה קובע חוק השבות",
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
      question: "?מה תפקיד האופוזיציה",
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
      question: "?מה תפקידו השני של מבקר המדינה",
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
      question: "?מהו אחד מתפקידי נשיא המדינה",
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
