const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*[❗] В группе нет неактивных участников :D*`, m);
  m.reply(`*[ ⚠ Список неактивных участников ⚠ ]*\n\n*Группа:* ${await conn.getName(m.chat)}\n*Список пользователей:* ${sum}\n\n*[ 👻 Список призраков 👻 ]*\n${sider.map((v) => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*Внимание: Информация не 𝟷𝟶𝟶%, бот ведет подсчет после своего вступления в группу!*`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|fantasmas|призраки)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
