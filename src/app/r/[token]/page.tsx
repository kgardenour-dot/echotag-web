import { supabase } from "@/lib/supabaseClient";

import ReplyClient from "./ReplyClient";

type TokenParams = {
  params: Promise<{ token: string }>;
};

export default async function ReplyPage({ params }: TokenParams) {
  const { token } = await params;

  console.log("Server token param:", token);

  // 1) Look up the token row
  const {
    data: tokenRow,
    error: tokenError,
  } = await supabase
    .from("reply_tokens")
    .select("token, used, expires_at, echo_id")
    .eq("token", token)
    .maybeSingle();

  console.log("Reply token row:", tokenRow, tokenError);

  if (tokenError || !tokenRow) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-sm text-center">
          <h1 className="text-xl font-semibold mb-2 text-warmOffWhite">Link not found</h1>
          <p className="text-sm text-warmOffWhite/80">
            This Echotag reply link is invalid or has expired. You can ask the
            sender to send a new one.
          </p>
        </div>
      </main>
    );
  }

  const expired =
    !!tokenRow.expires_at &&
    new Date(tokenRow.expires_at as string).getTime() < Date.now();

  if (tokenRow.used || expired) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-sm text-center">
          <h1 className="text-xl font-semibold mb-2 text-warmOffWhite">This echo is closed</h1>
          <p className="text-sm text-warmOffWhite/80">
            This reply link has already been used or has expired. If you still
            want to respond, just let the person who sent it know.
          </p>
        </div>
      </main>
    );
  }

  // 2) Look up the echo itself
  const {
    data: echo,
    error: echoError,
  } = await supabase
    .from("echoes")
    .select("id, prompt_text, kind, message_text, audio_url, created_at")
    .eq("id", tokenRow.echo_id)
    .maybeSingle();

  console.log("Echo row:", echo, echoError);

  if (echoError || !echo) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-sm text-center">
          <h1 className="text-xl font-semibold mb-2 text-warmOffWhite">Link not found</h1>
          <p className="text-sm text-warmOffWhite/80">
            This Echotag reply link is invalid or has expired. You can ask the
            sender to send a new one.
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

