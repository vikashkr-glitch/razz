
import React, { useState, useCallback } from 'react';
import { generateCreativePrompt } from './services/geminiService';
import Button from './components/Button';
import LoadingSpinner from './components/LoadingSpinner';
import PromptCard from './components/PromptCard';
import GithubIcon from './components/GithubIcon';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePrompt = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setPrompt('');
    try {
      const newPrompt = await generateCreativePrompt();
      setPrompt(newPrompt);
    } catch (err) {
      setError('Failed to generate a prompt. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-2xl text-center">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Creative Prompt Generator
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300">
            Unleash your imagination with a spark of AI-powered inspiration.
          </p>
        </header>

        <main className="mb-8 min-h-[150px] flex items-center justify-center">
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <p className="text-red-400 bg-red-900/30 px-4 py-2 rounded-md">{error}</p>
          ) : prompt ? (
            <PromptCard prompt={prompt} />
          ) : (
             <p className="text-slate-400">Click the button to get your first prompt!</p>
          )}
        </main>

        <footer>
          <Button onClick={handleGeneratePrompt} disabled={isLoading}>
            {isLoading ? 'Generating...' : 'Get New Prompt'}
          </Button>
        </footer>
      </div>
      <a
        href="https://github.com/google/genai-js"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 text-slate-500 hover:text-white transition-colors"
        aria-label="View on GitHub"
      >
        <GithubIcon />
      </a>
    </div>
  );
};

export default App;
