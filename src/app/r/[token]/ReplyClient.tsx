"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type EchoInfo = {
  id: string;
  prompt_text: string | null;
  kind: string;
  message_text: string | null;
  audio_url: string | null;
  created_at: string;
};

export default function ReplyClient({
  token,
  echo,
}: {
  token: string;
  echo: EchoInfo;
}) {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedDate = new Date(echo.created_at).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSubmitting(true);
    setError(null);

    const { error } = await supabase.rpc("submit_reply", {
      p_token: token,
      p_kind: "text",
      p_message_text: message.trim(),
      p_audio_url: null,
    });

    if (error) {
      console.error(error);
      setError("We couldn't send your reply. Please try again.");
      setSubmitting(false);
      return;
    }

    setDone(true);
    setSubmitting(false);
  };

  if (done) {
    return (
      <div className="max-w-md w-full bg-slateSoft/80 border border-white/10 rounded-2xl p-6 shadow-soft-card text-center">
        <h1 className="text-xl font-semibold mb-2">Reply sent</h1>
        <p className="text-sm text-textMuted mb-4">
          Your response has been delivered. You can close this tab whenever
          you're ready.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full bg-slateSoft/80 border border-white/10 rounded-2xl p-6 shadow-soft-card">
      <div className="text-xs uppercase tracking-[0.2em] text-textMuted/70 mb-1">
        Echotag reply
      </div>
      <h1 className="text-lg font-semibold mb-1">Someone sent you an echo</h1>
      <p className="text-[11px] text-textMuted mb-4">
        Received around {formattedDate}
      </p>

      {echo.prompt_text && (
        <div className="mb-4 rounded-xl bg-nightSoft/80 border border-white/8 p-3">
          <div className="text-[11px] text-textMuted/80 mb-1">
            Prompt
          </div>
          <div className="text-sm text-textMain">
            {echo.prompt_text}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <label className="block text-xs text-textMuted mb-1.5">
          Your reply
        </label>
        <textarea
          className="w-full rounded-xl bg-nightSoft border border-white/12 px-3 py-2 text-sm text-textMain outline-none focus:border-honey/70 min-h-[96px] resize-vertical"
          placeholder="Type a short reply. Only the person who sent this echo will see it."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={submitting}
        />

        {error && (
          <p className="text-xs text-red-300">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting || !message.trim()}
          className="mt-1 w-full rounded-full bg-honey text-black text-sm font-medium py-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send reply"}
        </button>

        <p className="text-[10px] text-textMuted/70 mt-1">
          You don't need to create an account to reply. By replying, you give
          the sender permission to keep a copy of your message inside Echotag.
        </p>
      </form>
    </div>
  );
}

