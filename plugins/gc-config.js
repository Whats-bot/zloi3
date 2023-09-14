const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'открыть': 'not_announcement',
    'закрыть': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
*[❗] Настройки группы!*

*┏━━━❲ ✨Пример✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} открыть*
*┠┉↯ ${usedPrefix + command} закрыть*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('*[ ✔ ] Настройки группы изменены*');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|группу)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
