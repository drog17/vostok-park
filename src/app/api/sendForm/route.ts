import { NextResponse } from "next/server";

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

function generateId() {
  const now = new Date();
  const datePart = now.toISOString().split("T")[0].replace(/-/g, "");
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `REQ-${datePart}-${randomPart}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, direction, agree } = body;
    if (!name || !phone || !direction) {
      return NextResponse.json(
        { ok: false, error: "Не все поля заполнены" },
        { status: 400 }
      );
    }
    const requestId = generateId();
    const text = `
📦 Новая заявка
🆔 ID: <b>${requestId}</b>

👤 ФИО: ${name}
📞 Телефон: ${phone}
🧭 Направление: ${direction}
✅ Согласие: ${agree ? "Да" : "Нет"}
    `;
    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );
    const data = await res.json();
    console.log("Telegram API:", data);
    if (!data.ok) throw new Error(data.description);

    return NextResponse.json({ ok: true, id: requestId });
  } catch (err: any) {
    console.error("Ошибка:", err.message);
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
