// =================================================================================
// 🛠️ 雅思單字庫智慧補丁 (Smart Vocab Patch - High Quality Content Part 1)
// =================================================================================
// 範圍：雅思核心補漏字 (A-G) - 補足您目前檔案中缺失的基礎與高頻詞彙
// 內容：包含完整 IPA 音標、詞性、中英文定義、雅思例句
// 機制：自動檢查並補入 window.VOCAB_LIBRARY

(function() {
    console.log("🚀 Initializing High-Quality Content Patch (A-G)...");

    const FULL_CONTENT_PATCH = [
        // =========================================================================
        // 🅰️ A - Missing Core Words
        // =========================================================================
        {
            id: "exp_a01", word: "Abandon", ipa: "/əˈbæn.dən/", priority: 8,
            meanings: [{ pos: "v.", items: [{ def_zh: "遺棄；放棄", def_en: "cease to support or look after; give up completely", sentence: "The government should not abandon its commitment to social welfare reforms.", sentence_trans: "政府不應放棄其對社會福利改革的承諾。", synonyms: ["desert", "forsake"], phrases: ["abandon hope"] }] }]
        },
        {
            id: "exp_a02", word: "Ability", ipa: "/əˈbɪl.ə.ti/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "能力；才能", def_en: "possession of the means or skill to do something", sentence: "Cognitive ability is often a key predictor of academic success.", sentence_trans: "認知能力通常是學業成功的關鍵預測指標。", synonyms: ["capability", "competence"], phrases: ["to the best of one's ability"] }] }]
        },
        {
            id: "exp_a03", word: "Absorb", ipa: "/əbˈzɔːb/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "吸收；理解", def_en: "take in or soak up (energy, or a liquid or other substance); take in information", sentence: "Students need time to absorb complex information before being tested.", sentence_trans: "學生需要時間來吸收複雜的資訊，然後才能接受測試。", synonyms: ["soak up", "digest"], phrases: [] }] }]
        },
        {
            id: "exp_a04", word: "Abstract", ipa: "/ˈæb.strækt/", priority: 8,
            meanings: [{ pos: "adj.", items: [{ def_zh: "抽象的", def_en: "existing in thought or as an idea but not having a physical or concrete existence", sentence: "Mathematics often deals with abstract concepts that can be difficult to visualize.", sentence_trans: "數學經常處理難以具象化的抽象概念。", synonyms: ["theoretical", "conceptual"], phrases: ["abstract art"] }] }]
        },
        {
            id: "exp_a05", word: "Academic", ipa: "/ˌæk.əˈdem.ɪk/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "學術的", def_en: "relating to education and scholarship", sentence: "Academic integrity is fundamental to the reputation of any university.", sentence_trans: "學術誠信對任何大學的聲譽都至關重要。", synonyms: ["scholarly", "educational"], phrases: ["academic year", "academic achievement"] }] }]
        },
        {
            id: "exp_a06", word: "Accept", ipa: "/əkˈsept/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "接受；認可", def_en: "consent to receive; believe or come to recognize as valid", sentence: "It is difficult to accept that climate change is irreversible without immediate action.", sentence_trans: "很難接受如果不立即採取行動，氣候變遷將是不可逆轉的。", synonyms: ["receive", "acknowledge"], phrases: [] }] }]
        },
        {
            id: "exp_a07", word: "Access", ipa: "/ˈæk.ses/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "進入權；使用機會", def_en: "the means or opportunity to approach or enter a place", sentence: "Universal access to healthcare is a human right.", sentence_trans: "普及的醫療保健使用權是一項人權。", synonyms: ["entry", "admission"], phrases: ["gain access"] }] },
                { pos: "v.", items: [{ def_zh: "存取；接近", def_en: "approach or enter; obtain (data)", sentence: "Students can access the library database from home.", sentence_trans: "學生可以在家存取圖書館資料庫。", synonyms: ["retrieve"], phrases: [] }] }
            ]
        },
        {
            id: "exp_a08", word: "Achieve", ipa: "/əˈtʃiːv/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "實現；達成", def_en: "successfully bring about or reach (a desired objective) by effort, skill, or courage", sentence: "To achieve sustainability, industries must reduce their carbon footprint.", sentence_trans: "為了實現永續發展，工業界必須減少其碳足跡。", synonyms: ["attain", "accomplish"], phrases: ["achieve a goal"] }] }]
        },
        {
            id: "exp_a09", word: "Acquire", ipa: "/əˈkwaɪər/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "獲得；習得", def_en: "buy or obtain (an asset or object) for oneself; learn or develop (a skill, habit, or quality)", sentence: "Language acquisition is easier for children than for adults.", sentence_trans: "對兒童來說，語言習得比成人更容易。(註: 例句用 acquisition，動詞用法: acquire knowledge)", synonyms: ["obtain", "gain"], phrases: [] }] }]
        },
        {
            id: "exp_a10", word: "Action", ipa: "/ˈæk.ʃən/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "行動；作用", def_en: "the fact or process of doing something, typically to achieve an aim", sentence: "Immediate action is required to prevent further environmental damage.", sentence_trans: "需要立即採取行動以防止進一步的環境破壞。", synonyms: ["measure", "step"], phrases: ["take action"] }] }]
        },
        {
            id: "exp_a11", word: "Adapt", ipa: "/əˈdæpt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "適應；改編", def_en: "make (something) suitable for a new use or purpose; modify", sentence: "Species must adapt to changing environments to survive.", sentence_trans: "物種必須適應變化的環境才能生存。", synonyms: ["adjust", "modify"], phrases: ["adapt to"] }] }]
        },
        {
            id: "exp_a12", word: "Advantage", ipa: "/ədˈvɑːn.tɪdʒ/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "優勢；有利條件", def_en: "a condition or circumstance that puts one in a favorable or superior position", sentence: "One major advantage of online learning is flexibility.", sentence_trans: "線上學習的一個主要優勢是靈活性。", synonyms: ["benefit", "asset"], phrases: ["take advantage of"] }] }]
        },
        {
            id: "exp_a13", word: "Affect", ipa: "/əˈfekt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "影響", def_en: "have an effect on; make a difference to", sentence: "Economic instability significantly affects small businesses.", sentence_trans: "經濟不穩定顯著影響小型企業。", synonyms: ["influence", "impact"], phrases: [] }] }]
        },
        {
            id: "exp_a14", word: "Agency", ipa: "/ˈeɪ.dʒən.si/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "代理機構；局", def_en: "a business or organization established to provide a particular service", sentence: "The environmental protection agency enforces regulations on pollution.", sentence_trans: "環境保護局執行有關污染的法規。", synonyms: ["organization", "bureau"], phrases: ["travel agency"] }] }]
        },
        {
            id: "exp_a15", word: "Analyze", ipa: "/ˈæn.əl.aɪz/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "分析", def_en: "examine systematically and in detail", sentence: "Researchers analyzed the data to identify trends.", sentence_trans: "研究人員分析了數據以識別趨勢。", synonyms: ["examine", "inspect"], phrases: [] }] }]
        },
        {
            id: "exp_a16", word: "Annual", ipa: "/ˈæn.ju.əl/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "年度的", def_en: "occurring once every year", sentence: "The company published its annual report yesterday.", sentence_trans: "該公司昨天發布了年度報告。", synonyms: ["yearly"], phrases: ["annual general meeting"] }] }]
        },
        {
            id: "exp_a17", word: "Apparent", ipa: "/əˈpær.ənt/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "明顯的；表面的", def_en: "clearly visible or understood; seeming real or true, but not necessarily so", sentence: "It became apparent that the project would not be completed on time.", sentence_trans: "很明顯，該專案將無法按時完成。", synonyms: ["obvious", "evident"], phrases: [] }] }]
        },
        {
            id: "exp_a18", word: "Appeal", ipa: "/əˈpiːl/", priority: 9,
            meanings: [
                { pos: "n.", items: [{ def_zh: "吸引力；呼籲", def_en: "the quality of being attractive or interesting", sentence: "The appeal of living in a big city includes access to culture and jobs.", sentence_trans: "在大城市生活的吸引力包括接觸文化和就業機會。", synonyms: ["attraction", "charm"], phrases: ["mass appeal"] }] },
                { pos: "v.", items: [{ def_zh: "呼籲；上訴", def_en: "make a serious or urgent request", sentence: "Police are appealing for witnesses to the accident.", sentence_trans: "警方正在呼籲事故目擊者挺身而出。", synonyms: ["plead", "request"], phrases: [] }] }
            ]
        },
        {
            id: "exp_a19", word: "Approach", ipa: "/əˈprəʊtʃ/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "方法；途徑", def_en: "a way of dealing with something", sentence: "We need a new approach to solving the housing crisis.", sentence_trans: "我們需要一種解決住房危機的新方法。", synonyms: ["method", "strategy"], phrases: [] }] },
                { pos: "v.", items: [{ def_zh: "接近；著手處理", def_en: "come near to", sentence: "As the deadline approached, the team worked overtime.", sentence_trans: "隨著截止日期臨近，團隊加班工作。", synonyms: ["nears", "tackle"], phrases: [] }] }
            ]
        },
        {
            id: "exp_a20", word: "Appropriate", ipa: "/əˈprəʊ.pri.ət/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "適當的", def_en: "suitable or proper in the circumstances", sentence: "Is this movie appropriate for young children?", sentence_trans: "這部電影適合幼兒觀看嗎？", synonyms: ["suitable", "fitting"], phrases: [] }] }]
        },
        {
            id: "exp_a21", word: "Area", ipa: "/ˈeə.ri.ə/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "區域；領域", def_en: "a region or part of a town, a country, or the world; a subject or range of activity", sentence: "This is a restricted area.", sentence_trans: "這是一個限制區域。", synonyms: ["region", "zone", "field"], phrases: ["rural area"] }] }]
        },
        {
            id: "exp_a22", word: "Argue", ipa: "/ˈɑːɡ.juː/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "爭論；主張", def_en: "give reasons or cite evidence in support of an idea, action, or theory", sentence: "Critics argue that the tax cuts will benefit only the wealthy.", sentence_trans: "批評者主張減稅將只會讓富人受益。", synonyms: ["contend", "assert", "dispute"], phrases: [] }] }]
        },
        {
            id: "exp_a23", word: "Aspect", ipa: "/ˈæs.pekt/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "方面；層面", def_en: "a particular part or feature of something", sentence: "Climate change affects every aspect of our lives.", sentence_trans: "氣候變遷影響我們生活的各個層面。", synonyms: ["feature", "facet"], phrases: [] }] }]
        },

        // =========================================================================
        // 🅱️ B - Missing Core Words
        // =========================================================================
        {
            id: "exp_b01", word: "Balance", ipa: "/ˈbæl.əns/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "平衡；餘額", def_en: "an even distribution of weight enabling someone or something to remain upright", sentence: "Striking a work-life balance is essential for mental health.", sentence_trans: "取得工作與生活的平衡對心理健康至關重要。", synonyms: ["equilibrium", "stability"], phrases: ["balance sheet"] }] }]
        },
        {
            id: "exp_b02", word: "Base", ipa: "/beɪs/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "以...為基礎", def_en: "have as the foundation for", sentence: "The film is based on a true story.", sentence_trans: "這部電影是根據真實故事改編的。", synonyms: ["found", "ground"], phrases: ["based on"] }] }]
        },
        {
            id: "exp_b03", word: "Basic", ipa: "/ˈbeɪ.sɪk/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "基本的", def_en: "forming an essential foundation or starting point", sentence: "Access to clean water is a basic human right.", sentence_trans: "獲得乾淨的水是一項基本人權。", synonyms: ["fundamental", "elementary"], phrases: [] }] }]
        },
        {
            id: "exp_b04", word: "Basis", ipa: "/ˈbeɪ.sɪs/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "基礎；根據", def_en: "the underlying support or foundation for an idea, argument, or process", sentence: "We meet on a weekly basis.", sentence_trans: "我們每週見面一次。", synonyms: ["foundation", "footing"], phrases: ["on a daily basis"] }] }]
        },
        {
            id: "exp_b05", word: "Bear", ipa: "/beər/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "忍受；承擔", def_en: "endure (an ordeal or difficulty); take responsibility for", sentence: "She bore the responsibility alone.", sentence_trans: "她獨自承擔了責任。", synonyms: ["endure", "tolerate", "carry"], phrases: ["bear in mind"] }] }]
        },
        {
            id: "exp_b06", word: "Behavior", ipa: "/bɪˈheɪ.vjər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "行為", def_en: "the way in which one acts or conducts oneself", sentence: "Teachers monitor student behavior closely.", sentence_trans: "老師密切監控學生的行為。", synonyms: ["conduct", "action"], phrases: [] }] }]
        },
        {
            id: "exp_b07", word: "Belief", ipa: "/bɪˈliːf/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "信念；信仰", def_en: "trust, faith, or confidence in someone or something", sentence: "His strong belief in justice motivated his career choice.", sentence_trans: "他對正義的強烈信念激發了他的職業選擇。", synonyms: ["faith", "conviction"], phrases: [] }] }]
        },
        {
            id: "exp_b08", word: "Benefit", ipa: "/ˈben.ɪ.fɪt/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "利益；好處", def_en: "an advantage or profit gained from something", sentence: "The health benefits of regular exercise are well documented.", sentence_trans: "規律運動的健康益處有詳盡的記載。", synonyms: ["advantage", "profit"], phrases: [] }] },
                { pos: "v.", items: [{ def_zh: "獲益；有益於", def_en: "receive an advantage; profit", sentence: "Many students benefit from visual learning aids.", sentence_trans: "許多學生從視覺學習輔助工具中獲益。", synonyms: ["profit", "gain"], phrases: ["benefit from"] }] }
            ]
        },
        {
            id: "exp_b09", word: "Board", ipa: "/bɔːd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "委員會；董事會", def_en: "a group of people constituted as the decision-making body of an organization", sentence: "The board of directors approved the merger.", sentence_trans: "董事會批准了合併。", synonyms: ["committee", "panel"], phrases: ["on board"] }] }]
        },

        // =========================================================================
        // 🇨 C - Missing Core Words
        // =========================================================================
        {
            id: "exp_c01", word: "Calculate", ipa: "/ˈkæl.kjə.leɪt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "計算；估算", def_en: "determine (the amount or number of something) mathematically", sentence: "Scientists calculated the distance to the star.", sentence_trans: "科學家計算了到那顆恆星的距離。", synonyms: ["compute", "estimate"], phrases: [] }] }]
        },
        {
            id: "exp_c02", word: "Campaign", ipa: "/kæmˈpeɪn/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "運動；活動", def_en: "a series of military or political operations intended to achieve a particular goal", sentence: "The election campaign was fierce.", sentence_trans: "選舉活動非常激烈。", synonyms: ["movement", "operation"], phrases: ["marketing campaign"] }] }]
        },
        {
            id: "exp_c03", word: "Candidate", ipa: "/ˈkæn.dɪ.dət/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "候選人", def_en: "a person who applies for a job or is nominated for election", sentence: "He is the leading candidate for the presidency.", sentence_trans: "他是總統職位的領先候選人。", synonyms: ["applicant", "contender"], phrases: [] }] }]
        },
        {
            id: "exp_c04", word: "Capable", ipa: "/ˈkeɪ.pə.bəl/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "有能力的", def_en: "having the ability, fitness, or quality necessary to do or achieve a specified thing", sentence: "She is a highly capable executive.", sentence_trans: "她是一位非常有能力的高管。", synonyms: ["competent", "able"], phrases: ["capable of"] }] }]
        },
        {
            id: "exp_c05", word: "Capacity", ipa: "/kəˈpæs.ə.ti/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "容量；能力", def_en: "the maximum amount that something can contain; ability to do something", sentence: "The stadium has a seating capacity of 50,000.", sentence_trans: "體育場可容納五萬人。", synonyms: ["volume", "ability"], phrases: [] }] }]
        },
        {
            id: "exp_c06", word: "Capital", ipa: "/ˈkæp.ɪ.təl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "資本；首都", def_en: "wealth in the form of money or other assets; the most important city or town of a country", sentence: "The company needs to raise more capital to expand.", sentence_trans: "公司需要籌集更多資本來擴張。", synonyms: ["funds", "money"], phrases: ["capital city"] }] }]
        },
        {
            id: "exp_c07", word: "Career", ipa: "/kəˈrɪər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "職業；生涯", def_en: "an occupation undertaken for a significant period of a person's life", sentence: "She pursued a career in medicine.", sentence_trans: "她從事醫學職業。", synonyms: ["profession", "occupation"], phrases: [] }] }]
        },
        {
            id: "exp_c08", word: "Category", ipa: "/ˈkæt.ə.ɡri/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "類別", def_en: "a class or division of people or things regarded as having particular shared characteristics", sentence: "The books are organized by category.", sentence_trans: "書籍按類別排列。", synonyms: ["class", "group"], phrases: [] }] }]
        },
        {
            id: "exp_c09", word: "Cause", ipa: "/kɔːz/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "原因；事業", def_en: "a person or thing that gives rise to an action, phenomenon, or condition", sentence: "The exact cause of the fire is still unknown.", sentence_trans: "火災的確切原因仍然不明。", synonyms: ["reason", "source"], phrases: [] }] },
                { pos: "v.", items: [{ def_zh: "引起；導致", def_en: "make (something) happen", sentence: "The storm caused widespread damage.", sentence_trans: "暴風雨造成了廣泛的破壞。", synonyms: ["bring about", "lead to"], phrases: [] }] }
            ]
        },
        {
            id: "exp_c10", word: "Central", ipa: "/ˈsen.trəl/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "中央的；核心的", def_en: "of, at, or forming the center; of the greatest importance", sentence: "The central theme of the novel is forgiveness.", sentence_trans: "這部小說的核心主題是寬恕。", synonyms: ["middle", "core", "key"], phrases: [] }] }]
        },
        {
            id: "exp_c11", word: "Challenge", ipa: "/ˈtʃæl.ɪndʒ/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "挑戰", def_en: "a task or situation that tests someone's abilities", sentence: "Climate change is the greatest challenge facing humanity.", sentence_trans: "氣候變遷是人類面臨的最大挑戰。", synonyms: ["difficulty", "obstacle"], phrases: [] }] },
                { pos: "v.", items: [{ def_zh: "質疑；挑戰", def_en: "dispute the truth or validity of", sentence: "They challenged the legality of the new law.", sentence_trans: "他們質疑新法律的合法性。", synonyms: ["question", "dispute"], phrases: [] }] }
            ]
        },
        {
            id: "exp_c12", word: "Change", ipa: "/tʃeɪndʒ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "改變", def_en: "make or become different", sentence: "Technology has changed the way we communicate.", sentence_trans: "科技改變了我們溝通的方式。", synonyms: ["alter", "modify"], phrases: [] }] }]
        },
        {
            id: "exp_c13", word: "Character", ipa: "/ˈkær.ək.tər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "性格；角色", def_en: "the mental and moral qualities distinctive to an individual", sentence: "She is a woman of strong character.", sentence_trans: "她是一個性格堅強的女人。", synonyms: ["personality", "nature"], phrases: [] }] }]
        },
        {
            id: "exp_c14", word: "Characteristic", ipa: "/ˌkær.ək.təˈrɪs.tɪk/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "特徵", def_en: "a feature or quality belonging typically to a person, place, or thing", sentence: "One characteristic of the disease is extreme fatigue.", sentence_trans: "這種疾病的一個特徵是極度疲勞。", synonyms: ["feature", "trait"], phrases: [] }] }]
        },
        {
            id: "exp_c15", word: "Claim", ipa: "/kleɪm/", priority: 10,
            meanings: [
                { pos: "v.", items: [{ def_zh: "聲稱；索取", def_en: "state or assert that something is the case", sentence: "He claims to have seen a ghost.", sentence_trans: "他聲稱見過鬼。", synonyms: ["assert", "declare"], phrases: [] }] },
                { pos: "n.", items: [{ def_zh: "聲稱；索賠", def_en: "an assertion of the truth of something", sentence: "The court rejected his claim.", sentence_trans: "法院駁回了他的主張。", synonyms: ["assertion", "allegation"], phrases: [] }] }
            ]
        },
        {
            id: "exp_c16", word: "Code", ipa: "/kəʊd/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "法規；代碼", def_en: "a system of words, letters, figures, or other symbols used to represent others", sentence: "The building code requires strict safety standards.", sentence_trans: "建築法規要求嚴格的安全標準。", synonyms: ["cipher", "regulations"], phrases: ["dress code"] }] }]
        },
        {
            id: "exp_c17", word: "Combine", ipa: "/kəmˈbaɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "結合", def_en: "unite; merge", sentence: "The two companies combined to form a giant corporation.", sentence_trans: "這兩家公司合併成了一個巨大的企業。", synonyms: ["merge", "unite"], phrases: [] }] }]
        },
        {
            id: "exp_c18", word: "Commercial", ipa: "/kəˈmɜː.ʃəl/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "商業的", def_en: "concerned with or engaged in commerce", sentence: "The area is zoned for commercial use.", sentence_trans: "該區域被規劃為商業用途。", synonyms: ["business", "trade"], phrases: [] }] }]
        },
        {
            id: "exp_c19", word: "Commit", ipa: "/kəˈmɪt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "承諾；犯(罪)", def_en: "pledge or bind (a person or an organization) to a certain course or policy", sentence: "The government committed millions to the project.", sentence_trans: "政府承諾為該專案投入數百萬。", synonyms: ["pledge", "devote"], phrases: ["commit a crime"] }] }]
        },
        {
            id: "exp_c20", word: "Common", ipa: "/ˈkɒm.ən/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "常見的；共同的", def_en: "occurring, found, or done often; prevalent", sentence: "Heart disease is a common cause of death.", sentence_trans: "心臟病是常見的死因。", synonyms: ["frequent", "widespread"], phrases: ["in common"] }] }]
        },
        {
            id: "exp_c21", word: "Communicate", ipa: "/kəˈmjuː.nɪ.keɪt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "溝通", def_en: "share or exchange information, news, or ideas", sentence: "Dolphins use sound to communicate with each other.", sentence_trans: "海豚用聲音互相溝通。", synonyms: ["convey", "transmit"], phrases: [] }] }]
        },
        {
            id: "exp_c22", word: "Community", ipa: "/kəˈmjuː.nə.ti/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "社區；社群", def_en: "a group of people living in the same place or having a particular characteristic in common", sentence: "The festival brought the whole community together.", sentence_trans: "節日讓整個社區團結在一起。", synonyms: ["society", "district"], phrases: [] }] }]
        },
        {
            id: "exp_c23", word: "Compare", ipa: "/kəmˈpeər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "比較", def_en: "estimate, measure, or note the similarity or dissimilarity between", sentence: "Compared to last year, profits have doubled.", sentence_trans: "與去年相比，利潤翻了一番。", synonyms: ["contrast"], phrases: ["compare with", "compare to"] }] }]
        },
        {
            id: "exp_c24", word: "Compete", ipa: "/kəmˈpiːt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "競爭", def_en: "strive to gain or win something by defeating or establishing superiority over others", sentence: "Several companies are competing for the contract.", sentence_trans: "幾家公司正在爭奪這份合約。", synonyms: ["contend", "vie"], phrases: [] }] }]
        },
        {
            id: "exp_c25", word: "Complex", ipa: "/ˈkɒm.pleks/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "複雜的", def_en: "consisting of many different and connected parts", sentence: "The human brain is a complex organ.", sentence_trans: "人腦是一個複雜的器官。", synonyms: ["complicated", "intricate"], phrases: [] }] }]
        },
        {
            id: "exp_c26", word: "Component", ipa: "/kəmˈpəʊ.nənt/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "成分；零件", def_en: "a part or element of a larger whole", sentence: "Trust is a vital component of friendship.", sentence_trans: "信任是友誼的重要組成部分。", synonyms: ["element", "part"], phrases: [] }] }]
        },
        {
            id: "exp_c27", word: "Concept", ipa: "/ˈkɒn.sept/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "概念", def_en: "an abstract idea; a general notion", sentence: "The concept of infinity is difficult to grasp.", sentence_trans: "無限的概念很難掌握。", synonyms: ["idea", "theory"], phrases: [] }] }]
        },
        {
            id: "exp_c28", word: "Concern", ipa: "/kənˈsɜːn/", priority: 10,
            meanings: [
                { pos: "n.", items: [{ def_zh: "擔憂；關注", def_en: "anxiety; worry", sentence: "There is growing concern about pollution.", sentence_trans: "人們對污染問題越來越擔憂。", synonyms: ["worry", "anxiety"], phrases: [] }] },
                { pos: "v.", items: [{ def_zh: "使擔憂；涉及", def_en: "worry (someone); relate to", sentence: "The report concerns the future of the industry.", sentence_trans: "這份報告涉及該行業的未來。", synonyms: ["worry", "involve"], phrases: ["as far as I am concerned"] }] }
            ]
        },
        {
            id: "exp_c29", word: "Conduct", ipa: "/kənˈdʌkt/", priority: 10,
            meanings: [
                { pos: "v.", items: [{ def_zh: "進行；實施", def_en: "organize and carry out", sentence: "They conducted a survey to gather opinions.", sentence_trans: "他們進行了一項調查以收集意見。", synonyms: ["carry out", "manage"], phrases: [] }] },
                { pos: "n.", items: [{ def_zh: "行為", def_en: "the manner in which a person behaves", sentence: "His conduct was unprofessional.", sentence_trans: "他的行為不專業。", synonyms: ["behavior"], phrases: [] }] }
            ]
        },
        {
            id: "exp_c30", word: "Conflict", ipa: "/ˈkɒn.flɪkt/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "衝突", def_en: "a serious disagreement or argument", sentence: "The conflict between the two nations escalated.", sentence_trans: "兩國之間的衝突升級了。", synonyms: ["dispute", "clash"], phrases: [] }] }]
        },
        {
            id: "exp_c31", word: "Connect", ipa: "/kəˈnekt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "連接；聯繫", def_en: "bring together or into contact so that a real or notional link is established", sentence: "The tunnel connects the island to the mainland.", sentence_trans: "這條隧道將島嶼與大陸連接起來。", synonyms: ["link", "join"], phrases: [] }] }]
        },
        {
            id: "exp_c32", word: "Consider", ipa: "/kənˈsɪd.ər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "考慮；認為", def_en: "think carefully about (something), typically before making a decision", sentence: "We are considering buying a new house.", sentence_trans: "我們正在考慮買一棟新房子。", synonyms: ["contemplate", "regard"], phrases: [] }] }]
        },
        {
            id: "exp_c33", word: "Constant", ipa: "/ˈkɒn.stənt/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "持續的；不變的", def_en: "occurring continuously over a period of time", sentence: "The constant noise from the construction site is annoying.", sentence_trans: "建築工地持續不斷的噪音很煩人。", synonyms: ["continuous", "steady"], phrases: [] }] }]
        },
        {
            id: "exp_c34", word: "Construct", ipa: "/kənˈstrʌkt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "建造；建構", def_en: "build or erect (something, typically a building, road, or machine)", sentence: "The city plans to construct a new bridge.", sentence_trans: "該市計畫建造一座新橋。", synonyms: ["build", "erect"], phrases: [] }] }]
        },
        {
            id: "exp_c35", word: "Consume", ipa: "/kənˈsjuːm/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "消耗；消費", def_en: "use up (a resource)", sentence: "These lights consume less electricity.", sentence_trans: "這些燈消耗較少的電力。", synonyms: ["use", "expend"], phrases: [] }] }]
        },
        {
            id: "exp_c36", word: "Contact", ipa: "/ˈkɒn.tækt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "接觸；聯繫", def_en: "the state or condition of physical touching; communication", sentence: "I lost contact with him years ago.", sentence_trans: "我幾年前就和他失去了聯繫。", synonyms: ["touch", "communication"], phrases: ["keep in contact"] }] }]
        },
        {
            id: "exp_c37", word: "Contain", ipa: "/kənˈteɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "包含；容納", def_en: "have or hold (someone or something) within", sentence: "This bottle contains water.", sentence_trans: "這個瓶子裝有水。", synonyms: ["hold", "include"], phrases: [] }] }]
        },
        {
            id: "exp_c38", word: "Content", ipa: "/ˈkɒn.tent/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "內容", def_en: "the things that are held or included in something", sentence: "The content of the letter was confidential.", sentence_trans: "這封信的內容是機密的。", synonyms: ["substance", "matter"], phrases: ["table of contents"] }] }]
        },
        {
            id: "exp_c39", word: "Context", ipa: "/ˈkɒn.tekst/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "語境；背景", def_en: "the circumstances that form the setting for an event", sentence: "It is important to understand the historical context of the novel.", sentence_trans: "了解這部小說的歷史背景很重要。", synonyms: ["setting", "background"], phrases: ["out of context"] }] }]
        },
        {
            id: "exp_c40", word: "Continue", ipa: "/kənˈtɪn.juː/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "繼續", def_en: "persist in an activity or process", sentence: "The rain continued all day.", sentence_trans: "雨下了一整天。", synonyms: ["persist", "carry on"], phrases: [] }] }]
        },
        {
            id: "exp_c41", word: "Contract", ipa: "/ˈkɒn.trækt/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "合約", def_en: "a written or spoken agreement", sentence: "They signed a contract for the sale of the property.", sentence_trans: "他們簽署了房產出售合約。", synonyms: ["agreement", "deal"], phrases: [] }] }]
        },
        {
            id: "exp_c42", word: "Contrast", ipa: "/ˈkɒn.trɑːst/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "對比；差異", def_en: "the state of being strikingly different from something else", sentence: "There is a sharp contrast between the rich and the poor.", sentence_trans: "貧富之間存在著鮮明的對比。", synonyms: ["difference", "disparity"], phrases: ["in contrast to"] }] }]
        },
        {
            id: "exp_c43", word: "Contribute", ipa: "/kənˈtrɪb.juːt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "貢獻；促成", def_en: "give (something) in order to help achieve or provide something", sentence: "Everyone should contribute to the discussion.", sentence_trans: "每個人都應該為討論做出貢獻。", synonyms: ["donate", "supply"], phrases: ["contribute to"] }] }]
        },
        {
            id: "exp_c44", word: "Control", ipa: "/kənˈtrəʊl/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "控制；管理", def_en: "determine the behavior or supervise the running of", sentence: "The government is trying to control inflation.", sentence_trans: "政府正試圖控制通貨膨脹。", synonyms: ["manage", "regulate"], phrases: ["out of control"] }] }]
        },
        {
            id: "exp_c45", word: "Convince", ipa: "/kənˈvɪns/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "說服", def_en: "cause (someone) to believe firmly in the truth of something", sentence: "I managed to convince him to stay.", sentence_trans: "我設法說服他留下來。", synonyms: ["persuade", "satisfy"], phrases: [] }] }]
        },
        {
            id: "exp_c46", word: "Cooperate", ipa: "/kəʊˈɒp.ər.eɪt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "合作", def_en: "act jointly; work toward the same end", sentence: "We need to cooperate to finish the job.", sentence_trans: "我們需要合作完成這項工作。", synonyms: ["collaborate", "assist"], phrases: [] }] }]
        },
        {
            id: "exp_c47", word: "Core", ipa: "/kɔːr/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "核心", def_en: "the part of something that is central to its existence or character", sentence: "Customer service is at the core of our business.", sentence_trans: "客戶服務是我們業務的核心。", synonyms: ["center", "heart"], phrases: [] }] }]
        },
        {
            id: "exp_c48", word: "Corporate", ipa: "/ˈkɔː.pər.ət/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "公司的；企業的", def_en: "relating to a corporation, especially a large company or group", sentence: "Corporate responsibility is becoming increasingly important.", sentence_trans: "企業責任正變得越來越重要。", synonyms: ["business", "company"], phrases: [] }] }]
        },
        {
            id: "exp_c49", word: "Cost", ipa: "/kɒst/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "成本；代價", def_en: "an amount that has to be paid or spent to buy or obtain something", sentence: "The cost of living is rising.", sentence_trans: "生活成本正在上升。", synonyms: ["price", "expense"], phrases: ["at all costs"] }] }]
        },
        {
            id: "exp_c50", word: "Council", ipa: "/ˈkaʊn.səl/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "委員會；議會", def_en: "an advisory, deliberative, or legislative body of people", sentence: "The city council voted on the new park proposal.", sentence_trans: "市議會對新公園提案進行了表決。", synonyms: ["board", "committee"], phrases: [] }] }]
        },
        {
            id: "exp_c51", word: "Create", ipa: "/kriˈeɪt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "創造", def_en: "bring (something) into existence", sentence: "The artist created a beautiful sculpture.", sentence_trans: "這位藝術家創造了一座美麗的雕塑。", synonyms: ["produce", "make"], phrases: [] }] }]
        },
        {
            id: "exp_c52", word: "Credit", ipa: "/ˈkred.ɪt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "信用；學分；讚譽", def_en: "the ability of a customer to obtain goods or services before payment; praise", sentence: "She deserves credit for the success of the project.", sentence_trans: "這項專案的成功歸功於她。", synonyms: ["praise", "approval"], phrases: ["credit card"] }] }]
        },
        {
            id: "exp_c53", word: "Crisis", ipa: "/ˈkraɪ.sɪs/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "危機", def_en: "a time of intense difficulty, trouble, or danger", sentence: "The country is facing an economic crisis.", sentence_trans: "該國正面臨經濟危機。", synonyms: ["emergency", "disaster"], phrases: [] }] }]
        },
        {
            id: "exp_c54", word: "Criterion", ipa: "/kraɪˈtɪə.ri.ən/", priority: 8,
            meanings: [{ pos: "n.", items: [{ def_zh: "標準；準則", def_en: "a principle or standard by which something may be judged or decided", sentence: "Academic ability is not the only criterion for admission.", sentence_trans: "學術能力並非入學的唯一標準。", synonyms: ["standard", "measure"], phrases: [] }] }]
        },
        {
            id: "exp_c55", word: "Critical", ipa: "/ˈkrɪt.ɪ.kəl/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "批判性的；關鍵的", def_en: "expressing adverse or disapproving comments; having the potential to become disastrous", sentence: "Critical thinking is a key skill.", sentence_trans: "批判性思考是一項關鍵技能。", synonyms: ["crucial", "vital", "disapproving"], phrases: [] }] }]
        },
        {
            id: "exp_c56", word: "Criticize", ipa: "/ˈkrɪt.ɪ.saɪz/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "批評", def_en: "indicate the faults of (someone or something) in a disapproving way", sentence: "He was criticized for his lack of leadership.", sentence_trans: "他因缺乏領導能力而受到批評。", synonyms: ["blame", "condemn"], phrases: [] }] }]
        },
        {
            id: "exp_c57", word: "Culture", ipa: "/ˈkʌl.tʃər/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "文化", def_en: "the arts and other manifestations of human intellectual achievement regarded collectively", sentence: "We must respect local culture and traditions.", sentence_trans: "我們必須尊重當地的文化和傳統。", synonyms: ["customs", "society"], phrases: [] }] }]
        },
        {
            id: "exp_c58", word: "Current", ipa: "/ˈkʌr.ənt/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "目前的", def_en: "belonging to the present time; happening or being used or done now", sentence: "The current economic situation is unstable.", sentence_trans: "目前的經濟形勢不穩定。", synonyms: ["present", "existing"], phrases: [] }] }]
        },
        {
            id: "exp_c59", word: "Cycle", ipa: "/ˈsaɪ.kəl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "循環；週期", def_en: "a series of events that are regularly repeated in the same order", sentence: "The life cycle of a butterfly is fascinating.", sentence_trans: "蝴蝶的生命週期很迷人。", synonyms: ["round", "rotation"], phrases: [] }] }]
        },

        // =========================================================================
        // 🇩 D - Missing Core Words
        // =========================================================================
        {
            id: "exp_d01", word: "Data", ipa: "/ˈdeɪ.tə/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "數據；資料", def_en: "facts and statistics collected together for reference or analysis", sentence: "The data suggests a link between diet and health.", sentence_trans: "數據顯示飲食與健康之間存在關聯。", synonyms: ["statistics", "information"], phrases: ["data processing"] }] }]
        },
        {
            id: "exp_d02", word: "Debate", ipa: "/dɪˈbeɪt/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "辯論；爭論", def_en: "a formal discussion on a particular topic", sentence: "The debate over gun control continues.", sentence_trans: "關於槍支管制的辯論仍在繼續。", synonyms: ["discussion", "argument"], phrases: [] }] }]
        },
        {
            id: "exp_d03", word: "Decade", ipa: "/ˈdek.eɪd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "十年", def_en: "a period of ten years", sentence: "Prices have doubled over the last decade.", sentence_trans: "在過去十年中，價格翻了一番。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_d04", word: "Decline", ipa: "/dɪˈklaɪn/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "下降；婉拒", def_en: "become smaller, fewer, or less; decrease", sentence: "The population has declined in recent years.", sentence_trans: "近年來人口有所下降。", synonyms: ["decrease", "drop", "reject"], phrases: [] }] }]
        },
        {
            id: "exp_d05", word: "Define", ipa: "/dɪˈfaɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "定義；界定", def_en: "state or describe exactly the nature, scope, or meaning of", sentence: "It is difficult to define the concept of beauty.", sentence_trans: "很難定義美的概念。", synonyms: ["describe", "explain"], phrases: [] }] }]
        },
        {
            id: "exp_d06", word: "Definite", ipa: "/ˈdef.ɪ.nət/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "確定的；明確的", def_en: "clearly stated or decided; not vague or doubtful", sentence: "We need a definite answer by tomorrow.", sentence_trans: "我們需要在明天之前得到一個確定的答案。", synonyms: ["certain", "clear"], phrases: [] }] }]
        },
        {
            id: "exp_d07", word: "Demand", ipa: "/dɪˈmɑːnd/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "需求；要求", def_en: "an insistent and peremptory request", sentence: "There is a high demand for skilled workers.", sentence_trans: "對熟練工人的需求很高。", synonyms: ["request", "need"], phrases: ["in demand"] }] }]
        },
        {
            id: "exp_d08", word: "Democracy", ipa: "/dɪˈmɒk.rə.si/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "民主", def_en: "a system of government by the whole population or all the eligible members of a state", sentence: "Freedom of speech is a pillar of democracy.", sentence_trans: "言論自由是民主的支柱。", synonyms: [], phrases: [] }] }]
        },
        {
            id: "exp_d09", word: "Demonstrate", ipa: "/ˈdem.ən.streɪt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "示範；證明", def_en: "clearly show the existence or truth of something", sentence: "The study demonstrates the effectiveness of the drug.", sentence_trans: "該研究證明了該藥物的有效性。", synonyms: ["show", "prove"], phrases: [] }] }]
        },
        {
            id: "exp_d10", word: "Deny", ipa: "/dɪˈnaɪ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "否認；拒絕給予", def_en: "state that one refuses to admit the truth or existence of", sentence: "He denied any involvement in the crime.", sentence_trans: "他否認參與了該罪行。", synonyms: ["refute", "reject"], phrases: [] }] }]
        },
        {
            id: "exp_d11", word: "Depart", ipa: "/dɪˈpɑːt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "離開；出發", def_en: "leave, especially in order to start a journey", sentence: "The train departs at 5 p.m.", sentence_trans: "火車下午五點出發。", synonyms: ["leave", "exit"], phrases: [] }] }]
        },
        {
            id: "exp_d12", word: "Depend", ipa: "/dɪˈpend/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "依賴；取決於", def_en: "be controlled or determined by", sentence: "Our success depends on your effort.", sentence_trans: "我們的成功取決於你的努力。", synonyms: ["rely", "hinge"], phrases: ["depend on"] }] }]
        },
        {
            id: "exp_d13", word: "Describe", ipa: "/dɪˈskraɪb/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "描述", def_en: "give an account in words of (someone or something)", sentence: "Can you describe the man you saw?", sentence_trans: "你能描述一下你看到的那個男人嗎？", synonyms: ["portray", "detail"], phrases: [] }] }]
        },
        {
            id: "exp_d14", word: "Design", ipa: "/dɪˈzaɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "設計", def_en: "decide upon the look and functioning of", sentence: "The building was designed by a famous architect.", sentence_trans: "這棟建築是由一位著名建築師設計的。", synonyms: ["plan", "create"], phrases: [] }] }]
        },
        {
            id: "exp_d15", word: "Despite", ipa: "/dɪˈspaɪt/", priority: 10,
            meanings: [{ pos: "prep.", items: [{ def_zh: "儘管", def_en: "without being affected by; in spite of", sentence: "He persisted despite the difficulties.", sentence_trans: "儘管有困難，他仍然堅持。", synonyms: ["in spite of"], phrases: [] }] }]
        },
        {
            id: "exp_d16", word: "Detail", ipa: "/ˈdiː.teɪl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "細節", def_en: "an individual feature, fact, or item", sentence: "Please provide full details of the incident.", sentence_trans: "請提供事件的全部細節。", synonyms: ["particular", "fact"], phrases: ["in detail"] }] }]
        },
        {
            id: "exp_d17", word: "Determine", ipa: "/dɪˈtɜː.mɪn/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "決定；確定", def_en: "cause (something) to occur in a particular way; be the decisive factor in", sentence: "Your grades will determine which university you get into.", sentence_trans: "你的成績將決定你能進入哪所大學。", synonyms: ["decide", "control"], phrases: [] }] }]
        },
        {
            id: "exp_d18", word: "Develop", ipa: "/dɪˈvel.əp/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "發展；開發", def_en: "grow or cause to grow and become more mature, advanced, or elaborate", sentence: "Scientists are trying to develop a cure for the disease.", sentence_trans: "科學家正試圖開發一種治療該疾病的方法。", synonyms: ["grow", "evolve"], phrases: [] }] }]
        },
        {
            id: "exp_d19", word: "Device", ipa: "/dɪˈvaɪs/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "裝置；設備", def_en: "a thing made or adapted for a particular purpose", sentence: "Smartphones are powerful communication devices.", sentence_trans: "智慧型手機是強大的通訊裝置。", synonyms: ["gadget", "appliance"], phrases: [] }] }]
        },
        {
            id: "exp_d20", word: "Direct", ipa: "/daɪˈrekt/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "直接的", def_en: "extending or moving from one place to another by the shortest way", sentence: "Is there a direct flight to London?", sentence_trans: "有直飛倫敦的航班嗎？", synonyms: ["straight"], phrases: [] }] }]
        },
        {
            id: "exp_d21", word: "Disappear", ipa: "/ˌdɪs.əˈpɪər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "消失", def_en: "cease to be visible", sentence: "The sun disappeared behind the clouds.", sentence_trans: "太陽消失在雲層後面。", synonyms: ["vanish", "fade"], phrases: [] }] }]
        },
        {
            id: "exp_d22", word: "Discover", ipa: "/dɪˈskʌv.ər/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "發現", def_en: "find (something or someone) unexpectedly or in the course of a search", sentence: "Columbus discovered America in 1492.", sentence_trans: "哥倫布於1492年發現了美洲。(例句為歷史事實陳述)", synonyms: ["find", "locate"], phrases: [] }] }]
        },
        {
            id: "exp_d23", word: "Discuss", ipa: "/dɪˈskʌs/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "討論", def_en: "talk about (something) with another person or group of people", sentence: "We need to discuss the budget.", sentence_trans: "我們需要討論預算。", synonyms: ["talk over", "debate"], phrases: [] }] }]
        },
        {
            id: "exp_d24", word: "Disease", ipa: "/dɪˈziːz/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "疾病", def_en: "a disorder of structure or function in a human, animal, or plant", sentence: "Vaccination helps prevent the spread of disease.", sentence_trans: "疫苗接種有助於防止疾病傳播。", synonyms: ["illness", "sickness"], phrases: [] }] }]
        },
        {
            id: "exp_d25", word: "Display", ipa: "/dɪˈspleɪ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "展示；顯示", def_en: "make a prominent exhibition of (something) in a place where it can be easily seen", sentence: "The museum displays ancient artifacts.", sentence_trans: "博物館展示古代文物。", synonyms: ["show", "exhibit"], phrases: [] }] }]
        },
        {
            id: "exp_d26", word: "Distinct", ipa: "/dɪˈstɪŋkt/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "明顯的；截然不同的", def_en: "recognizably different in nature from something else", sentence: "There are three distinct types of memory.", sentence_trans: "有三種截然不同的記憶類型。", synonyms: ["different", "separate"], phrases: [] }] }]
        },
        {
            id: "exp_d27", word: "Distribute", ipa: "/dɪˈstrɪb.juːt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "分發；分配", def_en: "give shares of (something); deal out", sentence: "The organization distributes food to the homeless.", sentence_trans: "該組織向無家可歸者分發食物。", synonyms: ["give out", "allocate"], phrases: [] }] }]
        },
        {
            id: "exp_d28", word: "Divide", ipa: "/dɪˈvaɪd/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "分開；劃分", def_en: "separate or be separated into parts", sentence: "The river divides the city into two parts.", sentence_trans: "這條河將城市分成兩部分。", synonyms: ["split", "separate"], phrases: ["divide into"] }] }]
        },
        {
            id: "exp_d29", word: "Document", ipa: "/ˈdɒk.jə.mənt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "文件", def_en: "a piece of written, printed, or electronic matter that provides information", sentence: "Please sign the document at the bottom.", sentence_trans: "請在文件底部簽名。", synonyms: ["paper", "record"], phrases: [] }] }]
        },
        {
            id: "exp_d30", word: "Domestic", ipa: "/dəˈmes.tɪk/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "國內的；家庭的", def_en: "relating to the running of a home or to family relations; existing or occurring inside a particular country", sentence: "Domestic flights are cheaper than international ones.", sentence_trans: "國內航班比國際航班便宜。", synonyms: ["internal", "home"], phrases: ["domestic violence"] }] }]
        },
        {
            id: "exp_d31", word: "Doubt", ipa: "/daʊt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "懷疑", def_en: "a feeling of uncertainty or lack of conviction", sentence: "I have some doubt about his ability to do the job.", sentence_trans: "我對他勝任這份工作的能力有些懷疑。", synonyms: ["uncertainty", "hesitation"], phrases: ["no doubt"] }] }]
        },
        {
            id: "exp_d32", word: "Dramatic", ipa: "/drəˈmæt.ɪk/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "戲劇性的；巨大的", def_en: "relating to drama or the performance or study of drama; sudden and striking", sentence: "There has been a dramatic increase in sales.", sentence_trans: "銷售額有了戲劇性的增長。", synonyms: ["considerable", "substantial"], phrases: [] }] }]
        },
        {
            id: "exp_d33", word: "Due", ipa: "/djuː/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "到期的；預定的", def_en: "expected at or planned for at a certain time", sentence: "The assignment is due tomorrow.", sentence_trans: "作業明天到期。", synonyms: ["expected", "scheduled"], phrases: ["due to"] }] }]
        },
        {
            id: "exp_d34", word: "Duty", ipa: "/ˈdjuː.ti/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "責任；職責", def_en: "a moral or legal obligation; a task or action that someone is required to perform", sentence: "It is the duty of the police to protect the public.", sentence_trans: "保護公眾是警察的職責。", synonyms: ["responsibility", "obligation"], phrases: ["on duty"] }] }]
        },

        // =========================================================================
        // 🇪 E - Missing Core Words
        // =========================================================================
        {
            id: "exp_e01", word: "Economy", ipa: "/iˈkɒn.ə.mi/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "經濟", def_en: "the wealth and resources of a country or region", sentence: "Tourism contributes significantly to the local economy.", sentence_trans: "旅遊業對當地經濟貢獻良多。", synonyms: ["wealth", "financial system"], phrases: [] }] }]
        },
        {
            id: "exp_e02", word: "Effect", ipa: "/ɪˈfekt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "效果；影響", def_en: "a change that is a result or consequence of an action or other cause", sentence: "The new policy had a positive effect on the economy.", sentence_trans: "新政策對經濟產生了正面影響。", synonyms: ["result", "outcome"], phrases: ["cause and effect"] }] }]
        },
        {
            id: "exp_e03", word: "Effective", ipa: "/ɪˈfek.tɪv/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "有效的", def_en: "successful in producing a desired or intended result", sentence: "Vaccination is an effective way to prevent flu.", sentence_trans: "疫苗接種是預防流感的有效方法。", synonyms: ["successful", "efficacious"], phrases: [] }] }]
        },
        {
            id: "exp_e04", word: "Efficient", ipa: "/ɪˈfɪʃ.ənt/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "有效率的", def_en: "achieving maximum productivity with minimum wasted effort or expense", sentence: "Fuel-efficient cars save money on gas.", sentence_trans: "省油的汽車節省汽油錢。", synonyms: ["organized", "productive"], phrases: [] }] }]
        },
        {
            id: "exp_e05", word: "Effort", ipa: "/ˈef.ət/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "努力", def_en: "a vigorous or determined attempt", sentence: "He made a concerted effort to finish the work on time.", sentence_trans: "他齊心協力想按時完成工作。", synonyms: ["attempt", "endeavor"], phrases: ["make an effort"] }] }]
        },
        {
            id: "exp_e06", word: "Element", ipa: "/ˈel.ɪ.mənt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "要素；元素", def_en: "a part or aspect of something abstract", sentence: "Trust is a key element of a successful relationship.", sentence_trans: "信任是成功關係的關鍵要素。", synonyms: ["component", "part"], phrases: [] }] }]
        },
        {
            id: "exp_e07", word: "Eliminate", ipa: "/ɪˈlɪm.ɪ.neɪt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "消除；淘汰", def_en: "completely remove or get rid of (something)", sentence: "A healthy diet can help eliminate toxins from the body.", sentence_trans: "健康的飲食有助於消除體內的毒素。", synonyms: ["remove", "get rid of"], phrases: [] }] }]
        },
        {
            id: "exp_e08", word: "Emerge", ipa: "/ɪˈmɜːdʒ/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "出現；浮現", def_en: "move out of or away from something and come into view", sentence: "New evidence emerged during the investigation.", sentence_trans: "調查期間出現了新證據。", synonyms: ["appear", "surface"], phrases: [] }] }]
        },
        {
            id: "exp_e09", word: "Emphasis", ipa: "/ˈem.fə.sɪs/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "強調；重點", def_en: "special importance, value, or prominence given to something", sentence: "The school places a strong emphasis on discipline.", sentence_trans: "學校非常強調紀律。", synonyms: ["stress", "importance"], phrases: ["put emphasis on"] }] }]
        },
        {
            id: "exp_e10", word: "Employ", ipa: "/ɪmˈplɔɪ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "僱用；使用", def_en: "give work to (someone) and pay them for it", sentence: "The factory employs over 500 workers.", sentence_trans: "這家工廠僱用了超過500名工人。", synonyms: ["hire", "recruit"], phrases: [] }] }]
        },
        {
            id: "exp_e11", word: "Enable", ipa: "/ɪˈneɪ.bəl/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "使能夠", def_en: "give (someone or something) the authority or means to do something", sentence: "Technology enables us to work from anywhere.", sentence_trans: "科技使我們能夠在任何地方工作。", synonyms: ["allow", "permit"], phrases: [] }] }]
        },
        {
            id: "exp_e12", word: "Encourage", ipa: "/ɪnˈkʌr.ɪdʒ/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "鼓勵", def_en: "give support, confidence, or hope to (someone)", sentence: "My parents encouraged me to pursue my dreams.", sentence_trans: "我的父母鼓勵我追求我的夢想。", synonyms: ["support", "inspire"], phrases: [] }] }]
        },
        {
            id: "exp_e13", word: "Energy", ipa: "/ˈen.ə.dʒi/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "能量；能源", def_en: "the strength and vitality required for sustained physical or mental activity; power derived from physical or chemical resources", sentence: "Solar energy is a renewable resource.", sentence_trans: "太陽能是一種可再生資源。", synonyms: ["power", "vitality"], phrases: [] }] }]
        },
        {
            id: "exp_e14", word: "Engage", ipa: "/ɪnˈɡeɪdʒ/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "從事；訂婚", def_en: "occupy, attract, or involve (someone's interest or attention)", sentence: "The teacher tried to engage the students in the lesson.", sentence_trans: "老師試圖讓學生參與課堂。", synonyms: ["involve", "occupy"], phrases: ["engage in"] }] }]
        },
        {
            id: "exp_e15", word: "Enhance", ipa: "/ɪnˈhɑːns/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "提高；增強", def_en: "intensify, increase, or further improve the quality, value, or extent of", sentence: "Reading can enhance your vocabulary.", sentence_trans: "閱讀可以增強你的詞彙量。", synonyms: ["improve", "boost"], phrases: [] }] }]
        },
        {
            id: "exp_e16", word: "Ensure", ipa: "/ɪnˈʃɔːr/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "確保", def_en: "make certain that (something) shall occur or be the case", sentence: "Please ensure that all doors are locked.", sentence_trans: "請確保所有門都鎖好。", synonyms: ["guarantee", "secure"], phrases: [] }] }]
        },
        {
            id: "exp_e17", word: "Environment", ipa: "/ɪnˈvaɪ.rən.mənt/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "環境", def_en: "the surroundings or conditions in which a person, animal, or plant lives or operates", sentence: "We must protect the environment for future generations.", sentence_trans: "我們必須為子孫後代保護環境。", synonyms: ["surroundings", "habitat"], phrases: ["environmentally friendly"] }] }]
        },
        {
            id: "exp_e18", word: "Establish", ipa: "/ɪˈstæb.lɪʃ/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "建立；設立", def_en: "set up (an organization, system, or set of rules) on a firm or permanent basis", sentence: "The university was established in 1850.", sentence_trans: "這所大學成立於1850年。", synonyms: ["found", "create"], phrases: [] }] }]
        },
        {
            id: "exp_e19", word: "Estimate", ipa: "/ˈes.tɪ.meɪt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "估計", def_en: "roughly calculate or judge the value, number, quantity, or extent of", sentence: "They estimated the cost at $500.", sentence_trans: "他們估計成本為500美元。", synonyms: ["calculate", "assess"], phrases: [] }] }]
        },
        {
            id: "exp_e20", word: "Evaluate", ipa: "/ɪˈvæl.ju.eɪt/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "評估；評價", def_en: "form an idea of the amount, number, or value of; assess", sentence: "Teachers evaluate student progress regularly.", sentence_trans: "老師定期評估學生的進步。", synonyms: ["assess", "judge"], phrases: [] }] }]
        },
        {
            id: "exp_e21", word: "Event", ipa: "/ɪˈvent/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "事件；活動", def_en: "a thing that happens, especially one of importance", sentence: "The Olympics is a major international sporting event.", sentence_trans: "奧運會是一項重大的國際體育賽事。", synonyms: ["occurrence", "happening"], phrases: [] }] }]
        },
        {
            id: "exp_e22", word: "Evidence", ipa: "/ˈev.ɪ.dəns/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "證據", def_en: "the available body of facts or information indicating whether a belief or proposition is true or valid", sentence: "There is no evidence to support his claim.", sentence_trans: "沒有證據支持他的說法。", synonyms: ["proof", "confirmation"], phrases: [] }] }]
        },
        {
            id: "exp_e23", word: "Exact", ipa: "/ɪɡˈzækt/", priority: 10,
            meanings: [{ pos: "adj.", items: [{ def_zh: "確切的；精確的", def_en: "not approximated in any way; precise", sentence: "We need the exact measurements.", sentence_trans: "我們需要確切的尺寸。", synonyms: ["precise", "accurate"], phrases: [] }] }]
        },
        {
            id: "exp_e24", word: "Examine", ipa: "/ɪɡˈzæm.ɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "檢查；審查", def_en: "inspect (someone or something) in detail to determine their nature or condition; investigate thoroughly", sentence: "The doctor examined the patient carefully.", sentence_trans: "醫生仔細檢查了病人。", synonyms: ["inspect", "survey"], phrases: [] }] }]
        },
        {
            id: "exp_e25", word: "Example", ipa: "/ɪɡˈzɑːm.pəl/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "例子；榜樣", def_en: "a thing characteristic of its kind or illustrating a general rule", sentence: "Can you give me an example?", sentence_trans: "你能給我一個例子嗎？", synonyms: ["instance", "sample"], phrases: ["for example"] }] }]
        },
        {
            id: "exp_e26", word: "Exist", ipa: "/ɪɡˈzɪst/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "存在", def_en: "have objective reality or being", sentence: "Do you believe that ghosts exist?", sentence_trans: "你相信鬼魂存在嗎？", synonyms: ["live", "be"], phrases: [] }] }]
        },
        {
            id: "exp_e27", word: "Expand", ipa: "/ɪkˈspænd/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "擴大；展開", def_en: "become or make larger or more extensive", sentence: "The company plans to expand its operations into Asia.", sentence_trans: "該公司計畫將業務擴展到亞洲。", synonyms: ["enlarge", "grow"], phrases: [] }] }]
        },
        {
            id: "exp_e28", word: "Expect", ipa: "/ɪkˈspekt/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "預期；期待", def_en: "regard (something) as likely to happen", sentence: "We expect rain tomorrow.", sentence_trans: "我們預計明天會下雨。", synonyms: ["anticipate", "await"], phrases: [] }] }]
        },
        {
            id: "exp_e29", word: "Experience", ipa: "/ɪkˈspɪə.ri.əns/", priority: 10,
            meanings: [{ pos: "n.", items: [{ def_zh: "經驗", def_en: "practical contact with and observation of facts or events", sentence: "She has ten years of experience in teaching.", sentence_trans: "她有十年的教學經驗。", synonyms: ["skill", "knowledge"], phrases: [] }] }]
        },
        {
            id: "exp_e30", word: "Experiment", ipa: "/ɪkˈsper.ɪ.mənt/", priority: 9,
            meanings: [{ pos: "n.", items: [{ def_zh: "實驗", def_en: "a scientific procedure undertaken to make a discovery, test a hypothesis, or demonstrate a known fact", sentence: "The scientists conducted an experiment to test the theory.", sentence_trans: "科學家進行了一項實驗來測試該理論。", synonyms: ["test", "trial"], phrases: [] }] }]
        },
        {
            id: "exp_e31", word: "Explain", ipa: "/ɪkˈspleɪn/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "解釋", def_en: "make (an idea, situation, or problem) clear to someone by describing it in more detail or revealing relevant facts or ideas", sentence: "Can you explain how this machine works?", sentence_trans: "你能解釋一下這台機器是如何運作的嗎？", synonyms: ["describe", "clarify"], phrases: [] }] }]
        },
        {
            id: "exp_e32", word: "Explore", ipa: "/ɪkˈsplɔːr/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "探索；探討", def_en: "travel in or through (an unfamiliar country or area) in order to learn about or familiarize oneself with it", sentence: "We need to explore other options.", sentence_trans: "我們需要探索其他選項。", synonyms: ["investigate", "examine"], phrases: [] }] }]
        },
        {
            id: "exp_e33", word: "Express", ipa: "/ɪkˈspres/", priority: 10,
            meanings: [{ pos: "v.", items: [{ def_zh: "表達", def_en: "convey (a thought or feeling) in words or by gestures and conduct", sentence: "She expressed her gratitude to the team.", sentence_trans: "她向團隊表達了感謝。", synonyms: ["convey", "communicate"], phrases: [] }] }]
        },
        {
            id: "exp_e34", word: "Extend", ipa: "/ɪkˈstend/", priority: 9,
            meanings: [{ pos: "v.", items: [{ def_zh: "延長；延伸", def_en: "cause to cover a larger area; make longer or wider", sentence: "The deadline has been extended by a week.", sentence_trans: "截止日期延長了一週。", synonyms: ["prolong", "stretch"], phrases: [] }] }]
        },
        {
            id: "exp_e35", word: "Extreme", ipa: "/ɪkˈstriːm/", priority: 9,
            meanings: [{ pos: "adj.", items: [{ def_zh: "極端的", def_en: "reaching a high or the highest degree; very great", sentence: "Extreme weather conditions are becoming more frequent.", sentence_trans: "極端天氣狀況正變得越來越頻繁。", synonyms: ["severe", "intense"], phrases: [] }] }]
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
            entry.source = "expert_patch_part1"; 
            
            window.VOCAB_LIBRARY.push(entry);
            existingWords.add(lowerWord);
            addedCount++;
        }
    };

    // 執行補丁
    FULL_CONTENT_PATCH.forEach(entry => addWord(entry));

    console.log(`[Smart Content Patch] Part 1 Execution Complete.`);
    console.log(`  - 📚 Successfully Integrated: ${addedCount} high-quality words.`);
    console.log(`  - 🔢 Total Library Size: ${window.VOCAB_LIBRARY.length}`);

})();