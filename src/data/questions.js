const questions = [
    {
      index: 1,
      text: "遇到突發狀況時你會？",
      bg: "stress.png",
      options: [
        { label: "冷靜分析再處理", type: "rational" },
        { label: "開始緊張，胡思亂想", type: "anxious" },
        { label: "找人聊聊或請教", type: "sweet" },
        { label: "不喜歡被干擾，自行解決", type: "rebel" },
      ],
    },
    {
      index: 2,
      text: "你處理壓力的方式是？",
      bg: "sleep.png",
      options: [
        { label: "和朋友抱怨抒發情緒", type: "sweet" },
        { label: "想很多把自己繞進去", type: "anxious" },
        { label: "試圖釐清壓力來源", type: "rational" },
        { label: "大哭一場或是睡一覺就沒事", type: "rebel" },
      ],
    },
    {
      index: 3,
      text: "如果有人突然取消約定，你的內心第一反應是？",
      bg: "diet.png",
      options: [
        { label: "OK重新排好接下來的行程", type: "rational" },
        { label: "不管他，去做自己的事", type: "rebel" },
        { label: "傳簡訊關心對方最近如何", type: "sweet" },
        { label: "我是不是做錯什麼？", type: "anxious" },
      ],
    },
    {
      index: 4,
      text: "對你來說健康是什麼？",
      bg: "health.png",
      options: [
        { label: "視覺上看起來體態正常", type: "rebel" },
        { label: "工作和生活平衡", type: "sweet" },
        { label: "飲食和作息規律", type: "rational" },
        { label: "少處在高壓環境", type: "anxious" },
      ],
    },
    {
      index: 5,
      text: "運動對你的意義是？",
      bg: "sport.png",
      options: [
        { label: "常常想運動但沒有行動", type: "anxious" },
        { label: "規律的自我管理", type: "rational" },
        { label: "自我挑戰", type: "rebel" },
        { label: "和朋友一起的快樂時光", type: "sweet" },
      ],
    },
  ];
  
  export default questions;
  