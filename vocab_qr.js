// =================================================================================
// 📚 雅思單字資料庫 - Q, R 終極完整版 (Complete Q/R-List)
// =================================================================================
// 範圍：Q (Qualification) ~ R (Ruthless)
// 特色：大幅擴充 R 開頭單字量，包含多重詞性、雅思學術例句

window.VOCAB_LIBRARY = window.VOCAB_LIBRARY || [];
window.VOCAB_LIBRARY = window.VOCAB_LIBRARY.concat([
    // =========================================================================
    // 🇶 Q Words
    // =========================================================================
    { 
        id: "q001", word: "Qualification", ipa: "/ˌkwɒl.ɪ.fɪˈkeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "資格；學歷", def_en: "a quality or accomplishment that makes someone suitable for a particular job", 
                sentence: "Possessing the relevant academic qualifications is a prerequisite for this advanced research position.", 
                sentence_trans: "擁有相關的學歷是申請這個高級研究職位的先決條件。", 
                synonyms: ["credential", "capability"], phrases: ["meet the qualifications"] 
            }] 
        }] 
    },
    { 
        id: "q002", word: "Qualify", ipa: "/ˈkwɒl.ɪ.faɪ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "取得資格；使合格", def_en: "be entitled to a particular benefit or privilege", 
                sentence: "To qualify for the scholarship, students must demonstrate both academic excellence and financial need.", 
                sentence_trans: "為了取得獎學金資格，學生必須同時展現優異的學業成績和財務需求。", 
                synonyms: ["be eligible", "authorize"], phrases: ["qualify for"] 
            }] 
        }] 
    },
    { 
        id: "q003", word: "Quest", ipa: "/kwest/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "尋求；探索", def_en: "a long or arduous search for something", 
                sentence: "The scientist's quest for a cure led him to explore unconventional medical treatments.", 
                sentence_trans: "這位科學家對治療方法的尋求引導他探索非傳統的醫療手段。", 
                synonyms: ["search", "pursuit"], phrases: ["quest for knowledge"] 
            }] 
        }] 
    },
    { 
        id: "q004", word: "Questionnaire", ipa: "/ˌkwes.tʃəˈneər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "問卷", def_en: "a set of printed questions with a choice of answers", 
                sentence: "Participants were asked to complete a detailed questionnaire regarding their dietary habits.", 
                sentence_trans: "參與者被要求完成一份關於他們飲食習慣的詳細問卷。", 
                synonyms: ["survey", "form"], phrases: ["fill out a questionnaire"] 
            }] 
        }] 
    },
    { 
        id: "q005", word: "Quota", ipa: "/ˈkwəʊ.tə/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "配額；定額", def_en: "a fixed share of something that a person or group is entitled to receive", 
                sentence: "The government has imposed a strict quota on the importation of foreign textiles.", 
                sentence_trans: "政府對外國紡織品的進口實施了嚴格的配額。", 
                synonyms: ["allocation", "limit"], phrases: ["meet the quota"] 
            }] 
        }] 
    },
    { 
        id: "q006", word: "Quiver", ipa: "/ˈkwɪv.ər/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "顫抖", def_en: "tremble or shake with a slight rapid motion", sentence: "Her lip quivered with emotion as she spoke.", sentence_trans: "她說話時嘴唇因激動而顫抖。", synonyms: ["tremble", "shake"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "箭袋", def_en: "a case for carrying arrows", sentence: "The archer pulled an arrow from his quiver.", sentence_trans: "弓箭手從箭袋中拔出一支箭。", synonyms: [], phrases: [] }] }
        ] 
    },

    // =========================================================================
    // 🇷 R Words (Expanded)
    // =========================================================================
    { 
        id: "r001", word: "Racism", ipa: "/ˈreɪ.sɪ.zəm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "種族主義", def_en: "prejudice, discrimination, or antagonism directed against a person on the basis of their membership in a particular racial group", 
                sentence: "Education is a powerful tool in the fight against systemic racism and social injustice.", 
                sentence_trans: "教育是對抗系統性種族主義和社會不公的有力工具。", 
                synonyms: ["prejudice", "bigotry"], phrases: ["combat racism"] 
            }] 
        }] 
    },
    { 
        id: "r002", word: "Radiant", ipa: "/ˈreɪ.di.ənt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "容光煥發的；輻射的", def_en: "sending out light; shining or glowing brightly", 
                sentence: "She looked radiant in her wedding dress, her face glowing with happiness.", 
                sentence_trans: "她穿著婚紗看起來容光煥發，臉上洋溢著幸福。", 
                synonyms: ["shining", "glowing"], phrases: ["radiant smile"] 
            }] 
        }] 
    },
    { 
        id: "r003", word: "Radical", ipa: "/ˈræd.ɪ.kəl/", priority: 10, 
        meanings: [
            { pos: "adj.", items: [{ def_zh: "激進的；根本的", def_en: "advocating thorough or complete political or social change", sentence: "The candidate proposed radical reforms to the healthcare system.", sentence_trans: "候選人提出了對醫療體系的激進改革。", synonyms: ["revolutionary", "extreme"], phrases: ["radical change"] }] },
            { pos: "n.", items: [{ def_zh: "激進分子", def_en: "a person who advocates thorough or complete political or social reform", sentence: "He was considered a radical in his youth.", sentence_trans: "他在年輕時被認為是激進分子。", synonyms: ["extremist"], phrases: [] }] }
        ] 
    },
    { 
        id: "r004", word: "Rally", ipa: "/ˈræl.i/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "集結；恢復", def_en: "come together again in order to continue fighting", sentence: "The troops rallied around their commander to launch a counterattack.", sentence_trans: "部隊集結在指揮官周圍發動反擊。", synonyms: ["regroup", "assemble"], phrases: ["rally support"] }] },
            { pos: "n.", items: [{ def_zh: "集會；止跌回升", def_en: "a mass meeting of people making a political protest", sentence: "Thousands attended the political rally in the city square.", sentence_trans: "數千人參加了城市廣場的政治集會。", synonyms: ["assembly", "gathering"], phrases: ["stock market rally"] }] }
        ] 
    },
    { 
        id: "r005", word: "Rampant", ipa: "/ˈræm.pənt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "猖獗的；蔓延的", def_en: "flourishing or spreading unchecked", 
                sentence: "Corruption was rampant in the local government before the reforms were enacted.", 
                sentence_trans: "在改革實施之前，地方政府的腐敗現象十分猖獗。", 
                synonyms: ["uncontrolled", "widespread"], phrases: ["rampant inflation"] 
            }] 
        }] 
    },
    { 
        id: "r006", word: "Random", ipa: "/ˈræn.dəm/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "隨機的", def_en: "made, done, happening, or chosen without method", 
                sentence: "The participants were chosen via a random selection process to ensure fairness.", 
                sentence_trans: "參與者是通過隨機選擇過程選出的，以確保公平。", 
                synonyms: ["arbitrary", "haphazard"], phrases: ["at random"] 
            }] 
        }] 
    },
    { 
        id: "r007", word: "Ratify", ipa: "/ˈræt.ɪ.faɪ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "批准；認可", def_en: "sign or give formal consent to (a treaty, contract, or agreement)", 
                sentence: "The parliament voted to ratify the new trade agreement.", 
                sentence_trans: "議會投票批准了新的貿易協定。", 
                synonyms: ["confirm", "approve"], phrases: ["ratify a treaty"] 
            }] 
        }] 
    },
    { 
        id: "r008", word: "Rational", ipa: "/ˈræʃ.ən.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "理性的；合理的", def_en: "based on or in accordance with reason or logic", 
                sentence: "We need to have a rational discussion about the budget without letting emotions take over.", 
                sentence_trans: "我們需要對預算進行理性的討論，不要讓情緒主導。", 
                synonyms: ["logical", "sensible"], phrases: ["rational decision"] 
            }] 
        }] 
    },
    { 
        id: "r009", word: "Realism", ipa: "/ˈrɪə.lɪ.zəm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "現實主義；務實", def_en: "the attitude or practice of accepting a situation as it is", 
                sentence: "His approach to foreign policy is grounded in realism rather than idealism.", 
                sentence_trans: "他的外交政策方針是基於現實主義而非理想主義。", 
                synonyms: ["pragmatism"], phrases: ["magical realism"] 
            }] 
        }] 
    },
    { 
        id: "r010", word: "Realm", ipa: "/relm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "領域；王國", def_en: "a field or domain of activity or interest", 
                sentence: "Recent discoveries in the realm of astrophysics have challenged our understanding of the universe.", 
                sentence_trans: "天體物理學領域的最新發現挑戰了我們對宇宙的理解。", 
                synonyms: ["domain", "sphere"], phrases: ["within the realm of possibility"] 
            }] 
        }] 
    },
    { 
        id: "r011", word: "Reap", ipa: "/riːp/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "收割；獲得(好處)", def_en: "receive (a reward or benefit) as a consequence of one's own or other people's actions", 
                sentence: "Those who invest in education will eventually reap the benefits of a more skilled workforce.", 
                sentence_trans: "投資於教育的人最終將獲得技術更熟練勞動力的好處。", 
                synonyms: ["harvest", "garner"], phrases: ["reap the rewards"] 
            }] 
        }] 
    },
    { 
        id: "r012", word: "Reassure", ipa: "/ˌriː.əˈʃɔːr/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使安心；保證", def_en: "say or do something to remove the doubts and fears of someone", 
                sentence: "The doctor tried to reassure the patient that the surgery was routine and safe.", 
                sentence_trans: "醫生試圖讓病人安心，表示手術是常規且安全的。", 
                synonyms: ["comfort", "encourage"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r013", word: "Rebellion", ipa: "/rɪˈbel.i.ən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "叛亂；反抗", def_en: "an act of violent or open resistance to an established government", 
                sentence: "The oppressive regime was eventually overthrown by a popular rebellion.", 
                sentence_trans: "這個壓迫政權最終被人民起義推翻。", 
                synonyms: ["uprising", "revolt"], phrases: ["crush a rebellion"] 
            }] 
        }] 
    },
    { 
        id: "r014", word: "Recession", ipa: "/rɪˈseʃ.ən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "經濟衰退", def_en: "a period of temporary economic decline", 
                sentence: "The country is facing a severe recession due to the collapse of the housing market.", 
                sentence_trans: "由於房地產市場崩潰，該國正面臨嚴重的經濟衰退。", 
                synonyms: ["downturn", "slump"], phrases: ["economic recession"] 
            }] 
        }] 
    },
    { 
        id: "r015", word: "Recipient", ipa: "/rɪˈsɪp.i.ənt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "接受者；受領者", def_en: "a person or thing that receives something", 
                sentence: "She was the recipient of the prestigious Nobel Prize for Literature.", 
                sentence_trans: "她是著名的諾貝爾文學獎的獲獎者。", 
                synonyms: ["receiver", "beneficiary"], phrases: ["award recipient"] 
            }] 
        }] 
    },
    { 
        id: "r016", word: "Reckless", ipa: "/ˈrek.ləs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "魯莽的；不計後果的", def_en: "without thinking or caring about the consequences of an action", 
                sentence: "His reckless driving endangered the lives of other motorists.", 
                sentence_trans: "他魯莽的駕駛危及了其他駕駛者的生命。", 
                synonyms: ["rash", "careless"], phrases: ["reckless behavior"] 
            }] 
        }] 
    },
    { 
        id: "r017", word: "Reckon", ipa: "/ˈrek.ən/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "認為；估算", def_en: "establish by counting or calculation; consider", 
                sentence: "I reckon that we will arrive at our destination by noon.", 
                sentence_trans: "我估計我們會在中午到達目的地。", 
                synonyms: ["calculate", "believe"], phrases: ["reckon with"] 
            }] 
        }] 
    },
    { 
        id: "r018", word: "Reconcile", ipa: "/ˈrek.ən.saɪl/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "調和；使和解", def_en: "restore friendly relations between", 
                sentence: "It is often difficult to reconcile the demands of a career with family life.", 
                sentence_trans: "要調和職業需求與家庭生活往往很困難。", 
                synonyms: ["harmonize", "resolve"], phrases: ["reconcile differences"] 
            }] 
        }] 
    },
    { 
        id: "r019", word: "Recreational", ipa: "/ˌrek.riˈeɪ.ʃən.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "娛樂的；休閒的", def_en: "relating to or denoting activity done for enjoyment when one is not working", 
                sentence: "The city provides many recreational facilities, such as parks and swimming pools.", 
                sentence_trans: "這座城市提供許多休閒設施，如公園和游泳池。", 
                synonyms: ["leisure", "fun"], phrases: ["recreational activities"] 
            }] 
        }] 
    },
    { 
        id: "r020", word: "Recruit", ipa: "/rɪˈkruːt/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "招募；徵召", def_en: "enroll (someone) as a member or worker in an organization", sentence: "The company is actively recruiting talented engineers from top universities.", sentence_trans: "該公司正積極從頂尖大學招募有才華的工程師。", synonyms: ["enlist", "hire"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "新兵；新成員", def_en: "a person newly enlisted", sentence: "The army recruits were subjected to rigorous physical training.", sentence_trans: "軍隊新兵接受了嚴格的體能訓練。", synonyms: ["trainee", "novice"], phrases: [] }] }
        ] 
    },
    { 
        id: "r021", word: "Redundancy", ipa: "/rɪˈdʌn.dən.si/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "裁員；多餘", def_en: "the state of being no longer needed or useful", 
                sentence: "The closure of the factory led to hundreds of redundancies.", 
                sentence_trans: "工廠的關閉導致數百人被裁員。", 
                synonyms: ["layoff", "excess"], phrases: ["voluntary redundancy"] 
            }] 
        }] 
    },
    { 
        id: "r022", word: "Redundant", ipa: "/rɪˈdʌn.dənt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "多餘的；被裁員的", def_en: "not or no longer needed or useful", 
                sentence: "The introduction of automation made many manual jobs redundant.", 
                sentence_trans: "自動化的引入使得許多體力工作變得多餘。", 
                synonyms: ["unnecessary", "superfluous"], phrases: ["make redundant"] 
            }] 
        }] 
    },
    { 
        id: "r023", word: "Reef", ipa: "/riːf/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "礁；暗礁", def_en: "a ridge of jagged rock, coral, or sand just above or below the surface of the sea", 
                sentence: "The Great Barrier Reef is the world's largest coral reef system.", 
                sentence_trans: "大堡礁是世界上最大的珊瑚礁系統。", 
                synonyms: ["ridge", "shoal"], phrases: ["coral reef"] 
            }] 
        }] 
    },
    { 
        id: "r024", word: "Referee", ipa: "/ˌref.əˈriː/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "裁判", def_en: "an official who watches a game or match closely to ensure that the rules are adhered to", 
                sentence: "The referee blew the whistle to signal the end of the match.", 
                sentence_trans: "裁判吹響哨子示意比賽結束。", 
                synonyms: ["umpire", "judge"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r025", word: "Referendum", ipa: "/ˌref.əˈren.dəm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "公投", def_en: "a general vote by the electorate on a single political question", 
                sentence: "The country held a referendum on whether to join the European Union.", 
                sentence_trans: "該國舉行了關於是否加入歐盟的公投。", 
                synonyms: ["public vote", "plebiscite"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r026", word: "Refine", ipa: "/rɪˈfaɪn/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "提煉；改良", def_en: "remove impurities or unwanted elements from; improve by making small changes", 
                sentence: "Engineers are constantly working to refine the engine's performance.", 
                sentence_trans: "工程師們不斷努力改良引擎的性能。", 
                synonyms: ["purify", "polish", "improve"], phrases: ["refine skills"] 
            }] 
        }] 
    },
    { 
        id: "r027", word: "Refinement", ipa: "/rɪˈfaɪn.mənt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "改良；精緻", def_en: "the process of removing impurities or unwanted elements; improvement", 
                sentence: "The software needs some refinement before it is released to the public.", 
                sentence_trans: "這款軟體在向公眾發布前需要一些改良。", 
                synonyms: ["improvement", "polishing"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r028", word: "Reflective", ipa: "/rɪˈflek.tɪv/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "反射的；深思的", def_en: "providing a reflection; relating to or characterized by deep thought", 
                sentence: "He was in a reflective mood, thinking back on his life choices.", 
                sentence_trans: "他處於深思的情緒中，回想著自己的人生選擇。", 
                synonyms: ["thoughtful", "contemplative"], phrases: ["reflective surface"] 
            }] 
        }] 
    },
    { 
        id: "r029", word: "Refuge", ipa: "/ˈref.juːdʒ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "避難所；庇護", def_en: "a condition of being safe or sheltered from pursuit, danger, or trouble", 
                sentence: "During the storm, the hikers sought refuge in a cave.", 
                sentence_trans: "在暴風雨期間，登山者在山洞裡尋求庇護。", 
                synonyms: ["shelter", "sanctuary"], phrases: ["take refuge"] 
            }] 
        }] 
    },
    { 
        id: "r030", word: "Refute", ipa: "/rɪˈfjuːt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "反駁；駁斥", def_en: "prove (a statement or theory) to be wrong or false", 
                sentence: "The scientist presented data to refute the claims made by the opposition.", 
                sentence_trans: "這位科學家提出了數據來反駁反對派的說法。", 
                synonyms: ["disprove", "rebut"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r031", word: "Regardless", ipa: "/rɪˈɡɑːd.ləs/", priority: 10, 
        meanings: [{ 
            pos: "adv.", items: [{ 
                def_zh: "不管；不顧", def_en: "without paying attention to the present situation; despite the prevailing circumstances", 
                sentence: "He decided to proceed with the plan regardless of the risks involved.", 
                sentence_trans: "他決定不顧風險繼續執行該計畫。", 
                synonyms: ["anyway", "nevertheless"], phrases: ["regardless of"] 
            }] 
        }] 
    },
    { 
        id: "r032", word: "Regime", ipa: "/reɪˈʒiːm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "政權；制度", def_en: "a government, especially an authoritarian one", 
                sentence: "The totalitarian regime was known for its suppression of free speech.", 
                sentence_trans: "該極權政權以壓制言論自由而聞名。", 
                synonyms: ["government", "authority"], phrases: ["change of regime"] 
            }] 
        }] 
    },
    { 
        id: "r033", word: "Rehabilitate", ipa: "/ˌriː.həˈbɪl.ɪ.teɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使康復；使復原", def_en: "restore (someone) to health or normal life by training and therapy", 
                sentence: "The program aims to rehabilitate offenders and help them reintegrate into society.", 
                sentence_trans: "該計畫旨在使罪犯康復並幫助他們重新融入社會。", 
                synonyms: ["restore", "recover"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r034", word: "Rehearsal", ipa: "/rɪˈhɜː.səl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "排練；演習", def_en: "a practice or trial performance of a play or other work", 
                sentence: "The actors gathered for the final dress rehearsal before opening night.", 
                sentence_trans: "演員們聚集在一起進行首演前的最後彩排。", 
                synonyms: ["practice", "run-through"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r035", word: "Reign", ipa: "/reɪn/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "統治時期", def_en: "the period during which a sovereign rules", sentence: "During the reign of Queen Victoria, the British Empire expanded significantly.", sentence_trans: "在維多利亞女王統治期間，大英帝國顯著擴張。", synonyms: ["rule", "monarchy"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "統治；支配", def_en: "hold royal office; rule as king or queen", sentence: "Silence reigned in the room after the announcement.", sentence_trans: "宣布後，房間裡一片寂靜（被寂靜統治）。", synonyms: ["rule", "govern"], phrases: [] }] }
        ] 
    },
    { 
        id: "r036", word: "Reinforce", ipa: "/ˌriː.ɪnˈfɔːs/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "加強；增援", def_en: "strengthen or support, especially with additional personnel or material", 
                sentence: "The bridge was reinforced with steel beams to withstand heavy traffic.", 
                sentence_trans: "這座橋用鋼樑加固，以承受繁忙的交通。", 
                synonyms: ["strengthen", "fortify"], phrases: ["reinforce behavior"] 
            }] 
        }] 
    },
    { 
        id: "r037", word: "Relentless", ipa: "/rɪˈlent.ləs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "無情的；不間斷的", def_en: "oppressively constant; incessant", 
                sentence: "The relentless heat of the desert made the journey extremely difficult.", 
                sentence_trans: "沙漠無情的酷熱使旅程變得極其艱難。", 
                synonyms: ["persistent", "unremitting"], phrases: ["relentless pressure"] 
            }] 
        }] 
    },
    { 
        id: "r038", word: "Reliance", ipa: "/rɪˈlaɪ.əns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "依賴；信任", def_en: "dependence on or trust in someone or something", 
                sentence: "The country's heavy reliance on imported oil makes it vulnerable to price fluctuations.", 
                sentence_trans: "該國對進口石油的嚴重依賴使其容易受到價格波動的影響。", 
                synonyms: ["dependence", "trust"], phrases: ["self-reliance"] 
            }] 
        }] 
    },
    { 
        id: "r039", word: "Relic", ipa: "/ˈrel.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "遺跡；遺物", def_en: "an object surviving from an earlier time", 
                sentence: "This ancient vase is a relic from the Ming Dynasty.", 
                sentence_trans: "這個古老的花瓶是明朝的遺物。", 
                synonyms: ["artifact", "remnant"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r040", word: "Reminiscent", ipa: "/ˌrem.ɪˈnɪs.ənt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "使人想起的；懷舊的", def_en: "tending to remind one of something", 
                sentence: "The melody is reminiscent of an old folk song I used to hear as a child.", 
                sentence_trans: "這旋律讓我想起小時候聽過的一首古老民謠。", 
                synonyms: ["suggestive", "evocative"], phrases: ["reminiscent of"] 
            }] 
        }] 
    },
    { 
        id: "r041", word: "Renaissance", ipa: "/rəˈneɪ.sɒns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "文藝復興；復活", def_en: "the revival of art and literature under the influence of classical models in the 14th–16th centuries", 
                sentence: "The city is undergoing a cultural renaissance with the opening of several new galleries.", 
                sentence_trans: "隨著幾家新畫廊的開幕，這座城市正在經歷文化復興。", 
                synonyms: ["revival", "rebirth"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r042", word: "Render", ipa: "/ˈren.dər/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使得；給予", def_en: "cause to be or become; make", 
                sentence: "The injury rendered him incapable of walking for several months.", 
                sentence_trans: "受傷使他好幾個月無法行走。", 
                synonyms: ["make", "cause to be"], phrases: ["render assistance"] 
            }] 
        }] 
    },
    { 
        id: "r043", word: "Renowned", ipa: "/rɪˈnaʊnd/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "著名的；有聲望的", def_en: "known or talked about by many people; famous", 
                sentence: "The island is renowned for its stunning beaches and crystal-clear waters.", 
                sentence_trans: "這座島嶼以其迷人的海灘和清澈的海水而聞名。", 
                synonyms: ["famous", "celebrated"], phrases: ["world-renowned"] 
            }] 
        }] 
    },
    { 
        id: "r044", word: "Reproduce", ipa: "/ˌriː.prəˈdjuːs/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "繁殖；複製", def_en: "produce offspring; produce a copy or representation of", 
                sentence: "Bacteria reproduce rapidly in warm, moist environments.", 
                sentence_trans: "細菌在溫暖潮濕的環境中迅速繁殖。", 
                synonyms: ["breed", "replicate"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r045", word: "Resent", ipa: "/rɪˈzent/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "怨恨；不滿", def_en: "feel bitterness or indignation at", 
                sentence: "She resented being treated like a child by her older siblings.", 
                sentence_trans: "她不滿被她的哥哥姐姐像小孩一樣對待。", 
                synonyms: ["begrudge", "dislike"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r046", word: "Reservoir", ipa: "/ˈrez.ə.vwɑːr/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "水庫；儲備", def_en: "a large natural or artificial lake used as a source of water supply", 
                sentence: "The reservoir supplies drinking water to the entire metropolitan area.", 
                sentence_trans: "該水庫為整個大都會區提供飲用水。", 
                synonyms: ["lake", "pool"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r047", word: "Reside", ipa: "/rɪˈzaɪd/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "居住；定居", def_en: "have one's permanent home in a particular place", 
                sentence: "The royal family resides in the palace during the winter months.", 
                sentence_trans: "皇室成員在冬季月份居住在宮殿裡。", 
                synonyms: ["live", "dwell"], phrases: ["reside in"] 
            }] 
        }] 
    },
    { 
        id: "r048", word: "Resilient", ipa: "/rɪˈzɪl.jənt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "有彈性的；適應力強的", def_en: "able to withstand or recover quickly from difficult conditions", 
                sentence: "The local economy proved to be remarkably resilient in the face of the global crisis.", 
                sentence_trans: "面對全球危機，當地經濟證明具有驚人的韌性。", 
                synonyms: ["tough", "strong"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r049", word: "Resolute", ipa: "/ˈrez.ə.luːt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "堅決的；剛毅的", def_en: "admirably purposeful, determined, and unwavering", 
                sentence: "She remained resolute in her decision despite the opposition from her peers.", 
                sentence_trans: "儘管受到同儕的反對，她對自己的決定仍保持堅決。", 
                synonyms: ["determined", "adamant"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r050", word: "Resort", ipa: "/rɪˈzɔːt/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "度假勝地；手段", def_en: "a place that is a popular destination for holidays", sentence: "They stayed at a luxury ski resort in the Swiss Alps.", sentence_trans: "他們住在瑞士阿爾卑斯山的豪華滑雪勝地。", synonyms: ["vacation spot"], phrases: ["last resort"] }] },
            { pos: "v.", items: [{ def_zh: "訴諸；採取", def_en: "turn to and adopt a strategy", sentence: "We must settle this dispute without resorting to violence.", sentence_trans: "我們必須在不訴諸暴力的情況下解決這一爭端。", synonyms: ["turn to", "use"], phrases: ["resort to"] }] }
        ] 
    },
    { 
        id: "r051", word: "Restoration", ipa: "/ˌres.tərˈeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "恢復；修復", def_en: "the action of returning something to a former owner, place, or condition", 
                sentence: "The restoration of the ancient temple took over a decade to complete.", 
                sentence_trans: "這座古廟的修復工作花了十多年才完成。", 
                synonyms: ["repair", "renovation"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r052", word: "Restrain", ipa: "/rɪˈstreɪn/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "抑制；約束", def_en: "prevent from doing something; keep under control", 
                sentence: "He had to restrain himself from shouting in anger.", 
                sentence_trans: "他不得不抑制自己憤怒地大喊。", 
                synonyms: ["control", "curb"], phrases: ["restrain oneself"] 
            }] 
        }] 
    },
    { 
        id: "r053", word: "Resume", ipa: "/rɪˈzjuːm/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "恢復；重新開始", def_en: "begin to do or pursue again after a pause", sentence: "Talks between the two countries will resume next week.", sentence_trans: "兩國之間的會談將於下週恢復。", synonyms: ["restart", "continue"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "履歷表 (Resumé)", def_en: "a brief account of a person's education and experience", sentence: "Please submit your resumé to the HR department.", sentence_trans: "請將您的履歷表提交給人力資源部。", synonyms: ["CV"], phrases: [] }] }
        ] 
    },
    { 
        id: "r054", word: "Retail", ipa: "/ˈriː.teɪl/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "零售", def_en: "the sale of goods to the public", sentence: "The retail sector has been hit hard by the recession.", sentence_trans: "零售業受到經濟衰退的重創。", synonyms: ["selling"], phrases: ["retail price"] }] },
            { pos: "v.", items: [{ def_zh: "零售", def_en: "sell goods to the public", sentence: "This model retails for $500.", sentence_trans: "這款型號零售價為500美元。", synonyms: ["sell"], phrases: [] }] }
        ] 
    },
    { 
        id: "r055", word: "Retrieve", ipa: "/rɪˈtriːv/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "取回；檢索", def_en: "get or bring back", 
                sentence: "The dog ran into the water to retrieve the ball.", 
                sentence_trans: "狗跑進水裡把球撿回來。", 
                synonyms: ["recover", "fetch"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r056", word: "Revelation", ipa: "/ˌrev.əˈleɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "揭露；啟示", def_en: "a surprising and previously unknown fact", 
                sentence: "The revelation of his secret past shocked his friends.", 
                sentence_trans: "他秘密過去的揭露震驚了他的朋友。", 
                synonyms: ["disclosure", "discovery"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r057", word: "Revenue", ipa: "/ˈrev.ən.juː/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "收入；稅收", def_en: "income, especially of a company", 
                sentence: "The company reported a significant increase in revenue this quarter.", 
                sentence_trans: "該公司報告本季度收入顯著增加。", 
                synonyms: ["income", "profit"], phrases: ["tax revenue"] 
            }] 
        }] 
    },
    { 
        id: "r058", word: "Reverse", ipa: "/rɪˈvɜːs/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "逆轉；倒車", def_en: "move backward", sentence: "The government reversed its decision on the tax increase.", sentence_trans: "政府逆轉了其增稅的決定。", synonyms: ["overturn", "undo"], phrases: [] }] },
            { pos: "adj.", items: [{ def_zh: "相反的；背面的", def_en: "going in or turned toward the direction opposite", sentence: "Please sign on the reverse side of the document.", sentence_trans: "請在文件的背面簽名。", synonyms: ["opposite", "backward"], phrases: [] }] }
        ] 
    },
    { 
        id: "r059", word: "Revive", ipa: "/rɪˈvaɪv/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使復甦；使甦醒", def_en: "restore to life or consciousness", 
                sentence: "Paramedics tried to revive the victim with CPR.", 
                sentence_trans: "護理人員試圖用CPR讓受害者甦醒。", 
                synonyms: ["resuscitate", "restore"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r060", word: "Revolt", ipa: "/rɪˈvəʊlt/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "反叛；起義", def_en: "rise in rebellion", sentence: "The people revolted against the oppressive regime.", sentence_trans: "人民起義反抗壓迫政權。", synonyms: ["rebel", "uprise"], phrases: [] }] },
            { pos: "n.", items: [{ def_zh: "叛亂", def_en: "an attempt to put an end to authority", sentence: "The army crushed the peasant revolt.", sentence_trans: "軍隊鎮壓了農民起義。", synonyms: ["uprising", "insurrection"], phrases: [] }] }
        ] 
    },
    { 
        id: "r061", word: "Rhetoric", ipa: "/ˈret.ər.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "修辭；花言巧語", def_en: "the art of effective or persuasive speaking", 
                sentence: "His speech was full of nationalist rhetoric but lacked substance.", 
                sentence_trans: "他的演講充滿了民族主義的修辭，但缺乏實質內容。", 
                synonyms: ["oratory", "eloquence"], phrases: ["empty rhetoric"] 
            }] 
        }] 
    },
    { 
        id: "r062", word: "Rigid", ipa: "/ˈrɪdʒ.ɪd/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "僵硬的；死板的", def_en: "unable to bend; not flexible", 
                sentence: "The school has a rigid set of rules that students must follow.", 
                sentence_trans: "學校有一套學生必須遵守的死板規則。", 
                synonyms: ["stiff", "inflexible"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "r063", word: "Rigorous", ipa: "/ˈrɪɡ.ər.əs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "嚴格的；嚴密的", def_en: "extremely thorough and accurate", 
                sentence: "The drug must undergo rigorous testing before approval.", 
                sentence_trans: "該藥物必須經過嚴格的測試才能獲得批准。", 
                synonyms: ["strict", "thorough"], phrases: ["rigorous standards"] 
            }] 
        }] 
    },
    { 
        id: "r064", word: "Rival", ipa: "/ˈraɪ.vəl/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "對手；競爭者", def_en: "a person competing with another", sentence: "He beat his closest rival by less than a second.", sentence_trans: "他以不到一秒的優勢擊敗了最接近的對手。", synonyms: ["competitor", "opponent"], phrases: [] }] },
            { pos: "v.", items: [{ def_zh: "與...匹敵", def_en: "be or seem to be equal to", sentence: "No other city can rival Paris for romance.", sentence_trans: "在浪漫方面，沒有其他城市能與巴黎匹敵。", synonyms: ["match", "equal"], phrases: [] }] }
        ] 
    },
    { 
        id: "r065", word: "Robust", ipa: "/rəʊˈbʌst/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "強健的；結實的", def_en: "strong and healthy; vigorous", 
                sentence: "The country needs a robust economy to withstand global recessions.", 
                sentence_trans: "該國需要一個強健的經濟來抵禦全球衰退。", 
                synonyms: ["strong", "sturdy"], phrases: ["robust health"] 
            }] 
        }] 
    },
    { 
        id: "r066", word: "Rotation", ipa: "/rəʊˈteɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "旋轉；輪流", def_en: "the action of rotating around an axis", 
                sentence: "The Earth completes one rotation on its axis every 24 hours.", 
                sentence_trans: "地球每24小時繞其軸旋轉一圈。", 
                synonyms: ["revolution", "turning"], phrases: ["crop rotation"] 
            }] 
        }] 
    },
    { 
        id: "r067", word: "Ruthless", ipa: "/ˈruːθ.ləs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "無情的；冷酷的", def_en: "having or showing no pity", 
                sentence: "He was a ruthless dictator who silenced all opposition.", 
                sentence_trans: "他是一個冷酷的獨裁者，壓制了所有反對聲音。", 
                synonyms: ["merciless", "cruel"], phrases: [] 
            }] 
        }] 
    }
]);