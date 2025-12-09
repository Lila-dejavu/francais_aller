"""
法文學習遊戲 - 主程式
整合所有遊戲模式的主要入口
"""

from game_modes import (
    GameManager, 
    FlashCardGame, 
    MultipleChoiceGame, 
    SpeedChallengeGame,
    TypingGame,
    MemoryMatchGame,
    Difficulty
)
from word_database import WordDatabase


def main():
    """主程式"""
    print("\n" + "="*60)
    print("🇫🇷 歡迎來到法文學習遊戲中心！ 🇫🇷")
    print("="*60)
    
    # 初始化單字資料庫
    db = WordDatabase()
    
    # 選擇學習範圍
    print("\n請選擇學習範圍：")
    print("0. 所有單字")
    categories = db.get_categories()
    for idx, category in enumerate(categories, 1):
        word_count = len(db.get_words_by_category(category))
        print(f"{idx}. {category} ({word_count} 個單字)")
    
    choice = input("\n請選擇 (0-%d): " % len(categories)).strip()
    
    if choice == '0':
        selected_words = db.get_all_words()
        print(f"\n✓ 已選擇所有單字 (共 {len(selected_words)} 個)")
    elif choice.isdigit() and 1 <= int(choice) <= len(categories):
        category = categories[int(choice) - 1]
        selected_words = db.get_words_by_category(category)
        print(f"\n✓ 已選擇 {category} 類別 (共 {len(selected_words)} 個單字)")
    else:
        print("無效的選擇，使用所有單字")
        selected_words = db.get_all_words()
    
    if not selected_words:
        print("❌ 沒有可用的單字")
        return
    
    # 啟動遊戲管理器
    manager = GameManager(selected_words)
    manager.run()


if __name__ == "__main__":
    main()
