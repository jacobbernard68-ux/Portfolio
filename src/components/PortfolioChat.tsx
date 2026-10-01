'use client';

import CloseIcon from '@/components/Portfolio/CloseIcon';

import { FormEvent, useEffect, useRef, useState } from 'react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hi — ask me about Jacob’s work, experience, or availability.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, loading]);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = input.trim();
    if (!content || loading) return;

    const nextMessages = [...messages, { role: 'user' as const, content }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/portfolio-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages.slice(-10) }),
      });
      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };
      if (!response.ok) throw new Error(data.error || 'Chat is unavailable.');
      setMessages((current) => [
        ...current,
        { role: 'assistant', content: data.message || 'How can I help?' },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            error instanceof Error
              ? error.message
              : 'Chat is temporarily unavailable.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative'>
      {open && (
        <section
          aria-label='AI portfolio assistant'
          className='fixed right-[max(0.75rem,env(safe-area-inset-right))] bottom-[calc(var(--site-footer-height)+0.75rem)] z-[10020] flex max-h-[min(32rem,calc(100svh-var(--site-footer-height)-1.5rem))] w-[min(23rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-[#405671]/15 bg-[#f7f9fc] shadow-[0_20px_65px_rgba(15,23,42,0.28)]'
        >
          <header className='flex items-center justify-between bg-[#1f2937] px-4 py-3 text-[#b8cadc]'>
            <div>
              <p className='text-sm font-semibold'>Ask about Jacob</p>
              <p className='text-[10px] text-[#b8cadc]/75'>
                AI portfolio assistant
              </p>
            </div>
            <button
              type='button'
              onClick={() => setOpen(false)}
              aria-label='Close AI chat'
              className='grid size-11 shrink-0 place-items-center rounded-full hover:bg-white/10'
            >
              <CloseIcon />
            </button>
          </header>
          <div
            ref={scrollRef}
            aria-live='polite'
            className='min-h-0 flex-1 space-y-2 overflow-y-auto p-3 text-sm'
          >
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={`max-w-[88%] rounded-xl px-3 py-2 leading-5 ${message.role === 'user' ? 'ml-auto bg-[#405671] text-white' : 'bg-[#e2e8f2] text-[#1f2937]'}`}
              >
                {message.content}
              </p>
            ))}
            {loading && (
              <p className='w-fit rounded-xl bg-[#e2e8f2] px-3 py-2 text-[#607795]'>
                Thinking…
              </p>
            )}
          </div>
          <form
            onSubmit={submit}
            className='flex gap-2 border-t border-[#405671]/10 p-3'
          >
            <label htmlFor='portfolio-chat-input' className='sr-only'>
              Ask the portfolio assistant
            </label>
            <input
              ref={inputRef}
              id='portfolio-chat-input'
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={500}
              placeholder='Ask a question…'
              className='min-w-0 flex-1 rounded-lg border border-[#405671]/20 bg-white px-3 py-2 text-sm text-[#111] outline-none focus:ring-2 focus:ring-[#607795]/35'
            />
            <button
              type='submit'
              disabled={loading || !input.trim()}
              className='rounded-lg bg-[#1f2937] px-3 py-2 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45'
            >
              Send
            </button>
          </form>
        </section>
      )}
      <button
        type='button'
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? 'Close AI chat' : 'Open AI chat'}
        className='grid size-9 place-items-center rounded-full bg-[#1f2937] text-[#b8cadc] shadow-md transition hover:bg-[#34445c] focus-visible:ring-2 focus-visible:ring-[#607795] focus-visible:ring-offset-2 focus-visible:outline-none'
      >
        <svg
          viewBox='0 0 24 24'
          fill='none'
          className='size-4'
          aria-hidden='true'
        >
          <path
            d='M5 5.75h14v9.5H9l-4 3v-12.5Z'
            stroke='currentColor'
            strokeWidth='1.8'
            strokeLinejoin='round'
          />
          <path
            d='M9 10.5h.01M12 10.5h.01M15 10.5h.01'
            stroke='currentColor'
            strokeWidth='2.2'
            strokeLinecap='round'
          />
        </svg>
      </button>
    </div>
  );
}
