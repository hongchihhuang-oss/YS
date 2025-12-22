// =================================================================================
// 📚 雅思單字資料庫 - D 完整增強版 (Complete & Rich D-List)
// =================================================================================
// 範圍：Dazzle (使目眩) ~ Dwelling (住處)
// 特色：包含多重詞性 (N/V/ADJ)、雅思學術例句、同義詞、片語

window.VOCAB_LIBRARY = window.VOCAB_LIBRARY || [];
window.VOCAB_LIBRARY = window.VOCAB_LIBRARY.concat([
    // --- From Image 1 (Tail) ---
    { 
        id: "d001", word: "Dazzle", ipa: "/ˈdæz.əl/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "使目眩；使讚嘆", def_en: "blind temporarily; impress deeply", sentence: "The spectators were dazzled by the athlete's extraordinary performance.", sentence_trans: "觀眾被這位運動員非凡的表現所折服。", synonyms: ["blind", "amaze"], phrases: ["dazzle the audience"] }] }] 
    },
    { id: "d002", word: "Dazzling", ipa: "/ˈdæz.lɪŋ/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "耀眼的；令人驚嘆的", def_en: "extremely bright; impressive", sentence: "She launched her career with a dazzling debut performance.", sentence_trans: "她以令人驚嘆的首演開啟了她的職業生涯。", synonyms: ["brilliant", "stunning"], phrases: [] }] }] },
    { id: "d003", word: "Deadly", ipa: "/ˈded.li/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "致命的", def_en: "causing death", sentence: "The chemical spill released a potentially deadly toxin into the river.", sentence_trans: "化學洩漏將一種潛在的致命毒素釋放到河流中。", synonyms: ["lethal", "fatal"], phrases: ["deadly weapon"] }] }] },
    { id: "d004", word: "Deafen", ipa: "/ˈdef.ən/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "使耳聾；淹沒(聲音)", def_en: "make deaf; overwhelm with sound", sentence: "The roar of the engines deafened the ground crew.", sentence_trans: "引擎的轟鳴聲震耳欲聾，淹沒了地勤人員的聲音。", synonyms: [], phrases: ["deafening silence"] }] }] },
    { id: "d005", word: "Debris", ipa: "/ˈdeɪ.briː/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "殘骸；碎片", def_en: "scattered pieces of waste", sentence: "Emergency teams worked through the night to clear debris from the crash site.", sentence_trans: "緊急小組通宵工作以清理墜機現場的殘骸。", synonyms: ["rubble", "wreckage"], phrases: ["space debris"] }] }] },
    { 
        id: "d006", word: "Debut", ipa: "/ˈdeɪ.bjuː/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "首次亮相", def_en: "first public appearance", sentence: "The company's stock market debut exceeded expectations.", sentence_trans: "該公司的股票市場首秀超出了預期。", synonyms: ["premiere"], phrases: ["make a debut"] }] },
            { pos: "v.", items: [{ def_zh: "首次登台", def_en: "perform for the first time", sentence: "The new model is set to debut at the Geneva Motor Show.", sentence_trans: "新車型定於日內瓦車展首次亮相。", synonyms: ["launch"], phrases: [] }] }
        ] 
    },
    { 
        id: "d007", word: "Decay", ipa: "/dɪˈkeɪ/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "腐爛；衰退", def_en: "rot or decompose", sentence: "Urban areas often decay when industrial jobs disappear.", sentence_trans: "當工業工作機會消失時，市區往往會衰退。", synonyms: ["rot", "deteriorate"], phrases: ["tooth decay"] }] },
            { pos: "n.", items: [{ def_zh: "腐朽；衰敗", def_en: "the state of rotting", sentence: "The old house had fallen into a state of advanced decay.", sentence_trans: "這棟老房子已經陷入嚴重的衰敗狀態。", synonyms: ["decomposition"], phrases: ["urban decay"] }] }
        ] 
    },
    { id: "d008", word: "Deceive", ipa: "/dɪˈsiːv/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "欺騙", def_en: "mislead deliberately", sentence: "The company was accused of deceiving customers about the product's safety.", sentence_trans: "該公司被指控在產品安全性方面欺騙消費者。", synonyms: ["trick", "mislead"], phrases: ["deceive oneself"] }] }] },
    { id: "d009", word: "Decent", ipa: "/ˈdiː.sənt/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "體面的；正派的", def_en: "conforming to accepted standards", sentence: "Every citizen deserves a decent standard of living and access to healthcare.", sentence_trans: "每個公民都應享有體面的生活水準和醫療保健。", synonyms: ["respectable", "proper"], phrases: ["decent job"] }] }] },
    { id: "d010", word: "Deception", ipa: "/dɪˈsep.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "欺騙；騙局", def_en: "the act of deceiving", sentence: "He obtained the confidential documents by deception.", sentence_trans: "他通過欺騙手段獲得了機密文件。", synonyms: ["deceit", "fraud"], phrases: [] }] }] },
    { id: "d011", word: "Deceptive", ipa: "/dɪˈsep.tɪv/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "欺騙性的；誤導的", def_en: "giving a misleading impression", sentence: "Appearances can be deceptive; the problem is more complex than it looks.", sentence_trans: "外表可能具有欺騙性；問題比看起來更複雜。", synonyms: ["misleading", "illusory"], phrases: [] }] }] },
    { id: "d012", word: "Decisive", ipa: "/dɪˈsaɪ.sɪv/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "決定性的；果斷的", def_en: "settling an issue; able to decide", sentence: "The government took decisive action to curb the spread of the virus.", sentence_trans: "政府採取了果斷行動來遏制病毒的傳播。", synonyms: ["conclusive", "resolute"], phrases: ["decisive factor"] }] }] },
    { id: "d013", word: "Declaration", ipa: "/ˌdek.ləˈreɪ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "宣言；聲明", def_en: "formal statement", sentence: "The signing of the declaration marked a turning point in history.", sentence_trans: "宣言的簽署標誌著歷史的轉折點。", synonyms: ["announcement", "proclamation"], phrases: ["declaration of independence"] }] }] },
    { 
        id: "d014", word: "Decline", ipa: "/dɪˈklaɪn/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "婉拒；下降", def_en: "refuse politely; decrease", sentence: "The minister declined to comment on the ongoing investigation.", sentence_trans: "部長拒絕就正在進行的調查發表評論。", synonyms: ["refuse", "decrease"], phrases: ["decline an offer"] }] },
            { pos: "n.", items: [{ def_zh: "衰退；下降", def_en: "a gradual and continuous loss of strength", sentence: "There has been a sharp decline in manufacturing output this quarter.", sentence_trans: "本季度製造業產出急劇下降。", synonyms: ["downturn", "drop"], phrases: ["in decline"] }] }
        ] 
    },
    { 
        id: "d015", word: "Dedicate", ipa: "/ˈded.ɪ.keɪt/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "奉獻；致力於", def_en: "devote time or effort", sentence: "He dedicated his entire career to finding a cure for the disease.", sentence_trans: "他將整個職業生涯致力於尋找該疾病的治療方法。", synonyms: ["devote", "commit"], phrases: ["dedicate oneself to"] }] }] 
    },
    { id: "d016", word: "Dedication", ipa: "/ˌded.ɪˈkeɪ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "奉獻；敬業", def_en: "quality of being dedicated", sentence: "Her dedication to the project was recognized with an award.", sentence_trans: "她對專案的敬業精神獲得了獎項認可。", synonyms: ["commitment", "devotion"], phrases: [] }] }] },
    { id: "d017", word: "Deduct", ipa: "/dɪˈdʌkt/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "扣除", def_en: "subtract", sentence: "Tax is deducted automatically from your salary.", sentence_trans: "稅款會自動從你的薪水中扣除。", synonyms: ["subtract", "remove"], phrases: ["tax deductible"] }] }] },
    { id: "d018", word: "Deem", ipa: "/diːm/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "認為；視作", def_en: "regard or consider in a specified way", sentence: "The plan was deemed too risky by the board of directors.", sentence_trans: "董事會認為該計畫風險太大。", synonyms: ["consider", "judge"], phrases: ["deem necessary"] }] }] },
    { 
        id: "d019", word: "Default", ipa: "/dɪˈfɒlt/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "預設值；違約", def_en: "pre-selected option; failure to fulfill obligation", sentence: "Unless changed, the system will revert to factory default settings.", sentence_trans: "除非更改，系統將恢復為原廠預設設定。", synonyms: ["non-payment"], phrases: ["by default"] }] },
            { pos: "v.", items: [{ def_zh: "違約；拖欠", def_en: "fail to fulfill an obligation", sentence: "If you default on the loan, the bank may seize your assets.", sentence_trans: "如果你拖欠貸款，銀行可能會扣押你的資產。", synonyms: ["fail to pay"], phrases: [] }] }
        ] 
    },
    { 
        id: "d020", word: "Defect", ipa: "/ˈdiː.fekt/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "缺點；瑕疵", def_en: "imperfection", sentence: "The product was recalled due to a serious manufacturing defect.", sentence_trans: "該產品因嚴重的製造瑕疵而被召回。", synonyms: ["flaw", "fault"], phrases: ["birth defect"] }] },
            { pos: "v.", items: [{ def_zh: "叛逃；變節", def_en: "abandon one's country or cause", sentence: "The spy defected to the West during the Cold War.", sentence_trans: "這名間諜在冷戰期間叛逃到西方。", synonyms: ["desert", "rebel"], phrases: [] }] }
        ] 
    },
    { id: "d021", word: "Defendant", ipa: "/dɪˈfen.dənt/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "被告", def_en: "an individual sued or accused in court", sentence: "The defendant maintained his innocence throughout the trial.", sentence_trans: "被告在整個審判過程中堅持自己無罪。", synonyms: ["accused"], phrases: [] }] }] },

    // --- From Image 9 (Start) ---
    { id: "d022", word: "Defiance", ipa: "/dɪˈfaɪ.əns/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "違抗；挑戰", def_en: "open resistance; bold disobedience", sentence: "The protesters waved flags in defiance of the curfew.", sentence_trans: "抗議者揮舞旗幟，公然違抗宵禁。", synonyms: ["resistance", "opposition"], phrases: ["in defiance of"] }] }] },
    { id: "d023", word: "Deficient", ipa: "/dɪˈfɪʃ.ənt/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "缺乏的；有缺陷的", def_en: "not having enough of a specified quality or ingredient", sentence: "A diet deficient in Vitamin C can lead to scurvy.", sentence_trans: "缺乏維生素C的飲食會導致壞血病。", synonyms: ["lacking", "inadequate"], phrases: ["deficient in"] }] }] },
    { id: "d024", word: "Deficit", ipa: "/ˈdef.ɪ.sɪt/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "赤字；虧損", def_en: "the amount by which something is too small", sentence: "The government is trying to reduce the budget deficit through spending cuts.", sentence_trans: "政府正試圖透過削減支出來減少預算赤字。", synonyms: ["shortfall", "shortage"], phrases: ["trade deficit"] }] }] },
    { id: "d025", word: "Definitive", ipa: "/dɪˈfɪn.ɪ.tɪv/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "決定性的；最終的", def_en: "conclusive; providing a final solution", sentence: "There is no definitive proof that the treatment works for everyone.", sentence_trans: "沒有決定性的證據表明該療法對每個人都有效。", synonyms: ["conclusive", "final"], phrases: ["definitive answer"] }] }] },
    { id: "d026", word: "Defy", ipa: "/dɪˈfaɪ/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "違抗；藐視", def_en: "openly resist or refuse to obey", sentence: "He defied the odds and recovered completely from the accident.", sentence_trans: "他戰勝了困難，從事故中完全康復。", synonyms: ["resist", "disobey"], phrases: ["defy description"] }] }] },
    { 
        id: "d027", word: "Delegate", ipa: "/ˈdel.ɪ.ɡət/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "代表", def_en: "a person sent to represent others", sentence: "Delegates from 50 countries attended the climate conference.", sentence_trans: "來自50個國家的代表參加了氣候會議。", synonyms: ["representative", "envoy"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "委派；授權", def_en: "entrust (a task or responsibility) to another person", sentence: "Effective managers know how to delegate tasks to their team members.", sentence_trans: "有效的管理者知道如何將任務委派給團隊成員。", synonyms: ["assign", "entrust"], phrases: ["delegate authority"] }] }
        ] 
    },
    { id: "d028", word: "Delegation", ipa: "/ˌdel.ɪˈɡeɪ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "代表團；委派", def_en: "a body of delegates; the act of delegating", sentence: "The French delegation arrived in London for trade talks.", sentence_trans: "法國代表團抵達倫敦進行貿易談判。", synonyms: ["deputation", "assignment"], phrases: [] }] }] },
    { 
        id: "d029", word: "Deliberate", ipa: "/dɪˈlɪb.ər.ət/", priority: 10, 
        meanings: [
            { pos: "adj.", items: [{ def_zh: "故意的；蓄意的", def_en: "done consciously and intentionally", sentence: "It was a deliberate attempt to sabotage the project.", sentence_trans: "這是一次蓄意破壞專案的企圖。", synonyms: ["intentional", "calculated"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "仔細考慮", def_en: "engage in long and careful consideration", sentence: "The jury deliberated for three days before reaching a verdict.", sentence_trans: "陪審團仔細考慮了三天，才做出裁決。", synonyms: ["ponder", "consider"], phrases: [] }] }
        ] 
    },
    { id: "d030", word: "Democrat", ipa: "/ˈdem.ə.kræt/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "民主主義者；民主黨員", def_en: "an advocate of democracy", sentence: "As a staunch democrat, he believes in free and fair elections.", sentence_trans: "作為一名堅定的民主主義者，他相信自由公正的選舉。", synonyms: [], phrases: [] }] }] },
    { id: "d031", word: "Denial", ipa: "/dɪˈnaɪ.əl/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "否認；拒絕", def_en: "the action of declaring something to be untrue", sentence: "His denial of involvement in the scandal was met with skepticism.", sentence_trans: "他否認參與醜聞，這遭到了懷疑。", synonyms: ["refusal", "rejection"], phrases: ["in denial"] }] }] },
    { id: "d032", word: "Denounce", ipa: "/dɪˈnaʊns/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "譴責；告發", def_en: "publicly declare to be wrong or evil", sentence: "The organization denounced the use of violence against protesters.", sentence_trans: "該組織譴責對抗議者使用暴力。", synonyms: ["condemn", "censure"], phrases: [] }] }] },
    { id: "d033", word: "Density", ipa: "/ˈden.sɪ.ti/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "密度", def_en: "the degree of compactness of a substance", sentence: "Population density is much higher in urban areas than in rural ones.", sentence_trans: "城市地區的人口密度遠高於農村地區。", synonyms: ["compactness", "solidity"], phrases: ["high density"] }] }] },
    { id: "d034", word: "Dental", ipa: "/ˈden.təl/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "牙齒的", def_en: "relating to teeth", sentence: "Regular dental checkups are important for maintaining oral hygiene.", sentence_trans: "定期牙科檢查對於保持口腔衛生很重要。", synonyms: [], phrases: ["dental care"] }] }] },
    { id: "d035", word: "Depict", ipa: "/dɪˈpɪkt/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "描繪；描述", def_en: "show or represent by a drawing, painting, or other art form", sentence: "The mural depicts scenes from the city's history.", sentence_trans: "這幅壁畫描繪了該城市歷史的場景。", synonyms: ["portray", "represent", "illustrate"], phrases: [] }] }] },
    { id: "d036", word: "Deplete", ipa: "/dɪˈpliːt/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "耗盡；使枯竭", def_en: "use up the supply or resources of", sentence: "Overfishing has severely depleted the ocean's fish stocks.", sentence_trans: "過度捕撈嚴重耗盡了海洋的魚類資源。", synonyms: ["exhaust", "drain", "consume"], phrases: ["deplete resources"] }] }] },
    { id: "d037", word: "Deploy", ipa: "/dɪˈplɔɪ/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "部署；調度", def_en: "move (troops or equipment) into position for military action", sentence: "Troops were deployed to the border region to maintain peace.", sentence_trans: "部隊被部署到邊境地區以維持和平。", synonyms: ["position", "station"], phrases: ["deploy forces"] }] }] },
    { id: "d038", word: "Depress", ipa: "/dɪˈpres/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "使沮喪；使蕭條", def_en: "make (someone) feel utterly dispirited or dejected", sentence: "The constant bad news began to depress him.", sentence_trans: "接連不斷的壞消息開始讓他感到沮喪。", synonyms: ["sadden", "discourage"], phrases: [] }] }] },
    { id: "d039", word: "Deprive", ipa: "/dɪˈpraɪv/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "剝奪", def_en: "deny (a person or place) the possession or use of something", sentence: "The new law could deprive many citizens of their right to vote.", sentence_trans: "這項新法律可能會剝奪許多公民的投票權。", synonyms: ["strip", "rob"], phrases: ["deprive of"] }] }] },
    { id: "d040", word: "Deputy", ipa: "/ˈdep.jə.ti/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "副手；代理人", def_en: "a person appointed to undertake the duties of a superior", sentence: "The deputy director will take charge while the director is away.", sentence_trans: "主任不在時，副主任將負責。", synonyms: ["assistant", "second-in-command"], phrases: ["deputy manager"] }] }] },
    { id: "d041", word: "Derive", ipa: "/dɪˈraɪv/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "起源於；獲得", def_en: "obtain something from (a specified source)", sentence: "Many English words derive from Latin or Greek.", sentence_trans: "許多英文字詞源自拉丁語或希臘語。", synonyms: ["originate", "stem"], phrases: ["derive from"] }] }] },
    { 
        id: "d042", word: "Descend", ipa: "/dɪˈsend/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "下降；下來", def_en: "move or fall downward", sentence: "The plane began to descend towards the airport.", sentence_trans: "飛機開始朝機場下降。", synonyms: ["go down", "drop"], phrases: ["descend from"] }] },
            { pos: "v.", items: [{ def_zh: "身為...的後裔", def_en: "be a blood relative of an ancestor", sentence: "She claims to descend from royalty.", sentence_trans: "她聲稱是皇室後裔。", synonyms: ["originate"], phrases: [] }] }
        ] 
    },
    { id: "d043", word: "Descent", ipa: "/dɪˈsent/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "下降；血統", def_en: "an action of moving downward; the origin of a person", sentence: "The steep descent down the mountain was dangerous.", sentence_trans: "下山的陡峭下坡很危險。", synonyms: ["drop", "ancestry"], phrases: ["of Irish descent"] }] }] },
    { id: "d044", word: "Descriptive", ipa: "/dɪˈskrɪp.tɪv/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "描述性的", def_en: "serving or seeking to describe", sentence: "The novel contains descriptive passages of the landscape.", sentence_trans: "這本小說包含對風景的描述性段落。", synonyms: ["illustrative", "expressive"], phrases: [] }] }] },
    { 
        id: "d045", word: "Designate", ipa: "/ˈdez.ɪɡ.neɪt/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "指定；任命", def_en: "appoint (someone) to a specified position", sentence: "The area has been designated as a national park.", sentence_trans: "該地區已被指定為國家公園。", synonyms: ["appoint", "nominate"], phrases: ["designated driver"] }] },
            { pos: "adj.", items: [{ def_zh: "指定的 (尚未就職)", def_en: "appointed to an office but not yet installed", sentence: "The Prime Minister-designate will take office next week.", sentence_trans: "候任總理將於下週就職。", synonyms: [], phrases: [] }] }
        ] 
    },
    { id: "d046", word: "Despair", ipa: "/dɪˈspeər/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "絕望", def_en: "the complete loss or absence of hope", sentence: "He sank into deep despair after losing his job.", sentence_trans: "失去工作後，他陷入了深深的絕望。", synonyms: ["hopelessness", "anguish"], phrases: ["in despair"] }] }] },
    { id: "d047", word: "Despise", ipa: "/dɪˈspaɪz/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "鄙視；看不起", def_en: "feel contempt or a deep repugnance for", sentence: "She despised him for his dishonesty.", sentence_trans: "她因為他的不誠實而鄙視他。", synonyms: ["detest", "loathe", "scorn"], phrases: [] }] }] },
    { id: "d048", word: "Destination", ipa: "/ˌdes.tɪˈneɪ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "目的地", def_en: "the place to which someone or something is going", sentence: "Maui is a popular tourist destination.", sentence_trans: "茂宜島是一個受歡迎的旅遊目的地。", synonyms: ["goal", "target"], phrases: ["final destination"] }] }] },
    { id: "d049", word: "Destined", ipa: "/ˈdes.tɪnd/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "注定的", def_en: "according to a plan or fate", sentence: "They seemed destined to meet.", sentence_trans: "他們似乎注定要相遇。", synonyms: ["fated", "bound"], phrases: ["destined for success"] }] }] },
    { id: "d050", word: "Destiny", ipa: "/ˈdes.tɪ.ni/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "命運", def_en: "the events that will necessarily happen to a particular person", sentence: "He believed it was his destiny to become a leader.", sentence_trans: "他相信成為領導者是他的命運。", synonyms: ["fate", "fortune"], phrases: ["control one's destiny"] }] }] },
    { id: "d051", word: "Destructive", ipa: "/dɪˈstrʌk.tɪv/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "破壞性的", def_en: "causing great and irreparable harm", sentence: "The hurricane was one of the most destructive on record.", sentence_trans: "這場颶風是有記錄以來破壞性最強的颶風之一。", synonyms: ["damaging", "devastating"], phrases: ["destructive power"] }] }] },
    { 
        id: "d052", word: "Detach", ipa: "/dɪˈtætʃ/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "分開；拆卸", def_en: "disengage (something) and remove it", sentence: "You can detach the keyboard from the tablet.", sentence_trans: "你可以將鍵盤從平板電腦上拆下來。", synonyms: ["separate", "disconnect"], phrases: ["detach from"] }] }] 
    },
    { 
        id: "d053", word: "Detached", ipa: "/dɪˈtætʃt/", priority: 10, 
        meanings: [
            { pos: "adj.", items: [{ def_zh: "獨立的", def_en: "separate or disconnected", sentence: "They live in a detached house.", sentence_trans: "他們住在一棟獨棟房子裡。", synonyms: ["separate"], phrases: ["detached house"] }] },
            { pos: "adj.", items: [{ def_zh: "超然的；冷漠的", def_en: "aloof and objective", sentence: "He tried to remain detached from the family arguments.", sentence_trans: "他試圖對家庭爭吵保持超然。", synonyms: ["aloof", "indifferent"], phrases: [] }] }
        ] 
    },
    { id: "d054", word: "Detain", ipa: "/dɪˈteɪn/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "拘留；耽擱", def_en: "keep (someone) in official custody; delay", sentence: "The suspect was detained for questioning.", sentence_trans: "嫌疑人被拘留訊問。", synonyms: ["hold", "delay"], phrases: [] }] }] },
    { id: "d055", word: "Detention", ipa: "/dɪˈten.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "拘留；留校察看", def_en: "the action of detaining someone", sentence: "The student was given detention for being late.", sentence_trans: "這名學生因遲到而被留校察看。", synonyms: ["custody", "confinement"], phrases: ["detention center"] }] }] },
    { id: "d056", word: "Deter", ipa: "/dɪˈtɜːr/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "嚇阻；使卻步", def_en: "discourage (someone) from doing something", sentence: "Higher taxes may deter people from smoking.", sentence_trans: "較高的稅收可能會嚇阻人們吸煙。", synonyms: ["discourage", "dissuade"], phrases: ["deter crime"] }] }] },
    { id: "d057", word: "Detergent", ipa: "/dɪˈtɜː.dʒənt/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "洗滌劑", def_en: "a water-soluble cleansing agent", sentence: "Eco-friendly detergents are better for the environment.", sentence_trans: "環保洗滌劑對環境更好。", synonyms: ["cleaner", "soap"], phrases: ["laundry detergent"] }] }] },
    { id: "d058", word: "Devastating", ipa: "/ˈdev.ə.steɪ.tɪŋ/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "毀滅性的；令人震驚的", def_en: "highly destructive or damaging", sentence: "The earthquake had a devastating effect on the city's infrastructure.", sentence_trans: "地震對城市的基礎設施造成了毀滅性的影響。", synonyms: ["destructive", "catastrophic"], phrases: [] }] }] },
    { id: "d059", word: "Devotion", ipa: "/dɪˈvəʊ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "奉獻；摯愛", def_en: "love, loyalty, or enthusiasm for a person, activity, or cause", sentence: "Her devotion to her family is admirable.", sentence_trans: "她對家庭的奉獻令人欽佩。", synonyms: ["loyalty", "dedication"], phrases: ["selfless devotion"] }] }] },
    { id: "d060", word: "Devour", ipa: "/dɪˈvaʊər/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "狼吞虎嚥；吞噬", def_en: "eat (food) hungrily or quickly", sentence: "The hungry lions devoured the prey in minutes.", sentence_trans: "飢餓的獅子在幾分鐘內吞噬了獵物。", synonyms: ["consume", "gobble"], phrases: [] }] }] },
    { id: "d061", word: "Diabetes", ipa: "/ˌdaɪ.əˈbiː.tiːz/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "糖尿病", def_en: "a disease in which the body’s ability to produce or respond to insulin is impaired", sentence: "Diet and exercise are key to managing diabetes.", sentence_trans: "飲食和運動是控制糖尿病的關鍵。", synonyms: [], phrases: ["type 2 diabetes"] }] }] },
    { 
        id: "d062", word: "Diagnose", ipa: "/ˈdaɪ.əɡ.nəʊz/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "診斷", def_en: "identify the nature of an illness", sentence: "The doctor diagnosed him with a rare blood disorder.", sentence_trans: "醫生診斷他患有一種罕見的血液疾病。", synonyms: ["identify", "detect"], phrases: ["diagnose with"] }] }] 
    },
    { id: "d063", word: "Diagnosis", ipa: "/ˌdaɪ.əɡˈnəʊ.sɪs/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "診斷結果", def_en: "the identification of the nature of an illness", sentence: "Early diagnosis is crucial for successful treatment.", sentence_trans: "早期診斷對於成功治療至關重要。", synonyms: [], phrases: ["make a diagnosis"] }] }] },
    { id: "d064", word: "Dialect", ipa: "/ˈdaɪ.ə.lekt/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "方言", def_en: "a particular form of a language that is peculiar to a specific region", sentence: "The Mandarin dialect spoken in Beijing is the basis for standard Chinese.", sentence_trans: "北京講的官話方言是標準漢語的基礎。", synonyms: ["language", "vernacular"], phrases: [] }] }] },
    { id: "d065", word: "Diameter", ipa: "/daɪˈæm.ɪ.tər/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "直徑", def_en: "a straight line passing from side to side through the center of a body", sentence: "The pipe has a diameter of 15 centimeters.", sentence_trans: "這根管子的直徑為15公分。", synonyms: [], phrases: [] }] }] },
    { id: "d066", word: "Diaper", ipa: "/ˈdaɪ.pər/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "尿布", def_en: "a piece of toweling or other material wrapped round a baby's bottom", sentence: "Disposable diapers are convenient but bad for the environment.", sentence_trans: "拋棄式尿布很方便，但對環境有害。", synonyms: ["nappy"], phrases: [] }] }] },
    { 
        id: "d067", word: "Dictate", ipa: "/dɪkˈteɪt/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "口述；命令", def_en: "say or read aloud; lay down authoritatively", sentence: "The boss dictated a letter to his secretary.", sentence_trans: "老闆向秘書口述了一封信。", synonyms: ["order", "command"], phrases: ["dictate terms"] }] }
        ] 
    },
    { id: "d068", word: "Dictation", ipa: "/dɪkˈteɪ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "聽寫；口述", def_en: "the action of saying words aloud to be typed", sentence: "The students had a dictation test in French class.", sentence_trans: "學生在法語課上進行了聽寫測驗。", synonyms: [], phrases: [] }] }] },
    { id: "d069", word: "Dictator", ipa: "/dɪkˈteɪ.tər/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "獨裁者", def_en: "a ruler with total power", sentence: "The dictator suppressed all political opposition.", sentence_trans: "獨裁者鎮壓了所有政治反對派。", synonyms: ["tyrant", "autocrat"], phrases: [] }] }] },
    { id: "d070", word: "Dictatorship", ipa: "/dɪkˈteɪ.tə.ʃɪp/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "獨裁政權", def_en: "government by a dictator", sentence: "The country transitioned from a dictatorship to a democracy.", sentence_trans: "該國從獨裁政權過渡到民主政體。", synonyms: ["tyranny"], phrases: [] }] }] },
    { id: "d071", word: "Diesel", ipa: "/ˈdiː.zəl/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "柴油", def_en: "a type of heavy oil used as fuel", sentence: "Diesel engines are generally more fuel-efficient than petrol ones.", sentence_trans: "柴油引擎通常比汽油引擎更省油。", synonyms: [], phrases: ["diesel engine"] }] }] },
    { id: "d072", word: "Differentiate", ipa: "/ˌdɪf.əˈren.ʃi.eɪt/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "區分；使不同", def_en: "recognize what makes someone or something different", sentence: "It is difficult to differentiate between the two identical twins.", sentence_trans: "很難區分這對同卵雙胞胎。", synonyms: ["distinguish", "discriminate"], phrases: ["differentiate between"] }] }] },
    { id: "d073", word: "Digestion", ipa: "/daɪˈdʒes.tʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "消化", def_en: "the process of digesting food", sentence: "Drinking water aids digestion.", sentence_trans: "喝水有助於消化。", synonyms: [], phrases: ["poor digestion"] }] }] },
    { id: "d074", word: "Dilemma", ipa: "/daɪˈlem.ə/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "困境；進退兩難", def_en: "a situation in which a difficult choice has to be made", sentence: "He faced a moral dilemma over whether to report his colleague.", sentence_trans: "他在是否舉報同事的問題上面臨道德困境。", synonyms: ["quandary", "predicament"], phrases: ["in a dilemma"] }] }] },
    { id: "d075", word: "Dimension", ipa: "/daɪˈmen.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "維度；尺寸", def_en: "a measurable extent of some kind", sentence: "We must consider the social dimension of this problem.", sentence_trans: "我們必須考慮這個問題的社會層面。", synonyms: ["aspect", "feature"], phrases: ["three dimensions"] }] }] },
    { id: "d076", word: "Diminish", ipa: "/dɪˈmɪn.ɪʃ/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "減少；降低", def_en: "make or become less", sentence: "His influence in the company has diminished over time.", sentence_trans: "他在公司的影響力隨著時間的推移而減弱。", synonyms: ["decrease", "decline", "reduce"], phrases: [] }] }] },
    { id: "d077", word: "Diplomacy", ipa: "/dɪˈpləʊ.mə.si/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "外交；手腕", def_en: "the profession, activity, or skill of managing international relations", sentence: "Diplomacy is often preferable to war.", sentence_trans: "外交往往比戰爭更可取。", synonyms: ["statesmanship", "tact"], phrases: [] }] }] },
    { id: "d078", word: "Diplomatic", ipa: "/ˌdɪp.ləˈmæt.ɪk/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "外交的；圓滑的", def_en: "of or concerning the profession, activity, or skill of managing international relations", sentence: "The two countries broke off diplomatic relations.", sentence_trans: "兩國斷絕了外交關係。", synonyms: ["tactful", "polite"], phrases: ["diplomatic immunity"] }] }] },
    { 
        id: "d079", word: "Directive", ipa: "/dɪˈrek.tɪv/", priority: 10, 
        meanings: [{ pos: "n.", items: [{ def_zh: "指令；指示", def_en: "an official or authoritative instruction", sentence: "The EU issued a new directive on environmental protection.", sentence_trans: "歐盟發布了關於環境保護的新指令。", synonyms: ["instruction", "order"], phrases: [] }] }] 
    },
    { id: "d080", word: "Directory", ipa: "/dɪˈrek.tər.i/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "目錄；通訊錄", def_en: "a book listing individuals or organizations alphabetically", sentence: "I looked up his number in the telephone directory.", sentence_trans: "我在電話簿裡查了他的號碼。", synonyms: ["index", "list"], phrases: [] }] }] },
    { id: "d081", word: "Disability", ipa: "/ˌdɪs.əˈbɪl.ə.ti/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "殘疾；無能", def_en: "a physical or mental condition that limits a person's movements, senses, or activities", sentence: "The law prohibits discrimination based on disability.", sentence_trans: "法律禁止基於殘疾的歧視。", synonyms: ["impairment", "handicap"], phrases: ["physical disability"] }] }] },
    { 
        id: "d082", word: "Disable", ipa: "/dɪsˈeɪ.bəl/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "使喪失能力；停用", def_en: "put out of action", sentence: "You need to disable the alarm before entering.", sentence_trans: "進入前你需要停用警報。", synonyms: ["deactivate", "incapacitate"], phrases: [] }] }] 
    },
    { id: "d083", word: "Disabled", ipa: "/dɪsˈeɪ.bəld/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "殘疾的", def_en: "having a physical or mental impairment", sentence: "The building has access ramps for disabled people.", sentence_trans: "這棟大樓有無障礙坡道供殘疾人士使用。", synonyms: ["handicapped"], phrases: [] }] }] },
    { id: "d084", word: "Disapprove", ipa: "/ˌdɪs.əˈpruːv/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "不贊成；反對", def_en: "have or express an unfavorable opinion", sentence: "Her parents disapproved of her choice of career.", sentence_trans: "她的父母不贊成她的職業選擇。", synonyms: ["object", "oppose"], phrases: ["disapprove of"] }] }] },
    { id: "d085", word: "Disastrous", ipa: "/dɪˈzɑː.strəs/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "災難性的", def_en: "causing great damage", sentence: "The harvest failure was disastrous for the local farmers.", sentence_trans: "歉收對當地農民來說是災難性的。", synonyms: ["catastrophic", "devastating"], phrases: [] }] }] },
    { id: "d086", word: "Disbelief", ipa: "/ˌdɪs.bɪˈliːf/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "不相信；懷疑", def_en: "inability or refusal to accept that something is true or real", sentence: "She stared at him in disbelief.", sentence_trans: "她難以置信地盯著他。", synonyms: ["incredulity", "skepticism"], phrases: [] }] }] },
    { id: "d087", word: "Disbelieve", ipa: "/ˌdɪs.bɪˈliːv/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "不相信", def_en: "be unable to believe", sentence: "I disbelieve his story about the accident.", sentence_trans: "我不相信他關於事故的說法。", synonyms: ["doubt", "mistrust"], phrases: [] }] }] },
    { 
        id: "d088", word: "Discard", ipa: "/dɪˈskɑːd/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "丟棄", def_en: "get rid of", sentence: "Discard old clothes.", sentence_trans: "丟棄舊衣服。", synonyms: ["throw away", "dispose of"], phrases: [] }] }] 
    },
    { 
        id: "d089", word: "Discharge", ipa: "/dɪsˈtʃɑːdʒ/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "釋放；排出", def_en: "tell someone officially that they can or must leave", sentence: "He was discharged from the hospital yesterday.", sentence_trans: "他昨天出院了。", synonyms: ["release", "dismiss"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "排出物；履行", def_en: "the action of discharging someone or something", sentence: "The discharge of industrial waste into the river is illegal.", sentence_trans: "將工業廢物排放到河流中是非法的。", synonyms: ["emission"], phrases: [] }] }
        ] 
    },
    { id: "d090", word: "Disciple", ipa: "/dɪˈsaɪ.pəl/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "信徒；門徒", def_en: "a follower or student of a teacher, leader, or philosopher", sentence: "He was a disciple of the famous philosopher.", sentence_trans: "他是那位著名哲學家的信徒。", synonyms: ["follower", "adherent"], phrases: [] }] }] },
    { id: "d091", word: "Disciplinary", ipa: "/ˈdɪs.ɪ.plɪ.nər.i/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "紀律的；懲戒的", def_en: "concerning or enforcing discipline", sentence: "The employee faced disciplinary action for misconduct.", sentence_trans: "該員工因不當行為面臨紀律處分。", synonyms: ["corrective"], phrases: ["disciplinary action"] }] }] },
    { 
        id: "d092", word: "Disclose", ipa: "/dɪˈskləʊz/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "揭露；公開", def_en: "make known", sentence: "The company failed to disclose its financial losses.", sentence_trans: "該公司未能披露其財務損失。", synonyms: ["reveal", "divulge"], phrases: ["disclose information"] }] }] 
    },
    { id: "d093", word: "Disclosure", ipa: "/dɪˈskləʊ.ʒər/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "揭露；公開", def_en: "the action of making new or secret information known", sentence: "The disclosure of classified information is a crime.", sentence_trans: "洩露機密資訊是犯罪行為。", synonyms: ["revelation"], phrases: ["full disclosure"] }] }] },
    { id: "d094", word: "Discomfort", ipa: "/dɪˈskʌm.fət/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "不適；不安", def_en: "slight pain or lack of comfort", sentence: "The patient complained of some discomfort in his chest.", sentence_trans: "病人抱怨胸部有些不適。", synonyms: ["pain", "unease"], phrases: [] }] }] },
    { 
        id: "d095", word: "Disconnect", ipa: "/ˌdɪs.kəˈnekt/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "切斷；斷開", def_en: "break the connection", sentence: "Don't forget to disconnect the power supply.", sentence_trans: "別忘了切斷電源。", synonyms: ["detach", "unplug"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "脫節", def_en: "a lack of connection", sentence: "There is a disconnect between the management and the staff.", sentence_trans: "管理層與員工之間存在脫節。", synonyms: ["gap"], phrases: [] }] }
        ] 
    },
    { id: "d096", word: "Discourse", ipa: "/ˈdɪs.kɔːs/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "論述；交談", def_en: "written or spoken communication or debate", sentence: "Academic discourse requires critical thinking and clear expression.", sentence_trans: "學術論述需要批判性思維和清晰的表達。", synonyms: ["discussion", "conversation"], phrases: ["public discourse"] }] }] },
    { id: "d097", word: "Discreet", ipa: "/dɪˈskriːt/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "謹慎的", def_en: "careful in one's speech or actions", sentence: "We must be discreet about our plans.", sentence_trans: "我們必須對我們的計劃保持謹慎。", synonyms: ["careful", "circumspect"], phrases: [] }] }] },
    { 
        id: "d098", word: "Discriminate", ipa: "/dɪˈskrɪm.ɪ.neɪt/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "歧視；區分", def_en: "make an unjust or prejudicial distinction", sentence: "It is illegal to discriminate on the basis of race or gender.", sentence_trans: "基於種族或性別的歧視是非法的。", synonyms: ["prejudice", "distinguish"], phrases: ["discriminate against"] }] }] 
    },
    { id: "d099", word: "Discrimination", ipa: "/dɪˌskrɪm.ɪˈneɪ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "歧視", def_en: "unjust treatment of different categories of people", sentence: "Laws against racial discrimination must be enforced.", sentence_trans: "必須執行反對種族歧視的法律。", synonyms: ["prejudice", "bias"], phrases: ["racial discrimination"] }] }] },
    { 
        id: "d100", word: "Disgrace", ipa: "/dɪsˈɡreɪs/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "恥辱", def_en: "loss of reputation or respect", sentence: "He brought disgrace to the family.", sentence_trans: "他給家族帶來了恥辱。", synonyms: ["shame", "dishonor"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "使丟臉", def_en: "bring shame on", sentence: "His behavior disgraced the team.", sentence_trans: "他的行為讓團隊丟臉。", synonyms: ["shame"], phrases: [] }] }
        ] 
    },
    { id: "d101", word: "Disgraceful", ipa: "/dɪsˈɡreɪs.fəl/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "可恥的", def_en: "shockingly unacceptable", sentence: "It was a disgraceful display of bad sportsmanship.", sentence_trans: "這是一次可恥的體育道德缺失表現。", synonyms: ["shameful", "scandalous"], phrases: [] }] }] },
    { 
        id: "d102", word: "Dismantle", ipa: "/dɪˈsmæn.təl/", priority: 10, 
        meanings: [{ pos: "v.", items: [{ def_zh: "拆除；廢除", def_en: "take apart", sentence: "The old factory was dismantled to make way for new housing.", sentence_trans: "舊工廠被拆除以為新住房讓路。", synonyms: ["disassemble", "demolish"], phrases: [] }] }] 
    },
    { 
        id: "d103", word: "Dismay", ipa: "/dɪˈsmeɪ/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "沮喪；驚慌", def_en: "consternation and distress", sentence: "To her dismay, she realized she had lost her passport.", sentence_trans: "讓她沮喪的是，她發現自己的護照丟了。", synonyms: ["alarm", "shock"], phrases: ["to one's dismay"] }] },
            { pos: "v.", items: [{ def_zh: "使沮喪", def_en: "cause distress", sentence: "The news dismayed everyone.", sentence_trans: "這消息讓大家感到沮喪。", synonyms: ["discourage"], phrases: [] }] }
        ] 
    },
    { id: "d104", word: "Dispensable", ipa: "/dɪˈspen.sə.bəl/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "可有可無的", def_en: "able to be replaced or done without", sentence: "He felt that his role in the company was dispensable.", sentence_trans: "他覺得自己在公司的角色是可有可無的。", synonyms: ["expendable", "unnecessary"], phrases: [] }] }] },
    { id: "d105", word: "Dispense", ipa: "/dɪˈspens/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "分發；配藥", def_en: "distribute or provide", sentence: "The machine dispenses coffee and tea.", sentence_trans: "這台機器分發咖啡和茶。", synonyms: ["distribute", "supply"], phrases: ["dispense with"] }] }] },
    { id: "d106", word: "Disposable", ipa: "/dɪˈspəʊ.zə.bəl/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "一次性的；可支配的", def_en: "intended to be used once", sentence: "Disposable plastics are a major environmental problem.", sentence_trans: "一次性塑膠是一個主要的環境問題。", synonyms: ["throwaway"], phrases: ["disposable income"] }] }] },
    { id: "d107", word: "Disposal", ipa: "/dɪˈspəʊ.zəl/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "處理；處置", def_en: "the action or process of throwing away", sentence: "The safe disposal of nuclear waste is a challenge.", sentence_trans: "核廢料的安全處置是一個挑戰。", synonyms: ["removal", "discarding"], phrases: ["at one's disposal"] }] }] },
    { id: "d108", word: "Dispose", ipa: "/dɪˈspəʊz/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "處理；處置", def_en: "get rid of", sentence: "Please dispose of your trash properly.", sentence_trans: "請妥善處理你的垃圾。", synonyms: ["discard"], phrases: ["dispose of"] }] }] },
    { id: "d109", word: "Disrupt", ipa: "/dɪsˈrʌpt/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "擾亂；中斷", def_en: "interrupt by causing a disturbance", sentence: "Protesters disrupted the meeting.", sentence_trans: "抗議者擾亂了會議。", synonyms: ["interrupt", "disturb"], phrases: [] }] }] },
    { 
        id: "d110", word: "Dissent", ipa: "/dɪˈsent/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "異議", def_en: "disagreement", sentence: "There was some dissent within the party.", sentence_trans: "黨內存在一些異議。", synonyms: ["disagreement", "opposition"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "持異議", def_en: "disagree", sentence: "Two judges dissented from the majority opinion.", sentence_trans: "兩位法官對多數意見持異議。", synonyms: ["disagree"], phrases: [] }] }
        ] 
    },
    { id: "d111", word: "Dissident", ipa: "/ˈdɪs.ɪ.dənt/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "異議人士", def_en: "a person who opposes official policy", sentence: "The political dissident was jailed.", sentence_trans: "政治異議人士被監禁。", synonyms: ["protester", "rebel"], phrases: [] }] }] },
    { id: "d112", word: "Dissolve", ipa: "/dɪˈzɒlv/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "溶解；解散", def_en: "become liquid; close down", sentence: "Sugar dissolves in water.", sentence_trans: "糖溶於水。", synonyms: ["melt", "disband"], phrases: ["dissolve parliament"] }] }] },
    { id: "d113", word: "Distinction", ipa: "/dɪˈstɪŋk.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "區別；卓越", def_en: "a difference or contrast", sentence: "There is a clear distinction between the two theories.", sentence_trans: "這兩種理論之間有明顯的區別。", synonyms: ["difference", "contrast"], phrases: ["make a distinction"] }] }] },
    { id: "d114", word: "Distinctive", ipa: "/dɪˈstɪŋk.tɪv/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "獨特的", def_en: "characteristic of one person or thing", sentence: "The bird has distinctive blue feathers.", sentence_trans: "這種鳥有獨特的藍色羽毛。", synonyms: ["unique", "characteristic"], phrases: [] }] }] },
    { id: "d115", word: "Distract", ipa: "/dɪˈstrækt/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "使分心", def_en: "prevent from giving full attention", sentence: "Don't let the noise distract you.", sentence_trans: "別讓噪音讓你分心。", synonyms: ["divert", "sidetrack"], phrases: [] }] }] },
    { id: "d116", word: "Distraction", ipa: "/dɪˈstræk.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "分心事物", def_en: "a thing that prevents concentration", sentence: "Constant notifications are a major distraction.", sentence_trans: "持續的通知是一個主要的分心事物。", synonyms: ["diversion"], phrases: [] }] }] },
    { 
        id: "d117", word: "Distress", ipa: "/dɪˈstres/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "痛苦；危難", def_en: "extreme anxiety, sorrow, or pain", sentence: "The family is in great distress over the missing child.", sentence_trans: "這家人因失蹤的孩子而極度痛苦。", synonyms: ["anguish", "suffering"], phrases: ["in distress"] }] },
            { pos: "v.", items: [{ def_zh: "使痛苦", def_en: "cause anxiety", sentence: "The news distressed her greatly.", sentence_trans: "這消息讓她非常痛苦。", synonyms: ["upset"], phrases: [] }] }
        ] 
    },
    { id: "d118", word: "Disturbance", ipa: "/dɪˈstɜː.bəns/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "騷亂；干擾", def_en: "interruption of a settled and peaceful condition", sentence: "Police were called to a disturbance in the street.", sentence_trans: "警察被叫去處理街上的騷亂。", synonyms: ["disruption", "commotion"], phrases: [] }] }] },
    { id: "d119", word: "Diversify", ipa: "/daɪˈvɜː.sɪ.faɪ/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "多樣化", def_en: "make or become more diverse", sentence: "Farmers should diversify their crops.", sentence_trans: "農民應該使農作物多樣化。", synonyms: ["vary", "branch out"], phrases: [] }] }] },
    { id: "d120", word: "Diversion", ipa: "/daɪˈvɜː.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "轉移；消遣", def_en: "an instance of turning something aside", sentence: "Traffic diversion caused delays.", sentence_trans: "交通改道造成了延誤。", synonyms: ["detour", "distraction"], phrases: [] }] }] },
    { id: "d121", word: "Divert", ipa: "/daɪˈvɜːt/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "轉移；使分心", def_en: "cause to change course", sentence: "They diverted the river to prevent flooding.", sentence_trans: "他們將河流改道以防止洪水。", synonyms: ["redirect", "distract"], phrases: [] }] }] },
    { id: "d122", word: "Dividend", ipa: "/ˈdɪv.ɪ.dend/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "股息；紅利", def_en: "a sum of money paid regularly by a company to its shareholders", sentence: "The company declared a large dividend this year.", sentence_trans: "公司今年宣布了豐厚的股息。", synonyms: [], phrases: ["pay dividends"] }] }] },
    { id: "d123", word: "Doctrine", ipa: "/ˈdɒk.trɪn/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "教義；學說", def_en: "a belief or set of beliefs held and taught by a Church, political party, or other group", sentence: "The doctrine of separation of powers.", sentence_trans: "三權分立的學說。", synonyms: ["creed", "dogma"], phrases: [] }] }] },
    { 
        id: "d124", word: "Document", ipa: "/ˈdɒk.jə.mənt/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "文件", def_en: "piece of written matter", sentence: "Sign the legal document.", sentence_trans: "簽署法律文件。", synonyms: ["paper"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "記錄", def_en: "record in writing", sentence: "The study documents the effects of pollution.", sentence_trans: "該研究記錄了污染的影響。", synonyms: ["record"], phrases: [] }] }
        ] 
    },
    { id: "d125", word: "Documentary", ipa: "/ˌdɒk.jəˈmen.tər.i/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "紀錄片", def_en: "a film or television or radio program that provides a factual record or report", sentence: "We watched a documentary about wildlife.", sentence_trans: "我們看了一部關於野生動物的紀錄片。", synonyms: [], phrases: [] }] }] },
    { id: "d126", word: "Domain", ipa: "/dəˈmeɪn/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "領域；領土", def_en: "an area of territory owned or controlled by a ruler or government", sentence: "Physics is outside my domain of expertise.", sentence_trans: "物理學超出了我的專業領域。", synonyms: ["realm", "field"], phrases: ["public domain"] }] }] },
    { id: "d127", word: "Dome", ipa: "/dəʊm/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "圓頂", def_en: "a rounded vault forming the roof of a building", sentence: "The capitol building has a magnificent dome.", sentence_trans: "國會大廈有一個宏偉的圓頂。", synonyms: [], phrases: [] }] }] },
    { id: "d128", word: "Donate", ipa: "/dəʊˈneɪt/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "捐贈", def_en: "give for a good cause", sentence: "He donated money to the charity.", sentence_trans: "他捐錢給慈善機構。", synonyms: ["give", "contribute"], phrases: ["donate blood"] }] }] },
    { id: "d129", word: "Donation", ipa: "/dəʊˈneɪ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "捐款；捐贈", def_en: "something that is given to a charity", sentence: "Make a donation.", sentence_trans: "捐款。", synonyms: ["contribution", "gift"], phrases: [] }] }] },
    { id: "d130", word: "Donor", ipa: "/ˈdəʊ.nər/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "捐贈者", def_en: "a person who donates", sentence: "Organ donor.", sentence_trans: "器官捐贈者。", synonyms: ["contributor"], phrases: [] }] }] },
    { id: "d131", word: "Doom", ipa: "/duːm/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "厄運", def_en: "death, destruction, or some other terrible fate", sentence: "A sense of impending doom.", sentence_trans: "大難臨頭的感覺。", synonyms: ["destruction", "ruin"], phrases: [] }] }, { pos: "v.", items: [{ def_zh: "注定失敗", def_en: "condemn to certain destruction", sentence: "The plan was doomed to fail.", sentence_trans: "該計劃注定失敗。", synonyms: ["condemn"], phrases: [] }] }] },
    { id: "d132", word: "Doorway", ipa: "/ˈdɔː.weɪ/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "門口", def_en: "an entrance to a room or building", sentence: "She stood in the doorway.", sentence_trans: "她站在門口。", synonyms: ["entrance"], phrases: [] }] }] },
    { id: "d133", word: "Dormitory", ipa: "/ˈdɔː.mɪ.tər.i/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "宿舍", def_en: "a large bedroom for a number of people in a school or institution", sentence: "University dormitory.", sentence_trans: "大學宿舍。", synonyms: ["dorm"], phrases: [] }] }] },
    { id: "d134", word: "Dough", ipa: "/dəʊ/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "麵團", def_en: "a thick, malleable mixture of flour and liquid", sentence: "Knead the dough.", sentence_trans: "揉麵團。", synonyms: [], phrases: [] }] }] },
    { id: "d135", word: "Downward", ipa: "/ˈdaʊn.wəd/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "向下的", def_en: "moving or leading towards a lower place", sentence: "Downward trend.", sentence_trans: "下降趨勢。", synonyms: ["descending"], phrases: [] }] }, { pos: "adv.", items: [{ def_zh: "向下地", def_en: "towards a lower place", sentence: "Look downward.", sentence_trans: "向下看。", synonyms: [], phrases: [] }] }] },
    { id: "d136", word: "Doze", ipa: "/dəʊz/", priority: 10, meanings: [{ pos: "v.", items: [{ def_zh: "打瞌睡", def_en: "sleep lightly", sentence: "He dozed off during the movie.", sentence_trans: "他在看電影時睡著了。", synonyms: ["nap", "snooze"], phrases: ["doze off"] }] }] },
    { id: "d137", word: "Drastic", ipa: "/ˈdræs.tɪk/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "激烈的；嚴厲的", def_en: "likely to have a strong or far-reaching effect", sentence: "Drastic measures are needed.", sentence_trans: "需要採取激烈措施。", synonyms: ["extreme", "severe"], phrases: [] }] }] },
    { id: "d138", word: "Draught", ipa: "/drɑːft/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "穿堂風；氣流", def_en: "a current of cool air in a room", sentence: "I felt a cold draught.", sentence_trans: "我感到一股冷風。", synonyms: ["breeze"], phrases: ["draught beer"] }] }] },
    { id: "d139", word: "Drawback", ipa: "/ˈdrɔː.bæk/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "缺點", def_en: "a feature that renders something less acceptable", sentence: "The main drawback of the plan is the cost.", sentence_trans: "該計劃的主要缺點是成本。", synonyms: ["disadvantage", "downside"], phrases: [] }] }] },
    { id: "d140", word: "Dreadful", ipa: "/ˈdred.fəl/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "可怕的；糟糕的", def_en: "causing or involving great suffering, fear, or unhappiness", sentence: "The weather was dreadful.", sentence_trans: "天氣糟透了。", synonyms: ["terrible", "awful"], phrases: [] }] }] },
    { id: "d141", word: "Dresser", ipa: "/ˈdres.ər/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "梳妝台；碗櫃", def_en: "a chest of drawers; a kitchen cupboard", sentence: "Put the clothes in the dresser.", sentence_trans: "把衣服放進梳妝台。", synonyms: [], phrases: [] }] }] },
    { 
        id: "d142", word: "Dressing", ipa: "/ˈdres.ɪŋ/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "調味醬", def_en: "sauce for salad", sentence: "Salad dressing.", sentence_trans: "沙拉醬。", synonyms: [], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "敷料", def_en: "covering for a wound", sentence: "Change the dressing.", sentence_trans: "更換敷料。", synonyms: ["bandage"], phrases: [] }] }
        ] 
    },
    { id: "d143", word: "Driveway", ipa: "/ˈdraɪv.weɪ/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "私人車道", def_en: "a short road leading from the street to a house", sentence: "Park in the driveway.", sentence_trans: "停在車道上。", synonyms: [], phrases: [] }] }] },
    { id: "d144", word: "Drizzle", ipa: "/ˈdrɪz.əl/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "毛毛雨", def_en: "light rain", sentence: "A light drizzle started.", sentence_trans: "開始下毛毛雨了。", synonyms: ["rain"], phrases: [] }] }, { pos: "v.", items: [{ def_zh: "下毛毛雨", def_en: "rain lightly", sentence: "It's drizzling outside.", sentence_trans: "外面在下毛毛雨。", synonyms: [], phrases: [] }] }] },
    { id: "d145", word: "Drought", ipa: "/draʊt/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "乾旱", def_en: "a prolonged period of abnormally low rainfall", sentence: "The drought caused crop failure.", sentence_trans: "乾旱導致農作物歉收。", synonyms: [], phrases: [] }] }] },
    { id: "d146", word: "Dual", ipa: "/ˈdjuː.əl/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "雙重的", def_en: "consisting of two parts", sentence: "Dual citizenship.", sentence_trans: "雙重國籍。", synonyms: ["double"], phrases: ["dual purpose"] }] }] },
    { id: "d147", word: "Dubious", ipa: "/ˈdjuː.bi.əs/", priority: 10, meanings: [{ pos: "adj.", items: [{ def_zh: "可疑的；懷疑的", def_en: "hesitating or doubting", sentence: "I am dubious about his claims.", sentence_trans: "我對他的說法表示懷疑。", synonyms: ["doubtful", "suspicious"], phrases: [] }] }] },
    { id: "d148", word: "Duration", ipa: "/djuˈreɪ.ʃən/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "持續時間", def_en: "the time during which something continues", sentence: "For the duration of the flight.", sentence_trans: "在飛行期間。", synonyms: ["length", "period"], phrases: [] }] }] },
    { id: "d149", word: "Dusk", ipa: "/dʌsk/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "黃昏", def_en: "the darker stage of twilight", sentence: "We arrived at dusk.", sentence_trans: "我們黃昏時到達。", synonyms: ["twilight", "sunset"], phrases: ["from dawn to dusk"] }] }] },
    { id: "d150", word: "Dwarf", ipa: "/dwɔːf/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "侏儒；矮人", def_en: "a member of a mythical race of short, stocky human-like creatures", sentence: "Snow White and the Seven Dwarfs.", sentence_trans: "白雪公主與七個小矮人。", synonyms: [], phrases: [] }] }, { pos: "v.", items: [{ def_zh: "使顯得矮小", def_en: "cause to seem small", sentence: "The new skyscraper dwarfs the old buildings.", sentence_trans: "新的摩天大樓使舊建築顯得矮小。", synonyms: ["overshadow"], phrases: [] }] }] },
    { 
        id: "d151", word: "Dwell", ipa: "/dwel/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "居住", def_en: "live in or at a specified place", sentence: "Tribes that dwell in the forest.", sentence_trans: "居住在森林裡的部落。", synonyms: ["live", "reside"], phrases: ["dwell on (ponder)"] }] }
        ] 
    },
    { id: "d152", word: "Dwelling", ipa: "/ˈdwel.ɪŋ/", priority: 10, meanings: [{ pos: "n.", items: [{ def_zh: "住處", def_en: "a house, apartment, or other place of residence", sentence: "A humble dwelling.", sentence_trans: "簡陋的住處。", synonyms: ["residence", "home"], phrases: [] }] }] }
]);