import { supabase } from "@/lib/supabaseClient";

import ReplyClient from "./ReplyClient";

type Props = {
  params: { token: string };
};

type TokenRow = {
  token: string;
  used: boolean;
  expires_at: string | null;
  echo_id: string;
};

type EchoRow = {
  id: string;
  prompt_text: string | null;
  kind: string;
  message_text: string | null;
  audio_url: string | null;
  created_at: string;
};

export default async function ReplyPage({ params }: Props) {
  const token = params.token;

  // Step 1: Get the reply token row by token
  const { data: tokenRow, error: tokenError } = await supabase
    .from("reply_tokens")
    .select("token, used, expires_at, echo_id")
    .eq("token", token)
    .maybeSingle();

  console.log("Reply token row", tokenRow);

  if (tokenError || !tokenRow) {
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

  // Step 2: Check if the token is used or expired
  const expired =
    tokenRow.expires_at !== null &&
    new Date(tokenRow.expires_at).getTime() < Date.now();

  if (tokenRow.used || expired) {
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

  // Step 3: Fetch the echo row
  const { data: echo, error: echoError } = await supabase
    .from("echoes")
    .select("id, prompt_text, kind, message_text, audio_url, created_at")
    .eq("id", tokenRow.echo_id)
    .maybeSingle();

  console.log("Echo row", echo);

  if (echoError || !echo) {
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

  // Step 4: Render ReplyClient
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <ReplyClient token={token} echo={echo} />
    </main>
  );
}

