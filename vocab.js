// =================================================================================
// 📚 雅思單字資料庫 (VOCABULARY LIBRARY) - 完整版
// =================================================================================
// 包含三個欄位的所有單字，具備同義詞、片語與多詞性支援。

window.VOCAB_LIBRARY = [
    // --- Column 1 ---
    { 
        id: 1001, word: "Abbreviate", ipa: "/əˈbriː.vi.eɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "縮寫；縮短", def_en: "to shorten a word or text", 
                sentence: "In academic writing, technical terms are often abbreviated after their first full mention to improve readability.", 
                sentence_trans: "在學術寫作中，專有名詞通常在第一次完整提及後會使用縮寫，以提高可讀性。",
                synonyms: ["shorten", "condense", "truncate"], phrases: ["abbreviate to", "abbreviated version"]
            }] 
        }] 
    },
    { 
        id: 1002, word: "Abide", ipa: "/əˈbaɪd/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "遵守；忍受", def_en: "to accept or act in accordance with a rule", 
                sentence: "All international students must abide by the visa regulations set forth by the host country's government.", 
                sentence_trans: "所有國際學生都必須遵守地主國政府制定的簽證法規。",
                synonyms: ["comply with", "observe", "tolerate"], phrases: ["abide by the rules", "cannot abide"]
            }] 
        }] 
    },
    { 
        id: 1003, word: "Abnormal", ipa: "/æbˈnɔː.məl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "不正常的；反常的", def_en: "deviating from what is normal or usual", 
                sentence: "The laboratory tests revealed abnormal levels of pollutants in the river, prompting an immediate investigation.", 
                sentence_trans: "實驗室檢測顯示河川中的污染物含量異常，促使當局立即展開調查。",
                synonyms: ["unusual", "anomalous", "atypical"], phrases: ["abnormal behavior", "abnormal conditions"]
            }] 
        }] 
    },
    { 
        id: 1004, word: "Abolish", ipa: "/əˈbɒl.ɪʃ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "廢除；廢止", def_en: "to formally put an end to a system", 
                sentence: "There is a growing consensus among activists that capital punishment should be abolished worldwide.", 
                sentence_trans: "激進份子之間越來越有共識，認為應該在全世界廢除死刑。",
                synonyms: ["eliminate", "terminate", "annul"], phrases: ["abolish a law", "abolish slavery"]
            }] 
        }] 
    },
    { 
        id: 1005, word: "Aboriginal", ipa: "/ˌæb.əˈrɪdʒ.ən.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "原住民的；土著的", def_en: "inhabiting a land from the earliest times", 
                sentence: "Preserving aboriginal languages is crucial for maintaining the cultural heritage of indigenous communities.", 
                sentence_trans: "保存原住民語言對於維護原住民社群的文化遺產至關重要。",
                synonyms: ["indigenous", "native", "original"], phrases: ["aboriginal art", "aboriginal people"]
            }] 
        }] 
    },
    { 
        id: 1006, word: "Abortion", ipa: "/əˈbɔː.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "墮胎", def_en: "the deliberate termination of a pregnancy", 
                sentence: "The debate surrounding abortion laws remains one of the most polarized issues in contemporary politics.", 
                sentence_trans: "圍繞墮胎法的辯論仍然是當代政治中最兩極分化的議題之一。",
                synonyms: ["termination"], phrases: ["abortion rights", "anti-abortion"]
            }] 
        }] 
    },
    { 
        id: 1007, word: "Abound", ipa: "/əˈbaʊnd/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "充滿；大量存在", def_en: "to exist in large numbers", 
                sentence: "Theories abound regarding the sudden disappearance of the ancient civilization.", 
                sentence_trans: "關於這個古老文明突然消失的理論眾說紛紜。",
                synonyms: ["flourish", "proliferate", "teem"], phrases: ["abound with", "abound in"]
            }] 
        }] 
    },
    { 
        id: 1008, word: "Abrupt", ipa: "/əˈbrʌpt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "突然的；唐突的", def_en: "sudden and unexpected", 
                sentence: "The project came to an abrupt halt due to a sudden withdrawal of funding from the primary investor.", 
                sentence_trans: "由於主要投資者突然撤資，該項目戛然而止。",
                synonyms: ["sudden", "unexpected", "hasty"], phrases: ["abrupt end", "abrupt change"]
            }] 
        }] 
    },
    { 
        id: 1009, word: "Abstraction", ipa: "/æbˈstræk.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "抽象概念", def_en: "dealing with ideas rather than events", 
                sentence: "Philosophical discussions often involve a high level of abstraction that can be difficult for laypeople to grasp.", 
                sentence_trans: "哲學討論通常涉及高層次的抽象概念，外行人可能難以理解。",
                synonyms: ["concept", "idea", "theory"], phrases: ["level of abstraction"]
            }] 
        }] 
    },
    { 
        id: 1010, word: "Absurd", ipa: "/əbˈsɜːd/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "荒謬的", def_en: "wildly unreasonable", 
                sentence: "The suggestion that the problem could be solved without any financial investment was dismissed as absurd.", 
                sentence_trans: "關於不需任何資金投入就能解決問題的建議被斥為荒謬。",
                synonyms: ["ridiculous", "ludicrous", "preposterous"], phrases: ["reduce to the absurd"]
            }] 
        }] 
    },
    { 
        id: 1011, word: "Abundance", ipa: "/əˈbʌn.dəns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "豐富；充足", def_en: "a very large quantity", 
                sentence: "The tropical rainforest is characterized by an abundance of biodiversity found nowhere else on Earth.", 
                sentence_trans: "熱帶雨林的特徵是擁有地球上其他地方找不到的豐富生物多樣性。",
                synonyms: ["plenty", "wealth", "profusion"], phrases: ["in abundance", "an abundance of"]
            }] 
        }] 
    },
    { 
        id: 1012, word: "Abundant", ipa: "/əˈbʌn.dənt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "豐富的；大量的", def_en: "existing in large quantities", 
                sentence: "Solar energy is an abundant resource that has the potential to replace fossil fuels.", 
                sentence_trans: "太陽能是一種豐富的資源，有潛力取代化石燃料。",
                synonyms: ["plentiful", "copious", "ample"], phrases: ["abundant supply", "abundant resources"]
            }] 
        }] 
    },
    { 
        id: 1013, word: "Abuse", ipa: "/əˈbjuːz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "濫用；虐待", def_en: "use to bad effect", 
                sentence: "He vowed never to abuse the trust that had been placed in him by the public.", 
                sentence_trans: "他發誓絕不濫用公眾對他的信任。",
                synonyms: ["misuse", "mistreat"], phrases: ["substance abuse", "abuse of power"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "濫用；弊端", def_en: "improper use",
                sentence: "The investigation revealed a systemic abuse of power within the organization.",
                sentence_trans: "調查顯示該組織內部存在系統性的權力濫用。",
                synonyms: ["misuse", "exploitation"], phrases: ["alcohol abuse"]
            }]
        }] 
    },
    { 
        id: 1014, word: "Academy", ipa: "/əˈkæd.ə.mi/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "學院；學會", def_en: "a place of study", 
                sentence: "He was inducted into the academy for his significant contributions to the field of theoretical physics.", 
                sentence_trans: "因其對理論物理領域的重大貢獻，他被納入該學會。",
                synonyms: ["institute", "university"], phrases: ["military academy", "police academy"]
            }] 
        }] 
    },
    { 
        id: 1015, word: "Accelerate", ipa: "/əkˈsel.ə.reɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "加速；促進", def_en: "begin to move more quickly", 
                sentence: "The government has implemented new policies to accelerate economic growth in rural areas.", 
                sentence_trans: "政府已實施新政策以加速農村地區的經濟增長。",
                synonyms: ["hasten", "expedite", "quicken"], phrases: ["accelerate the process", "accelerate growth"]
            }] 
        }] 
    },
    { 
        id: 1016, word: "Accessible", ipa: "/əkˈses.ə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "可存取的；易接近的", def_en: "able to be reached", 
                sentence: "Higher education should be made accessible to students from all socio-economic backgrounds.", 
                sentence_trans: "高等教育應讓所有社會經濟背景的學生都能獲得。",
                synonyms: ["reachable", "attainable", "available"], phrases: ["easily accessible", "accessible to"]
            }] 
        }] 
    },
    { 
        id: 1017, word: "Accessory", ipa: "/əkˈses.ər.i/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "配件；附件", def_en: "an item added to something", 
                sentence: "In the fashion industry, the right accessory can transform a simple outfit into a statement piece.", 
                sentence_trans: "在時尚界，合適的配件可以將簡單的服裝轉變為引人注目的焦點。",
                synonyms: ["attachment", "addition", "supplement"], phrases: ["fashion accessory", "car accessory"]
            }] 
        }] 
    },
    { 
        id: 1018, word: "Acclaim", ipa: "/əˈkleɪm/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "稱讚；喝采", def_en: "praise enthusiastically", 
                sentence: "The critics acclaimed the movie as a masterpiece of modern cinema.", 
                sentence_trans: "評論家稱讚這部電影是現代電影的傑作。",
                synonyms: ["applaud", "praise", "commend"], phrases: ["widely acclaimed"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "稱讚；好評", def_en: "public praise",
                sentence: "Her debut novel received critical acclaim for its innovative narrative structure.",
                sentence_trans: "她的處女作小說因其創新的敘事結構而獲得評論界的讚譽。",
                synonyms: ["praise", "applause"], phrases: ["critical acclaim", "international acclaim"]
            }]
        }] 
    },
    { 
        id: 1019, word: "Accommodate", ipa: "/əˈkɒm.ə.deɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "容納；配合", def_en: "provide lodging or space for", 
                sentence: "The new conference center is designed to accommodate up to five thousand delegates.", 
                sentence_trans: "新的會議中心設計可容納多達五千名代表。",
                synonyms: ["house", "hold", "lodge"], phrases: ["accommodate needs", "accommodate changes"]
            }] 
        }] 
    },
    { 
        id: 1020, word: "Accommodation", ipa: "/əˌkɒm.əˈdeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "住宿；膳宿", def_en: "a place to live or stay", 
                sentence: "Finding affordable accommodation in major metropolitan areas is becoming increasingly difficult.", 
                sentence_trans: "在主要大都會區尋找負擔得起的住宿變得越來越困難。",
                synonyms: ["housing", "lodging", "residence"], phrases: ["student accommodation", "temporary accommodation"]
            }] 
        }] 
    },
    { 
        id: 1021, word: "Accord", ipa: "/əˈkɔːd/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "協議；條約", def_en: "an official agreement", 
                sentence: "The two nations finally reached a peace accord after months of intense negotiation.", 
                sentence_trans: "經過數月的激烈談判，兩國終於達成了和平協議。",
                synonyms: ["agreement", "treaty", "pact"], phrases: ["peace accord", "in accord with"]
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "給予；與...一致", def_en: "give or grant power",
                sentence: "The powers accorded to the head of state are strictly limited by the constitution.",
                sentence_trans: "憲法嚴格限制了賦予國家元首的權力。",
                synonyms: ["grant", "give", "bestow"], phrases: ["accord respect"]
            }]
        }] 
    },
    { 
        id: 1022, word: "Accordance", ipa: "/əˈkɔː.dəns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "一致；依照", def_en: "conforming with", 
                sentence: "The project was completed in strict accordance with the safety regulations.", 
                sentence_trans: "該項目是嚴格按照安全規定完成的。",
                synonyms: ["agreement", "conformity"], phrases: ["in accordance with"]
            }] 
        }] 
    },
    { 
        id: 1023, word: "Accordingly", ipa: "/əˈkɔː.dɪŋ.li/", priority: 10, 
        meanings: [{ 
            pos: "adv.", items: [{ 
                def_zh: "因此；相應地", def_en: "appropriately", 
                sentence: "The budget has been reduced, and our operational plans must be adjusted accordingly.", 
                sentence_trans: "預算已被削減，我們的運營計劃必須相應調整。",
                synonyms: ["consequently", "therefore", "suitably"], phrases: ["act accordingly"]
            }] 
        }] 
    },
    { 
        id: 1024, word: "Accountable", ipa: "/əˈkaʊn.tə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "負有責任的", def_en: "expected to justify actions", 
                sentence: "Public officials must be held accountable for their decisions to ensure transparency in government.", 
                sentence_trans: "公職人員必須對其決定負責，以確保政府的透明度。",
                synonyms: ["responsible", "liable", "answerable"], phrases: ["held accountable", "accountable to"]
            }] 
        }] 
    },
    { 
        id: 1025, word: "Accounting", ipa: "/əˈkaʊn.tɪŋ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "會計；帳務", def_en: "keeping financial accounts", 
                sentence: "Rigorous accounting practices are essential for maintaining the financial integrity of any corporation.", 
                sentence_trans: "嚴格的會計實務對於維持任何公司的財務完整性至關重要。",
                synonyms: ["bookkeeping", "auditing"], phrases: ["accounting department", "forensic accounting"]
            }] 
        }] 
    },
    { 
        id: 1026, word: "Accumulate", ipa: "/əˈkjuː.mjə.leɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "累積；積聚", def_en: "gather together", 
                sentence: "Over the years, scientific evidence has accumulated to support the theory of climate change.", 
                sentence_trans: "多年來，支持氣候變遷理論的科學證據不斷累積。",
                synonyms: ["gather", "collect", "amass"], phrases: ["accumulate wealth", "accumulate evidence"]
            }] 
        }] 
    },
    { 
        id: 1027, word: "Accumulation", ipa: "/əˌkjuː.mjəˈleɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "累積物；積聚", def_en: "gradual gathering", 
                sentence: "The accumulation of plastic waste in the oceans poses a severe threat to marine life.", 
                sentence_trans: "海洋中塑膠垃圾的累積對海洋生物構成了嚴重威脅。",
                synonyms: ["buildup", "collection", "mass"], phrases: ["accumulation of capital"]
            }] 
        }] 
    },
    { 
        id: 1028, word: "Accusation", ipa: "/ˌæk.jəˈzeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "指控；控告", def_en: "charge of illegal doing", 
                sentence: "He vehemently denied the accusation of fraud brought against him by his former business partner.", 
                sentence_trans: "他強烈否認其前商業夥伴對他提出的欺詐指控。",
                synonyms: ["allegation", "charge", "indictment"], phrases: ["false accusation", "make an accusation"]
            }] 
        }] 
    },
    { 
        id: 1029, word: "Accustom", ipa: "/əˈkʌs.təm/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使習慣", def_en: "make accept as normal", 
                sentence: "It takes time to accustom oneself to the rapid pace of life in a major city.", 
                sentence_trans: "要習慣大城市快節奏的生活是需要時間的。",
                synonyms: ["adapt", "adjust", "familiarize"], phrases: ["accustom yourself to", "become accustomed to"]
            }] 
        }] 
    },
    { 
        id: 1030, word: "Acknowledge", ipa: "/əkˈnɒl.ɪdʒ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "承認；認可", def_en: "admit the truth of", 
                sentence: "The scientific community widely acknowledges the impact of human activities on global warming.", 
                sentence_trans: "科學界廣泛承認人類活動對全球暖化的影響。",
                synonyms: ["admit", "recognize", "accept"], phrases: ["acknowledge receipt", "acknowledge a mistake"]
            }] 
        }] 
    },
    { 
        id: 1031, word: "Acknowledgement", ipa: "/əkˈnɒl.ɪdʒ.mənt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "承認；致謝", def_en: "acceptance of truth", 
                sentence: "The award serves as an acknowledgement of her tireless dedication to humanitarian causes.", 
                sentence_trans: "該獎項是對她不懈致力於人道主義事業的認可。",
                synonyms: ["recognition", "admission", "appreciation"], phrases: ["in acknowledgement of"]
            }] 
        }] 
    },
    { 
        id: 1032, word: "Acne", ipa: "/ˈæk.ni/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "青春痘；痤瘡", def_en: "skin condition", 
                sentence: "While often associated with adolescence, acne can also affect adults due to hormonal imbalances.", 
                sentence_trans: "雖然通常與青春期有關，但由於荷爾蒙失調，青春痘也會影響成年人。",
                synonyms: ["pimples", "spots"], phrases: ["acne treatment", "suffer from acne"]
            }] 
        }] 
    },
    { 
        id: 1033, word: "Acquaint", ipa: "/əˈkweɪnt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使認識；介紹", def_en: "make familiar", 
                sentence: "New employees are required to attend a workshop to acquaint themselves with the company's safety protocols.", 
                sentence_trans: "新員工必須參加研討會，以熟悉公司的安全規程。",
                synonyms: ["familiarize", "inform", "enlighten"], phrases: ["acquaint with", "get acquainted"]
            }] 
        }] 
    },
    { 
        id: 1034, word: "Acquisition", ipa: "/ˌæk.wɪˈzɪʃ.ən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "獲得；收購", def_en: "learning or developing", 
                sentence: "Language acquisition in early childhood occurs much more rapidly than in adulthood.", 
                sentence_trans: "幼兒期的語言習得比成年期快得多。",
                synonyms: ["attainment", "procurement", "purchase"], phrases: ["language acquisition", "mergers and acquisitions"]
            }] 
        }] 
    },

    // --- Column 2 ---
    { 
        id: 2001, word: "Acre", ipa: "/ˈeɪ.kər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "英畝", def_en: "unit of land area", 
                sentence: "The wildfire destroyed thousands of acres of forest before it was finally contained.", 
                sentence_trans: "野火在最終被控制之前摧毀了數千英畝的森林。",
                synonyms: [], phrases: ["acres of land"]
            }] 
        }] 
    },
    { 
        id: 2002, word: "Activist", ipa: "/ˈæk.tɪ.vɪst/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "激進分子；行動主義者", def_en: "campaigner for change", 
                sentence: "The environmental activist delivered a passionate speech urging immediate action on climate change.", 
                sentence_trans: "這位環保行動主義者發表了慷慨激昂的演講，敦促對氣候變遷採取立即行動。",
                synonyms: ["campaigner", "protester", "advocate"], phrases: ["political activist", "rights activist"]
            }] 
        }] 
    },
    { 
        id: 2003, word: "Acute", ipa: "/əˈkjuːt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "劇烈的；敏銳的", def_en: "severe or intense", 
                sentence: "The region is suffering from an acute shortage of water due to the prolonged drought.", 
                sentence_trans: "由於長期乾旱，該地區正遭受嚴重的水資源短缺。",
                synonyms: ["severe", "critical", "sharp"], phrases: ["acute pain", "acute shortage"]
            }] 
        }] 
    },
    { 
        id: 2004, word: "Adaptation", ipa: "/ˌæd.æpˈteɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "適應；改編", def_en: "process of adapting", 
                sentence: "Biological adaptation is a key mechanism that allows species to survive in changing environments.", 
                sentence_trans: "生物適應是允許物種在不斷變化的環境中生存的關鍵機制。",
                synonyms: ["adjustment", "modification", "alteration"], phrases: ["adaptation to", "film adaptation"]
            }] 
        }] 
    },
    { 
        id: 2005, word: "Addiction", ipa: "/əˈdɪk.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "上癮；沉溺", def_en: "condition of being addicted", 
                sentence: "Smartphone addiction has become a prevalent issue affecting the social skills of the younger generation.", 
                sentence_trans: "智慧型手機成癮已成為影響年輕一代社交技能的普遍問題。",
                synonyms: ["dependence", "obsession", "craving"], phrases: ["drug addiction", "overcome addiction"]
            }] 
        }] 
    },
    { 
        id: 2006, word: "Administer", ipa: "/ədˈmɪn.ɪ.stər/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "管理；給予", def_en: "manage and be responsible for", 
                sentence: "The charity organization was established to administer funds for disaster relief efforts.", 
                sentence_trans: "該慈善組織的成立是為了管理救災工作的資金。",
                synonyms: ["manage", "direct", "dispense"], phrases: ["administer justice", "administer first aid"]
            }] 
        }] 
    },
    { 
        id: 2007, word: "Administration", ipa: "/ədˌmɪn.ɪˈstreɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "行政；管理", def_en: "process of running a business", 
                sentence: "Efficient public administration is essential for delivering quality services to citizens.", 
                sentence_trans: "高效的公共行政對於向公民提供優質服務至關重要。",
                synonyms: ["management", "government", "supervision"], phrases: ["public administration", "business administration"]
            }] 
        }] 
    },
    { 
        id: 2008, word: "Administrative", ipa: "/ədˈmɪn.ɪ.strə.tɪv/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "行政的；管理的", def_en: "relating to administration", 
                sentence: "The company is looking to reduce administrative costs by automating routine tasks.", 
                sentence_trans: "該公司正尋求通過自動化日常任務來降低行政成本。",
                synonyms: ["managerial", "executive", "clerical"], phrases: ["administrative staff", "administrative duties"]
            }] 
        }] 
    },
    { 
        id: 2009, word: "Administrator", ipa: "/ədˈmɪn.ɪ.streɪ.tər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "行政人員；管理員", def_en: "person responsible for administration", 
                sentence: "The university administrator is responsible for overseeing student admissions and enrollment.", 
                sentence_trans: "大學行政人員負責監督學生的入學和註冊。",
                synonyms: ["manager", "director", "executive"], phrases: ["network administrator", "system administrator"]
            }] 
        }] 
    },
    { 
        id: 2010, word: "Admiral", ipa: "/ˈæd.mɪ.rəl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "海軍上將", def_en: "commander of a fleet", 
                sentence: "The admiral commanded the naval fleet during the strategic military exercise.", 
                sentence_trans: "海軍上將在戰略軍事演習期間指揮海軍艦隊。",
                synonyms: ["commander"], phrases: ["rear admiral", "vice admiral"]
            }] 
        }] 
    },
    { 
        id: 2011, word: "Adolescence", ipa: "/ˌæd.əˈles.əns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "青春期", def_en: "period developing from child to adult", 
                sentence: "Adolescence is a critical period of development characterized by significant physical and emotional changes.", 
                sentence_trans: "青春期是一個關鍵的發展時期，其特徵是顯著的身體和情感變化。",
                synonyms: ["teens", "youth", "puberty"], phrases: ["during adolescence"]
            }] 
        }] 
    },
    { 
        id: 2012, word: "Adolescent", ipa: "/ˌæd.əˈles.ənt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "青少年", def_en: "young person", 
                sentence: "Adolescent behavior often involves risk-taking as they seek to establish their own identity.", 
                sentence_trans: "青少年行為通常涉及冒險，因為他們尋求建立自己的身份。",
                synonyms: ["teenager", "youth"], phrases: []
            }] 
        }, {
            pos: "adj.", items: [{
                def_zh: "青春期的", def_en: "relating to adolescence",
                sentence: "The study focused on adolescent mental health issues in urban areas.",
                sentence_trans: "這項研究集中在城市地區的青春期心理健康問題。",
                synonyms: ["teenage", "juvenile"], phrases: ["adolescent years"]
            }]
        }] 
    },
    { 
        id: 2013, word: "Adorable", ipa: "/əˈdɔː.rə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "可愛的", def_en: "inspiring affection", 
                sentence: "While the puppy was adorable, raising a pet requires a significant amount of responsibility.", 
                sentence_trans: "雖然這隻小狗很可愛，但養寵物需要大量的責任感。",
                synonyms: ["cute", "lovable", "charming"], phrases: ["absolutely adorable"]
            }] 
        }] 
    },
    { 
        id: 2014, word: "Adore", ipa: "/əˈdɔːr/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "愛慕；崇拜", def_en: "love deeply", 
                sentence: "The fans adore the singer not only for her voice but also for her philanthropic work.", 
                sentence_trans: "粉絲們愛慕這位歌手不僅因為她的聲音，還因為她的慈善工作。",
                synonyms: ["love", "cherish", "worship"], phrases: ["adore him/her"]
            }] 
        }] 
    },
    { 
        id: 2015, word: "Adverse", ipa: "/ˈæd.vɜːs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "不利的；有害的", def_en: "preventing success; harmful", 
                sentence: "The medication was withdrawn from the market due to its adverse side effects on patients.", 
                sentence_trans: "由於對患者產生不利的副作用，該藥物已從市場上撤回。",
                synonyms: ["unfavorable", "harmful", "negative"], phrases: ["adverse effects", "adverse conditions"]
            }] 
        }] 
    },
    { 
        id: 2016, word: "Advisory", ipa: "/ədˈvaɪ.zər.i/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "顧問的；諮詢的", def_en: "giving advice", 
                sentence: "The committee plays a purely advisory role and does not have the power to enact legislation.", 
                sentence_trans: "該委員會僅扮演諮詢角色，沒有制定法律的權力。",
                synonyms: ["consultative"], phrases: ["advisory committee", "advisory board"]
            }] 
        }] 
    },
    { 
        id: 2017, word: "Advocate", ipa: "/ˈæd.və.keɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "提倡；主張", def_en: "publicly recommend", 
                sentence: "Doctors advocate a balanced diet and regular exercise as the foundation of good health.", 
                sentence_trans: "醫生提倡均衡飲食和規律運動作為良好健康的基礎。",
                synonyms: ["recommend", "support", "urge"], phrases: ["advocate for"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "擁護者", def_en: "supporter",
                sentence: "She has been a tireless advocate for environmental protection for over a decade.",
                sentence_trans: "十多年來，她一直是不知疲倦的環境保護提倡者。",
                synonyms: ["champion", "proponent"], phrases: ["advocate of"]
            }]
        }] 
    },
    { 
        id: 2018, word: "Aesthetic", ipa: "/iːsˈθet.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "美學的", def_en: "concerned with beauty", 
                sentence: "The building combines functional design with aesthetic appeal, making it a landmark of the city.", 
                sentence_trans: "這棟建築結合了功能性設計與美學吸引力，使其成為城市的地標。",
                synonyms: ["artistic", "beautiful"], phrases: ["aesthetic appeal"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "美學觀點", def_en: "principles of beauty",
                sentence: "The artist's work is driven by a minimalist aesthetic that emphasizes simplicity and form.",
                sentence_trans: "這位藝術家的作品受到極簡主義美學的驅動，強調簡單和形式。",
                synonyms: ["philosophy of art"], phrases: []
            }]
        }] 
    },
    { 
        id: 2019, word: "Affection", ipa: "/əˈfek.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "喜愛；鍾愛", def_en: "gentle feeling of fondness", 
                sentence: "She felt a deep affection for the mentor who had guided her throughout her career.", 
                sentence_trans: "她對指導她職業生涯的導師懷有深深的喜愛。",
                synonyms: ["fondness", "love", "liking"], phrases: ["with affection", "deep affection"]
            }] 
        }] 
    },
    { 
        id: 2020, word: "Affectionate", ipa: "/əˈfek.ʃən.ət/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "充滿深情的", def_en: "showing fondness", 
                sentence: "He is very affectionate towards his children, always offering hugs and words of encouragement.", 
                sentence_trans: "他對孩子們非常深情，總是給予擁抱和鼓勵的話語。",
                synonyms: ["loving", "caring", "warm"], phrases: ["affectionate nature"]
            }] 
        }] 
    },
    { 
        id: 2021, word: "Affiliate", ipa: "/əˈfɪl.i.eɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使隸屬", def_en: "officially connect", 
                sentence: "The local hospital is affiliated with the university medical school for research purposes.", 
                sentence_trans: "這家當地醫院隸屬於大學醫學院，用於研究目的。",
                synonyms: ["associate", "connect", "ally"], phrases: ["affiliated with"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "分支機構", def_en: "connected organization",
                sentence: "The network has affiliates in over 50 countries worldwide.",
                sentence_trans: "該網絡在全球 50 多個國家設有分支機構。",
                synonyms: ["branch", "partner"], phrases: []
            }]
        }] 
    },
    { 
        id: 2022, word: "Affirm", ipa: "/əˈfɜːm/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "證實；斷言", def_en: "state as a fact", 
                sentence: "The government affirmed its commitment to reducing carbon emissions by the end of the decade.", 
                sentence_trans: "政府重申了其在十年內減少碳排放的承諾。",
                synonyms: ["confirm", "declare", "assert"], phrases: ["affirm a decision"]
            }] 
        }] 
    },
    { 
        id: 2023, word: "Agenda", ipa: "/əˈdʒen.də/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "議程", def_en: "list of items to discuss", 
                sentence: "The main item on the agenda for today's meeting is the proposed budget cut.", 
                sentence_trans: "今天會議議程上的主要項目是擬議的預算削減。",
                synonyms: ["schedule", "program", "plan"], phrases: ["on the agenda", "hidden agenda"]
            }] 
        }] 
    },
    { 
        id: 2024, word: "Aggression", ipa: "/əˈɡreʃ.ən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "侵略；攻擊", def_en: "hostile behavior", 
                sentence: "The treaty was signed to prevent acts of aggression between the neighboring countries.", 
                sentence_trans: "簽署該條約是為了防止鄰國之間的侵略行為。",
                synonyms: ["hostility", "attack", "violence"], phrases: ["act of aggression"]
            }] 
        }] 
    },
    { 
        id: 2025, word: "Agony", ipa: "/ˈæɡ.ə.ni/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "極度痛苦", def_en: "extreme suffering", 
                sentence: "The injured athlete was in visible agony as he was carried off the field.", 
                sentence_trans: "受傷的運動員被抬離賽場時顯然處於極度痛苦之中。",
                synonyms: ["pain", "suffering", "torment"], phrases: ["in agony"]
            }] 
        }] 
    },
    { 
        id: 2026, word: "Agricultural", ipa: "/ˌæɡ.rɪˈkʌl.tʃər.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "農業的", def_en: "relating to agriculture", 
                sentence: "Technological advancements have significantly increased agricultural productivity in recent decades.", 
                sentence_trans: "近幾十年來，技術進步顯著提高了農業生產力。",
                synonyms: ["farming", "rural"], phrases: ["agricultural production"]
            }] 
        }] 
    },
    { 
        id: 2027, word: "Airtight", ipa: "/ˈeə.taɪt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "密封的", def_en: "not allowing air to pass", 
                sentence: "The lawyer presented an airtight alibi that proved her client's innocence beyond doubt.", 
                sentence_trans: "律師提出了無懈可擊的不在場證明，無可置疑地證明了她委託人的清白。",
                synonyms: ["sealed", "impenetrable", "incontestable"], phrases: ["airtight container", "airtight case"]
            }] 
        }] 
    },
    { 
        id: 2028, word: "Airway", ipa: "/ˈeə.weɪ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "呼吸道", def_en: "passage for air to lungs", 
                sentence: "In a medical emergency, keeping the patient's airway clear is the first priority.", 
                sentence_trans: "在醫療緊急情況下，保持患者呼吸道暢通是首要任務。",
                synonyms: ["respiratory tract"], phrases: ["blocked airway"]
            }] 
        }] 
    },
    { 
        id: 2029, word: "Aisle", ipa: "/aɪl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "走道", def_en: "passage between seats", 
                sentence: "Please keep your luggage clear of the aisle to ensure safety during the flight.", 
                sentence_trans: "請勿將行李放在走道上，以確保飛行期間的安全。",
                synonyms: ["passage", "walkway", "corridor"], phrases: ["aisle seat"]
            }] 
        }] 
    },
    { 
        id: 2030, word: "Alcoholic", ipa: "/ˌæl.kəˈhɒl.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "含酒精的", def_en: "containing alcohol", 
                sentence: "The consumption of alcoholic beverages is prohibited in certain public areas.", 
                sentence_trans: "在某些公共區域禁止飲用含酒精飲料。",
                synonyms: ["intoxicating"], phrases: ["alcoholic drink"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "酗酒者", def_en: "person addicted to alcohol",
                sentence: "Support groups can provide vital help for recovering alcoholics.", 
                sentence_trans: "支持團體可以為康復中的酗酒者提供至關重要的幫助。",
                synonyms: ["drunkard"], phrases: []
            }]
        }] 
    },
    { 
        id: 2031, word: "Algebra", ipa: "/ˈæl.dʒə.brə/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "代數", def_en: "branch of mathematics", 
                sentence: "Algebra is a fundamental branch of mathematics that is essential for advanced scientific studies.", 
                sentence_trans: "代數是數學的一個基礎分支，對於進階科學研究至關重要。",
                synonyms: [], phrases: []
            }] 
        }] 
    },
    { 
        id: 2032, word: "Alien", ipa: "/ˈeɪ.li.ən/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "外國的；陌生的", def_en: "foreign or unfamiliar", 
                sentence: "The concept of absolute censorship is completely alien to a democratic society.", 
                sentence_trans: "絕對審查的概念與民主社會完全格格不入。",
                synonyms: ["foreign", "strange", "unfamiliar"], phrases: ["alien to"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "外星人", def_en: "being from another world",
                sentence: "Science fiction movies often depict aliens visiting Earth.",
                sentence_trans: "科幻電影經常描繪外星人造訪地球。",
                synonyms: ["extraterrestrial"], phrases: []
            }]
        }] 
    },
    { 
        id: 2033, word: "Alienate", ipa: "/ˈeɪ.li.ə.neɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使疏遠", def_en: "cause to feel isolated", 
                sentence: "The politician's controversial remarks served to alienate many of his moderate supporters.", 
                sentence_trans: "這位政治家的爭議性言論導致他的許多溫和派支持者疏遠。",
                synonyms: ["estrange", "isolate", "distance"], phrases: ["alienate from"]
            }] 
        }] 
    },
    { 
        id: 2034, word: "Align", ipa: "/əˈlaɪn/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "對齊；一致", def_en: "place in a line or agreement", 
                sentence: "The company needs to align its marketing strategy with the changing consumer trends.", 
                sentence_trans: "公司需要將其營銷策略與不斷變化的消費者趨勢保持一致。",
                synonyms: ["line up", "coordinate", "match"], phrases: ["align with"]
            }] 
        }] 
    },
    { 
        id: 2035, word: "Allegation", ipa: "/ˌæl.əˈɡeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "指控；斷言", def_en: "claim of illegal act", 
                sentence: "The committee is investigating the allegation of corruption within the department.", 
                sentence_trans: "委員會正在調查部門內部的腐敗指控。",
                synonyms: ["claim", "accusation", "charge"], phrases: ["deny an allegation"]
            }] 
        }] 
    },

    // --- Column 3 ---
    { 
        id: 3001, word: "Allege", ipa: "/əˈledʒ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "宣稱；指控", def_en: "claim without proof", 
                sentence: "The prosecution alleges that the defendant was present at the scene of the crime.", 
                sentence_trans: "檢方宣稱被告在犯罪現場。",
                synonyms: ["claim", "assert", "maintain"], phrases: ["it is alleged that"]
            }] 
        }] 
    },
    { 
        id: 3002, word: "Allergic", ipa: "/əˈlɜː.dʒɪk/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "過敏的", def_en: "having an allergy", 
                sentence: "Some children are highly allergic to peanuts, requiring schools to implement strict food policies.", 
                sentence_trans: "有些兒童對花生高度過敏，需要學校實施嚴格的食物政策。",
                synonyms: ["hypersensitive"], phrases: ["allergic reaction", "allergic to"]
            }] 
        }] 
    },
    { 
        id: 3003, word: "Allergy", ipa: "/ˈæl.ə.dʒi/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "過敏", def_en: "immune response", 
                sentence: "Seasonal allergy can significantly impact a person's quality of life during spring.", 
                sentence_trans: "季節性過敏會顯著影響一個人在春季的生活品質。",
                synonyms: ["hypersensitivity"], phrases: ["food allergy", "pollen allergy"]
            }] 
        }] 
    },
    { 
        id: 3004, word: "Alliance", ipa: "/əˈlaɪ.əns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "聯盟", def_en: "association for benefit", 
                sentence: "The two technology giants formed a strategic alliance to develop renewable energy solutions.", 
                sentence_trans: "這兩家科技巨頭結成戰略聯盟，以開發可再生能源解決方案。",
                synonyms: ["partnership", "coalition", "league"], phrases: ["form an alliance"]
            }] 
        }] 
    },
    { 
        id: 3005, word: "Alligator", ipa: "/ˈæl.ɪ.ɡeɪ.tər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "短吻鱷", def_en: "large reptile", 
                sentence: "The wetland conservation area is home to a large population of alligators.", 
                sentence_trans: "這片濕地保護區是大量短吻鱷的棲息地。",
                synonyms: ["gator"], phrases: []
            }] 
        }] 
    },
    { 
        id: 3006, word: "Allocate", ipa: "/ˈæl.ə.keɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "分配", def_en: "distribute resources", 
                sentence: "The city council voted to allocate more funds to public education and healthcare.", 
                sentence_trans: "市議會投票決定撥更多資金給公共教育和醫療保健。",
                synonyms: ["allot", "assign", "distribute"], phrases: ["allocate resources"]
            }] 
        }] 
    },
    { 
        id: 3007, word: "Ally", ipa: "/ˈæl.aɪ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "盟友", def_en: "cooperating partner", 
                sentence: "During times of crisis, a strong ally can provide essential military and economic support.", 
                sentence_trans: "在危機時期，強大的盟友可以提供必要的軍事和經濟支持。",
                synonyms: ["partner", "supporter", "confederate"], phrases: ["close ally"]
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "結盟", def_en: "unite for benefit",
                sentence: "He allied himself with the progressive wing of the party.", 
                sentence_trans: "他與黨內的進步派結盟。",
                synonyms: ["unite", "join", "team up"], phrases: ["ally with"]
            }]
        }] 
    },
    { 
        id: 3008, word: "Alongside", ipa: "/əˌlɒŋˈsaɪd/", priority: 10, 
        meanings: [{ 
            pos: "prep.", items: [{ 
                def_zh: "在...旁邊", def_en: "next to", 
                sentence: "The new highway runs alongside the railway, improving connectivity between the cities.", 
                sentence_trans: "新高速公路沿著鐵路延伸，改善了城市之間的連通性。",
                synonyms: ["beside", "by the side of"], phrases: ["work alongside"]
            }] 
        }, {
            pos: "adv.", items: [{
                def_zh: "在旁邊", def_en: "at the side",
                sentence: "She ran alongside, cheering him on.", 
                sentence_trans: "她在旁邊跑著，為他加油。",
                synonyms: [], phrases: []
            }]
        }] 
    },
    { 
        id: 3009, word: "Alter", ipa: "/ˈɒl.tər/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "改變", def_en: "change in character", 
                sentence: "Climate change has the potential to permanently alter the geography of coastal regions.", 
                sentence_trans: "氣候變遷有可能永久改變沿海地區的地理。",
                synonyms: ["change", "modify", "adjust"], phrases: ["alter the course"]
            }] 
        }] 
    },
    { 
        id: 3010, word: "Alteration", ipa: "/ˌɒl.təˈreɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "修改", def_en: "action of altering", 
                sentence: "Any alteration to the building's structure requires approval from the local planning authority.", 
                sentence_trans: "對建築結構的任何修改都需要當地規劃部門的批准。",
                synonyms: ["change", "modification", "adjustment"], phrases: ["make an alteration"]
            }] 
        }] 
    },
    { 
        id: 3011, word: "Alternate", ipa: "/ˈɒl.tə.neɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "輪流", def_en: "occur in turn", 
                sentence: "Farmers often alternate crops to maintain soil fertility and prevent pest infestation.", 
                sentence_trans: "農民經常輪作農作物以保持土壤健康並防止蟲害。",
                synonyms: ["rotate", "interchange"], phrases: ["alternate between"]
            }] 
        }, {
            pos: "adj.", items: [{
                def_zh: "間隔的", def_en: "every other",
                sentence: "We meet on alternate Sundays.", 
                sentence_trans: "我們每隔一個週日見面。",
                synonyms: ["every other"], phrases: ["alternate days"]
            }]
        }] 
    },
    { 
        id: 3012, word: "Altitude", ipa: "/ˈæl.tɪ.tjuːd/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "海拔", def_en: "height above sea level", 
                sentence: "Athletes train at high altitude to improve their oxygen efficiency and endurance.", 
                sentence_trans: "運動員在高海拔地區訓練以提高氧氣利用率和耐力。",
                synonyms: ["height", "elevation"], phrases: ["high altitude"]
            }] 
        }] 
    },
    { 
        id: 3013, word: "Aluminum", ipa: "/əˈluː.mɪ.nəm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "鋁", def_en: "lightweight metal", 
                sentence: "Aluminum is widely used in aircraft construction due to its lightweight and durable properties.", 
                sentence_trans: "鋁因其輕便耐用的特性而被廣泛用於飛機製造。",
                synonyms: [], phrases: ["aluminum foil"]
            }] 
        }] 
    },
    { 
        id: 3014, word: "Ambiguity", ipa: "/ˌæm.bɪˈɡjuː.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "模稜兩可", def_en: "openness to interpretation", 
                sentence: "Legal documents should be written clearly to avoid any ambiguity that could lead to misinterpretation.", 
                sentence_trans: "法律文件應寫得清楚，以避免任何可能導致誤解的含糊之處。",
                synonyms: ["vagueness", "uncertainty"], phrases: ["avoid ambiguity"]
            }] 
        }] 
    },
    { 
        id: 3015, word: "Ambush", ipa: "/ˈæm.bʊʃ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "伏擊", def_en: "surprise attack", 
                sentence: "The soldiers were caught in an ambush while patrolling the dense forest.", 
                sentence_trans: "士兵在茂密的森林巡邏時遭到了伏擊。",
                synonyms: ["trap", "surprise attack"], phrases: ["lay an ambush"]
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "伏擊", def_en: "attack by surprise",
                sentence: "They were ambushed by enemy forces.", 
                sentence_trans: "他們遭到了敵軍的伏擊。",
                synonyms: ["trap", "waylay"], phrases: []
            }]
        }] 
    },
    { 
        id: 3016, word: "Amend", ipa: "/əˈmend/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "修訂", def_en: "make minor changes", 
                sentence: "The constitution was amended to grant equal voting rights to all citizens.", 
                sentence_trans: "憲法經過修訂，賦予所有公民平等的投票權。",
                synonyms: ["revise", "alter", "modify"], phrases: ["amend a law"]
            }] 
        }] 
    },
    { 
        id: 3017, word: "Amid", ipa: "/əˈmɪd/", priority: 10, 
        meanings: [{ 
            pos: "prep.", items: [{ 
                def_zh: "在...之中", def_en: "surrounded by", 
                sentence: "The resignation came amid growing criticism of the director's management style.", 
                sentence_trans: "辭職發生在對導演管理風格的批評聲浪日益高漲之中。",
                synonyms: ["among", "during", "in the middle of"], phrases: ["amid fears"]
            }] 
        }] 
    },
    { 
        id: 3018, word: "Ample", ipa: "/ˈæm.pəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "充足的", def_en: "plentiful", 
                sentence: "There is ample evidence to suggest that the policy has had a positive impact on the economy.", 
                sentence_trans: "有充分的證據表明該政策對經濟產生了積極影響。",
                synonyms: ["plentiful", "abundant", "sufficient"], phrases: ["ample time", "ample room"]
            }] 
        }] 
    },
    { 
        id: 3019, word: "Amplify", ipa: "/ˈæm.plɪ.faɪ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "放大", def_en: "increase volume or effect", 
                sentence: "Social media platforms can amplify misinformation if content is not properly moderated.", 
                sentence_trans: "如果內容未經適當審核，社交媒體平台可能會放大錯誤訊息。",
                synonyms: ["louden", "magnify", "boost"], phrases: ["amplify sound"]
            }] 
        }] 
    },
    { 
        id: 3020, word: "Analogy", ipa: "/əˈnæl.ə.dʒi/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "類比", def_en: "comparison for explanation", 
                sentence: "Drawing an analogy between the brain and a computer helps simplify complex cognitive processes.", 
                sentence_trans: "將大腦與電腦進行類比有助於簡化複雜的認知過程。",
                synonyms: ["comparison", "parallel", "metaphor"], phrases: ["draw an analogy"]
            }] 
        }] 
    },
    { 
        id: 3021, word: "Analyst", ipa: "/ˈæn.ə.lɪst/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "分析師", def_en: "person who analyzes", 
                sentence: "The financial analyst predicted a downturn in the market based on recent economic indicators.", 
                sentence_trans: "金融分析師根據最近的經濟指標預測市場將出現低迷。",
                synonyms: ["examiner", "observer"], phrases: ["financial analyst", "systems analyst"]
            }] 
        }] 
    },
    { 
        id: 3022, word: "Analytical", ipa: "/ˌæn.əlˈɪt.ɪ.kəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "分析的", def_en: "using logical reasoning", 
                sentence: "Strong analytical skills are essential for solving complex problems in engineering.", 
                sentence_trans: "強大的分析能力對於解決工程中的複雜問題至關重要。",
                synonyms: ["logical", "systematic", "rational"], phrases: ["analytical skills"]
            }] 
        }] 
    },
    { 
        id: 3023, word: "Anchor", ipa: "/ˈæŋ.kər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "錨", def_en: "heavy object to moor ship", 
                sentence: "The ship dropped anchor in the harbor to wait for the storm to pass.", 
                sentence_trans: "船在港口拋錨等待風暴過去。",
                synonyms: [], phrases: ["drop anchor"]
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "固定", def_en: "secure firmly",
                sentence: "We anchored the boat off the coast.", 
                sentence_trans: "我們將船停泊在海岸附近。",
                synonyms: ["moor", "secure"], phrases: ["anchor a show"]
            }]
        }] 
    },
    { 
        id: 3024, word: "Animate", ipa: "/ˈæn.ɪ.meɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使有生氣", def_en: "bring to life", 
                sentence: "The speaker's lively gestures helped to animate the audience and keep them engaged.", 
                sentence_trans: "演講者生動的手勢有助於活躍觀眾氣氛並讓他們保持專注。",
                synonyms: ["enliven", "vitalize"], phrases: []
            }] 
        }, {
            pos: "adj.", items: [{
                def_zh: "有生命的", def_en: "alive",
                sentence: "All animate beings need oxygen to survive.", 
                sentence_trans: "所有有生命的生物都需要氧氣才能生存。",
                synonyms: ["living", "alive"], phrases: ["animate objects"]
            }]
        }] 
    },
    { 
        id: 3025, word: "Animation", ipa: "/ˌæn.ɪˈmeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "動畫", def_en: "technique of moving images", 
                sentence: "Modern computer animation has revolutionized the film industry.", 
                sentence_trans: "現代電腦動畫徹底改變了電影產業。",
                synonyms: ["cartoon"], phrases: ["computer animation"]
            }] 
        }] 
    },
    { 
        id: 3026, word: "Annoyance", ipa: "/əˈnɔɪ.əns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "煩惱", def_en: "feeling of irritation", 
                sentence: "He couldn't hide his annoyance at being interrupted during the meeting.", 
                sentence_trans: "他無法掩飾自己在會議期間被打斷的惱火。",
                synonyms: ["irritation", "vexation"], phrases: ["much to my annoyance"]
            }] 
        }] 
    },
    { 
        id: 3027, word: "Anonymous", ipa: "/əˈnɒn.ɪ.məs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "匿名的", def_en: "unnamed", 
                sentence: "The donor wished to remain anonymous, so their name was not listed on the plaque.", 
                sentence_trans: "捐贈者希望保持匿名，因此他們的名字沒有列在牌匾上。",
                synonyms: ["unnamed", "incognito"], phrases: ["anonymous donor"]
            }] 
        }] 
    },
    { 
        id: 3028, word: "Anthem", ipa: "/ˈæn.θəm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "國歌", def_en: "uplifting song for a group", 
                sentence: "Everyone stood in respect as the national anthem was played before the game.", 
                sentence_trans: "比賽前奏國歌時，所有人都肅立致敬。",
                synonyms: ["hymn", "song"], phrases: ["national anthem"]
            }] 
        }] 
    },
    { 
        id: 3029, word: "Antibiotic", ipa: "/ˌæn.ti.baɪˈɒt.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "抗生素", def_en: "medicine against bacteria", 
                sentence: "The overuse of antibiotics has led to the emergence of drug-resistant bacteria.", 
                sentence_trans: "抗生素的過度使用導致了抗藥性細菌的出現。",
                synonyms: [], phrases: ["antibiotic resistance"]
            }] 
        }] 
    },
    { 
        id: 3030, word: "Anticipate", ipa: "/ænˈtɪs.ɪ.peɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "預期", def_en: "predict or expect", 
                sentence: "We do not anticipate any major delays in the construction project.", 
                sentence_trans: "我們預期建設項目不會有重大延誤。",
                synonyms: ["expect", "foresee", "predict"], phrases: ["anticipate trouble"]
            }] 
        }] 
    },
    { 
        id: 3031, word: "Anticipation", ipa: "/ænˌtɪs.ɪˈpeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "期盼", def_en: "action of anticipating", 
                sentence: "The crowd waited in eager anticipation for the band to take the stage.", 
                sentence_trans: "群眾熱切期盼樂團上台。",
                synonyms: ["expectation", "hope"], phrases: ["in anticipation of"]
            }] 
        }] 
    },
    { 
        id: 3032, word: "Antique", ipa: "/ænˈtiːk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "古董", def_en: "collectible old object", 
                sentence: "Collecting antique furniture can be a lucrative investment if one knows the market well.", 
                sentence_trans: "如果非常了解市場，收藏古董家具可能是一項利潤豐厚的投資。",
                synonyms: ["relic"], phrases: ["antique shop"]
            }] 
        }, {
            pos: "adj.", items: [{
                def_zh: "古董的", def_en: "valuable because old",
                sentence: "We visited an antique shop in the old town.", 
                sentence_trans: "我們參觀了老城區的一家古董店。",
                synonyms: ["vintage", "classic"], phrases: []
            }]
        }] 
    },
    { 
        id: 3033, word: "Antonym", ipa: "/ˈæn.tə.nɪm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "反義詞", def_en: "word with opposite meaning", 
                sentence: "Learning synonyms and antonyms helps to expand one's vocabulary range.", 
                sentence_trans: "學習同義詞和反義詞有助於擴大詞彙範圍。",
                synonyms: ["opposite"], phrases: []
            }] 
        }] 
    },
    { 
        id: 3034, word: "Applaud", ipa: "/əˈplɔːd/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "鼓掌", def_en: "praise by clapping", 
                sentence: "The audience stood to applaud the performers after the spectacular show.", 
                sentence_trans: "精彩的表演結束後，觀眾起立為表演者鼓掌。",
                synonyms: ["clap", "cheer", "praise"], phrases: ["applaud a decision"]
            }] 
        }] 
    },
    { 
        id: 3035, word: "Applause", ipa: "/əˈplɔːz/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "掌聲", def_en: "praise expressed by clapping", 
                sentence: "The thunderous applause lasted for several minutes after the speech concluded.", 
                sentence_trans: "演講結束後，雷鳴般的掌聲持續了幾分鐘。",
                synonyms: ["clapping", "ovation"], phrases: ["round of applause"]
            }] 
        }] 
    }

    { 
        id: 3036, word: "Appliance", ipa: "/əˈplaɪ.əns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "家用電器；器具", def_en: "a device or piece of equipment designed to perform a specific task", 
                sentence: "Modern household appliances have significantly reduced the time spent on domestic chores.", 
                sentence_trans: "現代家用電器顯著減少了花在家務上的時間。",
                synonyms: ["device", "gadget", "instrument"], phrases: ["household appliance", "electrical appliance"]
            }] 
        }] 
    },
    { 
        id: 3037, word: "Applicable", ipa: "/əˈplɪk.ə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "適用的；合適的", def_en: "relevant or appropriate", 
                sentence: "The new regulations are applicable to all international students regardless of their country of origin.", 
                sentence_trans: "新規應適用於所有國際學生，無論其來自哪個國家。",
                synonyms: ["relevant", "appropriate", "suitable"], phrases: ["applicable to", "where applicable"]
            }] 
        }] 
    },
    { 
        id: 3038, word: "Apprentice", ipa: "/əˈpren.tɪs/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "學徒；徒弟", def_en: "a person who is learning a trade from a skilled employer", 
                sentence: "He worked as an apprentice to a master carpenter for five years before starting his own business.", 
                sentence_trans: "在創業之前，他跟隨一位木匠大師當了五年的學徒。",
                synonyms: ["trainee", "learner", "novice"], phrases: ["apprentice chef", "apprentice carpenter"]
            }] 
        }] 
    },
    { 
        id: 3039, word: "Approximate", ipa: "/əˈprɒk.sɪ.mət/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "大約的；近似的", def_en: "close to the actual, but not completely accurate or exact", 
                sentence: "The approximate cost of the renovation project is estimated to be around two million dollars.", 
                sentence_trans: "翻修工程的大約成本估計約為兩百萬美元。",
                synonyms: ["estimated", "rough", "close"], phrases: ["approximate figure", "approximate value"]
            }] 
        }] 
    },
    { 
        id: 3040, word: "Archaeology", ipa: "/ˌɑː.kiˈɒl.ə.dʒi/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "考古學", def_en: "the study of human history and prehistory through the excavation of sites", 
                sentence: "Archaeology provides valuable insights into the daily lives of ancient civilizations.", 
                sentence_trans: "考古學為古代文明的日常生活提供了寶貴的見解。",
                synonyms: [], phrases: ["marine archaeology", "historical archaeology"]
            }] 
        }] 
    },
    { 
        id: 3041, word: "Architect", ipa: "/ˈɑː.kɪ.tekt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "建築師", def_en: "a person who designs buildings", 
                sentence: "The renowned architect designed the museum to blend seamlessly with the surrounding landscape.", 
                sentence_trans: "這位著名的建築師設計了這座博物館，使其與周圍景觀無縫融合。",
                synonyms: ["designer", "planner"], phrases: ["landscape architect", "chief architect"]
            }] 
        }] 
    },
    { 
        id: 3042, word: "Architecture", ipa: "/ˈɑː.kɪ.tek.tʃər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "建築風格；建築學", def_en: "the art or practice of designing and constructing buildings", 
                sentence: "The city is famous for its stunning Gothic architecture.", 
                sentence_trans: "這座城市以其令人驚嘆的哥德式建築而聞名。",
                synonyms: ["design", "construction"], phrases: ["modern architecture", "classical architecture"]
            }] 
        }] 
    },
    { 
        id: 3043, word: "Archive", ipa: "/ˈɑː.kaɪv/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "檔案；檔案室", def_en: "a collection of historical documents or records", 
                sentence: "The historian spent months researching in the national archive.", 
                sentence_trans: "這位歷史學家在國家檔案館花了數月時間進行研究。",
                synonyms: ["records", "files", "chronicles"], phrases: ["digital archive", "archive material"]
            }] 
        }] 
    },
    { 
        id: 3044, word: "Arena", ipa: "/əˈriː.nə/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "競技場；活動場所", def_en: "a level area surrounded by seats for sports or entertainment", 
                sentence: "The political arena has become increasingly polarized in recent years.", 
                sentence_trans: "近年來，政治競技場變得越來越兩極分化。",
                synonyms: ["stadium", "field", "domain"], phrases: ["political arena", "sports arena"]
            }] 
        }] 
    },
    { 
        id: 3045, word: "Arithmetic", ipa: "/əˈrɪθ.mə.tɪk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "算術", def_en: "the branch of mathematics dealing with the properties and manipulation of numbers", 
                sentence: "Basic arithmetic skills are essential for everyday tasks such as budgeting and shopping.", 
                sentence_trans: "基本的算術技能對於預算和購物等日常任務至關重要。",
                synonyms: ["calculation", "computation"], phrases: ["mental arithmetic"]
            }] 
        }] 
    },
    { 
        id: 3046, word: "Arouse", ipa: "/əˈraʊz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "引起；喚起", def_en: "evoke or awaken (a feeling, emotion, or response)", 
                sentence: "The suspicious behavior of the stranger aroused the attention of the security guards.", 
                sentence_trans: "陌生人的可疑行為引起了保安的注意。",
                synonyms: ["provoke", "trigger", "stimulate"], phrases: ["arouse suspicion", "arouse interest"]
            }] 
        }] 
    },
    { 
        id: 3047, word: "Array", ipa: "/əˈreɪ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "一系列；大量", def_en: "an impressive display or range of a particular type of thing", 
                sentence: "The solar panel array generates enough electricity to power the entire facility.", 
                sentence_trans: "太陽能電池板陣列產生的電力足以為整個設施供電。",
                synonyms: ["range", "assortment", "collection"], phrases: ["vast array", "wide array"]
            }] 
        }] 
    },
    { 
        id: 3048, word: "Arrogant", ipa: "/ˈær.ə.ɡənt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "傲慢的；自大的", def_en: "having or revealing an exaggerated sense of one's own importance", 
                sentence: "His arrogant attitude alienated him from his colleagues.", 
                sentence_trans: "他傲慢的態度使他與同事疏遠。",
                synonyms: ["haughty", "conceited", "pompous"], phrases: ["arrogant behavior"]
            }] 
        }] 
    },
    { 
        id: 3049, word: "Articulate", ipa: "/ɑːˈtɪk.jə.lət/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "善於表達的", def_en: "having or showing the ability to speak fluently and coherently", 
                sentence: "She is an articulate speaker who can explain complex ideas clearly.", 
                sentence_trans: "她是一位善於表達的演講者，能清晰地解釋複雜的想法。",
                synonyms: ["eloquent", "fluent", "expressive"], phrases: ["highly articulate"]
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "清楚表達", def_en: "express (an idea or feeling) fluently and coherently",
                sentence: "Students must learn to articulate their arguments effectively in essays.",
                sentence_trans: "學生必須學會在文章中有效地表達他們的論點。",
                synonyms: ["express", "communicate"], phrases: []
            }]
        }] 
    },
    { 
        id: 3050, word: "Artifact", ipa: "/ˈɑː.tɪ.fækt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "手工藝品；文物", def_en: "an object made by a human being, typically an item of cultural or historical interest", 
                sentence: "The museum displays ancient artifacts recovered from the shipwreck.", 
                sentence_trans: "博物館展示了從沈船中打撈出來的古代文物。",
                synonyms: ["relic", "antiquity"], phrases: ["cultural artifact"]
            }] 
        }] 
    },
    { 
        id: 3051, word: "Ascend", ipa: "/əˈsend/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "上升；攀登", def_en: "go up or climb", 
                sentence: "The hikers watched the mist ascend from the valley floor.", 
                sentence_trans: "登山者看著霧氣從谷底升起。",
                synonyms: ["climb", "rise", "scale"], phrases: ["ascend the throne"]
            }] 
        }] 
    },
    { 
        id: 3052, word: "Aspire", ipa: "/əˈspaɪər/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "渴望；追求", def_en: "direct one's hopes or ambitions towards achieving something", 
                sentence: "Many young athletes aspire to represent their country in the Olympics.", 
                sentence_trans: "許多年輕運動員渴望代表國家參加奧運。",
                synonyms: ["desire", "aim", "seek"], phrases: ["aspire to become", "aspire to greatness"]
            }] 
        }] 
    },
    { 
        id: 3053, word: "Assassination", ipa: "/əˌsæs.ɪˈneɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "暗殺", def_en: "the action of assassinating someone", 
                sentence: "The assassination of the archduke triggered the start of the First World War.", 
                sentence_trans: "大公的暗殺引發了第一次世界大戰的爆發。",
                synonyms: ["murder", "killing"], phrases: ["political assassination"]
            }] 
        }] 
    },
    { 
        id: 3054, word: "Assault", ipa: "/əˈsɒlt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "攻擊；襲擊", def_en: "a physical attack", 
                sentence: "He was charged with assault after the fight in the bar.", 
                sentence_trans: "在酒吧打架後，他被指控襲擊罪。",
                synonyms: ["attack", "strike"], phrases: ["sexual assault", "assault course"]
            }] 
        }] 
    },
    { 
        id: 3055, word: "Assert", ipa: "/əˈsɜːt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "斷言；主張", def_en: "state a fact or belief confidently and forcefully", 
                sentence: "The company asserted that it had complied with all safety regulations.", 
                sentence_trans: "該公司斷言其已遵守所有安全規定。",
                synonyms: ["declare", "maintain", "contend"], phrases: ["assert authority", "assert rights"]
            }] 
        }] 
    },
    { 
        id: 3056, word: "Assess", ipa: "/əˈses/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "評估；估價", def_en: "evaluate or estimate the nature, ability, or quality of", 
                sentence: "It is difficult to accurately assess the impact of climate change on local agriculture.", 
                sentence_trans: "很難準確評估氣候變遷對當地農業的影響。",
                synonyms: ["evaluate", "judge", "gauge"], phrases: ["assess the situation"]
            }] 
        }] 
    },
    { 
        id: 3057, word: "Assessment", ipa: "/əˈses.mənt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "評估；評價", def_en: "the evaluation or estimation of the nature, quality, or ability of someone or something", 
                sentence: "Continuous assessment is used to monitor student progress throughout the academic year.", 
                sentence_trans: "持續評估用於監測學生在整個學年的進步。",
                synonyms: ["evaluation", "appraisal", "analysis"], phrases: ["risk assessment", "needs assessment"]
            }] 
        }] 
    },
    { 
        id: 3058, word: "Asset", ipa: "/ˈæs.et/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "資產；優點", def_en: "a useful or valuable thing, person, or quality", 
                sentence: "Good communication skills are a valuable asset in any profession.", 
                sentence_trans: "良好的溝通技巧在任何職業中都是寶貴的資產。",
                synonyms: ["benefit", "advantage", "resource"], phrases: ["liquid asset", "valuable asset"]
            }] 
        }] 
    },
    { 
        id: 3059, word: "Assumption", ipa: "/əˈsʌmp.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "假設；假定", def_en: "a thing that is accepted as true or as certain to happen, without proof", 
                sentence: "The theory is based on the assumption that markets are always rational.", 
                sentence_trans: "該理論基於市場總是理性的這一假設。",
                synonyms: ["supposition", "premise", "belief"], phrases: ["make an assumption", "on the assumption that"]
            }] 
        }] 
    },
    { 
        id: 3060, word: "Asthma", ipa: "/ˈæs.mə/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "氣喘", def_en: "a respiratory condition marked by spasms in the bronchi of the lungs", 
                sentence: "Air pollution can trigger severe attacks in people suffering from asthma.", 
                sentence_trans: "空氣污染會引發氣喘患者的嚴重發作。",
                synonyms: [], phrases: ["asthma attack"]
            }] 
        }] 
    },
    { 
        id: 3061, word: "Astonish", ipa: "/əˈstɒn.ɪʃ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使驚訝", def_en: "surprise or impress (someone) greatly", 
                sentence: "The magician's ability to escape from the locked box astonished the audience.", 
                sentence_trans: "魔術師從鎖著的箱子中逃脫的能力讓觀眾感到驚訝。",
                synonyms: ["amaze", "astound", "stagger"], phrases: []
            }] 
        }] 
    },
    { 
        id: 3062, word: "Astronaut", ipa: "/ˈæs.trə.nɔːt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "太空人", def_en: "a person who is trained to travel in a spacecraft", 
                sentence: "The astronaut conducted several spacewalks to repair the satellite.", 
                sentence_trans: "太空人進行了幾次太空行走來修復衛星。",
                synonyms: ["cosmonaut"], phrases: []
            }] 
        }] 
    },
    { 
        id: 3063, word: "Astronomy", ipa: "/əˈstrɒn.ə.mi/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "天文學", def_en: "the branch of science which deals with celestial objects, space, and the physical universe", 
                sentence: "Advances in astronomy have allowed us to observe galaxies billions of light-years away.", 
                sentence_trans: "天文學的進步使我們能夠觀察到數十億光年外的星系。",
                synonyms: [], phrases: []
            }] 
        }] 
    },
    { 
        id: 3064, word: "Athletics", ipa: "/æθˈlet.ɪks/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "田徑運動", def_en: "physical sports and games of any kind", 
                sentence: "The university offers scholarships for students who excel in athletics.", 
                sentence_trans: "該大學為在田徑運動方面表現優異的學生提供獎學金。",
                synonyms: ["sports"], phrases: ["athletics competition"]
            }] 
        }] 
    },
    { 
        id: 3065, word: "Attain", ipa: "/əˈteɪn/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "達到；獲得", def_en: "succeed in achieving", 
                sentence: "It takes years of dedication to attain mastery in a musical instrument.", 
                sentence_trans: "要精通一種樂器需要多年的奉獻。",
                synonyms: ["achieve", "reach", "accomplish"], phrases: ["attain a goal"]
            }] 
        }] 
    },
    { 
        id: 3066, word: "Attendance", ipa: "/əˈten.dəns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "出席；到場", def_en: "the action of stating at an event", 
                sentence: "Regular class attendance is required to pass the course.", 
                sentence_trans: "通過這門課程需要定期上課出席。",
                synonyms: ["presence"], phrases: ["in attendance"]
            }] 
        }] 
    },
    { 
        id: 3067, word: "Attorney", ipa: "/əˈtɜː.ni/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "律師", def_en: "a person appointed to act for another in business or legal matters", 
                sentence: "The defense attorney argued that there was insufficient evidence to convict.", 
                sentence_trans: "辯護律師辯稱證據不足以定罪。",
                synonyms: ["lawyer", "counsel"], phrases: ["defense attorney", "power of attorney"]
            }] 
        }] 
    },
    { 
        id: 3068, word: "Attribute", ipa: "/ˈæt.rɪ.bjuːt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "特質；屬性", def_en: "a quality or feature regarded as a characteristic or inherent part of someone or something", 
                sentence: "Patience is a key attribute for anyone working in customer service.", 
                sentence_trans: "耐心是任何從事客戶服務工作的人的關鍵特質。",
                synonyms: ["quality", "feature", "trait"], phrases: []
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "歸因於", def_en: "regard something as being caused by",
                sentence: "He attributes his success to hard work and a bit of luck.",
                sentence_trans: "他將自己的成功歸因於努力工作和一點運氣。",
                synonyms: ["ascribe", "credit"], phrases: ["attribute to"]
            }]
        }] 
    },
    { 
        id: 3069, word: "Auction", ipa: "/ˈɔːk.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "拍賣", def_en: "a public sale in which goods or property are sold to the highest bidder", 
                sentence: "The rare painting was sold at auction for a record-breaking price.", 
                sentence_trans: "這幅稀有畫作在拍賣會上以創紀錄的價格售出。",
                synonyms: [], phrases: ["auction house", "online auction"]
            }] 
        }] 
    },
    { 
        id: 3070, word: "Audit", ipa: "/ˈɔː.dɪt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "審計；查帳", def_en: "an official inspection of an individual's or organization's accounts", 
                sentence: "The company undergoes an annual audit to ensure financial compliance.", 
                sentence_trans: "公司每年進行審計以確保財務合規。",
                synonyms: ["inspection", "examination"], phrases: ["tax audit", "internal audit"]
            }] 
        }] 
    },
    { 
        id: 3071, word: "Auditorium", ipa: "/ˌɔː.dɪˈtɔː.ri.əm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "禮堂；觀眾席", def_en: "the part of a theater, concert hall, or other public building in which the audience sits", 
                sentence: "The graduation ceremony was held in the university's main auditorium.", 
                sentence_trans: "畢業典禮在大學的主禮堂舉行。",
                synonyms: ["hall", "theater"], phrases: []
            }] 
        }] 
    },
    { 
        id: 3072, word: "Authorize", ipa: "/ˈɔː.θər.aɪz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "授權；批准", def_en: "give official permission for or approval to", 
                sentence: "Only the manager is allowed to authorize refunds for customers.", 
                sentence_trans: "只有經理有權批准給客戶退款。",
                synonyms: ["permit", "sanction", "approve"], phrases: ["authorize a transaction"]
            }] 
        }] 
    },
    { 
        id: 3073, word: "Autonomy", ipa: "/ɔːˈtɒn.ə.mi/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "自治；自主權", def_en: "the right or condition of self-government", 
                sentence: "Universities enjoy a high degree of autonomy in designing their curriculum.", 
                sentence_trans: "大學在設計課程方面享有高度的自主權。",
                synonyms: ["independence", "freedom", "self-rule"], phrases: ["personal autonomy"]
            }] 
        }] 
    },
    { 
        id: 3074, word: "Avert", ipa: "/əˈvɜːt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "避免；轉移", def_en: "prevent or ward off (an undesirable occurrence)", 
                sentence: "Diplomatic efforts were made to avert a potential conflict between the two countries.", 
                sentence_trans: "進行了外交努力以避免兩國之間的潛在衝突。",
                synonyms: ["prevent", "avoid", "forestall"], phrases: ["avert disaster", "avert one's eyes"]
            }] 
        }] 
    },
    { 
        id: 3075, word: "Aviation", ipa: "/ˌeɪ.viˈeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "航空", def_en: "the flying or operating of aircraft", 
                sentence: "Safety standards in the civil aviation industry are extremely strict.", 
                sentence_trans: "民用航空業的安全標準極其嚴格。",
                synonyms: ["flight", "aeronautics"], phrases: ["aviation industry"]
            }] 
        }] 
    },
    { 
        id: 3076, word: "Awe", ipa: "/ɔː/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "敬畏；驚嘆", def_en: "a feeling of reverential respect mixed with fear or wonder", 
                sentence: "We stared in awe at the magnificent view of the mountain range.", 
                sentence_trans: "我們驚嘆地注視著山脈的壯麗景色。",
                synonyms: ["wonder", "admiration"], phrases: ["in awe of"]
            }] 
        }] 
    },
    { 
        id: 3077, word: "Awesome", ipa: "/ˈɔː.səm/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "令人敬畏的；極好的", def_en: "extremely impressive or daunting", 
                sentence: "The power of the hurricane was truly awesome and destructive.", 
                sentence_trans: "颶風的威力真是令人敬畏且具有破壞性。",
                synonyms: ["breathtaking", "amazing", "stunning"], phrases: ["totally awesome"]
            }] 
        }] 
    },
    { 
        id: 3078, word: "Awhile", ipa: "/əˈwaɪl/", priority: 10, 
        meanings: [{ 
            pos: "adv.", items: [{ 
                def_zh: "片刻；一會兒", def_en: "for a short time", 
                sentence: "We decided to stay awhile longer to enjoy the sunset.", 
                sentence_trans: "我們決定多待一會兒欣賞日落。",
                synonyms: ["briefly", "for a moment"], phrases: ["stay awhile"]
            }] 
        }] 
    },

    { 
        id: 3079, word: "Bachelor", ipa: "/ˈbætʃ.əl.ər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "學士學位；單身漢", def_en: "a person who holds a first degree from a university", 
                sentence: "She graduated with a bachelor's degree in psychology from a prestigious university.", 
                sentence_trans: "她從一所著名的各大學獲得了心理學學士學位畢業。",
                synonyms: ["graduate"], phrases: ["Bachelor of Arts", "eligible bachelor"]
            }] 
        }] 
    },
    { 
        id: 3080, word: "Backbone", ipa: "/ˈbæk.bəʊn/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "支柱；脊椎", def_en: "the chief support of a system or organization", 
                sentence: "Small and medium-sized enterprises are often considered the backbone of the economy.", 
                sentence_trans: "中小型企業常被視為經濟的支柱。",
                synonyms: ["foundation", "mainstay", "spine"], phrases: ["backbone of the economy"]
            }] 
        }] 
    },
    { 
        id: 3081, word: "Ballot", ipa: "/ˈbæl.ət/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "選票；投票", def_en: "a process of voting, in writing and typically in secret", 
                sentence: "The union members held a secret ballot to decide whether to go on strike.", 
                sentence_trans: "工會成員舉行了不記名投票，以決定是否罷工。",
                synonyms: ["vote", "poll", "election"], phrases: ["cast a ballot", "secret ballot"]
            }] 
        }] 
    },
    { 
        id: 3082, word: "Ban", ipa: "/bæn/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "禁止；取締", def_en: "officially or legally prohibit", 
                sentence: "Many countries have moved to ban the use of single-use plastics to protect the environment.", 
                sentence_trans: "許多國家已採取行動禁止使用一次性塑膠以保護環境。",
                synonyms: ["prohibit", "forbid", "outlaw"], phrases: ["ban on smoking", "lift a ban"]
            }] 
        }] 
    },
    { 
        id: 3083, word: "Banquet", ipa: "/ˈbæŋ.kwɪt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "宴會；盛宴", def_en: "an elaborate and formal evening meal for many people", 
                sentence: "A state banquet was held in honor of the visiting president.", 
                sentence_trans: "舉行了國宴以歡迎來訪的總統。",
                synonyms: ["feast", "dinner"], phrases: ["wedding banquet"]
            }] 
        }] 
    },
    { 
        id: 3084, word: "Barren", ipa: "/ˈbær.ən/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "貧瘠的；不孕的", def_en: "(of land) too poor to produce much or any vegetation", 
                sentence: "Overgrazing has turned the once fertile grassland into a barren wasteland.", 
                sentence_trans: "過度放牧已將曾經肥沃的草原變成了貧瘠的荒地。",
                synonyms: ["infertile", "unproductive", "sterile"], phrases: ["barren landscape"]
            }] 
        }] 
    },
    { 
        id: 3085, word: "Behalf", ipa: "/bɪˈhɑːf/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "代表；利益", def_en: "in the interests of a person, group, or principle", 
                sentence: "The lawyer spoke on behalf of his client during the court proceedings.", 
                sentence_trans: "律師在法庭訴訟期間代表他的委託人發言。",
                synonyms: ["interest", "benefit"], phrases: ["on behalf of"]
            }] 
        }] 
    },
    { 
        id: 3086, word: "Beneficial", ipa: "/ˌben.ɪˈfɪʃ.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "有益的；有利的", def_en: "resulting in good; favorable or advantageous", 
                sentence: "Regular physical exercise is highly beneficial for both mental and physical health.", 
                sentence_trans: "規律的體育鍛煉對身心健康都非常有益。",
                synonyms: ["advantageous", "helpful", "profitable"], phrases: ["mutually beneficial"]
            }] 
        }] 
    },
    { 
        id: 3087, word: "Betray", ipa: "/bɪˈtreɪ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "背叛；洩漏", def_en: "expose (one's country, a group, or a person) to danger by treacherously giving information to an enemy", 
                sentence: "He felt that his best friend had betrayed his trust by revealing his secrets.", 
                sentence_trans: "他覺得他最好的朋友洩露了他的秘密，背叛了他的信任。",
                synonyms: ["deceive", "mislead"], phrases: ["betray trust", "betray a secret"]
            }] 
        }] 
    },
    { 
        id: 3088, word: "Beverage", ipa: "/ˈbev.ər.ɪdʒ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "飲料", def_en: "a drink other than water", 
                sentence: "The hotel offers a wide selection of alcoholic and non-alcoholic beverages.", 
                sentence_trans: "這家酒店提供多種含酒精和無酒精飲料。",
                synonyms: ["drink", "liquid"], phrases: ["beverage industry"]
            }] 
        }] 
    },
    { 
        id: 3089, word: "Bilateral", ipa: "/ˌbaɪˈlæt.ər.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "雙邊的", def_en: "having or relating to two sides; affecting both sides", 
                sentence: "The two countries signed a bilateral trade agreement to reduce tariffs.", 
                sentence_trans: "兩國簽署了雙邊貿易協定以降低關稅。",
                synonyms: ["two-sided", "mutual"], phrases: ["bilateral agreement", "bilateral relations"]
            }] 
        }] 
    },
    { 
        id: 3090, word: "Biological", ipa: "/ˌbaɪ.əˈlɒdʒ.ɪ.kəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "生物學的", def_en: "relating to biology or living organisms", 
                sentence: "The research focuses on the biological diversity of the Amazon rainforest.", 
                sentence_trans: "這項研究集中於亞馬遜雨林的生物多樣性。",
                synonyms: ["organic", "living"], phrases: ["biological clock", "biological weapon"]
            }] 
        }] 
    },
    { 
        id: 3091, word: "Bizarre", ipa: "/bɪˈzɑːr/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "奇異的；怪誕的", def_en: "very strange or unusual", 
                sentence: "The artist is known for his bizarre and surreal paintings.", 
                sentence_trans: "這位藝術家以其奇異和超現實的畫作而聞名。",
                synonyms: ["strange", "peculiar", "weird"], phrases: ["bizarre behavior"]
            }] 
        }] 
    },
    { 
        id: 3092, word: "Blast", ipa: "/blɑːst/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "爆炸；一陣(風)", def_en: "a destructive wave of highly compressed air spreading outward from an explosion", 
                sentence: "The explosion caused a massive blast that shattered windows blocks away.", 
                sentence_trans: "爆炸引起了巨大的衝擊波，震碎了幾條街外的窗戶。",
                synonyms: ["explosion", "burst", "gust"], phrases: ["bomb blast"]
            }] 
        }] 
    },
    { 
        id: 3093, word: "Bleach", ipa: "/bliːtʃ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "漂白", def_en: "cause (material such as hair or wood) to become white or much lighter", 
                sentence: "The sun will bleach the color out of the fabric if you leave it outside for too long.", 
                sentence_trans: "如果你把布料放在外面太久，陽光會漂白它的顏色。",
                synonyms: ["whiten", "blanch"], phrases: ["bleach hair"]
            }] 
        }] 
    },
    { 
        id: 3094, word: "Blueprint", ipa: "/ˈbluː.prɪnt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "藍圖；計畫", def_en: "a design plan or other technical drawing", 
                sentence: "The government presented a blueprint for economic reform.", 
                sentence_trans: "政府提出了經濟改革的藍圖。",
                synonyms: ["plan", "scheme", "design"], phrases: ["blueprint for success"]
            }] 
        }] 
    },
    { 
        id: 3095, word: "Blunt", ipa: "/blʌnt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "鈍的；直率的", def_en: "(of a person or remark) uncompromisingly forthright", 
                sentence: "To be blunt, your work has not been up to standard lately.", 
                sentence_trans: "坦白說，你最近的工作沒有達到標準。",
                synonyms: ["dull", "direct", "frank"], phrases: ["blunt instrument", "blunt refusal"]
            }] 
        }] 
    },
    { 
        id: 3096, word: "Blur", ipa: "/blɜːr/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使模糊", def_en: "make or become unclear or less distinct", 
                sentence: "Tears began to blur her vision as she read the letter.", 
                sentence_trans: "當她讀那封信時，淚水開始模糊了她的視線。",
                synonyms: ["cloud", "obscure"], phrases: ["blur the lines"]
            }] 
        }] 
    },
    { 
        id: 3097, word: "Boost", ipa: "/buːst/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "促進；推動", def_en: "help or encourage (something) to increase or improve", 
                sentence: "The new marketing campaign is expected to boost sales significantly.", 
                sentence_trans: "新的行銷活動預計將顯著促進銷售。",
                synonyms: ["increase", "enhance", "promote"], phrases: ["boost confidence", "boost economy"]
            }] 
        }] 
    },
    { 
        id: 3098, word: "Boundary", ipa: "/ˈbaʊn.dər.i/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "邊界；界限", def_en: "a line that marks the limits of an area", 
                sentence: "The river marks the boundary between the two states.", 
                sentence_trans: "這條河標誌著兩州之間的邊界。",
                synonyms: ["border", "frontier", "limit"], phrases: ["push the boundaries"]
            }] 
        }] 
    },
    { 
        id: 3099, word: "Boundless", ipa: "/ˈbaʊnd.ləs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "無限的；無窮的", def_en: "unlimited or immense", 
                sentence: "Her boundless energy and enthusiasm inspired everyone on the team.", 
                sentence_trans: "她無限的精力和熱情激勵了團隊中的每個人。",
                synonyms: ["limitless", "infinite", "endless"], phrases: ["boundless possibilities"]
            }] 
        }] 
    },
    { 
        id: 3100, word: "Boycott", ipa: "/ˈbɔɪ.kɒt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "抵制；杯葛", def_en: "withdraw from commercial or social relations with (a country, organization, or person) as a punishment or protest", 
                sentence: "Consumers threatened to boycott the company due to its unethical labor practices.", 
                sentence_trans: "消費者威脅要抵制該公司，因為其不道德的勞動行為。",
                synonyms: ["spurn", "shun", "reject"], phrases: ["boycott a product"]
            }] 
        }] 
    },
    { 
        id: 3101, word: "Breakdown", ipa: "/ˈbreɪk.daʊn/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "故障；崩潰；分析", def_en: "a mechanical failure; a failure of a relationship or system", 
                sentence: "A breakdown in communication led to the failure of the project.", 
                sentence_trans: "溝通的中斷導致了專案的失敗。",
                synonyms: ["failure", "collapse", "analysis"], phrases: ["nervous breakdown", "breakdown of costs"]
            }] 
        }] 
    },
    { 
        id: 3102, word: "Breakthrough", ipa: "/ˈbreɪk.θruː/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "突破；重大進展", def_en: "a sudden, dramatic, and important discovery or development", 
                sentence: "Scientists have made a major breakthrough in the treatment of cancer.", 
                sentence_trans: "科學家在癌症治療方面取得了重大突破。",
                synonyms: ["advance", "development", "step forward"], phrases: ["technological breakthrough"]
            }] 
        }] 
    },
    { 
        id: 3103, word: "Bribe", ipa: "/braɪb/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "賄賂", def_en: "persuade (someone) to act in one's favor, typically illegally or dishonestly, by a gift of money or other inducement", 
                sentence: "It is illegal to bribe a public official to influence their decision.", 
                sentence_trans: "賄賂公職人員以影響其決定是違法的。",
                synonyms: ["buy off", "corrupt"], phrases: ["accept a bribe"]
            }] 
        }] 
    },
    { 
        id: 3104, word: "Brink", ipa: "/brɪŋk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "邊緣；始發點", def_en: "an extreme edge of land before a steep or vertical slope", 
                sentence: "The company was on the brink of bankruptcy before the new investment arrived.", 
                sentence_trans: "在新投資到來之前，該公司正處於破產的邊緣。",
                synonyms: ["edge", "verge", "threshold"], phrases: ["on the brink of"]
            }] 
        }] 
    },
    { 
        id: 3105, word: "Broaden", ipa: "/ˈbrɔː.dən/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "變寬；擴大", def_en: "become larger in distance from side to side; widen", 
                sentence: "Traveling helps to broaden your horizons and understanding of different cultures.", 
                sentence_trans: "旅行有助於開闊你的視野和對不同文化的理解。",
                synonyms: ["widen", "expand", "extend"], phrases: ["broaden one's mind", "broaden horizons"]
            }] 
        }] 
    },
    { 
        id: 3106, word: "Brochure", ipa: "/ˈbrəʊ.ʃər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "小冊子", def_en: "a small book or magazine containing pictures and information about a product or service", 
                sentence: "The travel agency gave us a brochure detailing various holiday packages.", 
                sentence_trans: "旅行社給了我們一本詳述各種度假套餐的小冊子。",
                synonyms: ["pamphlet", "booklet", "leaflet"], phrases: ["travel brochure"]
            }] 
        }] 
    },
    { 
        id: 3107, word: "Browse", ipa: "/braʊz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "瀏覽；隨便翻閱", def_en: "scan through a text, website, or collection of data to gain an impression of the contents", 
                sentence: "I spent hours browsing through the books in the library.", 
                sentence_trans: "我花了幾個小時在圖書館瀏覽書籍。",
                synonyms: ["scan", "skim", "surf"], phrases: ["browse the internet"]
            }] 
        }] 
    },
    { 
        id: 3108, word: "Bulk", ipa: "/bʌlk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "主體；大部分；大量", def_en: "the mass or magnitude of something large", 
                sentence: "The bulk of the research was conducted by graduate students.", 
                sentence_trans: "大部分的研究是由研究生進行的。",
                synonyms: ["majority", "mass", "volume"], phrases: ["in bulk", "the bulk of"]
            }] 
        }] 
    },
    { 
        id: 3109, word: "Bureaucracy", ipa: "/bjʊəˈrɒk.rə.si/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "官僚體制；繁文縟節", def_en: "excessively complicated administrative procedure", 
                sentence: "The excessive bureaucracy involved in getting a permit discourages many small businesses.", 
                sentence_trans: "獲得許可證所涉及的過度官僚體制讓許多小企業卻步。",
                synonyms: ["red tape", "administration"], phrases: ["reduce bureaucracy"]
            }] 
        }] 
    },
    { 
        id: 3110, word: "Bureaucrat", ipa: "/ˈbjʊə.rə.kræt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "官僚；官員", def_en: "an official in a government department, in particular one perceived as being concerned with procedural correctness at the expense of people's needs", 
                sentence: "He was criticized for acting like a faceless bureaucrat rather than a public servant.", 
                sentence_trans: "他因表現得像個冷漠的官僚而不是公僕而受到批評。",
                synonyms: ["official", "administrator"], phrases: []
            }] 
        }] 
    },
    { 
        id: 3111, word: "Burial", ipa: "/ˈber.i.əl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "埋葬；葬禮", def_en: "the action or practice of burying a dead body", 
                sentence: "Archaeologists discovered an ancient burial site dating back thousands of years.", 
                sentence_trans: "考古學家發現了一個可以追溯到數千年前的古代墓葬遺址。",
                synonyms: ["interment", "funeral"], phrases: ["burial ground"]
            }] 
        }] 
    },
    { 
        id: 3112, word: "Bypass", ipa: "/ˈbaɪ.pɑːs/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "繞過；避開", def_en: "go past or around", 
                sentence: "The new road allows traffic to bypass the congested city center.", 
                sentence_trans: "這條新路允許交通繞過擁堵的市中心。",
                synonyms: ["avoid", "evade", "circumvent"], phrases: ["bypass surgery"]
            }] 
        }] 
    },
    // --- C Words (Caffeine - Civic) ---
    { 
        id: 4501, word: "Caffeine", ipa: "/ˈkæf.iːn/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "咖啡因", def_en: "a stimulant found in coffee, tea, and chocolate", 
                sentence: "Many people rely on caffeine to stay alert during long working hours.", 
                sentence_trans: "許多人依賴咖啡因在長時間工作時保持清醒。",
                synonyms: ["stimulant"], phrases: ["caffeine addiction"]
            }] 
        }] 
    },
    { 
        id: 4502, word: "Calcium", ipa: "/ˈkæl.si.əm/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "鈣", def_en: "a chemical element essential for healthy bones and teeth", 
                sentence: "Dairy products are a primary source of calcium in the western diet.", 
                sentence_trans: "乳製品是西方飲食中鈣的主要來源。",
                synonyms: [], phrases: ["calcium deficiency"]
            }] 
        }] 
    },
    { 
        id: 4503, word: "Calculator", ipa: "/ˈkæl.kjə.leɪ.tər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "計算機", def_en: "a device used for making mathematical calculations", 
                sentence: "Students are not allowed to use a calculator during the arithmetic exam.", 
                sentence_trans: "學生在算術考試期間不得使用計算機。",
                synonyms: [], phrases: []
            }] 
        }] 
    },
    { 
        id: 4504, word: "Calligraphy", ipa: "/kəˈlɪɡ.rə.fi/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "書法", def_en: "decorative handwriting or handwritten lettering", 
                sentence: "Chinese calligraphy is considered a high art form requiring years of practice.", 
                sentence_trans: "中國書法被視為一種需要多年練習的高級藝術形式。",
                synonyms: ["penmanship"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4505, word: "Canal", ipa: "/kəˈnæl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "運河", def_en: "an artificial waterway constructed to allow the passage of boats or ships", 
                sentence: "The Suez Canal is a vital trade route connecting Europe and Asia.", 
                sentence_trans: "蘇伊士運河是連接歐洲和亞洲的重要貿易路線。",
                synonyms: ["waterway", "channel"], phrases: ["canal boat"]
            }] 
        }] 
    },
    { 
        id: 4506, word: "Canvas", ipa: "/ˈkæn.vəs/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "帆布；油畫布", def_en: "a strong, coarse unbleached cloth used for sails, tents, or as a surface for oil painting", 
                sentence: "The artist stared at the blank canvas, waiting for inspiration to strike.", 
                sentence_trans: "藝術家盯著空白的畫布，等待靈感的到來。",
                synonyms: ["fabric"], phrases: ["blank canvas"]
            }] 
        }] 
    },
    { 
        id: 4507, word: "Capability", ipa: "/ˌkeɪ.pəˈbɪl.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "能力；性能", def_en: "the power or ability to do something", 
                sentence: "The new software extends the capability of the operating system significantly.", 
                sentence_trans: "新軟體顯著擴展了操作系統的性能。",
                synonyms: ["ability", "capacity", "competence"], phrases: ["military capability"]
            }] 
        }] 
    },
    { 
        id: 4508, word: "Cape", ipa: "/keɪp/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "海角；披肩", def_en: "a headland of large size extending into a body of water", 
                sentence: "The ship navigated around the treacherous waters of the cape.", 
                sentence_trans: "船隻繞過海角險惡的水域航行。",
                synonyms: ["headland", "promontory"], phrases: ["Cape of Good Hope"]
            }] 
        }] 
    },
    { 
        id: 4509, word: "Capsule", ipa: "/ˈkæp.sjuːl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "膠囊；太空艙", def_en: "a small case or container, especially a round or cylindrical one", 
                sentence: "The astronauts returned to Earth safely in the space capsule.", 
                sentence_trans: "太空人乘坐太空艙安全返回地球。",
                synonyms: ["pill", "pod"], phrases: ["time capsule"]
            }] 
        }] 
    },
    { 
        id: 4510, word: "Caption", ipa: "/ˈkæp.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "標題；說明文字", def_en: "a title or brief explanation appended to an article, illustration, cartoon, or poster", 
                sentence: "The caption under the photo identified the people involved in the event.", 
                sentence_trans: "照片下方的說明文字確認了參與該事件的人員。",
                synonyms: ["title", "heading", "description"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4511, word: "Captive", ipa: "/ˈkæp.tɪv/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "被俘的；被監禁的", def_en: "imprisoned or confined", 
                sentence: "The captive soldiers were eventually released after the peace treaty was signed.", 
                sentence_trans: "被俘士兵在簽署和平條約後最終獲釋。",
                synonyms: ["imprisoned", "confined"], phrases: ["captive audience"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "俘虜", def_en: "a person who has been taken prisoner", 
                sentence: "He was held as a captive for three months.", 
                sentence_trans: "他被當作俘虜關押了三個月。",
                synonyms: ["prisoner", "hostage"], phrases: []
            }]
        }] 
    },
    { 
        id: 4512, word: "Captivity", ipa: "/kæpˈtɪv.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "囚禁；圈養", def_en: "the condition of being imprisoned or confined", 
                sentence: "Animals born in captivity may lack the skills to survive in the wild.", 
                sentence_trans: "在圈養環境中出生的動物可能缺乏在野外生存的技能。",
                synonyms: ["imprisonment", "confinement"], phrases: ["bred in captivity"]
            }] 
        }] 
    },
    { 
        id: 4513, word: "Carbon", ipa: "/ˈkɑː.bən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "碳", def_en: "a chemical element", 
                sentence: "Reducing carbon emissions is crucial for mitigating climate change.", 
                sentence_trans: "減少碳排放對於緩解氣候變遷至關重要。",
                synonyms: [], phrases: ["carbon footprint", "carbon dioxide"]
            }] 
        }] 
    },
    { 
        id: 4514, word: "Cardboard", ipa: "/ˈkɑːd.bɔːd/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "硬紙板", def_en: "pasteboard or stiff paper", 
                sentence: "We packed all our books into sturdy cardboard boxes for the move.", 
                sentence_trans: "為了搬家，我們把所有的書都裝進堅固的硬紙箱裡。",
                synonyms: [], phrases: ["cardboard box"]
            }] 
        }] 
    },
    { 
        id: 4515, word: "Cardinal", ipa: "/ˈkɑː.dɪ.nəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "基本的；主要的", def_en: "of the greatest importance; fundamental", 
                sentence: "Respect for life is a cardinal principle of medical ethics.", 
                sentence_trans: "尊重生命是醫學倫理的一項基本原則。",
                synonyms: ["fundamental", "primary", "main"], phrases: ["cardinal sin", "cardinal directions"]
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "紅衣主教", def_en: "a leading dignitary of the Roman Catholic Church", 
                sentence: "The cardinals gathered in the Vatican to elect a new pope.", 
                sentence_trans: "紅衣主教們聚集在梵蒂岡選舉新教宗。",
                synonyms: [], phrases: []
            }]
        }] 
    },
    { 
        id: 4516, word: "Carefree", ipa: "/ˈkeə.friː/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "無憂無慮的", def_en: "free from anxiety or responsibility", 
                sentence: "They spent a carefree summer traveling around Europe.", 
                sentence_trans: "他們在歐洲各地旅行，度過了一個無憂無慮的夏天。",
                synonyms: ["untroubled", "easygoing"], phrases: ["carefree attitude"]
            }] 
        }] 
    },
    { 
        id: 4517, word: "Caretaker", ipa: "/ˈkeəˌteɪ.kər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "看管人；管理員", def_en: "a person employed to look after a public building or a house", 
                sentence: "The caretaker maintains the building and ensures all doors are locked at night.", 
                sentence_trans: "管理員維護大樓並確保晚上所有門都鎖好。",
                synonyms: ["janitor", "warden", "keeper"], phrases: ["caretaker government"]
            }] 
        }] 
    },
    { 
        id: 4518, word: "Carnival", ipa: "/ˈkɑː.nɪ.vəl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "嘉年華；狂歡節", def_en: "a period of public revelry at a regular time each year", 
                sentence: "The Rio Carnival attracts millions of tourists from around the world.", 
                sentence_trans: "里約嘉年華吸引了來自世界各地的數百萬遊客。",
                synonyms: ["festival", "fiesta", "celebration"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4519, word: "Carton", ipa: "/ˈkɑː.tən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "紙盒", def_en: "a light box or container, typically one made of waxed cardboard", 
                sentence: "She bought a carton of milk and some eggs from the grocery store.", 
                sentence_trans: "她從雜貨店買了一盒牛奶和一些雞蛋。",
                synonyms: ["box", "container"], phrases: ["milk carton"]
            }] 
        }] 
    },
    { 
        id: 4520, word: "Cashier", ipa: "/kæˈʃɪər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "出納員；收銀員", def_en: "a person handling payments and receipts in a store, bank, or business", 
                sentence: "The cashier scanned the items and handed the customer the receipt.", 
                sentence_trans: "收銀員掃描了商品並將收據交給顧客。",
                synonyms: ["teller", "clerk"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4521, word: "Casino", ipa: "/kəˈsiː.nəʊ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "賭場", def_en: "a public room or building where gambling games are played", 
                sentence: "The city's economy relies heavily on tourism and revenue from the casino.", 
                sentence_trans: "這座城市的經濟嚴重依賴旅遊業和賭場收入。",
                synonyms: [], phrases: []
            }] 
        }] 
    },
    { 
        id: 4522, word: "Casualty", ipa: "/ˈkæʒ.ju.əl.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "傷亡人員；受害者", def_en: "a person killed or injured in a war or accident", 
                sentence: "The earthquake resulted in heavy casualties and widespread destruction.", 
                sentence_trans: "地震造成了嚴重傷亡和廣泛破壞。",
                synonyms: ["victim", "fatality"], phrases: ["casualty ward", "heavy casualties"]
            }] 
        }] 
    },
    { 
        id: 4523, word: "Catastrophe", ipa: "/kəˈtæs.trə.fi/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "大災難", def_en: "an event causing great and often sudden damage or suffering", 
                sentence: "Environmentalists warn that global warming could lead to an ecological catastrophe.", 
                sentence_trans: "環保人士警告說，全球暖化可能導致生態大災難。",
                synonyms: ["disaster", "calamity", "tragedy"], phrases: ["natural catastrophe"]
            }] 
        }] 
    },
    { 
        id: 4524, word: "Categorize", ipa: "/ˈkæt.ə.ɡər.aɪz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "將...分類", def_en: "place in a particular class or group", 
                sentence: "The library books are categorized by genre and author.", 
                sentence_trans: "圖書館的書籍按體裁和作者分類。",
                synonyms: ["classify", "group", "sort"], phrases: ["categorize as"]
            }] 
        }] 
    },
    { 
        id: 4525, word: "Cater", ipa: "/ˈkeɪ.tər/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "迎合；提供飲食", def_en: "provide food and drink; try to satisfy a need", 
                sentence: "The hotel aims to cater to the needs of international business travelers.", 
                sentence_trans: "這家飯店旨在迎合國際商務旅客的需求。",
                synonyms: ["serve", "provide for", "accommodate"], phrases: ["cater to", "catering service"]
            }] 
        }] 
    },
    { 
        id: 4526, word: "Caterpillar", ipa: "/ˈkæt.ə.pɪl.ər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "毛毛蟲", def_en: "the larva of a butterfly or moth", 
                sentence: "The caterpillar spins a cocoon and eventually transforms into a butterfly.", 
                sentence_trans: "毛毛蟲吐絲結繭，最終變成蝴蝶。",
                synonyms: ["larva"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4527, word: "Cathedral", ipa: "/kəˈθiː.drəl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "大教堂", def_en: "the principal church of a diocese", 
                sentence: "The medieval cathedral is famous for its intricate stained glass windows.", 
                sentence_trans: "這座中世紀大教堂以其精緻的彩色玻璃窗而聞名。",
                synonyms: ["church", "basilica"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4528, word: "Caution", ipa: "/ˈkɔː.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "謹慎；小心", def_en: "care taken to avoid danger or mistakes", 
                sentence: "Drivers are advised to exercise extreme caution when driving in foggy conditions.", 
                sentence_trans: "建議駕駛在霧天行駛時格外小心。",
                synonyms: ["care", "wariness", "prudence"], phrases: ["proceed with caution"]
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "警告", def_en: "say something as a warning", 
                sentence: "The sign cautions visitors against swimming in the river due to strong currents.", 
                sentence_trans: "告示牌警告遊客不要在河裡游泳，因為水流湍急。",
                synonyms: ["warn", "alert"], phrases: []
            }]
        }] 
    },
    { 
        id: 4529, word: "Cautious", ipa: "/ˈkɔː.ʃəs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "謹慎的", def_en: "careful to avoid potential problems or dangers", 
                sentence: "Investors have become more cautious about putting money into volatile markets.", 
                sentence_trans: "投資者對於將資金投入波動市場變得更加謹慎。",
                synonyms: ["careful", "wary", "prudent"], phrases: ["cautious approach"]
            }] 
        }] 
    },
    { 
        id: 4530, word: "Cavity", ipa: "/ˈkæv.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "洞；蛀牙", def_en: "an empty space within a solid object; a decayed part of a tooth", 
                sentence: "Regular brushing helps prevent the formation of dental cavities.", 
                sentence_trans: "規律刷牙有助於防止蛀牙的形成。",
                synonyms: ["hole", "hollow"], phrases: ["chest cavity"]
            }] 
        }] 
    },
    { 
        id: 4531, word: "Celebrity", ipa: "/səˈleb.rə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "名人；名聲", def_en: "a famous person; the state of being well known", 
                sentence: "The charity event was attended by numerous celebrities from the entertainment industry.", 
                sentence_trans: "許多娛樂圈的名人出席了這場慈善活動。",
                synonyms: ["star", "personality", "fame"], phrases: ["celebrity status"]
            }] 
        }] 
    },
    { 
        id: 4532, word: "Celery", ipa: "/ˈsel.ər.i/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "芹菜", def_en: "a cultivated plant of the parsley family", 
                sentence: "Crunchy vegetables like celery are a healthy snack option.", 
                sentence_trans: "像芹菜這樣脆脆的蔬菜是健康的零食選擇。",
                synonyms: [], phrases: []
            }] 
        }] 
    },
    { 
        id: 4533, word: "Cellular", ipa: "/ˈsel.jə.lər/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "細胞的；蜂窩式的", def_en: "relating to or consisting of living cells; denoting a mobile telephone system", 
                sentence: "Cellular respiration is the process by which cells convert glucose into energy.", 
                sentence_trans: "細胞呼吸是細胞將葡萄糖轉化為能量的過程。",
                synonyms: [], phrases: ["cellular phone", "cellular structure"]
            }] 
        }] 
    },
    { 
        id: 4534, word: "Celsius", ipa: "/ˈsel.si.əs/", priority: 10, 
        meanings: [{ 
            pos: "n./adj.", items: [{ 
                def_zh: "攝氏", def_en: "of or denoting a scale of temperature", 
                sentence: "Water freezes at zero degrees Celsius.", 
                sentence_trans: "水在攝氏零度結冰。",
                synonyms: ["centigrade"], phrases: ["degrees Celsius"]
            }] 
        }] 
    },
    { 
        id: 4535, word: "Cement", ipa: "/sɪˈment/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "水泥", def_en: "a powdery substance made with calcined lime and clay", 
                sentence: "The workers mixed sand and cement to make concrete.", 
                sentence_trans: "工人們混合沙子和水泥來製作混凝土。",
                synonyms: [], phrases: []
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "鞏固；黏合", def_en: "settle or establish firmly", 
                sentence: "The agreement helped to cement the relationship between the two companies.", 
                sentence_trans: "該協議有助於鞏固兩家公司之間的關係。",
                synonyms: ["strengthen", "solidify"], phrases: ["cement a friendship"]
            }]
        }] 
    },
    { 
        id: 4536, word: "Cemetery", ipa: "/ˈsem.ə.tri/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "墓地", def_en: "a burial ground", 
                sentence: "The old cemetery is the final resting place for many of the town's founders.", 
                sentence_trans: "這座古老的墓地是該鎮許多創始人的安息之地。",
                synonyms: ["graveyard", "burial ground"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4537, word: "Census", ipa: "/ˈsen.səs/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "人口普查", def_en: "an official count or survey of a population", 
                sentence: "The government conducts a national census every ten years to gather demographic data.", 
                sentence_trans: "政府每十年進行一次全國人口普查以收集人口統計數據。",
                synonyms: ["survey", "count"], phrases: ["census data"]
            }] 
        }] 
    },
    { 
        id: 4538, word: "Ceramic", ipa: "/səˈræm.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "陶瓷的", def_en: "made of clay and hardened by heat", 
                sentence: "The museum houses a collection of ancient ceramic vases.", 
                sentence_trans: "博物館收藏了一批古代陶瓷花瓶。",
                synonyms: ["pottery", "earthenware"], phrases: ["ceramic tile"]
            }] 
        }] 
    },
    { 
        id: 4539, word: "Ceremony", ipa: "/ˈser.ɪ.mə.ni/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "儀式；典禮", def_en: "a formal religious or public occasion", 
                sentence: "The opening ceremony of the Olympic Games was spectacular.", 
                sentence_trans: "奧運會的開幕典禮非常壯觀。",
                synonyms: ["rite", "ritual", "observance"], phrases: ["wedding ceremony", "awards ceremony"]
            }] 
        }] 
    },
    { 
        id: 4540, word: "Certainty", ipa: "/ˈsɜː.tən.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "確定性；確信", def_en: "firm conviction that something is the case", 
                sentence: "There is no certainty that the economy will recover quickly.", 
                sentence_trans: "無法確定經濟會迅速復甦。",
                synonyms: ["confidence", "sureness", "assurance"], phrases: ["with certainty"]
            }] 
        }] 
    },
    { 
        id: 4541, word: "Certificate", ipa: "/səˈtɪf.ɪ.kət/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "證書；證明", def_en: "an official document attesting a certain fact", 
                sentence: "You will receive a certificate upon completion of the course.", 
                sentence_trans: "完成課程後你將收到一張證書。",
                synonyms: ["document", "credential"], phrases: ["birth certificate", "medical certificate"]
            }] 
        }] 
    },
    { 
        id: 4542, word: "Certify", ipa: "/ˈsɜː.tɪ.faɪ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "證明；證實", def_en: "attest or confirm in a formal statement", 
                sentence: "The accountant must certify that the financial statements are accurate.", 
                sentence_trans: "會計師必須證明財務報表是準確的。",
                synonyms: ["verify", "confirm", "validate"], phrases: ["certified public accountant"]
            }] 
        }] 
    },
    { 
        id: 4543, word: "Chairperson", ipa: "/ˈtʃeəˌpɜː.sən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "主席", def_en: "a person chosen to preside over a meeting", 
                sentence: "The chairperson called the meeting to order.", 
                sentence_trans: "主席宣佈會議開始。",
                synonyms: ["chair", "president"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4544, word: "Champagne", ipa: "/ʃæmˈpeɪn/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "香檳", def_en: "a white sparkling wine associated with celebration", 
                sentence: "We popped a bottle of champagne to celebrate the victory.", 
                sentence_trans: "我們開了一瓶香檳來慶祝勝利。",
                synonyms: [], phrases: []
            }] 
        }] 
    },
    { 
        id: 4545, word: "Chant", ipa: "/tʃɑːnt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "吟唱；反覆呼喊", def_en: "say or shout repeatedly in a sing-song tone", 
                sentence: "The crowd began to chant the name of the winning team.", 
                sentence_trans: "群眾開始反覆呼喊獲勝隊伍的名字。",
                synonyms: ["shout", "sing"], phrases: []
            }] 
        }, {
            pos: "n.", items: [{
                def_zh: "吟唱詞", def_en: "a repeated rhythmic phrase",
                sentence: "The monks' chant echoed through the monastery.",
                sentence_trans: "僧侶的吟唱聲在修道院中迴盪。",
                synonyms: ["incantation"], phrases: []
            }]
        }] 
    },
    { 
        id: 4546, word: "Chaos", ipa: "/ˈkeɪ.ɒs/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "混亂", def_en: "complete disorder and confusion", 
                sentence: "The sudden power outage caused chaos in the busy airport.", 
                sentence_trans: "突然停電在繁忙的機場造成了混亂。",
                synonyms: ["disorder", "confusion", "turmoil"], phrases: ["in chaos"]
            }] 
        }] 
    },
    { 
        id: 4547, word: "Chapel", ipa: "/ˈtʃæp.əl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "小禮拜堂", def_en: "a small building for Christian worship", 
                sentence: "The couple decided to get married in the small chapel on the hill.", 
                sentence_trans: "這對夫婦決定在山上的小禮拜堂結婚。",
                synonyms: ["church", "shrine"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4548, word: "Characterize", ipa: "/ˈkær.ək.tə.raɪz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "描繪...的特性；具有...特徵", def_en: "describe the distinctive nature or features of", 
                sentence: "The 1920s were characterized by economic prosperity and cultural dynamism.", 
                sentence_trans: "1920 年代的特徵是經濟繁榮和文化活力。",
                synonyms: ["distinguish", "define", "mark"], phrases: ["be characterized by"]
            }] 
        }] 
    },
    { 
        id: 4549, word: "Charitable", ipa: "/ˈtʃær.ə.tə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "慈善的；仁慈的", def_en: "relating to the assistance of those in need", 
                sentence: "He is known for his charitable donations to various hospitals.", 
                sentence_trans: "他因向各醫院的慈善捐款而聞名。",
                synonyms: ["philanthropic", "generous"], phrases: ["charitable organization"]
            }] 
        }] 
    },
    { 
        id: 4550, word: "Check-in", ipa: "/ˈtʃek.ɪn/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "辦理登機；入住", def_en: "the act of reporting one's presence", 
                sentence: "We arrived at the airport two hours early for check-in.", 
                sentence_trans: "我們提前兩小時到達機場辦理登機手續。",
                synonyms: [], phrases: ["check-in counter"]
            }] 
        }] 
    },
    { 
        id: 4551, word: "Checkout", ipa: "/ˈtʃek.aʊt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "結帳；退房", def_en: "a point at which goods are paid for; the act of leaving a hotel", 
                sentence: "The checkout line at the supermarket was very long.", 
                sentence_trans: "超市的結帳隊伍很長。",
                synonyms: [], phrases: ["late checkout"]
            }] 
        }] 
    },
    { 
        id: 4552, word: "Checkup", ipa: "/ˈtʃek.ʌp/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "健康檢查", def_en: "a thorough medical or dental examination", 
                sentence: "It is recommended to have a dental checkup every six months.", 
                sentence_trans: "建議每六個月進行一次牙科檢查。",
                synonyms: ["examination", "inspection"], phrases: ["medical checkup"]
            }] 
        }] 
    },
    { 
        id: 4553, word: "Chef", ipa: "/ʃef/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "主廚", def_en: "a professional cook", 
                sentence: "The head chef prepared a special menu for the guests.", 
                sentence_trans: "主廚為客人準備了特別菜單。",
                synonyms: ["cook"], phrases: ["executive chef"]
            }] 
        }] 
    },
    { 
        id: 4554, word: "Chemist", ipa: "/ˈkem.ɪst/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "化學家；藥劑師", def_en: "an expert in chemistry; a person authorized to dispense medicinal drugs", 
                sentence: "The chemist is analyzing the chemical composition of the substance.", 
                sentence_trans: "化學家正在分析該物質的化學成分。",
                synonyms: ["pharmacist"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4555, word: "Chestnut", ipa: "/ˈtʃes.nʌt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "栗子", def_en: "a glossy brown nut that may be roasted and eaten", 
                sentence: "Roasted chestnuts are a popular snack in winter.", 
                sentence_trans: "烤栗子是冬天受歡迎的零食。",
                synonyms: [], phrases: []
            }] 
        }] 
    },
    { 
        id: 4556, word: "Chili", ipa: "/ˈtʃɪl.i/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "辣椒", def_en: "a small hot-tasting pod of a variety of pepper", 
                sentence: "He added some chili powder to make the soup spicier.", 
                sentence_trans: "他加了一些辣椒粉讓湯更辣。",
                synonyms: [], phrases: ["chili pepper"]
            }] 
        }] 
    },
    { 
        id: 4557, word: "Chimpanzee", ipa: "/ˌtʃɪm.pænˈziː/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "黑猩猩", def_en: "a great ape with large ears, mainly black coloration, and lighter skin on the face", 
                sentence: "Chimpanzees share a significant amount of DNA with humans.", 
                sentence_trans: "黑猩猩與人類分享了大量的 DNA。",
                synonyms: ["chimp"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4558, word: "Chirp", ipa: "/tʃɜːp/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "啾啾叫", def_en: "(of a small bird or an insect) make a short, sharp, high-pitched sound", 
                sentence: "The crickets began to chirp as the sun went down.", 
                sentence_trans: "太陽下山時，蟋蟀開始啾啾叫。",
                synonyms: ["tweet", "cheep"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4559, word: "Choir", ipa: "/kwaɪər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "合唱團", def_en: "an organized group of singers", 
                sentence: "She has been singing in the church choir for ten years.", 
                sentence_trans: "她在教堂合唱團唱了十年。",
                synonyms: ["chorus"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4560, word: "Cholesterol", ipa: "/kəˈles.tər.ɒl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "膽固醇", def_en: "a compound of the sterol type found in most body tissues", 
                sentence: "High levels of cholesterol can increase the risk of heart disease.", 
                sentence_trans: "高膽固醇水平會增加心臟病的風險。",
                synonyms: [], phrases: ["high cholesterol"]
            }] 
        }] 
    },
    { 
        id: 4561, word: "Chord", ipa: "/kɔːd/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "和弦", def_en: "a group of (typically three or more) notes sounded together", 
                sentence: "The guitarist strummed a chord to start the song.", 
                sentence_trans: "吉他手撥弄了一個和弦開始這首歌。",
                synonyms: [], phrases: ["strike a chord"]
            }] 
        }] 
    },
    { 
        id: 4562, word: "Chore", ipa: "/tʃɔːr/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "雜務；家務", def_en: "a routine task, especially a household one", 
                sentence: "Doing the laundry is my least favorite household chore.", 
                sentence_trans: "洗衣服是我最不喜歡的家務。",
                synonyms: ["task", "duty"], phrases: ["household chores"]
            }] 
        }] 
    },
    { 
        id: 4563, word: "Chronic", ipa: "/ˈkrɒn.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "慢性的；長期的", def_en: "(of an illness) persisting for a long time or constantly recurring", 
                sentence: "He suffers from chronic back pain.", 
                sentence_trans: "他患有慢性背痛。",
                synonyms: ["persistent", "long-term"], phrases: ["chronic disease"]
            }] 
        }] 
    },
    { 
        id: 4564, word: "Chubby", ipa: "/ˈtʃʌb.i/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "圓胖的", def_en: "plump and rounded", 
                sentence: "The baby has cute chubby cheeks.", 
                sentence_trans: "這嬰兒有可愛的圓胖臉頰。",
                synonyms: ["plump", "tubby"], phrases: []
            }] 
        }] 
    },
    { 
        id: 4565, word: "Chunk", ipa: "/tʃʌŋk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "大塊", def_en: "a thick, solid piece of something", 
                sentence: "He cut a large chunk of cheese.", 
                sentence_trans: "他切了一大塊起司。",
                synonyms: ["lump", "block"], phrases: ["a chunk of text"]
            }] 
        }] 
    },
    { 
        id: 4566, word: "Cigar", ipa: "/sɪˈɡɑːr/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "雪茄", def_en: "a cylinder of tobacco rolled in tobacco leaves for smoking", 
                sentence: "He enjoys smoking a cigar after dinner.", 
                sentence_trans: "他喜歡飯後抽雪茄。",
                synonyms: [], phrases: []
            }] 
        }] 
    },
    { 
        id: 4567, word: "Circuit", ipa: "/ˈsɜː.kɪt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "電路；巡迴", def_en: "a roughly circular line, route, or movement; an electrical device", 
                sentence: "A short circuit caused the fire.", 
                sentence_trans: "短路引起了火災。",
                synonyms: ["loop", "track"], phrases: ["circuit board"]
            }] 
        }] 
    },
    { 
        id: 4568, word: "Cite", ipa: "/saɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "引用；舉例", def_en: "quote (a passage, book, or author) as evidence", 
                sentence: "The author cites several studies to support his argument.", 
                sentence_trans: "作者引用了幾項研究來支持他的論點。",
                synonyms: ["quote", "mention"], phrases: ["cite an example"]
            }] 
        }] 
    },
    { 
        id: 4569, word: "Citizenship", ipa: "/ˈsɪt.ɪ.zən.ʃɪp/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "公民身分", def_en: "the position or status of being a citizen", 
                sentence: "He applied for Canadian citizenship after living there for five years.", 
                sentence_trans: "在加拿大居住五年後，他申請了加拿大公民身分。",
                synonyms: [], phrases: ["dual citizenship"]
            }] 
        }] 
    },
    { 
        id: 4570, word: "Civic", ipa: "/ˈsɪv.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "公民的；城市的", def_en: "relating to a city or town; relating to the duties of people in relation to their town", 
                sentence: "Voting is a fundamental civic duty.", 
                sentence_trans: "投票是一項基本的公民義務。",
                synonyms: ["public", "municipal"], phrases: ["civic center", "civic duty"]
            }] 
        }] 
    },

    // --- (以下接續原本的 Civilize...) ---

    { 
        id: 5001, word: "Civilize", ipa: "/ˈsɪv.əl.aɪz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "使文明；教化", def_en: "bring (a place or people) to a stage of social, cultural, and moral development", 
                sentence: "Education plays a vital role in the effort to civilize society and reduce crime.", 
                sentence_trans: "教育在教化社會和減少犯罪的努力中扮演著至關重要的角色。",
                synonyms: ["enlighten", "educate", "refine"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5002, word: "Clarity", ipa: "/ˈklær.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "清晰；清楚", def_en: "the quality of being coherent and intelligible", 
                sentence: "The professor explained the complex theory with remarkable clarity.", 
                sentence_trans: "教授以驚人的清晰度解釋了這個複雜的理論。",
                synonyms: ["clearness", "lucidity", "precision"], phrases: ["clarity of thought", "for the sake of clarity"]
            }] 
        }] 
    },
    { 
        id: 5003, word: "Clinical", ipa: "/ˈklɪn.ɪ.kəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "臨床的；冷靜的", def_en: "relating to the observation and treatment of actual patients", 
                sentence: "The drug is currently undergoing clinical trials to test its efficacy and safety.", 
                sentence_trans: "該藥物目前正在進行臨床試驗，以測試其療效和安全性。",
                synonyms: ["medical"], phrases: ["clinical trial", "clinical depression"]
            }] 
        }] 
    },
    { 
        id: 5004, word: "Closure", ipa: "/ˈkləʊ.ʒər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "關閉；終結", def_en: "the act or process of closing something", 
                sentence: "The factory closure resulted in the loss of hundreds of jobs in the community.", 
                sentence_trans: "工廠關閉導致該社區數百人失業。",
                synonyms: ["shutdown", "cessation", "conclusion"], phrases: ["bring closure", "road closure"]
            }] 
        }] 
    },
    { 
        id: 5005, word: "Coalition", ipa: "/kəʊ.əˈlɪʃ.ən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "聯盟；同盟", def_en: "an alliance for combined action, especially a temporary alliance of political parties forming a government", 
                sentence: "A coalition government was formed after no single party won a majority.", 
                sentence_trans: "在沒有單一政黨贏得多數席位後，成立了聯合政府。",
                synonyms: ["alliance", "union", "partnership"], phrases: ["form a coalition"]
            }] 
        }] 
    },
    { 
        id: 5006, word: "Cognitive", ipa: "/ˈkɒɡ.nə.tɪv/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "認知的", def_en: "relating to cognition", 
                sentence: "Puzzles and brain games can help improve cognitive function in older adults.", 
                sentence_trans: "拼圖和益智遊戲有助於改善老年人的認知功能。",
                synonyms: ["mental", "intellectual"], phrases: ["cognitive development", "cognitive ability"]
            }] 
        }] 
    },
    { 
        id: 5007, word: "Coherent", ipa: "/kəʊˈhɪə.rənt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "連貫的；有條理的", def_en: "logical and consistent", 
                sentence: "The student failed to present a coherent argument in his essay.", 
                sentence_trans: "這名學生未能在論文中提出連貫的論點。",
                synonyms: ["logical", "reasoned", "rational"], phrases: ["coherent strategy"]
            }] 
        }] 
    },
    { 
        id: 5008, word: "Coincidence", ipa: "/kəʊˈɪn.sɪ.dəns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "巧合", def_en: "a remarkable concurrence of events or circumstances without apparent causal connection", 
                sentence: "It was a pure coincidence that we met in Paris on the same day.", 
                sentence_trans: "我們同一天在巴黎相遇純屬巧合。",
                synonyms: ["accident", "chance", "fluke"], phrases: ["by coincidence", "what a coincidence"]
            }] 
        }] 
    },
    { 
        id: 5009, word: "Collaboration", ipa: "/kəˌlæb.əˈreɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "合作；協作", def_en: "the action of working with someone to produce or create something", 
                sentence: "The project was a successful collaboration between the university and the private sector.", 
                sentence_trans: "該項目是大學與私營部門之間的成功合作。",
                synonyms: ["cooperation", "partnership", "teamwork"], phrases: ["in collaboration with"]
            }] 
        }] 
    },
    { 
        id: 5010, word: "Collective", ipa: "/kəˈlek.tɪv/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "集體的；共同的", def_en: "done by people acting as a group", 
                sentence: "It was a collective decision made by the entire board of directors.", 
                sentence_trans: "這是整個董事會做出的集體決定。",
                synonyms: ["joint", "shared", "common"], phrases: ["collective responsibility"]
            }] 
        }] 
    },
    { 
        id: 5011, word: "Collision", ipa: "/kəˈlɪʒ.ən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "碰撞；衝突", def_en: "an instance of one moving object or person striking violently against another", 
                sentence: "The collision between the two ships caused a massive oil spill.", 
                sentence_trans: "兩艘船的碰撞造成了大量的石油洩漏。",
                synonyms: ["crash", "impact", "accident"], phrases: ["head-on collision"]
            }] 
        }] 
    },
    { 
        id: 5012, word: "Combat", ipa: "/ˈkɒm.bæt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "打擊；戰鬥", def_en: "take action to reduce, destroy, or prevent", 
                sentence: "The government has implemented new measures to combat inflation.", 
                sentence_trans: "政府已實施新措施來打擊通貨膨脹。",
                synonyms: ["fight", "tackle", "battle"], phrases: ["combat crime", "combat disease"]
            }] 
        }] 
    },
    { 
        id: 5013, word: "Commence", ipa: "/kəˈmens/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "開始；著手", def_en: "begin; start", 
                sentence: "The construction work is scheduled to commence next month.", 
                sentence_trans: "建設工作預定於下個月開始。",
                synonyms: ["begin", "start", "initiate"], phrases: ["commence proceedings"]
            }] 
        }] 
    },
    { 
        id: 5014, word: "Commission", ipa: "/kəˈmɪʃ.ən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "委員會；佣金", def_en: "a group of people entrusted by a government or other official body with authority to do something", 
                sentence: "A special commission was set up to investigate the allegations of corruption.", 
                sentence_trans: "成立了一個特別委員會來調查腐敗指控。",
                synonyms: ["committee", "board", "council"], phrases: ["royal commission", "earn commission"]
            }] 
        }] 
    },
    { 
        id: 5015, word: "Commitment", ipa: "/kəˈmɪt.mənt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "承諾；投入", def_en: "the state or quality of being dedicated to a cause, activity, etc.", 
                sentence: "Her commitment to her work has earned her the respect of her colleagues.", 
                sentence_trans: "她對工作的投入贏得了同事的尊敬。",
                synonyms: ["dedication", "devotion", "pledge"], phrases: ["make a commitment"]
            }] 
        }] 
    },
    { 
        id: 5016, word: "Commodity", ipa: "/kəˈmɒd.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "商品；日用品", def_en: "a raw material or primary agricultural product that can be bought and sold", 
                sentence: "Crude oil is the most traded commodity in the world.", 
                sentence_trans: "原油是世界上交易量最大的商品。",
                synonyms: ["product", "goods", "merchandise"], phrases: ["commodity market"]
            }] 
        }] 
    },
    { 
        id: 5017, word: "Compatible", ipa: "/kəmˈpæt.ə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "相容的；合得來的", def_en: "able to exist or occur together without conflict", 
                sentence: "The new software is not compatible with older operating systems.", 
                sentence_trans: "新軟體與舊的操作系統不相容。",
                synonyms: ["consistent", "suited"], phrases: ["compatible with"]
            }] 
        }] 
    },
    { 
        id: 5018, word: "Compel", ipa: "/kəmˈpel/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "強迫；迫使", def_en: "force or oblige (someone) to do something", 
                sentence: "Financial difficulties compelled him to sell his house.", 
                sentence_trans: "財務困難迫使他賣掉了房子。",
                synonyms: ["force", "coerce", "oblige"], phrases: ["feel compelled to"]
            }] 
        }] 
    },
    { 
        id: 5019, word: "Compensate", ipa: "/ˈkɒm.pən.seɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "補償；賠償", def_en: "give (someone) something, typically money, in recognition of loss, suffering, or injury incurred", 
                sentence: "The company promised to compensate the workers for their injuries.", 
                sentence_trans: "公司承諾賠償工人的工傷。",
                synonyms: ["reimburse", "repay", "make up for"], phrases: ["compensate for"]
            }] 
        }] 
    },
    { 
        id: 5020, word: "Competence", ipa: "/ˈkɒm.pɪ.təns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "能力；勝任", def_en: "the ability to do something successfully or efficiently", 
                sentence: "The job requires a high level of technical competence.", 
                sentence_trans: "這份工作需要高水平的技術能力。",
                synonyms: ["capability", "ability", "proficiency"], phrases: ["professional competence"]
            }] 
        }] 
    },
    { 
        id: 5021, word: "Compile", ipa: "/kəmˈpaɪl/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "編製；匯編", def_en: "produce (something, especially a list, report, or book) by assembling information collected from other sources", 
                sentence: "We need to compile a list of all the eligible candidates.", 
                sentence_trans: "我們需要匯編一份所有符合資格候選人的名單。",
                synonyms: ["assemble", "gather", "accumulate"], phrases: ["compile data"]
            }] 
        }] 
    },
    { 
        id: 5022, word: "Complement", ipa: "/ˈkɒm.plɪ.ment/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "補充；與...相配", def_en: "add to (something) in a way that enhances or improves it", 
                sentence: "The red wine complements the steak perfectly.", 
                sentence_trans: "紅酒與牛排完美搭配。",
                synonyms: ["accompany", "enhance", "complete"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5023, word: "Complexity", ipa: "/kəmˈplek.sə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "複雜性", def_en: "the state or quality of being intricate or complicated", 
                sentence: "The complexity of the legal system can be overwhelming for ordinary citizens.", 
                sentence_trans: "法律系統的複雜性對普通公民來說可能難以招架。",
                synonyms: ["intricacy", "complication"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5024, word: "Compliance", ipa: "/kəmˈplaɪ.əns/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "遵守；服從", def_en: "the action or fact of complying with a wish or command", 
                sentence: "The factory was closed down for lack of compliance with safety regulations.", 
                sentence_trans: "該工廠因未遵守安全規定而被關閉。",
                synonyms: ["obedience", "observance", "conformity"], phrases: ["in compliance with"]
            }] 
        }] 
    },
    { 
        id: 5025, word: "Component", ipa: "/kəmˈpəʊ.nənt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "成分；零件", def_en: "a part or element of a larger whole", 
                sentence: "Trust is a vital component of any healthy relationship.", 
                sentence_trans: "信任是任何健康關係的重要組成部分。",
                synonyms: ["element", "part", "constituent"], phrases: ["key component"]
            }] 
        }] 
    },
    { 
        id: 5026, word: "Comprehend", ipa: "/ˌkɒm.prɪˈhend/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "理解；領會", def_en: "grasp mentally; understand", 
                sentence: "It is difficult to comprehend the magnitude of the disaster.", 
                sentence_trans: "很難理解這場災難的規模。",
                synonyms: ["understand", "grasp", "fathom"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5027, word: "Comprehensive", ipa: "/ˌkɒm.prɪˈhen.sɪv/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "全面的；詳盡的", def_en: "complete; including all or nearly all elements or aspects of something", 
                sentence: "The report provides a comprehensive analysis of the current economic situation.", 
                sentence_trans: "該報告對當前的經濟形勢進行了全面的分析。",
                synonyms: ["complete", "thorough", "exhaustive"], phrases: ["comprehensive study"]
            }] 
        }] 
    },
    { 
        id: 5028, word: "Comprise", ipa: "/kəmˈpraɪz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "包含；由...組成", def_en: "consist of; be made up of", 
                sentence: "The committee comprises representatives from various industries.", 
                sentence_trans: "該委員會由來自各行各業的代表組成。",
                synonyms: ["consist of", "contain", "include"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5029, word: "Compromise", ipa: "/ˈkɒm.prə.maɪz/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "妥協；讓步", def_en: "an agreement reached by each side making concessions", 
                sentence: "After hours of negotiation, they finally reached a compromise.", 
                sentence_trans: "經過數小時的談判，他們終於達成了妥協。",
                synonyms: ["agreement", "settlement"], phrases: ["reach a compromise"]
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "妥協；危害", def_en: "settle a dispute by mutual concession; weaken or harm",
                sentence: "We should never compromise our principles for short-term gain.",
                sentence_trans: "我們絕不應為了短期利益而犧牲我們的原則。",
                synonyms: ["concede", "undermine"], phrases: ["compromise safety"]
            }]
        }] 
    },
    { 
        id: 5030, word: "Compulsory", ipa: "/kəmˈpʌl.sər.i/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "強制的；義務的", def_en: "required by law or a rule; obligatory", 
                sentence: "English is a compulsory subject in many schools around the world.", 
                sentence_trans: "英語是世界上許多學校的必修科目。",
                synonyms: ["mandatory", "obligatory", "required"], phrases: ["compulsory education"]
            }] 
        }] 
    },
    { 
        id: 5031, word: "Conceal", ipa: "/kənˈsiːl/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "隱藏；隱瞞", def_en: "keep from sight; hide", 
                sentence: "He tried to conceal his disappointment with a fake smile.", 
                sentence_trans: "他試圖用假笑來掩飾他的失望。",
                synonyms: ["hide", "cover up", "disguise"], phrases: ["conceal the truth"]
            }] 
        }] 
    },
    { 
        id: 5032, word: "Concede", ipa: "/kənˈsiːd/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "承認；讓步", def_en: "admit that something is true or valid after first denying or resisting it", 
                sentence: "The candidate refused to concede defeat until all votes were counted.", 
                sentence_trans: "候選人拒絕承認失敗，直到所有選票都清點完畢。",
                synonyms: ["admit", "acknowledge", "yield"], phrases: ["concede defeat"]
            }] 
        }] 
    },
    { 
        id: 5033, word: "Conceive", ipa: "/kənˈsiːv/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "構想；懷孕", def_en: "form or devise (a plan or idea) in the mind", 
                sentence: "It is difficult to conceive of a world without the internet.", 
                sentence_trans: "很難想像一個沒有網際網路的世界。",
                synonyms: ["imagine", "envision", "devise"], phrases: ["conceive an idea"]
            }] 
        }] 
    },
    { 
        id: 5034, word: "Concise", ipa: "/kənˈsaɪs/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "簡潔的", def_en: "giving a lot of information clearly and in a few words", 
                sentence: "Please provide a concise summary of the report.", 
                sentence_trans: "請提供一份報告的簡潔摘要。",
                synonyms: ["brief", "succinct", "terse"], phrases: ["clear and concise"]
            }] 
        }] 
    },
    { 
        id: 5035, word: "Condemn", ipa: "/kənˈdem/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "譴責；判刑", def_en: "express complete disapproval of, typically in public", 
                sentence: "The United Nations condemned the act of violence against civilians.", 
                sentence_trans: "聯合國譴責了針對平民的暴力行為。",
                synonyms: ["censure", "criticize", "denounce"], phrases: ["condemn to death"]
            }] 
        }] 
    },
    { 
        id: 5036, word: "Conduct", ipa: "/ˈkɒn.dʌkt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "行為；舉止", def_en: "the manner in which a person behaves", 
                sentence: "The code of conduct sets out the expected behavior for all employees.", 
                sentence_trans: "行為準則列出了所有員工應有的行為。",
                synonyms: ["behavior", "demeanor"], phrases: ["code of conduct"]
            }] 
        }, {
            pos: "v.", items: [{
                def_zh: "實施；引導", def_en: "organize and carry out", 
                sentence: "Researchers conducted a survey to gather public opinion.", 
                sentence_trans: "研究人員進行了一項調查以收集公眾意見。",
                synonyms: ["perform", "manage", "direct"], phrases: ["conduct research"]
            }]
        }] 
    },
    { 
        id: 5037, word: "Confidential", ipa: "/ˌkɒn.fɪˈden.ʃəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "機密的", def_en: "intended to be kept secret", 
                sentence: "Medical records are strictly confidential and cannot be disclosed without consent.", 
                sentence_trans: "醫療記錄是嚴格保密的，未經同意不得披露。",
                synonyms: ["secret", "private", "classified"], phrases: ["confidential information"]
            }] 
        }] 
    },
    { 
        id: 5038, word: "Confine", ipa: "/kənˈfaɪn/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "限制；監禁", def_en: "keep or restrict someone or something within certain limits of (space, scope, quantity, or time)", 
                sentence: "Please confine your comments to the topic under discussion.", 
                sentence_trans: "請將您的評論限制在正在討論的主題上。",
                synonyms: ["restrict", "limit", "enclose"], phrases: ["confine to"]
            }] 
        }] 
    },
    { 
        id: 5039, word: "Conform", ipa: "/kənˈfɔːm/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "遵守；符合", def_en: "comply with rules, standards, or laws", 
                sentence: "All products must conform to the new safety standards.", 
                sentence_trans: "所有產品都必須符合新的安全標準。",
                synonyms: ["comply", "adhere", "obey"], phrases: ["conform to"]
            }] 
        }] 
    },
    { 
        id: 5040, word: "Confront", ipa: "/kənˈfrʌnt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "面對；對抗", def_en: "meet (someone) face to face with hostile or argumentative intent", 
                sentence: "We must confront the reality of climate change before it is too late.", 
                sentence_trans: "我們必須在為時已晚之前面對氣候變遷的現實。",
                synonyms: ["face", "challenge", "encounter"], phrases: ["confront a problem"]
            }] 
        }] 
    },
    { 
        id: 5041, word: "Consensus", ipa: "/kənˈsen.səs/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "共識", def_en: "general agreement", 
                sentence: "The committee finally reached a consensus on the budget allocation.", 
                sentence_trans: "委員會終於就預算分配達成了共識。",
                synonyms: ["agreement", "harmony", "unity"], phrases: ["reach a consensus"]
            }] 
        }] 
    },
    { 
        id: 5042, word: "Consent", ipa: "/kənˈsent/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "同意；許可", def_en: "permission for something to happen or agreement to do something", 
                sentence: "You cannot take the car without the owner's consent.", 
                sentence_trans: "未經車主同意，你不能開走這輛車。",
                synonyms: ["permission", "agreement", "assent"], phrases: ["written consent"]
            }] 
        }] 
    },
    { 
        id: 5043, word: "Conservation", ipa: "/ˌkɒn.səˈveɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "保育；節約", def_en: "preservation, protection, or restoration of the natural environment", 
                sentence: "Wildlife conservation is essential to prevent the extinction of endangered species.", 
                sentence_trans: "野生動物保育對於防止瀕危物種滅絕至關重要。",
                synonyms: ["preservation", "protection"], phrases: ["energy conservation"]
            }] 
        }] 
    },
    { 
        id: 5044, word: "Conserve", ipa: "/kənˈsɜːv/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "節省；保護", def_en: "protect (something, especially an environmentally or culturally important place or thing) from harm or destruction", 
                sentence: "We must do our best to conserve water during the drought.", 
                sentence_trans: "在乾旱期間，我們必須盡最大努力節約用水。",
                synonyms: ["preserve", "save", "protect"], phrases: ["conserve energy"]
            }] 
        }] 
    },
    { 
        id: 5045, word: "Considerate", ipa: "/kənˈsɪd.ər.ət/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "體貼的；周到的", def_en: "careful not to cause inconvenience or hurt to others", 
                sentence: "It was very considerate of you to bring me flowers when I was sick.", 
                sentence_trans: "在我生病時你帶花來看我，真是太體貼了。",
                synonyms: ["thoughtful", "kind", "attentive"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5046, word: "Conspiracy", ipa: "/kənˈspɪr.ə.si/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "陰謀", def_en: "a secret plan by a group to do something unlawful or harmful", 
                sentence: "The group was accused of a conspiracy to overthrow the government.", 
                sentence_trans: "該團體被指控密謀推翻政府。",
                synonyms: ["plot", "scheme", "intrigue"], phrases: ["conspiracy theory"]
            }] 
        }] 
    },
    { 
        id: 5047, word: "Corridor", ipa: "/ˈkɒr.ɪ.dɔːr/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "走廊；通道", def_en: "a long passage in a building from which doors lead into rooms", 
                sentence: "The office is located at the end of the corridor.", 
                sentence_trans: "辦公室位於走廊的盡頭。",
                synonyms: ["hallway", "passage"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5048, word: "Corrupt", ipa: "/kəˈrʌpt/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "腐敗的；貪污的", def_en: "having or showing a willingness to act dishonestly in return for money or personal gain", 
                sentence: "The new administration promised to root out corrupt officials.", 
                sentence_trans: "新政府承諾根除腐敗官員。",
                synonyms: ["dishonest", "unethical"], phrases: ["corrupt practices"]
            }] 
        }] 
    },
    { 
        id: 5049, word: "Counsel", ipa: "/ˈkaʊn.səl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "建議；法律顧問", def_en: "advice, especially that given formally", 
                sentence: "He sought the counsel of his lawyer before answering the questions.", 
                sentence_trans: "他在回答問題前徵詢了律師的建議。",
                synonyms: ["advice", "guidance"], phrases: ["seek counsel"]
            }] 
        }] 
    },
    { 
        id: 5050, word: "Counterpart", ipa: "/ˈkaʊn.tə.pɑːt/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "對應的人或物", def_en: "a person or thing holding a position or performing a function that corresponds to that of another person or thing in another place", 
                sentence: "The minister met with his counterpart from Germany.", 
                sentence_trans: "部長會見了德國的對等官員。",
                synonyms: ["equivalent", "peer"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5051, word: "Coverage", ipa: "/ˈkʌv.ər.ɪdʒ/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "報導；覆蓋範圍", def_en: "the treatment of an issue by the media", 
                sentence: "The event received extensive media coverage.", 
                sentence_trans: "該事件獲得了廣泛的媒體報導。",
                synonyms: ["reporting", "analysis"], phrases: ["insurance coverage", "media coverage"]
            }] 
        }] 
    },
    { 
        id: 5052, word: "Credibility", ipa: "/ˌkred.əˈbɪl.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "可信度", def_en: "the quality of being trusted and believed in", 
                sentence: "The scandal undermined the government's credibility.", 
                sentence_trans: "醜聞損害了政府的公信力。",
                synonyms: ["trustworthiness", "reliability"], phrases: ["lose credibility"]
            }] 
        }] 
    },
    { 
        id: 5053, word: "Credible", ipa: "/ˈkred.ə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "可信的", def_en: "able to be believed", 
                sentence: "We need a credible alternative to fossil fuels.", 
                sentence_trans: "我們需要一個可信的化石燃料替代方案。",
                synonyms: ["believable", "plausible"], phrases: ["credible evidence"]
            }] 
        }] 
    },
    { 
        id: 5054, word: "Criterion", ipa: "/kraɪˈtɪə.ri.ən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "標準", def_en: "a principle or standard by which something may be judged or decided", 
                sentence: "Academic achievement is a key criterion for selection.", 
                sentence_trans: "學術成就是選拔的關鍵標準。",
                synonyms: ["standard", "measure"], phrases: ["selection criterion"]
            }] 
        }] 
    },
    { 
        id: 5055, word: "Crucial", ipa: "/ˈkruː.ʃəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "關鍵的", def_en: "decisive or critical, especially in the success or failure of something", 
                sentence: "Timing is crucial in this experiment.", 
                sentence_trans: "時間掌握在這個實驗中至關重要。",
                synonyms: ["pivotal", "critical", "essential"], phrases: ["play a crucial role"]
            }] 
        }] 
    },
    { 
        id: 5056, word: "Customary", ipa: "/ˈkʌs.tə.mər.i/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "慣常的；習俗的", def_en: "according to the customs or usual practices associated with a particular society, place, or set of circumstances", 
                sentence: "It is customary to tip the waiter in this country.", 
                sentence_trans: "在這個國家給服務員小費是慣例。",
                synonyms: ["traditional", "usual", "conventional"], phrases: []
            }] 
        }] 
    },
    { 
        id: 5057, word: "Customs", ipa: "/ˈkʌs.təmz/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "海關；關稅", def_en: "the official department that administers and collects the duties levied by a government on imported goods", 
                sentence: "We had to go through customs at the airport.", 
                sentence_trans: "我們必須在機場通過海關。",
                synonyms: [], phrases: ["customs officer", "clear customs"]
            }] 
        }] 
    },
    { 
        id: 5058, word: "Cynical", ipa: "/ˈsɪn.ɪ.kəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "憤世嫉俗的；懷疑的", def_en: "believing that people are motivated by self-interest; distrustful of human sincerity or integrity", 
                sentence: "He has a cynical view of politics and politicians.", 
                sentence_trans: "他對政治和政治家抱有憤世嫉俗的看法。",
                synonyms: ["skeptical", "doubtful", "distrustful"], phrases: ["cynical attitude"]
            }] 
        }] 
    }
    
];