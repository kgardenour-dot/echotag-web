import { supabase } from "@/lib/supabaseClient";

import ReplyClient from "./ReplyClient";

type Props = {
  params: { token: string };
};

export default async function ReplyPage({ params }: Props) {
  const token = params.token;

  const { data, error } = await supabase
    .from("reply_tokens")
    .select(
      `
      token,
      used,
      expires_at,
      echo:echoes (
        id,
        prompt_text,
        kind,
        message_text,
        audio_url,
        created_at
      )
    `
    )
    .eq("token", token)
    .maybeSingle();

  if (error || !data || !data.echo) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-sm text-center">
          <h1 className="text-xl font-semibold mb-2">Link not found</h1>
          <p className="text-sm text-textMuted">
            This Echotag reply link is invalid or has expired. You can ask the sender
            to send a new one.
          </p>
        </div>
      </main>
    );
  }

  const { echo, used, expires_at } = data;

  const expired =
    !!expires_at && new Date(expires_at).getTime() < Date.now();

  if (used || expired) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-sm text-center">
          <h1 className="text-xl font-semibold mb-2">This echo is closed</h1>
          <p className="text-sm text-textMuted">
            This reply link has already been used or has expired. If you still
            want to respond, just let the person who sent it know.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <ReplyClient token={token} echo={echo} />
    </main>
  );
}

