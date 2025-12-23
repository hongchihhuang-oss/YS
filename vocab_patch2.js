// =================================================================================
// 🛠️ 雅思單字庫智慧補丁 (Smart Vocab Patch - High Quality Content Part 2)
// =================================================================================
// 範圍：雅思核心補漏字 (F-Z) - 補足 F 到 Z 之間缺失的基礎與高頻詞彙
// 內容：包含完整 IPA 音標、詞性、中英文定義、雅思例句
// 機制：自動檢查並補入 window.VOCAB_LIBRARY

(function() {
    console.log("🚀 Initializing High-Quality Content Patch (F-Z)...");

    const FULL_CONTENT_PATCH_P2 = [
        // =========================================================================
        // 🇫 F - Missing Core Words
        // =========================================================================
        {
            id: "exp_f01", word: "Face", ipa: "/feɪs/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "面對；面臨", def_en: "confront and deal with or accept", sentence: "We must face the reality of climate change.", sentence_trans: "我們必須面對氣候變遷的現實。", synonyms: ["confront", "encounter"], phrases: ["face a challenge"] }] }]
        },
        {
            id: "exp_f02", word: "Factor", ipa: "/ˈfæk.tər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "因素；要素", def_en: "a circumstance, fact, or influence that contributes to a result or outcome", sentence: "Cost is a major factor in the decision-making process.", sentence_trans: "成本是決策過程中的一個主要因素。", synonyms: ["element", "component"], phrases: ["key factor"] }] }]
        },
        {
            id: "exp_f03", word: "Fail", ipa: "/feɪl/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "失敗；未能", def_en: "be unsuccessful in achieving one's goal", sentence: "The plan failed due to lack of funding.", sentence_trans: "該計畫因缺乏資金而失敗。", synonyms: ["flop", "collapse"], phrases: ["fail to do"] }] }]
        },
        {
            id: "exp_f04", word: "Feature", ipa: "/ˈfiː.tʃər/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "特徵；特色", def_en: "a distinctive attribute or aspect of something", sentence: "The camera's best feature is its high resolution.", sentence_trans: "這台相機最好的特點是它的高解析度。", synonyms: ["characteristic", "trait"], phrases: [] }] },
                { pos: "v.", items: [{ def_zh: "以...為特色", def_en: "have as a prominent attribute or aspect", sentence: "The exhibition features works by local artists.", sentence_trans: "展覽以當地藝術家的作品為特色。", synonyms: ["highlight", "spotlight"], phrases: [] }] }
            ]
        },
        {
            id: "exp_f05", word: "Financial", ipa: "/faɪˈnæn.ʃəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "財務的；金融的", def_en: "relating to finance", sentence: "The company is facing financial difficulties.", sentence_trans: "該公司正面臨財務困難。", synonyms: ["monetary", "fiscal"], phrases: ["financial crisis"] }] }]
        },
        {
            id: "exp_f06", word: "Focus", ipa: "/ˈfəʊ.kəs/", priority: 10,
            meanings: [
                { pos: "v.", items: [{ def_zh: "專注；聚焦", def_en: "pay particular attention to", sentence: "We need to focus on the main problem.", sentence_trans: "我們需要專注於主要問題。", synonyms: ["concentrate"], phrases: ["focus on"] }] },
                { pos: "n.", items: [{ def_zh: "焦點；中心", def_en: "the center of interest or activity", sentence: "The focus of the meeting was on sustainability.", sentence_trans: "會議的焦點是永續性。", synonyms: ["center", "core"], phrases: [] }] }
            ]
        },
        {
            id: "exp_f07", word: "Force", ipa: "/fɔːs/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "力量；武力", def_en: "strength or energy as an attribute of physical action or movement", sentence: "The force of the wind knocked down the tree.", sentence_trans: "風力吹倒了樹。", synonyms: ["power", "strength"], phrases: ["use force"] }] },
                { pos: "v.", items: [{ def_zh: "強迫", def_en: "make a way through or into by physical strength; break open by force", sentence: "He was forced to resign.", sentence_trans: "他被迫辭職。", synonyms: ["compel", "coerce"], phrases: [] }] }
            ]
        },
        {
            id: "exp_f08", word: "Foreign", ipa: "/ˈfɒr.ən/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "外國的", def_en: "of, from, in, or characteristic of a country or language other than one's own", sentence: "Learning a foreign language opens many doors.", sentence_trans: "學習外語可以開啟許多大門。", synonyms: ["overseas", "international"], phrases: ["foreign affairs"] }] }]
        },
        {
            id: "exp_f09", word: "Form", ipa: "/fɔːm/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "形式；表格", def_en: "the visible shape or configuration of something", sentence: "Please fill out this application form.", sentence_trans: "請填寫這份申請表。", synonyms: ["shape", "structure"], phrases: ["in the form of"] }] },
                { pos: "v.", items: [{ def_zh: "形成；構成", def_en: "bring together parts or combine to create (something)", sentence: "Clouds form when water vapor condenses.", sentence_trans: "當水蒸氣凝結時會形成雲。", synonyms: ["create", "make"], phrases: [] }] }
            ]
        },
        {
            id: "exp_f10", word: "Function", ipa: "/ˈfʌŋk.ʃən/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "功能；職責", def_en: "an activity or purpose natural to or intended for a person or thing", sentence: "The main function of the heart is to pump blood.", sentence_trans: "心臟的主要功能是泵血。", synonyms: ["purpose", "role"], phrases: [] }] },
                { pos: "v.", items: [{ def_zh: "運作；起作用", def_en: "work or operate in a proper or particular way", sentence: "The machine functions properly.", sentence_trans: "機器運作正常。", synonyms: ["operate", "work"], phrases: [] }] }
            ]
        },
        {
            id: "exp_f11", word: "Fund", ipa: "/fʌnd/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "資金；基金", def_en: "a sum of money saved or made available for a particular purpose", sentence: "The project ran out of funds.", sentence_trans: "該專案資金耗盡。", synonyms: ["capital", "money"], phrases: ["raise funds"] }] },
                { pos: "v.", items: [{ def_zh: "資助", def_en: "provide with money for a particular purpose", sentence: "The research was funded by the government.", sentence_trans: "這項研究由政府資助。", synonyms: ["finance", "subsidize"], phrases: [] }] }
            ]
        },
        {
            id: "exp_f12", word: "Future", ipa: "/ˈfjuː.tʃər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "未來", def_en: "the time or a period of time following the moment of speaking or writing", sentence: "We must plan for the future.", sentence_trans: "我們必須為未來做計畫。", synonyms: ["time to come"], phrases: ["in the future"] }] }]
        },

        // =========================================================================
        // 🇬 G - Missing Core Words
        // =========================================================================
        {
            id: "exp_g01", word: "Gain", ipa: "/ɡeɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "獲得；增加", def_en: "obtain or secure (something desired, favorable, or profitable)", sentence: "She gained valuable experience from the internship.", sentence_trans: "她從實習中獲得了寶貴的經驗。", synonyms: ["obtain", "acquire"], phrases: ["gain weight"] }] }]
        },
        {
            id: "exp_g02", word: "General", ipa: "/ˈdʒen.ər.əl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "一般的；整體的", def_en: "affecting or concerning all or most people, places, or things; widespread", sentence: "There is a general consensus on the issue.", sentence_trans: "在這個問題上存在普遍共識。", synonyms: ["common", "broad"], phrases: ["in general"] }] }]
        },
        {
            id: "exp_g03", word: "Generate", ipa: "/ˈdʒen.ə.reɪt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "產生；發電", def_en: "cause (something, especially an emotion or situation) to arise", sentence: "The new factory will generate jobs for the community.", sentence_trans: "新工廠將為社區創造就業機會。", synonyms: ["create", "produce"], phrases: [] }] }]
        },
        {
            id: "exp_g04", word: "Goal", ipa: "/ɡəʊl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "目標；目的", def_en: "the object of a person's ambition or effort", sentence: "My main goal is to improve my English skills.", sentence_trans: "我的主要目標是提高我的英語技能。", synonyms: ["aim", "target", "objective"], phrases: ["achieve a goal"] }] }]
        },
        {
            id: "exp_g05", word: "Global", ipa: "/ˈɡləʊ.bəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "全球的", def_en: "relating to the whole world; worldwide", sentence: "Climate change is a global problem.", sentence_trans: "氣候變遷是一個全球性問題。", synonyms: ["worldwide", "international"], phrases: ["global warming"] }] }]
        },
        {
            id: "exp_g06", word: "Government", ipa: "/ˈɡʌv.ən.mənt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "政府", def_en: "the governing body of a nation, state, or community", sentence: "The government announced new tax policies.", sentence_trans: "政府宣布了新的稅收政策。", synonyms: ["administration", "authority"], phrases: [] }] }]
        },
        {
            id: "exp_g07", word: "Group", ipa: "/ɡruːp/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "群體；組", def_en: "a number of people or things that are located together or classed together", sentence: "A group of students visited the museum.", sentence_trans: "一群學生參觀了博物館。", synonyms: ["collection", "cluster"], phrases: [] }] }]
        },
        {
            id: "exp_g08", word: "Grow", ipa: "/ɡrəʊ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "成長；種植", def_en: "(of a living thing) undergo natural development by increasing in size and changing physically", sentence: "Children grow quickly.", sentence_trans: "孩子們長得很快。", synonyms: ["develop", "increase"], phrases: ["grow up"] }] }]
        },
        {
            id: "exp_g09", word: "Growth", ipa: "/ɡrəʊθ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "成長；增長", def_en: "the process of increasing in physical size", sentence: "Economic growth has slowed down.", sentence_trans: "經濟增長已經放緩。", synonyms: ["development", "expansion"], phrases: [] }] }]
        },

        // =========================================================================
        // 🇭 H to 🇮 I - Missing Core Words
        // =========================================================================
        {
            id: "exp_h01", word: "Happen", ipa: "/ˈhæp.ən/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "發生", def_en: "take place; occur", sentence: "What happened to your car?", sentence_trans: "你的車怎麼了？", synonyms: ["occur", "take place"], phrases: [] }] }]
        },
        {
            id: "exp_h02", word: "Health", ipa: "/helθ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "健康", def_en: "the state of being free from illness or injury", sentence: "Regular exercise is good for your health.", sentence_trans: "規律運動對你的健康有益。", synonyms: ["well-being", "fitness"], phrases: ["health care"] }] }]
        },
        {
            id: "exp_h03", word: "High", ipa: "/haɪ/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "高的", def_en: "of great vertical extent", sentence: "The building is very high.", sentence_trans: "這棟建築非常高。", synonyms: ["tall", "lofty"], phrases: [] }] }]
        },
        {
            id: "exp_h04", word: "History", ipa: "/ˈhɪs.tər.i/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "歷史", def_en: "the study of past events", sentence: "He is interested in American history.", sentence_trans: "他對美國歷史感興趣。", synonyms: ["past", "background"], phrases: [] }] }]
        },
        {
            id: "exp_h05", word: "Hold", ipa: "/həʊld/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "握住；舉辦", def_en: "grasp, carry, or support with one's hands", sentence: "She was holding a book.", sentence_trans: "她手裡拿著一本書。", synonyms: ["grasp", "clutch"], phrases: ["hold on"] }] }]
        },
        {
            id: "exp_h06", word: "Human", ipa: "/ˈhjuː.mən/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "人類的", def_en: "relating to or characteristic of people or human beings", sentence: "The human body is complex.", sentence_trans: "人體是複雜的。", synonyms: ["mortal"], phrases: ["human rights"] }] }]
        },
        {
            id: "exp_i01", word: "Idea", ipa: "/aɪˈdɪə/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "主意；想法", def_en: "a thought or suggestion as to a possible course of action", sentence: "That's a good idea.", sentence_trans: "那是個好主意。", synonyms: ["concept", "plan"], phrases: [] }] }]
        },
        {
            id: "exp_i02", word: "Identify", ipa: "/aɪˈden.tɪ.faɪ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "識別；認出", def_en: "establish or indicate who or what (someone or something) is", sentence: "Scientists have identified a new species of frog.", sentence_trans: "科學家已經識別出一種新品種的青蛙。", synonyms: ["recognize", "detect"], phrases: [] }] }]
        },
        {
            id: "exp_i03", word: "Image", ipa: "/ˈɪm.ɪdʒ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "影像；形象", def_en: "a representation of the external form of a person or thing in art", sentence: "The company is trying to improve its public image.", sentence_trans: "公司正試圖改善其公眾形象。", synonyms: ["picture", "representation"], phrases: [] }] }]
        },
        {
            id: "exp_i04", word: "Impact", ipa: "/ˈɪm.pækt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "影響；衝擊", def_en: "the action of one object coming forcibly into contact with another; effect", sentence: "The internet has had a huge impact on society.", sentence_trans: "網際網路對社會產生了巨大的影響。", synonyms: ["effect", "influence"], phrases: [] }] }]
        },
        {
            id: "exp_i05", word: "Important", ipa: "/ɪmˈpɔː.tənt/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "重要的", def_en: "of great significance or value", sentence: "It is important to get enough sleep.", sentence_trans: "獲得足夠的睡眠很重要。", synonyms: ["significant", "vital"], phrases: [] }] }]
        },
        {
            id: "exp_i06", word: "Improve", ipa: "/ɪmˈpruːv/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "改善；改進", def_en: "make or become better", sentence: "I want to improve my English.", sentence_trans: "我想提高我的英語水平。", synonyms: ["enhance", "better"], phrases: [] }] }]
        },
        {
            id: "exp_i07", word: "Include", ipa: "/ɪnˈkluːd/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "包括", def_en: "comprise or contain as part of a whole", sentence: "The price includes breakfast.", sentence_trans: "價格包含早餐。", synonyms: ["contain", "involve"], phrases: [] }] }]
        },
        {
            id: "exp_i08", word: "Increase", ipa: "/ɪnˈkriːs/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "增加", def_en: "become or make greater in size, amount, intensity, or degree", sentence: "The population has increased significantly.", sentence_trans: "人口顯著增加。", synonyms: ["grow", "rise"], phrases: [] }] }]
        },
        {
            id: "exp_i09", word: "Individual", ipa: "/ˌɪn.dɪˈvɪd.ʒu.əl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "個人", def_en: "a single human being as distinct from a group, class, or family", sentence: "Each individual has unique talents.", sentence_trans: "每個人都有獨特的才能。", synonyms: ["person", "single"], phrases: [] }] }]
        },
        {
            id: "exp_i10", word: "Industry", ipa: "/ˈɪn.də.stri/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "工業；產業", def_en: "economic activity concerned with the processing of raw materials", sentence: "The tourism industry is booming.", sentence_trans: "旅遊業正在蓬勃發展。", synonyms: ["business", "trade"], phrases: [] }] }]
        },
        {
            id: "exp_i11", word: "Influence", ipa: "/ˈɪn.flu.əns/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "影響(力)", def_en: "the capacity to have an effect on the character, development, or behavior of someone", sentence: "Her parents had a strong influence on her decisions.", sentence_trans: "她的父母對她的決定有很大的影響。", synonyms: ["impact", "effect"], phrases: [] }] },
                { pos: "v.", items: [{ def_zh: "影響", def_en: "have an influence on", sentence: "Social media influences public opinion.", sentence_trans: "社群媒體影響公眾輿論。", synonyms: ["affect", "shape"], phrases: [] }] }
            ]
        },
        {
            id: "exp_i12", word: "Information", ipa: "/ˌɪn.fəˈmeɪ.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "資訊", def_en: "facts provided or learned about something or someone", sentence: "For more information, please visit our website.", sentence_trans: "欲了解更多資訊，請訪問我們的網站。", synonyms: ["data", "details"], phrases: [] }] }]
        },
        {
            id: "exp_i13", word: "Interest", ipa: "/ˈɪn.trəst/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "興趣；利益；利息", def_en: "the state of wanting to know or learn about something or someone", sentence: "She has a keen interest in music.", sentence_trans: "她對音樂有濃厚的興趣。", synonyms: ["concern", "passion"], phrases: ["in the interest of"] }] }]
        },
        {
            id: "exp_i14", word: "International", ipa: "/ˌɪn.təˈnæʃ.ən.əl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "國際的", def_en: "existing, occurring, or carried on between two or more nations", sentence: "International trade is essential for the global economy.", sentence_trans: "國際貿易對全球經濟至關重要。", synonyms: ["global", "worldwide"], phrases: [] }] }]
        },
        {
            id: "exp_i15", word: "Issue", ipa: "/ˈɪʃ.uː/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "議題；問題", def_en: "an important topic or problem for debate or discussion", sentence: "Environmental protection is a major issue.", sentence_trans: "環境保護是一個主要議題。", synonyms: ["matter", "problem"], phrases: ["raise an issue"] }] }]
        },

        // =========================================================================
        // 🇰 K to 🇱 L - Missing Core Words
        // =========================================================================
        {
            id: "exp_k01", word: "Key", ipa: "/kiː/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "關鍵的", def_en: "of paramount importance", sentence: "Education is the key factor in success.", sentence_trans: "教育是成功的關鍵因素。", synonyms: ["crucial", "essential"], phrases: ["key role"] }] }]
        },
        {
            id: "exp_k02", word: "Knowledge", ipa: "/ˈnɒl.ɪdʒ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "知識", def_en: "facts, information, and skills acquired by a person through experience or education", sentence: "Knowledge is power.", sentence_trans: "知識就是力量。", synonyms: ["understanding", "wisdom"], phrases: ["general knowledge"] }] }]
        },
        {
            id: "exp_l01", word: "Large", ipa: "/lɑːdʒ/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "大的", def_en: "of considerable or relatively great size, extent, or capacity", sentence: "A large crowd gathered in the square.", sentence_trans: "一大群人聚集在廣場上。", synonyms: ["big", "huge"], phrases: ["at large"] }] }]
        },
        {
            id: "exp_l02", word: "Law", ipa: "/lɔː/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "法律", def_en: "the system of rules which a particular country or community recognizes as regulating the actions of its members", sentence: "Everyone is equal before the law.", sentence_trans: "法律面前人人平等。", synonyms: ["regulation", "statute"], phrases: ["break the law"] }] }]
        },
        {
            id: "exp_l03", word: "Lead", ipa: "/liːd/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "領導；導致", def_en: "cause (a person or animal) to go with one by holding them by the hand, halter, rope, etc. while moving forward", sentence: "Poor diet can lead to health problems.", sentence_trans: "不良飲食會導致健康問題。", synonyms: ["guide", "direct"], phrases: ["lead to"] }] }]
        },
        {
            id: "exp_l04", word: "Level", ipa: "/ˈlev.əl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "水平；等級", def_en: "a position on a real or imaginary scale of amount, quantity, extent, or quality", sentence: "The water level is rising.", sentence_trans: "水位正在上升。", synonyms: ["standard", "rank"], phrases: ["high level"] }] }]
        },
        {
            id: "exp_l05", word: "Life", ipa: "/laɪf/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "生活；生命", def_en: "the condition that distinguishes animals and plants from inorganic matter", sentence: "Life in the city is fast-paced.", sentence_trans: "城市生活節奏很快。", synonyms: ["existence"], phrases: ["way of life"] }] }]
        },
        {
            id: "exp_l06", word: "Light", ipa: "/laɪt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "光；燈", def_en: "the natural agent that stimulates sight and makes things visible", sentence: "The room gets a lot of natural light.", sentence_trans: "這個房間有充足的自然光。", synonyms: ["brightness", "illumination"], phrases: [] }] }]
        },
        {
            id: "exp_l07", word: "Likely", ipa: "/ˈlaɪ.kli/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "可能的", def_en: "such as well might happen or be true; probable", sentence: "It is likely to rain tomorrow.", sentence_trans: "明天可能會下雨。", synonyms: ["probable", "possible"], phrases: ["most likely"] }] }]
        },
        {
            id: "exp_l08", word: "Line", ipa: "/laɪn/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "線；行", def_en: "a long, narrow mark or band", sentence: "Please sign on the dotted line.", sentence_trans: "請在虛線上簽名。", synonyms: ["stripe", "row"], phrases: ["in line"] }] }]
        },
        {
            id: "exp_l09", word: "List", ipa: "/lɪst/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "清單；列表", def_en: "a number of connected items or names written or printed consecutively, typically one below the other", sentence: "Make a shopping list before you go to the store.", sentence_trans: "去商店前列一張購物清單。", synonyms: ["inventory", "record"], phrases: [] }] }]
        },
        {
            id: "exp_l10", word: "Local", ipa: "/ˈləʊ.kəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "當地的", def_en: "relating to or occurring in a particular area, city, or town", sentence: "We should support local businesses.", sentence_trans: "我們應該支持當地企業。", synonyms: ["regional", "community"], phrases: [] }] }]
        },
        {
            id: "exp_l11", word: "Long", ipa: "/lɒŋ/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "長的", def_en: "measuring a great distance from end to end", sentence: "It has been a long day.", sentence_trans: "這是有漫長的一天。", synonyms: ["lengthy", "extended"], phrases: ["long term"] }] }]
        },
        {
            id: "exp_l12", word: "Lose", ipa: "/luːz/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "失去；輸掉", def_en: "be deprived of or cease to have or retain (something)", sentence: "Don't lose hope.", sentence_trans: "不要失去希望。", synonyms: ["misplace", "fail"], phrases: ["lose weight"] }] }]
        },
        {
            id: "exp_l13", word: "Low", ipa: "/ləʊ/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "低的", def_en: "of less than average height from top to bottom or to the top from the ground", sentence: "Temperatures are expected to be low tonight.", sentence_trans: "預計今晚氣溫會很低。", synonyms: ["short", "small"], phrases: [] }] }]
        },

        // =========================================================================
        // 🇲 M to 🇵 P - Missing Core Words
        // =========================================================================
        {
            id: "exp_m01", word: "Maintain", ipa: "/meɪnˈteɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "維持；保持", def_en: "cause or enable (a condition or state of affairs) to continue", sentence: "It is important to maintain a healthy lifestyle.", sentence_trans: "維持健康的生活方式很重要。", synonyms: ["sustain", "keep"], phrases: [] }] }]
        },
        {
            id: "exp_m02", word: "Major", ipa: "/ˈmeɪ.dʒər/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "主要的", def_en: "important, serious, or significant", sentence: "Traffic congestion is a major problem in the city.", sentence_trans: "交通擁堵是城市的主要問題。", synonyms: ["main", "significant"], phrases: [] }] }]
        },
        {
            id: "exp_m03", word: "Make", ipa: "/meɪk/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "製造；使得", def_en: "form (something) by putting parts together or combining substances; construct; create", sentence: "She made a cake for his birthday.", sentence_trans: "她為他的生日做了一個蛋糕。", synonyms: ["create", "produce"], phrases: ["make sure"] }] }]
        },
        {
            id: "exp_m04", word: "Manage", ipa: "/ˈmæn.ɪdʒ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "管理；經營", def_en: "be in charge of (a company, undertaking, or person)", sentence: "He manages a team of 20 people.", sentence_trans: "他管理一個20人的團隊。", synonyms: ["supervise", "direct"], phrases: [] }] }]
        },
        {
            id: "exp_m05", word: "Market", ipa: "/ˈmɑː.kɪt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "市場", def_en: "a regular gathering of people for the purchase and sale of provisions, livestock, and other commodities", sentence: "The housing market is booming.", sentence_trans: "房地產市場正在蓬勃發展。", synonyms: ["bazaar", "exchange"], phrases: ["stock market"] }] }]
        },
        {
            id: "exp_m06", word: "Material", ipa: "/məˈtɪə.ri.əl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "材料；原料", def_en: "the matter from which a thing is or can be made", sentence: "Wood is a common building material.", sentence_trans: "木材是一種常見的建築材料。", synonyms: ["substance", "matter"], phrases: [] }] }]
        },
        {
            id: "exp_m07", word: "Matter", ipa: "/ˈmæt.ər/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "事情；物質", def_en: "an affair or situation under consideration; physical substance", sentence: "It's a matter of time.", sentence_trans: "這是時間問題。", synonyms: ["issue", "substance"], phrases: ["no matter"] }] },
                { pos: "v.", items: [{ def_zh: "要緊；有關係", def_en: "be of importance; have significance", sentence: "It doesn't matter what you say.", sentence_trans: "你說什麼並不重要。", synonyms: ["count", "signify"], phrases: [] }] }
            ]
        },
        {
            id: "exp_m08", word: "Mean", ipa: "/miːn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "意思是；意味著", def_en: "intend to convey, indicate, or refer to (a particular thing or notion)", sentence: "What does this word mean?", sentence_trans: "這個字是什麼意思？", synonyms: ["signify", "imply"], phrases: [] }] }]
        },
        {
            id: "exp_m09", word: "Measure", ipa: "/ˈmeʒ.ər/", priority: 10,
            meanings: [
                { pos: "v.", items: [{ def_zh: "測量；衡量", def_en: "ascertain the size, amount, or degree of (something)", sentence: "We measured the room before buying furniture.", sentence_trans: "我們買傢俱前測量了房間。", synonyms: ["calculate", "assess"], phrases: [] }] },
                { pos: "n.", items: [{ def_zh: "措施", def_en: "a plan or course of action taken to achieve a particular purpose", sentence: "Safety measures are in place.", sentence_trans: "安全措施已到位。", synonyms: ["step", "action"], phrases: ["take measures"] }] }
            ]
        },
        {
            id: "exp_m10", word: "Media", ipa: "/ˈmiː.di.ə/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "媒體", def_en: "the main means of mass communication", sentence: "The media plays a crucial role in shaping public opinion.", sentence_trans: "媒體在塑造公眾輿論方面發揮著至關重要的作用。", synonyms: ["press"], phrases: ["social media"] }] }]
        },
        {
            id: "exp_m11", word: "Member", ipa: "/ˈmem.bər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "成員", def_en: "an individual belonging to a group such as a society or team", sentence: "She is a member of the tennis club.", sentence_trans: "她是網球俱樂部的成員。", synonyms: ["associate", "participant"], phrases: [] }] }]
        },
        {
            id: "exp_m12", word: "Method", ipa: "/ˈmeθ.əd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "方法", def_en: "a particular form of procedure for accomplishing or approaching something", sentence: "We need to find a more efficient method of production.", sentence_trans: "我們需要找到一種更有效的生產方法。", synonyms: ["technique", "approach"], phrases: [] }] }]
        },
        {
            id: "exp_m13", word: "Model", ipa: "/ˈmɒd.əl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "模型；模範", def_en: "a three-dimensional representation of a person or thing", sentence: "He built a model airplane.", sentence_trans: "他製作了一個飛機模型。", synonyms: ["replica", "example"], phrases: ["role model"] }] }]
        },
        {
            id: "exp_m14", word: "Modern", ipa: "/ˈmɒd.ən/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "現代的", def_en: "relating to the present or recent times as opposed to the remote past", sentence: "Modern technology has changed our lives.", sentence_trans: "現代科技改變了我們的生活。", synonyms: ["contemporary", "current"], phrases: [] }] }]
        },
        {
            id: "exp_m15", word: "Movement", ipa: "/ˈmuːv.mənt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "移動；運動", def_en: "an act of changing physical location or position", sentence: "The civil rights movement changed history.", sentence_trans: "民權運動改變了歷史。", synonyms: ["motion", "campaign"], phrases: [] }] }]
        },
        {
            id: "exp_n01", word: "Nation", ipa: "/ˈneɪ.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "國家", def_en: "a large body of people united by common descent, history, culture, or language, inhabiting a particular country or territory", sentence: "The president addressed the nation.", sentence_trans: "總統向全國發表了講話。", synonyms: ["country", "state"], phrases: [] }] }]
        },
        {
            id: "exp_n02", word: "Nature", ipa: "/ˈneɪ.tʃər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "自然；本質", def_en: "the phenomena of the physical world collectively; the basic or inherent features of something", sentence: "We love spending time in nature.", sentence_trans: "我們喜歡在大自然中消磨時光。", synonyms: ["environment", "character"], phrases: ["human nature"] }] }]
        },
        {
            id: "exp_n03", word: "Necessary", ipa: "/ˈnes.ə.sər.i/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "必要的", def_en: "required to be done, achieved, or present; needed; essential", sentence: "It is necessary to wear a seatbelt.", sentence_trans: "繫安全帶是必要的。", synonyms: ["essential", "required"], phrases: [] }] }]
        },
        {
            id: "exp_n04", word: "Need", ipa: "/niːd/", priority: 10,
            meanings: [
                { pos: "v.", items: [{ def_zh: "需要", def_en: "require (something) because it is essential or very important", sentence: "I need some help.", sentence_trans: "我需要一些幫助。", synonyms: ["require", "want"], phrases: [] }] },
                { pos: "n.", items: [{ def_zh: "需求", def_en: "circumstances in which something is necessary", sentence: "There is a need for better housing.", sentence_trans: "有改善住房的需求。", synonyms: ["requirement", "demand"], phrases: ["in need of"] }] }
            ]
        },
        {
            id: "exp_o01", word: "Observe", ipa: "/əbˈzɜːv/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "觀察；遵守", def_en: "notice or perceive (something) and register it as being significant; fulfill or comply with (a social, legal, ethical, or religious obligation)", sentence: "Scientists observe the behavior of animals.", sentence_trans: "科學家觀察動物的行為。", synonyms: ["watch", "monitor", "obey"], phrases: [] }] }]
        },
        {
            id: "exp_o02", word: "Occur", ipa: "/əˈkɜːr/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "發生", def_en: "happen; take place", sentence: "The accident occurred at night.", sentence_trans: "事故發生在晚上。", synonyms: ["happen", "take place"], phrases: ["occur to"] }] }]
        },
        {
            id: "exp_o03", word: "Offer", ipa: "/ˈɒf.ər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "提供；提議", def_en: "present or proffer (something) for (someone) to accept or reject as so desired", sentence: "They offered him a job.", sentence_trans: "他們提供給他一份工作。", synonyms: ["provide", "propose"], phrases: [] }] }]
        },
        {
            id: "exp_o04", word: "Office", ipa: "/ˈɒf.ɪs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "辦公室；職位", def_en: "a room, set of rooms, or building used as a place for commercial, professional, or bureaucratic work", sentence: "I work in an office.", sentence_trans: "我在辦公室工作。", synonyms: ["workplace"], phrases: ["take office"] }] }]
        },
        {
            id: "exp_o05", word: "Officer", ipa: "/ˈɒf.ɪ.sər/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "官員；警官", def_en: "a person holding a position of command or authority", sentence: "A police officer stopped the car.", sentence_trans: "一名警官攔下了車。", synonyms: ["official", "policeman"], phrases: [] }] }]
        },
        {
            id: "exp_o06", word: "Official", ipa: "/əˈfɪʃ.əl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "官方的；正式的", def_en: "relating to an authority or public body and its duties, actions, and responsibilities", sentence: "The official language is English.", sentence_trans: "官方語言是英語。", synonyms: ["authorized", "formal"], phrases: [] }] }]
        },
        {
            id: "exp_o07", word: "Often", ipa: "/ˈɒf.tən/", priority: 10,
            meanings: [{ pos: "adv.", items: [{ def_zh: "經常", def_en: "frequently; many times", sentence: "We often go to the park.", sentence_trans: "我們經常去公園。", synonyms: ["frequently", "regularly"], phrases: [] }] }]
        },
        {
            id: "exp_o08", word: "Operation", ipa: "/ˌɒp.ərˈeɪ.ʃən/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "操作；手術；行動", def_en: "the fact or condition of functioning or being active", sentence: "The new system is now in operation.", sentence_trans: "新系統現已投入運作。", synonyms: ["action", "procedure"], phrases: [] }] }]
        },
        {
            id: "exp_o09", word: "Opportunity", ipa: "/ˌɒp.əˈtjuː.nə.ti/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "機會", def_en: "a set of circumstances that makes it possible to do something", sentence: "I appreciate the opportunity to work here.", sentence_trans: "我很感激有機會在這裡工作。", synonyms: ["chance", "opening"], phrases: ["take the opportunity"] }] }]
        },
        {
            id: "exp_o10", word: "Option", ipa: "/ˈɒp.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "選擇；選項", def_en: "a thing that is or may be chosen", sentence: "We have several options.", sentence_trans: "我們有幾個選擇。", synonyms: ["choice", "alternative"], phrases: [] }] }]
        },
        {
            id: "exp_o11", word: "Organization", ipa: "/ˌɔː.ɡən.aɪˈzeɪ.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "組織；機構", def_en: "an organized body of people with a particular purpose, especially a business, society, association, etc.", sentence: "He works for a non-profit organization.", sentence_trans: "他在一家非營利組織工作。", synonyms: ["institution", "company"], phrases: [] }] }]
        },
        {
            id: "exp_p01", word: "Part", ipa: "/pɑːt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "部分", def_en: "an amount or section which, when combined with others, makes up the whole of something", sentence: "This is part of the plan.", sentence_trans: "這是計畫的一部分。", synonyms: ["portion", "section"], phrases: ["take part in"] }] }]
        },
        {
            id: "exp_p02", word: "Particular", ipa: "/pəˈtɪk.jə.lər/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "特定的；特別的", def_en: "used to single out an individual member of a specified group or class", sentence: "Is there any particular reason for your decision?", sentence_trans: "你的決定有什麼特別的原因嗎？", synonyms: ["specific", "certain"], phrases: ["in particular"] }] }]
        },
        {
            id: "exp_p03", word: "Pay", ipa: "/peɪ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "支付", def_en: "give (someone) money that is due for work done, goods received, or a debt incurred", sentence: "I need to pay the bills.", sentence_trans: "我需要支付帳單。", synonyms: ["spend", "settle"], phrases: ["pay attention"] }] }]
        },
        {
            id: "exp_p04", word: "Performance", ipa: "/pəˈfɔː.məns/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "表現；表演", def_en: "an act of staging or presenting a play, concert, or other form of entertainment", sentence: "His performance in the exam was excellent.", sentence_trans: "他在考試中的表現非常出色。", synonyms: ["show", "presentation"], phrases: [] }] }]
        },
        {
            id: "exp_p05", word: "Period", ipa: "/ˈpɪə.ri.əd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "期間；時期", def_en: "a length or portion of time", sentence: "The offer is available for a limited period.", sentence_trans: "該優惠僅在有限期間內有效。", synonyms: ["time", "term"], phrases: [] }] }]
        },
        {
            id: "exp_p06", word: "Person", ipa: "/ˈpɜː.sən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "人", def_en: "a human being regarded as an individual", sentence: "She is a very kind person.", sentence_trans: "她是一個非常善良的人。", synonyms: ["individual", "human"], phrases: ["in person"] }] }]
        },
        {
            id: "exp_p07", word: "Personal", ipa: "/ˈpɜː.sən.əl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "個人的", def_en: "of, affecting, or belonging to a particular person rather than to anyone else", sentence: "This is a personal matter.", sentence_trans: "這是個人私事。", synonyms: ["private", "individual"], phrases: [] }] }]
        },
        {
            id: "exp_p08", word: "Physical", ipa: "/ˈfɪz.ɪ.kəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "身體的；物理的", def_en: "relating to the body as opposed to the mind", sentence: "Physical exercise is important.", sentence_trans: "體育鍛煉很重要。", synonyms: ["bodily", "corporeal"], phrases: [] }] }]
        },
        {
            id: "exp_p09", word: "Place", ipa: "/pleɪs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "地方", def_en: "a particular position or point in space", sentence: "This is a nice place to live.", sentence_trans: "這是一個居住的好地方。", synonyms: ["location", "spot"], phrases: ["take place"] }] }]
        },
        {
            id: "exp_p10", word: "Plan", ipa: "/plæn/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "計畫", def_en: "a detailed proposal for doing or achieving something", sentence: "Do you have any plans for the weekend?", sentence_trans: "你週末有什麼計畫嗎？", synonyms: ["scheme", "strategy"], phrases: [] }] }]
        },
        {
            id: "exp_p11", word: "Point", ipa: "/pɔɪnt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "點；觀點", def_en: "a particular spot, place, or position", sentence: "That's a good point.", sentence_trans: "那是個好觀點。", synonyms: ["spot", "view"], phrases: ["point of view"] }] }]
        },
        {
            id: "exp_p12", word: "Policy", ipa: "/ˈpɒl.ə.si/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "政策", def_en: "a course or principle of action adopted or proposed by a government, party, business, or individual", sentence: "The company has a strict no-smoking policy.", sentence_trans: "該公司有嚴格的禁菸政策。", synonyms: ["strategy", "rule"], phrases: [] }] }]
        },
        {
            id: "exp_p13", word: "Political", ipa: "/pəˈlɪt.ɪ.kəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "政治的", def_en: "relating to the government or the public affairs of a country", sentence: "He is interested in political science.", sentence_trans: "他對政治學感興趣。", synonyms: ["governmental"], phrases: [] }] }]
        },
        {
            id: "exp_p14", word: "Poor", ipa: "/pɔːr/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "貧窮的；差的", def_en: "lacking sufficient money to live at a standard considered comfortable or normal", sentence: "They were too poor to buy food.", sentence_trans: "他們太窮了，買不起食物。", synonyms: ["poverty-stricken", "bad"], phrases: [] }] }]
        },
        {
            id: "exp_p15", word: "Popular", ipa: "/ˈpɒp.jə.lər/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "受歡迎的", def_en: "liked, admired, or enjoyed by many people", sentence: "Football is a popular sport.", sentence_trans: "足球是一項受歡迎的運動。", synonyms: ["well-liked", "common"], phrases: [] }] }]
        },
        {
            id: "exp_p16", word: "Position", ipa: "/pəˈzɪʃ.ən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "位置；職位", def_en: "a place where someone or something is located or has been put", sentence: "She applied for a management position.", sentence_trans: "她申請了管理職位。", synonyms: ["location", "job"], phrases: [] }] }]
        },
        {
            id: "exp_p17", word: "Positive", ipa: "/ˈpɒz.ə.tɪv/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "正面的；積極的", def_en: "consisting in or characterized by the presence rather than the absence of distinguishing features", sentence: "She has a positive attitude towards life.", sentence_trans: "她對生活有積極的態度。", synonyms: ["optimistic", "favorable"], phrases: [] }] }]
        },
        {
            id: "exp_p18", word: "Possible", ipa: "/ˈpɒs.ə.bəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "可能的", def_en: "able to be done; within the power or capacity of someone or something", sentence: "It is possible to walk there.", sentence_trans: "走到那裡是可能的。", synonyms: ["feasible", "achievable"], phrases: ["as soon as possible"] }] }]
        },
        {
            id: "exp_p19", word: "Potential", ipa: "/pəˈten.ʃəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "潛在的", def_en: "having or showing the capacity to become or develop into something in the future", sentence: "The new drug has potential side effects.", sentence_trans: "新藥有潛在的副作用。", synonyms: ["possible", "likely"], phrases: [] }] }]
        },
        {
            id: "exp_p20", word: "Power", ipa: "/paʊər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "力量；權力", def_en: "the ability to do something or act in a particular way", sentence: "Knowledge is power.", sentence_trans: "知識就是力量。", synonyms: ["strength", "authority"], phrases: [] }] }]
        },
        {
            id: "exp_p21", word: "Practice", ipa: "/ˈpræk.tɪs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "練習；實踐", def_en: "the actual application or use of an idea, belief, or method", sentence: "Practice makes perfect.", sentence_trans: "熟能生巧。", synonyms: ["training", "application"], phrases: ["in practice"] }] }]
        },
        {
            id: "exp_p22", word: "Prepare", ipa: "/prɪˈpeər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "準備", def_en: "make (something) ready for use or consideration", sentence: "She is preparing for her exams.", sentence_trans: "她正在準備考試。", synonyms: ["get ready", "arrange"], phrases: [] }] }]
        },
        {
            id: "exp_p23", word: "Present", ipa: "/ˈprez.ənt/", priority: 10,
            meanings: [
                { pos: "adj.", items: [{ def_zh: "目前的；出席的", def_en: "existing or occurring now", sentence: "The present situation is difficult.", sentence_trans: "目前的情況很困難。", synonyms: ["current", "existing"], phrases: ["at present"] }] },
                { pos: "v.", items: [{ def_zh: "呈現；贈送", def_en: "give something to (someone) formally or ceremonially", sentence: "He presented his findings to the committee.", sentence_trans: "他向委員會展示了他的發現。", synonyms: ["give", "show"], phrases: [] }] }
            ]
        },
        {
            id: "exp_p24", word: "Pressure", ipa: "/ˈpreʃ.ər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "壓力", def_en: "continuous physical force exerted on or against an object by something in contact with it", sentence: "She is under a lot of pressure at work.", sentence_trans: "她在工作中承受著很大的壓力。", synonyms: ["stress", "force"], phrases: ["under pressure"] }] }]
        },
        {
            id: "exp_p25", word: "Prevent", ipa: "/prɪˈvent/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "預防；阻止", def_en: "keep (something) from happening or arising", sentence: "We must take steps to prevent accidents.", sentence_trans: "我們必須採取措施預防事故。", synonyms: ["stop", "avoid"], phrases: [] }] }]
        },
        {
            id: "exp_p26", word: "Price", ipa: "/praɪs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "價格", def_en: "the amount of money expected, required, or given in payment for something", sentence: "The price of oil has risen.", sentence_trans: "油價上漲了。", synonyms: ["cost", "value"], phrases: [] }] }]
        },
        {
            id: "exp_p27", word: "Private", ipa: "/ˈpraɪ.vət/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "私人的", def_en: "belonging to or for the use of one particular person or group of people only", sentence: "This is a private property.", sentence_trans: "這是私人財產。", synonyms: ["personal", "confidential"], phrases: ["in private"] }] }]
        },
        {
            id: "exp_p28", word: "Problem", ipa: "/ˈprɒb.ləm/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "問題", def_en: "a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome", sentence: "We need to solve this problem.", sentence_trans: "我們需要解決這個問題。", synonyms: ["issue", "trouble"], phrases: [] }] }]
        },
        {
            id: "exp_p29", word: "Process", ipa: "/ˈprəʊ.ses/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "過程", def_en: "a series of actions or steps taken in order to achieve a particular end", sentence: "Learning a language is a slow process.", sentence_trans: "學習語言是一個緩慢的過程。", synonyms: ["procedure", "method"], phrases: ["in the process of"] }] }]
        },
        {
            id: "exp_p30", word: "Produce", ipa: "/prəˈdjuːs/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "生產；製造", def_en: "make or manufacture from components or raw materials", sentence: "The factory produces cars.", sentence_trans: "這家工廠生產汽車。", synonyms: ["manufacture", "create"], phrases: [] }] }]
        },
        {
            id: "exp_p31", word: "Product", ipa: "/ˈprɒd.ʌkt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "產品", def_en: "an article or substance that is manufactured or refined for sale", sentence: "They launched a new product.", sentence_trans: "他們推出了一款新產品。", synonyms: ["goods", "item"], phrases: [] }] }]
        },
        {
            id: "exp_p32", word: "Production", ipa: "/prəˈdʌk.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "生產", def_en: "the action of making or manufacturing from components or raw materials", sentence: "Production has increased by 10%.", sentence_trans: "生產增加了10%。", synonyms: ["manufacturing", "creation"], phrases: [] }] }]
        },
        {
            id: "exp_p33", word: "Professional", ipa: "/prəˈfeʃ.ən.əl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "專業的", def_en: "relating to or belonging to a profession", sentence: "You should seek professional advice.", sentence_trans: "你應該尋求專業建議。", synonyms: ["expert", "skilled"], phrases: [] }] }]
        },
        {
            id: "exp_p34", word: "Program", ipa: "/ˈprəʊ.ɡræm/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "計畫；節目", def_en: "a planned series of future events, items, or performances", sentence: "The government has a new housing program.", sentence_trans: "政府有一項新的住房計畫。", synonyms: ["scheme", "plan"], phrases: [] }] }]
        },
        {
            id: "exp_p35", word: "Project", ipa: "/ˈprɒdʒ.ekt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "專案；計畫", def_en: "an individual or collaborative enterprise that is carefully planned and designed to achieve a particular aim", sentence: "We are working on a new project.", sentence_trans: "我們正在進行一個新專案。", synonyms: ["scheme", "plan"], phrases: [] }] }]
        },
        {
            id: "exp_p36", word: "Property", ipa: "/ˈprɒp.ə.ti/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "財產；屬性", def_en: "a thing or things belonging to someone", sentence: "This house is my property.", sentence_trans: "這棟房子是我的財產。", synonyms: ["possession", "attribute"], phrases: [] }] }]
        },
        {
            id: "exp_p37", word: "Protect", ipa: "/prəˈtekt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "保護", def_en: "keep safe from harm or injury", sentence: "We need to protect the environment.", sentence_trans: "我們需要保護環境。", synonyms: ["guard", "defend"], phrases: ["protect from"] }] }]
        },
        {
            id: "exp_p38", word: "Prove", ipa: "/pruːv/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "證明", def_en: "demonstrate the truth or existence of (something) by evidence or argument", sentence: "Can you prove it?", sentence_trans: "你能證明嗎？", synonyms: ["demonstrate", "verify"], phrases: [] }] }]
        },
        {
            id: "exp_p39", word: "Provide", ipa: "/prəˈvaɪd/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "提供", def_en: "make available for use; supply", sentence: "The hotel provides free Wi-Fi.", sentence_trans: "飯店提供免費無線網路。", synonyms: ["supply", "give"], phrases: ["provide with"] }] }]
        },
        {
            id: "exp_p40", word: "Public", ipa: "/ˈpʌb.lɪk/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "公眾的；公共的", def_en: "of or concerning the people as a whole", sentence: "Public transport is very convenient here.", sentence_trans: "這裡的大眾運輸非常方便。", synonyms: ["general", "community"], phrases: ["in public"] }] }]
        },
        {
            id: "exp_p41", word: "Purpose", ipa: "/ˈpɜː.pəs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "目的", def_en: "the reason for which something is done or created or for which something exists", sentence: "The purpose of the meeting is to discuss the budget.", sentence_trans: "會議的目的是討論預算。", synonyms: ["aim", "goal"], phrases: ["on purpose"] }] }]
        },

        // =========================================================================
        // 🇶 Q to 🇿 Z - Missing Core Words
        // =========================================================================
        {
            id: "exp_q01", word: "Quality", ipa: "/ˈkwɒl.ə.ti/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "品質", def_en: "the standard of something as measured against other things of a similar kind", sentence: "We guarantee the quality of our products.", sentence_trans: "我們保證產品的品質。", synonyms: ["standard", "grade"], phrases: [] }] }]
        },
        {
            id: "exp_q02", word: "Question", ipa: "/ˈkwes.tʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "問題；疑問", def_en: "a sentence worded or expressed so as to elicit information", sentence: "Can I ask a question?", sentence_trans: "我可以問個問題嗎？", synonyms: ["query", "issue"], phrases: ["in question"] }] }]
        },
        {
            id: "exp_r01", word: "Rate", ipa: "/reɪt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "比率；速度", def_en: "a measure, quantity, or frequency", sentence: "The unemployment rate is rising.", sentence_trans: "失業率正在上升。", synonyms: ["percentage", "speed"], phrases: ["at any rate"] }] }]
        },
        {
            id: "exp_r02", word: "Reach", ipa: "/riːtʃ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "到達；達到", def_en: "arrive at; extend to", sentence: "We hope to reach an agreement soon.", sentence_trans: "我們希望儘快達成協議。", synonyms: ["arrive", "attain"], phrases: [] }] }]
        },
        {
            id: "exp_r03", word: "Reason", ipa: "/ˈriː.zən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "理由；原因", def_en: "a cause, explanation, or justification", sentence: "Give me one good reason to stay.", sentence_trans: "給我一個留下來的好理由。", synonyms: ["cause", "motive"], phrases: [] }] }]
        },
        {
            id: "exp_r04", word: "Receive", ipa: "/rɪˈsiːv/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "收到；接待", def_en: "be given, presented with, or paid (something)", sentence: "Did you receive my email?", sentence_trans: "你收到我的電子郵件了嗎？", synonyms: ["get", "accept"], phrases: [] }] }]
        },
        {
            id: "exp_r05", word: "Recent", ipa: "/ˈriː.sənt/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "最近的", def_en: "having happened, begun, or been done not long ago", sentence: "In recent years, technology has advanced rapidly.", sentence_trans: "近年來，科技進步迅速。", synonyms: ["current", "late"], phrases: [] }] }]
        },
        {
            id: "exp_r06", word: "Reduce", ipa: "/rɪˈdjuːs/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "減少", def_en: "make smaller or less in amount, degree, or size", sentence: "We need to reduce waste.", sentence_trans: "我們需要減少浪費。", synonyms: ["decrease", "lower"], phrases: [] }] }]
        },
        {
            id: "exp_r07", word: "Result", ipa: "/rɪˈzʌlt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "結果", def_en: "a consequence, effect, or outcome of something", sentence: "The result of the election was surprising.", sentence_trans: "選舉結果令人驚訝。", synonyms: ["outcome", "consequence"], phrases: ["as a result"] }] }]
        },
        {
            id: "exp_r08", word: "Rise", ipa: "/raɪz/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "上升；增加", def_en: "move from a lower position to a higher one", sentence: "Prices are rising.", sentence_trans: "價格正在上漲。", synonyms: ["increase", "climb"], phrases: [] }] }]
        },
        {
            id: "exp_r09", word: "Role", ipa: "/rəʊl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "角色；作用", def_en: "the function assumed or part played by a person or thing in a particular situation", sentence: "She plays a key role in the team.", sentence_trans: "她在團隊中扮演著關鍵角色。", synonyms: ["function", "part"], phrases: ["play a role"] }] }]
        },
        {
            id: "exp_s01", word: "Safety", ipa: "/ˈseɪf.ti/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "安全", def_en: "the condition of being protected from or unlikely to cause danger, risk, or injury", sentence: "Safety is our top priority.", sentence_trans: "安全是我們的首要任務。", synonyms: ["security", "protection"], phrases: [] }] }]
        },
        {
            id: "exp_s02", word: "Science", ipa: "/ˈsaɪ.əns/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "科學", def_en: "the intellectual and practical activity encompassing the systematic study of the structure and behavior of the physical and natural world", sentence: "Science has improved our lives.", sentence_trans: "科學改善了我們的生活。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_s03", word: "Section", ipa: "/ˈsek.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "部分；部門", def_en: "any of the more or less distinct parts into which something is or may be divided", sentence: "Please read the next section of the book.", sentence_trans: "請閱讀書的下一部分。", synonyms: ["part", "division"], phrases: [] }] }]
        },
        {
            id: "exp_s04", word: "Sense", ipa: "/sens/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "感覺；意識", def_en: "a faculty by which the body perceives an external stimulus", sentence: "He has a good sense of humor.", sentence_trans: "他很有幽默感。", synonyms: ["feeling", "awareness"], phrases: ["make sense"] }] }]
        },
        {
            id: "exp_s05", word: "Service", ipa: "/ˈsɜː.vɪs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "服務", def_en: "the action of helping or doing work for someone", sentence: "The customer service here is excellent.", sentence_trans: "這裡的客戶服務非常好。", synonyms: ["assistance", "help"], phrases: [] }] }]
        },
        {
            id: "exp_s06", word: "Share", ipa: "/ʃeər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "分享；分擔", def_en: "have a portion of (something) with another or others", sentence: "We share a flat.", sentence_trans: "我們合租一套公寓。", synonyms: ["split", "divide"], phrases: [] }] }]
        },
        {
            id: "exp_s07", word: "Significant", ipa: "/sɪɡˈnɪf.ɪ.kənt/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "顯著的；重要的", def_en: "sufficiently great or important to be worthy of attention", sentence: "There has been a significant increase in profits.", sentence_trans: "利潤有了顯著增長。", synonyms: ["important", "major"], phrases: [] }] }]
        },
        {
            id: "exp_s08", word: "Similar", ipa: "/ˈsɪm.ɪ.lər/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "相似的", def_en: "resembling without being identical", sentence: "My sister and I have similar tastes.", sentence_trans: "我和我妹妹有相似的品味。", synonyms: ["alike", "comparable"], phrases: ["similar to"] }] }]
        },
        {
            id: "exp_s09", word: "Simple", ipa: "/ˈsɪm.pəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "簡單的", def_en: "easily understood or done; presenting no difficulty", sentence: "The instructions are quite simple.", sentence_trans: "說明非常簡單。", synonyms: ["easy", "plain"], phrases: [] }] }]
        },
        {
            id: "exp_s10", word: "Single", ipa: "/ˈsɪŋ.ɡəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "單一的；單身的", def_en: "only one; not one of several", sentence: "I don't have a single coin.", sentence_trans: "我連一枚硬幣都沒有。", synonyms: ["one", "sole"], phrases: [] }] }]
        },
        {
            id: "exp_s11", word: "Situation", ipa: "/ˌsɪt.ʃuˈeɪ.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "情況；局勢", def_en: "a set of circumstances in which one finds oneself", sentence: "The situation is under control.", sentence_trans: "局勢已得到控制。", synonyms: ["condition", "state"], phrases: [] }] }]
        },
        {
            id: "exp_s12", word: "Social", ipa: "/ˈsəʊ.ʃəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "社會的；社交的", def_en: "relating to society or its organization", sentence: "Social media has changed how we communicate.", sentence_trans: "社群媒體改變了我們的溝通方式。", synonyms: ["community", "public"], phrases: [] }] }]
        },
        {
            id: "exp_s13", word: "Society", ipa: "/səˈsaɪ.ə.ti/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "社會", def_en: "the aggregate of people living together in a more or less ordered community", sentence: "We live in a multicultural society.", sentence_trans: "我們生活在一個多元文化的社會。", synonyms: ["community", "civilization"], phrases: [] }] }]
        },
        {
            id: "exp_s14", word: "Source", ipa: "/sɔːs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "來源", def_en: "a place, person, or thing from which something comes or can be obtained", sentence: "Oranges are a good source of vitamin C.", sentence_trans: "柳橙是維生素C的良好來源。", synonyms: ["origin", "root"], phrases: [] }] }]
        },
        {
            id: "exp_s15", word: "Specific", ipa: "/spəˈsɪf.ɪk/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "特定的；具體的", def_en: "clearly defined or identified", sentence: "Is there anything specific you want for dinner?", sentence_trans: "晚餐你有什麼特別想吃的嗎？", synonyms: ["particular", "exact"], phrases: [] }] }]
        },
        {
            id: "exp_s16", word: "Stage", ipa: "/steɪdʒ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "階段；舞台", def_en: "a point, period, or step in a process or development", sentence: "We are in the early stages of the project.", sentence_trans: "我們正處於專案的早期階段。", synonyms: ["phase", "step"], phrases: [] }] }]
        },
        {
            id: "exp_s17", word: "Standard", ipa: "/ˈstæn.dəd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "標準", def_en: "a level of quality or attainment", sentence: "The hotel offers a high standard of service.", sentence_trans: "這家飯店提供高標準的服務。", synonyms: ["level", "grade"], phrases: [] }] }]
        },
        {
            id: "exp_s18", word: "State", ipa: "/steɪt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "狀態；國家", def_en: "the particular condition that someone or something is in at a specific time", sentence: "The building is in a poor state of repair.", sentence_trans: "這棟建築的維修狀況很差。", synonyms: ["condition", "nation"], phrases: [] }] }]
        },
        {
            id: "exp_s19", word: "Strategy", ipa: "/ˈstræt.ə.dʒi/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "策略", def_en: "a plan of action or policy designed to achieve a major or overall aim", sentence: "We need a new marketing strategy.", sentence_trans: "我們需要一個新的行銷策略。", synonyms: ["plan", "tactic"], phrases: [] }] }]
        },
        {
            id: "exp_s20", word: "Structure", ipa: "/ˈstrʌk.tʃər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "結構", def_en: "the arrangement of and relations between the parts or elements of something complex", sentence: "The structure of the organization is complex.", sentence_trans: "該組織的結構很複雜。", synonyms: ["construction", "framework"], phrases: [] }] }]
        },
        {
            id: "exp_s21", word: "Subject", ipa: "/ˈsʌb.dʒekt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "主題；科目", def_en: "a person or thing that is being discussed, described, or dealt with", sentence: "Math is my favorite subject.", sentence_trans: "數學是我最喜歡的科目。", synonyms: ["topic", "theme"], phrases: [] }] }]
        },
        {
            id: "exp_s22", word: "Success", ipa: "/səkˈses/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "成功", def_en: "the accomplishment of an aim or purpose", sentence: "Hard work is the key to success.", sentence_trans: "努力工作是成功的關鍵。", synonyms: ["victory", "triumph"], phrases: [] }] }]
        },
        {
            id: "exp_s23", word: "Support", ipa: "/səˈpɔːt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "支持", def_en: "bear all or part of the weight of; hold up", sentence: "I fully support your decision.", sentence_trans: "我完全支持你的決定。", synonyms: ["back", "assist"], phrases: [] }] }]
        },
        {
            id: "exp_s24", word: "System", ipa: "/ˈsɪs.təm/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "系統", def_en: "a set of connected things or parts forming a complex whole", sentence: "The educational system needs reform.", sentence_trans: "教育系統需要改革。", synonyms: ["structure", "scheme"], phrases: [] }] }]
        },
        {
            id: "exp_t01", word: "Technology", ipa: "/tekˈnɒl.ə.dʒi/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "科技", def_en: "the application of scientific knowledge for practical purposes", sentence: "Modern technology has transformed our lives.", sentence_trans: "現代科技改變了我們的生活。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_t02", word: "Term", ipa: "/tɜːm/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "術語；期限", def_en: "a word or phrase used to describe a thing or to express a concept; a fixed or limited period", sentence: "In the long term, this investment will pay off.", sentence_trans: "從長遠來看，這項投資會有回報。", synonyms: ["word", "duration"], phrases: ["in terms of"] }] }]
        },
        {
            id: "exp_t03", word: "Theory", ipa: "/ˈθɪə.ri/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "理論", def_en: "a supposition or a system of ideas intended to explain something", sentence: "Darwin's theory of evolution.", sentence_trans: "達爾文的進化論。", synonyms: ["hypothesis", "thesis"], phrases: ["in theory"] }] }]
        },
        {
            id: "exp_t04", word: "Therefore", ipa: "/ˈðeə.fɔːr/", priority: 10,
            meanings: [{ pos: "adv.", items: [{ def_zh: "因此", def_en: "for that reason; consequently", sentence: "He was late, therefore he missed the bus.", sentence_trans: "他遲到了，因此錯過了公車。", synonyms: ["consequently", "so"], phrases: [] }] }]
        },
        {
            id: "exp_t05", word: "Type", ipa: "/taɪp/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "類型", def_en: "a category of people or things having common characteristics", sentence: "What type of music do you like?", sentence_trans: "你喜歡什麼類型的音樂？", synonyms: ["kind", "sort"], phrases: [] }] }]
        },
        {
            id: "exp_v01", word: "Value", ipa: "/ˈvæl.juː/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "價值", def_en: "the regard that something is held to deserve; the importance, worth, or usefulness of something", sentence: "This painting is of great value.", sentence_trans: "這幅畫價值連城。", synonyms: ["worth", "merit"], phrases: [] }] }]
        },
        {
            id: "exp_v02", word: "Various", ipa: "/ˈveə.ri.əs/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "各種的", def_en: "different from one another; of different kinds or sorts", sentence: "There are various reasons for this.", sentence_trans: "這有各種原因。", synonyms: ["diverse", "different"], phrases: [] }] }]
        },
        {
            id: "exp_v03", word: "View", ipa: "/vjuː/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "觀點；景色", def_en: "the ability to see something or to be seen from a particular place; a particular way of considering or regarding something", sentence: "In my view, this is the best solution.", sentence_trans: "在我看來，這是最好的解決方案。", synonyms: ["opinion", "sight"], phrases: ["point of view"] }] }]
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
            entry.source = "expert_patch_part2"; 
            
            window.VOCAB_LIBRARY.push(entry);
            existingWords.add(lowerWord);
            addedCount++;
        }
    };

    // 執行補丁
    FULL_CONTENT_PATCH_P2.forEach(entry => addWord(entry));

    console.log(`[Smart Content Patch] Part 2 Execution Complete.`);
    console.log(`  - 📚 Successfully Integrated: ${addedCount} high-quality words (F-Z).`);
    console.log(`  - 🔢 Total Library Size: ${window.VOCAB_LIBRARY.length}`);

})();