
export default function ResultPage({ type, onRestart }) {
    const imageMap = {
      rational: "lisinpage.png",
      sweet: "sweetpage.png",
      anxious: "stresspage.png",
      rebel: "pannipage.png",
    };
  
    const imageName = imageMap[type];
    
  
    return (
      <div className="fixed inset-0 bg-[#FFF4D8] flex justify-center items-center">
        {/* 圖片貼齊上下邊並響應縮放 */}
        <div className="relative w-full h-full max-w-[500px] mx-auto">
          <img
            src={`/images/${imageName}`}
            alt="測驗結果圖片"
            className="w-full h-full object-contain"
          />
  
          {/* 左下角重新測驗按鈕 */}
          <button
            onClick={onRestart}
            className="absolute bottom-8 left-8 w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer bg-white"
          >
            <img
              src="/images/again.png"
              alt="重新測驗"
              className="w-full h-full object-contain"
            />
          </button>
  
          {/* 右下角下載按鈕 */}
          <a
            href={`/images/${imageName}`}
            download
            className="absolute bottom-8 right-8 w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer bg-white"
          >
            <img
              src="/images/download.png"
              alt="下載圖片"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
      </div>
    );
  }
  