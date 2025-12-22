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
];