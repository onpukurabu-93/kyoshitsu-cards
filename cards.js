/* =========================================================
   教室カードの いちらん
   カードを ふやすときは、このファイルだけ 書きかえます。
   （画像は このファイルと 同じ場所に card_◯◯_front.png / card_◯◯_back.png）

   ぜんぶ「yomi（よみがな）」の 50音順で、あいうえおの 索引に 並びます。

   ■ シリーズもの（巻がある）… vol（巻）を書く。同じ title が 1つにまとまる
     { id: "burnham_piano1", title: "バーナム ピアノ教本", yomi: "ばーなむ ぴあのきょうほん", vol: "1" },
     巻が「導入書」のように数字でないときは、order: に 並べたい順の数字を書く

   ■ 巻のないもの（単独の冊子・発表会・認定テストなど）… vol を書かない
     { id: "happyokai", title: "発表会 参加", yomi: "はっぴょうかい さんか" },

   ・id … 画像の名前（英数字と _ だけ）。card_【id】_front.png になる
   ・yomi … ひらがなの よみ。50音順の 並びと「さがす」に使う
   ・行のおわりの「,」を わすれずに
   ========================================================= */

/* 画像を入れかえたら、この数字（日づけ）を かえる。古い画像が のこるのを ふせぐ */
var IMG_VER = "20261118b";

var CARDS = [
  /* バーナム ピアノ教本 */
  { id: "burnham_piano1", title: "バーナム ピアノ教本", yomi: "ばーなむ ぴあのきょうほん", vol: "1" },
  { id: "burnham_piano2", title: "バーナム ピアノ教本", yomi: "ばーなむ ぴあのきょうほん", vol: "2" },
  { id: "burnham_piano3", title: "バーナム ピアノ教本", yomi: "ばーなむ ぴあのきょうほん", vol: "3" },
  { id: "burnham_piano4", title: "バーナム ピアノ教本", yomi: "ばーなむ ぴあのきょうほん", vol: "4" },
  { id: "burnham_piano5", title: "バーナム ピアノ教本", yomi: "ばーなむ ぴあのきょうほん", vol: "5" },
  { id: "burnham_piano6", title: "バーナム ピアノ教本", yomi: "ばーなむ ぴあのきょうほん", vol: "6" },

  /* バーナム ドリル */
  { id: "burnham_drill1", title: "バーナム ドリル", yomi: "ばーなむ どりる", vol: "1" },
  { id: "burnham_drill2", title: "バーナム ドリル", yomi: "ばーなむ どりる", vol: "2" },
  { id: "burnham_drill3", title: "バーナム ドリル", yomi: "ばーなむ どりる", vol: "3" },

  /* バーナム ピアノテクニック（ミニブック → 導入書 → 1〜4巻 → 全調の練習） */
  { id: "burnham_tech_mini",  title: "バーナム ピアノテクニック", yomi: "ばーなむ ぴあのてくにっく", vol: "ミニブック", order: -2 },
  { id: "burnham_tech_intro", title: "バーナム ピアノテクニック", yomi: "ばーなむ ぴあのてくにっく", vol: "導入書",     order: -1 },
  { id: "burnham_tech1",      title: "バーナム ピアノテクニック", yomi: "ばーなむ ぴあのてくにっく", vol: "1" },
  { id: "burnham_tech2",      title: "バーナム ピアノテクニック", yomi: "ばーなむ ぴあのてくにっく", vol: "2" },
  { id: "burnham_tech3",      title: "バーナム ピアノテクニック", yomi: "ばーなむ ぴあのてくにっく", vol: "3" },
  { id: "burnham_tech4",      title: "バーナム ピアノテクニック", yomi: "ばーなむ ぴあのてくにっく", vol: "4" },
  { id: "burnham_tech_allkeys", title: "バーナム ピアノテクニック", yomi: "ばーなむ ぴあのてくにっく", vol: "全調の練習", order: 5 },

  /* バイエル・チェルニー */
  { id: "beyer_czerny1", title: "バイエル・チェルニー", yomi: "ばいえる ちぇるにー", vol: "1" },
  { id: "beyer_czerny2", title: "バイエル・チェルニー", yomi: "ばいえる ちぇるにー", vol: "2" },

  /* ソルフェージュドリル（幼児版 → 導入編1 → 導入編2） */
  { id: "solfege_youji",  title: "ソルフェージュドリル", yomi: "そるふぇーじゅどりる", vol: "幼児版",   order: 0 },
  { id: "solfege_intro1", title: "ソルフェージュドリル", yomi: "そるふぇーじゅどりる", vol: "導入編 1", order: 1 },
  { id: "solfege_intro2", title: "ソルフェージュドリル", yomi: "そるふぇーじゅどりる", vol: "導入編 2", order: 2 },

  /* 巻のないもの */
  { id: "tanki_beyer", title: "短期修了バイエル教本", yomi: "たんきしゅうりょう ばいえるきょうほん" },
];
