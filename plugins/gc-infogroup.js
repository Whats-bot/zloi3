const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 Информация о группе 」*\n
*Идентефикатор группы:* 
${groupMetadata.id}

*Номер:* 
${groupMetadata.subject}

*Описание:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*Всего участников:*
${participants.length} Participantes

*Создатель группы:* 
@${owner.split('@')[0]}

*Админский состав:*
${listAdmin}

*Включенные опции в группе:*
—◉ Приветствие: ${welcome ? '✅' : '❌'}
—◉ Изменения: ${detect ? '✅' : '❌'} 
—◉ Изменения 2: ${detect2 ? '✅' : '❌'} 
—◉ Антиссылка: ${antiLink ? '✅' : '❌'} 
—◉ Антиссылка 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ 18+: ${modohorny ? '✅' : '❌'} 
—◉ Автостикер: ${autosticker ? '✅' : '❌'} 
—◉ Аудио: ${audios ? '✅' : '❌'} 
—◉ Антираз: ${antiviewonce ? '✅' : '❌'} 
—◉ Антиудаление: ${antidelete ? '✅' : '❌'} 
—◉ Антимат: ${antiToxic ? '✅' : '❌'} 
—◉ Антивирус: ${antiTraba ? '✅' : '❌'} 
—◉ Толькоадмины: ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|инфогруппы))$/i;
handler.group = true;
export default handler;
