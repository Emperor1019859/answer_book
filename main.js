function geneateAnswer() {
  let userQuestion = document.getElementById("userQuestion").value;
  let answers = [
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
    "別人會對你苦笑",
    "學著與人相處",
    "學著自處",
    "放下",
    "不要忘記自己的夢想",
    "不要忘記自己的目標",
    "停下來思考再繼續",
    "信任自己的直覺",
    "用心感覺",
    "好好珍惜每一刻",
    "知識是通往成功的鑰匙",
    "珍惜當下",
    "知足常樂",
    "每一天都是新的開始",
    "擁抱未知",
    "學會寬容自己",
    "讚美自己的進步",
    "擔憂是正常的",
    "壓力是成長的機會",
    "保持靈活",
    "靜心冥想",
    "尊重自己",
    "承擔",
    "保持耐心",
    "記得笑",
    "接納不完美",
    "享受其中",
    "給自己一些時間",
    "不要害怕開口求助",
    "學會感激",
    "向他道歉",
    "幸福就在身邊",
    "未來值得期待",
    "要知道何時放手",
    "接納自己的情緒",
    "愛最大",
    "不要低估自己",
    "保持冷靜",
    "等待驚喜",
    "不變應萬變",
    "對方也一樣",
    "活在當下",
    "不要忘記自己的價值",
    "用心思考",
    "這就是相愛",
    "尊重他人",
    "不進則退",
    "失敗也是禮物",
    "嘗試溝通",
    "你多久沒有笑了呢",
    "哭吧",
    "沒關係的",
    "給自己時間",
    "成長需要時間",
    "謙卑",
    "不要後悔",
    "大膽去做",
    "看看你的身邊",
    "潛力無限",
    "努力不會白費",
    "成功就在不遠處",
    "審慎考慮人際關係",
    "過去已經過去",
    "謹言慎行",
    "注意小人",
    "要知道何時說不",
    "不要拖延",
    "保護自己",
  ];

  if (userQuestion.trim() !== "") {
    let randomIndex = Math.floor(Math.random() * answers.length);
    let answer = answers[randomIndex];
    document.getElementById("answer").innerHTML = `
      <p>我聽見了，我想告訴你的是：</p>
      <p class="quote"><strong>${answer}</strong></p>
    `;
  } else {
    alert("請輸入您的問題，否則真理之書無法幫助您噢！");
  }
}