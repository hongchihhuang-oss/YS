// =================================================================================
// 📚 雅思單字資料庫 - M 完整高階版 (Complete & High Quality M-List)
// =================================================================================
// 範圍：Mammal (哺乳動物) ~ Myth (神話/迷思)
// 特色：包含多重詞性 (N/V/ADJ)、雅思學術例句、同義詞、片語

window.VOCAB_LIBRARY = window.VOCAB_LIBRARY || [];
window.VOCAB_LIBRARY = window.VOCAB_LIBRARY.concat([
    { 
        id: "m001", word: "Mammal", ipa: "/ˈmæm.əl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "哺乳動物", def_en: "a warm-blooded vertebrate animal that feeds its young with milk", 
                sentence: "Whales are mammals, not fish, as they breathe air and nurse their young.", 
                sentence_trans: "鯨魚是哺乳動物，不是魚類，因為牠們呼吸空氣並哺育幼崽。", 
                synonyms: ["creature", "beast"], phrases: ["marine mammal"] 
            }] 
        }] 
    },
    { 
        id: "m002", word: "Mandate", ipa: "/ˈmæn.deɪt/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "授權；命令", def_en: "an official order or commission to do something", sentence: "The government received a clear mandate from the people to implement tax reforms.", sentence_trans: "政府獲得了人民的明確授權來實施稅收改革。", synonyms: ["authority", "approval"], phrases: ["presidential mandate"] }] },
            { pos: "v.", items: [{ def_zh: "強制執行；授權", def_en: "require (something) to be done; make mandatory", sentence: "The new law mandates that all employees wear safety gear.", sentence_trans: "新法律強制規定所有員工必須穿戴安全裝備。", synonyms: ["require", "order"], phrases: ["federally mandated"] }] }
        ] 
    },
    { 
        id: "m003", word: "Manifest", ipa: "/ˈmæn.ɪ.fest/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "顯示；表露", def_en: "display or show (a quality or feeling) by one's acts or appearance", sentence: "The symptoms of the disease often manifest themselves in early childhood.", sentence_trans: "這種疾病的症狀通常在幼兒早期顯現。", synonyms: ["display", "exhibit", "demonstrate"], phrases: ["manifest itself"] }] },
            { pos: "adj.", items: [{ def_zh: "明顯的；顯而易見的", def_en: "clear or obvious to the eye or mind", sentence: "His manifest lack of interest in the subject was apparent to everyone.", sentence_trans: "他對這個主題明顯缺乏興趣，這對每個人來說都是顯而易見的。", synonyms: ["obvious", "clear", "patent"], phrases: ["manifest destiny"] }] }
        ] 
    },
    { 
        id: "m004", word: "Manipulate", ipa: "/məˈnɪp.jə.leɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "操縱；操作", def_en: "handle or control (a tool, mechanism, etc.), typically in a skillful manner; control or influence (a person or situation) cleverly", 
                sentence: "The politician was accused of trying to manipulate public opinion through misleading advertisements.", 
                sentence_trans: "這位政治家被指控試圖透過誤導性廣告來操縱公眾輿論。", 
                synonyms: ["control", "influence", "exploit"], phrases: ["manipulate data", "manipulate the market"] 
            }] 
        }] 
    },
    { 
        id: "m005", word: "Mansion", ipa: "/ˈmæn.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "豪宅；大廈", def_en: "a large, impressive house", 
                sentence: "The billionaire purchased a historic mansion on the outskirts of the city.", 
                sentence_trans: "這位億萬富翁在市郊購買了一座歷史悠久的豪宅。", 
                synonyms: ["residence", "estate"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m006", word: "Manuscript", ipa: "/ˈmæn.jə.skrɪpt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "手稿；原稿", def_en: "a book, document, or piece of music written by hand rather than typed or printed", 
                sentence: "The original manuscript of the novel was discovered in an attic after fifty years.", 
                sentence_trans: "這部小說的原稿在五十年後於閣樓被發現。", 
                synonyms: ["document", "text"], phrases: ["submit a manuscript"] 
            }] 
        }] 
    },
    { 
        id: "m007", word: "Marginal", ipa: "/ˈmɑː.dʒɪ.nəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "邊緣的；微小的", def_en: "of secondary or minor importance; not central", 
                sentence: "The difference in cost between the two options was marginal.", 
                sentence_trans: "這兩個選項之間的成本差異微乎其微。", 
                synonyms: ["slight", "insignificant", "borderline"], phrases: ["marginal profit", "marginal utility"] 
            }] 
        }] 
    },
    { 
        id: "m008", word: "Marine", ipa: "/məˈriːn/", priority: 10, 
        meanings: [
            { pos: "adj.", items: [{ def_zh: "海洋的；海生的", def_en: "of, found in, or produced by the sea", sentence: "Pollution poses a severe threat to marine life.", sentence_trans: "污染對海洋生物構成嚴重威脅。", synonyms: ["oceanic", "nautical"], phrases: ["marine biology"] }] },
            { pos: "n.", items: [{ def_zh: "海軍陸戰隊士兵", def_en: "a member of a body of troops trained to serve on land or at sea", sentence: "He served as a Marine for ten years.", sentence_trans: "他服役海軍陸戰隊十年。", synonyms: [], phrases: [] }] }
        ] 
    },
    { 
        id: "m009", word: "Martial", ipa: "/ˈmɑː.ʃəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "軍事的；尚武的", def_en: "of or appropriate to war; warlike", 
                sentence: "The government declared martial law following the uprising.", 
                sentence_trans: "起義後政府宣佈戒嚴。", 
                synonyms: ["military", "soldierly"], phrases: ["martial arts", "martial law"] 
            }] 
        }] 
    },
    { 
        id: "m010", word: "Marvel", ipa: "/ˈmɑː.vəl/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "奇蹟；令人驚奇的事物", def_en: "a wonderful or astonishing person or thing", sentence: "The Great Wall of China is an engineering marvel.", sentence_trans: "中國長城是一個工程奇蹟。", synonyms: ["wonder", "miracle"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "感到驚奇", def_en: "be filled with wonder or astonishment", sentence: "Visitors marveled at the beauty of the cathedral.", sentence_trans: "遊客們對大教堂的美麗感到驚嘆。", synonyms: ["wonder", "gaze"], phrases: ["marvel at"] }] }
        ] 
    },
    { 
        id: "m011", word: "Masculine", ipa: "/ˈmæs.kjə.lɪn/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "男性的；陽剛的", def_en: "having qualities or appearance traditionally associated with men", 
                sentence: "The decor of the room had a distinctly masculine feel.", 
                sentence_trans: "房間的裝飾具有明顯的陽剛氣息。", 
                synonyms: ["manly", "virile"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m012", word: "Massive", ipa: "/ˈmæs.ɪv/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "巨大的；大規模的", def_en: "large and heavy or solid; exceptionally large", 
                sentence: "The company announced a massive investment in renewable energy.", 
                sentence_trans: "該公司宣布對可再生能源進行大規模投資。", 
                synonyms: ["huge", "enormous", "gigantic"], phrases: ["massive scale"] 
            }] 
        }] 
    },
    { 
        id: "m013", word: "Masterpiece", ipa: "/ˈmɑː.stə.piːs/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "傑作；名著", def_en: "a work of outstanding artistry, skill, or workmanship", 
                sentence: "Da Vinci's Mona Lisa is considered a masterpiece of the Renaissance.", 
                sentence_trans: "達文西的蒙娜麗莎被認為是文藝復興時期的傑作。", 
                synonyms: ["magnum opus", "classic"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m014", word: "Mastery", ipa: "/ˈmɑː.stər.i/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "精通；熟練", def_en: "comprehensive knowledge or skill in a subject or accomplishment", 
                sentence: "Achieving mastery of a second language requires years of dedicated practice.", 
                sentence_trans: "要精通第二語言需要多年的專注練習。", 
                synonyms: ["proficiency", "command", "expertise"], phrases: ["mastery of"] 
            }] 
        }] 
    },
    { 
        id: "m015", word: "Mechanism", ipa: "/ˈmek.ə.nɪ.zəm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "機制；機械裝置", def_en: "a system of parts working together in a machine; a piece of machinery", 
                sentence: "The body has a natural defense mechanism against infection.", 
                sentence_trans: "身體具有對抗感染的自然防禦機制。", 
                synonyms: ["apparatus", "process", "system"], phrases: ["coping mechanism", "defense mechanism"] 
            }] 
        }] 
    },
    { 
        id: "m016", word: "Mediate", ipa: "/ˈmiː.di.eɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "調停；斡旋", def_en: "intervene between people in a dispute in order to bring about an agreement or reconciliation", 
                sentence: "The United Nations was called in to mediate the peace talks.", 
                sentence_trans: "聯合國被召集來調停和平談判。", 
                synonyms: ["arbitrate", "negotiate", "intervene"], phrases: ["mediate a dispute"] 
            }] 
        }] 
    },
    { 
        id: "m017", word: "Medication", ipa: "/ˌmed.ɪˈkeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "藥物；藥劑", def_en: "a substance used for medical treatment", 
                sentence: "He is currently on medication for high blood pressure.", 
                sentence_trans: "他目前正在服用治療高血壓的藥物。", 
                synonyms: ["medicine", "drug", "remedy"], phrases: ["take medication"] 
            }] 
        }] 
    },
    { 
        id: "m018", word: "Medieval", ipa: "/ˌmed.iˈiː.vəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "中世紀的", def_en: "relating to the Middle Ages", 
                sentence: "The town is famous for its well-preserved medieval architecture.", 
                sentence_trans: "這座城鎮以其保存完好的中世紀建築而聞名。", 
                synonyms: [], phrases: ["medieval history"] 
            }] 
        }] 
    },
    { 
        id: "m019", word: "Meditate", ipa: "/ˈmed.ɪ.teɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "冥想；沉思", def_en: "think deeply or focus one's mind for a period of time", 
                sentence: "Many people meditate daily to reduce stress and improve concentration.", 
                sentence_trans: "許多人每天冥想以減輕壓力和提高注意力。", 
                synonyms: ["contemplate", "ponder", "reflect"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m020", word: "Melancholy", ipa: "/ˈmel.əŋ.kɒl.i/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "憂鬱；悲哀", def_en: "a feeling of pensive sadness, typically with no obvious cause", sentence: "A deep sense of melancholy settled over him after the news.", sentence_trans: "消息傳來後，他陷入了深深的憂鬱之中。", synonyms: ["sadness", "sorrow"], phrases: [] }] },
            { pos: "adj.", items: [{ def_zh: "憂鬱的", def_en: "sad, gloomy, or depressed", sentence: "The music had a melancholy quality that moved the audience.", sentence_trans: "這音樂帶有一種感動觀眾的憂鬱特質。", synonyms: ["sad", "gloomy"], phrases: [] }] }
        ] 
    },
    { 
        id: "m021", word: "Mentality", ipa: "/menˈtæl.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "心態；思維方式", def_en: "the characteristic attitude of mind or way of thinking of a person or group", 
                sentence: "Changing the public's mentality towards recycling will take time.", 
                sentence_trans: "改變大眾對回收的心態需要時間。", 
                synonyms: ["mindset", "attitude", "outlook"], phrases: ["herd mentality"] 
            }] 
        }] 
    },
    { 
        id: "m022", word: "Mentor", ipa: "/ˈmen.tɔːr/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "導師；良師益友", def_en: "an experienced and trusted adviser", sentence: "A good mentor can provide valuable guidance for your career path.", sentence_trans: "一位好的導師能為你的職涯道路提供寶貴的指導。", synonyms: ["guide", "adviser"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "指導", def_en: "advise or train (someone, especially a younger colleague)", sentence: "He mentors young entrepreneurs in the tech industry.", sentence_trans: "他指導科技行業的年輕創業者。", synonyms: ["guide", "coach"], phrases: [] }] }
        ] 
    },
    { 
        id: "m023", word: "Merchandise", ipa: "/ˈmɜː.tʃən.daɪs/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "商品；貨物", def_en: "goods to be bought and sold", sentence: "The store displays its merchandise in an attractive manner.", sentence_trans: "這家店以吸引人的方式展示其商品。", synonyms: ["goods", "products", "stock"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "推銷；銷售", def_en: "promote the sale of (goods)", sentence: "The band makes a lot of money merchandising t-shirts.", sentence_trans: "樂團靠推銷T恤賺了很多錢。", synonyms: ["market", "sell"], phrases: [] }] }
        ] 
    },
    { 
        id: "m024", word: "Merge", ipa: "/mɜːdʒ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "合併；融合", def_en: "combine or cause to combine to form a single entity", 
                sentence: "The two banks agreed to merge to form a larger financial institution.", 
                sentence_trans: "這兩家銀行同意合併以組成一家更大的金融機構。", 
                synonyms: ["join", "unite", "amalgamate"], phrases: ["merge with"] 
            }] 
        }] 
    },
    { 
        id: "m025", word: "Metaphor", ipa: "/ˈmet.ə.fɔːr/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "隱喻；暗喻", def_en: "a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable", 
                sentence: "The author uses the journey as a metaphor for life.", 
                sentence_trans: "作者將旅程作為生命的隱喻。", 
                synonyms: ["analogy", "symbol"], phrases: ["mixed metaphor"] 
            }] 
        }] 
    },
    { 
        id: "m026", word: "Metropolitan", ipa: "/ˌmet.rəˈpɒl.ɪ.tən/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "大都會的", def_en: "relating to or denoting a metropolis", 
                sentence: "The metropolitan area has a population of over ten million.", 
                sentence_trans: "這個大都會地區的人口超過一千萬。", 
                synonyms: ["urban", "city"], phrases: ["metropolitan area"] 
            }] 
        }] 
    },
    { 
        id: "m027", word: "Migrant", ipa: "/ˈmaɪ.ɡrənt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "移民；候鳥", def_en: "a person who moves from one place to another, especially in order to find work or better living conditions", 
                sentence: "The government is debating new policies regarding economic migrants.", 
                sentence_trans: "政府正在辯論關於經濟移民的新政策。", 
                synonyms: ["immigrant", "emigrant"], phrases: ["migrant worker"] 
            }] 
        }] 
    },
    { 
        id: "m028", word: "Migrate", ipa: "/maɪˈɡreɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "遷移；移居", def_en: "move from one region or habitat to another", 
                sentence: "Many bird species migrate south for the winter.", 
                sentence_trans: "許多鳥類物種向南遷徙過冬。", 
                synonyms: ["relocate", "move"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m029", word: "Migration", ipa: "/maɪˈɡreɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "遷移；移民", def_en: "movement from one part of something to another", 
                sentence: "Scientists track the annual migration of whales.", 
                sentence_trans: "科學家追蹤鯨魚的年度遷徙。", 
                synonyms: ["movement", "relocation"], phrases: ["mass migration"] 
            }] 
        }] 
    },
    { 
        id: "m030", word: "Milestone", ipa: "/ˈmaɪl.stəʊn/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "里程碑", def_en: "an action or event marking a significant change or stage in development", 
                sentence: "Graduating from university is a major milestone in life.", 
                sentence_trans: "大學畢業是人生中的一個重要里程碑。", 
                synonyms: ["landmark", "achievement"], phrases: ["reach a milestone"] 
            }] 
        }] 
    },
    { 
        id: "m031", word: "Mimic", ipa: "/ˈmɪm.ɪk/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "模仿", def_en: "imitate (someone or their actions or words), especially in order to entertain or ridicule", sentence: "The parrot can mimic human speech with surprising accuracy.", sentence_trans: "這隻鸚鵡能以驚人的準確度模仿人類說話。", synonyms: ["imitate", "copy"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "善於模仿的人", def_en: "a person skilled in imitating the voice, mannerisms, or movements of others", sentence: "He is a talented mimic who can do impressions of many celebrities.", sentence_trans: "他是一個有天賦的模仿者，能模仿許多名人。", synonyms: ["imitator"], phrases: [] }] }
        ] 
    },
    { 
        id: "m032", word: "Mingle", ipa: "/ˈmɪŋ.ɡəl/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "混合；交際", def_en: "mix or cause to mix together; move freely around a place or at a social function", 
                sentence: "The guests began to mingle after the formal presentation.", 
                sentence_trans: "正式報告結束後，客人們開始交際。", 
                synonyms: ["mix", "blend", "socialize"], phrases: ["mingle with"] 
            }] 
        }] 
    },
    { 
        id: "m033", word: "Miniature", ipa: "/ˈmɪn.ə.tʃər/", priority: 10, 
        meanings: [
            { pos: "adj.", items: [{ def_zh: "微型的", def_en: "of a much smaller size than normal; very small", sentence: "He collects miniature cars.", sentence_trans: "他收藏微型汽車。", synonyms: ["tiny", "small-scale"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "縮影；微型畫", def_en: "a thing that is much smaller than is normal", sentence: "The park is a miniature of the country's landscape.", sentence_trans: "這座公園是該國景觀的縮影。", synonyms: ["replica"], phrases: ["in miniature"] }] }
        ] 
    },
    { 
        id: "m034", word: "Minimal", ipa: "/ˈmɪn.ɪ.məl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "最小的；極少的", def_en: "of a minimum amount, quantity, or degree", 
                sentence: "The storm caused only minimal damage to the building.", 
                sentence_trans: "暴風雨只對建築物造成了極小的損害。", 
                synonyms: ["minimum", "least", "slight"], phrases: ["minimal effort"] 
            }] 
        }] 
    },
    { 
        id: "m035", word: "Minimize", ipa: "/ˈmɪn.ɪ.maɪz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "最小化；輕視", def_en: "reduce to the smallest possible amount or degree", 
                sentence: "We must take steps to minimize the risk of infection.", 
                sentence_trans: "我們必須採取措施將感染風險降至最低。", 
                synonyms: ["reduce", "decrease", "lessen"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m036", word: "Miraculous", ipa: "/mɪˈræk.jə.ləs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "奇蹟般的", def_en: "occurring through divine or supernatural intervention, or manifesting such power", 
                sentence: "The doctors described his recovery as miraculous.", 
                sentence_trans: "醫生形容他的康復是奇蹟般的。", 
                synonyms: ["extraordinary", "phenomenal"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m037", word: "Miscellaneous", ipa: "/ˌmɪs.əlˈeɪ.ni.əs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "混雜的；各式各樣的", def_en: "(of items or people gathered or considered together) of various types or from different sources", 
                sentence: "The box contained miscellaneous items from the attic.", 
                sentence_trans: "盒子裡裝著閣樓裡各式各樣的物品。", 
                synonyms: ["assorted", "various", "mixed"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m038", word: "Mischievous", ipa: "/ˈmɪs.tʃɪ.vəs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "淘氣的；惡作劇的", def_en: "(of a person, animal, or their behavior) causing or showing a fondness for causing trouble in a playful way", 
                sentence: "The mischievous child hid his sister's toys.", 
                sentence_trans: "那個淘氣的孩子藏起了他妹妹的玩具。", 
                synonyms: ["naughty", "playful"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m039", word: "Mobilize", ipa: "/ˈməʊ.bɪ.laɪz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "動員；調動", def_en: "(of a country or its government) prepare and organize (troops) for active service", 
                sentence: "The government mobilized the army to help with disaster relief.", 
                sentence_trans: "政府動員軍隊協助救災。", 
                synonyms: ["marshal", "deploy", "rally"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m040", word: "Mock", ipa: "/mɒk/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "嘲笑；模仿", def_en: "tease or laugh at in a scornful or contemptuous manner", sentence: "It is unkind to mock people for their mistakes.", sentence_trans: "嘲笑別人的錯誤是不厚道的。", synonyms: ["ridicule", "tease"], phrases: [] }] },
            { pos: "adj.", items: [{ def_zh: "模擬的；假的", def_en: "not authentic or real, but without the intention to deceive", sentence: "The students took a mock exam to prepare for the finals.", sentence_trans: "學生們參加了模擬考試以準備期末考。", synonyms: ["fake", "simulated"], phrases: ["mock exam"] }] }
        ] 
    },
    { 
        id: "m041", word: "Mode", ipa: "/məʊd/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "模式；方式", def_en: "a way or manner in which something occurs or is experienced, expressed, or done", 
                sentence: "Railways are an efficient mode of transport for heavy goods.", 
                sentence_trans: "鐵路是重型貨物的一種高效運輸方式。", 
                synonyms: ["manner", "method", "way"], phrases: ["mode of transport"] 
            }] 
        }] 
    },
    { 
        id: "m042", word: "Modernization", ipa: "/ˌmɒd.ən.aɪˈzeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "現代化", def_en: "the process of adapting something to modern needs or habits", 
                sentence: "The modernization of the factory increased production efficiency.", 
                sentence_trans: "工廠的現代化提高了生產效率。", 
                synonyms: ["updating", "renovation"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m043", word: "Modify", ipa: "/ˈmɒd.ɪ.faɪ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "修改；更改", def_en: "make partial or minor changes to (something), typically so as to improve it", 
                sentence: "We may need to modify the plan to suit the budget.", 
                sentence_trans: "我們可能需要修改計畫以適應預算。", 
                synonyms: ["alter", "change", "adjust"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m044", word: "Molecule", ipa: "/ˈmɒl.ɪ.kjuːl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "分子", def_en: "a group of atoms bonded together", 
                sentence: "Water is composed of molecules containing two hydrogen atoms and one oxygen atom.", 
                sentence_trans: "水由包含兩個氫原子和一個氧原子的分子組成。", 
                synonyms: ["particle"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m045", word: "Momentum", ipa: "/məˈmen.təm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "動力；氣勢", def_en: "the impetus gained by a moving object", 
                sentence: "The campaign is gaining momentum as the election approaches.", 
                sentence_trans: "隨著選舉臨近，競選活動的氣勢越來越強。", 
                synonyms: ["impetus", "energy", "force"], phrases: ["gain momentum"] 
            }] 
        }] 
    },
    { 
        id: "m046", word: "Monarch", ipa: "/ˈmɒn.ək/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "君主", def_en: "a sovereign head of state, especially a king, queen, or emperor", 
                sentence: "The monarch has limited political power in a constitutional monarchy.", 
                sentence_trans: "在君主立憲制中，君主的政治權力有限。", 
                synonyms: ["sovereign", "ruler", "king/queen"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m047", word: "Monetary", ipa: "/ˈmʌn.ɪ.tri/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "貨幣的；金融的", def_en: "relating to money or currency", 
                sentence: "The central bank controls the country's monetary policy.", 
                sentence_trans: "中央銀行控制該國的貨幣政策。", 
                synonyms: ["financial", "fiscal", "pecuniary"], phrases: ["monetary policy"] 
            }] 
        }] 
    },
    { 
        id: "m048", word: "Monopoly", ipa: "/məˈnɒp.əl.i/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "壟斷；獨占", def_en: "the exclusive possession or control of the supply or trade in a commodity or service", 
                sentence: "The government passed laws to prevent any single company from having a monopoly on the market.", 
                sentence_trans: "政府通過法律防止任何單一公司壟斷市場。", 
                synonyms: ["dominance", "control"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m049", word: "Monotony", ipa: "/məˈnɒt.ən.i/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "單調；千篇一律", def_en: "lack of variety and interest; tedious repetition and routine", 
                sentence: "She struggled with the monotony of her daily office job.", 
                sentence_trans: "她對日常辦公室工作的單調感到厭煩。", 
                synonyms: ["boredom", "dullness", "tedium"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m050", word: "Monstrous", ipa: "/ˈmɒn.strəs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "駭人的；巨大的", def_en: "having the ugly or frightening appearance of a monster; inhumanly cruel or wicked", 
                sentence: "It was a monstrous crime that shocked the entire nation.", 
                sentence_trans: "這是一起震驚全國的駭人罪行。", 
                synonyms: ["grotesque", "hideous", "atrocious"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m051", word: "Morale", ipa: "/məˈrɑːl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "士氣", def_en: "the confidence, enthusiasm, and discipline of a person or group", 
                sentence: "The victory boosted the team's morale ahead of the finals.", 
                sentence_trans: "這場勝利在決賽前提振了球隊的士氣。", 
                synonyms: ["confidence", "spirit"], phrases: ["boost morale"] 
            }] 
        }] 
    },
    { 
        id: "m052", word: "Morality", ipa: "/məˈræl.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "道德；德行", def_en: "principles concerning the distinction between right and wrong or good and bad behavior", 
                sentence: "The debate centered on the morality of capital punishment.", 
                sentence_trans: "辯論集中在死刑的道德性上。", 
                synonyms: ["ethics", "virtue", "integrity"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m053", word: "Mortal", ipa: "/ˈmɔː.təl/", priority: 10, 
        meanings: [
            { pos: "adj.", items: [{ def_zh: "會死的；致命的", def_en: "(of a living human being, often in contrast to a divine being) subject to death", sentence: "All human beings are mortal.", sentence_trans: "所有人類都是會死的。", synonyms: ["perishable", "deadly"], phrases: ["mortal danger"] }] },
            { pos: "n.", items: [{ def_zh: "凡人", def_en: "a human being subject to death, often contrasted with a divine being", sentence: "We are mere mortals.", sentence_trans: "我們只是凡人。", synonyms: ["human"], phrases: [] }] }
        ] 
    },
    { 
        id: "m054", word: "Mortality", ipa: "/mɔːˈtæl.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "死亡率；必死性", def_en: "the state of being subject to death; the number of deaths in a given area or period", 
                sentence: "Infant mortality rates have decreased significantly in the last century.", 
                sentence_trans: "上個世紀嬰兒死亡率顯著下降。", 
                synonyms: [], phrases: ["mortality rate"] 
            }] 
        }] 
    },
    { 
        id: "m055", word: "Mortgage", ipa: "/ˈmɔː.ɡɪdʒ/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "抵押貸款；房貸", def_en: "a legal agreement by which a bank or other creditor lends money at interest in exchange for taking title of a debtor's property", sentence: "They took out a 30-year mortgage to buy their house.", sentence_trans: "他們申請了30年期的抵押貸款來買房。", synonyms: ["loan"], phrases: ["pay off a mortgage"] }] },
            { pos: "v.", items: [{ def_zh: "抵押", def_en: "convey (a property) to a creditor as security on a loan", sentence: "He had to mortgage his land to pay his debts.", sentence_trans: "他不得不抵押他的土地來償還債務。", synonyms: [], phrases: [] }] }
        ] 
    },
    { 
        id: "m056", word: "Motive", ipa: "/ˈməʊ.tɪv/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "動機", def_en: "a reason for doing something, especially one that is hidden or not obvious", 
                sentence: "Police are trying to establish a motive for the crime.", 
                sentence_trans: "警方正試圖確定犯罪動機。", 
                synonyms: ["reason", "motivation", "incentive"], phrases: ["ulterior motive"] 
            }] 
        }] 
    },
    { 
        id: "m057", word: "Motto", ipa: "/ˈmɒt.əʊ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "座右銘；格言", def_en: "a short sentence or phrase chosen as encapsulating the beliefs or ideals guiding an individual, family, or institution", 
                sentence: "The school's motto is 'Excellence in Education'.", 
                sentence_trans: "這所學校的座右銘是「卓越教育」。", 
                synonyms: ["slogan", "maxim", "catchphrase"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m058", word: "Mound", ipa: "/maʊnd/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "土堆；小丘", def_en: "a rounded mass projecting above a surface", 
                sentence: "Archaeologists found ancient artifacts buried in the mound.", 
                sentence_trans: "考古學家在土堆中發現了古代文物。", 
                synonyms: ["heap", "pile", "hillock"], phrases: ["burial mound"] 
            }] 
        }] 
    },
    { 
        id: "m059", word: "Mount", ipa: "/maʊnt/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "登上；發起", def_en: "climb up (stairs, a hill, or other rising surface); organize and initiate (a campaign or other course of action)", sentence: "The organizers plan to mount a campaign to raise awareness.", sentence_trans: "組織者計劃發起一項運動以提高人們的意識。", synonyms: ["ascend", "launch", "organize"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "山；坐騎", def_en: "a mountain or hill (archaic except in place names); a horse used for riding", sentence: "They climbed Mount Everest.", sentence_trans: "他們攀登了聖母峰。", synonyms: ["mountain"], phrases: [] }] }
        ] 
    },
    { 
        id: "m060", word: "Mourn", ipa: "/mɔːn/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "哀悼；悲嘆", def_en: "feel or show deep sorrow or regret for (someone or their death)", 
                sentence: "The entire nation mourned the death of the beloved leader.", 
                sentence_trans: "全國哀悼這位受愛戴領袖的逝世。", 
                synonyms: ["grieve", "lament", "sorrow"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m061", word: "Municipal", ipa: "/mjuːˈnɪs.ɪ.pəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "市政的；市的", def_en: "relating to a city or town or its governing body", 
                sentence: "The municipal government is responsible for waste collection and street maintenance.", 
                sentence_trans: "市政府負責垃圾收集和街道維護。", 
                synonyms: ["civic", "city", "urban"], phrases: ["municipal elections"] 
            }] 
        }] 
    },
    { 
        id: "m062", word: "Muscular", ipa: "/ˈmʌs.kjə.lər/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "肌肉的；強壯的", def_en: "relating to or affecting the muscles; having well-developed muscles", 
                sentence: "Regular exercise promotes muscular strength and endurance.", 
                sentence_trans: "規律運動促進肌肉力量和耐力。", 
                synonyms: ["brawny", "sinewy", "athletic"], phrases: ["muscular system"] 
            }] 
        }] 
    },
    { 
        id: "m063", word: "Muse", ipa: "/mjuːz/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "沉思；冥想", def_en: "be absorbed in thought", sentence: "He mused on the meaning of life.", sentence_trans: "他沉思著生命的意義。", synonyms: ["ponder", "contemplate", "reflect"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "靈感女神", def_en: "a person or personified force who is the source of inspiration for a creative artist", sentence: "She was the artist's muse and inspiration.", sentence_trans: "她是這位藝術家的靈感女神和靈感來源。", synonyms: ["inspiration"], phrases: [] }] }
        ] 
    },
    { 
        id: "m064", word: "Mustache", ipa: "/məˈstɑːʃ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "鬍鬚", def_en: "a strip of hair left to grow above the upper lip", 
                sentence: "He trimmed his mustache neatly.", 
                sentence_trans: "他整齊地修剪了他的鬍鬚。", 
                synonyms: [], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m065", word: "Mustard", ipa: "/ˈmʌs.təd/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "芥末", def_en: "a hot-tasting yellow or brown paste made from the crushed seeds of certain plants", 
                sentence: "She put some mustard on her hot dog.", 
                sentence_trans: "她在熱狗上加了一些芥末。", 
                synonyms: [], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "m066", word: "Mute", ipa: "/mjuːt/", priority: 10, 
        meanings: [
            { pos: "adj.", items: [{ def_zh: "沈默的；啞的", def_en: "refraining from speech or temporarily speechless", sentence: "She remained mute throughout the trial.", sentence_trans: "她在整個審判過程中保持沈默。", synonyms: ["silent", "dumb", "speechless"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "消除聲音；減弱", def_en: "turn off the sound of", sentence: "Please mute your microphone during the presentation.", sentence_trans: "請在演示期間將麥克風靜音。", synonyms: ["silence", "quiet"], phrases: [] }] }
        ] 
    },
    { 
        id: "m067", word: "Myth", ipa: "/mɪθ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "神話；迷思", def_en: "a traditional story; a widely held but false belief or idea", 
                sentence: "It is a common myth that lightning never strikes the same place twice.", 
                sentence_trans: "閃電從不擊中同一個地方兩次是一個常見的迷思。", 
                synonyms: ["legend", "fable", "misconception"], phrases: ["Greek myth", "urban myth"] 
            }] 
        }] 
    }
]);