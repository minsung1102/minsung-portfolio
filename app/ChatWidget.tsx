"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const GREETING: Message = {
  role: "assistant",
  content: "안녕하세요! 곽민성의 포트폴리오 안내 봇입니다. 프로젝트, 기술 스택, 작업 방식 등 궁금한 점을 물어보세요.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user", content: text } as Message];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      const replyText: string = res.ok
        ? data.reply
        : data.error ?? "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
      setMessages((cur) => [...cur, { role: "assistant", content: replyText }]);
    } catch {
      setMessages((cur) => [
        ...cur,
        { role: "assistant", content: "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "챗봇 닫기" : "챗봇 열기"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl">
          <div className="flex items-center gap-2 border-b border-line bg-panel px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-signal" />
            <p className="font-display text-sm font-bold">포트폴리오 안내 봇</p>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-accent text-white"
                      : "border border-line bg-ink text-text"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-line bg-ink px-3.5 py-2 text-sm text-text-muted">
                  입력 중…
                </div>
              </div>
            )}
          </div>

          <div className="flex items-end gap-2 border-t border-line p-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="질문을 입력하세요"
              rows={1}
              className="flex-1 resize-none rounded-xl border border-line bg-ink px-3 py-2 text-sm text-text outline-none focus-visible:border-accent"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="rounded-xl bg-accent px-3.5 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-40"
            >
              전송
            </button>
          </div>
        </div>
      )}
    </>
  );
}
