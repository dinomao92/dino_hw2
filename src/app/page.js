'use client';

import { useState, useEffect } from 'react';
import StartPage from '../components/StartPage';       // ✅ 開始頁
import QuestionPage from '../components/QuestionPage'; // ✅ 題目頁
import ResultPage from '../components/ResultPage';     // ✅ 結果頁
import LoadingScreen from '../components/LoadingScreen'; // ✅ loading
import questions from '../data/questions';


export default function Home() {
  const [state, setState] = useState(0); // 0: 開始頁，1: 題目中，2: loading，3: 結果頁
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({
    rational: 0,
    sweet: 0,
    anxious: 0,
    rebel: 0,
  });

  useEffect(() => {
    if (state === 2) {
      const timer = setTimeout(() => setState(3), 2000); // 2秒後進入結果頁
      return () => clearTimeout(timer); // 清除計時器避免 memory leak
    }
  }, [state]);

  const handleSelect = (type) => {
    setScores((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setState(2); // ✅ 先跳到 loading 狀態
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
                setState(0);
              }
            }}
          />
        )}
        {state === 2 && <LoadingScreen />}
        {state === 3 && <ResultPage type={getResultType()} onRestart={handleRestart} />}
      </div>
    </main>
  );
}
