// =================================================================================
// 🛠️ 雅思單字庫智慧補丁 (Smart Vocab Patch - High Quality Content Part 3)
// =================================================================================
// 範圍：雅思核心補漏字 (Final Supplement) - 補足剩餘的特殊字與圖片遺漏字
// 內容：包含完整 IPA 音標、詞性、中英文定義、雅思例句
// 機制：自動檢查並補入 window.VOCAB_LIBRARY

(function() {
    console.log("🚀 Initializing High-Quality Content Patch (Final Part)...");

    const FULL_CONTENT_PATCH_P3 = [
        // =========================================================================
        // 🔍 Missing Advanced Words (From Images & Expert List)
        // =========================================================================
        {
            id: "exp_w01", word: "Wage", ipa: "/weɪdʒ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "工資", def_en: "a fixed regular payment earned for work or services", sentence: "The workers are demanding a higher minimum wage.", sentence_trans: "工人們要求更高的最低工資。", synonyms: ["salary", "pay"], phrases: ["minimum wage"] }] }]
        },
        {
            id: "exp_w02", word: "Waste", ipa: "/weɪst/", priority: 10,
            meanings: [
                { pos: "v.", items: [{ def_zh: "浪費", def_en: "use or expend carelessly, extravagantly, or to no purpose", sentence: "Don't waste your time on trivial matters.", sentence_trans: "不要在瑣事上浪費時間。", synonyms: ["squander"], phrases: ["waste time"] }] },
                { pos: "n.", items: [{ def_zh: "廢棄物；浪費", def_en: "material that is not wanted; the act of using something carelessly", sentence: "Industrial waste pollutes our rivers.", sentence_trans: "工業廢棄物污染了我們的河流。", synonyms: ["trash", "rubbish"], phrases: ["toxic waste"] }] }
            ]
        },
        {
            id: "exp_w03", word: "Wealth", ipa: "/welθ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "財富", def_en: "an abundance of valuable possessions or money", sentence: "The country's wealth is distributed unevenly.", sentence_trans: "該國的財富分配不均。", synonyms: ["fortune", "riches"], phrases: ["wealth tax"] }] }]
        },
        {
            id: "exp_w04", word: "Wear", ipa: "/weər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "穿著；磨損", def_en: "have on one's body as clothing, decoration, or protection; damage by friction", sentence: "She was wearing a red dress.", sentence_trans: "她穿著一件紅色的洋裝。", synonyms: ["dress in", "put on"], phrases: ["wear out"] }] }]
        },
        {
            id: "exp_w05", word: "Weather", ipa: "/ˈweθ.ər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "天氣", def_en: "the state of the atmosphere at a place and time", sentence: "The weather is unpredictable in spring.", sentence_trans: "春天的天氣變幻莫測。", synonyms: ["climate"], phrases: ["weather forecast"] }] }]
        },
        {
            id: "exp_w06", word: "Weight", ipa: "/weɪt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "重量；體重", def_en: "a body's relative mass or the quantity of matter contained by it", sentence: "He is trying to lose weight.", sentence_trans: "他正在試圖減肥。", synonyms: ["heaviness"], phrases: ["lose weight", "gain weight"] }] }]
        },
        {
            id: "exp_w07", word: "Welfare", ipa: "/ˈwel.feər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "福利；福祉", def_en: "the health, happiness, and fortunes of a person or group", sentence: "The government is responsible for the social welfare of its citizens.", sentence_trans: "政府對其公民的社會福利負責。", synonyms: ["well-being"], phrases: ["social welfare"] }] }]
        },
        {
            id: "exp_w08", word: "West", ipa: "/west/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "西方", def_en: "the direction toward the point of the horizon where the sun sets", sentence: "The sun sets in the west.", sentence_trans: "太陽在西方落下。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_w09", word: "Western", ipa: "/ˈwes.tən/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "西方的", def_en: "situated in the west, or directed toward or facing the west", sentence: "Western culture has influenced many parts of the world.", sentence_trans: "西方文化影響了世界許多地方。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_w10", word: "Wide", ipa: "/waɪd/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "寬的；廣泛的", def_en: "of great or more than average width", sentence: "The river is very wide here.", sentence_trans: "這條河在這裡非常寬。", synonyms: ["broad", "extensive"], phrases: ["wide range"] }] }]
        },
        {
            id: "exp_w11", word: "Wife", ipa: "/waɪf/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "妻子", def_en: "a married woman considered in relation to her spouse", sentence: "He lives with his wife and two children.", sentence_trans: "他與妻子和兩個孩子住在一起。", synonyms: ["spouse"], phrases: [] }] }]
        },
        {
            id: "exp_w12", word: "Will", ipa: "/wɪl/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "意志；遺囑", def_en: "the faculty by which a person decides on and initiates action; a legal document containing instructions as to what should be done with one's money and property after one's death", sentence: "She has a strong will.", sentence_trans: "她有堅強的意志。", synonyms: ["determination"], phrases: ["free will"] }] },
                { pos: "v.", items: [{ def_zh: "將要；願意", def_en: "expressing the future tense; intending to", sentence: "I will call you later.", sentence_trans: "我稍後會打電話給你。", synonyms: [], phrases: [] }] }
            ]
        },
        {
            id: "exp_w13", word: "Win", ipa: "/wɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "贏；獲勝", def_en: "be successful or victorious in (a contest or conflict)", sentence: "Our team won the championship.", sentence_trans: "我們隊贏得了冠軍。", synonyms: ["succeed", "triumph"], phrases: [] }] }]
        },
        {
            id: "exp_w14", word: "Wind", ipa: "/wɪnd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "風", def_en: "the perceptible natural movement of the air", sentence: "The wind is blowing hard today.", sentence_trans: "今天風刮得很大。", synonyms: ["breeze", "gale"], phrases: [] }] }]
        },
        {
            id: "exp_w15", word: "Window", ipa: "/ˈwɪn.dəʊ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "窗戶", def_en: "an opening in the wall or roof of a building or vehicle", sentence: "Please open the window to let in some fresh air.", sentence_trans: "請打開窗戶讓新鮮空氣進來。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_w16", word: "Wish", ipa: "/wɪʃ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "希望；願望", def_en: "feel or express a strong desire or hope for something that is not easily attainable", sentence: "I wish I could fly.", sentence_trans: "我希望我能飛。", synonyms: ["desire", "hope"], phrases: ["make a wish"] }] }]
        },
        {
            id: "exp_w17", word: "With", ipa: "/wɪð/", priority: 10,
            meanings: [{ pos: "prep.", items: [{ def_zh: "和...一起；隨著", def_en: "accompanied by; possessing", sentence: "I went to the cinema with my friends.", sentence_trans: "我和朋友一起去看了電影。", synonyms: ["alongside"], phrases: [] }] }]
        },
        {
            id: "exp_w18", word: "Within", ipa: "/wɪˈðɪn/", priority: 10,
            meanings: [{ pos: "prep.", items: [{ def_zh: "在...之內", def_en: "inside", sentence: "Please complete the task within two days.", sentence_trans: "請在兩天內完成任務。", synonyms: ["inside"], phrases: [] }] }]
        },
        {
            id: "exp_w19", word: "Without", ipa: "/wɪˈðaʊt/", priority: 10,
            meanings: [{ pos: "prep.", items: [{ def_zh: "沒有", def_en: "in the absence of", sentence: "I cannot live without music.", sentence_trans: "沒有音樂我活不下去。", synonyms: ["lacking"], phrases: [] }] }]
        },
        {
            id: "exp_w20", word: "Woman", ipa: "/ˈwʊm.ən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "女人", def_en: "an adult human female", sentence: "She is a successful business woman.", sentence_trans: "她是一位成功的商界女性。", synonyms: ["female", "lady"], phrases: [] }] }]
        },
        {
            id: "exp_w21", word: "Wonder", ipa: "/ˈwʌn.dər/", priority: 10,
            meanings: [
                { pos: "v.", items: [{ def_zh: "想知道；感到驚奇", def_en: "desire or be curious to know something", sentence: "I wonder what happened to him.", sentence_trans: "我想知道他發生了什麼事。", synonyms: ["ponder", "question"], phrases: ["no wonder"] }] },
                { pos: "n.", items: [{ def_zh: "奇蹟", def_en: "a feeling of surprise mingled with admiration, caused by something beautiful, unexpected, unfamiliar, or inexplicable", sentence: "The Grand Canyon is a natural wonder.", sentence_trans: "大峽谷是一個自然奇蹟。", synonyms: ["marvel", "miracle"], phrases: [] }] }
            ]
        },
        {
            id: "exp_w22", word: "Word", ipa: "/wɜːd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "單字；話語", def_en: "a single distinct meaningful element of speech or writing", sentence: "Actions speak louder than words.", sentence_trans: "坐而言不如起而行 (行動勝於空談)。", synonyms: ["term", "expression"], phrases: ["in other words"] }] }]
        },
        {
            id: "exp_w23", word: "Work", ipa: "/wɜːk/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "工作", def_en: "activity involving mental or physical effort done in order to achieve a purpose or result", sentence: "I have a lot of work to do.", sentence_trans: "我有很多工作要做。", synonyms: ["labor", "job"], phrases: ["at work"] }] },
                { pos: "v.", items: [{ def_zh: "工作；運作", def_en: "be engaged in physical or mental activity in order to achieve a result", sentence: "He works for a large company.", sentence_trans: "他在一家大公司工作。", synonyms: ["labor", "function"], phrases: ["work out"] }] }
            ]
        },
        {
            id: "exp_w24", word: "Worker", ipa: "/ˈwɜː.kər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "工人", def_en: "a person who does a specified type of work or who works in a specified way", sentence: "Factory workers demand better conditions.", sentence_trans: "工廠工人要求更好的條件。", synonyms: ["employee", "laborer"], phrases: [] }] }]
        },
        {
            id: "exp_w25", word: "World", ipa: "/wɜːld/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "世界", def_en: "the earth, together with all of its countries, peoples, and natural features", sentence: "The internet connects people from all over the world.", sentence_trans: "網際網路將世界各地的人們連接起來。", synonyms: ["earth", "globe"], phrases: ["all over the world"] }] }]
        },
        {
            id: "exp_w26", word: "Worry", ipa: "/ˈwʌr.i/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "擔心", def_en: "give way to anxiety or unease; allow one's mind to dwell on difficulty or troubles", sentence: "Don't worry about the future.", sentence_trans: "不要擔心未來。", synonyms: ["fret", "be anxious"], phrases: ["worry about"] }] }]
        },
        {
            id: "exp_w27", word: "Write", ipa: "/raɪt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "寫", def_en: "mark (letters, words, or other symbols) on a surface, typically paper, with a pen, pencil, or similar implement", sentence: "She writes a diary every day.", sentence_trans: "她每天寫日記。", synonyms: ["record", "compose"], phrases: ["write down"] }] }]
        },
        {
            id: "exp_w28", word: "Writer", ipa: "/ˈraɪ.tər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "作家", def_en: "a person who has written a particular text; a person who writes books or articles as a job or occupation", sentence: "He is a famous writer.", sentence_trans: "他是一位著名的作家。", synonyms: ["author", "novelist"], phrases: [] }] }]
        },
        {
            id: "exp_w29", word: "Wrong", ipa: "/rɒŋ/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "錯誤的", def_en: "not correct or true", sentence: "You have the wrong number.", sentence_trans: "你打錯電話了。", synonyms: ["incorrect", "mistaken"], phrases: ["go wrong"] }] }]
        },

        // --- X, Y, Z (Special & Advanced) ---
        {
            id: "exp_x01", word: "Xerox", ipa: "/ˈzɪə.rɒks/", priority: 8,
            meanings: [{ pos: "v.", items: [{ def_zh: "影印", def_en: "copy (a document) using a xerographic process", sentence: "Please Xerox this document for me.", sentence_trans: "請幫我影印這份文件。", synonyms: ["photocopy", "duplicate"], phrases: [] }] }]
        },
        {
            id: "exp_y01", word: "Yacht", ipa: "/jɒt/", priority: 8,
            meanings: [{ pos: "n.", items: [{ def_zh: "遊艇", def_en: "a medium-sized sailing boat equipped for cruising or racing", sentence: "They spent the summer sailing on their yacht.", sentence_trans: "他們整個夏天都在遊艇上航行。", synonyms: ["boat", "vessel"], phrases: [] }] }]
        },
        {
            id: "exp_y02", word: "Yard", ipa: "/jɑːd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "院子；碼(單位)", def_en: "a unit of linear measure equal to 3 feet (0.9144 meter); a piece of ground adjoining a building", sentence: "The children are playing in the yard.", sentence_trans: "孩子們在院子裡玩耍。", synonyms: ["garden", "court"], phrases: ["backyard"] }] }]
        },
        {
            id: "exp_y03", word: "Year", ipa: "/jɪər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "年", def_en: "the time taken by the earth to make one revolution around the sun", sentence: "Happy New Year!", sentence_trans: "新年快樂！", synonyms: [], phrases: ["last year", "next year"] }] }]
        },
        {
            id: "exp_y04", word: "Yellow", ipa: "/ˈjel.əʊ/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "黃色的", def_en: "of the color between green and orange in the spectrum", sentence: "The sunflower is yellow.", sentence_trans: "向日葵是黃色的。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_y05", word: "Yes", ipa: "/jes/", priority: 10,
            meanings: [{ pos: "adv.", items: [{ def_zh: "是", def_en: "used to give an affirmative response", sentence: "Yes, I agree.", sentence_trans: "是的，我同意。", synonyms: ["affirmative"], phrases: [] }] }]
        },
        {
            id: "exp_y06", word: "Yesterday", ipa: "/ˈjes.tə.deɪ/", priority: 10,
            meanings: [{ pos: "adv.", items: [{ def_zh: "昨天", def_en: "on the day before today", sentence: "I saw him yesterday.", sentence_trans: "我昨天見過他。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_y07", word: "Yet", ipa: "/jet/", priority: 10,
            meanings: [{ pos: "adv.", items: [{ def_zh: "還；尚未", def_en: "up until the present or a specified or implied time; by now or then", sentence: "Have you finished yet?", sentence_trans: "你完成了嗎？", synonyms: ["so far"], phrases: ["not yet"] }] }]
        },
        {
            id: "exp_y08", word: "Young", ipa: "/jʌŋ/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "年輕的", def_en: "having lived or existed for only a short time", sentence: "He is a young and ambitious man.", sentence_trans: "他是一個年輕有抱負的人。", synonyms: ["youthful", "juvenile"], phrases: [] }] }]
        },
        {
            id: "exp_z01", word: "Zero", ipa: "/ˈzɪə.rəʊ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "零", def_en: "no quantity or number; naught; the figure 0", sentence: "The temperature dropped to zero.", sentence_trans: "氣溫降到了零度。", synonyms: ["naught", "nil"], phrases: [] }] }]
        },
        {
            id: "exp_z02", word: "Zone", ipa: "/zəʊn/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "區域；地帶", def_en: "an area or stretch of land having a particular characteristic, purpose, or use", sentence: "This is a no-parking zone.", sentence_trans: "這是禁止停車區。", synonyms: ["area", "sector"], phrases: ["time zone", "comfort zone"] }] }]
        },
        {
            id: "exp_z03", word: "Zoo", ipa: "/zuː/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "動物園", def_en: "an establishment which maintains a collection of wild animals", sentence: "We took the kids to the zoo.", sentence_trans: "我們帶孩子去了動物園。", synonyms: [], phrases: [] }] }]
        }
    ];

    // =========================================================================
    // 3. 智慧整合邏輯 (Smart Integration Logic)
    // =========================================================================
    
    window.VOCAB_LIBRARY = window.VOCAB_LIBRARY || [];
    
    // 建立快速查重表 (Set of lowercased words)
    // 這樣可以確保不會重複加入已經存在的單字
    const existingWords = new Set(
        window.VOCAB_LIBRARY.map(item => item.word.toLowerCase().trim())
    );

    let addedCount = 0;

    // 核心新增函式
    const addWord = (entry) => {
        const lowerWord = entry.word.toLowerCase();
        
        // 只有當單字「不存在」於現有資料庫時，才加入
        if (!existingWords.has(lowerWord)) {
            // 保留原本的高品質定義，但標記來源
            entry.source = "expert_patch_part3"; 
            
            window.VOCAB_LIBRARY.push(entry);
            existingWords.add(lowerWord);
            addedCount++;
        }
    };

    // 執行補丁
    FULL_CONTENT_PATCH_P3.forEach(entry => addWord(entry));

    console.log(`[Smart Content Patch] Part 3 Execution Complete.`);
    console.log(`  - 📚 Successfully Integrated: ${addedCount} high-quality words (Special/Final).`);
    console.log(`  - 🔢 Total Library Size: ${window.VOCAB_LIBRARY.length}`);

})();