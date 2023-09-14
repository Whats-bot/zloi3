/* Creditos a https://github.com/ALBERTO9883 */

const handler = async (m, {conn}) => {
  const revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `🔹️ *_Ссылка группы сброшена._*\n♾ • Новая ссылка: ${'https://chat.whatsapp.com/' + revoke}`, m);
};
handler.command = ['resetlink', 'сброситьссылку'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;
