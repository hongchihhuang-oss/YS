// =================================================================================
// 📚 雅思單字資料庫 - J, K, L 整合版 (High Quality J/K/L List)
// =================================================================================
// 範圍：J (Jeopardize) ~ L (Lucrative)
// 特色：包含多重詞性 (N/V/ADJ)、雅思學術例句、同義詞、片語

window.VOCAB_LIBRARY = window.VOCAB_LIBRARY || [];
window.VOCAB_LIBRARY = window.VOCAB_LIBRARY.concat([
    // =========================================================================
    // 🇯 J Words
    // =========================================================================
    { 
        id: "j001", word: "Jeopardize", ipa: "/ˈdʒep.ə.daɪz/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "危及；損害", def_en: "put (someone or something) into a situation in which there is a danger of loss, harm, or failure", 
                sentence: "The proposed budget cuts could seriously jeopardize the future of the scientific research project.", 
                sentence_trans: "擬議的預算削減可能會嚴重危及科學研究專案的未來。", 
                synonyms: ["threaten", "endanger", "risk"], phrases: ["jeopardize safety"] 
            }] 
        }] 
    },
    { 
        id: "j002", word: "Journal", ipa: "/ˈdʒɜː.nəl/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "學術期刊；日誌", def_en: "a newspaper or magazine that deals with a particular subject or professional activity", 
                sentence: "The results of the study were published in a prestigious medical journal.", 
                sentence_trans: "研究結果發表在一本著名的醫學期刊上。", 
                synonyms: ["periodical", "publication"], phrases: ["keep a journal"] 
            }] 
        }] 
    },
    { 
        id: "j003", word: "Judicial", ipa: "/dʒuːˈdɪʃ.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "司法的；審判的", def_en: "of, by, or appropriate to a court or judge", 
                sentence: "The independence of the judicial system is a cornerstone of a democratic society.", 
                sentence_trans: "司法系統的獨立性是民主社會的基石。", 
                synonyms: ["legal", "judiciary"], phrases: ["judicial review"] 
            }] 
        }] 
    },
    { 
        id: "j004", word: "Junction", ipa: "/ˈdʒʌŋk.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "交叉路口；連接處", def_en: "a point where two or more things are joined", 
                sentence: "The accident occurred at a busy junction where three major highways converge.", 
                sentence_trans: "事故發生在三條主要高速公路匯合的繁忙交叉路口。", 
                synonyms: ["intersection", "confluence"], phrases: ["railway junction"] 
            }] 
        }] 
    },
    { 
        id: "j005", word: "Jurisdiction", ipa: "/ˌdʒʊə.rɪsˈdɪk.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "管轄權；司法權", def_en: "the official power to make legal decisions and judgments", 
                sentence: "The court claimed it did not have jurisdiction over the case because the crime was committed abroad.", 
                sentence_trans: "法院聲稱對此案沒有管轄權，因為犯罪發生在國外。", 
                synonyms: ["authority", "control", "power"], phrases: ["under the jurisdiction of"] 
            }] 
        }] 
    },
    { 
        id: "j006", word: "Justification", ipa: "/ˌdʒʌs.tɪ.fɪˈkeɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "正當理由；辯護", def_en: "the action of showing something to be right or reasonable", 
                sentence: "There is no moral justification for acts of violence against innocent civilians.", 
                sentence_trans: "對無辜平民的暴力行為沒有任何道德上的正當理由。", 
                synonyms: ["rationale", "defense", "explanation"], phrases: ["without justification"] 
            }] 
        }] 
    },
    { 
        id: "j007", word: "Justify", ipa: "/ˈdʒʌs.tɪ.faɪ/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "證明...是正當的", def_en: "show or prove to be right or reasonable", 
                sentence: "The CEO struggled to justify the massive layoffs amidst record profits.", 
                sentence_trans: "在創紀錄的利潤下，執行長難以證明大規模裁員是正當的。", 
                synonyms: ["defend", "validate", "warrant"], phrases: ["justify the means"] 
            }] 
        }] 
    },
    { 
        id: "j008", word: "Juvenile", ipa: "/ˈdʒuː.vən.aɪl/", priority: 10, 
        meanings: [
            { pos: "adj.", items: [{ def_zh: "青少年的", def_en: "relating to young people", sentence: "Juvenile delinquency is often linked to a lack of educational opportunities.", sentence_trans: "青少年犯罪通常與缺乏教育機會有關。", synonyms: ["young", "adolescent"], phrases: ["juvenile crime"] }] },
            { pos: "n.", items: [{ def_zh: "青少年", def_en: "a young person", sentence: "The court has a special section for dealing with juveniles.", sentence_trans: "法院有一個專門處理青少年的部門。", synonyms: ["minor", "youth"], phrases: [] }] }
        ] 
    },

    // =========================================================================
    // 🇰 K Words
    // =========================================================================
    { 
        id: "k001", word: "Keen", ipa: "/kiːn/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "熱衷的；敏銳的", def_en: "having or showing eagerness or enthusiasm; sharp", 
                sentence: "She is a keen observer of human behavior and incorporates these insights into her writing.", 
                sentence_trans: "她是人類行為的敏銳觀察者，並將這些見解融入她的寫作中。", 
                synonyms: ["eager", "sharp", "astute"], phrases: ["keen on", "keen interest"] 
            }] 
        }] 
    },
    { 
        id: "k002", word: "Kinetic", ipa: "/kɪˈnet.ɪk/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "運動的；動力的", def_en: "relating to or resulting from motion", 
                sentence: "Kinetic energy is the energy that an object possesses due to its motion.", 
                sentence_trans: "動能是物體因運動而擁有的能量。", 
                synonyms: ["active", "dynamic"], phrases: ["kinetic energy"] 
            }] 
        }] 
    },
    { 
        id: "k003", word: "Knack", ipa: "/næk/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "訣竅；本領", def_en: "an acquired or natural skill at performing a task", 
                sentence: "He has a knack for explaining complex scientific concepts in simple terms.", 
                sentence_trans: "他有將複雜的科學概念用簡單術語解釋的本領。", 
                synonyms: ["talent", "gift", "flair"], phrases: ["have a knack for"] 
            }] 
        }] 
    },
    { 
        id: "k004", word: "Knowledgeable", ipa: "/ˈnɒl.ɪ.dʒə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "博學的；有見識的", def_en: "intelligent and well informed", 
                sentence: "The guide was extremely knowledgeable about the history of the ancient ruins.", 
                sentence_trans: "導遊對這些古代遺跡的歷史非常博學。", 
                synonyms: ["well-informed", "learned"], phrases: ["knowledgeable about"] 
            }] 
        }] 
    },

    // =========================================================================
    // 🇱 L Words
    // =========================================================================
    { 
        id: "l001", word: "Label", ipa: "/ˈleɪ.bəl/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "標籤", def_en: "a small piece of paper, fabric, plastic, or similar material attached to an object", sentence: "Consumers should read the nutrition label carefully before purchasing processed food.", sentence_trans: "消費者在購買加工食品前應仔細閱讀營養標籤。", synonyms: ["tag", "sticker"], phrases: ["food label"] }] },
            { pos: "v.", items: [{ def_zh: "貼標籤；歸類", def_en: "assign to a category, especially inaccurately or restrictively", sentence: "The media labeled the protesters as anarchists, which many felt was unfair.", sentence_trans: "媒體將抗議者貼上無政府主義者的標籤，許多人覺得這是不公平的。", synonyms: ["categorize", "classify"], phrases: ["label as"] }] }
        ] 
    },
    { 
        id: "l002", word: "Landscape", ipa: "/ˈlænd.skeɪp/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "風景；局勢", def_en: "all the visible features of an area of countryside or land", 
                sentence: "The political landscape has changed dramatically since the last election.", 
                sentence_trans: "自上次選舉以來，政治局勢發生了戲劇性的變化。", 
                synonyms: ["scenery", "terrain", "environment"], phrases: ["urban landscape"] 
            }] 
        }] 
    },
    { 
        id: "l003", word: "Launch", ipa: "/lɔːntʃ/", priority: 10, 
        meanings: [
            { pos: "v.", items: [{ def_zh: "發起；發射", def_en: "start or set in motion", sentence: "The government launched a campaign to reduce plastic waste.", sentence_trans: "政府發起了一項減少塑膠廢物的運動。", synonyms: ["initiate", "start", "commence"], phrases: ["launch a product"] }] },
            { pos: "n.", items: [{ def_zh: "發佈會；發射", def_en: "an act of launching something", sentence: "The product launch was attended by industry leaders and journalists.", sentence_trans: "產品發佈會由行業領袖和記者參加。", synonyms: ["introduction"], phrases: [] }] }
        ] 
    },
    { 
        id: "l004", word: "Legacy", ipa: "/ˈleɡ.ə.si/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "遺產；留給後人的東西", def_en: "an amount of money or property left to someone in a will", 
                sentence: "The former president's legacy includes significant reforms in the healthcare system.", 
                sentence_trans: "前總統的遺產包括醫療體系的重大改革。", 
                synonyms: ["inheritance", "heritage"], phrases: ["leave a legacy"] 
            }] 
        }] 
    },
    { 
        id: "l005", word: "Legislate", ipa: "/ˈledʒ.ɪ.sleɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "立法", def_en: "make or enact laws", 
                sentence: "It is difficult to legislate against hate speech without infringing on freedom of expression.", 
                sentence_trans: "要在不侵犯言論自由的情況下立法禁止仇恨言論是很困難的。", 
                synonyms: ["enact laws", "rule"], phrases: ["legislate for"] 
            }] 
        }] 
    },
    { 
        id: "l006", word: "Legislation", ipa: "/ˌledʒ.ɪˈsleɪ.ʃən/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "法律；法規", def_en: "laws, considered collectively", 
                sentence: "New legislation was introduced to protect consumer rights in the digital age.", 
                sentence_trans: "推出了新的法規以保護數位時代的消費者權益。", 
                synonyms: ["laws", "statutes"], phrases: ["pass legislation"] 
            }] 
        }] 
    },
    { 
        id: "l007", word: "Legitimate", ipa: "/ləˈdʒɪt.ə.mət/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "合法的；正當的", def_en: "conforming to the law or to rules", 
                sentence: "The committee raised legitimate concerns about the safety of the proposed nuclear plant.", 
                sentence_trans: "委員會對擬建核電站的安全性提出了正當的擔憂。", 
                synonyms: ["legal", "valid", "lawful"], phrases: ["legitimate reason"] 
            }] 
        }] 
    },
    { 
        id: "l008", word: "Leisure", ipa: "/ˈleʒ.ər/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "閒暇；休閒", def_en: "use of free time for enjoyment", 
                sentence: "The growth of the leisure industry reflects the increasing disposable income of the middle class.", 
                sentence_trans: "休閒產業的增長反映了中產階級可支配收入的增加。", 
                synonyms: ["free time", "recreation"], phrases: ["leisure activities", "at your leisure"] 
            }] 
        }] 
    },
    { 
        id: "l009", word: "Liability", ipa: "/ˌlaɪ.əˈbɪl.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "責任；債務", def_en: "the state of being responsible for something, especially by law", 
                sentence: "The company admitted liability for the oil spill and agreed to pay for the cleanup.", 
                sentence_trans: "該公司承認對石油洩漏負有責任，並同意支付清理費用。", 
                synonyms: ["accountability", "responsibility", "debt"], phrases: ["legal liability"] 
            }] 
        }] 
    },
    { 
        id: "l010", word: "Liable", ipa: "/ˈlaɪ.ə.bəl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "負有責任的；易於...", def_en: "responsible by law; likely to do or be something", 
                sentence: "Parents can be held liable for their children's actions in certain circumstances.", 
                sentence_trans: "在某些情況下，父母可能需為子女的行為負責。", 
                synonyms: ["responsible", "accountable", "prone"], phrases: ["liable to", "liable for"] 
            }] 
        }] 
    },
    { 
        id: "l011", word: "Liberal", ipa: "/ˈlɪb.ər.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "開放的；自由主義的", def_en: "open to new behavior or opinions and willing to discard traditional values", 
                sentence: "She has a liberal attitude towards education, encouraging students to question authority.", 
                sentence_trans: "她對教育持開放態度，鼓勵學生質疑權威。", 
                synonyms: ["progressive", "open-minded"], phrases: ["liberal arts"] 
            }] 
        }] 
    },
    { 
        id: "l012", word: "Liberate", ipa: "/ˈlɪb.ər.eɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "解放；釋放", def_en: "set (someone) free from a situation, especially imprisonment or slavery", 
                sentence: "Education has the power to liberate people from poverty and ignorance.", 
                sentence_trans: "教育有力量將人們從貧困和無知中解放出來。", 
                synonyms: ["free", "release", "emancipate"], phrases: ["liberate from"] 
            }] 
        }] 
    },
    { 
        id: "l013", word: "Liberty", ipa: "/ˈlɪb.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "自由", def_en: "the state of being free within society", 
                sentence: "The constitution guarantees the life, liberty, and pursuit of happiness of all citizens.", 
                sentence_trans: "憲法保障所有公民的生命、自由和追求幸福的權利。", 
                synonyms: ["freedom", "independence"], phrases: ["civil liberties"] 
            }] 
        }] 
    },
    { 
        id: "l014", word: "License", ipa: "/ˈlaɪ.səns/", priority: 10, 
        meanings: [
            { pos: "n.", items: [{ def_zh: "執照；許可證", def_en: "a permit from an authority", sentence: "You must have a valid driving license to operate a vehicle.", sentence_trans: "你必須擁有有效的駕駛執照才能駕駛車輛。", synonyms: ["permit", "certificate"], phrases: ["driver's license"] }] },
            { pos: "v.", items: [{ def_zh: "許可；授權", def_en: "grant a license to", sentence: "The software is licensed for use on a single computer.", sentence_trans: "該軟體被授權僅在單一台電腦上使用。", synonyms: ["authorize", "permit"], phrases: [] }] }
        ] 
    },
    { 
        id: "l015", word: "Likelihood", ipa: "/ˈlaɪ.kli.hʊd/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "可能性", def_en: "the state or fact of something's being likely; probability", 
                sentence: "There is a strong likelihood that interest rates will rise next month.", 
                sentence_trans: "下個月利率很有可能會上升。", 
                synonyms: ["probability", "chance", "prospect"], phrases: ["in all likelihood"] 
            }] 
        }] 
    },
    { 
        id: "l016", word: "Linger", ipa: "/ˈlɪŋ.ɡər/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "逗留；徘徊", def_en: "stay in a place longer than necessary", 
                sentence: "The smell of the delicious food lingered in the kitchen long after dinner.", 
                sentence_trans: "晚餐後很久，美味食物的香氣仍然在廚房裡徘徊。", 
                synonyms: ["stay", "remain", "loiter"], phrases: ["linger on"] 
            }] 
        }] 
    },
    { 
        id: "l017", word: "Literacy", ipa: "/ˈlɪt.ər.ə.si/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "讀寫能力；識字率", def_en: "the ability to read and write", 
                sentence: "Improving adult literacy is a key factor in economic development.", 
                sentence_trans: "提高成人識字率是經濟發展的關鍵因素。", 
                synonyms: [], phrases: ["computer literacy", "literacy rate"] 
            }] 
        }] 
    },
    { 
        id: "l018", word: "Literally", ipa: "/ˈlɪt.ər.əl.i/", priority: 10, 
        meanings: [{ 
            pos: "adv.", items: [{ 
                def_zh: "照字面地；確實地", def_en: "in a literal manner or sense; exactly", 
                sentence: "When I said I was starving, I didn't mean it literally.", 
                sentence_trans: "當我說我快餓死時，我不是指字面上的意思。", 
                synonyms: ["exactly", "precisely"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "l019", word: "Literary", ipa: "/ˈlɪt.ər.ər.i/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "文學的", def_en: "concerning the writing, study, or content of literature", 
                sentence: "The festival attracts famous literary figures from around the world.", 
                sentence_trans: "該節日吸引了來自世界各地的著名文學人物。", 
                synonyms: ["artistic", "poetic"], phrases: ["literary criticism"] 
            }] 
        }] 
    },
    { 
        id: "l020", word: "Locate", ipa: "/ləʊˈkeɪt/", priority: 10, 
        meanings: [{ 
            pos: "v.", items: [{ 
                def_zh: "定位；設置", def_en: "discover the exact place or position of", 
                sentence: "Rescue teams used GPS technology to locate the missing hikers.", 
                sentence_trans: "救援隊使用 GPS 技術來定位失蹤的登山客。", 
                synonyms: ["find", "detect", "situate"], phrases: ["be located in"] 
            }] 
        }] 
    },
    { 
        id: "l021", word: "Logistics", ipa: "/ləˈdʒɪs.tɪks/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "物流；後勤", def_en: "the detailed coordination of a complex operation", 
                sentence: "The logistics of organizing such a large event require careful planning.", 
                sentence_trans: "組織如此大型活動的後勤工作需要仔細規劃。", 
                synonyms: ["organization", "planning"], phrases: ["supply chain logistics"] 
            }] 
        }] 
    },
    { 
        id: "l022", word: "Longevity", ipa: "/lɒnˈdʒev.ə.ti/", priority: 10, 
        meanings: [{ 
            pos: "n.", items: [{ 
                def_zh: "長壽；壽命", def_en: "long life", 
                sentence: "A healthy diet and regular exercise contribute to longevity.", 
                sentence_trans: "健康的飲食和規律的運動有助於長壽。", 
                synonyms: ["durability", "endurance"], phrases: [] 
            }] 
        }] 
    },
    { 
        id: "l023", word: "Loyal", ipa: "/ˈlɔɪ.əl/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "忠誠的", def_en: "giving or showing firm and constant support or allegiance", 
                sentence: "Dogs are known for being loyal companions to humans.", 
                sentence_trans: "狗以作為人類忠誠的伴侶而聞名。", 
                synonyms: ["faithful", "devoted"], phrases: ["loyal customer"] 
            }] 
        }] 
    },
    { 
        id: "l024", word: "Lucrative", ipa: "/ˈluː.krə.tɪv/", priority: 10, 
        meanings: [{ 
            pos: "adj.", items: [{ 
                def_zh: "利潤豐厚的；賺錢的", def_en: "producing a great deal of profit", 
                sentence: "He decided to leave his academic career for a lucrative job in the tech industry.", 
                sentence_trans: "他決定離開學術生涯，去科技業從事一份利潤豐厚的工作。", 
                synonyms: ["profitable", "rewarding", "fruitful"], phrases: ["lucrative contract"] 
            }] 
        }] 
    }
]);