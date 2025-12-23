// =================================================================================
// 🛠️ 雅思單字庫智慧補丁 (Smart Vocab Patch - Part 4: Final Details)
// =================================================================================
// 範圍：T, U, V, W 的具體名詞與動作動詞
// 目的：補足圖片清單中剩餘的「細節字彙」，衝刺 2000+ 字數
// 內容：包含完整 IPA 音標、詞性、中英文定義、雅思例句

(function() {
    console.log("🚀 Initializing High-Quality Content Patch (Part 4)...");

    const FULL_CONTENT_PATCH_P4 = [
        // =========================================================================
        // 🇹 T - Missing Details
        // =========================================================================
        {
            id: "dtl_t01", word: "Tiptoe", ipa: "/ˈtɪp.təʊ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "踮著腳走", def_en: "walk quietly and carefully with one's heels raised", sentence: "He tiptoed past the sleeping baby.", sentence_trans: "他踮著腳走過熟睡的嬰兒身旁。", synonyms: ["creep", "sneak"], phrases: [] }] }]
        },
        {
            id: "dtl_t02", word: "Toll", ipa: "/təʊl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "通行費；代價", def_en: "a charge payable for permission to use a particular bridge or road; the cost or damage resulting from something", sentence: "The war took a heavy toll on the country's economy.", sentence_trans: "戰爭對該國經濟造成了沈重的代價。", synonyms: ["charge", "cost"], phrases: ["take a toll"] }] }]
        },
        {
            id: "dtl_t03", word: "Tornado", ipa: "/tɔːˈneɪ.dəʊ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "龍捲風", def_en: "a mobile, destructive vortex of violently rotating winds", sentence: "The tornado destroyed several houses in the village.", sentence_trans: "龍捲風摧毀了村裡的幾棟房屋。", synonyms: ["twister", "cyclone"], phrases: [] }] }]
        },
        {
            id: "dtl_t04", word: "Tournament", ipa: "/ˈtʊə.nə.mənt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "錦標賽", def_en: "a series of contests between a number of competitors", sentence: "She won the tennis tournament.", sentence_trans: "她贏得了網球錦標賽。", synonyms: ["competition", "contest"], phrases: [] }] }]
        },
        {
            id: "dtl_t05", word: "Trait", ipa: "/treɪt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "特徵；特性", def_en: "a distinguishing quality or characteristic", sentence: "Honesty is a desirable personality trait.", sentence_trans: "誠實是一種令人嚮往的人格特質。", synonyms: ["characteristic", "feature"], phrases: [] }] }]
        },
        {
            id: "dtl_t06", word: "Transaction", ipa: "/trænˈzæk.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "交易", def_en: "an instance of buying or selling something", sentence: "The bank charges a fee for each transaction.", sentence_trans: "銀行對每筆交易收取手續費。", synonyms: ["deal", "business"], phrases: [] }] }]
        },
        {
            id: "dtl_t07", word: "Transcript", ipa: "/ˈtræn.skrɪpt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "成績單；抄本", def_en: "a written or printed version of material originally presented in another medium", sentence: "You need to submit your official university transcript.", sentence_trans: "你需要提交你的大學正式成績單。", synonyms: ["record", "copy"], phrases: [] }] }]
        },
        {
            id: "dtl_t08", word: "Transparent", ipa: "/trænˈspær.ənt/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "透明的", def_en: "allowing light to pass through so that objects behind can be distinctly seen", sentence: "The organization needs to be more transparent about its finances.", sentence_trans: "該組織在財務方面需要更加透明。", synonyms: ["clear", "see-through"], phrases: [] }] }]
        },

        // =========================================================================
        // 🇺 U - Missing Details
        // =========================================================================
        {
            id: "dtl_u01", word: "Undergo", ipa: "/ˌʌn.dəˈɡəʊ/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "經歷；接受", def_en: "experience or be subjected to (something, typically something unpleasant or arduous)", sentence: "The company is undergoing a major restructuring.", sentence_trans: "該公司正在經歷重大重組。", synonyms: ["experience", "endure"], phrases: [] }] }]
        },
        {
            id: "dtl_u02", word: "Undergraduate", ipa: "/ˌʌn.dəˈɡrædʒ.u.ət/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "大學生 (未獲學士學位者)", def_en: "a student at a college or university who has not yet earned a bachelor's or equivalent degree", sentence: "The course is designed for undergraduate students.", sentence_trans: "這門課程是為大學生設計的。", synonyms: ["student"], phrases: [] }] }]
        },
        {
            id: "dtl_u03", word: "Underline", ipa: "/ˌʌn.dəˈlaɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "強調；在...下面畫線", def_en: "draw a line under (a word or phrase) to give it emphasis", sentence: "The report underlines the importance of early education.", sentence_trans: "這份報告強調了早期教育的重要性。", synonyms: ["emphasize", "highlight"], phrases: [] }] }]
        },
        {
            id: "dtl_u04", word: "Undermine", ipa: "/ˌʌn.dəˈmaɪn/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "破壞；削弱", def_en: "erode the base or foundation of; damage or weaken", sentence: "Criticism can undermine a student's confidence.", sentence_trans: "批評會削弱學生的自信心。", synonyms: ["weaken", "sabotage"], phrases: [] }] }]
        },
        {
            id: "dtl_u05", word: "Unfold", ipa: "/ʌnˈfəʊld/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "展開；顯露", def_en: "open or spread out from a folded position", sentence: "As the story unfolds, we learn the truth.", sentence_trans: "隨著故事的展開，我們得知了真相。", synonyms: ["open", "reveal"], phrases: [] }] }]
        },
        {
            id: "dtl_u06", word: "Upgrade", ipa: "/ʌpˈɡreɪd/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "升級；提升", def_en: "raise (something) to a higher standard", sentence: "We need to upgrade our computer system.", sentence_trans: "我們需要升級我們的電腦系統。", synonyms: ["improve", "enhance"], phrases: [] }] }]
        },
        {
            id: "dtl_u07", word: "Uphold", ipa: "/ʌpˈhəʊld/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "維護；支持", def_en: "confirm or support (something which has been questioned)", sentence: "The court upheld the decision.", sentence_trans: "法院維持了原判。", synonyms: ["maintain", "support"], phrases: [] }] }]
        },

        // =========================================================================
        // 🇻 V - Missing Details
        // =========================================================================
        {
            id: "dtl_v01", word: "Vacuum", ipa: "/ˈvæk.juːm/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "真空；吸塵器", def_en: "a space entirely devoid of matter", sentence: "Sound cannot travel in a vacuum.", sentence_trans: "聲音無法在真空中傳播。", synonyms: ["void", "emptiness"], phrases: [] }] }]
        },
        {
            id: "dtl_v02", word: "Vague", ipa: "/veɪɡ/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "模糊的", def_en: "of uncertain, indefinite, or unclear character or meaning", sentence: "He gave a vague answer.", sentence_trans: "他給了一個模糊的答案。", synonyms: ["unclear", "hazy"], phrases: [] }] }]
        },
        {
            id: "dtl_v03", word: "Vanity", ipa: "/ˈvæn.ə.ti/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "虛榮心", def_en: "excessive pride in or admiration of one's own appearance or achievements", sentence: "He did it out of sheer vanity.", sentence_trans: "他這樣做純粹是出於虛榮心。", synonyms: ["pride", "arrogance"], phrases: [] }] }]
        },
        {
            id: "dtl_v04", word: "Vapor", ipa: "/ˈveɪ.pər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "蒸氣", def_en: "a substance diffused or suspended in the air", sentence: "Water vapor turns into clouds.", sentence_trans: "水蒸氣變成了雲。", synonyms: ["mist", "steam"], phrases: [] }] }]
        },
        {
            id: "dtl_v05", word: "Vegetation", ipa: "/ˌvedʒ.ɪˈteɪ.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "植被", def_en: "plants considered collectively", sentence: "The island is covered in dense vegetation.", sentence_trans: "島上覆蓋著茂密的植被。", synonyms: ["plants", "flora"], phrases: [] }] }]
        },
        {
            id: "dtl_v06", word: "Veil", ipa: "/veɪl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "面紗；遮蔽物", def_en: "a piece of fine material worn by women to protect or conceal the face", sentence: "The bride wore a white veil.", sentence_trans: "新娘戴著白色的面紗。", synonyms: ["mask", "cover"], phrases: [] }] }]
        },
        {
            id: "dtl_v07", word: "Venue", ipa: "/ˈven.juː/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "場地；會場", def_en: "the place where something happens, especially an organized event", sentence: "The stadium is the perfect venue for the concert.", sentence_trans: "體育場是舉辦音樂會的完美場地。", synonyms: ["location", "place"], phrases: [] }] }]
        },

        // =========================================================================
        // 🇼 W - Missing Details
        // =========================================================================
        {
            id: "dtl_w01", word: "Wag", ipa: "/wæɡ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "搖擺 (尾巴)", def_en: "(especially with reference to an animal's tail) move or cause to move rapidly to and fro", sentence: "The dog wagged its tail happily.", sentence_trans: "狗高興地搖著尾巴。", synonyms: ["shake", "swing"], phrases: [] }] }]
        },
        {
            id: "dtl_w02", word: "Wardrobe", ipa: "/ˈwɔː.drəʊb/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "衣櫥；全部衣物", def_en: "a large, tall cabinet in which clothes may be hung or stored", sentence: "She has a whole new wardrobe for summer.", sentence_trans: "她為夏天準備了一整套新衣服。", synonyms: ["closet", "apparel"], phrases: [] }] }]
        },
        {
            id: "dtl_w03", word: "Warehouse", ipa: "/ˈweə.haʊs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "倉庫", def_en: "a large building where raw materials or manufactured goods may be stored", sentence: "The goods are stored in a warehouse.", sentence_trans: "貨物存放在倉庫裡。", synonyms: ["storehouse", "depot"], phrases: [] }] }]
        },
        {
            id: "dtl_w04", word: "Warfare", ipa: "/ˈwɔː.feər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "戰爭；衝突", def_en: "engagement in or the activities involved in war or conflict", sentence: "Modern warfare relies heavily on technology.", sentence_trans: "現代戰爭嚴重依賴科技。", synonyms: ["combat", "fighting"], phrases: [] }] }]
        },
        {
            id: "dtl_w05", word: "Warrant", ipa: "/ˈwɒr.ənt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "授權令；搜查令", def_en: "a document issued by a legal or government official authorizing the police to make an arrest or search premises", sentence: "The police had a warrant to search the house.", sentence_trans: "警察有搜查這所房子的搜查令。", synonyms: ["authorization", "permit"], phrases: [] }] }]
        },
        {
            id: "dtl_w06", word: "Warrior", ipa: "/ˈwɒr.i.ər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "戰士", def_en: "(especially in former times) a brave or experienced soldier or fighter", sentence: "He was a brave warrior.", sentence_trans: "他是一位勇敢的戰士。", synonyms: ["fighter", "soldier"], phrases: [] }] }]
        },
        {
            id: "dtl_w07", word: "Waterproof", ipa: "/ˈwɔː.tə.pruːf/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "防水的", def_en: "impervious to water", sentence: "You should wear a waterproof jacket.", sentence_trans: "你應該穿一件防水夾克。", synonyms: ["water-resistant"], phrases: [] }] }]
        },
        {
            id: "dtl_w08", word: "Wharf", ipa: "/wɔːf/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "碼頭", def_en: "a level quayside area to which a ship may be moored to load and unload", sentence: "The ship docked at the wharf.", sentence_trans: "船停靠在碼頭。", synonyms: ["pier", "dock"], phrases: [] }] }]
        },
        {
            id: "dtl_w09", word: "Wholesale", ipa: "/ˈhəʊl.seɪl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "批發", def_en: "the selling of goods in large quantities to be retailed by others", sentence: "We buy our supplies at wholesale prices.", sentence_trans: "我們以批發價購買物資。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "dtl_w10", word: "Widespread", ipa: "/ˈwaɪd.spred/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "廣泛的；普遍的", def_en: "found or distributed over a large area or number of people", sentence: "There is widespread support for the new law.", sentence_trans: "這項新法律得到了廣泛的支持。", synonyms: ["common", "extensive"], phrases: [] }] }]
        },
        {
            id: "dtl_w11", word: "Widow", ipa: "/ˈwɪd.əʊ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "寡婦", def_en: "a woman who has lost her spouse by death and has not remarried", sentence: "She became a widow at a young age.", sentence_trans: "她年紀輕輕就成了寡婦。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "dtl_w12", word: "Wilderness", ipa: "/ˈwɪl.də.nəs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "荒野", def_en: "an uncultivated, uninhabited, and inhospitable region", sentence: "They got lost in the wilderness.", sentence_trans: "他們在荒野中迷路了。", synonyms: ["wilds", "wasteland"], phrases: [] }] }]
        },
        {
            id: "dtl_w13", word: "Wildlife", ipa: "/ˈwaɪld.laɪf/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "野生生物", def_en: "wild animals collectively; the native fauna (and sometimes flora) of a region", sentence: "The area is known for its diverse wildlife.", sentence_trans: "該地區以其多樣的野生生物而聞名。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "dtl_w14", word: "Windshield", ipa: "/ˈwɪnd.ʃiːld/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "擋風玻璃", def_en: "a glass screen at the front of a motor vehicle", sentence: "A stone cracked the windshield.", sentence_trans: "一顆石頭打破了擋風玻璃。", synonyms: ["windscreen"], phrases: [] }] }]
        },
        {
            id: "dtl_w15", word: "Wither", ipa: "/ˈwɪð.ər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "枯萎", def_en: "become dry and shriveled", sentence: "The flowers withered in the heat.", sentence_trans: "花朵在炎熱中枯萎了。", synonyms: ["shrivel", "fade"], phrases: [] }] }]
        },
        {
            id: "dtl_w16", word: "Withhold", ipa: "/wɪðˈhəʊld/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "保留；拒絕給予", def_en: "refuse to give (something that is due to or is desired by another)", sentence: "He withheld important information.", sentence_trans: "他隱瞞了重要資訊。", synonyms: ["keep back", "conceal"], phrases: [] }] }]
        },
        {
            id: "dtl_w17", word: "Witty", ipa: "/ˈwɪt.i/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "機智的；詼諧的", def_en: "showing or characterized by quick and inventive verbal humor", sentence: "He made a witty remark.", sentence_trans: "他發表了機智的評論。", synonyms: ["clever", "amusing"], phrases: [] }] }]
        },
        {
            id: "dtl_w18", word: "Workforce", ipa: "/ˈwɜːk.fɔːs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "勞動力；員工", def_en: "the people engaged in or available for work", sentence: "The company has a skilled workforce.", sentence_trans: "該公司擁有一支熟練的員工隊伍。", synonyms: ["staff", "personnel"], phrases: [] }] }]
        },
        {
            id: "dtl_w19", word: "Workshop", ipa: "/ˈwɜːk.ʃɒp/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "研討會；工作坊", def_en: "a meeting at which a group of people engage in intensive discussion and activity on a particular subject", sentence: "I attended a photography workshop.", sentence_trans: "我參加了一個攝影工作坊。", synonyms: ["seminar", "class"], phrases: [] }] }]
        },
        {
            id: "dtl_w20", word: "Worship", ipa: "/ˈwɜː.ʃɪp/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "崇拜；敬奉", def_en: "show reverence and adoration for (a deity)", sentence: "They worship their ancestors.", sentence_trans: "他們崇拜他們的祖先。", synonyms: ["revere", "venerate"], phrases: [] }] }]
        },
        {
            id: "dtl_w21", word: "Worthwhile", ipa: "/ˌwɜːθˈwaɪl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "值得的", def_en: "worth the time, money, or effort spent", sentence: "It was a worthwhile experience.", sentence_trans: "這是一次值得的經歷。", synonyms: ["valuable", "beneficial"], phrases: [] }] }]
        },
        {
            id: "dtl_w22", word: "Wrinkle", ipa: "/ˈrɪŋ.kəl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "皺紋", def_en: "a slight line or fold in something, especially fabric or the skin of the face", sentence: "She has wrinkles around her eyes.", sentence_trans: "她眼睛周圍有皺紋。", synonyms: ["crease", "line"], phrases: [] }] }]
        }
    ];

    // =========================================================================
    // 3. 智慧整合邏輯
    // =========================================================================
    
    window.VOCAB_LIBRARY = window.VOCAB_LIBRARY || [];
    
    // 建立快速查重表
    const existingWords = new Set(
        window.VOCAB_LIBRARY.map(item => item.word.toLowerCase().trim())
    );

    let addedCount = 0;

    const addWord = (entry) => {
        const lowerWord = entry.word.toLowerCase();
        if (!existingWords.has(lowerWord)) {
            entry.source = "expert_patch_part4"; 
            window.VOCAB_LIBRARY.push(entry);
            existingWords.add(lowerWord);
            addedCount++;
        }
    };

    // 執行補丁
    FULL_CONTENT_PATCH_P4.forEach(entry => addWord(entry));

    console.log(`[Smart Content Patch] Part 4 Execution Complete.`);
    console.log(`  - 📚 Successfully Integrated: ${addedCount} detailed words (T-W).`);
    console.log(`  - 🔢 Final Library Size: ${window.VOCAB_LIBRARY.length}`);

})();