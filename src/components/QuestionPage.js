// src/components/QuestionPage.js

const questions = [
    {
      index: 1,
      text: "遇到突發狀況時你會？",
      bg: "stress.png",
      options: [
        { label: "冷靜分析再處理", type: "rational" },
        { label: "開始胡思亂想", type: "anxious" },
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
          { label: "想很多把自己繞進去", type: "ranxious" },
          { label: "試圖釐清壓力來源", type: "rational" },
          { label: "大哭一場或是睡一覺就沒事", type: "rebel" },
        ],
      },
    {
      index: 3,
      text: "如果有人突然取消約定，你的內心第一反應是？",
      bg: "sleep.png",
      options: [
        { label: "OK，重新排好接下來的行程", type: "rational" },
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
        { label: "固定、規律的自我管理", type: "rational" },
        { label: "自我挑戰、喜歡嘗試新的運動", type: "rebel" },
        { label: "和朋友一起的快樂時光", type: "sweet" },
      ],
    },
  ];
  
  export default function QuestionPage({ question, options, onSelect, onPrev }) {
    return (
      <div
        className="w-full min-h-screen flex justify-center items-center bg-cover bg-center font-[--font-noto-tc] px-4"
        style={{ backgroundImage: `url('/images/${question.bg}')` }}
      >
        <div className="w-full max-w-[350px] h-[85vh] bg-[rgba(255,244,235,0.85)] rounded-2xl p-12 shadow-lg flex flex-col justify-between text-center">
          {/* 題號與題目文字靠上 */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500 mb-3">第 {question.index} 題</h2>
            <p className="text-base sm:text-lg text-gray-800 font-medium">{question.text}</p>
          </div>
  
          {/* 中間區塊：選項按鈕 */}
          <div className="flex flex-col gap-4 mt-6">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => onSelect(opt.type)}
                className="bg-[#FFE9D2] hover:bg-[#ffd4a8] text-orange-800 font-semibold px-4 py-3 rounded-full transition shadow w-full text-base sm:text-lg"
              >
                {opt.label}
              </button>
            ))}
          </div>
  
          {/* 下方按鈕靠底部 */}
          <button
            onClick={onPrev}
            className="mt-8 px-5 py-2 bg-white text-gray-600 border border-gray-300 rounded-full shadow hover:bg-gray-100 transition text-sm sm:text-base self-center"
          >
            上一頁
          </button>
        </div>
      </div>
    );
  }
  