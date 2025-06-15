'use client';
import { useState } from 'react';
import StartPage from '../components/StartPage';
import QuestionPage from '../components/QuestionPage';
import ResultPage from '../components/ResultPage';
import questions from '../data/questions';

export default function Home() {
  const [state, setState] = useState(0); // 0: 開始頁，1: 題目中，2: 結果頁
  const [current, setCurrent] = useState(0); // 題目 index
  const [scores, setScores] = useState({
    rational: 0,
    sweet: 0,
    anxious: 0,
    rebel: 0,
  });

  const handleSelect = (type) => {
    setScores((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setState(2); // 到結果頁
    }
  };

  const handleRestart = () => {
    setState(0);
    setCurrent(0);
    setScores({
      rational: 0,
      sweet: 0,
      anxious: 0,
      rebel: 0,
    });
  };

  // 決定結果：得分最高的菌格
  const getResultType = () => {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-[#FFF4D8]">
      <div className="w-[425px] max-w-full">
        {state === 0 && <StartPage onStart={() => setState(1)} />}

        {state === 1 && (
          <QuestionPage
            question={questions[current]}
            options={questions[current].options}
            onSelect={handleSelect}
            onPrev={() => {
              if (current > 0) {
                setCurrent(current - 1);
              } else {
                setState(0); // 回首頁
              }
            }}
          />
        )}

        {state === 2 && (
          <ResultPage type={getResultType()} onRestart={handleRestart} />
        )}
      </div>
    </main>
  );
}
