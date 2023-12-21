function geneateAnswer() {
  var userQuestion = document.getElementById("userQuestion").value;
  var answers = [
    "勇往直前",
    "歡天喜地",
    "樂在其中",
    "不要怕",
    "傾聽自己內心的聲音",
    "堅持下去",
    "相信自己的選擇",
    "不要輕易放棄",
    "重逢",
    "不要忘記自己的初心",
    "多多考慮別人",
    "別人會對你皺眉",
    "學著與人相處",
    "學著自處",
    "放下",
    "不要忘記自己的夢想",
    "不要忘記自己的目標",
    "停下來思考再繼續",

  ];

  if (userQuestion.trim() !== "") {
    var randomIndex = Math.floor(Math.random() * answers.length);
    var answer = answers[randomIndex];
    document.getElementById("answer").innerHTML = `
        <p>我聽見了，我想告訴你的是：</p>
        <p><strong>${answer}</strong></p>
    `;
  } else {
    alert("請輸入您的問題，否則答案之書無法幫助您噢！");
  }
}