
import React from 'react';

interface PromptCardProps {
  prompt: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 shadow-lg w-full">
      <p className="text-xl sm:text-2xl font-medium text-slate-100 italic">
        "{prompt}"
      </p>
    </div>
  );
};

export default PromptCard;
