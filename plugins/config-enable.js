const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `*Опция:* ✨ | Приветствие
*Comando:* ${usedPrefix + command} приветствие
*Описание:* Приветствие в группе)

--------------------------------

*Опция:* 🌎 | MODO PUBLICO
*Comando:* ${usedPrefix + command} public
*Описание:* Бот становится общедоступным и/или частным.
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* 🥵 | 18+
*Comando:* ${usedPrefix + command} 18+
*Описание:* Включает или выключает команды +18 в группе.

--------------------------------

*Опция:* 🔗 | АНТИССЫЛКА
*Comando:* ${usedPrefix + command} антиссылка
*Описание:* Включите или выключите функцию защиты от ссылок в WhatsApp.
*Nota:* Бот должен быть админом в группе.

--------------------------------

*Опция:* 🔗 | ANTILINK 2
*Comando:* ${usedPrefix + command} antilink2
*Описание:* Включите или выключите функцию защиты от ссылок, которые начинаются по протоколу HTTPS.
*Nota:* Бот должен быть админом в группе.

--------------------------------

*Опция:* 🔎 | Изменения
*Comando:* ${usedPrefix + command} изменения
*Описание:* Включает или отключает уведомления об изменениях в группе.

--------------------------------

*Опция:* 🔎 | Изменения 2
*Comando:* ${usedPrefix + command} изменения2
*Описание:* Обнаруживает изменения в группе и поддерживает улучшенный функционал.

--------------------------------

*Опция:* ❗ | Бот Админ
*Comando:* ${usedPrefix + command} ботадмин
*Описание:* Включает или отключает ограничения бота, такие как удаление или добавление людей в группу.
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* ☑️ | Авточтение
*Comando:* ${usedPrefix + command} авточтение
*Описание:* Сообщения и статусы автоматически помечаются как прочитанные.
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* 🔊 | Аудио
*Comando:* ${usedPrefix + command} аудио
*Описание:* Включает или выключает команды для аудио без префиксов в группе.
--------------------------------

*Опция:* 👾 | Автостикер
*Comando:* ${usedPrefix + command} автостикер
*Описание:* Все изображения или видео, отправленные в группе, бот делает стикерами.
--------------------------------

*Опция:* 💬 | Личка
*Comando:* ${usedPrefix + command} личка
*Описание:* Бот будет отвечать на команды только в том случае, если это приватный чат.
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* 🏢 | Группа
*Comando:* ${usedPrefix + command} группа
*Описание:* Бот будет отвечать на команды только в группе.
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* ❌ | Антираз
*Comando:* ${usedPrefix + command} антираз
*Описание:* Изображения, отправленные для просмотра только один раз, всегда пересылаются ботом в группу.

--------------------------------

*Опция:* 📵 | Антизвонок
*Comando:* ${usedPrefix + command} антизвонок
*Описание:* Бот заблокирует людей, которые звонят Боту.
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* 💬 | Антиличка
*Comando:* ${usedPrefix + command} антиличка
*Описание:* Бот заблокирует людей, которые пишут в личку боту.
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* 🤬 | Антимат
*Comando:* ${usedPrefix + command} антимат
*Описание:* Бот обнаруживает нецензурную лексику и предупреждает участника группы, прежде чем его удалят.
*Nota:* Бот должен быть админом в группе.

--------------------------------

*Опция:* 🕸️ | Антивирус
*Comando:* ${usedPrefix + command} антивирус
*Описание:* Бот обнаруживает длинные тексты, которые могут быть вирусами и вызывать задержку в чате, и удаляет пользователя.
*Nota:* Бот должен быть админом в группе.

--------------------------------

*Опция:* 👎 | Антиараб
*Comando:* ${usedPrefix + command} антиараб
*Описание:* Если к группе присоединяется арабский номер, бот автоматически удаляет его.
*Nota:* Необходимо, чтобы были активны ПРИВЕТСТВИЕ и БОТАДМИН.

--------------------------------

*Опция:* 👎 | Антиараб 2
*Comando:* ${usedPrefix + command} антиараб2
*Описание:* Si un numero árabe escribe en el grupo, el Bot lo elimina automaticamente.
*Nota:* Бот должен быть админом в группе.

--------------------------------

*Опция:* 🤖 | Допбот
*Comando:* ${usedPrefix + command} допбот
*Описание:* Включите или выключите использование команды для дополнительных ботов (${usedPrefix}serbot / ${usedPrefix}jadibot).
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* 👑 | Только админы
*Comando:* ${usedPrefix + command} толькоадмины
*Описание:* Бот будет отвечать только администраторам группы.

--------------------------------

*Опция:* 😃 | SIMSIMI
*Comando:* ${usedPrefix + command} simsimi
*Описание:* Бот начнет отвечать на сообщения, используя искусственный интеллект SimSimi.

--------------------------------

*Опция:* ⏳ | Антиспам
*Comando:* ${usedPrefix + command} антиспам
*Описание:* Бот обнаруживает, когда пользователь рассылает командный спам, блокирует его на 5 секунд и предупреждает об этом.
*Nota:* Эта команда может использоваться только владельцами бота.

--------------------------------

*Опция:* 🛡️ | Антиудаление
*Comando:* ${usedPrefix + command} антиудаление
*Описание:* Бот определяет, когда пользователь удаляет сообщение, и пересылает его повторно в личные сообщения пользователя.

--------------------------------

*Опция:* 🔊 | Аудиобот
*Comando:* ${usedPrefix + command} аудиобот
*Описание:* Для всех приватных чатов отключены аудиозаписи бота из меню аудиофайлов.
*Nota:* Эта команда может использоваться только владельцами бота.`.trim();

  const isEnable = /включить|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'приветствие':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'изменения':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'изменения2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'антипорно':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'удаление':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'антиудаление':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'публичный':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'антиссылка':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'антиссылка2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'антираз':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case '18+':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'толькоадмины':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'автостикер':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'аудио':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'ботадмин':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'аудиобот':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      global.opts['autoread'] = isEnable;
      break;
    case 'личка':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'группа':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'антизвонок':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'антиличка':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'антиспам':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'антимат':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'антивирус':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'антиараб':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'антиараб2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🗂️ Опция: ${type}\n🎚️ Статус: ${isEnable ? 'Включена' : 'Выключена'}\n📣 Для: ${isAll ? 'Бота' : isUser ? '' : 'Группы'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(вкл|выкл)ючить|(turn)?[01])$/i;
export default handler;
