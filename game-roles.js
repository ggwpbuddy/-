/**
 * ГГВП — Роли по играм
 * ─────────────────────────────────────────────
 * Редактируй этот файл как угодно:
 *  - Добавляй/убирай игры
 *  - Меняй названия ролей
 *  - Добавляй новые роли
 *
 * Структура:
 *   "Название игры": ["Роль 1", "Роль 2", ...]
 *
 * Пользователь всегда может ввести свою роль вручную
 * (поле ввода всегда доступно под списком).
 * ─────────────────────────────────────────────
 */

const GAME_ROLES = {
  "Valorant": [
    "Duelist",
    "Sentinel",
    "Controller",
    "Initiator",
    "IGL (капитан)",
    "Entry Fragger",
    "Support",
    "Lurker",
  ],
  "CS2": [
    "Entry Fragger",
    "AWPer",
    "Rifler",
    "IGL (капитан)",
    "Support",
    "Lurker",
    "Secondary AWP",
    "Clutcher",
  ],
  "Dota 2": [
    "Pos 1 (Carry)",
    "Pos 2 (Мид)",
    "Pos 3 (Оффлейн)",
    "Pos 4 (Поддержка)",
    "Pos 5 (Хард Саппорт)",
    "Ganker",
    "Initiator",
    "Pusher",
  ],
  "League of Legends": [
    "Top (Топ)",
    "Jungle (Лес)",
    "Mid (Мид)",
    "ADC (Бот)",
    "Support (Саппорт)",
    "Flex",
    "Tank",
    "AP Carry",
  ],
  "Apex Legends": [
    "Fragger (Убийца)",
    "Support (Поддержка)",
    "Scout (Разведчик)",
    "IGL (Лидер)",
    "Wraith Main",
    "Lifeline Main",
    "Pathfinder Main",
    "Horizon Main",
  ],
  "Overwatch 2": [
    "Tank",
    "DPS (Damage)",
    "Support (Healer)",
    "Flex",
    "Tracer Main",
    "Reinhardt Main",
    "Ana Main",
    "Lucio Main",
  ],
  "Fortnite": [
    "Fragger",
    "Builder (Строитель)",
    "IGL (Лидер)",
    "Support",
    "Sniper",
    "Rusher",
  ],
  "PUBG": [
    "Fragger",
    "Sniper",
    "Driver (Водитель)",
    "Fragger / Entry",
    "Support",
    "IGL (Лидер)",
  ],
  "Rust": [
    "Raider (Рейдер)",
    "Builder (Строитель)",
    "Farmer (Фармер)",
    "PVP Fighter",
    "Scout (Разведчик)",
    "Crafter (Крафтер)",
  ],
  "Minecraft": [
    "Builder (Строитель)",
    "Redstoner",
    "PVP Fighter",
    "Farmer (Фармер)",
    "Explorer (Исследователь)",
    "Admin / Организатор",
  ],
};

// НЕ ТРОГАЙ ЭТУ СТРОКУ — она нужна для загрузки в приложение
if (typeof module !== 'undefined') module.exports = { GAME_ROLES };
