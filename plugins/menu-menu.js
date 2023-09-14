import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const номерuser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *★JoKeR★* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Привет, ${номерuser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Создатель:* ZloiAdmiN
║➤ *Номер создателя:* wa.me/79524197466
║➤ *Дата:* ${date}
║➤ *Время активности бота:* ${uptime}
║➤ *Пользователей:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< Информация о пользователе/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Уровень:* ${level}
┣ *🧰 Опыт:* ${exp}
┣ *⚓ Статус:* ${role}
┣ *💎 Бриллиантов:* ${limit}
┣ *👾 JoKeRмонет:* ${money}
┣ *🪙 Токенов:* ${joincount}
┣ *🎟️ Премиум:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛
${readMore}


┏━━━━━━━━━━━━━━━━┓
┃ *< Приколы />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}fake *<ваш текст1> <@номер> <ваш текст2>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituto *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}prostituta *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}gay2 *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}lesbiana *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajero *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pajera *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}puto *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}puta *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manco *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}manca *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}rata *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}love *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}doxear *<nombre / @номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}pregunta *<ваш текст>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}suitpvp *<@номер>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}slot *<apuesta>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}delttt_
┣ ඬ⃟ 🎖️ _${usedPrefix}acertijo_
┣ ඬ⃟ 🎖️ _${usedPrefix}simi *<ваш текст>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}top *<ваш текст>*_
┣ ඬ⃟ 🎖️ _${usedPrefix}topgays_
┣ ඬ⃟ 🎖️ _${usedPrefix}topotakus_
┣ ඬ⃟ 🎖️ _${usedPrefix}formarpareja_
┣ ඬ⃟ 🎖️ _${usedPrefix}verdad_
┣ ඬ⃟ 🎖️ _${usedPrefix}reto_
┣ ඬ⃟ 🎖️ _${usedPrefix}cancion_
┣ ඬ⃟ 🎖️ _${usedPrefix}pista_
┣ ඬ⃟ 🎖️ _${usedPrefix}akinator_
┣ ඬ⃟ 🎖️ _${usedPrefix}wordfind_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< Включение/отключение опций бота />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _${usedPrefix}включить *приветствие*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *18+*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *18+*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антиссылка*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антиссылка2*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *изменения*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *изменения*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *аудио*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *аудио*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *автостикер*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *автостикер*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антираз*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антираз*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антимат*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антимат*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антивирус*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антивирус*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антиараб*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антиараб*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *толькоадмины*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *толькоадмины*_
┣ ඬ⃟ ☑️ _${usedPrefix}включить *антиудаление*_
┣ ඬ⃟ ☑️ _${usedPrefix}выключить *антиудаление*_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< Скачивание медиа/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃

┣ ඬ⃟ 📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}tiktokimg *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}videodoc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}dapk2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _${usedPrefix}песня *<Исполнитель Название>*_
┣ ඬ⃟ 📥 _${usedPrefix}play2 *<ваш текст>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.1 *<ваш текст>*_
┣ ඬ⃟ 📥 _${usedPrefix}play.2 *<ваш текст>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< Поиск />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃

┣ ඬ⃟ 🔍 _${usedPrefix}pelisplus *<ваш текст>*_
┣ ඬ⃟ 🔍 _${usedPrefix}modapk *<ваш текст>*_
┣ ඬ⃟ 🔍 _${usedPrefix}google *<ваш текст>*_
┣ ඬ⃟ 🔍 _${usedPrefix}letra *<ваш текст>*_
┣ ඬ⃟ 🔍 _${usedPrefix}wikipedia *<ваш текст>*_
┣ ඬ⃟ 🔍 _${usedPrefix}ytsearch *<ваш текст>*_
┣ ඬ⃟ 🔍 _${usedPrefix}playstore *<ваш текст>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< Команды для группы />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _${usedPrefix}добавить *<номер без +>*_
┣ ඬ⃟ 💎 _${usedPrefix}снести *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}удалить *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}группу *<открыть / закрыть>*_
┣ ඬ⃟ 💎 _${usedPrefix}датьадмина *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}снятьадмина *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}админы *<ваш текст>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _${usedPrefix}инфогруппы
┣ ඬ⃟ 💎 _${usedPrefix}сброситьссылку
┣ ඬ⃟ 💎 _${usedPrefix}ссылка
┣ ඬ⃟ 💎 _${usedPrefix}изменитьназвание *<ваш текст>*_
┣ ඬ⃟ 💎 _${usedPrefix}изменитьописание *<ваш текст>*_
┣ ඬ⃟ 💎 _${usedPrefix}нарушение *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}снятьнарушение *<@номер>*_
┣ ඬ⃟ 💎 _${usedPrefix}списокнарушителей
┣ ඬ⃟ 💎 _${usedPrefix}призраки
┣ ඬ⃟ 💎 _${usedPrefix}важно
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< Конвертер />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _${usedPrefix}toanime *<imagen>*_
┣ ඬ⃟ 🧧 _${usedPrefix}togifaud *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toimg *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<video>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _${usedPrefix}toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts *<idioma> <ваш текст>*_
┣ ඬ⃟ 🧧 _${usedPrefix}tts *<efecto> <ваш текст>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< Эффекты и логотипы />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _${usedPrefix}logos *<efecto> <ваш текст>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logochristmas *<ваш текст>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}logocorazon *<ваш текст>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}ytcomment *<ваш текст>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}hornycard *<@номер>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}simpcard *<@номер>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}lolice *<@номер>*_
┣ ඬ⃟ 🖍️ _${usedPrefix}itssostupid_
┣ ඬ⃟ 🖍️ _${usedPrefix}pixelar_
┣ ඬ⃟ 🖍️ _${usedPrefix}blur_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< Рандомно />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _${usedPrefix}cristianoronaldo_
┣ ඬ⃟ 👾 _${usedPrefix}messi_
┣ ඬ⃟ 👾 _${usedPrefix}cat_
┣ ඬ⃟ 👾 _${usedPrefix}dog_
┣ ඬ⃟ 👾 _${usedPrefix}meme_
┣ ඬ⃟ 👾 _${usedPrefix}itzy_
┣ ඬ⃟ 👾 _${usedPrefix}blackpink_
┣ ඬ⃟ 👾 _${usedPrefix}navidad_
┣ ඬ⃟ 👾 _${usedPrefix}wpmontaña_
┣ ඬ⃟ 👾 _${usedPrefix}pubg_
┣ ඬ⃟ 👾 _${usedPrefix}wpgaming_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic_
┣ ඬ⃟ 👾 _${usedPrefix}wpaesthetic2_
┣ ඬ⃟ 👾 _${usedPrefix}wprandom_
┣ ඬ⃟ 👾 _${usedPrefix}wallhp_
┣ ඬ⃟ 👾 _${usedPrefix}wpvehiculo_
┣ ඬ⃟ 👾 _${usedPrefix}wpmoto_
┣ ඬ⃟ 👾 _${usedPrefix}coffee_
┣ ඬ⃟ 👾 _${usedPrefix}pentol_
┣ ඬ⃟ 👾 _${usedPrefix}caricatura_
┣ ඬ⃟ 👾 _${usedPrefix}ciberespacio_
┣ ඬ⃟ 👾 _${usedPrefix}technology_
┣ ඬ⃟ 👾 _${usedPrefix}doraemon_
┣ ඬ⃟ 👾 _${usedPrefix}hacker_
┣ ඬ⃟ 👾 _${usedPrefix}planeta_
┣ ඬ⃟ 👾 _${usedPrefix}randomprofile_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< Аудиоэффекты к голосовым сообщениям />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _${usedPrefix}bass_
┣ ඬ⃟ 🎤 _${usedPrefix}blown_
┣ ඬ⃟ 🎤 _${usedPrefix}deep_
┣ ඬ⃟ 🎤 _${usedPrefix}earrape_
┣ ඬ⃟ 🎤 _${usedPrefix}fast_
┣ ඬ⃟ 🎤 _${usedPrefix}fat_
┣ ඬ⃟ 🎤 _${usedPrefix}nightcore_
┣ ඬ⃟ 🎤 _${usedPrefix}reverse_
┣ ඬ⃟ 🎤 _${usedPrefix}robot_
┣ ඬ⃟ 🎤 _${usedPrefix}slow_
┣ ඬ⃟ 🎤 _${usedPrefix}smooth_
┣ ඬ⃟ 🎤 _${usedPrefix}tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 _${usedPrefix}start_
┣ ඬ⃟ 📳 _${usedPrefix}next_
┣ ඬ⃟ 📳 _${usedPrefix}leave_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 _${usedPrefix}menuаудио_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _${usedPrefix}chatgpt *<ваш текст>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}delchatgpt
┣ ඬ⃟ 🛠️ _${usedPrefix}gptvoz *<ваш текст>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}dall-e *<ваш текст>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}spamwa *<numero|ваш текст|cantidad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readviewonce *<imagen / video>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}encuesta *<ваш текст1|ваш текст2...>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}afk *<motivo>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}hd *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}del *<mensaje>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}qrcode *<ваш текст>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}readmore *<ваш текст1| ваш текст2>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}styletext *<ваш текст>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}traducir *<ваш текст>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}nowa *<numero>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}covid *<pais>*_
┣ ඬ⃟ 🛠️ _${usedPrefix}horario_
┣ ඬ⃟ 🛠️ _${usedPrefix}dropmail_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 _${usedPrefix}adventure_
┣ ඬ⃟ 💵 _${usedPrefix}cazar_
┣ ඬ⃟ 💵 _${usedPrefix}cofre_
┣ ඬ⃟ 💵 _${usedPrefix}balance_
┣ ඬ⃟ 💵 _${usedPrefix}claim_
┣ ඬ⃟ 💵 _${usedPrefix}heal_
┣ ඬ⃟ 💵 _${usedPrefix}lb_
┣ ඬ⃟ 💵 _${usedPrefix}levelup_
┣ ඬ⃟ 💵 _${usedPrefix}myns_
┣ ඬ⃟ 💵 _${usedPrefix}perfil_
┣ ඬ⃟ 💵 _${usedPrefix}work_
┣ ඬ⃟ 💵 _${usedPrefix}minar_
┣ ඬ⃟ 💵 _${usedPrefix}minar2_
┣ ඬ⃟ 💵 _${usedPrefix}buy_
┣ ඬ⃟ 💵 _${usedPrefix}buyall_
┣ ඬ⃟ 💵 _${usedPrefix}verificar_
┣ ඬ⃟ 💵 _${usedPrefix}robar *<cantidad> <@номер>*_
┣ ඬ⃟ 💵 _${usedPrefix}transfer *<tipo> <cantidad> <@номер>*_
┣ ඬ⃟ 💵 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< Создание стикеров />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker2 *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}sticker2 *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}s *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}s2 *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _${usedPrefix}s2 *<enlace / link / url>*_
┣ ඬ⃟ 👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _${usedPrefix}scircle *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _${usedPrefix}qc *<ваш текст>*_
┣ ඬ⃟ 👽 _${usedPrefix}attp3 *<ваш текст>*_
┣ ඬ⃟ 👽 _${usedPrefix}pat *<@номер>*_
┣ ඬ⃟ 👽 _${usedPrefix}slap *<@номер>*_
┣ ඬ⃟ 👽 _${usedPrefix}kiss *<@номер>*_
┣ ඬ⃟ 👽 _${usedPrefix}dado_
┣ ඬ⃟ 👽 _${usedPrefix}wm *<packname> <author>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _${usedPrefix}cartoon *<responder a imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _${usedPrefix}setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _${usedPrefix}desactivarwa *<numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}resetprefix_
┣ ඬ⃟ 👑 _${usedPrefix}autoadmin_
┣ ඬ⃟ 👑 _${usedPrefix}chetar_
┣ ඬ⃟ 👑 _${usedPrefix}leavegc_
┣ ඬ⃟ 👑 _${usedPrefix}cajafuerte_
┣ ඬ⃟ 👑 _${usedPrefix}blocklist_
┣ ඬ⃟ 👑 _${usedPrefix}block *<@номер / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}unblock *<@номер / numero>*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *restrict*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *autoread*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *public*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *public*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *pconly*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *gconly*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *anticall*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *antiprivado*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *modejadibot*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *modejadibot*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *аудио_bot*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *аудио_bot*_
┣ ඬ⃟ 👑 _${usedPrefix}включить *antispam*_
┣ ඬ⃟ 👑 _${usedPrefix}выключить *antispam*_
┣ ඬ⃟ 👑 _${usedPrefix}msg *<ваш текст>*_
┣ ඬ⃟ 👑 _${usedPrefix}banchat_
┣ ඬ⃟ 👑 _${usedPrefix}unbanchat_
┣ ඬ⃟ 👑 _${usedPrefix}resetuser *<@номер>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@номер>*_
┣ ඬ⃟ 👑 _${usedPrefix}unbanuser *<@номер>*_
┣ ඬ⃟ 👑 _${usedPrefix}dardiamantes *<@номер> <cantidad>*_
┣ ඬ⃟ 👑 _${usedPrefix}añadirxp *<@номер> <cantidad>*_
┣ ඬ⃟ 👑 _${usedPrefix}banuser *<@номер>*_
┣ ඬ⃟ 👑 _${usedPrefix}bc *<ваш текст>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcchats *<ваш текст>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc *<ваш текст>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<audio>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<video>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcgc2 *<imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}bcbot *<ваш текст>*_
┣ ඬ⃟ 👑 _${usedPrefix}cleartpm_
┣ ඬ⃟ 👑 _${usedPrefix}restart_
┣ ඬ⃟ 👑 _${usedPrefix}update_
┣ ඬ⃟ 👑 _${usedPrefix}banlist_
┣ ඬ⃟ 👑 _${usedPrefix}addprem *<@номер> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem2 *<@номер> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem3 *<@номер> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}addprem4 *<@номер> <tiempo>*_
┣ ඬ⃟ 👑 _${usedPrefix}delprem *<@номер>*_
┣ ඬ⃟ 👑 _${usedPrefix}listcmd_
┣ ඬ⃟ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}addcmd *<ваш текст> <responder a sticker/imagen>*_
┣ ඬ⃟ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o ваш текст asignado>*_
┣ ඬ⃟ 👑 _${usedPrefix}saveimage
┣ ඬ⃟ 👑 _${usedPrefix}viewimage
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(менюшка|список|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
