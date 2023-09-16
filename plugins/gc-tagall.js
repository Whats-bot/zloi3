const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', 'owner', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*Сообщение:* ${pesan}`;
  let teks = `*⺀𝙸 ВНИМАНИЕ ГРУППА⺀*\n\n❏ ${oi}\n\n❏ *УЧАСТНИКИ:*\n`;
  for (const mem of participants) {
    teks += `┣➥ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* JoKeR\n\n*▌│█║▌║▌║║▌║▌║▌║█*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|внимание|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
