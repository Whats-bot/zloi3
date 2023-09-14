const handler = async (m, {conn, participants, groupMetadata, args}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const pesan = args.join` `;
  const oi = `*Сообщение:* ${pesan}`;
  const text = `*━「* Админский состав *」━*

${oi}

*𝙰𝙳𝙼𝙸𝙽𝚂:*
${listAdmin}

*[ ⚠ ️] 𝚄𝚂𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝙲𝚄𝙰𝙽𝙳𝙾 𝚂𝙴 𝚃𝚁𝙰𝚃𝙴 𝙳𝙴 𝚄𝙽𝙰 𝙴𝙼𝙴𝚁𝙶𝙴𝙽𝙲𝙸𝙰!!*`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['admins <texto>'];
handler.tags = ['group'];
// regex detect A word without case sensitive
handler.customPrefix = /a|@/i;
handler.command = /^(admins|@admins|админы)$/i;
handler.group = true;
export default handler;
