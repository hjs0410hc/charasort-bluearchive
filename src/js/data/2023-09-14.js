dataSetVersion = "2023-09-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "학원으로 필터링",
    key: "school",
    tooltip: "특정 학원의 학생만 나오게 설정하려면 클릭하세요.",
    checked: false,
    sub: [
      { name: "아비도스 고등학교", key: "Abydos" },
      { name: "게헨나 학원", key: "Gehenna" },
      { name: "밀레니엄 사이언스 스쿨", key: "Millenium" },
      { name: "트리니티 종합학원", key: "Trinity" },
      { name: "백귀야행 연합학원", key: "Hyakkiyako" },
      { name: "산해경 고급중학교", key: "Shanhaijing" },
      { name: "붉은겨울 연방학원", key: "RedWinter" },
      { name: "발키리 경찰학교", key: "Valkyrie" },
      { name: "아리우스 분교", key: "Arius" },
      { name: "SRT 특수학원", key: "SRT" },
      { name: "기타", key: "Other" },
    ]
  },
  /* {
    name: "동아리로 필터링",
    key: "club",
    tooltip: "특정 동아리의 학생만 나오게 설정하려면 클릭하세요.",
    checked: false,
    sub: [
      { name: "아비도스 대책위원회", key: "AbydosTF" },
      { name: "Cleaning & Clearing", key: "CNC" },
      { name: "FOX 소대", key: "FOX" },
      { name: "RABBIT 소대", key: "RAB" },
      { name: "게임개발부", key: "GDD" },
      { name: "미식연구회", key: "Gourmet" },
      { name: "방과후 디저트부", key: "ASS" },
      { name: "보충수업부", key: "MWC" },
      { name: "게헨나 선도부", key: "Prefect" },
      { name: "엔지니어부", key: "ENG" },
      { name: "아리우스 스쿼드", key: "Squad" },
      { name: "정의실현부",key:"Justice"},
      { name: "총학생회",key:"GSC"},
      { name: "티파티",key:"TeaParty"},
      { name: "흥신소 68",key:"Benriya"},
      { name: "급양부", key: "Lunch"},
      { name: "온천개발부", key: "HotSpring"},
      { name: "귀가부", key: "Kitaku"},
      { name: "만마전", key: "PS"},
      { name: "베리타스", key: "Veritas"},
      { name: "세미나", key: "Seminar"},
      { name: "초현상특무부", key: "SPTF"},
      { name: "트리니티 자경단", key: "Vigilante"},
      { name: "도서부", key: "Library"},
      { name: "구호기사단", key: "Remedy"},
      { name: "시스터후드", key: "Sisterhood"},
      { name: "음양부", key: "YinYang"},
      { name: "마츠리운영관리부", key: "Matsuri"},
      { name: "수행부", key: "Training"},
      { name: "인법연구부", key: "Ninjutsu"},
      { name: "백화요란", key: "Hyakkayouran"},
      { name: "칠수인", key: "SP"},
      { name: "현룡문", key: "Genryoumon"},
      { name: "매화원", key: "Kindergarten"},
      { name: "현무상회", key: "Genbu Express"},
      { name: "급양부", key: "Lunch"},
      { name: "급양부", key: "Lunch"}
    ]
  }, */
  {
    name: "미실장 학생 제외",
    key: "NPC",
    tooltip: "미실장 학생을 제외합니다. (일본 서버 기준)",
    checked: false
  },
  /*
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  },
  */
  {
    name: "학생들의 중복 제거",
    key: "dupes",
    tooltip: "슌-슌(어린이)와 같은 경우를 제거합니다."
  }
  
];

dataSet[dataSetVersion].characterData = [
  //Abydos
  {
    name: "오쿠소라 아야네",
    img: "ayane.jpg",
    opts: {
      school: ["Abydos"],
      //club: ["AbydosTF"]
    }
  },
  {
    name: "타카나시 호시노",
    img: "hoshino.jpg",
    opts: {
      school: ["Abydos"],
      //club: ["AbydosTF"]
    }
  },
  {
    name: "이자요이 노노미",
    img: "nonomi.jpg",
    opts: {
      school: ["Abydos"],
      //club: ["AbydosTF"]
    }
  },
  {
    name: "쿠로미 세리카",
    img: "serika.jpg",
    opts: {
      school: ["Abydos"],
      //club: ["AbydosTF"]
    }
  },
  {
    name: "스나오오카미 시로코",
    img: "shiroko.jpg",
    opts: {
      school: ["Abydos"],
      //club: ["AbydosTF"]
    }
  },
  //Arius
  {
    name: "하카리 아츠코",
    img: "atsuko.jpg",
    opts: {
      school: ["Arius"],
      //club: ["Squad"]
    }
  },
  {
    name: "츠치나가 히요리",
    img: "hiyori.jpg",
    opts: {
      school: ["Arius"],
      //club: ["Squad"]
    }
  },
  {
    name: "이마시노 미사키",
    img: "misaki.jpg",
    opts: {
      school: ["Arius"],
      //club: ["Squad"]
    }
  },
  {
    name: "조마에 사오리",
    img: "saori.jpg",
    opts: {
      school: ["Arius"],
      //club: ["Squad"]
    }
  },
  //npc

  //Gehenna
  {
    name: "와니부치 아카리",
    img: "akari.jpg",
    opts: {
      school: ["Gehenna"],
      //club: ["Gourmet"]
    }
  },
  {
    name: "아마우 아코",
    img: "ako.jpg",
    opts: {
      school: ["Gehenna"],
      //club: ["Prefect"]
    }
  },
  {
    name: "리쿠하치마 아루",
    img: "aru.jpg",
    opts: {
      school: ["Gehenna"],
      //club: ["Benriya"]
    }
  },
  {
    name: "히노미야 치나츠",
    img: "chinatsu.jpg",
    opts: {
      school: ["Gehenna"],
      //club: ["Prefect"]
    }
  },
  {
    name: "아이키요 후우카",
    img: "fuuka.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "이구사 하루카",
    img: "haruka.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "쿠로다테 하루나",
    img: "haruna.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "소라사키 히나",
    img: "hina.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "시로미 이오리",
    img: "iori.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "나츠메 이로하",
    img: "iroha.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "시시도우 이즈미",
    img: "izumi.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "아카시 준코",
    img: "junko.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "우시마키 주리",
    img: "juri.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "오니카타 카요코",
    img: "kayoko.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "아사기 무츠키",
    img: "mutsuki.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "시모쿠라 메구",
    img: "megu.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  {
    name: "히무로 세나",
    img: "sena.jpg",
    opts: {
      school: ["Gehenna"]
    }
  },
  //--npc
  {
    name: "이부키",
    img: "ibuki.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "하누마 마코토",
    img: "makoto.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "사츠키",
    img: "satsuki.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "하타미 에리카",
    img: "erika.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "카스미",
    img: "kasumi.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },
  {
    name: "키라라",
    img: "kirara.jpg",
    opts: {
      school: ["Gehenna"],
    NPC: true
    }
  },

  //Hyakkiyako
  {
    name: "와라쿠 치세",
    img: "chise.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "쿠다 이즈나",
    img: "izuna.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "쿠와카미 카호",
    img: "kaho.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "이사미 카에데",
    img: "kaede.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "치도리 미치루",
    img: "michiru.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "미즈하 미모리",
    img: "mimori.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "아사히나 피나",
    img: "pina.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "카와와 시즈코",
    img: "shizuko.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "카스가 츠바키",
    img: "tsubaki.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "오노 츠쿠요",
    img: "tsukuyo.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
  {
    name: "코사카 와카모",
    img: "wakamo.jpg",
    opts: {
      school: ["Hyakkiyako"]
    }
  },
   //--npc
  {
    name: "아마치 니야",
    img: "niya.jpg",
    opts: {
      school: ["Hyakkiyako"],
    NPC: true
    }
  },
  {
    name: "고료 나구사",
    img: "nagusa.jpg",
    opts: {
      school: ["Hyakkiyako"],
    NPC: true
    }
  },
  {
    name: "쿠즈노하",
    img: "kuzunoha.jpg",
    opts: {
      school: ["Hyakkiyako"],
    NPC: true
    }
  },
  {
    name: "우미카",
    img: "umika.jpg",
    opts: {
      school: ["Hyakkiyako"],
    NPC: true
    }
  },

  //Millenium
  {
    name: "무로카사 아카네",
    img: "akane.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "텐도 아리스",
    img: "aris.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "이치노세 아스나",
    img: "asuna.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "카가미 치히로",
    img: "chihiro.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "이즈미모토 에이미",
    img: "eimi.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "오마기리 하레",
    img: "hare.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "네코즈카 히비키",
    img: "hibiki.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "아케보시 히마리",
    img: "himari.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "카쿠다테 카린",
    img: "karin.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "오토세 코타마",
    img: "kotama.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
	name: "토요미 코토리",
    img: "kotori.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "쿠로사키 코유키",
    img: "koyuki.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "코누리 마키",
    img: "maki.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "사이바 미도리",
    img: "midori.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "사이바 모모이",
    img: "momoi.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "미카모 네루",
    img: "neru.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "우시오 노아",
    img: "noa.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "오토하나 스미레",
    img: "sumire.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "아스마 토키",
    img: "toki.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "시라이시 우타하",
    img: "utaha.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "하야세 유우카",
    img: "yuuka.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  {
    name: "하나오카 유즈",
    img: "yuzu.jpg",
    opts: {
      school: ["Millenium"]
    }
  },
  //--npc
  {
    name: "츠카츠키 리오",
    img: "rio.jpg",
    opts: {
      school: ["Millenium"],
    NPC: true
    }
  },

  //RedWinter
  {
    name: "렌카와 체리노",
    img: "cherino.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "이케쿠라 마리나",
    img: "marina.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "야스모리 미노리",
    img: "minori.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "아마미 노도카",
    img: "nodoka.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "마요이 시구레",
    img: "shigure.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "사시로 토모에",
    img: "tomoe.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "히메키 메루",
    img: "meru.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  {
    name: "아키이즈미 모미지",
    img: "momiji.jpg",
    opts: {
      school: ["RedWinter"]
    }
  },
  //--npc
  {
    name: "미요시 타카네",
    img: "takane.jpg",
    opts: {
      school: ["RedWinter"],
    NPC: true
    }
  },
  {
    name: "아라마키 야쿠모",
    img: "yakumo.jpg",
    opts: {
      school: ["RedWinter"],
    NPC: true
    }
  },

  //Shanhaijing
  {
    name: "스노하라 코코나",
    img: "kokona.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  {
    name: "야쿠시 사야",
    img: "saya.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  {
    name: "스노하라 슌",
    img: "shun.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  {
    name: "스노하라 슌(어린이)",
    img: "shun_kid.jpg",
    opts: {
      school: ["Shanhaijing"],
      dupes: true
    }
  },
  {
    name: "코노에 미나",
    img: "mina.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  {
    name: "아케시로 루미",
    img: "rumi.jpg",
    opts: {
      school: ["Shanhaijing"]
    }
  },
  //--npc
  {
    name: "류우게 키사키",
    img: "kisaki.jpg",
    opts: {
      school: ["Shanhaijing"],
    NPC: true
    }
  },
  {
    name: "카야마 레이죠",
    img: "reijo.jpg",
    opts: {
      school: ["Shanhaijing"],
    NPC: true
    }
  },

  //SRT
  {
    name: "츠키유키 미야코",
    img: "miyako.jpg",
    opts: {
      school: ["SRT"]
    }
  },
  {
    name: "카스미자와 미유",
    img: "miyu.jpg",
    opts: {
      school: ["SRT"]
    }
  },
  {
    name: "소라이 사키",
    img: "saki.jpg",
    opts: {
      school: ["SRT"]
    }
  },
  //--npc
  {
    name: "카제쿠라 모에",
    img: "moe.jpg",
    opts: {
      school: ["SRT"]
    }
  },
  {
    name: "시치도 유키노",
    img: "yukino.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },
  {
    name: "니코",
    img: "niko.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },
  {
    name: "쿠루미",
    img: "kurumi.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },
  {
    name: "오토기",
    img: "otogi.jpg",
    opts: {
      school: ["SRT"],
    NPC: true
    }
  },

  //Trinity
  {
    name: "쿠리무라 아이리",
    img: "airi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "시라스 아즈사",
    img: "azusa.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "아사가오 하나에",
    img: "hanae.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "우라와 하나코",
    img: "hanako.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "하네카와 하스미",
    img: "hasumi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "아지타니 히후미",
    img: "hifumi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "와카바 히나타",
    img: "hinata.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "쿄야마 카즈사",
    img: "kazusa.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "시모에 코하루",
    img: "koharu.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "이오치 마리",
    img: "mari.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "시즈야마 마시로",
    img: "mashiro.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "미소노 미카",
    img: "mika.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "아오모리 미네",
    img: "mine.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "키리후지 나기사",
    img: "nagisa.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "유토리 나츠",
    img: "natsu.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "우타즈미 사쿠라코",
    img: "sakurako.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "스미 세리나",
    img: "serina.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "엔도 시미코",
    img: "shimiko.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "모리즈키 스즈미",
    img: "suzumi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "켄자키 츠루기",
    img: "tsurugi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "코제키 우이",
    img: "ui.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "이바라기 요시미",
    img: "yoshimi.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  {
    name: "우자와 레이사",
    img: "reisa.jpg",
    opts: {
      school: ["Trinity"]
    }
  },
  //--npc
  {
    name: "이치카",
    img: "ichika.jpg",
    opts: {
      school: ["Trinity"],
    NPC: true
    }
  },
  {
    name: "유리조노 세이아",
    img: "seia.jpg",
    opts: {
      school: ["Trinity"],
    NPC: true
    }
  },

  //Valkyrie
  {
    name: "네무가키 후부키",
    img: "fubuki.jpg",
    opts: {
      school: ["Valkyrie"]
    }
  },
  {
    name: "오가타 칸나",
    img: "kanna.jpg",
    opts: {
      school: ["Valkyrie"]
    }
  },
  {
    name: "나카츠카사 키리노",
    img: "kirino.jpg",
    opts: {
      school: ["Valkyrie"]
    }
  },
  //--npc

  //Other
  {
    name: "하츠네 미쿠",
    img: "miku.jpg",
    opts: {
      school: ["Other"]
    }
  },
  //--npc
  {
    name: "총학생회장",
    img: "gsc_president.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "키요스미 아키라",
    img: "akira.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "오키 아오이",
    img: "aoi.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "아로나",
    img: "arona.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "이와비츠 아유무",
    img: "ayumu.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "카제마키 마이",
    img: "mai.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "신타니 카이",
    img: "kai.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "시라누이 카야",
    img: "kaya.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "유라키 모모카",
    img: "momoka.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "프라나",
    img: "plana.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "코마카제 라브",
    img: "rabu.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "나나가미 린",
    img: "rin.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "시로코 테러",
    img: "shiroko_terror.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "카와루 시논",
    img: "shinon.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "소라",
    img: "sora.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "하이네",
    img: "haine.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  },
  {
    name: "스모모",
    img: "sumomo.jpg",
    opts: {
      school: ["Other"],
    NPC: true
    }
  }
];
	
