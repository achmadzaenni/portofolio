"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const contrigithub = () => {
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="lg:flex items-center justify-center p-6">
      <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-3 shadow-xl">
      <GitHubCalendar
        username="achmadzaenni"
        year={year}
        blockSize={16}
        blockMargin={4}
        fontSize={14}
        />
        </div>
    </div>
  );
};

export default contrigithub;